import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child, set, update, remove } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { RecruitmentUpdate, Question, NewsItem, ShortlistCandidate, Branch, RecruitmentCategory, ExamCenter } from "../types";

// --- CONFIGURATION ---
// TODO: Replace with your actual Firebase project configuration
// You can get this from Firebase Console -> Project Settings -> General -> Your Apps -> SDK Setup and Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN8W3KsN3pQWvmAQDfIC05AtvoNu8vn7g",
    authDomain: "recruitment-be456.firebaseapp.com",
    databaseURL: "https://recruitment-be456-default-rtdb.firebaseio.com",
    projectId: "recruitment-be456",
    storageBucket: "recruitment-be456.firebasestorage.app",
    messagingSenderId: "193428136054",
    appId: "1:193428136054:web:a360684c401804b708bf57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

// ─── Auth Helpers ────────────────────────────────────────────────────────────
const ADMIN_UID = 'sslks9wMvYbWZAo66vcbdmN0gbP2';

export const adminSignIn = async (email: string, password: string): Promise<User> => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    if (credential.user.uid !== ADMIN_UID) {
        await signOut(auth);
        throw new Error('Unauthorised: You do not have admin access.');
    }
    return credential.user;
};

export const adminSignOut = () => signOut(auth);

export const onAdminAuthStateChanged = (cb: (user: User | null) => void) =>
    onAuthStateChanged(auth, (user) => {
        // Only pass the user through if it matches the admin UID
        cb(user && user.uid === ADMIN_UID ? user : null);
    });

// --- STATIC DATA FOR MERGING ---
// We keep this here so the UI has rich content (descriptions, etc.) while status comes from Firebase.

