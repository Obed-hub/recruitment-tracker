/**
 * Google Apps Script for Real-time Recruitment Portal Monitoring
 * 
 * INSTRUCTIONS:
 * 1. Go to https://script.google.com/ and create a new project.
 * 2. Copy and paste this code into the editor (Code.gs).
 * 3. Fill in your FIREBASE_URL and FIREBASE_SECRET below.
 * 4. Add the FirebaseApp library (optional, but using REST API directly here is often easier).
 *    Actually, for this simple case, we will use the REST API directly so no library is needed.
 * 5. Run the 'checkPortals' function manually once to authorize permissions.
 * 6. Set up a Time-driven Trigger:
 *    - Click on the clock icon (Triggers) on the left sidebar.
 *    - Click "Add Trigger".
 *    - Choose function to run: 'checkPortals'.
 *    - Select event source: 'Time-driven'.
 *    - Select type of time based trigger: 'Minutes timer'.
 *    - Select minute interval: 'Every 5 minutes' (or 10/15 depending on your needs).
 */

// --- CONFIGURATION ---
const FIREBASE_URL = "https://recruitment-be456-default-rtdb.firebaseio.com"; // e.g., "https://your-project-id.firebaseio.com"
const FIREBASE_SECRET = "fAx1anXrWff74xA1bAoWU4CNTdi4NN87QWbzEGKV"; // Get this from Firebase Console -> Project Settings -> Service Accounts -> Database Secrets

// Expanded portals list with specific keywords per agency (2026 Updated URLs)
const PORTALS = [
    { id: '1', name: 'Nigerian Army', url: 'https://recruitment.army.mil.ng', keywords: ['shortlisted', 'apply now', 'screening'] },
    { id: '2', name: 'Nigerian Navy', url: 'https://joinnigeriannavy.com', keywords: ['apply now', 'recruitment', 'shortlisted'] },
    { id: '3', name: 'Nigerian Air Force', url: 'https://nafrecruitment.airforce.mil.ng', keywords: ['apply now', 'recruitment', 'shortlisted'] },
    { id: '5', name: 'Nigeria Police Force', url: 'https://policerecruitment.gov.ng', keywords: ['apply now', 'recruitment', 'cbt'] },
    { id: '6', name: 'NSCDC (Civil Defence)', url: 'https://recruitment.cdcfib.gov.ng', keywords: ['currently recruiting', 'apply now', 'shortlisted'] },
    { id: '7', name: 'FRSC', url: 'https://www.frsc.gov.ng', keywords: ['recruitment', 'screening', 'shortlisted'] },
    { id: '8', name: 'Federal Fire Service', url: 'https://recruitment.cdcfib.gov.ng', keywords: ['shortlisted', 'fire service', 'ffs'] },
    { id: '9', name: 'Nigeria Immigration Service', url: 'https://recruitment.cdcfib.gov.ng', keywords: ['apply now', 'cbt', 'immigration'] },
    { id: '10', name: 'Nigeria Customs Service', url: 'https://vacancy.customs.gov.ng', keywords: ['apply now', 'recruitment', 'shortlisted'] }
];

// Global Keywords configuration (used as fallback)
const KEYWORDS = {
    open: ['apply now', 'start application', 'application open', 'register now', 'click here to apply', 'recruitment form', 'currently recruiting', 'cbt'],
    closed: ['application closed', 'registration closed', 'deadline reached', 'no longer accepting', 'submission closed'],
    shortlist: ['shortlist', 'shortlisted', 'list of successful', 'candidates invited', 'interview schedule', 'screening exercise', 'screening', 'check status']
};

// --- MAIN FUNCTION ---

function checkPortals() {
    const results = {};
    const timestamp = new Date().toISOString();

    PORTALS.forEach(function (portal) {
        const checkResult = checkUrlAndContent(portal.url);

        results[portal.id] = {
            id: portal.id,
            name: portal.name,
            url: portal.url,
            status: checkResult.status,       // 'online' or 'offline'
            recruitmentStatus: checkResult.recruitmentStatus, // 'Open', 'Closed', 'Unknown'
            shortlistDetected: checkResult.shortlistDetected, // true/false
            latency: checkResult.latency,
            httpCode: checkResult.httpCode,
            lastChecked: timestamp
        };

        Logger.log(`[${portal.name}] Site: ${checkResult.status}, Recruit: ${checkResult.recruitmentStatus}, Shortlist: ${checkResult.shortlistDetected}`);
    });

    updateFirebase(results);
}

// --- HELPER FUNCTIONS ---

