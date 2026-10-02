export interface GuideArticle {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  category: 'Live Status' | 'How-to-Apply' | 'Shortlist' | 'Requirements' | 'Past Questions' | 'Salary' | 'Screening' | 'Tutorial' | 'Comparison';
  date: string;
  branch: string; // Associated branch name for contextual lookup
  keywords: string[];
  content: string[]; // Content blocks (paragraphs/bullets/markdown)
  statusBadge?: string;
  officialPortalUrl?: string;
  scamNotice?: string;
  quickTable?: { headers: string[]; rows: string[][] };
  faqs?: { question: string; answer: string }[];
  howToSteps?: { name: string; text: string }[];
  quickAnswer?: {
    question: string;
    directAnswer: string;
    statusText: string;
    statusVariant?: 'success' | 'warning' | 'danger' | 'info';
    metrics?: { label: string; value: string; highlight?: boolean }[];
  };
}

export const GUIDES: GuideArticle[] = [
  // ==========================================
  // TOPIC 1: LIVE STATUS & "IS THE FORM OUT?"
  // ==========================================
  {
    slug: 'is-nigerian-army-form-out',
    title: 'Is the Nigerian Army Recruitment Form Out for 2026? (Live Status & Verified Dates)',
    seoTitle: 'Is Nigerian Army Form Out for 2026? Live Portal Status',
    description: 'Find out if Nigerian Army 88 RRI or DSSC recruitment form is out for 2026. Verified updates from recruitment.army.mil.ng, registration dates & requirements.',
    category: 'Live Status',
    date: '2026-09-11',
    branch: 'Army',
    statusBadge: 'VERIFYING INTAKE / CYCLE PENDING',
    officialPortalUrl: 'https://recruitment.army.mil.ng',
    scamNotice: 'OFFICIAL ARMY NOTICE: The Nigerian Army application is 100% FREE. The Army never sells scratch cards, PINs, or slots through WhatsApp, social media groups, or POS agents. Never pay anyone claiming to be a recruitment officer.',
    quickAnswer: {
      question: 'Is the Nigerian Army Recruitment Form Out for 2026?',
      directAnswer: 'The Nigerian Army Regular Recruit Intake (88 RRI) and Direct Short Service Commission (DSSC) 2026 portal opens at recruitment.army.mil.ng. Enlistment is 100% free of charge. Applicants require a minimum of 4-5 O-Level credits, must be between 18 and 22 years (tradesmen up to 26; DSSC 20-30), and meet minimum height requirements (1.68m male, 1.65m female).',
      statusText: 'Official Portal Active • Free Registration',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (100% Free)', highlight: true },
        { label: 'Official Portal', value: 'recruitment.army.mil.ng' },
        { label: 'Age Limit', value: '18 - 22 (RRI) / 30 (DSSC)' },
        { label: 'Minimum Height', value: '1.68m (M) | 1.65m (F)' }
      ]
    },
    keywords: [
      'is nigerian army form out for 2026',
      'nigerian army recruitment 2026 closing date',
      'army form portal recruitment.army.mil.ng',
      'army 87 rri form out',
      'how much is army form',
      'army enlistment status 2026'
    ],
    quickTable: {
      headers: ['Key Metric', 'Official Details'],
      rows: [
        ['Recruitment Body', 'Nigerian Army (HQ Garrison / AHQ)'],
        ['Available Categories', 'Regular Recruit Intake (RRI 87 & 88) and DSSC Course 30/31'],
        ['Official Application Portal', 'recruitment.army.mil.ng & tracking.armynotification.com.ng'],
        ['Application Fee', '₦0.00 (Completely Free)'],
        ['Minimum Academic Requirement', '4 to 5 O-Level Credits (WAEC/NECO/NABTEB/GCE)'],
        ['Age Bracket', '18–22 years (Non-trades) / 18–26 years (Tradesmen) / 20–30 (DSSC)'],
        ['Height Requirement', 'Male: 1.68m (5ft 6in) | Female: 1.65m (5ft 5in)'],
        ['Depot Training Camp', 'Depot Nigerian Army, Zaria, Kaduna State (6 Months)']
      ]
    },
    content: [
      'The Nigerian Army Regular Recruit Intake (RRI) and Direct Short Service Commission (DSSC) registration portal is officially hosted on recruitment.army.mil.ng. For step-by-step account setup and sign in instructions, visit our dedicated recruitment.army.mil.ng Portal Login Guide (/recruitment-army-mil-ng-portal-login).',
      'The Federal Government and Headquarters of the Nigerian Army conduct recruitment exercises annually. The application is completely free of charge. Never pay any recruitment agent, registration officer, or third-party bank account for application scratch cards or PINs.',
      'Official Cycle Dates & Deadlines for 2026:',
      '1. Online Enlistment Flag-off: Advertised nationwide across national dailies, federal gazettes, and the official army web portal.',
      '2. Portal Duration: The online submission window remains open for 4 to 6 weeks from the official opening announcement.',
      '3. Application Slip Printing Window: Candidates receive a 7-day grace period to log into tracking.armynotification.com.ng to print summary sheets and guarantor forms.',
      '4. State Zonal Physical Screening: Commences 2 to 3 weeks after portal closure across all 36 state military formations.',
      '4 Crucial Anti-Scam Rules Every Candidate Must Know:',
      '• No Scratch Cards: The Nigerian Army does not use scratch cards or payment vouchers. Any portal asking for Remita, Paystack, or OPay transactions is fraudulent.',
      '• Check the Domain Extension: Only visit URLs ending in .mil.ng or .gov.ng. Avoid domains ending in .blogspot.com, .site, or unofficial .com.ng mirrors.',
      '• No Direct Bank Transfers: Authentic Army Recruiting Officers will never solicit funds on WhatsApp or Facebook to guarantee shortlisting.',
      '• Free Guarantor Endorsements: Guarantor forms must be endorsed by recognized local government chairmen, traditional rulers, or civil servants without any official fee.',
      'What Should You Prepare While Waiting for the Portal to Open?',
      '• Obtain a clean, verifiable National Identification Number (NIN) slip from NIMC. Ensure your date of birth matches your educational certificates exactly.',
      '• Scan clean digital copies of your O-Level statements of result (no more than 2 sittings).',
      '• Prepare a recent passport photograph with a plain white background (under 100KB, JPEG format).',
      '• Secure your Certificate of State of Origin from your Local Government Area.'
    ],
    faqs: [
      {
        question: 'Is the Nigerian Army recruitment form out for 2026?',
        answer: 'The Nigerian Army publishes official recruitment announcements across national media and via recruitment.army.mil.ng. You can monitor our live tracker for daily automated portal connectivity checks.'
      },
      {
        question: 'How much is the Nigerian Army form?',
        answer: 'The Nigerian Army recruitment form is 100% free. The Army does not sell application PINs, scratch cards, or registration vouchers.'
      },
      {
        question: 'What is the age limit for Nigerian Army recruitment 2026?',
        answer: 'Non-tradesmen must be between 18 and 22 years old at the time of entry. Tradesmen and tradeswomen holding technical diplomas or trade test certifications can apply up to 26 years of age.'
      },
      {
        question: 'How do I apply for the Nigerian Army recruitment 2026?',
        answer: 'Log onto the authorized website recruitment.army.mil.ng, choose either Non-Trades or Tradesmen category, fill in your NIN and bio-data, upload your educational documents, and submit to generate your application number.'
      },
      {
        question: 'How much does a Nigerian Army recruit earn per month?',
        answer: 'Under the Consolidated Armed Forces Salary Structure (CONAFSS), a newly passed-out recruit (Private) earns between ₦77,000 and ₦85,000 monthly, plus free military accommodation, medical care, and operational allowances.'
      }
    ]
  },
  {
    slug: 'is-nigerian-navy-batch-39-form-out',
    title: 'Nigerian Navy Batch 39 Recruitment 2026: Is the Form Out? (Live Portal Status)',
    seoTitle: 'Nigerian Navy Batch 39 Form 2026: Is It Out? Portal Status',
    description: 'Check if Nigerian Navy Batch 39 recruitment form 2026 is out at joinnigeriannavy.gov.ng. Official opening date, closing date, 1.68m height & requirements.',
    category: 'Live Status',
    date: '2026-09-11',
    branch: 'Navy',
    statusBadge: 'CYCLE INTAKE MONITORING',
    officialPortalUrl: 'https://joinnigeriannavy.com',
    scamNotice: 'OFFICIAL NAVY DISCLAIMER: Registration on joinnigeriannavy.com is completely free. The Naval Headquarters does not authorize agents or cybercafes to collect payments for navy forms.',
    quickAnswer: {
      question: 'Is Nigerian Navy Batch 39 Recruitment Form Out for 2026?',
      directAnswer: 'The Nigerian Navy Basic Military Training Course (BMTC Batch 39) recruitment portal opens at joinnigeriannavy.com. Registration is 100% free with no scratch cards or tokens required. Applicants need 5 O-Level credits including English and Mathematics, must be aged 18 to 22 (tradesmen up to 26), and satisfy the 1.68m (male) and 1.65m (female) height criteria.',
      statusText: 'Portal Active • Free Application',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (Completely Free)', highlight: true },
        { label: 'Official Portal', value: 'joinnigeriannavy.com' },
        { label: 'Age Criteria', value: '18 - 22 yrs (Non-trades)' },
        { label: 'Minimum Height', value: '1.68m (Male) | 1.65m (Female)' }
      ]
    },
    keywords: [
      'is nigerian navy batch 39 form out',
      'navy batch 39 recruitment date 2026',
      'joinnigeriannavy portal opening',
      'navy form 2026 closing date',
      'navy bmtc 39 application'
    ],
    quickTable: {
      headers: ['Parameter', 'Navy BMTC 39 Guidelines'],
      rows: [
        ['Recruitment Cadre', 'Basic Military Training Course (BMTC Batch 39)'],
        ['Authorized Website', 'joinnigeriannavy.com'],
        ['Application Fee', 'Free of Charge (₦0.00)'],
        ['Educational Requirement', 'SSCE/NECO/NABTEB (5 Credits including English & Maths)'],
        ['Age Limit', '18 to 22 years (General Duty) / 18 to 26 years (Specialists)'],
        ['Training School', 'Nigerian Navy Basic Training School (NNBTS), Onne, Rivers State']
      ]
    },
    content: [
      'The Nigerian Navy conducts annual recruitment for secondary school leavers, diploma holders, and artisans through the Basic Military Training Course (BMTC). Batch 39 applications are managed on joinnigeriannavy.com.',
      'Key Information on the Batch 39 Application Window:',
      '• Application Period: Open for 4 weeks following official gazetting by the Chief of Naval Staff (CNS).',
      '• Eligibility Verification: Candidate National Identity Number (NIN) is authenticated in real-time via the NIMC server.',
      '• Free Entry: Registration is 100% free. No processing fee, registration scratch card, or gate fee is charged.',
      '• Screening Venues: Shortlisted candidates participate in nationwide aptitude tests at designated Nigerian Navy testing centers.'
    ],
    faqs: [
      {
        question: 'When will Nigerian Navy Batch 39 recruitment start?',
        answer: 'The Navy typically commences BMTC recruitment during the second half of the year. Bookmark this page for real-time ping updates from joinnigeriannavy.com.'
      },
      {
        question: 'Can I apply for Nigerian Navy Batch 39 with awaiting results?',
        answer: 'No. The Nigerian Navy does not accept awaiting results. You must possess original statements of result or verifiable certificates with at least 5 credits.'
      },
      {
        question: 'What is the salary of an Ordinary Seaman in the Nigerian Navy?',
        answer: 'An Ordinary Seaman earns approximately ₦78,000 to ₦86,000 per month under the CONAFSS scale, alongside offshore sailing allowances and naval medical welfare.'
      }
    ]
  },
  {
    slug: 'is-nigerian-air-force-form-out',
    title: 'Is Nigerian Air Force Recruitment Form Out for 2026? (BMTC 45 & DSSC Live Portal Status)',
    seoTitle: 'Is Nigerian Air Force Form Out for 2026? Live Portal Status',
    description: 'Find out if Nigerian Air Force (NAF) BMTC 45 airmen/airwomen recruitment form is out for 2026. Official dates from nafrecruitment.airforce.mil.ng, requirements & fee.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'Air Force',
    statusBadge: 'OFFICIAL INTAKE CYCLE PENDING / ACTIVE MONITORING',
    officialPortalUrl: 'https://nafrecruitment.airforce.mil.ng',
    scamNotice: 'OFFICIAL NAF NOTICE: The Nigerian Air Force application is 100% FREE. The NAF does not sell scratch cards, PIN codes, or application forms. Never pay money to any POS agent, WhatsApp group, or individual claiming to be a recruitment officer.',
    quickAnswer: {
      question: 'Is the Nigerian Air Force Recruitment Form Out for 2026?',
      directAnswer: 'The Nigerian Air Force (NAF) Basic Military Training Course (BMTC Batch 45) for Airmen and Airwomen and Direct Short Service Commission (DSSC) will open on the official portal nafrecruitment.airforce.mil.ng. Enlistment is 100% free of charge. Candidates require 5 O-Level credits (WAEC/NECO/NABTEB) including English Language and Mathematics in max 2 sittings, must be aged 18 to 22 years (tradesmen up to 28), and satisfy height criteria of 1.66m (male) and 1.63m (female).',
      statusText: 'Portal Monitored Daily • 100% Free Application',
      statusVariant: 'info',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (100% Free)', highlight: true },
        { label: 'Official Portal', value: 'nafrecruitment.airforce.mil.ng' },
        { label: 'Age Limit', value: '18 - 22 (Non-Trades) / Up to 28 (Trades)' },
        { label: 'Minimum Height', value: '1.66m (M) | 1.63m (F)' }
      ]
    },
    keywords: [
      'is nigerian air force form out for 2026',
      'naf recruitment 2026',
      'when is air force form coming out 2026',
      'naf recruitment portal nafrecruitment.airforce.mil.ng',
      'is air force form out',
      'nigerian air force bmtc 45 recruitment 2026',
      'how much is air force form',
      'nigerian air force recruitment closing date',
      'air force recruitment requirements 2026'
    ],
    quickTable: {
      headers: ['Recruitment Metric', 'Official Air Force (NAF) Guidelines'],
      rows: [
        ['Enlisting Agency', 'Nigerian Air Force (Headquarters NAF, Abuja)'],
        ['Available Cadres', 'Basic Military Training Course (BMTC 45) & DSSC 33/34'],
        ['Authorized Application Portal', 'nafrecruitment.airforce.mil.ng'],
        ['Application Fee', '₦0.00 (Completely Free - Zero Scratch Card)'],
        ['Minimum Academic Qualification', '5 SSCE Credits (WAEC/NECO/NABTEB/GCE) with English & Maths (max 2 sittings)'],
        ['Age Bracket', '18–22 years (Non-Tradesmen) | 18–28 years (Tradesmen/Specialists/Drivers)'],
        ['Height Standards', 'Male: 1.66m (5ft 5in) | Female: 1.63m (5ft 4in)'],
        ['Depot Training Ground', 'Military Training Centre (MTC), NAF Base Kaduna (6 Months)'],
        ['Entry Monthly Salary', '₦105,000 – ₦125,000 (Aircraftman / 2026 CONAFSS Scale)']
      ]
    },
    content: [
      'The Nigerian Air Force (NAF) conducts nationwide recruitment for young Nigerian citizens seeking to serve as airmen, airwomen, or commissioned officers through the Basic Military Training Course (BMTC) and Direct Short Service Commission (DSSC).',
      'Official Application Portal & Free Registration Notice:',
      'All official registrations are hosted strictly on nafrecruitment.airforce.mil.ng. Under Federal Government and Armed Forces of Nigeria directives, the recruitment process is 100% free of charge. No payment vouchers, scratch cards, or registration bank accounts are required.',
      'Key Air Force Recruitment Cadres Explained:',
      '1. BMTC Non-Tradesmen (General Duties): Targeted at secondary school leavers holding SSCE/WAEC/NECO/NABTEB with 5 credits including Mathematics and English Language in not more than 2 sittings. Age requirement: 18 to 22 years old.',
      '2. BMTC Tradesmen and Tradeswomen: Designed for candidates with vocational or technical qualifications such as National Diploma (ND), NCE, City & Guilds, or Federal Ministry of Labour Trade Test Grades 1, 2, or 3 (e.g., Aircraft Maintenance, Nursing, Lab Science, Building, Electrical Engineering, Drivers, Military Band). Age limit: 18 to 28 years.',
      '3. Direct Short Service Commission (DSSC): Open to university graduates (B.Sc, B.Eng, MBBS, LLB) holding a minimum of Second Class Lower division with completed NYSC discharge or exemption. Age range: 20 to 30 years (medical specialists up to 35).',
      'Physical and Medical Standards Required for NAF Enlistment:',
      '• Height Requirements: Minimum of 1.66 meters (5 feet 5 inches) for male applicants, and 1.63 meters (5 feet 4 inches) for female applicants.',
      '• Chest Measurement: Minimum expanded chest measurement of 0.86 meters (34 inches) for male candidates.',
      '• Medical Cleanliness: Must be free from knock-knees, bow legs, flat feet, visual impairment (must possess normal colour vision), surgical scars, tattoo marks, and chronic medical ailments like asthma or sickle cell disease.',
      '• Citizenship & Marital Status: Must be an unmarried Nigerian citizen by birth.',
      'Important Anti-Scam Advisory for All Air Force Aspirants:',
      '• Beware of Fake Portals: Fraudulent websites often use unofficial domains like .com.ng, .site, or blog pages. Always verify the domain ends in .airforce.mil.ng.',
      '• Never Pay Anyone for "Replacement Slots": Authentic Air Force recruitment is strictly merit-based and determined by computer-based aptitude tests and physical screening scores. No recruiting officer is allocated "shortlisted quota slots" to sell.'
    ],
    faqs: [
      {
        question: 'Is the Nigerian Air Force recruitment form out for 2026?',
        answer: 'The Nigerian Air Force announces official recruitment windows across national newspapers and at nafrecruitment.airforce.mil.ng. You can check our live tracker daily for real-time portal status updates.'
      },
      {
        question: 'How much is the Nigerian Air Force form?',
        answer: 'The Nigerian Air Force recruitment form is 100% FREE. The NAF does not charge any application fee or sell registration scratch cards.'
      },
      {
        question: 'What is the age limit for Nigerian Air Force BMTC recruitment?',
        answer: 'For Non-Tradesmen (secondary school certificate holders), the age limit is 18 to 22 years. For Tradesmen/Tradeswomen holding diplomas or trade tests, candidates can apply up to 28 years.'
      },
      {
        question: 'What is the minimum height requirement for the Nigerian Air Force?',
        answer: 'Male candidates must have a minimum height of 1.66m (5ft 5in), while female candidates must measure at least 1.63m (5ft 4in).'
      },
      {
        question: 'Does the Nigerian Air Force accept awaiting results (AR)?',
        answer: 'No. The Nigerian Air Force does not accept awaiting results. All candidates must possess complete and verified original certificates or official statements of result at the time of online application and physical screening.'
      },
      {
        question: 'Where is the basic military training for Air Force recruits conducted?',
        answer: 'Selected airmen and airwomen undergo 6 months of rigorous military training at the Military Training Centre (MTC), NAF Base Kaduna.'
      }
    ]
  },
  {
    slug: 'is-police-recruitment-form-out',
    title: 'Nigeria Police Recruitment 2026 Out? NPF Constable Live Status & Portal Date',
    seoTitle: 'Nigeria Police Recruitment 2026 Out? NPF Live Status',
    description: 'Is Nigeria Police Force (NPF) Constable recruitment form out for 2026? Check portal status, PSC guidelines, physical criteria & closing dates.',
    category: 'Live Status',
    date: '2026-09-11',
    branch: 'Police',
    statusBadge: 'PSC CADRE PENDING',
    officialPortalUrl: 'https://apply.policerecruitment.gov.ng',
    scamNotice: 'POLICE SERVICE COMMISSION WARNING: Police constable recruitment is entirely free. Do not patronize anyone promising automatic placement or CBT test leakages.',
    keywords: [
      'is police recruitment form out for 2026',
      'npf constable recruitment portal 2026',
      'police service commission recruitment',
      'police form closing date',
      'npf online application status'
    ],
    content: [
      'The Police Service Commission (PSC) in conjunction with the Nigeria Police Force (NPF) conducts nationwide enlistment for General Duty Constables and Specialists.',
      'Key Enlistment Rules for Nigeria Police Force:',
      '• Minimum Education: 5 Credits in WAEC, NECO, or NABTEB including English Language and Mathematics in not more than 2 sittings.',
      '• Age Range: 18 to 25 years old at the time of enlistment.',
      '• Height Benchmark: Male applicants must measure at least 1.67m (5ft 6in) while female applicants must measure at least 1.64m (5ft 5in).',
      '• CBT Examination: Written aptitude assessments are administered through accredited JAMB computer centers nationwide.'
    ],
    faqs: [
      {
        question: 'How do I apply for the Nigeria Police 2026 recruitment?',
        answer: 'Visit apply.policerecruitment.gov.ng when the window is declared open by the PSC, complete the National Identification Number validation, fill the application form, and print your guarantor forms.'
      },
      {
        question: 'What is the monthly salary of a Police Constable in Nigeria?',
        answer: 'A Police Constable (Grade Level 03) receives an estimated ₦84,000 to ₦92,000 monthly following federal police wage increments.'
      }
    ]
  },
  {
    slug: 'is-cdcfib-recruitment-form-out',
    title: 'CDCFIB Recruitment Form 2026 Out? Immigration, Civil Defence, Fire & Prisons Status',
    seoTitle: 'CDCFIB Recruitment Form 2026 Out? NIS & NSCDC Portal Status',
    description: 'Check if CDCFIB recruitment form 2026 is out on cdcfib.career for Civil Defence (NSCDC), Immigration (NIS) & Fire Service. Official portal dates & alerts.',
    category: 'Live Status',
    date: '2026-09-11',
    branch: 'Civil Defence',
    statusBadge: 'BOARD NOTIFICATION ACTIVE',
    officialPortalUrl: 'https://cdcfib.career',
    scamNotice: 'CDCFIB ANTI-FRAUD ADVISORY: The Civil Defence, Correctional, Fire and Immigration Services Board does not charge application fees. Avoid fraudulent third-party payment links.',
    quickAnswer: {
      question: 'Is CDCFIB Recruitment Form Out for 2026? (NIS, NSCDC, Fire, Prisons)',
      directAnswer: 'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) recruitment portal is hosted exclusively at cdcfib.career. Registration is 100% free across Superintendent, Inspectorate, and Assistant cadres. Check live portal status to verify active application windows and shortlisted candidate notifications.',
      statusText: 'Official Board Status: cdcfib.career',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (100% Free)', highlight: true },
        { label: 'Official Portal', value: 'cdcfib.career' },
        { label: 'Agencies', value: 'NSCDC, NIS, FFS, NCoS' },
        { label: 'Cadres', value: 'Superintendent / Inspector / Assistant' }
      ]
    },
    keywords: [
      'is cdcfib recruitment form out for 2026',
      'immigration recruitment 2026 portal',
      'nscdc form out 2026',
      'cdcfib career application status',
      'civil defence recruitment closing date'
    ],
    content: [
      'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) coordinates recruitment for the four paramilitary services under the Federal Ministry of Interior:',
      '• Nigeria Immigration Service (NIS)',
      '• Nigeria Security and Civil Defence Corps (NSCDC)',
      '• Federal Fire Service (FFS)',
      '• Nigerian Correctional Service (NCoS)',
      'The board operates an online recruitment portal at cdcfib.career where candidates can register across Superintendent, Inspectorate, and Assistant cadres.'
    ],
    faqs: [
      {
        question: 'Which agencies recruit under the CDCFIB board?',
        answer: 'The CDCFIB recruits for the Nigeria Immigration Service (NIS), Nigeria Security and Civil Defence Corps (NSCDC), Federal Fire Service (FFS), and Nigerian Correctional Service (NCoS).'
      },
      {
        question: 'Can I apply for more than one agency under CDCFIB?',
        answer: 'No. The CDCFIB system flags duplicate applications using your NIN. You must select only one service and one cadre to avoid automatic disqualification.'
      }
    ]
  },

  // ==========================================
  // TOPIC 2: HOW-TO-APPLY & PORTAL GUIDES
  // ==========================================
  {
    slug: 'how-to-apply-nigerian-navy-batch',
    title: 'How to Apply for Nigerian Navy Batch 39 Recruitment (Step-by-Step Guide)',
    seoTitle: 'How to Apply for Nigerian Navy Batch 39 (2026 Step-by-Step)',
    description: 'Step-by-step guide on how to apply for Nigerian Navy Batch 39 recruitment 2026 on joinnigeriannavy.gov.ng. Document upload, NIN verification & slip reprint.',
    category: 'How-to-Apply',
    date: '2026-09-11',
    branch: 'Navy',
    statusBadge: 'VERIFIED REGISTRATION WORKFLOW',
    officialPortalUrl: 'https://www.joinnigeriannavy.gov.ng',
    keywords: [
      'how to apply for nigerian navy batch 39',
      'joinnigeriannavy portal registration',
      'navy batch 39 application steps',
      'nigerian navy document size',
      'navy form submission guide'
    ],
    howToSteps: [
      { name: 'Access Official Navy Portal', text: 'Navigate to https://www.joinnigeriannavy.gov.ng using a secure web browser.' },
      { name: 'Register Candidate Account', text: 'Click on Apply Now, enter your functional email and create a strong alphanumeric password.' },
      { name: 'Validate NIMC NIN Record', text: 'Enter your 11-digit NIN to synchronize your bio-data automatically with the NIMC database.' },
      { name: 'Select Rating Cadre', text: 'Choose Category A (General Duties / Non-Tradesmen) or Category B (Technical & Tradesmen).' },
      { name: 'Upload Credentials & Passport', text: 'Upload clear scans of O-Level results, LGA indigene letter, and a crisp passport photo under 100KB.' },
      { name: 'Review, Submit & Print PDF Slips', text: 'Submit the application and print the Applicant Summary, Parent Consent, and Guarantor Forms.' }
    ],
    content: [
      'Applying for the Nigerian Navy Basic Military Training Course (BMTC Batch 39) requires meticulous attention to detail. Discrepancies between your National Identification Number (NIN) bio-data and educational certificates are the #1 cause of immediate disqualification.',
      'Mandatory Credentials & Technical Requirements Before Starting:',
      '• National Identification Number (NIN): Issued by NIMC (must contain 11 digits and verified date of birth).',
      '• O-Level Result: WAEC, NECO, GCE, or NABTEB with minimum 5 credits in not more than 2 sittings (English and Maths compulsory).',
      '• Birth Certificate or Age Declaration: Sworn at an authorized State or Federal High Court within 5 years.',
      '• Certificate of State of Origin: Signed by your Local Government Chairman or Secretary.',
      '• Digital Passport Photograph: Plain white background, full face forward, size between 20KB and 50KB (JPEG format).',
      '• Valid Email Address & Phone Number: Kept active throughout the recruitment cycle for screening SMS and venue alerts.',
      '6 Steps to Complete Your Nigerian Navy Batch 39 Application:',
      '1. Step 1: Open the Official Navy Portal at www.joinnigeriannavy.gov.ng.',
      '2. Step 2: Register a New Candidate Profile with your active email address and phone number.',
      '3. Step 3: Authenticate Your NIN Record and confirm name spellings match your school certificates.',
      '4. Step 4: Choose Your Enlistment Category (Category A for secondary school leavers, Category B for tradesmen/technicians).',
      '5. Step 5: Upload Credentials & Passport. Ensure your scans are legible with zero blurriness.',
      '6. Step 6: Review, Submit, and Print Slips (Summary Slip with Barcode, Guarantor Endorsement, and Parent Consent Form).'
    ],
    faqs: [
      {
        question: 'Can I apply for Nigerian Navy Batch 39 with awaiting results?',
        answer: 'No. The Nigerian Navy does not accept awaiting results. All candidates must possess complete original certificates or computer printouts with verifiable grades at the time of submission.'
      },
      {
        question: 'Can I combine WAEC and NECO results for Nigerian Navy recruitment?',
        answer: 'Yes. Candidates can combine two sittings from WAEC, NECO, or NABTEB to complete their required 5 credits, provided English Language and Mathematics are passed at credit level.'
      },
      {
        question: 'Who can sign as my guarantor for the Navy enlistment?',
        answer: 'Authorized guarantors include Traditional Rulers (First/Second Class), Civil Servants not below Grade Level 12, Police Officers not below CSP, or Military Officers from Major/Lt Commander and above.'
      }
    ]
  },
  {
    slug: 'how-to-apply-nigerian-air-force',
    title: 'How to Apply for Nigerian Air Force Recruitment 2026 (BMTC Step-by-Step Guide)',
    seoTitle: 'How to Apply for Nigerian Air Force (2026 BMTC Step-by-Step)',
    description: 'Step-by-step guide on how to apply for Nigerian Air Force BMTC 45 recruitment 2026 on nafrecruitment.airforce.mil.ng. Account creation, NIN sync, document upload & slip reprint.',
    category: 'How-to-Apply',
    date: '2026-10-02',
    branch: 'Air Force',
    statusBadge: 'VERIFIED NAF REGISTRATION WORKFLOW',
    officialPortalUrl: 'https://nafrecruitment.airforce.mil.ng',
    keywords: [
      'how to apply for nigerian air force',
      'how to apply for nigerian air force recruitment 2026',
      'nafrecruitment.airforce.mil.ng portal create account',
      'nigerian air force bmtc application steps',
      'naf recruitment registration guide',
      'nigerian air force print confirmation slip',
      'naf form upload requirements',
      'air force attestation form download'
    ],
    howToSteps: [
      { name: 'Access Official NAF Portal', text: 'Open your web browser and navigate directly to https://nafrecruitment.airforce.mil.ng.' },
      { name: 'Create Candidate Account', text: 'Click "Start Application", input your active email address, and set a strong alphanumeric password to initiate your registration.' },
      { name: 'Authenticate NIMC NIN Details', text: 'Supply your 11-digit National Identification Number (NIN) to automatically synchronize your bio-data with the NIMC database.' },
      { name: 'Select Enlistment Cadre', text: 'Choose Non-Tradesmen (General Duties) or Tradesmen/Tradeswomen according to your educational credentials.' },
      { name: 'Upload Scanned Documents & Passport', text: 'Upload legible scans of your O-Level results, Certificate of Indigeneship, and white-background passport photo (size between 20KB and 50KB).' },
      { name: 'Review, Submit & Print Slips', text: 'Review all filled fields, submit your application, and download and print your Acknowledgement Card and Attestation Form.' }
    ],
    content: [
      'Applying for the Nigerian Air Force Basic Military Training Course (BMTC 45) requires careful preparation and strict adherence to portal guidelines. Any discrepancy between your National Identification Number (NIN) record and educational certificates will lead to automatic disqualification.',
      'Mandatory Requirements & Documents Needed Before You Start:',
      '• National Identification Number (NIN): Your 11-digit NIN slip with correct name spelling and verified birth date.',
      '• O-Level Certificate: WAEC, NECO, GCE, or NABTEB with minimum 5 credits including English Language and Mathematics in max 2 sittings.',
      '• Certificate of State of Origin: Signed by your Local Government Chairman or authorized Secretary.',
      '• Birth Certificate or Court Age Declaration: Certified age declaration sworn at a High Court within the last 5 years.',
      '• Digital Passport Photograph: Plain white background, full face view, size 20KB–50KB (JPEG/PNG format).',
      '• Valid Email Address & Phone Number: Maintained active throughout the recruitment cycle for examination alerts.',
      'Step-by-Step Walkthrough to Complete Your NAF Application:',
      '1. Step 1: Open the Official Website: Navigate to nafrecruitment.airforce.mil.ng on a desktop computer or tablet for optimal formatting.',
      '2. Step 2: Register a New Candidate Account: Provide a functional email address and a secure password. You will receive an activation code or verification link.',
      '3. Step 3: Enter Your NIMC NIN: The system connects directly to the NIMC database. Confirm your legal name, gender, and date of birth match your academic records.',
      '4. Step 4: Choose Your Cadre: Select either Non-Tradesmen (SSCE level) or Tradesmen (OND/NCE/Trade Test certified).',
      '5. Step 5: Fill Academic Background & Upload Files: Enter your exam year, center number, and grades. Upload digital copies of all mandatory documents.',
      '6. Step 6: Final Review & Submission: Double-check every field before clicking Submit. Once submitted, bio-data cannot be modified.',
      'Critical Forms You Must Print Immediately After Submission:',
      '• Acknowledgement Card / Confirmation Slip: Contains your unique Application Number and passport photograph with QR verification code.',
      '• Attestation Form (Guarantor Form): Must be signed and stamped by an authorized referee (e.g. Traditional Ruler, Civil Servant GL 12+, Police Officer CSP+, or Military Officer Major/Squadron Leader+).',
      '• Parent / Guardian Consent Form: Signed by your biological parents or legal guardians permitting enlistment.',
      '• Local Government Area (LGA) Indigene Attestation: Validates your state and local government quota allocation.'
    ],
    faqs: [
      {
        question: 'Can I apply for Nigerian Air Force with awaiting results?',
        answer: 'No. The Nigerian Air Force requires all applicants to have complete, verifiable results at the time of registration. Awaiting results are not entertained.'
      },
      {
        question: 'Can I combine WAEC and NECO results for Air Force recruitment?',
        answer: 'Yes. You are allowed to combine results from two sittings (e.g., WAEC and NECO, or NECO and NABTEB) to meet the 5 credits requirement, provided English and Maths are passed at credit level.'
      },
      {
        question: 'Who is eligible to sign the Nigerian Air Force Attestation Form?',
        answer: 'Authorized referees include First or Second Class Traditional Rulers, Civil Servants not below Grade Level 12, Police Officers not below Chief Superintendent of Police (CSP), or Military Officers not below Major or Squadron Leader.'
      },
      {
        question: 'How can I reprint my Nigerian Air Force confirmation slip if lost?',
        answer: 'You can log back into nafrecruitment.airforce.mil.ng using your registered email and password at any time during the active recruitment cycle to download or reprint your slips.'
      }
    ]
  },
  {
    slug: 'how-to-apply-cdcfib-portal',
    title: 'CDCFIB Recruitment Portal 2026: cdcfib.career Login & Application Guide',
    seoTitle: 'CDCFIB Recruitment Portal 2026: cdcfib.career Login & Form',
    description: 'Apply on CDCFIB recruitment portal 2026 at cdcfib.career. Official guide for Civil Defence (NSCDC), Immigration (NIS) & Fire login, NIN sync, requirements & form.',
    category: 'How-to-Apply',
    date: '2026-10-02',
    branch: 'Civil Defence',
    statusBadge: 'CDCFIB OFFICIAL RECRUITMENT PORTAL GUIDE',
    officialPortalUrl: 'https://cdcfib.career',
    keywords: [
      'cdcfib recruitment portal 2026',
      'cdcfib portal',
      'cdcfib recruitment portal',
      'cdcfib career',
      'cdcfib.career',
      'cdcfib recruitment portal login',
      'cdcfib portal 2026',
      'cdcfib login portal',
      'how to apply on cdcfib portal',
      'immigration recruitment portal apply',
      'nscdc registration steps',
      'cdcfib passport upload size'
    ],
    howToSteps: [
      { name: 'Visit cdcfib.career', text: 'Open the verified portal at cdcfib.career.' },
      { name: 'Select Agency & Cadre', text: 'Select NIS, NSCDC, FFS, or NCoS, and choose Superintendent, Inspectorate, or Assistant cadre.' },
      { name: 'NIN Validation', text: 'Enter your 11-digit NIN for automatic bio-data retrieval.' },
      { name: 'Upload Credentials', text: 'Upload certificates and a passport photograph under 100KB.' },
      { name: 'Submit & Download Slips', text: 'Generate your application confirmation slip and guarantor endorsement form.' }
    ],
    content: [
      'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) hosts all enlistments exclusively on cdcfib.career.',
      'Key Application Stages & Operational Rules:',
      '1. Agency Selection: Choose between Immigration (NIS), Civil Defence (NSCDC), Federal Fire Service (FFS), or Correctional Service (NCoS). You cannot apply to multiple agencies in the same cycle.',
      '2. Cadre Determination: Superintendent Cadre (BSc/HND, Level 08), Inspectorate Cadre (ND/NCE/RN, Level 07/06), or Assistant Cadre (SSCE/GCE/NABTEB, Level 03/04).',
      '3. Instant NIN Validation: The portal checks your name and birth date against NIMC records in real time. Discrepancies block form submission.',
      '4. File Formatting: Scanned documents must be in PDF format (under 200KB) and passport photos must be in JPEG format under 100KB on a plain white background.',
      '5. Candidate Confirmation Slip: Immediately upon submission, save your Application ID and download your confirmation slip and referee forms.'
    ],
    faqs: [
      {
        question: 'What is the maximum passport size for CDCFIB application?',
        answer: 'Your passport photo must not exceed 100KB and must be in JPG/JPEG format with a plain white background.'
      },
      {
        question: 'How do I resolve NIN mismatch on the CDCFIB portal?',
        answer: 'If your NIN date of birth differs from your educational certificates, you must update your records at an authorized NIMC enrollment center before completing the form.'
      }
    ]
  },
  {
    slug: 'npf-recruitment-portal',
    title: 'Nigeria Police Recruitment Portal 2026: apply.policerecruitment.gov.ng Constable Form',
    seoTitle: 'Police Recruitment Portal 2026: NPF Application & Screening',
    description: 'Official Nigeria Police Force (NPF) recruitment portal 2026 at apply.policerecruitment.gov.ng. Check Constable application status, screening dates, height & NIN sync.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'Police',
    statusBadge: 'POLICE SERVICE COMMISSION (PSC) OFFICIAL PORTAL',
    officialPortalUrl: 'https://apply.policerecruitment.gov.ng',
    scamNotice: 'POLICE SERVICE COMMISSION (PSC) CAUTION: The NPF Constable recruitment exercise is completely FREE OF CHARGE. Do not patronize cybercafes selling fake scratch cards, or fraudsters promising special recruitment slots. Report extortion attempts to the Police Complaint Response Unit (CRU).',
    quickAnswer: {
      question: 'Is the Nigeria Police Recruitment Portal Open for 2026?',
      directAnswer: 'The Nigeria Police Force (NPF) Constable recruitment portal operates via apply.policerecruitment.gov.ng under the supervision of the Police Service Commission (PSC). Registration is 100% free. Candidates must be Nigerian citizens aged 18 to 25, possess at least 5 O-Level credits (including English Language and Mathematics) in not more than two sittings, and meet physical standards (minimum 1.67m height for males, 1.64m for females).',
      statusText: 'NPF Portal Active • 100% Free Constable Enlistment',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (Zero Charge)', highlight: true },
        { label: 'Official Portal', value: 'apply.policerecruitment.gov.ng' },
        { label: 'Age Bracket', value: '18 - 25 Years Old' },
        { label: 'Minimum Height', value: '1.67m (M) | 1.64m (F)' }
      ]
    },
    keywords: [
      'police recruitment portal',
      'npf recruitment portal',
      'npfapplication.psc.gov.ng',
      'police recruitment 2026',
      'apply.policerecruitment.gov.ng',
      'police screening dates 2026',
      'police constable application form',
      'police portal login',
      'police recruitment requirements',
      'police shortlisted candidates pdf'
    ],
    quickTable: {
      headers: ['NPF Recruitment Parameter', 'Official Specification (PSC / NPF)'],
      rows: [
        ['Governing Authorities', 'Police Service Commission (PSC) & Nigeria Police Force (NPF)'],
        ['Primary Application Portal', 'https://apply.policerecruitment.gov.ng'],
        ['Available Cadres', 'General Duty Police Constables & Police Specialists (Tradesmen)'],
        ['Academic Requirements', 'WAEC, NECO, GCE, or NABTEB with minimum 5 credits including English & Maths (max 2 sittings)'],
        ['Age Limit', '18 to 25 years old at time of application'],
        ['Physical Height Threshold', 'Male: 1.67m (5ft 6in) | Female: 1.64m (5ft 4.5in) | Minimum 86cm chest expand (males)'],
        ['National Identification', 'Mandatory 11-digit National Identity Number (NIN) synchronized with NIMC'],
        ['Recruitment Stages', 'Online Application → Physical & Credential Verification → JAMB CBT Exam → Medical Screening']
      ]
    },
    howToSteps: [
      { name: 'Access Official Portal', text: 'Navigate to https://apply.policerecruitment.gov.ng using Google Chrome or Microsoft Edge.' },
      { name: 'Input NIN & Bio-Data', text: 'Enter your 11-digit NIN to automatically retrieve and verify your official demographic records.' },
      { name: 'Upload Educational Documents', text: 'Upload scanned copies of your primary school certificate and WAEC/NECO statements of results.' },
      { name: 'Complete Physical Declaration', text: 'Provide accurate height, chest measurement, and confirm absence of tattoos, piercings, or speech impediments.' },
      { name: 'Download Screening Slip & Referee Form', text: 'Submit your entry and immediately print your Application Confirmation Slip with QR code and Guarantor Sheets.' }
    ],
    content: [
      'The Nigeria Police Force (NPF), in collaboration with the Police Service Commission (PSC), conducts nationwide recruitment for General Duty Constables and Specialists through apply.policerecruitment.gov.ng.',
      'Key Enlistment Cadres & Educational Criteria:',
      '• General Duty Police Constables: Requires a minimum of 5 credits in WASSCE, NECO, GCE, or NABTEB, including English Language and Mathematics, obtained in no more than two sittings.',
      '• Police Specialists (Tradesmen): Open to artisans, mechanics, drivers, electrical technicians, and medical assistants holding Trade Test Grade I, II, or III alongside basic O-Level passes.',
      'Physical Standards & Disqualifying Conditions:',
      '• Height: Male candidates must stand at least 1.67 meters (5 feet 6 inches) tall, while female candidates must measure at least 1.64 meters (5 feet 4.5 inches).',
      '• Male chest measurement must expand to at least 86 centimeters (34 inches).',
      '• Candidates with flat feet, bow legs, k-legs, defective eyesight, speech impediments, amputation, or visible body tattoos will be disqualified during physical inspection.',
      'State Police Command Screening & Credential Verification:',
      'Following online registration closure, candidates are invited to their respective State Police Command Headquarters across the 36 states and the FCT. You must appear in clean white T-shirts and white canvas shorts, carrying your original certificates, local government origin letter, national identity card/NIN slip, and 4 passport photographs in a transparent folder.',
      'JAMB-Supervised Computer-Based Aptitude Test (CBT):',
      'Candidates who scale physical screening are scheduled for the nationwide Computer-Based Test (CBT) administered in JAMB accredited centers. The examination tests General Knowledge, English Language, Basic Mathematics, and Nigerian Current Affairs.'
    ],
    faqs: [
      {
        question: 'Is the Nigeria Police recruitment portal 2026 open?',
        answer: 'The Police Service Commission and NPF open the application window annually across national dailies and at apply.policerecruitment.gov.ng. Registration is 100% free of charge.'
      },
      {
        question: 'What is the age limit for Nigeria Police Constable recruitment?',
        answer: 'Applicants must be between 18 and 25 years of age at the time of application. Candidates over 25 are ineligible for Constable enlistment.'
      },
      {
        question: 'Can I apply for Police recruitment with awaiting result?',
        answer: 'No. The Police Service Commission strictly requires all statements of result or certificates to be fully released before application submission.'
      },
      {
        question: 'How much does a newly recruited Police Constable earn in Nigeria?',
        answer: 'Under the revised Consolidated Police Salary Structure (CONPOSS), a newly recruited Constable (Grade Level 03) earns between ₦84,000 and ₦92,000 monthly, plus uniform allowances and hazard benefits.'
      }
    ]
  },
  {
    slug: 'nigerian-army-88-rri-recruitment',
    title: 'Nigerian Army 88 RRI Recruitment 2026: Application Form & Portal Status',
    seoTitle: 'Nigerian Army 88 RRI Recruitment 2026: Form & Portal Status',
    description: 'Apply for Nigerian Army 88 Regular Recruit Intake (RRI) 2026 at recruitment.army.mil.ng. 88 RRI portal status, requirements, screening dates & slip reprint.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'Army',
    statusBadge: '88 REGULAR RECRUITS INTAKE (RRI) OFFICIAL HUB',
    officialPortalUrl: 'https://recruitment.army.mil.ng',
    scamNotice: 'NIGERIAN ARMY HEADQUARTERS DIRECTIVE: Nigerian Army 88 RRI registration is strictly free. Never pay money to anyone for application scratch cards, interview passes, or training camp admission. Report extortion attempts to military authorities.',
    quickAnswer: {
      question: 'How Do I Apply for Nigerian Army 88 RRI Recruitment 2026?',
      directAnswer: 'To register for the 88 Regular Recruit Intake (RRI), navigate to recruitment.army.mil.ng. The form is 100% free of charge. Candidates for Non-Tradesmen must be aged 18 to 22 with at least 4 O-Level credits, while Tradesmen must be 18 to 26 years with trade test certifications. Successful recruits undergo 6 months of basic military training at Depot Nigerian Army, Zaria, Kaduna State.',
      statusText: '88 RRI Portal Active • 100% Free Application',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (Zero Fee)', highlight: true },
        { label: 'Official Enlistment Portal', value: 'recruitment.army.mil.ng' },
        { label: 'Tracking Mirror', value: 'tracking.armynotification.com.ng' },
        { label: 'Depot Training Base', value: 'Depot NA, Zaria, Kaduna' }
      ]
    },
    keywords: [
      'nigerian army 88 rri recruitment form',
      '88 rri recruitment portal',
      'recruitment.army.mil.ng 88 rri',
      'army 88 rri screening date',
      'army tradesmen 88 rri',
      '88 rri shortlisted candidates pdf',
      'depot nigerian army 88 rri',
      'nigerian army recruitment portal 2026 login'
    ],
    quickTable: {
      headers: ['88 RRI Parameter', 'Official Nigerian Army Requirement'],
      rows: [
        ['Cadre Name', '88 Regular Recruit Intake (88 RRI) - Non-Trades & Tradesmen'],
        ['Official Enlistment Portal', 'https://recruitment.army.mil.ng'],
        ['Slip Reprint Portal', 'https://tracking.armynotification.com.ng'],
        ['Age Limit (Non-Trades)', '18 to 22 years old on entry into Depot NA'],
        ['Age Limit (Tradesmen/Women)', '18 to 26 years old (must hold Trade Test I, II, or III)'],
        ['Academic Requirements', 'Minimum 4 credits in WASSCE/NECO/GCE/NABTEB including English Language'],
        ['Physical Height Threshold', 'Male: 1.68m (5ft 6in) | Female: 1.65m (5ft 5in)'],
        ['Basic Training Location', 'Depot Nigerian Army, Zaria, Kaduna State (6 Months)']
      ]
    },
    howToSteps: [
      { name: 'Visit recruitment.army.mil.ng', text: 'Open the verified military portal and click "Apply Now".' },
      { name: 'Choose Cadre (Trades vs Non-Trades)', text: 'Select Non-Trades if applying with SSCE only, or Tradesmen if applying with vocational trade test certificates.' },
      { name: 'Input NIN & Bio-Data', text: 'Enter your 11-digit NIN to sync your full name, origin, and verified date of birth.' },
      { name: 'Upload Credentials & Passport', text: 'Upload clean scans of educational statements and a white-background passport photograph under 100KB.' },
      { name: 'Print 88 RRI Slips', text: 'Download and print the Application Summary Sheet and Guarantor Form in multiple copies on clean A4 paper.' }
    ],
    content: [
      'The Nigerian Army 88 Regular Recruit Intake (88 RRI) is the premier enlistment pipeline for young Nigerian patriots seeking to serve as soldiers in the infantry, artillery, armored corps, engineers, signals, medical corps, and intelligence corps.',
      'Eligibility Breakdown: Non-Tradesmen vs Tradesmen:',
      '• Non-Tradesmen/Women: Must possess 2 to 3 sittings with minimum 4 credits in WASSCE/NECO/GCE/NABTEB, including English Language. Age requirement is strictly 18 to 22 years at the date of reporting to the screening camp.',
      '• Tradesmen/Women: Open to mechanics, masons, electricians, drivers, tailors, cooks, and medical lab technicians holding Trade Test certificates or City & Guilds qualifications. Eligible age bracket is 18 to 26 years.',
      'Physical Standards & Screening Centers:',
      'Physical screening takes place simultaneously across all 36 state military formations (e.g., 81 Division Garrison Lagos, 1 Division Kaduna, 2 Division Ibadan, 3 Division Jos, 6 Division Port Harcourt, 7 Division Maiduguri, 8 Division Sokoto).',
      'Candidates must pass the 3.2km endurance run, pull-ups, push-ups, medical vital screening, and document verification.',
      'Depot Nigerian Army Training in Zaria:',
      'Successful candidates are transported by official military logistics to Depot Nigerian Army, Zaria, Kaduna State for 6 months of intensive military orientation, field weapon handling, tactical combat maneuvers, and drill discipline.'
    ],
    faqs: [
      {
        question: 'When will Nigerian Army 88 RRI recruitment form come out?',
        answer: 'The Nigerian Army publishes official 88 RRI enlistment notices via national gazettes and at recruitment.army.mil.ng. Keep checking our live portal status tracker for daily updates.'
      },
      {
        question: 'What is the cutoff age for Army 88 RRI?',
        answer: 'Non-trades applicants cannot exceed 22 years of age. Tradesmen holding approved technical trade tests can apply up to 26 years of age.'
      },
      {
        question: 'How much does a Nigerian Army recruit earn per month?',
        answer: 'Under the Consolidated Armed Forces Salary Structure (CONAFSS), a newly passed-out Private earns approximately ₦77,000 to ₦85,000 monthly, plus free military barracks accommodation, subsidized rations, operational allowances, and free healthcare.'
      },
      {
        question: 'Where can I reprint my 88 RRI screening slip if recruitment.army.mil.ng is slow?',
        answer: 'Candidates can access the Army secondary mirror server at tracking.armynotification.com.ng using their registered application number and phone number.'
      }
    ]
  },
  {
    slug: 'nigerian-navy-dssc-recruitment',
    title: 'Nigerian Navy DSSC Recruitment 2026: Portal, Requirements & Course Schedule',
    seoTitle: 'Nigerian Navy DSSC Recruitment 2026: Portal & Requirements',
    description: 'Official Nigerian Navy Direct Short Service Commission (DSSC) recruitment 2026 at joinnigeriannavy.com. Check degree criteria, age limit, salary & screening.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'Navy',
    statusBadge: 'OFFICER COMMISSION (DSSC COURSE INTAKE) HUB',
    officialPortalUrl: 'https://joinnigeriannavy.com',
    scamNotice: 'NAVAL HEADQUARTERS NOTICE: The Nigerian Navy Direct Short Service Commission application is 100% free. The Navy will never solicit funds for shortlisted lists, aptitude test passes, or officer cadet slots. Disregard fraudulent third-party agents.',
    quickAnswer: {
      question: 'How to Apply for Nigerian Navy DSSC Recruitment 2026?',
      directAnswer: 'Applications for the Nigerian Navy Direct Short Service Commission (DSSC) are submitted via joinnigeriannavy.com. Candidates must be Nigerian graduates with a First Class or Second Class Upper Division degree (or Upper Credit HND) with NYSC discharge or exemption certificates. General duty applicants must be aged 22 to 30, while medical doctors and specialists can apply up to 32 years of age. Successful cadets train at the Nigerian Naval College, Onne, Rivers State.',
      statusText: 'Navy DSSC Portal Active • Commissioned Officer Stream',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (100% Free)', highlight: true },
        { label: 'Official Enlistment Portal', value: 'joinnigeriannavy.com' },
        { label: 'Cadet Rank on Commission', value: 'Sub-Lieutenant / Lieutenant' },
        { label: 'Officer Training College', value: 'Naval College, Onne, Rivers' }
      ]
    },
    keywords: [
      'navy dssc recruitment portal',
      'nigerian navy dssc recruitment 2026',
      'joinnigeriannavy.com dssc',
      'navy dssc requirements',
      'navy dssc age limit',
      'navy dssc salary',
      'navy dssc course 29',
      'navy dssc shortlisted candidates pdf'
    ],
    quickTable: {
      headers: ['DSSC Parameter', 'Nigerian Navy Official Standard'],
      rows: [
        ['Commission Type', 'Direct Short Service Commission (DSSC) - Commissioned Officers'],
        ['Official Portal', 'https://joinnigeriannavy.com'],
        ['Academic Degree', 'B.Sc / B.Tech / B.Eng / B.A (Second Class Upper minimum) or HND (Upper Credit)'],
        ['NYSC Requirement', 'Mandatory NYSC Discharge Certificate or official National Exemption Letter'],
        ['General Age Limit', '22 to 30 years old at date of reporting to Naval College'],
        ['Medical Doctors Age Limit', 'Up to 32 years for Medical Doctors (MBBS) and Dental Specialists'],
        ['Physical Height Threshold', 'Male: 1.68m (5ft 6in) | Female: 1.65m (5ft 5in)'],
        ['Commissioning Rank & Pay', 'Sub-Lieutenant (₦235,000 - ₦290,000/mo) / Lieutenant (Medical: ₦340,000+/mo)']
      ]
    },
    howToSteps: [
      { name: 'Visit joinnigeriannavy.com', text: 'Open the verified naval recruitment portal and click "DSSC Enlistment".' },
      { name: 'Select Professional Branch', text: 'Choose your eligible discipline (Medical, Engineering, ICT, Logistics, Legal, Chaplaincy, or Naval Aviation).' },
      { name: 'Upload Degree & NYSC Documents', text: 'Upload original degree certificates, NYSC discharge certificate, WAEC certificate, and local government identification.' },
      { name: 'Complete Biometrics & NIN Authentication', text: 'Enter your 11-digit NIN for instant identity verification.' },
      { name: 'Print DSSC Examination Slip', text: 'Download and print the candidate summary sheet with photo barcode for admission into the zonal CBT screening hall.' }
    ],
    content: [
      'The Nigerian Navy Direct Short Service Commission (DSSC) offers university graduates and specialized professionals an accelerated pathway to become commissioned naval officers.',
      'Eligible Degree Branches & Specializations:',
      '• Seamanship / Executive: Degree holders in Nautical Science, Navigation, Marine Geography, or Mathematics.',
      '• Marine & Weapon Engineering: B.Eng/B.Tech in Marine, Mechanical, Electrical/Electronic, Aeronautical, or Mechatronics Engineering.',
      '• Medical & Health Sciences: Medical Doctors (MBBS), Dentists (BDS), Pharmacists (B.Pharm), Nurses (B.Sc Nursing / RN/RM), Radiographers, and Medical Laboratory Scientists.',
      '• Information & Communications Technology (ICT): Computer Science, Software Engineering, Cybersecurity, Data Analytics, and Telecommunications.',
      '• Logistics & Supply: B.Sc in Accounting, Economics, Supply Chain Management, Purchasing & Supply, or Business Administration.',
      '• Legal Services: LL.B and B.L (Called to the Nigerian Bar).',
      'Zonal Computer-Based Aptitude Test & Attire:',
      'Shortlisted applicants sit for a Computer-Based Test at designated naval centers (Lagos, Port Harcourt, Kaduna, Makurdi, Kano, Abuja). Candidates must report in white round-neck T-shirts, navy blue shorts, white socks, and white canvas shoes.',
      'Training at Nigerian Naval College, Onne:',
      'Successful officer cadets undergo 9 months of intense naval military drills, maritime law, seamanship, navigation, and executive leadership training at the Nigerian Naval College, Onne, Rivers State before their official Presidential Commissioning parade.'
    ],
    faqs: [
      {
        question: 'Can Second Class Lower (2:2) apply for Navy DSSC?',
        answer: 'The Nigerian Navy strictly requires a minimum of Second Class Upper Division (2:1) for university degree holders or Upper Credit for Higher National Diploma (HND) holders. Second Class Lower is generally ineligible unless specific rare specialist waivers are declared.'
      },
      {
        question: 'What is the age limit for Nigerian Navy DSSC?',
        answer: 'Applicants must be between 22 and 30 years of age on entry into the Naval College. Medical doctors, dentists, and chaplains/imams can be accepted up to 32 years of age.'
      },
      {
        question: 'How much does a Nigerian Navy Sub-Lieutenant earn?',
        answer: 'A newly commissioned Sub-Lieutenant earns between ₦235,000 and ₦290,000 monthly under CONAFSS, plus sea-duty allowances, hazard pay, and free military medical services.'
      },
      {
        question: 'Is NYSC mandatory for Navy DSSC recruitment?',
        answer: 'Yes. Candidates must have completed their mandatory National Youth Service Corps (NYSC) and possess an authentic Discharge Certificate or official Certificate of Exemption.'
      }
    ]
  },
  {
    slug: 'nis-recruitment-portal',
    title: 'Nigeria Immigration Service Recruitment 2026: cdcfib.career Portal & Form',
    seoTitle: 'Immigration Recruitment Portal 2026: NIS cdcfib.career Form',
    description: 'Apply on Nigeria Immigration Service (NIS) recruitment portal 2026 at cdcfib.career. Superintendent, Inspector & Assistant cadres, requirements, dates & salary.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'Immigration',
    statusBadge: 'CDCFIB / NIGERIA IMMIGRATION SERVICE (NIS) HUB',
    officialPortalUrl: 'https://cdcfib.career',
    scamNotice: 'MINISTRY OF INTERIOR / CDCFIB CAUTION: Application for Nigeria Immigration Service is strictly via cdcfib.career and is 100% FREE. Never pay money to recruitment syndicates or POS agents for recruitment pins or interview invitations.',
    quickAnswer: {
      question: 'How to Apply for Nigeria Immigration Service (NIS) Recruitment 2026?',
      directAnswer: 'The Nigeria Immigration Service (NIS) enlists candidates through the Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) portal at cdcfib.career. Registration is completely free. Vacancies span three cadres: Superintendent Cadre (BSc/HND, Level 08, age 18-30), Inspectorate Cadre (ND/NCE/RN, Level 07/06, age 18-26), and Immigration Assistant Cadre (SSCE/GCE, Level 03/04, age 18-25).',
      statusText: 'NIS Portal Active • Free CDCFIB Registration',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (100% Free)', highlight: true },
        { label: 'Official Enlistment Portal', value: 'cdcfib.career' },
        { label: 'Governing Board', value: 'CDCFIB / Ministry of Interior' },
        { label: 'Minimum Height', value: '1.65m (M) | 1.60m (F)' }
      ]
    },
    keywords: [
      'immigration recruitment portal',
      'nis recruitment portal',
      'cdcfib.career nis',
      'nigeria immigration recruitment 2026',
      'nis shortlisted candidates pdf',
      'nis screening dates',
      'immigration assistant cadre form',
      'cdcfib immigration portal login',
      'nis salary structure',
      'immigration superintendent cadre'
    ],
    quickTable: {
      headers: ['NIS Cadre / Parameter', 'Official CDCFIB Requirements'],
      rows: [
        ['Superintendent Cadre (ASI II)', 'B.Sc or HND in relevant disciplines (Grade Level 08) | Age 18–30 | NYSC Required'],
        ['Inspectorate Cadre (Senior Inspector)', 'ND, NCE, or Registered Nurse (RN/RM) (Grade Level 07/06) | Age 18–26'],
        ['Immigration Assistant Cadre (IA III)', 'WAEC, NECO, GCE, or NABTEB with 4-5 credits (Grade Level 03) | Age 18–25'],
        ['Official Application Portal', 'https://cdcfib.career'],
        ['Physical Height Standards', 'Male: 1.65m (5ft 5in) | Female: 1.60m (5ft 3in) | Minimum 87cm chest expand (males)'],
        ['Aptitude Test Model', 'JAMB-conducted Computer-Based Test (CBT) covering English, Current Affairs & Math'],
        ['Training Academies', 'Immigration Training School Kano (ITSK) & Immigration Command College Umuahia'],
        ['Entry Level Salary Range', 'IA III: ₦72,000–₦82,000 | Inspector: ₦115,000–₦135,000 | Superintendent: ₦185,000–₦240,000']
      ]
    },
    howToSteps: [
      { name: 'Visit cdcfib.career', text: 'Open the verified Ministry of Interior portal at https://cdcfib.career.' },
      { name: 'Select Nigeria Immigration Service', text: 'Choose NIS from the agency selection panel (do not apply to multiple agencies in the same batch).' },
      { name: 'Choose Designated Cadre', text: 'Select Superintendent (B.Sc/HND), Inspectorate (ND/NCE), or Assistant (SSCE).' },
      { name: 'Authenticate NIN', text: 'Input your 11-digit National Identity Number to automatically pull your verified bio-data.' },
      { name: 'Upload Credentials & Passport', text: 'Upload certificates in PDF (under 200KB) and passport photo in JPEG under 100KB on plain white background.' },
      { name: 'Download Application & Referee Slips', text: 'Submit your entry and print your Application ID confirmation slip and guarantor forms.' }
    ],
    content: [
      'The Nigeria Immigration Service (NIS), an agency of the Federal Ministry of Interior under the Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB), is tasked with border management, migration governance, and passport administration.',
      'Detailed NIS Cadres & Eligibility:',
      '1. Superintendent Cadre (Assistant Superintendent of Immigration II - CONPASS 08): Open to holders of First Degrees (B.Sc, B.A, B.Tech) or Higher National Diplomas (HND) in Social Sciences, Humanities, Law, Computer Science, and Engineering. NYSC discharge or exemption certificate is compulsory. Age bracket: 18 to 30 years.',
      '2. Inspectorate Cadre (Senior Inspector of Immigration - CONPASS 07 / Assistant Inspector - CONPASS 06): Open to holders of National Diplomas (ND), National Certificates in Education (NCE), or Registered Nurses (RN/RM). Age bracket: 18 to 26 years.',
      '3. Immigration Assistant Cadre (Immigration Assistant III - CONPASS 03): Open to holders of SSCE, NECO, GCE, or NABTEB with minimum 4 credits in not more than two sittings. Age bracket: 18 to 25 years.',
      'JAMB-Administered CBT Screening Examination:',
      'Shortlisted applicants are invited to take an electronic Computer-Based Test at JAMB accredited centers nationwide. The examination format tests verbal aptitude, quantitative reasoning, current affairs, and basic immigration law.',
      'Training Schools & Regimental Drill:',
      'Appointed officers undergo 6 months of intense regimental drill, border patrol tactics, weapon handling, and document forensics at the Immigration Training School Kano (ITSK), Immigration Command College Umuahia (ICCU), or Immigration Training School Ahoada.'
    ],
    faqs: [
      {
        question: 'What is the official website for Nigeria Immigration recruitment?',
        answer: 'All enlistment for the Nigeria Immigration Service is hosted exclusively on the CDCFIB portal at https://cdcfib.career. Avoid fraudulent websites ending in .com or .site.'
      },
      {
        question: 'Can married women apply for Nigeria Immigration Service recruitment?',
        answer: 'Yes. Married women are eligible to apply, provided they meet the academic, height, age, and physical medical fitness criteria for their selected cadre.'
      },
      {
        question: 'What is the minimum height required for Immigration recruitment?',
        answer: 'Male candidates must be at least 1.65 meters (5ft 5in) tall, and female candidates must measure at least 1.60 meters (5ft 3in).'
      },
      {
        question: 'How do I download the NIS shortlisted candidates list in PDF?',
        answer: 'When the Civil Defence, Correctional, Fire and Immigration Services Board publishes shortlists, candidates receive SMS/email invitations and can log into cdcfib.career to download the state-by-state screening PDF lists.'
      }
    ]
  },
  {
    slug: 'ndlea-recruitment-portal',
    title: 'NDLEA Recruitment Portal 2026: portal.ndlea.gov.ng Application & Shortlist',
    seoTitle: 'NDLEA Recruitment Portal 2026: Application & Shortlist PDF',
    description: 'Official NDLEA recruitment portal 2026 at portal.ndlea.gov.ng. Check Narcotic Officer & Assistant cadres, requirements, physical assessment centers & shortlist.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'NDLEA',
    statusBadge: 'NATIONAL DRUG LAW ENFORCEMENT AGENCY (NDLEA) OFFICIAL HUB',
    officialPortalUrl: 'https://portal.ndlea.gov.ng',
    scamNotice: 'NDLEA HEADQUARTERS NOTICE: NDLEA online enlistment is 100% FREE OF CHARGE. The agency does not charge fees for application forms, shortlist verification, screening interview invites, or training admission into the NDLEA Academy. Disregard fraudulent payment requests.',
    quickAnswer: {
      question: 'How to Apply for NDLEA Recruitment 2026 on portal.ndlea.gov.ng?',
      directAnswer: 'Applications for the National Drug Law Enforcement Agency (NDLEA) are submitted exclusively online at portal.ndlea.gov.ng. Registration is 100% free. Vacancies cover two main operational cadres: Narcotic Officer Cadre (B.Sc / HND, GL 08, age 20-30 with NYSC) and Narcotic Assistant Cadre (SSCE / ND / NCE, GL 04-06, age 18-25). Candidates must meet minimum height requirements (1.65m for males, 1.60m for females) and pass physical assessment drills.',
      statusText: 'NDLEA Portal Active • 100% Free Enlistment',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (Zero Charge)', highlight: true },
        { label: 'Official Enlistment Portal', value: 'portal.ndlea.gov.ng' },
        { label: 'Officer Training Base', value: 'NDLEA Academy, Jos / PH' },
        { label: 'Minimum Height', value: '1.65m (M) | 1.60m (F)' }
      ]
    },
    keywords: [
      'ndlea recruitment portal',
      'ndlea recruitment 2026',
      'portal.ndlea.gov.ng',
      'ndlea shortlisted candidates pdf',
      'ndlea narcotic officer cadre',
      'ndlea narcotic assistant requirements',
      'ndlea screening centers 2026',
      'ndlea salary structure conpass'
    ],
    quickTable: {
      headers: ['NDLEA Cadre / Parameter', 'Official Agency Standard'],
      rows: [
        ['Narcotic Officer Cadre (Superintendent)', 'B.Sc / HND in Law, Medicine, Pharmacy, Criminology, Cyber Security, etc. (GL 08) | Age 20–30 | NYSC Required'],
        ['Narcotic Assistant Cadre (NASS II)', 'ND, NCE, Registered Nurse, or Technical Diploma (GL 06) | Age 18–26'],
        ['Narcotic Assistant Cadre (NASS I)', 'SSCE, NECO, GCE, or NABTEB with minimum 4-5 credits (GL 04) | Age 18–25'],
        ['Official Application Portal', 'https://portal.ndlea.gov.ng'],
        ['Physical Height Threshold', 'Male: 1.65m (5ft 5in) | Female: 1.60m (5ft 3in) | Minimum 85cm chest expansion (males)'],
        ['Screening Stages', 'Online Application → CBT Aptitude Test → Physical Assessment & Document Verification → Medicals'],
        ['Academy Training Location', 'NDLEA Academy, Jos, Plateau State / Regional Training Centers'],
        ['Starting Salary Structure (CONPASS)', 'NASS I: ₦75,000–₦86,000 | NASS II: ₦110,000–₦128,000 | Narcotic Officer: ₦180,000–₦235,000']
      ]
    },
    howToSteps: [
      { name: 'Visit portal.ndlea.gov.ng', text: 'Open the verified agency recruitment portal using a laptop or modern mobile browser.' },
      { name: 'Select Desired Cadre', text: 'Choose either Narcotic Officer (B.Sc/HND) or Narcotic Assistant (SSCE/ND) based on your educational certificates.' },
      { name: 'Enter NIN & Validate Demographic Data', text: 'Provide your 11-digit NIN to synchronize your official full name, state of origin, and date of birth.' },
      { name: 'Upload Credentials & Passport', text: 'Upload clear scans of your degree/SSCE, local government origin letter, birth certificate, and white background passport photograph.' },
      { name: 'Submit Application & Print Slip', text: 'Submit your profile and print your Application Slip bearing your unique NDLEA Candidate Reference Number and QR barcode.' }
    ],
    content: [
      'The National Drug Law Enforcement Agency (NDLEA) is Nigeria’s primary federal agency responsible for eradicating illicit drug trafficking, narcotics production, and substance abuse across borders and metropolitan hubs.',
      'Key Enlistment Cadres & Academic Criteria:',
      '• Narcotic Officer Cadre (Superintendent Stream - GL 08): Open to degree holders with B.Sc, B.A, B.Tech, or HND in Law, Forensic Science, Pharmacy, Medicine, Criminology, Computer Science, Psychology, and Social Sciences. NYSC Discharge Certificate is compulsory. Age bracket: 20 to 30 years.',
      '• Narcotic Assistant Cadre (NASS II - GL 06): Open to candidates with Ordinary National Diploma (OND), NCE, Community Health Extension Workers (CHEW), or Nursing certificates. Age bracket: 18 to 26 years.',
      '• Narcotic Assistant Cadre (NASS I - GL 04): Open to secondary school leavers with WAEC, NECO, GCE, or NABTEB with at least 4 credits in not more than two sittings. Age bracket: 18 to 25 years.',
      'Rigorous Physical Screening & Drug Screening Mandate:',
      'Because of the operational demands of tactical interdiction and field operations, candidates undergo strenuous physical endurance drills, including push-ups, sit-ups, and a 3.2km road run.',
      'Crucially, every shortlisted candidate must pass an involuntary comprehensive multi-panel drug test (screening for cannabis, cocaine, opioids, amphetamines, and tramadol) administered by NDLEA medical staff. Any trace of substance abuse leads to immediate disqualification and arrest.',
      'NDLEA Academy Training:',
      'Selected recruits undergo 6 to 9 months of intense regimental drill, intelligence gathering, weapons handling, undercover surveillance, and international narcotics law at the NDLEA Academy in Jos, Plateau State.'
    ],
    faqs: [
      {
        question: 'Is the NDLEA recruitment portal 2026 open?',
        answer: 'NDLEA enlistment opens periodically under the leadership of the Agency Chairman and is hosted on portal.ndlea.gov.ng. Registration is 100% free.'
      },
      {
        question: 'What is the cutoff age for NDLEA recruitment?',
        answer: 'Applicants for Narcotic Officer positions must not exceed 30 years. Narcotic Assistant applicants must be between 18 and 25 years old at the close of the portal.'
      },
      {
        question: 'Does NDLEA conduct drug screening during recruitment?',
        answer: 'Yes. All candidates undergo a mandatory comprehensive toxicology and drug test during the physical screening exercise. Any candidate testing positive for illicit drugs is immediately rejected.'
      },
      {
        question: 'How much does an NDLEA officer earn per month?',
        answer: 'Under the Consolidated Paramilitary Salary Structure (CONPASS), a Narcotic Assistant earns between ₦75,000 and ₦86,000, while a commissioned Narcotic Officer (Assistant Superintendent of Narcotics) earns between ₦180,000 and ₦235,000 monthly plus operational allowances.'
      }
    ]
  },
  {
    slug: 'frsc-recruitment-portal',
    title: 'FRSC Recruitment Portal 2026: frsc.gov.ng RMA & Officer Cadre Form',
    seoTitle: 'FRSC Recruitment Portal 2026: RMA & Officer Form Guide',
    description: 'Official FRSC recruitment portal 2026 at frsc.gov.ng/careers. Check Road Marshal Assistant (RMA), Marshal Inspector, Officer cadre requirements & screening dates.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'FRSC',
    statusBadge: 'FEDERAL ROAD SAFETY CORPS (FRSC) OFFICIAL RECRUITMENT HUB',
    officialPortalUrl: 'https://frsc.gov.ng/careers',
    scamNotice: 'FRSC CORPS MARSHAL DIRECTIVE: The Federal Road Safety Corps recruitment is 100% FREE. The Corps does not appoint intermediaries or sell scratch cards. Never transfer money to personal bank accounts for enlistment slots or interview passes.',
    quickAnswer: {
      question: 'How Do I Apply for FRSC Recruitment 2026 on frsc.gov.ng?',
      directAnswer: 'Applications for the Federal Road Safety Corps (FRSC) are processed through frsc.gov.ng/careers or dedicated CDCFIB/FRSC portal links. Registration is 100% free of charge. Vacancies exist across three tiers: Officer Cadre (B.Sc/HND, GL 08, age 18-30 with NYSC), Marshal Inspectorate Cadre (ND/NCE/RN, GL 07, age 18-28), and Road Marshal Assistant (RMA) Cadre (SSCE/Trade Test, GL 03/04, age 18-25). Male candidates must measure at least 1.68m and female candidates 1.63m.',
      statusText: 'FRSC Portal Active • 100% Free Marshal Enlistment',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (Zero Fee)', highlight: true },
        { label: 'Official Enlistment Portal', value: 'frsc.gov.ng/careers' },
        { label: 'Training Academy', value: 'FRSC Academy, Udi, Enugu' },
        { label: 'Minimum Height', value: '1.68m (M) | 1.63m (F)' }
      ]
    },
    keywords: [
      'frsc recruitment portal',
      'frsc recruitment 2026',
      'frsc.gov.ng careers',
      'road marshal assistant rma form',
      'frsc marshal inspector cadre',
      'frsc screening dates 2026',
      'frsc physical fitness test',
      'frsc shortlisted candidates pdf'
    ],
    quickTable: {
      headers: ['FRSC Cadre / Parameter', 'Official Corps Standard'],
      rows: [
        ['Officer Cadre (ARC - Assistant Route Commander)', 'B.Sc / HND in relevant disciplines (Grade Level 08) | Age 18–30 | NYSC Certificate Compulsory'],
        ['Marshal Inspectorate Cadre (MI / DMI)', 'ND, NCE, Registered Nurse, or CHEW (Grade Level 07/06) | Age 18–28'],
        ['Road Marshal Assistant II & III (RMA)', 'WAEC, NECO, GCE, or NABTEB with 3-5 credits, or Trade Test Driver/Artisan (GL 03/04) | Age 18–25'],
        ['Official Enlistment Portal', 'https://frsc.gov.ng/careers'],
        ['Physical Height Threshold', 'Male: 1.68m (5ft 6in) | Female: 1.63m (5ft 4in) | Minimum 86cm chest expand (males)'],
        ['Physical Fitness Drills', '3.2km road endurance march, obstacle crossing, push-ups, and balance test'],
        ['Officer Training Academy', 'FRSC Academy, Udi, Enugu State | RMA Training School, Kotorkoshi, Zamfara State'],
        ['Consolidated Salary Scale (CONPASS)', 'RMA: ₦74,000–₦85,000 | Marshal Inspector: ₦118,000–₦138,000 | Officer (ARC): ₦185,000–₦245,000']
      ]
    },
    howToSteps: [
      { name: 'Visit frsc.gov.ng/careers', text: 'Open the verified Federal Road Safety Corps career portal.' },
      { name: 'Select Operational Cadre', text: 'Select Officer Cadre (ARC), Marshal Inspectorate, or Road Marshal Assistant (RMA).' },
      { name: 'Authenticate NIN', text: 'Enter your 11-digit NIN to sync your personal details directly from NIMC.' },
      { name: 'Upload Credentials & Driver License (if applicable)', text: 'Upload clear scans of your degree or O-Level certificates, birth declaration, and valid drivers license for driving roles.' },
      { name: 'Download Screening Slip & Guarantor Form', text: 'Generate your official FRSC Application Acknowledgment Slip and Guarantors Form for state physical screening.' }
    ],
    content: [
      'The Federal Road Safety Corps (FRSC) is the lead traffic management, road safety administration, and highway patrol agency in Nigeria operating under the Presidency.',
      'Detailed FRSC Cadres & Qualification Criteria:',
      '1. Regular Marshal / Officer Cadre (Assistant Route Commander - CONPASS 08): Open to holders of First Degrees (B.Sc, B.A, B.Tech) or HND in disciplines such as Law, Transport Management, Mechanical Engineering, Computer Science, Mass Communication, and Medicine. NYSC Discharge Certificate is compulsory. Age limit: 18 to 30 years.',
      '2. Marshal Inspectorate Cadre (Marshal Inspector - CONPASS 07): Open to holders of Higher National Diplomas (HND) or National Diplomas (ND) in Nursing, CHEW, Medical Laboratory, or NCE. Age limit: 18 to 28 years.',
      '3. Road Marshal Assistant Cadre (RMA II & III - CONPASS 03/04): Open to candidates holding SSCE/NECO with 3 to 5 credits, or professional drivers with Trade Test Grade II/III and valid Class E Driver’s License. Age limit: 18 to 25 years.',
      'State-Level Physical Screening & Documentation:',
      'Screening exercises take place at designated FRSC Sector Commands across all 36 state capitals and the FCT. Candidates undergo credential verification, chest measurement, height check, medical vitals, and a compulsory 3.2km road endurance test.',
      'FRSC Training Academies:',
      'Appointed officers undergo regimental paramilitary training at the FRSC Academy, Udi, Enugu State, while Marshal Inspectors and Road Marshal Assistants train at the FRSC Training School, Kotorkoshi, Zamfara State.'
    ],
    faqs: [
      {
        question: 'When will FRSC recruitment form 2026 come out?',
        answer: 'The Federal Road Safety Corps announces vacancies on national dailies and via frsc.gov.ng/careers. Registration is 100% free of charge.'
      },
      {
        question: 'Can I apply for FRSC Road Marshal Assistant (RMA) with WAEC result?',
        answer: 'Yes. Candidates with a minimum of 3 to 5 credits in WAEC, NECO, or NABTEB can apply for the Road Marshal Assistant (RMA) cadre.'
      },
      {
        question: 'What is the required height for FRSC recruitment?',
        answer: 'Male candidates must be at least 1.68m (5ft 6in) tall, and female candidates must measure at least 1.63m (5ft 4in).'
      },
      {
        question: 'How much does an FRSC officer earn?',
        answer: 'Under the CONPASS salary scale, a Road Marshal Assistant earns between ₦74,000 and ₦85,000 monthly, a Marshal Inspector earns ₦118,000 to ₦138,000, and a commissioned Assistant Route Commander (Officer) earns ₦185,000 to ₦245,000.'
      }
    ]
  },
  {
    slug: 'fcsc-recruitment-portal',
    title: 'Federal Civil Service Commission (FCSC) Recruitment Portal 2026: Vacancies & Application',
    seoTitle: 'FCSC Recruitment Portal 2026: Federal Civil Service Form',
    description: 'Apply on Federal Civil Service Commission (FCSC) portal 2026 at careers.fedcivilservice.gov.ng. Check MDA vacancies, Grade Level 08 requirements, salary & test.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'Civil Service',
    statusBadge: 'FEDERAL CIVIL SERVICE COMMISSION (FCSC) OFFICIAL HUB',
    officialPortalUrl: 'https://careers.fedcivilservice.gov.ng',
    scamNotice: 'FEDERAL CIVIL SERVICE COMMISSION (FCSC) ADVISORY: Enlistment into Federal Ministries, Departments, and Agencies (MDAs) is strictly merit-based and 100% FREE. The FCSC does not appoint recruitment agents or collect processing fees. Disregard fake employment letters sold by racketeers.',
    quickAnswer: {
      question: 'How to Apply for Federal Civil Service (FCSC) Recruitment 2026?',
      directAnswer: 'Applications for Federal Civil Service Commission vacancies across Ministries, Departments, and Agencies (MDAs) are submitted through careers.fedcivilservice.gov.ng. Registration is 100% free. Entry-level graduate positions start at Grade Level 08 (salary ₦85,000–₦115,000 under CONPSS) for B.Sc / HND holders with completed NYSC certificates. Candidates must be between 18 and 35 years of age and pass computerized aptitude tests.',
      statusText: 'FCSC Portal Active • Federal MDAs Enlistment',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (100% Free)', highlight: true },
        { label: 'Official MDA Portal', value: 'careers.fedcivilservice.gov.ng' },
        { label: 'Entry Level Cadre', value: 'Grade Level 08 (B.Sc/HND)' },
        { label: 'Age Requirement', value: '18 - 35 Years Old' }
      ]
    },
    keywords: [
      'federal civil service recruitment',
      'fcsc recruitment portal',
      'fcsc recruitment 2026',
      'careers.fedcivilservice.gov.ng',
      'federal civil service portal login',
      'civil service salary scale conpss',
      'federal government job application',
      'fcsc shortlisted candidates'
    ],
    quickTable: {
      headers: ['FCSC Parameter / Cadre', 'Official Federal Civil Service Standard'],
      rows: [
        ['Governing Body', 'Federal Civil Service Commission (FCSC), Abuja'],
        ['Primary Application Portal', 'https://careers.fedcivilservice.gov.ng'],
        ['Participating Ministries (MDAs)', 'Education, Foreign Affairs, Agriculture, Health, Works & Housing, Trade & Investment, Transport'],
        ['Graduate Officer Entry (GL 08)', 'B.Sc, B.A, B.Eng, or HND (Minimum 2:2 / Lower Credit) with mandatory NYSC Discharge/Exemption'],
        ['Senior Officer Entry (GL 09/10)', 'Master’s Degree (M.Sc / M.A) or specialized professional certifications with 3–5 years experience'],
        ['Executive / Clerical Cadre (GL 04-06)', 'ND, NCE, or SSCE/GCE with 5 credits including English Language & Mathematics'],
        ['Age Bracket', '18 to 35 years old at date of submission (up to 40 for specialized doctors/engineers)'],
        ['Consolidated Salary Scale (CONPSS)', 'GL 04: ₦55,000–₦65,000 | GL 08: ₦85,000–₦115,000 | GL 10: ₦135,000–₦170,000 | GL 14: ₦220,000–₦285,000']
      ]
    },
    howToSteps: [
      { name: 'Visit careers.fedcivilservice.gov.ng', text: 'Open the verified Federal Civil Service career portal.' },
      { name: 'Select Target MDA & Vacancy Cadre', text: 'Browse active MDA openings (e.g. Planning Officer, Education Officer, Administrative Officer, Agricultural Officer).' },
      { name: 'Input NIN & Bio-Data', text: 'Validate your 11-digit NIN for automatic national identity and origin authentication.' },
      { name: 'Upload Credentials & NYSC Certificate', text: 'Upload scanned copies of degree certificates, NYSC discharge/exemption, and local government identification letter.' },
      { name: 'Submit Application & Print Reference Slip', text: 'Complete declarations and print your FCSC Acknowledgment Slip with unique tracking registration ID.' }
    ],
    content: [
      'The Federal Civil Service Commission (FCSC) is the apex constitutional body responsible for appointing, promoting, and disciplining senior officers across all Federal Ministries, Departments, and Agencies (MDAs) of the Federal Republic of Nigeria.',
      'Core Participating Ministries & Available Portfolios:',
      '• Federal Ministry of Education: Education Officers (GL 08) deployed to Federal Unity Colleges across Nigeria.',
      '• Ministry of Foreign Affairs: Foreign Service Officers (GL 08) handling diplomatic relations and consular missions abroad.',
      '• Federal Ministry of Agriculture and Food Security: Agricultural Officers, Veterinarians, and Agronomists.',
      '• Federal Ministry of Works and Housing: Civil Engineers, Quantity Surveyors, Architects, and Town Planners.',
      '• Federal Ministry of Trade, Industry and Investment: Commercial Officers, Trade Specialists, and Industrial Inspectors.',
      'Academic Qualifications & Grade Level Classifications:',
      '• Grade Level 08 (Entry Graduate): Requires a Bachelor’s Degree (B.Sc, B.A, B.Eng) or Higher National Diploma (HND) with an authentic NYSC discharge or exemption certificate.',
      '• Grade Level 09/10: For candidates possessing Master’s degrees or relevant professional charters (e.g., ICAN, COREN, NIM).',
      '• Grade Level 04/06: Clerical and Executive Assistants holding SSCE or Ordinary National Diplomas (OND).',
      'Computer-Based Examination & Oral Board Interview:',
      'Shortlisted applicants undergo a Computer-Based Test (CBT) assessing Public Service Rules (PSR), Financial Regulations, General Current Affairs, and Core Specialization Aptitude, followed by an oral interview before the FCSC Board in Abuja.'
    ],
    faqs: [
      {
        question: 'Is the Federal Civil Service recruitment portal open for 2026?',
        answer: 'Vacancies across Federal MDAs are advertised via the FCSC portal at careers.fedcivilservice.gov.ng and published in national gazettes. Registration is 100% free.'
      },
      {
        question: 'Can HND holders apply for Grade Level 08 in the Federal Civil Service?',
        answer: 'Yes. In line with the Federal Government policy harmonizing B.Sc and HND qualifications in the civil service, HND holders enter at Grade Level 08 provided they possess an NYSC discharge or exemption certificate.'
      },
      {
        question: 'What is the age limit for Federal Civil Service jobs?',
        answer: 'Applicants must generally be between 18 and 35 years old at the time of entry. Waivers up to 40 years are occasionally granted for rare medical specialists, doctoral holders, and senior engineering consultants.'
      },
      {
        question: 'How much does a Federal Civil Servant earn on Grade Level 08?',
        answer: 'Under the Consolidated Public Service Salary Structure (CONPSS), an entry-level officer on GL 08 earns between ₦85,000 and ₦115,000 monthly, plus federal allowances, housing benefits, and contributory pension credits.'
      }
    ]
  },
  {
    slug: 'teachers-recruitment-subeb',
    title: 'SUBEB & Teachers Recruitment Portal 2026: State Application Links & TRCN Guide',
    seoTitle: 'SUBEB Teachers Recruitment 2026: State Portals & TRCN',
    description: 'State Universal Basic Education Board (SUBEB) & secondary school teachers recruitment 2026. Check TRCN rules, Lagos/Oyo/Kaduna portal links, salary & CBT test.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'Civil Service',
    statusBadge: 'SUBEB & STATE TEACHERS RECRUITMENT NATIONAL HUB',
    officialPortalUrl: 'https://subeb.lagosstate.gov.ng',
    scamNotice: 'STATE MINISTRY OF EDUCATION WARNING: Teaching recruitment into public primary and junior secondary schools across all 36 states is strictly FREE. Do not pay middlemen claiming to sell employment slots or interview exemptions. Report fraudsters to state anti-corruption commissions.',
    quickAnswer: {
      question: 'How Do I Apply for SUBEB Teachers Recruitment in Nigeria for 2026?',
      directAnswer: 'State Universal Basic Education Board (SUBEB) and Teachers Service Commission recruitments are managed on state-specific online portals (e.g., subeb.lagosstate.gov.ng, jobportal.oyostate.gov.ng, kdsg-jobs.com). Registration is 100% free. Qualified candidates must hold an NCE (National Certificate in Education) for primary schools or B.Ed / B.Sc(Ed) / PGDE for secondary schools. Teachers Registration Council of Nigeria (TRCN) certification or induction is mandatory.',
      statusText: 'State Portals Active • 100% Free Teacher Enlistment',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (Zero Charge)', highlight: true },
        { label: 'Minimum Qualification', value: 'NCE / B.Ed / B.Sc(Ed)' },
        { label: 'Mandatory Council', value: 'TRCN Registration' },
        { label: 'Age Bracket', value: '18 - 35 (Up to 40)' }
      ]
    },
    keywords: [
      'teachers recruitment portal',
      'subeb recruitment 2026',
      'state universal basic education board recruitment',
      'trcn certificate requirements',
      'lagos subeb recruitment',
      'oyo subeb recruitment',
      'kaduna teachers recruitment',
      'teachers salary scale contiss conpcass',
      'public school teacher salary nigeria'
    ],
    quickTable: {
      headers: ['SUBEB Recruitment Parameter', 'Official State Standard / TRCN Rules'],
      rows: [
        ['Primary School Teachers Cadre', 'National Certificate in Education (NCE) | Grade Level 07 | TRCN Induction'],
        ['Secondary School Teachers Cadre', 'B.Ed, B.Sc(Ed), B.A(Ed), or B.Sc/HND + Post Graduate Diploma in Education (PGDE) | Grade Level 08'],
        ['TRCN Certification Mandate', 'Compulsory registration or passing of the Teacher Licensure Examination (PQE)'],
        ['Major State Application Portals', 'Lagos (subeb.lagosstate.gov.ng) | Oyo (jobportal.oyostate.gov.ng) | Kaduna (kdsg-jobs.com)'],
        ['Core Subject Vacancies', 'English, Mathematics, Sciences (Physics/Chemistry/Biology), ICT, Agricultural Science, Local Languages'],
        ['Screening Stages', 'Online Application → Computer-Based Test (CBT) → Subject Micro-Teaching Demonstration → Oral Interview'],
        ['Age Threshold', '18 to 35 years old (States like Lagos & Oyo permit up to 40 years for specialized STEM teachers)'],
        ['Civil Service Teachers Salary Range', 'NCE (GL 07): ₦70,000–₦85,000 | Degree (GL 08): ₦85,000–₦110,000 | Plus State Peculiar Teaching Allowances']
      ]
    },
    howToSteps: [
      { name: 'Identify State SUBEB Portal', text: 'Access your resident state recruitment gateway (e.g., Lagos SUBEB, Oyo TESCOM, EdoBEST, Kaduna SUBEB).' },
      { name: 'Create Account with NIN', text: 'Register with your verified email, phone number, and 11-digit NIN.' },
      { name: 'Input Academic Qualifications & Teaching Subject', text: 'Select your teaching subject specialty (Mathematics, English, Basic Science, etc.) and submit your NCE or B.Ed grades.' },
      { name: 'Upload TRCN Certificate or PQE Slip', text: 'Upload clear scans of your Teachers Registration Council of Nigeria (TRCN) certificate or induction letter.' },
      { name: 'Print Examination Slip', text: 'Download your application summary and examination venue slip for the computerized screening test.' }
    ],
    content: [
      'The State Universal Basic Education Board (SUBEB) across Nigeria’s 36 states and the Federal Capital Territory (FCT) is empowered to recruit, train, and deploy certified teachers to public primary and junior secondary schools.',
      'Mandatory Qualifications: NCE, B.Ed & The PGDE Requirement:',
      '• Primary Education Cadre (GL 07): A National Certificate in Education (NCE) in Primary Education Studies, Early Childhood Care, English, Mathematics, Integrated Science, Social Studies, or Technical Education.',
      '• Junior & Senior Secondary School Cadre (GL 08): Bachelor of Education (B.Ed), Bachelor of Science in Education (B.Sc Ed), or Bachelor of Arts in Education (B.A Ed).',
      '• Non-Education Graduates (B.Sc / HND): Candidates with degrees in Engineering, Pure Sciences, Accounting, or Economics MUST possess a Post Graduate Diploma in Education (PGDE) or Professional Diploma in Education (PDE).',
      'TRCN Professional Licensure Regulation:',
      'By federal statutory law, every practicing teacher in public schools must be registered with the Teachers Registration Council of Nigeria (TRCN). Candidates who have not written the Professional Qualifying Examination (PQE) are typically granted a grace window to sit for the next diet upon employment.',
      'State-Level Micro-Teaching Demonstrations:',
      'Beyond computerized tests in pedagogy and English, successful candidates are required to prepare a 10-minute micro-teaching session on a chalkboard or whiteboard before an evaluation panel assessing classroom management, lesson planning, and vocal projection.'
    ],
    faqs: [
      {
        question: 'Can I apply for SUBEB teaching recruitment without TRCN certificate?',
        answer: 'Most state SUBEBs allow applicants with NCE or B.Ed to apply with their institution induction letter or PQE registration slip, provided they complete full TRCN licensure after provisional appointment.'
      },
      {
        question: 'Can B.Sc or HND holders apply without education degree?',
        answer: 'Candidates without education degrees must hold a Post Graduate Diploma in Education (PGDE) to be officially certified as teachers in the public civil service.'
      },
      {
        question: 'What is the salary of a public primary school teacher in Nigeria?',
        answer: 'NCE teachers on Grade Level 07 earn between ₦70,000 and ₦85,000 monthly, while graduate teachers on Grade Level 08 earn ₦85,000 to ₦110,000, depending on state-specific minimum wage implementation and rural posting allowances.'
      },
      {
        question: 'Which states are currently recruiting teachers?',
        answer: 'States like Lagos, Oyo (TESCOM), Edo (EdoBEST), Kaduna, Kano, and Delta periodically roll out large-scale teaching drives. Track our portal for instant alerts on state intake cycles.'
      }
    ]
  },
  {
    slug: 'nuc-recruitment-portal',
    title: 'National Universities Commission (NUC) Recruitment 2026: Application Portal & Academic Cadres',
    seoTitle: 'NUC Recruitment Portal 2026: Apply at nuc.edu.ng',
    description: 'Apply for National Universities Commission (NUC) recruitment 2026 at nuc.edu.ng. Academic planning, quality assurance, CONTISS salary scale & screening test.',
    category: 'Live Status',
    date: '2026-10-02',
    branch: 'NUC',
    statusBadge: 'NATIONAL UNIVERSITIES COMMISSION (NUC) OFFICIAL HUB',
    officialPortalUrl: 'https://nuc.edu.ng/careers',
    scamNotice: 'FEDERAL EDUCATION PARASTATAL WARNING: Employment into the National Universities Commission (NUC) is strictly merit-based, competitive, and 100% FREE. The Commission does not request payment for application forms, aptitude tests, or interview selection. Immediately report anyone soliciting money to the ICPC or NUC Secretariat, Maitama, Abuja.',
    quickAnswer: {
      question: 'How to Apply for National Universities Commission (NUC) Recruitment 2026?',
      directAnswer: 'Applications for the National Universities Commission (NUC) recruitment are processed through the official careers portal at nuc.edu.ng/careers or via the Federal Civil Service Commission portal. Registration is 100% free. Entry-level academic and quality assurance roles start at Grade Level 08 (salary ₦95,000–₦130,000 under the CONTISS/CONPSS harmonized scale) for B.Sc / B.A / B.Ed graduates with minimum Second Class Upper (2:1) or Lower (2:2) and completed NYSC certificates. Candidates must pass a Computer-Based Test (CBT) covering higher education administration and current affairs.',
      statusText: 'NUC Portal Active • Academic & Admin Cadres',
      statusVariant: 'success',
      metrics: [
        { label: 'Application Fee', value: '₦0.00 (Zero Charge)', highlight: true },
        { label: 'Official Portal', value: 'nuc.edu.ng/careers' },
        { label: 'Entry Level Cadre', value: 'GL 08 (B.Sc/B.Ed/B.A)' },
        { label: 'Age Requirement', value: '18 - 35 Years (Up to 40)' }
      ]
    },
    keywords: [
      'national universities commission recruitment',
      'nuc recruitment portal',
      'nuc recruitment 2026',
      'nuc.edu.ng careers',
      'nuc academic planning officer jobs',
      'nuc salary scale contiss',
      'national universities commission application',
      'nuc shortlisted candidates 2026',
      'federal education parastatal jobs'
    ],
    quickTable: {
      headers: ['NUC Vacancy / Cadre', 'Official Academic & Parastatal Standard'],
      rows: [
        ['Governing Authority', 'National Universities Commission (NUC), Maitama, Abuja'],
        ['Primary Career Portals', 'https://nuc.edu.ng/careers & careers.fedcivilservice.gov.ng'],
        ['Academic Planning Officers (GL 08)', 'B.Sc, B.Ed, B.A (Minimum 2:1 or Upper 2:2) with NYSC Discharge. Reviews university curriculum, accreditations, and program establishment.'],
        ['Quality Assurance & Inspection Officers', 'Degree in Education Planning, Sciences, or Administration. Responsible for university standards monitoring and institutional audits.'],
        ['Research & Innovation Officers (GL 09/10)', 'Master’s (M.Sc/M.Ed) or doctorate in educational measurement, institutional research, or STEM fields.'],
        ['ICT & Data Analysts (GL 08)', 'B.Sc / HND Computer Science, Software Engineering, or Cyber Security managing the Nigerian University System (NUS) databases.'],
        ['Executive & Secretarial Cadres (GL 06/07)', 'ND, NCE, or Higher National Diplomas in Office Technology & Management or Secretarial Administration.'],
        ['Consolidated Salary Structure', 'CONTISS/CONPSS Scale: GL 06 (₦70,000–₦82,000) | GL 08 (₦95,000–₦130,000) | GL 10 (₦150,000–₦190,000) | GL 12/14 (₦220,000–₦310,000)']
      ]
    },
    howToSteps: [
      { name: 'Visit nuc.edu.ng/careers', text: 'Access the authentic National Universities Commission career gateway or FCSC MDA recruitment link.' },
      { name: 'Select Department & Cadre', text: 'Choose your target division (Academic Planning, Quality Assurance, Research & Innovation, ICT, or Administration).' },
      { name: 'NIN & Academic Verification', text: 'Validate your 11-digit NIN and input degree classification, university of graduation, and NYSC certificate details.' },
      { name: 'Upload Certified Transcripts & Credentials', text: 'Upload degree certificate, NYSC discharge/exemption letter, LGA certificate of origin, and CV in PDF format.' },
      { name: 'Submit & Print NUC Verification Slip', text: 'Complete submission and print your NUC Application Reference Slip with your tracking registration ID.' }
    ],
    content: [
      'The National Universities Commission (NUC) is the statutory federal regulatory agency under the Federal Ministry of Education responsible for the orderly development, accreditation, and standard setting of the Nigerian University System (NUS).',
      'Key Departments & Strategic Vacancy Profiles:',
      '• Directorate of Academic Planning: Academic Planning Officers evaluate university degree curriculum benchmarks (CCMAS), review resource readiness for new programs, and monitor lecturer-to-student ratios.',
      '• Directorate of Quality Assurance: Quality Assurance Officers conduct statutory accreditation visits, inspect laboratory facilities, and audit academic compliance across 270+ federal, state, and private universities.',
      '• Directorate of Research, Innovation & Information Technology: Coordinates tertiary research grants, manages the Nigerian University System rankings, and maintains national graduate databases.',
      '• Directorate of Establishment & Human Resources: Oversees internal commission administration, university governing council coordination, and federal compliance documentation.',
      'Academic Qualifications & Grade Level Classifications:',
      '• Grade Level 08 (Entry Graduate): Requires a Bachelor’s Degree (B.Sc, B.A, B.Ed) with a minimum of Second Class Honours (Lower Division, with preference given to Upper Division) and an authentic NYSC discharge or exemption certificate.',
      '• Grade Level 09/10: Candidates with Master’s degrees (M.Sc, M.Ed, M.Phil) or professional chartered credentials with 3 to 5 years of post-qualification experience.',
      '• Grade Level 12/13 (Senior Regulatory Analysts): Ph.D. holders or senior institutional researchers with demonstrated university governance experience.',
      'Selection Process & Computerized Screening:',
      'Shortlisted applicants sit for a Computer-Based Test (CBT) covering National Policy on Education, Public Service Rules (PSR), Higher Education Regulatory Trends, Analytical Reasoning, and General English, followed by an oral defense before the NUC Interview Panel at the Commission’s Headquarters in Maitama, Abuja.'
    ],
    faqs: [
      {
        question: 'Is the NUC recruitment portal open for 2026?',
        answer: 'Vacancies are announced via the NUC official website at nuc.edu.ng/careers and coordinated through the Federal Civil Service Commission. Application is 100% free.'
      },
      {
        question: 'Can graduates with Second Class Lower (2:2) apply for NUC jobs?',
        answer: 'Yes. Candidates with Second Class Lower (2:2) degrees can apply for administrative, executive, and ICT roles, while specialized academic planning and research desks give preference to First Class and Second Class Upper graduates.'
      },
      {
        question: 'What is the salary structure of NUC staff in Nigeria?',
        answer: 'Staff of the National Universities Commission are remunerated under harmonized federal parastatal scales (CONTISS/CONPSS) with peculiar regulatory agency allowances. An entry-level GL 08 officer earns between ₦95,000 and ₦130,000 monthly, plus federal medical and pension benefits.'
      },
      {
        question: 'Where is the NUC recruitment screening and interview conducted?',
        answer: 'Initial computerized aptitude tests are held in accredited CBT centers across the six geopolitical zones, while final oral board interviews take place at the NUC Secretariat, 26 Aguiyi Ironsi Street, Maitama, Abuja.'
      }
    ]
  },
  {
    slug: 'recruitment-army-mil-ng-portal-login',
    title: 'recruitment.army.mil.ng Portal Login 2026: Create Account & Sign In (88 RRI & DSSC)',
    seoTitle: 'recruitment.army.mil.ng Portal Login 2026: Sign In & Create Account',
    description: 'Official guide for recruitment.army.mil.ng portal login 2026. Step-by-step account creation, sign in, NIN verification, password reset & slip reprint for 88 RRI & DSSC.',
    category: 'How-to-Apply',
    date: '2026-10-02',
    branch: 'Army',
    statusBadge: 'OFFICIAL ARMY PORTAL GATEWAY & LOGIN GUIDE',
    officialPortalUrl: 'https://recruitment.army.mil.ng',
    scamNotice: 'OFFICIAL ARMY SECURITY NOTICE: The authentic Nigerian Army recruitment portal is strictly recruitment.army.mil.ng. Registration, account creation, and candidate login are 100% FREE. The Nigerian Army NEVER asks candidates to pay for scratch cards, PINs, or interview slots. Disregard fraudulent copycat domains ending in .site, .co, or .blogspot.',
    quickAnswer: {
      question: 'How Do I Login and Create an Account on recruitment.army.mil.ng?',
      directAnswer: 'To login or create an account on the Nigerian Army portal, navigate to recruitment.army.mil.ng. New candidates must click "Apply Now" or "Create Account", provide a functional email, set an alphanumeric password, and input their 11-digit NIN. Existing applicants for Regular Recruit Intake (88 RRI) or Direct Short Service Commission (DSSC) can click "Candidate Login", enter their registered email and password, and access their dashboard to track application status and reprint screening slips.',
      statusText: 'Portal Active • 100% Free Candidate Access',
      statusVariant: 'success',
      metrics: [
        { label: 'Official Portal', value: 'recruitment.army.mil.ng', highlight: true },
        { label: 'Application Fee', value: '₦0.00 (100% Free)' },
        { label: 'Tracking Mirror', value: 'tracking.armynotification.com.ng' },
        { label: 'Intake Programs', value: '88 RRI & DSSC 30/31' }
      ]
    },
    keywords: [
      'recruitment.army.mil.ng',
      'nigerian army recruitment portal 2026 login',
      'www recruitment army mil ng portal',
      'www recruitment army mil ng portal create account',
      'recruit.army.mil.ng',
      'recruitment.army.mil.ng portal login',
      'nigerian army recruitment portal 2026',
      'army recruitment portal',
      'recruitment army mil ng',
      'https://recruitment.army.mil.ng',
      'recruitment army portal',
      'www recruitment army mil ng portal login password',
      'recruitment.army.mil.ng portal sign up',
      'login nigerian army portal',
      'my tracking slip login'
    ],
    quickTable: {
      headers: ['Portal Metric', 'Official Army Specifications (recruitment.army.mil.ng)'],
      rows: [
        ['Primary Portal URL', 'https://recruitment.army.mil.ng'],
        ['Alternative Tracking URL', 'https://tracking.armynotification.com.ng'],
        ['Available Enlistments', 'Regular Recruit Intake (88 RRI) & Direct Short Service Commission (DSSC)'],
        ['Access Fee', '₦0.00 (Completely Free - Zero Scratch Card)'],
        ['Candidate Login Credentials', 'Registered Email Address + Account Password or 11-digit NIN'],
        ['NIN Integration', 'Direct National Identity Management Commission (NIMC) Synchronization'],
        ['Dashboard Capabilities', 'Submit Bio-data, Check Application Status, Download Screening Slip & Guarantor Form'],
        ['Technical Support Email', 'recruitment@army.mil.ng']
      ]
    },
    howToSteps: [
      { name: 'Navigate to Verified Army Portal', text: 'Open your browser and visit https://recruitment.army.mil.ng (ensure SSL padlock is verified).' },
      { name: 'Select Account Action (Register or Login)', text: 'New applicants click "Create Account / Apply Now"; returning candidates click "Candidate Login".' },
      { name: 'Input Credentials & Verify NIN', text: 'Enter your functional personal email, create a secure password, and supply your 11-digit NIN for instant bio-data sync.' },
      { name: 'Confirm Account Activation', text: 'Open your email inbox or spam folder and click the verification link or enter the verification OTP.' },
      { name: 'Access Candidate Dashboard', text: 'Log in with your verified email and password, choose your cadre (Tradesmen or Non-Tradesmen), and complete application forms.' },
      { name: 'Download & Print Verification Slips', text: 'Head to the downloads section to print your Application Summary Sheet, Guarantor Form, and Screening Slip in multiple clean copies.' }
    ],
    content: [
      'The Nigerian Army officially hosts all military enlistment operations on recruitment.army.mil.ng. Every year, over 500,000 Nigerian youths access this portal to apply for the Regular Recruit Intake (RRI) and Direct Short Service Commission (DSSC).',
      'Understanding the Difference: recruitment.army.mil.ng vs tracking.armynotification.com.ng:',
      '• recruitment.army.mil.ng: This is the primary enlistment server where new applicants create profiles, complete O-Level submissions, upload passport photos, and generate initial application reference numbers.',
      '• tracking.armynotification.com.ng: This is the secondary application tracking and slip reprint server deployed by the Nigerian Army to manage high-volume candidate traffic during screening and shortlist verification periods.',
      'Step-by-Step: How to Create an Account on recruitment.army.mil.ng:',
      '1. Step 1: Open the official URL https://recruitment.army.mil.ng on Google Chrome, Safari, or Microsoft Edge.',
      '2. Step 2: Click on "Apply Now" or "Create Account".',
      '3. Step 3: Enter an active email address you have personal daily access to (do not use a cybercafe operator\'s email).',
      '4. Step 4: Create a strong password (minimum 8 characters including letters, numbers, and symbols).',
      '5. Step 5: Enter your 11-digit National Identification Number (NIN). The portal automatically pulls your official registered full name and date of birth from the NIMC database.',
      '6. Step 6: Review the fetched information to ensure full consistency with your educational certificates, then click "Submit Registration".',
      'How to Login If You Have Already Registered:',
      '1. Visit recruitment.army.mil.ng and click "Login" at the top navigation bar.',
      '2. Select your category: Regular Recruit Intake (88 RRI) or Direct Short Service Commission (DSSC).',
      '3. Enter your registered email address and password in the login fields.',
      '4. Click "Sign In" to open your candidate dashboard.',
      'How to Reset a Forgotten Army Portal Password:',
      '• Click on "Forgot Password?" below the login form on recruitment.army.mil.ng.',
      '• Enter the exact email address or NIN used during initial registration.',
      '• Check your email inbox (and Spam/Junk folder) for the password reset link from recruitment@army.mil.ng.',
      '• Click the link and set a new password, then return to the login screen.',
      'Troubleshooting 4 Common recruitment.army.mil.ng Login Errors:',
      '1. "Invalid Email or Password": Check for accidental leading or trailing spaces if copying and pasting. Passwords on the Army portal are case-sensitive.',
      '2. "NIN Already Registered": If you previously applied in a past cycle, use the password recovery tool instead of attempting to create a second account. Creating duplicate accounts with the same NIN is strictly prohibited and causes automatic system disqualification.',
      '3. "Server Error 500 / 503 Service Unavailable": Caused by high concurrent user traffic. Access the mirror server at tracking.armynotification.com.ng or try logging in during off-peak hours (between 10:00 PM and 6:00 AM).',
      '4. "Application Slip Download Fails": If clicking the print button does not trigger the PDF download, disable your browser\'s pop-up blocker or switch to desktop mode.',
      'Essential Physical Documents to Print from Your Dashboard:',
      '• Candidate Screening Summary Slip: Must display your clear candidate photograph, passport QR code, and designated state screening center.',
      '• Guarantor Form (Attestation Letter): Must be signed and stamped by an authorized referee (e.g. Traditional Ruler, Civil Servant GL 08+, Police CSP+, or Military Officer Captain+).',
      '• Parent / Guardian Consent Letter: Signed by parents or legal guardians for candidates aged 18 to 22.',
      '• Local Government Indigene Certificate: Certified by your LGA Chairman or Secretary.'
    ],
    faqs: [
      {
        question: 'How do I create an account on recruitment.army.mil.ng?',
        answer: 'Visit recruitment.army.mil.ng, click "Create Account" or "Apply Now", enter your active email and password, provide your 11-digit NIN for NIMC synchronization, and activate your profile via the verification email.'
      },
      {
        question: 'What is the correct web address for the Nigerian Army recruitment portal?',
        answer: 'The authentic Nigerian Army recruitment portal is https://recruitment.army.mil.ng. For application tracking and reprint of screening slips, candidates can also access https://tracking.armynotification.com.ng.'
      },
      {
        question: 'How much does it cost to register or login on recruitment.army.mil.ng?',
        answer: 'Registration, login, and slip download on recruitment.army.mil.ng are 100% free of charge. The Nigerian Army does not sell scratch cards or PIN codes.'
      },
      {
        question: 'What should I do if I forgot my Nigerian Army portal password?',
        answer: 'Click the "Forgot Password" link on recruitment.army.mil.ng, enter your registered email address or NIN, and follow the password reset link sent to your inbox.'
      },
      {
        question: 'Can I login to the Nigerian Army portal using my mobile phone?',
        answer: 'Yes. The portal is mobile-responsive. However, for downloading and printing your application screening slips and guarantor forms, using a desktop computer or enabling "Desktop Site" in your mobile browser is recommended.'
      },
      {
        question: 'Why does recruitment.army.mil.ng show "Server Error" or fail to load?',
        answer: 'During peak application or shortlist release dates, millions of users access the site simultaneously. If you experience timeout errors, refresh using Ctrl+F5, access tracking.armynotification.com.ng, or log in during off-peak hours.'
      }
    ]
  },
  {
    slug: 'how-to-apply-police-constable',
    title: 'How to Apply for Nigeria Police Recruitment 2026 (Step-by-Step)',
    seoTitle: 'How to Apply for Nigeria Police Recruitment 2026 (Guide)',
    description: 'Step-by-step guide to applying for Nigeria Police Force (NPF) Constable recruitment 2026 at policerecruitment.gov.ng. NIN verification, docs & slip print.',
    category: 'How-to-Apply',
    date: '2026-09-11',
    branch: 'Police',
    statusBadge: 'NPF OFFICIAL ENLISTMENT GUIDE',
    officialPortalUrl: 'https://apply.policerecruitment.gov.ng',
    keywords: [
      'how to apply for police recruitment 2026',
      'npf recruitment portal application',
      'police constable registration steps',
      'police screening slip download',
      'police recruitment requirements'
    ],
    content: [
      'The Police Service Commission manages Constable recruitment through an online verification portal.',
      'Follow these 5 core steps:',
      '1. Account Initialization: Enter your active email address and phone number at apply.policerecruitment.gov.ng.',
      '2. NIN & BVN Authentication: Verify identity and national origin credentials.',
      '3. Educational Entry: Submit your WAEC/NECO/NABTEB credit scores (minimum 5 credits in max 2 sittings).',
      '4. Physical Declaration: Declare height, chest measurement, and confirm absence of tattoos or body piercings.',
      '5. Print Examination Slip: Download and print the applicant summary slip with barcode for presentation at the screening center.'
    ],
    faqs: [
      {
        question: 'Is police recruitment form free?',
        answer: 'Yes. The Nigeria Police Force does not charge any fee for the Constable recruitment form.'
      },
      {
        question: 'What is the age requirement for Nigeria Police Constable?',
        answer: 'Applicants must be at least 18 years old and not more than 25 years old at the time of recruitment.'
      }
    ]
  },

  // ==========================================
  // TOPIC 3: SHORTLIST, SCREENING & SLIPS
  // ==========================================
  {
    slug: 'print-army-screening-slip',
    title: 'How to Print & Reprint Your Nigerian Army Screening Slip (Official 2026 Portal)',
    seoTitle: 'tracking armynotification com ng: Login & Print Slip 2026',
    description: 'Login to tracking.armynotification.com.ng portal: Check Nigerian Army 87/88 RRI & DSSC status, reprint screening slip & guarantor forms free (100% Verified).',
    category: 'Shortlist',
    date: '2026-09-11',
    branch: 'Army',
    statusBadge: 'ACTIVE STATUS & REPRINT GATEWAY',
    officialPortalUrl: 'https://tracking.armynotification.com.ng',
    scamNotice: 'OFFICIAL GATEWAY ADVISORY: Printing your screening slip on tracking.armynotification.com.ng is 100% free. Never pay any fee to cybercafe operators claiming to charge official portal download fees.',
    quickAnswer: {
      question: 'How to Print & Reprint Your Nigerian Army Screening Slip at tracking.armynotification.com.ng',
      directAnswer: 'To print or reprint your Nigerian Army screening slip, visit tracking.armynotification.com.ng, enter your registered Application Number (e.g., 87RRI/... or DSSC32) and phone number, and access your status dashboard. Click "Print Screening Slip" to download your official PDF examination slip and guarantor forms free of charge.',
      statusText: 'Portal Active: tracking.armynotification.com.ng',
      statusVariant: 'success',
      metrics: [
        { label: 'Portal URL', value: 'tracking.armynotification.com.ng', highlight: true },
        { label: 'Reprint Cost', value: '₦0.00 (Completely Free)' },
        { label: 'Required Credentials', value: 'Application No & Phone' },
        { label: 'Paper Spec', value: 'Clean White A4 (Clear Barcode)' }
      ]
    },
    keywords: [
      'print army screening slip',
      'tracking armynotification com ng',
      'tracking.armynotification.com.ng',
      'armynotification com ng',
      'army application tracking',
      'army screening slip reprint',
      '87 rri tracking portal',
      '88 rri application status'
    ],
    howToSteps: [
      { name: 'Access Tracking Gateway', text: 'Visit tracking.armynotification.com.ng or recruitment.army.mil.ng in a modern browser.' },
      { name: 'Enter Candidate Credentials', text: 'Input your Application Number (e.g. 87RRI/AB/1234) or registered email address and mobile number.' },
      { name: 'Authenticate Candidate Profile', text: 'Click Verify Status to access your candidate dashboard.' },
      { name: 'Download PDF Bundle', text: 'Download and print 3 colored copies of your Application Verification Slip and Guarantor Form.' }
    ],
    content: [
      'Candidates who submit applications for the Nigerian Army Regular Recruit Intake (RRI) must print their official screening slip and guarantor form. This slip serves as your examination gate pass, verifying your registration number, assigned screening center, and screening date.',
      'Direct Access to the Official Tracking Gateway: The official domain is tracking.armynotification.com.ng.',
      'Step-by-Step Slip Printing Instructions:',
      '1. Step 1: Access the Tracking Gateway at tracking.armynotification.com.ng.',
      '2. Step 2: Input Your Authentication Credentials (your Application Reference Number and registered phone number).',
      '3. Step 3: Authenticate Candidate Profile by clicking "Verify Status / Print Slip".',
      '4. Step 4: Download and Print the Document Bundle in full color on clean A4 paper.',
      'How to Recover a Lost Application Number:',
      '• Check your email inbox and search for messages from noreply@recruitment.army.mil.ng.',
      '• Check your SMS inbox for the initial confirmation text sent upon online registration.',
      '• Use the "Forgot Application Number" link on the portal by entering your 11-digit NIN and surname.',
      'Mandatory Physical Screening Day Checklist:',
      '• 3 Colored copies of your Application Summary Slip.',
      '• Fully completed and stamped Guarantor Endorsement Slip.',
      '• Original and 4 photocopies of your WAEC/NECO/NABTEB certificates.',
      '• Original Birth Certificate or valid Age Declaration slip.',
      '• Original Certificate of Local Government State of Origin.',
      '• Plain white round-neck vest, royal blue shorts, and clean white canvas sneakers.',
      '• 4 Recent passport photographs on a plain white background.'
    ],
    faqs: [
      {
        question: 'Can I be screened without my printed slip?',
        answer: 'No. Security personnel and recruiting officers will not grant entry without an original printed Application Verification Slip containing a legible barcode.'
      },
      {
        question: 'Why is tracking.armynotification.com.ng showing a server error?',
        answer: 'Server traffic peaks when shortlists are released. If you experience slow loading, try accessing the portal early in the morning between 4:00 AM and 7:00 AM.'
      },
      {
        question: 'Does the guarantor form require a court stamp?',
        answer: 'Yes. Your guarantor form must include the official stamp and signature of an eligible referee, alongside an endorsement from a Magistrate Court or Commissioner for Oaths.'
      }
    ]
  },
  {
    slug: 'nigerian-army-shortlisted-candidates-pdf',
    title: 'Nigerian Army Shortlisted Candidates 2026 PDF (Check Names by State)',
    seoTitle: 'Nigerian Army Shortlisted Candidates 2026 PDF (All States)',
    description: 'Download Nigerian Army shortlisted candidates 2026 PDF for all 36 states. Check your screening center, state screening dates and verify armynotification slip.',
    category: 'Shortlist',
    date: '2026-09-11',
    branch: 'Army',
    statusBadge: 'STATE-BY-STATE PDF DIRECTORY',
    officialPortalUrl: 'https://recruitment.army.mil.ng',
    keywords: [
      'nigerian army shortlisted candidates 2026 pdf',
      'check army shortlist names',
      'army screening centers 2026',
      'how to check army shortlist',
      'download army shortlisted names'
    ],
    content: [
      'The Nigerian Army releases official lists of candidates shortlisted for state-by-state physical and medical screening exercises.',
      'How to Verify Your Name on the Shortlist:',
      '1. Open the verified portal at recruitment.army.mil.ng or tracking.armynotification.com.ng.',
      '2. Download the PDF corresponding to your State of Origin (e.g. Abia, Kano, Lagos, Rivers, Kaduna, Oyo, etc.).',
      '3. Use the PDF search function (Ctrl+F on computer or magnifying glass on mobile) to search for your Application Number or Surname.',
      '4. Note your designated State Screening Brigade / Barracks location and arrival date.'
    ],
    faqs: [
      {
        question: 'How do I download the Nigerian Army shortlisted candidates PDF?',
        answer: 'Visit recruitment.army.mil.ng, select your state of origin from the shortlist menu, and download the official PDF document to your device.'
      },
      {
        question: 'What happens if my name is not on the shortlisted candidates list?',
        answer: 'Candidates whose names do not appear did not meet the quota or criteria for the current intake. They are advised to re-apply during the subsequent recruitment intake.'
      }
    ]
  },
  {
    slug: 'police-shortlisted-candidates-cbt-date',
    title: 'Police Shortlist 2026: CBT Exam Date & Center Slip Check',
    seoTitle: 'Police Shortlist 2026: CBT Exam Date & Center Slip Check',
    description: 'Check Nigeria Police Force (NPF) 2026 shortlisted candidates list. Download state CBT examination slips, check test centers and screening date schedule.',
    category: 'Shortlist',
    date: '2026-09-11',
    branch: 'Police',
    statusBadge: 'JAMB CBT INVITATION CHECKER',
    officialPortalUrl: 'https://apply.policerecruitment.gov.ng',
    keywords: [
      'police shortlisted candidates 2026',
      'npf screening center checker',
      'police cbt exam date 2026',
      'print police examination slip',
      'police shortlist pdf download'
    ],
    content: [
      'Candidates who pass the credentials screening phase of the Nigeria Police Force recruitment proceed to the Computer-Based Test (CBT) phase conducted in partnership with JAMB.',
      'Key Information for the Police CBT Screening Phase:',
      '• Examination Centers: Accredited JAMB testing centers in your state of registration.',
      '• Mandatory Slip: You must reprint your examination slip showing your specific date, time, and seat number.',
      '• Biometric Verification: Fingerprints are matched at the entrance of the examination hall to prevent impersonation.'
    ],
    faqs: [
      {
        question: 'Who conducts the Nigeria Police recruitment aptitude test?',
        answer: 'The Police Service Commission partners with the Joint Admissions and Matriculation Board (JAMB) to administer nationwide CBT examinations.'
      },
      {
        question: 'What score is needed to pass the Police Constable CBT exam?',
        answer: 'Candidates generally need to score at least 50% to qualify for subsequent medical fitness screenings.'
      }
    ]
  },

  // ==========================================
  // TOPIC 4: ELIGIBILITY & PHYSICAL STANDARDS
  // ==========================================
  {
    slug: 'military-physical-standards-height-requirements',
    title: 'Nigerian Military Physical Standards: Height, Chest & Medical Screening Guide (2026)',
    seoTitle: 'Military Height & Physical Standards Nigeria (2026)',
    description: 'Complete physical standards for Nigerian Army, Navy, and Air Force recruitment. Minimum height, chest expansion, vision tests, and disqualifying conditions.',
    category: 'Requirements',
    date: '2026-09-11',
    branch: 'Army',
    statusBadge: 'OFFICIAL PHYSICAL STANDARDS',
    quickTable: {
      headers: ['Military Branch', 'Minimum Male Height', 'Minimum Female Height', 'Minimum Chest Expansion (Male)'],
      rows: [
        ['Nigerian Army', '1.68 meters (5ft 6in)', '1.65 meters (5ft 5in)', '0.87 meters (fully expanded)'],
        ['Nigerian Navy', '1.68 meters (5ft 6in)', '1.65 meters (5ft 5in)', '0.86 meters (fully expanded)'],
        ['Nigerian Air Force', '1.66 meters (5ft 5in)', '1.63 meters (5ft 4in)', '0.86 meters (fully expanded)'],
        ['Tradesmen Special', '1.65 meters (selected trades)', '1.60 meters (selected trades)', '0.85 meters']
      ]
    },
    keywords: [
      'nigerian army height requirement',
      'navy physical screening requirements',
      'military chest expansion test nigeria',
      'army medical test disqualification',
      'female height for military nigeria'
    ],
    content: [
      'Passing academic requirements is only the first step in military recruitment. Candidates face rigorous parade-ground physical evaluations and comprehensive medical screenings.',
      '8 Common Medical Conditions That Cause Disqualification:',
      '1. Flat Feet (Pes Planus): Candidates with zero arch lack shock absorption for long endurance marches carrying heavy tactical gear.',
      '2. Knock Knees or Bow Legs (Genu Valgum / Genu Varum): When standing with ankles touching, knees must not bump each other (knock knees) nor have excessive gap (bow legs).',
      '3. Tattoos and Body Markings: The Armed Forces maintain zero tolerance for visible tattoos, tribal marks, or cult scarification.',
      '4. Impaired Vision and Color Blindness: Recruits must have 6/6 uncorrected vision to identify flares, navigation flags, and camouflage.',
      '5. Defective Teeth: Multiple missing front teeth, severe malocclusion, or untreated decayed molars can cause disqualification.',
      '6. Recent Surgical Scars and Hernias: Operations within the preceding 12 months present injury risks during strenuous drills.',
      '7. Pregnancy: All female candidates undergo mandatory blood/urine pregnancy tests; pregnant applicants are disqualified.',
      '8. High Blood Pressure & Cardiac Issues: Resting BP must be within standard healthy ranges (110/70 to 125/85 mmHg).',
      'How to Measure Your Height at Home Before Applying:',
      '• Remove shoes and stand flat against a straight wall with heels, back, and head touching the surface.',
      '• Place a flat ruler horizontally on your head and mark the wall.',
      '• Measure from the floor to the pencil mark with a metal tape (1.68m = 168cm = 5ft 6.1in; 1.65m = 165cm = 5ft 5in).'
    ],
    faqs: [
      {
        question: 'Can someone with bow legs join the Nigerian Army or Navy?',
        answer: 'No. Moderate or severe bow legs (Genu Varum) or knock knees (Genu Valgum) are disqualifying conditions across all branches of the Nigerian Armed Forces.'
      },
      {
        question: 'Can I join the military if I wear glasses?',
        answer: 'Specialist commissioned officers (doctors, lawyers, ICT engineers) under DSSC may be permitted to wear corrective glasses. Non-commissioned recruits must meet uncorrected 6/6 vision standards.'
      },
      {
        question: 'Does the Nigerian Air Force accept shorter candidates than the Army?',
        answer: 'Yes. The Nigerian Air Force height requirement is slightly lower: 1.66m for males and 1.63m for females, compared to 1.68m and 1.65m for the Army and Navy.'
      }
    ]
  },
  {
    slug: 'police-recruitment-requirements-age-limit',
    title: 'Police Recruitment Physical Requirements & Age Limit 2026',
    seoTitle: 'Police Recruitment Physical Requirements & Age Limit',
    description: 'Official Nigeria Police Force (NPF) physical standards. Minimum height, chest measurement, age limits, tattoos, and disqualifying medical conditions.',
    category: 'Requirements',
    date: '2026-09-11',
    branch: 'Police',
    statusBadge: 'NPF STANDARDS CHECKLIST',
    keywords: [
      'police recruitment physical requirements',
      'npf height requirement for male and female',
      'police recruitment age limit 2026',
      'reasons for police disqualification',
      'police physical screening test'
    ],
    content: [
      'The Police Service Commission strictly enforces physical, medical, and character fitness guidelines for prospective constables.',
      'Core Physical Standards for Police Enlistment:',
      '• Male Height: Minimum of 1.67 meters (5 feet 6 inches).',
      '• Female Height: Minimum of 1.64 meters (5 feet 5 inches).',
      '• Male Chest Expansion: Expanded chest measurement must not be less than 86 centimeters (34 inches).',
      '• Age Window: Between 18 and 25 years old at the close of the online portal.',
      '• Medical Disqualifications: Speech impediments, deformed limbs, visible tattoos, flat feet, and obesity disqualify candidates.'
    ],
    faqs: [
      {
        question: 'Can married women apply for Nigeria Police Constable recruitment?',
        answer: 'Yes, provided they meet all academic, age, and physical requirements and are not pregnant at the time of recruitment or training.'
      },
      {
        question: 'Is there an exception to the police height requirement?',
        answer: 'No. The 1.67m (male) and 1.64m (female) height benchmarks are statutory requirements enforced during physical screening.'
      }
    ]
  },
  {
    slug: 'ndlea-recruitment-requirements-qualifications',
    title: 'NDLEA Recruitment Requirements 2026: Age & Qualifications Guide',
    seoTitle: 'NDLEA Recruitment Requirements 2026: Age & Qualifications',
    description: 'National Drug Law Enforcement Agency (NDLEA) requirements. Narcotic Officer and Assistant cadres, age limit, height standards, and qualification cut-offs.',
    category: 'Requirements',
    date: '2026-09-11',
    branch: 'NDLEA',
    statusBadge: 'NDLEA RECRUITMENT BENCHMARK',
    officialPortalUrl: 'https://www.ndlea.gov.ng',
    keywords: [
      'ndlea recruitment requirements 2026',
      'ndlea age limit for graduates',
      'ndlea height requirement',
      'ndlea narcotic officer qualifications',
      'ndlea recruitment closing date'
    ],
    content: [
      'The National Drug Law Enforcement Agency (NDLEA) recruits across two primary cadres:',
      '1. Narcotic Officer Cadre (Superintendent / Level 08):',
      '• Requires a Bachelor’s degree (B.Sc / B.A) or Higher National Diploma (HND) from a recognized institution with minimum Second Class Lower.',
      '• Age limit: Not more than 30 years old at the time of application (up to 32 years for medical doctors and lawyers).',
      '2. Narcotic Assistant Cadre (Level 03 - 05):',
      '• Requires SSCE (WAEC/NECO) or National Diploma (ND) with credit passes.',
      '• Age limit: 18 to 25 years old.',
      'General Physical Criteria:',
      '• Male height: Minimum 1.65m; Female height: Minimum 1.60m.',
      '• Mandatory drug test certification: All shortlisted applicants undergo comprehensive drug screening tests.'
    ],
    faqs: [
      {
        question: 'Does NDLEA conduct drug tests on applicants?',
        answer: 'Yes. Every shortlisted applicant must test negative on mandatory multi-panel urine drug tests before being admitted into training academy.'
      },
      {
        question: 'What is the age limit for NDLEA graduates?',
        answer: 'Graduates applying for the Narcotic Officer cadre must not exceed 30 years of age.'
      }
    ]
  },

  // ==========================================
  // TOPIC 5: PAST QUESTIONS & CBT PRACTICE
  // ==========================================
  {
    slug: 'cdcfib-cbt-past-questions-free-practice',
    title: 'CDCFIB CBT Past Questions & Answers (Free Practice for NIS, NSCDC & Fire Service)',
    seoTitle: 'CDCFIB Past Questions 2026: NIS & NSCDC CBT Practice',
    description: 'Practice official CDCFIB recruitment CBT past questions and answers. Free online mock test covering English, General Mathematics, and Current Affairs.',
    category: 'Past Questions',
    date: '2026-09-11',
    branch: 'Civil Defence',
    statusBadge: 'FREE CBT MOCK & QUESTIONS',
    quickTable: {
      headers: ['Examination Component', 'Parameters'],
      rows: [
        ['Administering Body', 'CDCFIB / JAMB Technical Partnership'],
        ['Applicable Agencies', 'Nigeria Immigration (NIS), NSCDC, Fire Service (FFS), Corrections (NCoS)'],
        ['Total Questions', '50 Questions'],
        ['Time Allowed', '35 to 45 Minutes'],
        ['Subjects Tested', 'English Language (40%), General Mathematics (40%), Current Affairs (20%)'],
        ['Target Pass Mark', '60% and above (minimum 30/50 correct answers)']
      ]
    },
    keywords: [
      'cdcfib past questions and answers',
      'immigration cbt questions free',
      'nscdc past questions 2026',
      'cdcfib screening exam practice',
      'nigerian civil defence exam questions'
    ],
    content: [
      'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) evaluates candidates through a computer-based test (CBT) administered at JAMB centers nationwide.',
      'Sample Exam Questions with Explanations:',
      '1. Question: Under which Federal Ministry does the CDCFIB operate? Answer: Ministry of Interior. The board is an executive parastatal supervised by the Federal Ministry of Interior.',
      '2. Question: In what year was the NSCDC given statutory backing by an Act of the National Assembly? Answer: 2003 (Act No. 2 of 2003, amended in 2007).',
      '3. Question: What rank is held by the administrative head of the Nigeria Immigration Service? Answer: Comptroller General of Immigration (CGI).',
      '4. Verbal Reasoning: What is the antonym of METICULOUS? Answer: Careless or negligent.',
      '5. Numerical Reasoning: If 18% of 450 arriving passengers are foreign nationals requiring visas, how many are Nigerian citizens? Answer: 369 (82% of 450 = 369).',
      '4 Rules to Score High in the CDCFIB CBT Exam:',
      '• Answer Every Question: No negative marking is applied. Never leave any question blank.',
      '• Review Ministry of Interior Milestones: Study founding years, rank designations, and operational mandates of NIS, NSCDC, FFS, and NCoS.',
      '• Practice with a 30-Second Timer: Budget your time to answer factual English and Current Affairs questions quickly, saving time for calculations.',
      '• Use Our Interactive Mock Simulator: Take our timed 25-question CBT mock test to test your speed.'
    ],
    faqs: [
      {
        question: 'Where will the CDCFIB CBT examination take place?',
        answer: 'The exam takes place at accredited JAMB Computer-Based Test (CBT) centers in each candidate\'s selected state of screening.'
      },
      {
        question: 'What items can I take into the CDCFIB exam hall?',
        answer: 'You are allowed to bring your printed examination invitation slip, valid photo ID, and pencils. Calculators, phones, and smartwatches are prohibited.'
      },
      {
        question: 'Does CDCFIB use negative marking?',
        answer: 'No. CDCFIB exams do not deduct marks for wrong answers, so make sure to select an answer for every question.'
      }
    ]
  },
  {
    slug: 'nigerian-navy-past-questions-bmtc-exam',
    title: 'Nigerian Navy Past Questions: BMTC Aptitude Test Prep',
    seoTitle: 'Nigerian Navy Past Questions: BMTC Aptitude Test Prep',
    description: 'Nigerian Navy BMTC Batch aptitude test past questions and answers. Practice online questions covering Mathematics, English, General Knowledge, and Current Affairs.',
    category: 'Past Questions',
    date: '2026-09-11',
    branch: 'Navy',
    statusBadge: 'BMTC SYLLABUS & PAST QUESTIONS',
    keywords: [
      'nigerian navy past questions and answers',
      'navy aptitude test questions 2026',
      'joinnigeriannavy exam practice',
      'navy bmtc exam format',
      'free navy past questions pdf'
    ],
    content: [
      'The Nigerian Navy BMTC aptitude test tests candidates across three sections: Mathematics (30 questions), English (30 questions), and General Knowledge & Current Affairs (40 questions).',
      'Core Syllabus Coverage:',
      '• Mathematics: Basic algebra, ratios, percentages, simple interest, geometry, speed and distance.',
      '• English: Comprehension passages, synonyms, antonyms, sentence completion, prepositions, spelling correction.',
      '• General Knowledge: Nigerian military history, naval terminology (port, starboard, deck), Nigerian geopolitical zones, and international organizations (ECOWAS, AU, UN).'
    ],
    faqs: [
      {
        question: 'How many questions are in the Nigerian Navy aptitude test?',
        answer: 'The exam typically contains 100 multiple-choice questions to be completed within 60 to 75 minutes.'
      },
      {
        question: 'Are calculators permitted in the Navy aptitude test?',
        answer: 'No. Candidates are not allowed to use calculators or electronic devices during the screening test.'
      }
    ]
  },
  {
    slug: 'police-recruitment-cbt-past-questions',
    title: 'Police Recruitment CBT Past Questions & Mock Exam 2026',
    seoTitle: 'Police Recruitment CBT Past Questions & Mock Exam 2026',
    description: 'Prepare for the Nigeria Police Constable CBT exam conducted by JAMB. Free practice questions covering Verbal Reasoning, Numerical Aptitude, and Current Affairs.',
    category: 'Past Questions',
    date: '2026-09-11',
    branch: 'Police',
    statusBadge: 'NPF JAMB CBT PRACTICE',
    keywords: [
      'police recruitment past questions',
      'npf cbt exam questions 2026',
      'police constable mock exam jamb',
      'police aptitude test practice',
      'nigeria police test answers'
    ],
    content: [
      'The Police Service Commission evaluates constable applicants using a 50-question computer assessment administered by JAMB.',
      'Key Exam Sections:',
      '1. Use of English (20 questions): Sentence completion, vocabulary, and basic grammar.',
      '2. General Mathematics (20 questions): Elementary arithmetic, proportions, fractions, and word problems.',
      '3. General Knowledge & Police Mandate (10 questions): Police Act provisions, Nigerian constitution fundamentals, and geography.'
    ],
    faqs: [
      {
        question: 'Where can I take a free police CBT mock test?',
        answer: 'You can practice timed 25-question and 50-question mock tests directly in our Past Questions section for free.'
      },
      {
        question: 'What is the duration of the Police CBT examination?',
        answer: 'Candidates are given 45 minutes to complete 50 questions on the JAMB computer terminal.'
      }
    ]
  },

  // ==========================================
  // EXISTING FOUNDATIONAL GUIDES
  // ==========================================
  {
    slug: 'nigerian-army-recruit-salary',
    title: 'How much is the salary of a Nigerian Army recruit?',
    seoTitle: 'Nigerian Army Recruit Salary 2026/2027 [Monthly Pay Scale & Allowances Breakdown]',
    description: 'Learn the official monthly salary, allowances, and benefits of newly recruited soldiers (privates) in the Nigerian Army.',
    category: 'Salary',
    date: '2026-05-10',
    branch: 'Army',
    keywords: ['nigerian army salary', 'army recruit salary', 'salary of private in nigerian army', 'nigeria military pay scale'],
    content: [
      'For many young Nigerians wishing to join the military, understanding the remuneration and welfare packages is a common question. A newly recruited soldier (assigned the rank of Private) receives a base monthly salary ranging from ₦77,000 to ₦85,000.',
      'In addition to the base salary, soldiers deployed to active duty or combat zones (such as operations in the North East or Niger Delta) receive extra combat and hazard allowances. These allowances can increase the monthly take-home pay by ₦30,000 to ₦45,000.',
      'Other benefits provided to recruits include: Free medical care for the soldier and their immediate family members, subsidized accommodation inside barracks, and free uniforms and protective gear.',
      'As a soldier gets promoted in rank (e.g., to Lance Corporal, Corporal, Sergeant, or Warrant Officer), their monthly salary increases in accordance with the Consolidated Armed Forces Salary Structure (CONAFSS).'
    ]
  },
  {
    slug: 'nscdc-physical-screening-centers',
    title: 'Where is the NSCDC physical screening center in your state?',
    seoTitle: 'NSCDC Physical Screening Centers 2026/2027 [36 States Venues & Timetable PDF]',
    description: 'Find the official physical screening venues, screening dates, and document verification centers for all 36 states and the FCT.',
    category: 'Screening',
    date: '2026-05-12',
    branch: 'Civil Defence',
    keywords: ['nscdc screening center', 'nscdc physical screening venue', 'cdcfib screening locations', 'civil defence screening centres'],
    content: [
      'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) conducts the physical screening and document verification state-by-state. Venues are typically designated at the State Command Headquarters of the NSCDC, local police colleges, or public sports stadiums.',
      'Major screening centers across selected states include:',
      '• Abuja (FCT): NSCDC FCT Command Headquarters, Garki, Abuja.',
      '• Lagos State: NSCDC Lagos State Command, Alausa, Ikeja.',
      '• Kaduna State: NSCDC Kaduna Command, College Road, Kaduna.',
      '• Kano State: NSCDC Command Headquarters, Clifton Road, Kano.',
      '• Rivers State: NSCDC Rivers Command, Port Harcourt.',
      '• Enugu State: NSCDC Enugu Command Headquarters, Enugu.',
      'Ensure you arrive at your designated state screening center with: Original WAEC/NECO/Degree certificates, Local Government Identification letter, birth certificate or age declaration, printed CDCFIB application slip, and white shorts/t-shirt.'
    ]
  },
  {
    slug: 'navy-dssc-vs-bmtc',
    title: 'Nigerian Navy DSSC vs BMTC: What is the Difference?',
    seoTitle: 'Nigerian Navy DSSC vs BMTC 2026/2027 [Salary, Ranks & Entry Qualifications Compared]',
    description: 'Compare the Direct Short Service Commission (DSSC) and the Basic Military Training Course (BMTC) in the Nigerian Navy. Ranks, training, and qualifications.',
    category: 'Comparison',
    date: '2026-05-18',
    branch: 'Navy',
    keywords: ['navy dssc vs bmtc', 'difference between dssc and bmtc', 'navy officer cadet vs rating', 'nigerian navy ranks'],
    content: [
      'Many applicants are confused about whether to apply for DSSC or BMTC (Ratings) when the Nigerian Navy opens enlistment. The core differences lie in the academic requirements, ranks awarded, and training duration.',
      '1. Academic Qualification:',
      '• DSSC (Direct Short Service Commission) is strictly for university graduates (BSc/BEng) and HND holders who are professionals, such as doctors, lawyers, engineers, and teachers.',
      '• BMTC (Basic Military Training Course) is for SSCE (WAEC/NECO) holders, NCE holders, and OND holders.',
      '2. Ranks Awarded:',
      '• DSSC candidates are commissioned as officers, starting with the rank of Sub-Lieutenant (or Lieutenant for medical professionals).',
      '• BMTC candidates enter as Ratings (non-commissioned personnel), starting with the rank of Ordinary Seaman.',
      '3. Training Duration:',
      '• DSSC officer cadets undergo 6 to 9 months of training at the Nigerian Naval College, Onne.',
      '• BMTC ratings undergo 6 months of training at the Nigerian Navy Basic Training School (NNBTS), Onne.'
    ]
  },
  {
    slug: 'police-constable-subject-combinations',
    title: 'WAEC/NECO Subject Combinations for Nigerian Police Constable Enlistment',
    seoTitle: 'Police Constable WAEC/NECO Subject Combinations 2026/2027 [5 Compulsory Credits Checklist]',
    description: 'Find the required subject combination, mandatory credits, and O\'Level requirements to apply for the Nigeria Police Force.',
    category: 'Requirements',
    date: '2026-05-20',
    branch: 'Police',
    keywords: ['police constable waec requirements', 'police recruitment subject combination', 'neco credits for police recruitment', 'npf olevel combination'],
    content: [
      'To successfully apply for the Nigeria Police Force (NPF) Constable recruitment, you must meet the academic baselines set by the Police Service Commission (PSC).',
      'The core requirement is a minimum of 5 credits in WAEC, NECO, GCE, or NABTEB obtained in not more than two sittings.',
      'Mandatory Subjects (Must be passed with Credit):',
      '• English Language (mandatory credit).',
      '• Mathematics (mandatory credit).',
      'Other recommended subjects (minimum of 3 credits from): Biology, Chemistry, Physics, Agricultural Science, Government, History, Economics, Geography, Civic Education, or Literature-in-English.',
      'Note: If you are combining WAEC and NECO results, you must ensure that both results are registered under your official name and date of birth to avoid disqualification during credentials screening.'
    ]
  },
  {
    slug: 'correct-cdcfib-portal-errors',
    title: 'How to Correct Errors on Your CDCFIB Portal Profile',
    seoTitle: 'How to Correct CDCFIB Portal Errors 2026/2027 [Name, DOB & Document Edit Guide]',
    description: 'Made a mistake on your NSCDC, Immigration, or Fire Service application? Learn how to edit names, dates of birth, and credentials on CDCFIB.',
    category: 'Tutorial',
    date: '2026-05-22',
    branch: 'Civil Defence',
    keywords: ['correct cdcfib errors', 'edit cdcfib profile details', 'immigration portal edit date of birth', 'nscdc name correction'],
    content: [
      'Making a mistake on your CDCFIB portal application (such as misspelling your name, uploading the wrong document, or entering an incorrect date of birth) can lead to automatic disqualification during physical screening.',
      'Here is how you can request correction of profile errors:',
      '1. Edit Mode (Before Submission): If you have not submitted the application, go to your dashboard, click on "Edit Profile" or "Edit Application," correct the details, and save.',
      '2. After Submission (Support Tickets): If you have already submitted, you cannot edit fields directly. You must log in to recruitment.cdcfib.gov.ng, go to "Help & Support," click "Submit Ticket," choose "Profile Correction," explain the error, and attach proof (such as a WAEC certificate or birth declaration).',
      '3. Physical Screening (Declaration of Age/Affidavit): If the portal support team does not reply before your screening date, go to a High Court and obtain a name correction affidavit or age declaration. Present this legal document alongside your screening slip at the venue.'
    ]
  },
  // =========================================================================
  // HIGH-INTENT PSEO ENGINE: GOOGLE SEARCH INTENT & POSITION ZERO EXPANSIONS
  // =========================================================================
  {
    slug: 'can-i-apply-with-awaiting-result',
    title: 'Can You Apply for Military & Paramilitary Recruitment with Awaiting Result (AR) in 2026?',
    seoTitle: 'Can I Apply for Military Recruitment with Awaiting Result in 2026? [Verified Answer]',
    description: 'Find out if Nigerian Army, Navy, Air Force, Police, or CDCFIB accept awaiting results (AR) for 2026 recruitment. Official policy & how to upload late certificates.',
    category: 'Requirements',
    date: '2026-09-21',
    branch: 'General',
    keywords: [
      'can i apply with awaiting result for army',
      'does navy accept awaiting result',
      'police recruitment awaiting result waec neco',
      'cdcfib awaiting result policy',
      'recruitment with awaiting result 2026'
    ],
    statusBadge: 'OFFICIAL POLICY: NOT ACCEPTED AT SCREENING',
    scamNotice: 'BEWARE OF SYNDICATES: Fraudulent internet cybercafe agents often claim you can register with "Awaiting Result" and pay money to update later. Every military and paramilitary screening board requires original physical statement of results or certificates at the screening venue.',
    quickAnswer: {
      question: 'Does the Nigerian Military or Police Accept Awaiting Results in 2026?',
      directAnswer: 'No, the Nigerian Army (88 RRI), Nigerian Navy (Batch 39), Nigerian Air Force (BMTC), Nigeria Police Force (Constable), and CDCFIB do not accept Awaiting Results (AR) for final selection. While some online portals allow initial draft submission with pending exam numbers, you must present a verified physical certificate or certified statement of result showing compulsory credits at physical credentials screening.',
      statusText: 'Strictly Verified at Physical Screening',
      statusVariant: 'warning',
      metrics: [
        { label: 'Army 88 RRI Policy', value: 'Original Certificate Required', highlight: true },
        { label: 'Navy Batch 39 Policy', value: '5 Credits Passed Required' },
        { label: 'Police Constable', value: 'WAEC/NECO Complete Slip' },
        { label: 'Combine Sittings', value: 'Max 2 Sittings Permitted' }
      ]
    },
    quickTable: {
      headers: ['Agency', 'Online Portal Submission', 'Physical Screening Stage', 'Combination Allowed'],
      rows: [
        ['Nigerian Army (RRI)', 'Can type exam registration No.', 'Must present original WAEC/NECO slip', 'Yes (Max 2 sittings)'],
        ['Nigerian Navy (BMTC)', 'Full grades required to proceed', 'Original certificate verified', 'Yes (Max 2 sittings)'],
        ['Nigeria Police Force', 'Requires full 5 credits entered', 'Physical statement stamped by school', 'Yes (Max 2 sittings)'],
        ['CDCFIB (Immigration/NSCDC)', 'Locked without grade inputs', 'Original result printout + Scratch card', 'Yes (Max 2 sittings)']
      ]
    },
    howToSteps: [
      { name: 'Step 1: Check Online Release Date', text: 'Confirm with WAEC or NECO online portal if your e-result has been released before closing date.' },
      { name: 'Step 2: Print Online Result Slip', text: 'Obtain an authentic colored result slip with a valid verification PIN before attending screening.' },
      { name: 'Step 3: Combine Two Sittings If Needed', text: 'If you are awaiting a single deficient paper, you may combine an earlier passed WAEC or NECO sitting (max 2 sittings).' }
    ],
    faqs: [
      { question: 'What happens if my WAEC is released while recruitment is still ongoing?', answer: 'If the registration portal is still open, log in to your dashboard before the final midnight deadline, enter your grades, and upload the verified result slip.' },
      { question: 'Can I combine WAEC and NECO for military recruitment?', answer: 'Yes, almost all federal agencies allow combining WAEC and NECO, or WAEC and NABTEB, provided both results belong to the applicant under the exact same name and date of birth.' }
    ],
    content: [
      'One of the most frequently asked questions on Nigerian recruitment portals is whether candidates awaiting WAEC, NECO, or NABTEB results can apply.',
      '1. The General Military Baseline: The Nigerian Armed Forces and paramilitary agencies strictly enforce minimum entry qualifications. Even when an application portal permits profile registration, candidate verification officers will instantly disqualify any candidate who cannot present a printed statement of result during physical credential verification.',
      '2. Why Awaiting Result is Rejected: Screening boards operate on strict quotas and tight schedules. They do not hold slots for unreleased examinations because tens of thousands of applicants already possess confirmed O-Level credits in English and Mathematics.',
      '3. Strategic Recommendation: If your examination results are expected within the 4-to-6-week registration window, monitor the examination council portals daily and finalize your submission as soon as your grades are officially published.'
    ]
  },
  {
    slug: 'reprint-cdcfib-application-slip-guide',
    title: 'How to Reprint CDCFIB Application Slip, Guarantor Form & Screening Slip 2026',
    seoTitle: 'How to Reprint CDCFIB Slip 2026: Application Slip & Guarantor Form Download',
    description: 'Step-by-step tutorial to reprint your lost or misplaced CDCFIB (NSCDC, NIS, FFS, NCoS) registration slip, referee form, and physical screening pass.',
    category: 'Tutorial',
    date: '2026-09-21',
    branch: 'Civil Defence',
    keywords: [
      'how to reprint cdcfib application slip',
      'reprint cdcfib screening slip',
      'download nscdc guarantor form',
      'cdcfib referee form download pdf',
      'lost cdcfib application number'
    ],
    statusBadge: 'OFFICIAL REPRINT PORTAL: ACTIVE',
    officialPortalUrl: 'https://cdcfib.career',
    quickAnswer: {
      question: 'How Do I Reprint My CDCFIB Application Slip and Guarantor Form in 2026?',
      directAnswer: 'To reprint your CDCFIB slip, visit cdcfib.career, click on "Check Status" or "Reprint Slip", enter your Application Code or National Identification Number (NIN) alongside your registered phone number, and download your 2-page application summary sheet and official referee/guarantor endorsement forms in PDF.',
      statusText: 'Instant PDF Generation Available',
      statusVariant: 'success',
      metrics: [
        { label: 'Portal URL', value: 'cdcfib.career', highlight: true },
        { label: 'Required Login', value: 'Application Code or NIN' },
        { label: 'Documents', value: 'Slip + Referee Forms' },
        { label: 'Cost', value: '100% Free Reprint' }
      ]
    },
    howToSteps: [
      { name: '1. Navigate to Official CDCFIB Portal', text: 'Open a modern web browser on desktop or mobile and go to https://cdcfib.career.' },
      { name: '2. Select "Reprint Slip / Check Status"', text: 'Click the yellow or green reprint button located on the top navigation bar.' },
      { name: '3. Provide Registered Identification', text: 'Type your Application Code (e.g., CDCFIB-2026-XXXXX) or your 11-digit NIN.' },
      { name: '4. Download and Print PDF in Color', text: 'Generate your 2026 Bio-Data Summary Sheet and download the Referee/Guarantor attestation form.' }
    ],
    faqs: [
      { question: 'What should I do if I forgot my CDCFIB Application Code?', answer: 'Click on "Forgot Application Code" on cdcfib.career, enter the phone number and email used during registration, and an SMS/email recovery code will be dispatched immediately.' },
      { question: 'Must the guarantor form be signed by a High Court or Magistrate?', answer: 'Yes, the referee section must be endorsed by a recognized civil servant (not below GL 12), traditional ruler, magistrate, or military officer above Captain.' }
    ],
    content: [
      'Every applicant shortlisted for the Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) recruitment must bring a freshly printed application slip to the screening venue.',
      'Common Reasons Candidates Need to Reprint:',
      '• Lost or damaged hardcopy slips from initial submission.',
      '• Browser crash during initial registration before printing completed.',
      '• Requirement to generate the official referee guarantor forms for legal endorsement.',
      'Follow the verified steps above to safely generate your documents without paying cybercafes exorbitant charges.'
    ]
  },
  {
    slug: 'military-medical-screening-test-disqualifications',
    title: 'Military Medical Screening in Nigeria: Tests Conducted & Disqualification Conditions 2026',
    seoTitle: 'Military Medical Screening in Nigeria 2026: 12 Causes of Disqualification',
    description: 'Comprehensive medical test guide for Nigerian Army, Navy, Air Force & Police. Blood tests, chest X-rays, eye tests, surgical scars, knock-knees & flat feet.',
    category: 'Screening',
    date: '2026-09-21',
    branch: 'General',
    keywords: [
      'military medical test disqualifications nigeria',
      'army medical test causes of failure',
      'flat feet knock knees military screening',
      'navy medical test checklist',
      'blood test conducted in military recruitment'
    ],
    statusBadge: 'RIGOROUS MEDICAL BENCHMARKS ENFORCED',
    quickAnswer: {
      question: 'What Medical Tests Cause Disqualification in Nigerian Military Screening?',
      directAnswer: 'The top disqualifying medical conditions in Nigerian Armed Forces screening include: chronic hepatitis B/C and HIV, defective colour vision, flat feet (pes planus) and severe knock-knees/bow-legs, elevated blood pressure (hypertension), recent major surgical scars or open hernia, active tuberculosis on chest X-ray, and dental deformities.',
      statusText: 'Strict Armed Forces Health Standards',
      statusVariant: 'danger',
      metrics: [
        { label: 'Top Blood Failures', value: 'Hepatitis B & HIV', highlight: true },
        { label: 'Physical Failures', value: 'Knock-knees & Flat Feet' },
        { label: 'Chest X-Ray', value: 'Clear Lungs Required' },
        { label: 'Visual Acuity', value: '6/6 Normal Sight' }
      ]
    },
    quickTable: {
      headers: ['Screening Stage', 'Specific Test Conducted', 'Common Causes of Failure', 'Remediation Advice'],
      rows: [
        ['Haematology', 'Hepatitis B & C, HIV, Genotype, VDRL', 'Active viral infection, untreated STI', 'Get pre-tested at general hospital'],
        ['Radiology', 'Chest X-Ray (AP View)', 'Enlarged heart, lung scars, active TB', 'Complete medical clearance beforehand'],
        ['Orthopaedic', 'Gait, Knock-knees, Flat feet, Spinal alignment', 'Severe inward knee collision, rigid flat foot', 'Mild cases can exercise; severe cases fail'],
        ['Ophthalmology', 'Ishihara Color Blindness, Snellen chart', 'Colour blindness, refractive error > 6/6', 'No laser surgery concealment permitted']
      ]
    },
    faqs: [
      { question: 'Does Nigerian Army or Navy accept people with tattoos or tribal marks?', answer: 'No, having visible tattoos or deep cultural tribal marks on the face or exposed limbs is an automatic ground for disqualification across all Armed Forces branches.' },
      { question: 'Can someone with flat feet pass Nigerian military screening?', answer: 'Rigid flat feet fail military screening because prolonged load carriage causes severe ankle fatigue and joint degradation during tactical marches. Flexible arches with mild flattening may pass if mobility is normal.' }
    ],
    content: [
      'The medical screening phase is the single largest filtration point in Nigerian Armed Forces recruitment, eliminating up to 45% of candidates who pass written aptitude exams.',
      'Key Medical Tests Conducted:',
      '1. Vital Signs & Systemic Examination: Blood pressure, resting pulse, respiration, and height/weight Body Mass Index (BMI).',
      '2. Blood & Urine Panel: Complete blood count, Hepatitis B surface antigen, Hepatitis C antibodies, retroviral screening (HIV), urinalysis for sugar/protein, and pregnancy tests for female candidates.',
      '3. Chest X-Ray: Evaluates lung tissue health and cardiovascular outline.',
      '4. Physical Surgical Inspection: Screening for inguinal hernia, varicocele, hydrocele, hemorrhoids (piles), and abdominal surgical scars.',
      'Candidates are strongly advised to undergo comprehensive pre-recruitment health checks at an accredited general or teaching hospital before reporting to camp.'
    ]
  },
  {
    slug: 'police-constable-cbt-exam-date-screening-centers',
    title: 'Police Constable CBT Exam Date 2026: JAMB Test Centres & State Screening Schedule',
    seoTitle: 'Police Constable CBT Exam Date 2026: JAMB Centres & Screening Timetable',
    description: 'Check official 2026 Police Constable CBT exam date, JAMB testing centers in all 36 states, screening slip reprint guidelines, and pass mark breakdown.',
    category: 'Screening',
    date: '2026-09-21',
    branch: 'Police',
    keywords: [
      'police constable cbt exam date 2026',
      'police recruitment jamb cbt centres',
      'police screening slip reprint date',
      'npf constable test schedule',
      'police service commission cbt pass mark'
    ],
    statusBadge: 'EXAM SCHEDULING ACTIVE',
    officialPortalUrl: 'https://policerecruitment.gov.ng',
    quickAnswer: {
      question: 'When is the 2026 Police Constable CBT Examination?',
      directAnswer: 'The Police Service Commission (PSC) in conjunction with the Nigeria Police Force conducts the Constable Computer-Based Test (CBT) across accredited JAMB centres in all 36 states and the FCT. Candidates must score a minimum of 45-50% in English, Mathematics, and General Studies, and bring their printed screening pass with NIN slip.',
      statusText: 'Nationwide JAMB Centers Active',
      statusVariant: 'info',
      metrics: [
        { label: 'Examination Body', value: 'JAMB CBT Centers', highlight: true },
        { label: 'Pass Mark', value: '45% - 50% Benchmark' },
        { label: 'Venues', value: '36 States + FCT' },
        { label: 'Mandatory ID', value: 'NIN Slip + Screening Pass' }
      ]
    },
    howToSteps: [
      { name: 'Step 1: Check Your Email & SMS', text: 'The PSC dispatches batch-specific CBT invitation dates and centre locations via SMS and registered emails.' },
      { name: 'Step 2: Log In to policerecruitment.gov.ng', text: 'Enter your National Identity Number (NIN) to reprint your CBT Examination Slip containing your seat number.' },
      { name: 'Step 3: Prepare Required Documents', text: 'Bring two copies of your CBT slip, original NIN slip, and two recent passport photographs with white background.' }
    ],
    faqs: [
      { question: 'What subjects are set in the Police Constable CBT exam?', answer: 'The exam contains 100 questions covering English Language (30%), Mathematics/Logic (30%), General Paper & Current Affairs (20%), and Basic Police Duties (20%).' },
      { question: 'Will electronic calculators or phones be permitted at the centre?', answer: 'No, all mobile phones, smartwatches, calculators, and metal items are strictly prohibited inside the JAMB CBT halls.' }
    ],
    content: [
      'Following successful physical credential verification across state police command headquarters, qualified applicants proceed to the Computer-Based Test (CBT).',
      'The testing process is supervised by the Police Service Commission and technical staff from the Joint Admissions and Matriculation Board (JAMB).',
      'Success Tips for Police CBT Candidates:',
      '• Speed and accuracy: Allocate approximately 35 seconds per multiple-choice question.',
      '• Familiarize yourself with basic Nigerian Constitution facts, PSC leadership, and current Inspector General of Police (IGP) initiatives.',
      '• Arrive at your designated JAMB centre at least 90 minutes before your scheduled batch time for biometric accreditation.'
    ]
  },
  {
    slug: 'nigerian-air-force-bmtc-recruitment-guide',
    title: 'Nigerian Air Force (NAF) BMTC Recruitment 2026: Portal, Form, Salary & Qualifications',
    seoTitle: 'Nigerian Air Force BMTC Recruitment 2026: Form, Salary Scale & Portal Guide',
    description: 'Comprehensive guide to Nigerian Air Force Basic Military Training Course (BMTC) 2026. Portal nafrecruitment.airforce.mil.ng, CONAFSS pay, age limit & aptitude test.',
    category: 'How-to-Apply',
    date: '2026-09-21',
    branch: 'Air Force',
    keywords: [
      'nigerian air force recruitment 2026',
      'naf bmtc form closing date',
      'air force recruit salary nigeria',
      'naf recruitment portal nafrecruitment airforce mil ng',
      'air force tradesmen requirements'
    ],
    statusBadge: 'NAF ANNUAL INTAKE REVIEW',
    officialPortalUrl: 'https://nafrecruitment.airforce.mil.ng',
    quickAnswer: {
      question: 'How Can I Apply for Nigerian Air Force BMTC Recruitment in 2026?',
      directAnswer: 'Apply online for the NAF Basic Military Training Course (BMTC) at nafrecruitment.airforce.mil.ng. Enlistment is 100% free. Applicants require a minimum of 5 credits in SSCE (including English and Maths), must be 18–22 years old (tradesmen up to 28), and meet minimum height criteria of 1.66m for males and 1.63m for females.',
      statusText: 'Free Official Portal • Kaduna Training',
      statusVariant: 'success',
      metrics: [
        { label: 'Starting Pay (Aircraftman)', value: '₦105,000 - ₦125,000 / mo', highlight: true },
        { label: 'Age Range', value: '18 - 22 Years (Non-Trades)' },
        { label: 'Training Center', value: 'MTC NAF Base Kaduna' },
        { label: 'Portal', value: 'nafrecruitment.airforce.mil.ng' }
      ]
    },
    quickTable: {
      headers: ['Cadre', 'Academic Minimum', 'Age Limits', 'Initial Rank Awarded'],
      rows: [
        ['Non-Tradesmen/Women', '5 O-Level Credits (WAEC/NECO)', '18 - 22 Years', 'Aircraftman / Aircraftwoman'],
        ['Tradesmen (ND/Trade Test)', 'OND, NCE, City & Guilds', '18 - 25 Years', 'Lance Corporal (Technical)'],
        ['Medical Cadre', 'Registered Nurse / Lab Tech', '18 - 28 Years', 'Corporal (Specialist Entry)'],
        ['DSSC Officers', 'B.Sc / HND (Minimum 2:2 / Upper)', '20 - 30 Years', 'Flying Officer']
      ]
    },
    faqs: [
      { question: 'Where is the basic military training for Air Force recruits conducted?', answer: 'Recruits undergo 6 months of basic military instruction at the Military Training Centre (MTC), NAF Base Kaduna.' },
      { question: 'What is the salary of an entry-level Air Force soldier in 2026?', answer: 'An Aircraftman (ACM) earns between ₦105,000 and ₦125,000 basic monthly pay under the reviewed 2026 CONAFSS scale, plus flight line risk allowances where deployed.' }
    ],
    content: [
      'The Nigerian Air Force (NAF) operates modern aerospace platforms protecting national sovereignty and conducting tactical counter-terrorism operations across the country.',
      'Enlistment Tracks:',
      '1. Non-Tradesmen/Women: Direct secondary school leavers with WAEC/NECO/NABTEB.',
      '2. Tradesmen/Women: Technicians holding Trade Test Grade 1, National Diploma (ND), or technical craft certificates.',
      '3. Commissioned Officers: Graduates commissioned through the Nigerian Defence Academy (NDA) or Direct Short Service Commission (DSSC).',
      'Candidates must ensure all applications are submitted through nafrecruitment.airforce.mil.ng before the published midnight deadline.'
    ]
  },
  {
    slug: 'top-10-high-paying-federal-agencies-nigeria',
    title: 'Top 10 Highest-Paying Federal Government Agencies in Nigeria (2026 Verified Salaries)',
    seoTitle: 'Top 10 Highest-Paying Federal Agencies in Nigeria 2026 [Verified Salary Rankings]',
    description: 'Explore the top 10 highest-paying Nigerian government agencies in 2026: NNPC, CBN, NIMASA, NCC, Customs, FIRS, NDLEA, and Military CONAFSS structures.',
    category: 'Salary',
    date: '2026-09-21',
    branch: 'General',
    keywords: [
      'highest paying government agencies in nigeria 2026',
      'nnpc starting salary graduate trainee',
      'cbn entry level salary',
      'nimasa customs salary structure',
      'best federal parastatals to work in nigeria'
    ],
    statusBadge: '2026 WAGE BENCHMARK DATA',
    quickAnswer: {
      question: 'What are the Highest Paying Federal Government Agencies in Nigeria in 2026?',
      directAnswer: 'The top highest-paying federal agencies in Nigeria include the Nigerian National Petroleum Company Limited (NNPC Ltd - ₦450k-₦650k entry), Central Bank of Nigeria (CBN - ₦380k-₦520k), Nigerian Communications Commission (NCC - ₦320k-₦460k), NIMASA (₦300k-₦420k), Nigeria Customs Service (₦275k-₦315k for ASC II), and the Nigerian Armed Forces (CONAFSS ₦240k-₦340k for commissioned officers).',
      statusText: 'Comprehensive Comparative Rankings',
      statusVariant: 'success',
      metrics: [
        { label: '#1 Top Payer', value: 'NNPC Ltd (₦450k - ₦650k)', highlight: true },
        { label: '#2 Top Payer', value: 'Central Bank of Nigeria' },
        { label: '#3 Top Payer', value: 'NIMASA / NCC' },
        { label: 'Highest Paramilitary', value: 'Nigeria Customs Service' }
      ]
    },
    quickTable: {
      headers: ['Rank', 'Agency / Parastatal', 'Entry Graduate Level (Monthly)', 'Key Statutory Allowances'],
      rows: [
        ['1', 'NNPC Limited', '₦450,000 - ₦650,000', 'Upstream production bonus, hazard, offshore perks'],
        ['2', 'Central Bank of Nigeria (CBN)', '₦380,000 - ₦520,000', 'Financial sector risk, housing subsidy, 13th month'],
        ['3', 'Nigerian Communications Commission (NCC)', '₦320,000 - ₦460,000', 'Telecom regulatory bonus, utility, health cover'],
        ['4', 'NIMASA', '₦300,000 - ₦420,000', 'Maritime cabotage bonus, sea hazard allowance'],
        ['5', 'Nigeria Customs Service (NCS)', '₦275,000 - ₦315,000', 'Anti-smuggling hazard, revenue sharing welfare'],
        ['6', 'Armed Forces (Army/Navy/NAF Officers)', '₦240,000 - ₦340,000', 'Field combat allowance, free housing, rations'],
        ['7', 'Economic & Financial Crimes Commission (EFCC)', '₦180,000 - ₦240,000', 'Investigative risk allowance, judicial bonus'],
        ['8', 'Nigeria Immigration Service (NIS)', '₦185,000 - ₦235,000', 'Border patrol, passport revenue incentive'],
        ['9', 'NSCDC (Civil Defence)', '₦185,000 - ₦240,000', 'Critical national asset protection allowance'],
        ['10', 'Federal Road Safety Corps (FRSC)', '₦160,000 - ₦210,000', 'Highway patrol risk, uniform allowance']
      ]
    },
    faqs: [
      { question: 'Why does NNPC pay more than other federal agencies?', answer: 'NNPC was fully commercialized under the Petroleum Industry Act (PIA) and operates competitive corporate salary structures pegged to global oil and gas industry benchmarks.' },
      { question: 'Are military officer salaries tax-free in Nigeria?', answer: 'Under the Nigerian personal income tax regulations, certain military operational combat allowances and wartime hazard benefits are exempt from standard income tax deductions.' }
    ],
    content: [
      'Securing employment within the Nigerian public service is highly competitive, and compensation packages vary significantly between self-funded parastatals, revenue-generating ministries, and consolidated military services.',
      'Factors Influencing Public Sector Earnings:',
      '1. Revenue Retention: Parastatals generating foreign exchange or regulatory fees (e.g., NNPC, NIMASA, NCC) offer higher welfare stipends than consolidated ministries.',
      '2. Hazardous Operations: Frontline military services (Army, Navy, NAF) and tactical paramilitary units receive substantial monthly operational field allowances on top of base pay.',
      '3. Pension and Gratuity: Federal public sector positions offer strong job security with contributory pension arrangements managed under PENCOM guidelines.'
    ]
  },
  {
    slug: 'efcc-recruitment-cadres-and-qualifications',
    title: 'EFCC Recruitment 2026: Detective Superintendent, Inspector & Assistant Cadres',
    seoTitle: 'EFCC Recruitment 2026: Application Portal, Ranks, Cadres & Salary Scale',
    description: 'Everything you need to know about EFCC recruitment: Detective Superintendent, Inspector, and Assistant cadres. Qualifications, physical screening & academy training.',
    category: 'Requirements',
    date: '2026-09-21',
    branch: 'EFCC',
    keywords: [
      'efcc recruitment 2026 form',
      'efcc detective superintendent requirements',
      'efcc salary structure 2026',
      'efcc academy karu training duration',
      'efcc detective assistant ssce qualifications'
    ],
    statusBadge: 'PERIODIC INTAKES ANNOUNCED',
    officialPortalUrl: 'https://efcc.gov.ng',
    quickAnswer: {
      question: 'What are the Cadres and Qualifications for EFCC Recruitment?',
      directAnswer: 'The Economic and Financial Crimes Commission (EFCC) recruits across three cadres: Detective Assistant (DA - SSCE with 5 credits including English & Maths), Detective Inspector (DI - NCE/ND/HND holders), and Detective Superintendent (DS - B.Sc degree holders under 27 years). Candidates undergo intensive 9-to-12 months paramilitary training at the EFCC Academy in Karu, Abuja.',
      statusText: 'Rigorous Financial Intelligence Training',
      statusVariant: 'info',
      metrics: [
        { label: 'Detective Assistant', value: 'SSCE (5 Credits)' },
        { label: 'Detective Inspector', value: 'ND / NCE Holders' },
        { label: 'Detective Superintendent', value: 'B.Sc / HND (Degree)' },
        { label: 'Academy Duration', value: '9 - 12 Months (Karu)' }
      ]
    },
    quickTable: {
      headers: ['Cadre', 'Educational Baseline', 'Age Ceiling', 'Academy Rank Upon Pass Out'],
      rows: [
        ['Detective Assistant (DA)', 'SSCE / NECO with 5 credits in max 2 sittings', '21 Years Maximum', 'Detective Assistant GL 04/05'],
        ['Detective Inspector (DI)', 'ND / NCE with Upper Credit / Merit', '24 Years Maximum', 'Detective Inspector GL 07'],
        ['Detective Superintendent (DS)', 'B.Sc / B.A (Minimum 2:2) + NYSC', '27 Years Maximum', 'Detective Superintendent GL 08']
      ]
    },
    faqs: [
      { question: 'Where is EFCC training conducted?', answer: 'Training is conducted at the EFCC Academy in Karu, Federal Capital Territory, Abuja.' },
      { question: 'Do EFCC operatives undergo military training?', answer: 'Yes, EFCC cadets undergo extensive physical drill, tactical weapons handling, VIP protection, forensic accounting, and cybercrime investigation drills.' }
    ],
    content: [
      'The Economic and Financial Crimes Commission (EFCC) is Nigeria\'s premier anti-graft law enforcement agency, dedicated to investigating and prosecuting financial crimes, advanced fee fraud (419), and cybercrime.',
      'Rigorous Recruitment Filtration:',
      '• Polygraph and Drug Testing: Candidates are subjected to comprehensive integrity polygraph tests and multi-panel substance abuse screenings.',
      '• Security Vetting: Deep background checks are conducted by the Department of State Services (DSS) on candidate families and academic histories.',
      '• Age Limits: The Commission strictly enforces age ceilings (21 for DA, 24 for DI, 27 for DS) without exception.'
    ]
  },
  {
    slug: 'common-reasons-disqualification-military-physical-screening',
    title: 'Top 10 Reasons for Disqualification at Military Physical Screening in Nigeria 2026',
    seoTitle: 'Why Candidates Fail Military Screening in Nigeria: 10 Disqualification Reasons',
    description: 'Avoid automatic disqualification in Nigerian Army, Navy, Police & Civil Defence screening: Age falsification, height deficits, credential mismatches & fitness failures.',
    category: 'Screening',
    date: '2026-09-21',
    branch: 'General',
    keywords: [
      'causes of disqualification military screening nigeria',
      'army screening height test failure',
      'credential mismatch screening disqualification',
      'reasons people fail police screening',
      'physical fitness test disqualifications'
    ],
    statusBadge: 'SCREENING COMPLIANCE MANUAL',
    quickAnswer: {
      question: 'What Causes Automatic Disqualification at Nigerian Military Screening?',
      directAnswer: 'The primary reasons for disqualification at Nigerian military screening include: failing minimum height requirements (under 1.68m for males, 1.65m for females), age discrepancies between NIN slip and birth certificates, lack of original educational certificates, visible tattoos or tribal marks, failure of physical fitness runs (3.2km push), and medical disqualifications (hepatitis, hernia, flat feet).',
      statusText: 'Strict Zero-Tolerance Policy',
      statusVariant: 'danger',
      metrics: [
        { label: '#1 Failure Cause', value: 'Height & Chest Measurements', highlight: true },
        { label: '#2 Failure Cause', value: 'NIN / Certificate Name Mismatch' },
        { label: '#3 Failure Cause', value: 'Endurance Run Exhaustion' },
        { label: '#4 Failure Cause', value: 'Tattoos & Body Deformities' }
      ]
    },
    howToSteps: [
      { name: '1. Verify Height with a Certified Stadiometer', text: 'Ensure your bare-foot height exceeds 1.68m (male) or 1.65m (female) before travelling to screening camp.' },
      { name: '2. Synchronize Your NIN and WAEC Data', text: 'Confirm that your name spelling, date of birth, and LGA on your NIN slip match your educational certificates 100%.' },
      { name: '3. Build Cardiovascular Stamina', text: 'Practice 3.2km endurance runs, 35 push-ups in 2 minutes, and core sit-ups at least 4 weeks prior to screening.' }
    ],
    faqs: [
      { question: 'Can I present an affidavit for date of birth if my WAEC is different from NIN?', answer: 'While legal affidavits are accepted for minor typographical corrections, wide age disparities (e.g. 3+ years difference) lead to instant disqualification by military intelligence vetting teams.' },
      { question: 'What attire should I wear to physical screening?', answer: 'Standard protocol requires plain white canvas shoes, white socks, white shorts, and a plain white round-neck T-shirt, alongside your plastic document folder.' }
    ],
    content: [
      'Every recruitment intake sees thousands of eager Nigerian youths disqualified within the first 48 hours of reporting to zonal screening camps.',
      'The 10 Most Common Disqualifying Factors:',
      '1. Height Measurement Deficits: The stadiometer does not lie; slouching or standing on toes is instantly caught by instructors.',
      '2. Name and Birthday Mismatches: Discrepancies between WAEC records, local government origin certificates, and National Identification Numbers (NIN).',
      '3. Missing Original Certificates: Presenting uncertified photocopies or phone screenshots instead of physical documents.',
      '4. Physical Markings: Tattoos, ritual keloids, or excessive facial scars.',
      '5. Medical Failures: Undetected Hepatitis B, high blood pressure, or past limb fractures.',
      '6. Poor Physical Conditioning: Inability to complete the mandatory 3.2km timed run within the cutoff time.',
      '7. Knock-Knees and Severe Flat Feet: Impairing march posture and rapid tactical movement.',
      '8. Age Exceedance: Being older than 22 (for military non-tradesmen) or 28 (for officer cadets).',
      '9. Criminal Records or Court Convictions.',
      '10. Forged Documents or Impersonation.'
    ]
  }
];

export const getGuides = async (): Promise<GuideArticle[]> => {
  return new Promise((resolve) => {
    resolve(GUIDES);
  });
};

export const getGuideBySlug = async (slug: string): Promise<GuideArticle | null> => {
  return new Promise((resolve) => {
    const article = GUIDES.find(g => g.slug === slug) || null;
    resolve(article);
  });
};