const STATIC_DATA: RecruitmentUpdate[] = [
    {
        id: '1',
        branch: 'Army',
        title: 'Nigerian Army DSSC 29',
        category: 'DSSC',
        status: 'Open',
        deadline_date: '2026-02-04',
        portal_url: 'https://recruitment.army.mil.ng',
        updated_at: '2026-01-15T10:00:00Z',
        description: 'Applications are invited from eligible Nigerians for commission into the Nigerian Army.',
        requirements: ['Must be Nigerian.', 'Degree required.', 'Height: 1.68m (M), 1.65m (F).'],
        application_process: ['Apply online.', 'Upload docs.', 'Print slip.'],
        exam_centers: []
    },
    {
        id: '2',
        branch: 'Navy',
        title: 'Nigerian Navy Batch 38 Recruitment',
        category: 'Regular Recruit',
        status: 'Shortlist Out',
        deadline_date: '2025-12-20',
        portal_url: 'https://joinnigeriannavy.com',
        updated_at: '2026-01-10T08:30:00Z',
        description: 'The Nigerian Navy invites applications for enlistment through the Basic Training School.',
        requirements: ['Age 18-22.', '5 Credits SSCE.'],
        application_process: ['Register online.', 'Submit form.'],
        exam_centers: []
    },
    {
        id: '3',
        branch: 'Air Force',
        title: 'NAF BMTC 45 Recruitment',
        category: 'Regular Recruit',
        status: 'Closed',
        deadline_date: '2025-11-01',
        portal_url: 'https://nafrecruitment.airforce.mil.ng',
        updated_at: '2025-11-02T09:00:00Z'
    },
    {
        id: '5',
        branch: 'Police',
        title: 'Nigeria Police Force Constable Recruitment 2026',
        category: 'Constable',
        status: 'Open',
        deadline_date: '2026-03-01',
        portal_url: 'https://policerecruitment.gov.ng',
        updated_at: '2026-01-20T09:00:00Z',
        description: 'The Nigeria Police Force invites applications from suitably qualified Nigerians.',
        requirements: ['Must be a Nigerian citizen.', 'NIN required.'],
        application_process: ['Visit portal.', 'Use NIN to register.']
    },
    {
        id: '6',
        branch: 'Civil Defence',
        title: 'NSCDC 2026 General Recruitment',
        category: 'Regular Recruit',
        status: 'Open',
        deadline_date: '2026-02-28',
        portal_url: 'https://recruitment.cdcfib.gov.ng',
        updated_at: '2026-01-18T14:20:00Z',
        description: 'NSCDC recruitment for 2026.',
        requirements: ['Nigerian by birth.', 'Age 18-30.'],
        application_process: ['Apply via CDCFIB portal.']
    },
    {
        id: '7',
        branch: 'FRSC',
        title: 'Federal Road Safety Corps Recruitment',
        category: 'Cadet',
        status: 'Closed',
        deadline_date: '2025-10-10',
        portal_url: 'https://www.frsc.gov.ng',
        updated_at: '2025-10-12T00:00:00Z'
    },
    {
        id: '8',
        branch: 'Fire Service',
        title: 'Federal Fire Service Recruitment 2026',
        category: 'Inspector',
        status: 'Open',
        deadline_date: '2026-03-15',
        portal_url: 'https://recruitment.cdcfib.gov.ng',
        updated_at: '2026-01-22T11:00:00Z',
        description: 'Recruitment into the Federal Fire Service.',
        requirements: ['NYSC for seniors.', 'SSCE for juniors.'],
        application_process: ['Submit application online.']
    },
    {
        id: '9',
        branch: 'Immigration',
        title: 'Nigeria Immigration Service (NIS) Recruitment 2026',
        category: 'Inspector',
        status: 'Open',
        deadline_date: '2026-04-10',
        portal_url: 'https://recruitment.cdcfib.gov.ng',
        updated_at: '2026-01-25T08:00:00Z',
        description: 'Recruitment into the Nigeria Immigration Service.',
        requirements: ['Must be Nigerian by birth.', 'Age 18-30.'],
        application_process: ['Visit CDCFIB portal.']
    },
    {
        id: '10',
        branch: 'Customs',
        title: 'Nigeria Customs Service Supplementary Recruitment',
        category: 'Regular Recruit',
        status: 'Closed',
        deadline_date: '2025-12-01',
        portal_url: 'https://vacancy.customs.gov.ng',
        updated_at: '2025-12-02T09:00:00Z'
    },

    // ── Law Enforcement ──────────────────────────────────────────────────────
    {
        id: '11',
        branch: 'EFCC',
        title: 'EFCC Investigator / Analyst Recruitment 2026',
        category: 'Entry Level',
        status: 'Closed',
        deadline_date: '2026-03-31',
        portal_url: 'https://efcc.gov.ng/efcc/careers',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'The EFCC recruits Investigators, Financial Analysts, Legal Officers, and ICT Officers to fight corruption and financial crimes. Applications are online only.',
        requirements: ['Nigerian citizen.', 'Minimum 2:2 degree or HND Upper Credit.', 'NYSC discharge/exemption required.', 'Age: Not above 30 years.', 'Must possess a valid NIN.'],
        application_process: ['Visit efcc.gov.ng/efcc/careers.', 'Create account and select preferred role.', 'Upload credentials and submit.', 'Await aptitude test invitation.'],
        exam_centers: [
            { zone: 'FCT', venue: 'EFCC Academy', address: 'Karu, Abuja', coordinator_contact: '08000000011' },
            { zone: 'South West', venue: 'EFCC Lagos Zonal Office', address: 'Ikoyi, Lagos', coordinator_contact: '08000000012' },
        ]
    },

    // ── Civil Service ─────────────────────────────────────────────────────────
    {
        id: '12',
        branch: 'FCSC',
        title: 'Federal Civil Service Commission (FCSC) Recruitment 2026',
        category: 'Entry Level',
        status: 'Closed',
        deadline_date: '2026-04-30',
        portal_url: 'https://recruitment.fedcivilservice.gov.ng',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'The FCSC conducts batch recruitment into Federal MDAs. Positions span GL 07–GL 14 across Engineering, Administration, Science, Health, Legal, Finance, and Social Work.',
        requirements: ['Nigerian citizen.', 'Minimum 2:2 degree or HND Upper Credit for GL 08+.', 'SSCE with 5 credits for GL 06 and below.', 'NYSC discharge where applicable.', 'Must possess a valid NIN.'],
        application_process: ['Visit recruitment.fedcivilservice.gov.ng.', 'Register and complete your profile.', 'Select MDA/position and upload documents.', 'Attend written exam and oral interview.'],
        exam_centers: [
            { zone: 'FCT', venue: 'FCSC Headquarters', address: 'Abuja', coordinator_contact: '08000000021' },
            { zone: 'South West', venue: 'Lagos Liaison Office', address: 'Lagos', coordinator_contact: '08000000022' },
        ]
    },

    // ── Oil, Gas & Energy ─────────────────────────────────────────────────────
    {
        id: '13',
        branch: 'NNPC',
        title: 'NNPC Limited Graduate Trainee Recruitment 2026',
        category: 'Graduate Trainee',
        status: 'Closed',
        deadline_date: '2026-03-15',
        portal_url: 'https://careers.nnpcgroup.com',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'NNPC Limited recruits exceptional graduates into its 12-month Graduate Trainee Programme covering Petroleum Engineering, Geosciences, Finance, IT, Legal, and HSE.',
        requirements: ['Nigerian citizen.', 'Minimum 2:2 degree.', 'Not above 28 years.', 'NYSC discharge required.', 'Must possess a valid NIN.'],
        application_process: ['Visit careers.nnpcgroup.com.', 'Complete the online form and psychometric assessment.', 'Shortlisted candidates attend technical interviews.', 'Offer letter issued after background check.'],
        exam_centers: [
            { zone: 'FCT', venue: 'NNPC Towers', address: 'Central Business District, Abuja', coordinator_contact: '08000000031' },
            { zone: 'South West', venue: 'NNPC Lagos HQ', address: 'Falomo, Lagos', coordinator_contact: '08000000032' },
        ]
    },

    // ── Finance & Banking ─────────────────────────────────────────────────────
    {
        id: '14',
        branch: 'CBN',
        title: 'Central Bank of Nigeria (CBN) Entry-Level Recruitment 2026',
        category: 'Entry Level',
        status: 'Closed',
        deadline_date: '2026-02-28',
        portal_url: 'https://www.cbn.gov.ng/Recruitment',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'The CBN recruits Economists, Accountants, IT Specialists, Statisticians, and Legal Officers. Highly competitive — minimum 2:1 degree required.',
        requirements: ['Nigerian citizen.', 'Minimum 2:1 degree.', 'Not above 26 years.', 'NYSC discharge required.', 'Professional qualifications (ICAN, CFA, CISA) are an advantage.', 'Valid NIN required.'],
        application_process: ['Visit cbn.gov.ng/Recruitment.', 'Fill online form with educational and professional details.', 'Complete CBN online aptitude test.', 'Shortlisted candidates are called for oral interview in Abuja.'],
        exam_centers: [
            { zone: 'FCT', venue: 'CBN Head Office', address: 'Central Business District, Abuja', coordinator_contact: '08000000041' },
            { zone: 'South West', venue: 'CBN Lagos Branch', address: 'Marina, Lagos Island', coordinator_contact: '08000000042' },
        ]
    },

    // ── Tech & Identity ───────────────────────────────────────────────────────
    {
        id: '15',
        branch: 'NIMC',
        title: 'NIMC Staff Recruitment 2026',
        category: 'Entry Level',
        status: 'Unknown',
        deadline_date: '2026-06-30',
        portal_url: 'https://nimc.gov.ng/careers',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'NIMC recruits IT Officers, Data Analysts, Registration Officers, and Admin Staff to expand the National Identity Database and NIN enrolment services nationwide.',
        requirements: ['Nigerian citizen.', 'Minimum 2:2 degree or HND Upper Credit.', 'NYSC discharge required.', 'Strong IT/data skills are an advantage.', 'Valid NIN required.'],
        application_process: ['Visit nimc.gov.ng/careers.', 'Select desired role and complete the online form.', 'Upload credentials and NIN slip.', 'Await aptitude test and interview invitation.'],
        exam_centers: [
            { zone: 'FCT', venue: 'NIMC HQ', address: 'Plot 964, Cadastral Zone, Abuja', coordinator_contact: '08000000051' },
        ]
    },
    {
        id: '16',
        branch: 'NCC',
        title: 'Nigerian Communications Commission (NCC) Recruitment 2026',
        category: 'Entry Level',
        status: 'Closed',
        deadline_date: '2026-03-30',
        portal_url: 'https://www.ncc.gov.ng/careers-ncc',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'The NCC recruits Telecom Engineers, Legal Officers, Economists, ICT Specialists, and Administrative Officers to regulate Nigeria\'s telecommunications sector.',
        requirements: ['Nigerian citizen.', 'Minimum 2:2 degree or HND Upper Credit.', 'NYSC discharge required.', 'Professional certs (CCNA, PMP) are an advantage.', 'Valid NIN required.'],
        application_process: ['Visit ncc.gov.ng/careers-ncc.', 'Download/complete application form.', 'Submit with supporting documents to NCC HR.', 'Await aptitude test invitation.'],
        exam_centers: [
            { zone: 'FCT', venue: 'NCC Headquarters', address: 'Plot 423, Aguiyi Ironsi Street, Wuse Zone 4, Abuja', coordinator_contact: '08000000061' },
        ]
    },
    {
        id: '17',
        branch: 'NITDA',
        title: 'NITDA IT Officer Recruitment 2026',
        category: 'Entry Level',
        status: 'Unknown',
        deadline_date: '2026-06-30',
        portal_url: 'https://nitda.gov.ng',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'NITDA recruits Software Developers, Cybersecurity Analysts, Data Scientists, and Policy Officers to drive Nigeria\'s digital economy and e-government agenda.',
        requirements: ['Nigerian citizen.', 'Minimum 2:2 in Computer Science or IT-related field.', 'NYSC discharge required.', 'AWS/Google Cloud/CISSP certifications are an advantage.', 'Valid NIN required.'],
        application_process: ['Visit nitda.gov.ng — Careers section.', 'Complete the online form with technical skills and qualifications.', 'Upload CV and supporting documents.', 'Shortlisted candidates are called for technical assessments.'],
        exam_centers: [
            { zone: 'FCT', venue: 'NITDA Headquarters', address: 'Plot 928, Shehu Shagari Way, Abuja', coordinator_contact: '08000000071' },
        ]
    },

    // ── Transport & Maritime ──────────────────────────────────────────────────
    {
        id: '18',
        branch: 'FAAN',
        title: 'Federal Airports Authority of Nigeria (FAAN) Recruitment 2026',
        category: 'Entry Level',
        status: 'Closed',
        deadline_date: '2026-04-15',
        portal_url: 'https://faan.gov.ng/career',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'FAAN recruits Aviation Security Officers, Air Traffic Controllers, Engineers, Airport Firefighters, IT Officers, and Admin Staff for all international and domestic airports in Nigeria.',
        requirements: ['Nigerian citizen.', 'Aviation Security: SSCE with 5 credits.', 'ATC/Engineering: Degree or HND in Physical Sciences/Engineering.', 'Age: 18–35 years.', 'Must pass medical exam and background check.', 'Valid NIN required.'],
        application_process: ['Visit faan.gov.ng/career.', 'Select desired role and complete the online form.', 'Upload credentials and passport photograph.', 'Await aptitude test notification.', 'Successful candidates undergo security vetting.'],
        exam_centers: [
            { zone: 'South West', venue: 'Murtala Muhammed International Airport', address: 'Ikeja, Lagos', coordinator_contact: '08000000082' },
            { zone: 'FCT', venue: 'Nnamdi Azikiwe International Airport', address: 'Abuja', coordinator_contact: '08000000081' },
        ]
    },
    {
        id: '19',
        branch: 'NIMASA',
        title: 'NIMASA Marine Officer Recruitment 2026',
        category: 'Entry Level',
        status: 'Unknown',
        deadline_date: '2026-05-31',
        portal_url: 'https://nimasa.gov.ng',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'NIMASA recruits Marine Surveyors, Nautical Officers, Safety Inspectors, Legal Professionals, and ICT Officers to enforce maritime laws and promote shipping in Nigeria.',
        requirements: ['Nigerian citizen.', 'Marine/Nautical roles: Degree or HND in Marine Engineering or Nautical Science.', 'Other roles: Minimum 2:2 in Law, ICT, Finance, or Admin.', 'NYSC discharge required.', 'Valid NIN required.'],
        application_process: ['Visit nimasa.gov.ng — Careers section.', 'Complete the online or downloadable application form.', 'Upload academic certificates and NIN slip.', 'Await written exam and interview schedule.'],
        exam_centers: [
            { zone: 'FCT', venue: 'NIMASA Head Office', address: 'Plot 2187, Dalaba Street, Wuse Zone 5, Abuja', coordinator_contact: '08000000091' },
            { zone: 'South West', venue: 'NIMASA Lagos Area Office', address: 'Apapa, Lagos', coordinator_contact: '08000000092' },
        ]
    },

    // ── Health & Food Safety ──────────────────────────────────────────────────
    {
        id: '20',
        branch: 'NAFDAC',
        title: 'NAFDAC Regulatory Officer Recruitment 2026',
        category: 'Entry Level',
        status: 'Closed',
        deadline_date: '2026-03-31',
        portal_url: 'https://nafdac.gov.ng',
        updated_at: '2026-02-22T10:00:00Z',
        description: 'NAFDAC recruits Pharmacists, Food Scientists, Chemists, Microbiologists, Veterinary Surgeons, and Admin Officers to regulate food, drugs, cosmetics, and medical devices in Nigeria.',
        requirements: ['Nigerian citizen.', 'Minimum 2:2 in Pharmacy, Food Science, Chemistry, Microbiology, or related field.', 'Pharmacists need a valid PCN licence.', 'NYSC discharge required.', 'Age: Not above 30 years.', 'Valid NIN required.'],
        application_process: ['Visit nafdac.gov.ng — Vacancies section.', 'Complete the online application form.', 'Upload degree certificate, NYSC certificate, professional licence (if applicable), NIN slip.', 'Await aptitude test invitation then oral interview.'],
        exam_centers: [
            { zone: 'FCT', venue: 'NAFDAC Headquarters', address: 'Plot 2032, Olusegun Obasanjo Way, Wuse Zone 7, Abuja', coordinator_contact: '08000000101' },
            { zone: 'South West', venue: 'NAFDAC Lagos Zonal Office', address: 'Oshodi, Lagos', coordinator_contact: '08000000102' },
        ]
    },
];

