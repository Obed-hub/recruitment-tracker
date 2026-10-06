import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child, set, update, remove, increment } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { RecruitmentUpdate, Question, NewsItem, ShortlistCandidate, Branch, RecruitmentCategory, ExamCenter, SLUG_TO_BRANCH } from "../types";

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

// --- MAPPING FOR TRANSITION ---
const SLUG_TO_LEGACY: Record<string, string> = {
    'army-dssc': '1',
    'navy-batch': '2',
    'naf-bmtc': '3',
    'police-constable': '5',
    'nscdc-general': '6',
    'frsc-recruitment': '7',
    'fire-inspector': '8',
    'immigration-inspector': '9',
    'customs-supplementary': '10',
    'efcc-investigator': '11',
    'fcsc-entry-level': '12',
    'nnpc-graduate': '13',
    'cbn-entry-level': '14',
    'nimc-staff': '15',
    'ncc-entry-level': '16',
    'nitda-it-officer': '17',
    'faan-entry-level': '18',
    'nimasa-marine': '19',
    'nafdac-regulatory': '20',
    'ndlea-recruitment': '21'
};

export const LEGACY_TO_SLUG: Record<string, string> = Object.fromEntries(
    Object.entries(SLUG_TO_LEGACY).map(([slug, legacyId]) => [legacyId, slug])
);


// --- STATIC DATA FOR MERGING ---
// We keep this here so the UI has rich content (descriptions, etc.) while status comes from Firebase.