function checkUrlAndContent(url) {
    const start = new Date().getTime();

    try {
        const options = {
            'muteHttpExceptions': true,
            'validateHttpsCertificates': false,
            'followRedirects': true
        };

        const response = UrlFetchApp.fetch(url, options);
        const end = new Date().getTime();
        const httpCode = response.getResponseCode();
        const content = response.getContentText().toLowerCase(); // Normalize to lowercase for search

        let status = 'offline';
        if (httpCode >= 200 && httpCode < 300) {
            status = 'online';
        }

        // Analyze Content
        let recruitmentStatus = 'Unknown';
        let shortlistDetected = false;

        if (status === 'online') {
            // Check for Shortlist
            if (KEYWORDS.shortlist.some(kw => content.includes(kw))) {
                shortlistDetected = true;
            }

            // Check for Open/Closed status
            // We give priority to "Closed" keywords because "Apply" might still be present in nav bars even when closed.
            const isClosed = KEYWORDS.closed.some(kw => content.includes(kw));
            const isOpen = KEYWORDS.open.some(kw => content.includes(kw));

            if (isClosed) {
                recruitmentStatus = 'Closed';
            } else if (isOpen) {
                recruitmentStatus = 'Open';
            }
        }

        return {
            status: status,
            latency: end - start,
            httpCode: httpCode,
            recruitmentStatus: recruitmentStatus,
            shortlistDetected: shortlistDetected
        };

    } catch (e) {
        Logger.log("Error fetching " + url + ": " + e.toString());
        var errorMessage = e.toString();
        var errorCode = 0;

        // Try to extract status code if available in error message (e.g. "Request failed for ... returned code 404")
        var match = errorMessage.match(/code\s+(\d+)/);
        if (match && match[1]) {
            errorCode = parseInt(match[1]);
        }

        return {
            status: 'offline',
            latency: 0,
            httpCode: errorCode,
            error: errorMessage,
            recruitmentStatus: 'Unknown',
            shortlistDetected: false
        };
    }
}

function updateFirebase(data) {
    if (FIREBASE_URL.includes("YOUR_FIREBASE")) {
        Logger.log("SKIPPING FIREBASE UPDATE: Please configure FIREBASE_URL.");
        return;
    }

    const base = FIREBASE_URL.endsWith('/') ? FIREBASE_URL : FIREBASE_URL + '/';
    const url = base + "portal_monitor.json?auth=" + FIREBASE_SECRET; // Changed node to portal_monitor

    const options = {
        method: 'patch',
        contentType: 'application/json',
        payload: JSON.stringify(data)
    };

    try {
        const response = UrlFetchApp.fetch(url, options);
        Logger.log("Firebase Update Response: " + response.getResponseCode());
    } catch (e) {
        Logger.log("Error updating Firebase: " + e.toString());
    }
}

// --- WEB APP ENDPOINT ---

/**
 * Handles GET requests to the web app.
 * Returns current portal statuses as JSON.
 * 
 * Query Parameters:
 *   - action: 'check' to force a fresh check, 'status' to get cached data (default)
 *   - portal: optional portal ID to get status for a specific portal
 * 
 * Usage:
 *   GET https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec
 *   GET https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec?action=check
 *   GET https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec?portal=1
 */
function doGet(e) {
    const action = e.parameter.action || 'status';
    const portalId = e.parameter.portal;

    let results = {};
    const timestamp = new Date().toISOString();

    // Perform fresh check if requested
    if (action === 'check') {
        PORTALS.forEach(function (portal) {
            const checkResult = checkUrlAndContent(portal.url);

            results[portal.id] = {
                id: portal.id,
                name: portal.name,
                url: portal.url,
                status: checkResult.status,
                recruitmentStatus: checkResult.recruitmentStatus,
                shortlistDetected: checkResult.shortlistDetected,
                latency: checkResult.latency,
                httpCode: checkResult.httpCode,
                lastChecked: timestamp
            };
        });

        // Also update Firebase with fresh data
        updateFirebase(results);
    } else {
        // Return cached data from Firebase
        try {
            const base = FIREBASE_URL.endsWith('/') ? FIREBASE_URL : FIREBASE_URL + '/';
            const url = base + "portal_monitor.json?auth=" + FIREBASE_SECRET;
            const response = UrlFetchApp.fetch(url);
            results = JSON.parse(response.getContentText()) || {};
        } catch (e) {
            Logger.log("Error fetching from Firebase: " + e.toString());
            // If Firebase fails, do a fresh check
            PORTALS.forEach(function (portal) {
                const checkResult = checkUrlAndContent(portal.url);
                results[portal.id] = {
                    id: portal.id,
                    name: portal.name,
                    url: portal.url,
                    status: checkResult.status,
                    recruitmentStatus: checkResult.recruitmentStatus,
                    shortlistDetected: checkResult.shortlistDetected,
                    latency: checkResult.latency,
                    httpCode: checkResult.httpCode,
                    lastChecked: timestamp
                };
            });
        }
    }

    // Filter by portal ID if specified
    if (portalId && results[portalId]) {
        results = { [portalId]: results[portalId] };
    }

    // Return JSON response with CORS headers
    const output = ContentService.createTextOutput(JSON.stringify({
        success: true,
        timestamp: timestamp,
        data: results
    }));
    output.setMimeType(ContentService.MimeType.JSON);

    return output;
}
