const https = require('https');

const FIREBASE_URL = 'recruitment-be456-default-rtdb.firebaseio.com';
const SECRET = 'fAx1anXrWff74xA1bAoWU4CNTdi4NN87QWbzEGKV';
const timestamp = new Date().toISOString();

const portalData = {
    // ── Military ────────────────────────────────────────────────────────────
    "1": { id: "1", name: "Nigerian Army", url: "https://recruitment.army.mil.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 320, httpCode: 200, lastChecked: timestamp },
    "2": { id: "2", name: "Nigerian Navy", url: "https://joinnigeriannavy.com", status: "online", recruitmentStatus: "Open", shortlistDetected: true, latency: 410, httpCode: 200, lastChecked: timestamp },
    "3": { id: "3", name: "Nigerian Air Force", url: "https://nafrecruitment.airforce.mil.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 290, httpCode: 200, lastChecked: timestamp },
    // ── Paramilitary & Security ─────────────────────────────────────────────
    "5": { id: "5", name: "Nigeria Police Force", url: "https://policerecruitment.gov.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 380, httpCode: 200, lastChecked: timestamp },
    "6": { id: "6", name: "NSCDC (Civil Defence)", url: "https://recruitment.cdcfib.gov.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 450, httpCode: 200, lastChecked: timestamp },
    "7": { id: "7", name: "FRSC", url: "https://www.frsc.gov.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 510, httpCode: 200, lastChecked: timestamp },
    "8": { id: "8", name: "Federal Fire Service", url: "https://recruitment.cdcfib.gov.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 455, httpCode: 200, lastChecked: timestamp },
    "9": { id: "9", name: "Nigeria Immigration Service", url: "https://recruitment.cdcfib.gov.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 460, httpCode: 200, lastChecked: timestamp },
    "10": { id: "10", name: "Nigeria Customs Service", url: "https://vacancy.customs.gov.ng", status: "online", recruitmentStatus: "Open", shortlistDetected: false, latency: 395, httpCode: 200, lastChecked: timestamp },
    // ── Law Enforcement ─────────────────────────────────────────────────────
    "11": { id: "11", name: "EFCC", url: "https://efcc.gov.ng/efcc/careers", status: "online", recruitmentStatus: "Closed", shortlistDetected: false, latency: 530, httpCode: 200, lastChecked: timestamp },
    // ── Civil Service ────────────────────────────────────────────────────────
    "12": { id: "12", name: "Federal Civil Service Commission (FCSC)", url: "https://recruitment.fedcivilservice.gov.ng", status: "online", recruitmentStatus: "Closed", shortlistDetected: false, latency: 480, httpCode: 200, lastChecked: timestamp },
    // ── Oil, Gas & Energy ────────────────────────────────────────────────────
    "13": { id: "13", name: "NNPC Limited", url: "https://careers.nnpcgroup.com", status: "online", recruitmentStatus: "Closed", shortlistDetected: false, latency: 270, httpCode: 200, lastChecked: timestamp },
    // ── Finance & Banking ────────────────────────────────────────────────────
    "14": { id: "14", name: "Central Bank of Nigeria (CBN)", url: "https://www.cbn.gov.ng/Recruitment", status: "online", recruitmentStatus: "Closed", shortlistDetected: false, latency: 310, httpCode: 200, lastChecked: timestamp },
    // ── Tech & Identity ──────────────────────────────────────────────────────
    "15": { id: "15", name: "NIMC", url: "https://nimc.gov.ng/careers", status: "online", recruitmentStatus: "Unknown", shortlistDetected: false, latency: 420, httpCode: 200, lastChecked: timestamp },
    "16": { id: "16", name: "Nigerian Communications Commission (NCC)", url: "https://www.ncc.gov.ng/careers-ncc", status: "online", recruitmentStatus: "Closed", shortlistDetected: false, latency: 360, httpCode: 200, lastChecked: timestamp },
    "17": { id: "17", name: "NITDA", url: "https://nitda.gov.ng", status: "online", recruitmentStatus: "Unknown", shortlistDetected: false, latency: 390, httpCode: 200, lastChecked: timestamp },
    // ── Transport & Maritime ─────────────────────────────────────────────────
    "18": { id: "18", name: "Federal Airports Authority (FAAN)", url: "https://faan.gov.ng/career", status: "online", recruitmentStatus: "Closed", shortlistDetected: false, latency: 440, httpCode: 200, lastChecked: timestamp },
    "19": { id: "19", name: "NIMASA", url: "https://nimasa.gov.ng", status: "online", recruitmentStatus: "Unknown", shortlistDetected: false, latency: 470, httpCode: 200, lastChecked: timestamp },
    // ── Health & Food Safety ─────────────────────────────────────────────────
    "20": { id: "20", name: "NAFDAC", url: "https://nafdac.gov.ng", status: "online", recruitmentStatus: "Closed", shortlistDetected: false, latency: 350, httpCode: 200, lastChecked: timestamp },
};

function firebasePut(path, data) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify(data);
        const options = {
            hostname: FIREBASE_URL,
            path: `${path}?auth=${SECRET}`,
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
        };
        const req = https.request(options, (res) => {
            let raw = '';
            res.on('data', d => raw += d);
            res.on('end', () => {
                console.log(`[${path}] HTTP ${res.statusCode}`);
                resolve(raw);
            });
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

async function seed() {
    console.log('Seeding portal_monitor...');
    await firebasePut('/portal_monitor.json', portalData);
    console.log('✅ portal_monitor seeded successfully!');
    console.log('✅ Firebase is fully connected. Open http://localhost:5173 to see live data.');
}

seed().catch(err => { console.error('❌ Seed failed:', err.message); process.exit(1); });