// --- RECRUITMENT PORTALS ---

/**
 * Subscribes to recruitment data in real-time via Firebase onValue listener.
 * The Google Apps Script writes to "portal_monitor" node, and Firebase
 * pushes the update to all connected clients instantly.
 */
export const subscribeToRecruitments = (callback: (data: RecruitmentUpdate[]) => void) => {
    // Immediately return static data so the UI has content while Firebase loads
    callback(STATIC_DATA);

    const portalRef = ref(db, 'portal_monitor');

    const unsubscribe = onValue(portalRef, (snapshot) => {
        const firebaseData = snapshot.val();
        console.log('[Firebase] Real-time update received:', firebaseData);

        if (!firebaseData) {
            // No data in Firebase yet — keep showing static data
            return;
        }

        // Build a lookup map from Firebase data (keyed by portal ID)
        const liveDataMap: Record<string, any> = {};
        Object.values(firebaseData).forEach((item: any) => {
            if (item && item.id) {
                liveDataMap[item.id] = item;
            }
        });

        // Merge live Firebase data with rich static data (descriptions, requirements, etc.)
        const mergedData = STATIC_DATA.map(staticItem => {
            const liveItem = liveDataMap[staticItem.id];
            if (liveItem) {
                return {
                    ...staticItem,
                    // If the liveItem has specific recruitment fields, override the static ones
                    title: liveItem.title || staticItem.title,
                    description: liveItem.description || staticItem.description,
                    deadline_date: liveItem.deadline_date || staticItem.deadline_date,
                    status: liveItem.recruitmentStatus ? mapStatus(liveItem.recruitmentStatus) : staticItem.status,
                    updated_at: liveItem.lastChecked || staticItem.updated_at,
                    portal_url: liveItem.url || staticItem.portal_url,
                    site_status: liveItem.status,       // 'online' | 'offline'
                    latency: liveItem.latency,
                    shortlistDetected: liveItem.shortlistDetected,
                    httpCode: liveItem.httpCode,
                };
            }
            return staticItem;
        });

        callback(mergedData);
    }, (error) => {
        console.error('[Firebase] Real-time listener error:', error);
        // Keep showing static data on error
    });

    // Return unsubscribe function (Firebase SDK pattern)
    return unsubscribe;
};

