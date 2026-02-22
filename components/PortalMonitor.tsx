import React, { useState, useEffect } from 'react';
import { Activity, RefreshCw, CheckCircle, XCircle, Globe, ExternalLink, Wifi } from 'lucide-react';
import { subscribeToPortalMonitor } from '../services/firebase';
import { fetchPortalStatuses } from '../services/gasApi';

interface PortalStatus {
    id: string;
    name: string;
    url: string;
    status: 'online' | 'offline' | 'checking' | 'unknown';
    lastChecked?: Date;
    latency?: number;
    recruitmentStatus?: 'Open' | 'Closed' | 'Unknown';
    shortlistDetected?: boolean;
    error?: string;
    httpCode?: number;
}

interface PortalMonitorProps {
    portals: {
        id: string;
        name: string;
        url: string;
        status?: 'online' | 'offline' | 'checking' | 'unknown';
        latency?: number;
        error?: string;
        httpCode?: number;
    }[];
    useGasApi?: boolean;
}

const PortalMonitor: React.FC<PortalMonitorProps> = ({ portals }) => {
    const [statuses, setStatuses] = useState<PortalStatus[]>([]);
    const [isForceChecking, setIsForceChecking] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    useEffect(() => {
        // Build an initial list from props so the UI isn't empty while Firebase connects
        const initialStatuses = portals.map(p => ({
            id: p.id,
            name: p.name,
            url: p.url,
            status: p.status || 'unknown' as const,
            latency: p.latency,
            error: p.error,
            httpCode: p.httpCode
        }));
        setStatuses(initialStatuses);

        // Subscribe to real-time Firebase updates
        const unsubscribe = subscribeToPortalMonitor((firebasePortals) => {
            if (firebasePortals.length === 0) return;

            // Build a name->url map from props for enriching Firebase data
            const propMap: Record<string, { name: string; url: string }> = {};
            portals.forEach(p => { propMap[p.id] = { name: p.name, url: p.url }; });

            const updated: PortalStatus[] = firebasePortals.map((fp: any) => ({
                id: fp.id,
                name: propMap[fp.id]?.name || fp.name,
                url: fp.url || propMap[fp.id]?.url || '',
                status: fp.status as 'online' | 'offline',
                latency: fp.latency,
                recruitmentStatus: fp.recruitmentStatus,
                shortlistDetected: fp.shortlistDetected,
                httpCode: fp.httpCode,
                lastChecked: fp.lastChecked ? new Date(fp.lastChecked) : undefined,
                error: fp.error,
            }));

            setStatuses(updated);
            setIsLive(true);
            setLastUpdated(new Date());
        });

        return () => {
            unsubscribe();
        };
    }, [portals]);

    // Force a fresh check by triggering GAS to re-check all portals and write to Firebase.
    // Firebase onValue listener above will then automatically pick up the new data.
    const forceRefresh = async () => {
        try {
            setIsForceChecking(true);
            setStatuses(prev => prev.map(p => ({ ...p, status: 'checking' as const })));
            // This triggers GAS to do a live check and push new data to Firebase
            await fetchPortalStatuses(true);
            // The Firebase onValue listener will pick up results automatically
        } catch (error) {
            console.error('[PortalMonitor] Force refresh failed:', error);
        } finally {
            setIsForceChecking(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-gray-700" />
                    <h3 className="font-bold text-gray-800">System Status Monitor</h3>
                    {isLive && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                            <Wifi className="w-2.5 h-2.5" />
                            LIVE
                        </span>
                    )}
                </div>
                <button
                    onClick={forceRefresh}
                    disabled={isForceChecking}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50"
                    title="Force a fresh check from Google Apps Script"
                >
                    <RefreshCw className={`w-4 h-4 text-gray-600 ${isForceChecking ? 'animate-spin' : ''}`} />
                </button>
            </div>

            <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                {statuses.map((portal) => (
                    <div key={portal.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Globe className="w-8 h-8 text-gray-400 bg-gray-100 p-1.5 rounded-lg" />
                                <span className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white
                  ${portal.status === 'online' ? 'bg-green-500' :
                                        portal.status === 'offline' ? 'bg-red-500' :
                                            portal.status === 'checking' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'
                                    }`}
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 leading-tight">{portal.name}</h4>
                                {portal.url && (
                                    <a
                                        href={portal.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-gray-500 hover:text-military-blue hover:underline flex items-center gap-1 mt-0.5"
                                    >
                                        {new URL(portal.url).hostname}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                )}
                                {portal.recruitmentStatus && portal.recruitmentStatus !== 'Unknown' && (
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 inline-block
                                        ${portal.recruitmentStatus === 'Open'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-700'}`}>
                                        {portal.recruitmentStatus}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col items-end">
                            {portal.status === 'checking' ? (
                                <span className="text-xs text-yellow-600 font-medium">Pinging...</span>
                            ) : portal.status === 'online' ? (
                                <>
                                    <div className="flex items-center gap-1 text-green-700 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                        <CheckCircle className="w-3 h-3" />
                                        Operational
                                    </div>
                                    {portal.latency && (
                                        <span className="text-[10px] text-gray-400 mt-1">{portal.latency}ms</span>
                                    )}
                                </>
                            ) : portal.status === 'offline' ? (
                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-1 text-red-700 text-xs font-bold bg-red-50 px-2 py-0.5 rounded-full border border-red-100" title={portal.error}>
                                        <XCircle className="w-3 h-3" />
                                        {portal.httpCode ? `Error ${portal.httpCode}` : 'Unreachable'}
                                    </div>
                                </div>
                            ) : (
                                <span className="text-xs text-gray-400">Waiting...</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-2 bg-gray-50 text-[10px] text-gray-400 text-center border-t border-gray-100">
                {isLive
                    ? `⚡ Live via Firebase ${lastUpdated ? `· Last update ${lastUpdated.toLocaleTimeString()}` : ''}`
                    : 'Connecting to Firebase...'}
            </div>
        </div>
    );
};

export default PortalMonitor;