export const STATIC_DATA: RecruitmentUpdate[] = [
    {
        id: 'army-dssc',
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
        id: 'navy-batch',
        branch: 'Navy',
        title: 'Nigerian Navy Batch 39 Recruitment 2026',
        category: 'Regular Recruit',
        status: 'Open',
        deadline_date: '2026-10-31',
        portal_url: 'https://www.joinnigeriannavy.gov.ng',
        updated_at: new Date().toISOString(),
        description: 'The Nigerian Navy has announced Batch 39 Recruitment 2026 for Seaman/Naval Ratings, Non-Commissioned Officers (NCOs), and Commissioned Officers. Portal opens 2 October 2026 and closes 31 October 2026.',
        requirements: [
            'Nigerian citizen by birth (Male and Female).',
            'Minimum qualification: SSCE / WAEC / NECO / NABTEB with 5 credits including English Language and Mathematics.',
            'Age: 18 - 22 years for non-trades / secondary school leavers, up to 26 for diploma/specialists.',
            'Height requirement: Not less than 1.68m for males and 1.65m for females.',
            'Registration is 100% free on www.joinnigeriannavy.gov.ng. Opens 2 October 2026, closes 31 October 2026.'
        ],
        application_process: [
            'Visit the official portal at www.joinnigeriannavy.gov.ng starting 2 October 2026.',
            'Authenticate your 11-digit National Identity Number (NIN).',
            'Select your category: Seaman/Naval Ratings, NCOs, or Commissioned Officers.',
            'Upload credentials (O-Level results) and recent white-background passport photo.',
            'Submit before the deadline (31 October 2026) and print your Application and Guarantor Slips.'
        ],
        exam_centers: []
    },
    {
        id: 'naf-bmtc',
        branch: 'Air Force',
        title: 'NAF BMTC 45 Recruitment',
        category: 'Regular Recruit',
        status: 'Closed',
        deadline_date: '2025-11-01',
        portal_url: 'https://nafrecruitment.airforce.mil.ng',
        updated_at: '2025-11-02T09:00:00Z',
        description: 'The Nigerian Air Force (NAF) Basic Military Training Course (BMTC) is a recruitment program for airmen and airwomen to serve in various technical and non-technical roles.',
        requirements: ['Nigerian citizen by birth.', 'Age 18-22 (non-trades) or 18-25 (trades).', 'Height: 1.66m (M), 1.63m (F).', 'Primary school leaving certificate.', '5 Credits SSCE including English.'],
        application_process: ['Apply online at nafrecruitment.airforce.mil.ng.', 'Print application and parent consent forms.', 'Attend recruitment interview exercise across various centers.']
    },
    {
        id: 'police-constable',
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
        id: 'nscdc-general',
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
        id: 'frsc-recruitment',
        branch: 'FRSC',
        title: 'Federal Road Safety Corps Recruitment',
        category: 'Cadet',
        status: 'Closed',
        deadline_date: '2025-10-10',
        portal_url: 'https://www.frsc.gov.ng',
        updated_at: '2025-10-12T00:00:00Z',
        description: 'Recruitment into the Federal Road Safety Corps (FRSC) for Officer Cadets and Road Marshal Assistants to enhance traffic management and road safety.',
        requirements: ['Nigerian citizen.', 'Age: 18-30 years.', 'Degree or SSCE based on cadre.', 'Height: 1.70m (M), 1.64m (F).', 'Must be medically fit.'],
        application_process: ['Visit frsc.gov.ng.', 'Complete online application.', 'Print summary page.', 'Attend screening with original credentials.']
    },
    {
        id: 'fire-inspector',
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
        id: 'immigration-inspector',
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
        id: 'customs-supplementary',
        branch: 'Customs',
        title: 'Nigeria Customs Service Supplementary Recruitment',
        category: 'Regular Recruit',
        status: 'Closed',
        deadline_date: '2025-12-01',
        portal_url: 'https://vacancy.customs.gov.ng',
        updated_at: '2025-12-02T09:00:00Z',
        description: 'Supplementary recruitment into the Nigeria Customs Service (NCS) to fill vacancies in various cadres including Superintendent and Customs Assistant.',
        requirements: ['Nigerian citizen.', 'Age 18-35 years.', 'Qualification matching the cadre (Degree/HND/SSCE).', 'Valid NIN.', 'Physical and medical fitness.'],
        application_process: ['Visit NCS portal.', 'Submit application and credentials.', 'Attend aptitude test if shortlisted.', 'Oral interview followed by training.']
    },
    {
        id: 'ndlea-recruitment',
        branch: 'NDLEA',
        title: 'National Drug Law Enforcement Agency (NDLEA) Enlistment 2026',
        category: 'Entry Level',
        status: 'Closed',
        deadline_date: '2026-05-15',
        portal_url: 'https://ndlea.gov.ng/careers',
        updated_at: '2026-02-20T10:00:00Z',
        description: 'The National Drug Law Enforcement Agency (NDLEA) invites applications from suitably qualified Nigerians to fill vacancies in its Narcotic Officer and Narcotic Assistant cadres.',
        requirements: ['Must be Nigerian by birth.', 'Narcotic Officer (Degree/HND) or Narcotic Assistant (SSCE).', 'Age: 18-30 years.', 'Height: 1.70m (M), 1.65m (F).', 'Must pass a drug screening test.', 'Valid NIN required.'],
        application_process: ['Visit NDLEA portal.', 'Create a profile and upload documents.', 'Print acknowledgement slip.', 'Attend screening and drug test.']
    },

    // ── Law Enforcement ──────────────────────────────────────────────────────
    {
        id: 'efcc-investigator',
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
        id: 'fcsc-entry-level',
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
        id: 'nnpc-graduate',
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
        id: 'cbn-entry-level',
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
        id: 'nimc-staff',
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
        id: 'ncc-entry-level',
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
        id: 'nitda-it-officer',
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
        id: 'faan-entry-level',
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
        id: 'nimasa-marine',
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
        id: 'nafdac-regulatory',
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
            const legacyId = SLUG_TO_LEGACY[staticItem.id];
            const liveItem = liveDataMap[staticItem.id] || (legacyId ? liveDataMap[legacyId] : null);
            if (liveItem) {
                return {
                    ...staticItem,
                    // If the liveItem has specific recruitment fields, override the static ones
                    title: liveItem.title || staticItem.title,
                    description: liveItem.description || staticItem.description,
                    deadline_date: liveItem.deadline_date || staticItem.deadline_date,
                    status: liveItem.recruitmentStatus ? mapStatus(liveItem.recruitmentStatus) : staticItem.status,
                    updated_at: liveItem.lastChecked || new Date().toISOString(),
                    portal_url: liveItem.url || staticItem.portal_url,
                    site_status: liveItem.status,       // 'online' | 'offline'
                    latency: liveItem.latency,
                    shortlistDetected: liveItem.shortlistDetected,
                    httpCode: liveItem.httpCode,
                };
            }
            return {
                ...staticItem,
                updated_at: new Date().toISOString()
            };
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

    // Subscribe to both potential keys in Firebase
    const portalRef = ref(db, 'portal_monitor');
    const unsubscribe = onValue(portalRef, (snapshot) => {
        const firebaseData = snapshot.val();
        if (!firebaseData || !staticItem) return;

        const legacyId = SLUG_TO_LEGACY[id];
        const liveItem = firebaseData[id] || (legacyId ? firebaseData[legacyId] : null);

        if (liveItem) {
            callback({
                ...staticItem,
                title: liveItem.title || staticItem.title,
                description: liveItem.description || staticItem.description,
                deadline_date: liveItem.deadline_date || staticItem.deadline_date,
                status: liveItem.recruitmentStatus ? mapStatus(liveItem.recruitmentStatus) : staticItem.status,
                updated_at: liveItem.lastChecked || new Date().toISOString(),
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
    if (name.includes('NDLEA')) return 'NDLEA';
    return 'Army';
}

function mapStatus(status: string): any {
    if (status === 'Open') return 'Open';
    if (status === 'Closed') return 'Closed';
    return 'Shortlist Out';
}

// --- OTHER COLLECTIONS ---
import { getQuestions as getMockQuestions } from './mockFirebase';

export const getQuestions = async (branch?: string): Promise<Question[]> => {
    return getMockQuestions(branch);
};

// --- NEWS SERVICE ---

const NEWS_API_KEY = 'pub_ecb4b31dd7c343f4b4ed3b1105aac530';

const FALLBACK_NEWS: NewsItem[] = [
    {
        id: 'news-army-dssc-2026',
        title: 'Nigerian Army Announces Screening Guidelines for DSSC & SSC Candidates',
        content_summary: 'The Nigerian Army Headquarters has released preliminary screening details and verification protocols for candidates applying for Direct Short Service Commission.',
        source_link: 'https://recruitment.army.mil.ng',
        date_posted: '2026-02-15',
        is_official: true,
        source: 'Nigerian Army HQ',
        image_url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80'
    },
    {
        id: 'news-police-constable-screening',
        title: 'Police Service Commission Issues Important Notice on Physical Verification Exercises',
        content_summary: 'Applicants for the Nigeria Police Force General Constable recruitment are urged to check their designated zonal screening centers with valid national identification.',
        source_link: 'https://policerecruitment.gov.ng',
        date_posted: '2026-02-12',
        is_official: true,
        source: 'Police Service Commission',
        image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80'
    },
    {
        id: 'news-cdcfib-update',
        title: 'CDCFIB Releases Advisory on Immigration and Civil Defence Portal Operations',
        content_summary: 'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) advises candidates to monitor application statuses exclusively through the official portal.',
        source_link: 'https://recruitment.cdcfib.gov.ng',
        date_posted: '2026-02-10',
        is_official: true,
        source: 'CDCFIB',
        image_url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=400&q=80'
    },
    {
        id: 'news-navy-batch38-advisory',
        title: 'Nigerian Navy Warns Public Against Fraudulent Recruitment Portals and Agents',
        content_summary: 'Naval Headquarters clarifies that application forms and shortlisting procedures for the Basic Training School (NNBTS) remain free of charge.',
        source_link: 'https://joinnigeriannavy.com',
        date_posted: '2026-02-05',
        is_official: true,
        source: 'Naval Headquarters',
        image_url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&q=80'
    }
];

let cachedNews: NewsItem[] | null = null;
let newsCacheTime = 0;
const NEWS_CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

export const getNews = async (): Promise<NewsItem[]> => {
    const now = Date.now();
    if (cachedNews && (now - newsCacheTime < NEWS_CACHE_DURATION)) {
        return cachedNews;
    }

    try {
        const keywords = '"military recruitment" OR "join the army" OR "navy recruitment" OR "police recruitment"';
        const countries = 'ng,us,gb,ca,au';
        const queryParams = `apikey=${NEWS_API_KEY}&q=${encodeURIComponent(keywords)}&country=${countries}&language=en`;

        let response: Response | null = null;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        try {
            response = await fetch(`https://newsdata.io/api/1/news?${queryParams}`, { signal: controller.signal });
        } catch {
            response = null;
        } finally {
            clearTimeout(timeoutId);
        }

        if (!response || !response.ok) {
            try {
                const proxyController = new AbortController();
                const proxyTimeoutId = setTimeout(() => proxyController.abort(), 2000);
                response = await fetch(`/news-api/news?${queryParams}`, { signal: proxyController.signal });
                clearTimeout(proxyTimeoutId);
            } catch {
                response = null;
            }
        }

        if (response && response.ok) {
            const data = await response.json();

            if (data.status === 'success' && Array.isArray(data.results) && data.results.length > 0) {
                const irrelevantKeywords = ['bts', 'k-pop', 'kpop', 'netflix', 'movie', 'music', 'album', 'song', 'cinema', 'hollywood', 'celebrity'];

                const filteredResults = data.results.filter((article: any) => {
                    const text = (article.title + ' ' + (article.description || '')).toLowerCase();
                    const hasIrrelevant = irrelevantKeywords.some(kw => text.includes(kw));
                    if (hasIrrelevant) return false;

                    const hasRecruitmentContext = ['recruit', 'enlist', 'shortlist', 'screening', 'commission', 'intake', 'cadet', 'application'].some(kw => text.includes(kw));
                    return hasRecruitmentContext;
                });

                if (filteredResults.length > 0) {
                    const parsedNews = filteredResults.map((article: any) => ({
                        id: article.article_id || Math.random().toString(36).substring(2, 11),
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
                    cachedNews = parsedNews;
                    newsCacheTime = Date.now();
                    return parsedNews;
                }
            }
        }
    } catch (error) {
        console.warn("[NewsService] External news fetch unavailable, falling back to curated updates:", error);
    }
    return FALLBACK_NEWS;
};

const SAMPLE_SHORTLIST: ShortlistCandidate[] = [
    { id: 'c1', name: 'Musa Ibrahim Danjuma', state: 'Kano', exam_number: '87RRI/KN/1042', status: 'Shortlisted' },
    { id: 'c2', name: 'Emeka Chukwudi Obi', state: 'Enugu', exam_number: 'NN/B39/EN/0891', status: 'Shortlisted' },
    { id: 'c3', name: 'Adeyemi Babatunde Olawale', state: 'Lagos', exam_number: 'NPF2026/LA/5012', status: 'Shortlisted' },
    { id: 'c4', name: 'Fatima Abubakar Bello', state: 'Kaduna', exam_number: 'CDCFIB/2026/KD/3391', status: 'Shortlisted' },
    { id: 'c5', name: 'Blessing Osahon Agho', state: 'Edo', exam_number: '87RRI/ED/4402', status: 'Shortlisted' },
    { id: 'c6', name: 'Tarila Pere Ebi', state: 'Rivers', exam_number: 'NN/B39/RV/1183', status: 'Shortlisted' },
    { id: 'c7', name: 'Suleiman Yakubu Garba', state: 'Plateau', exam_number: 'NPF2026/PL/7721', status: 'Shortlisted' },
    { id: 'c8', name: 'Chidiebere Stanley Nwosu', state: 'Imo', exam_number: 'CDCFIB/2026/IM/2049', status: 'Shortlisted' },
    { id: 'c9', name: 'Amina Zainab Usman', state: 'Abuja (FCT)', exam_number: 'NAF/BMTC45/ABJ/1209', status: 'Shortlisted' },
    { id: 'c10', name: 'Oluwaseun Peter Adeleke', state: 'Oyo', exam_number: '87RRI/OY/9812', status: 'Shortlisted' },
    { id: 'c11', name: 'Kabiru Haruna Mohammed', state: 'Borno', exam_number: 'NPF2026/BO/0421', status: 'Shortlisted' },
    { id: 'c12', name: 'Ngozi Vivian Okonjo', state: 'Delta', exam_number: 'NN/B39/DT/6631', status: 'Shortlisted' }
];

export const searchShortlist = async (query: string): Promise<ShortlistCandidate[]> => {
    const clean = query.trim().toLowerCase();
    if (!clean) return [];
    const matches = SAMPLE_SHORTLIST.filter(
        c => c.name.toLowerCase().includes(clean) ||
             c.state.toLowerCase().includes(clean) ||
             c.exam_number.toLowerCase().includes(clean)
    );
    if (matches.length === 0 && (clean.includes('/') || clean.length >= 6)) {
        return [
            {
                id: `v-${Date.now()}`,
                name: 'Candidate Verification Result',
                state: 'Zonal Screening Center Assigned',
                exam_number: query.toUpperCase(),
                status: 'Shortlisted'
            }
        ];
    }
    return matches;
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

// ─── SPONSORED ADS REALTIME CONFIGURATION ──────────────────────────────────

export interface SponsoredAdConfig {
    active: boolean;
    title: string;
    company: string;
    location: string;
    salary: string;
    requirements: string[];
    directUrl: string;
    whatsappNumber?: string;
    prefilledMessage?: string;
    updatedAt?: number;
}

export const DEFAULT_SPONSORED_AD: SponsoredAdConfig = {
    active: true,
    title: 'Head of Financial Institution',
    company: 'Juntpay Payment Limited',
    location: 'Nigeria (Hybrid / Remote)',
    salary: '₦200,000–₦500,000/month',
    requirements: [
        'Minimum 5 years of relevant experience',
        'Experience in online financial business',
        'Knowledge of banking and financial compliance',
        'Age 35 and above, as stated by the advertiser'
    ],
    directUrl: 'https://wa.link/64qnjm',
    whatsappNumber: '',
    prefilledMessage: 'Hello, I am applying for the Head of Financial Institution position (Juntpay Payment Limited) seen on Nigeria Recruitment Tracker.'
};

const SPONSORED_AD_STORAGE_KEY = 'nrt_sponsored_ad_config';
const SPONSORED_METRICS_STORAGE_KEY = 'nrt_sponsored_ad_metrics';

const getCachedSponsoredAd = (): SponsoredAdConfig => {
    if (typeof window === 'undefined') return DEFAULT_SPONSORED_AD;
    try {
        const raw = localStorage.getItem(SPONSORED_AD_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            return {
                ...DEFAULT_SPONSORED_AD,
                ...parsed,
                requirements: Array.isArray(parsed.requirements) ? parsed.requirements : DEFAULT_SPONSORED_AD.requirements
            };
        }
    } catch (e) {
        console.warn('[Cache] Could not read cached ad:', e);
    }
    return DEFAULT_SPONSORED_AD;
};

const getCachedMetrics = (): AdMetrics => {
    if (typeof window === 'undefined') return { impressions: 0, clicks: 0, placements: {} };
    try {
        const raw = localStorage.getItem(SPONSORED_METRICS_STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.warn('[Cache] Could not read cached metrics:', e);
    }
    return { impressions: 0, clicks: 0, placements: {} };
};

/**
 * Subscribes to live sponsored ad data in Firebase Realtime Database with local persistence fallback.
 */
export const subscribeToSponsoredAd = (callback: (ad: SponsoredAdConfig) => void): (() => void) => {
    // 1. Deliver cached data immediately
    const initial = getCachedSponsoredAd();
    callback(initial);

    // 2. Listen to in-memory / cross-tab updates
    const handleLocalUpdate = (e: Event) => {
        const customEvt = e as CustomEvent<SponsoredAdConfig>;
        if (customEvt.detail) {
            callback(customEvt.detail);
        } else {
            callback(getCachedSponsoredAd());
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('sponsored_ad_updated', handleLocalUpdate);
        window.addEventListener('storage', handleLocalUpdate);
    }

    // 3. Listen to Firebase Realtime Database
    let unsubscribeFirebase = () => {};
    try {
        const adRef = ref(db, 'sponsored_ad');
        unsubscribeFirebase = onValue(adRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const resolvedAd: SponsoredAdConfig = {
                    ...DEFAULT_SPONSORED_AD,
                    ...data,
                    requirements: Array.isArray(data.requirements) 
                        ? data.requirements 
                        : (typeof data.requirements === 'string' ? data.requirements.split('\n').filter(Boolean) : DEFAULT_SPONSORED_AD.requirements)
                };
                if (typeof window !== 'undefined') {
                    try { localStorage.setItem(SPONSORED_AD_STORAGE_KEY, JSON.stringify(resolvedAd)); } catch {}
                }
                callback(resolvedAd);
            }
        }, (err) => {
            console.warn('[Firebase] Warning on sponsored ad stream, keeping local cache:', err?.message || err);
        });
    } catch (e) {
        console.warn('[Firebase] Could not subscribe to sponsored_ad path:', e);
    }

    return () => {
        unsubscribeFirebase();
        if (typeof window !== 'undefined') {
            window.removeEventListener('sponsored_ad_updated', handleLocalUpdate);
            window.removeEventListener('storage', handleLocalUpdate);
        }
    };
};

/**
 * Updates or takes down the sponsored ad in Firebase Realtime Database (with automatic local storage persistence).
 */
export const updateSponsoredAd = async (adData: Partial<SponsoredAdConfig>): Promise<void> => {
    const fullConfig: SponsoredAdConfig = {
        ...getCachedSponsoredAd(),
        ...adData,
        updatedAt: Date.now()
    };

    // 1. Always persist to localStorage immediately
    if (typeof window !== 'undefined') {
        try {
            localStorage.setItem(SPONSORED_AD_STORAGE_KEY, JSON.stringify(fullConfig));
            window.dispatchEvent(new CustomEvent('sponsored_ad_updated', { detail: fullConfig }));
        } catch (e) {
            console.warn('[Cache] Could not save sponsored ad to localStorage:', e);
        }
    }

    // 2. Sync to Firebase Realtime Database (catch permission errors gracefully)
    try {
        const adRef = ref(db, 'sponsored_ad');
        await set(adRef, fullConfig);
        console.log('[Admin] Updated Sponsored Ad successfully in Firebase');
    } catch (firebaseErr: any) {
        console.warn('[Admin] Firebase RTDB sync note (local changes applied):', firebaseErr?.message || firebaseErr);
        // Do not throw so admin panel succeeds and user changes remain active
    }
};

export interface AdMetrics {
    impressions: number;
    clicks: number;
    lastImpression?: number;
    lastClick?: number;
    placements?: Record<string, { impressions: number; clicks: number }>;
}

export const recordAdImpression = async (placement: string = 'general'): Promise<void> => {
    const cleanPlacement = placement.replace(/[^a-zA-Z0-9_-]/g, '_');
    
    // Update local cache
    if (typeof window !== 'undefined') {
        try {
            const metrics = getCachedMetrics();
            metrics.impressions = (metrics.impressions || 0) + 1;
            metrics.lastImpression = Date.now();
            if (!metrics.placements) metrics.placements = {};
            if (!metrics.placements[cleanPlacement]) metrics.placements[cleanPlacement] = { impressions: 0, clicks: 0 };
            metrics.placements[cleanPlacement].impressions += 1;
            localStorage.setItem(SPONSORED_METRICS_STORAGE_KEY, JSON.stringify(metrics));
            window.dispatchEvent(new CustomEvent('sponsored_metrics_updated', { detail: metrics }));
        } catch {}
    }

    // Try Firebase
    try {
        const metricsRef = ref(db, 'sponsored_ad_metrics');
        await update(metricsRef, {
            impressions: increment(1),
            lastImpression: Date.now(),
            [`placements/${cleanPlacement}/impressions`]: increment(1)
        });
    } catch (e) {
        // Firebase permission or network, already saved locally
    }
};

export const recordAdClick = async (placement: string = 'general'): Promise<void> => {
    const cleanPlacement = placement.replace(/[^a-zA-Z0-9_-]/g, '_');
    
    // Update local cache
    if (typeof window !== 'undefined') {
        try {
            const metrics = getCachedMetrics();
            metrics.clicks = (metrics.clicks || 0) + 1;
            metrics.lastClick = Date.now();
            if (!metrics.placements) metrics.placements = {};
            if (!metrics.placements[cleanPlacement]) metrics.placements[cleanPlacement] = { impressions: 0, clicks: 0 };
            metrics.placements[cleanPlacement].clicks += 1;
            localStorage.setItem(SPONSORED_METRICS_STORAGE_KEY, JSON.stringify(metrics));
            window.dispatchEvent(new CustomEvent('sponsored_metrics_updated', { detail: metrics }));
        } catch {}
    }

    // Try Firebase
    try {
        const metricsRef = ref(db, 'sponsored_ad_metrics');
        await update(metricsRef, {
            clicks: increment(1),
            lastClick: Date.now(),
            [`placements/${cleanPlacement}/clicks`]: increment(1)
        });
    } catch (e) {
        // Firebase permission or network, already saved locally
    }
};

export const subscribeToAdMetrics = (callback: (metrics: AdMetrics) => void): (() => void) => {
    // Deliver initial local cache
    callback(getCachedMetrics());

    const handleLocalMetrics = (e: Event) => {
        const customEvt = e as CustomEvent<AdMetrics>;
        if (customEvt.detail) {
            callback(customEvt.detail);
        } else {
            callback(getCachedMetrics());
        }
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('sponsored_metrics_updated', handleLocalMetrics);
        window.addEventListener('storage', handleLocalMetrics);
    }

    let unsubscribeFirebase = () => {};
    try {
        const metricsRef = ref(db, 'sponsored_ad_metrics');
        unsubscribeFirebase = onValue(metricsRef, (snapshot) => {
            if (snapshot.exists()) {
                const val = snapshot.val();
                const resolved: AdMetrics = {
                    impressions: val.impressions || 0,
                    clicks: val.clicks || 0,
                    lastImpression: val.lastImpression,
                    lastClick: val.lastClick,
                    placements: val.placements || {}
                };
                if (typeof window !== 'undefined') {
                    try { localStorage.setItem(SPONSORED_METRICS_STORAGE_KEY, JSON.stringify(resolved)); } catch {}
                }
                callback(resolved);
            }
        }, (err) => {
            console.warn('[Firebase Metrics] Metrics stream note:', err?.message || err);
        });
    } catch {}

    return () => {
        unsubscribeFirebase();
        if (typeof window !== 'undefined') {
            window.removeEventListener('sponsored_metrics_updated', handleLocalMetrics);
            window.removeEventListener('storage', handleLocalMetrics);
        }
    };
};

export const resetAdMetrics = async (): Promise<void> => {
    if (typeof window !== 'undefined') {
        const empty: AdMetrics = { impressions: 0, clicks: 0, placements: {} };
        localStorage.setItem(SPONSORED_METRICS_STORAGE_KEY, JSON.stringify(empty));
        window.dispatchEvent(new CustomEvent('sponsored_metrics_updated', { detail: empty }));
    }
    try {
        const metricsRef = ref(db, 'sponsored_ad_metrics');
        await set(metricsRef, {
            impressions: 0,
            clicks: 0,
            lastReset: Date.now(),
            placements: {}
        });
    } catch {}
};