/**
 * Subscribes to a single recruitment by ID in real-time.
 */
export const subscribeToRecruitmentById = (id: string, callback: (data: RecruitmentUpdate | null) => void) => {
    // Find base static data
    const staticItem = STATIC_DATA.find(s => s.id === id);

    // Initial callback with static data
    if (staticItem) callback(staticItem);

    const portalRef = ref(db, `portal_monitor/${id}`);
    const unsubscribe = onValue(portalRef, (snapshot) => {
        const liveItem = snapshot.val();
        if (!liveItem) {
            // Keep existing static if no firebase data
            return;
        }

        if (staticItem) {
            callback({
                ...staticItem,
                title: liveItem.title || staticItem.title,
                description: liveItem.description || staticItem.description,
                deadline_date: liveItem.deadline_date || staticItem.deadline_date,
                status: liveItem.recruitmentStatus ? mapStatus(liveItem.recruitmentStatus) : staticItem.status,
                updated_at: liveItem.lastChecked || staticItem.updated_at,
                portal_url: liveItem.url || staticItem.portal_url,
                site_status: liveItem.status,
                latency: liveItem.latency,
                shortlistDetected: liveItem.shortlistDetected,
            });
        }
    });

    return unsubscribe;
};

/**
 * Subscribes to raw portal monitor data from Firebase for use in PortalMonitor component.
 * Returns live site-check data written by the Google Apps Script.
 */
