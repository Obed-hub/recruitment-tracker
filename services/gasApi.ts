/**
 * Google Apps Script API Service
 * 
 * This service provides methods to interact with the deployed Google Apps Script
 * web app for portal monitoring.
 */

// Your deployed Google Apps Script web app URL
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzl0A6FuUSFezCX1o8FxfdJjhPtC1LTAizMiUblLXtno3lsa67Ku--1eI6JFQPODjuz8A/exec';

export interface PortalData {
    id: string;
    name: string;
    url: string;
    status: 'online' | 'offline';
    recruitmentStatus: 'Open' | 'Closed' | 'Unknown';
    shortlistDetected: boolean;
    latency: number;
    httpCode: number;
    lastChecked: string;
    error?: string;
}

export interface GASResponse {
    success: boolean;
    timestamp: string;
    data: Record<string, PortalData>;
}

/**
 * Fetches portal statuses from the Google Apps Script web app.
 * 
 * @param forceCheck - If true, triggers a fresh check of all portals.
 *                     If false, returns cached data from Firebase.
 * @returns Promise<GASResponse>
 */
export const fetchPortalStatuses = async (forceCheck: boolean = false): Promise<GASResponse> => {
    try {
        const url = forceCheck
            ? `${GAS_WEB_APP_URL}?action=check`
            : GAS_WEB_APP_URL;

        const response = await fetch(url, {
            method: 'GET',
            // Google Apps Script handles CORS automatically for deployed web apps
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GASResponse = await response.json();
        return data;
    } catch (error) {
        console.error('[GAS API] Error fetching portal statuses:', error);
        throw error;
    }
};

/**
 * Fetches status for a specific portal by ID.
 * 
 * @param portalId - The ID of the portal to fetch status for.
 * @returns Promise<GASResponse>
 */
export const fetchPortalById = async (portalId: string): Promise<GASResponse> => {
    try {
        const url = `${GAS_WEB_APP_URL}?portal=${portalId}`;

        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GASResponse = await response.json();
        return data;
    } catch (error) {
        console.error(`[GAS API] Error fetching portal ${portalId}:`, error);
        throw error;
    }
};

/**
 * Converts GAS portal data to the format expected by PortalMonitor component.
 */
export const convertToPortalStatus = (gasData: Record<string, PortalData>) => {
    return Object.values(gasData).map(portal => ({
        id: portal.id,
        name: portal.name,
        url: portal.url,
        status: portal.status as 'online' | 'offline',
        latency: portal.latency,
        recruitmentStatus: portal.recruitmentStatus,
        shortlistDetected: portal.shortlistDetected,
        lastChecked: portal.lastChecked,
        error: portal.error,
        httpCode: portal.httpCode
    }));
};

export default {
    fetchPortalStatuses,
    fetchPortalById,
    convertToPortalStatus,
    GAS_WEB_APP_URL
};
