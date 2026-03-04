import React from 'react';
import { Activity, Signal, SignalLow, SignalZero, Globe, Shield } from 'lucide-react';

interface Portal {
    id: string;
    name: string;
    url: string;
    status?: 'online' | 'offline' | 'unknown';
    latency?: number;
}

interface PortalMonitorProps {
    portals: Portal[];
}

const PortalMonitor: React.FC<PortalMonitorProps> = ({ portals }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-military-blue" />
                    Portal Status Monitor
                </h3>
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
            </div>

            <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                {portals.length === 0 ? (
                    <div className="p-8 text-center">
                        <Globe className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                        <p className="text-xs text-gray-400">No active portals to monitor</p>
                    </div>
                ) : (
                    portals.map((portal) => (
                        <div key={portal.id} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className={`p-1.5 rounded-md ${portal.status === 'online' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                        <Shield className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-900">{portal.name}</h4>
                                        <a
                                            href={portal.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] text-gray-400 hover:text-military-blue truncate block max-w-[120px]"
                                        >
                                            {portal.url.replace(/^https?:\/\//, '')}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${portal.status === 'online'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {portal.status?.toUpperCase() || 'UNKNOWN'}
                                    </span>
                                    {portal.latency && portal.status === 'online' && (
                                        <div className="flex items-center gap-1 mt-1">
                                            {portal.latency < 200 ? (
                                                <Signal className="w-3 h-3 text-green-500" />
                                            ) : portal.latency < 500 ? (
                                                <SignalLow className="w-3 h-3 text-yellow-500" />
                                            ) : (
                                                <SignalZero className="w-3 h-3 text-red-500" />
                                            )}
                                            <span className="text-[10px] font-medium text-gray-500">{portal.latency}ms</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mini Sparkline Simulation / Progress Bar */}
                            <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden mt-1">
                                <div
                                    className={`h-full transition-all duration-1000 ${portal.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}
                                    style={{ width: portal.status === 'online' ? '100%' : '15%' }}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                <p className="text-[9px] text-gray-400 font-medium">
                    Auto-refreshing every 60 seconds
                </p>
            </div>
        </div>
    );
};

export default PortalMonitor;