export const subscribeToPortalMonitor = (callback: (data: any[]) => void) => {
    const portalRef = ref(db, 'portal_monitor');

    const unsubscribe = onValue(portalRef, (snapshot) => {
        const firebaseData = snapshot.val();
        if (!firebaseData) {
            callback([]);
            return;
        }
        const portals = Object.values(firebaseData).filter(Boolean) as any[];
        console.log('[Firebase] Portal monitor update:', portals.length, 'portals');
        callback(portals);
    }, (error) => {
        console.error('[Firebase] Portal monitor listener error:', error);
        callback([]);
    });

    return unsubscribe;
};

// --- HELPERS ---

function mapBranchName(name: string): string {
    // ... (Helper mostly used if we were constructing fresh objects, but useful to keep)
    if (name.includes('Army')) return 'Army';
    if (name.includes('Navy')) return 'Navy';
    if (name.includes('Air Force')) return 'Air Force';
    if (name.includes('Police')) return 'Police';
    if (name.includes('Civil Defence') || name.includes('NSCDC')) return 'Civil Defence';
    if (name.includes('FRSC')) return 'FRSC';
    if (name.includes('Fire')) return 'Fire Service';
    if (name.includes('Immigration')) return 'Immigration';
    if (name.includes('Customs')) return 'Customs';
    return 'Army';
}

function mapStatus(status: string): any {
    if (status === 'Open') return 'Open';
    if (status === 'Closed') return 'Closed';
    return 'Shortlist Out';
}

// --- OTHER COLLECTIONS ---

export const getQuestions = async (branch?: string): Promise<Question[]> => {
    return [];
};

// --- NEWS SERVICE ---

const NEWS_API_KEY = 'pub_ecb4b31dd7c343f4b4ed3b1105aac530';

export const getNews = async (): Promise<NewsItem[]> => {
    try {
        // Ultra-Strict Filter: Exact phrases to avoid "BTS Army" or generic uses
        const keywords = '"military recruitment" OR "join the army" OR "navy recruitment" OR "police recruitment"';
        const countries = 'ng,us,gb,ca,au';
        // Using local proxy to avoid CORS errors (assuming Vite proxy is set up, otherwise direct fetch might fail on some browsers but works in others or needs a proxy)
        // If local proxy isn't set up, we might need to use a public proxy or call directly if CORS allows. 
        // For this environment, we'll try direct first or use the same proxy pattern if needed.
        // The original code used /news-api/ prefix which implies a Vite proxy. We should keep it.
        const url = `/news-api/news?apikey=${NEWS_API_KEY}&q=${encodeURIComponent(keywords)}&country=${countries}&language=en`;

        console.log("[NewsService] Fetching URL:", url);

        const response = await fetch(url);

        // Fallback if /news-api/ is not configured in Vite
        if (response.status === 404) {
            console.warn("Vite proxy /news-api/ not found. Ensure vite.config.ts is configured.");
            return [];
        }

        if (!response.ok) {
            const text = await response.text();
            console.error("[NewsService] Error body:", text);
            return [];
        }

        const data = await response.json();

        if (data.status === 'success' && data.results && data.results.length > 0) {
            const irrelevantKeywords = ['bts', 'k-pop', 'kpop', 'netflix', 'movie', 'music', 'album', 'song', 'cinema', 'hollywood', 'celebrity'];

            const filteredResults = data.results.filter((article: any) => {
                const text = (article.title + ' ' + (article.description || '')).toLowerCase();
                const hasIrrelevant = irrelevantKeywords.some(kw => text.includes(kw));
                if (hasIrrelevant) return false;

                const hasRecruitmentContext = ['recruit', 'enlist', 'shortlist', 'screening', 'commission', 'intake', 'cadet', 'application'].some(kw => text.includes(kw));
                return hasRecruitmentContext;
            });

            return filteredResults.map((article: any) => ({
                id: article.article_id || Math.random().toString(36).substr(2, 9),
                title: article.title,
                content_summary: article.description
                    ? (article.description.length > 200 ? article.description.substring(0, 200) + '...' : article.description)
                    : (article.content ? article.content.substring(0, 200) + '...' : article.title),
                source_link: article.link,
                date_posted: article.pubDate ? article.pubDate.split(' ')[0] : new Date().toISOString().split('T')[0],
                is_official: false,
                image_url: article.image_url,
                source: article.source_id
            }));
        }
        return [];
    } catch (error) {
        console.error("Failed to fetch news from API:", error);
        return [];
    }
};

export const searchShortlist = async (query: string): Promise<ShortlistCandidate[]> => {
    return [];
};

// --- ADMIN WRITE FUNCTIONS ---

/**
 * Updates a single portal's status in Firebase.
 * Called by the admin panel when saving changes for one portal.
 */
export const updatePortalStatus = async (id: string, data: Partial<{
    status: 'online' | 'offline';
    recruitmentStatus: 'Open' | 'Closed' | 'Unknown';
    shortlistDetected: boolean;
    name: string;
    url: string;
    title: string;
    deadline_date: string;
    description: string;
    latency?: number;
    httpCode?: number;
    notes?: string;
}>): Promise<void> => {
    const portalRef = ref(db, `portal_monitor/${id}`);
    await update(portalRef, {
        ...data,
        id,
        lastChecked: new Date().toISOString(),
    });
    console.log(`[Admin] Updated portal ${id}`);
};

/**
 * Bulk-updates all portals at once in Firebase.
 * Called by the admin panel "Save All" button.
 */
export const updateAllPortals = async (portals: Record<string, any>): Promise<void> => {
    const monitorRef = ref(db, 'portal_monitor');
    await set(monitorRef, portals);
    console.log('[Admin] Bulk-updated all portals');
};

// --- PDF SHORTLIST FUNCTIONS ---

export interface ShortlistPdf {
    id: string;
    title: string;
    branch: string;
    fileName: string;
    downloadURL: string;
    storagePath: string;
    uploadedAt: string;
    fileSizeKB: number;
}

/**
 * Uploads a PDF to Firebase Storage and saves its metadata to Realtime DB.
 * @param file - The PDF File object
 * @param title - Human-readable title (e.g. "Nigerian Navy Batch 38 Shortlist")
 * @param branch - The military branch (e.g. "Navy")
 * @param onProgress - Optional callback receiving upload % (0-100)
 */
export const uploadShortlistPdf = (
    file: File,
    title: string,
    branch: string,
    onProgress?: (percent: number) => void
): Promise<ShortlistPdf> => {
    return new Promise((resolve, reject) => {
        const id = `${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
        const path = `shortlists/${id}_${file.name}`;
        const fileRef = storageRef(storage, path);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                onProgress?.(percent);
            },
            (error) => {
                console.error('[Firebase Storage] Upload error:', error);
                reject(error);
            },
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    const metadata: ShortlistPdf = {
                        id,
                        title,
                        branch,
                        fileName: file.name,
                        downloadURL,
                        storagePath: path,
                        uploadedAt: new Date().toISOString(),
                        fileSizeKB: Math.round(file.size / 1024),
                    };
                    // Save metadata to Realtime DB
                    await set(ref(db, `shortlists/${id}`), metadata);
                    console.log('[Admin] PDF uploaded:', title);
                    resolve(metadata);
                } catch (err) {
                    reject(err);
                }
            }
        );
    });
};

/**
 * Subscribes to the shortlists node in Realtime DB.
 * Returns an unsubscribe function.
 */
export const subscribeToShortlists = (callback: (pdfs: ShortlistPdf[]) => void) => {
    const shortlistRef = ref(db, 'shortlists');
    const unsubscribe = onValue(shortlistRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) { callback([]); return; }
        const pdfs = Object.values(data) as ShortlistPdf[];
        // Sort newest first
        pdfs.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
        callback(pdfs);
    });
    return unsubscribe;
};

/**
 * Deletes a shortlist PDF from Storage and removes its metadata from Realtime DB.
 */
export const deleteShortlistPdf = async (pdf: ShortlistPdf): Promise<void> => {
    const fileRef = storageRef(storage, pdf.storagePath);
    await deleteObject(fileRef);
    await remove(ref(db, `shortlists/${pdf.id}`));
    console.log('[Admin] PDF deleted:', pdf.title);
};
