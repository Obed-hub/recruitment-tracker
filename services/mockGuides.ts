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
      'The Nigerian Army Regular Recruit Intake (RRI) and Direct Short Service Commission (DSSC) registration portal is officially hosted on recruitment.army.mil.ng.',
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
    officialPortalUrl: 'https://joinnigeriannavy.com',
    keywords: [
      'how to apply for nigerian navy batch 39',
      'joinnigeriannavy portal registration',
      'navy batch 39 application steps',
      'nigerian navy document size',
      'navy form submission guide'
    ],
    howToSteps: [
      { name: 'Access Official Navy Portal', text: 'Navigate to https://joinnigeriannavy.com using a secure web browser.' },
      { name: 'Register Candidate Account', text: 'Click on Apply Now, enter your functional email and create a password.' },
      { name: 'Validate NIMC NIN Record', text: 'Enter your 11-digit NIN to synchronize your bio-data automatically with the NIMC database.' },
      { name: 'Select Rating Cadre', text: 'Choose Category A (General Duties) or Category B (Technical & Tradesmen).' },
      { name: 'Upload Credentials & Passport', text: 'Upload O-Level results and a crisp passport photo compressed to under 100KB.' },
      { name: 'Review, Submit & Print PDF Slips', text: 'Submit the application and print the Applicant Summary and Guarantor Forms.' }
    ],
    content: [
      'Applying for the Nigerian Navy Basic Military Training Course (BMTC) requires preparation. Minor mistakes—such as entering a birth date that does not match your National Identification Number (NIN) record or uploading blurry credential scans—can lead to disqualification before physical screening begins.',
      'Documents and Details Required Before You Start:',
      '• National Identification Number (NIN): Issued by NIMC (must contain 11 digits).',
      '• O-Level Result: WAEC, NECO, GCE, or NABTEB with minimum 5 credits in not more than 2 sittings.',
      '• Birth Certificate or Age Declaration: Sworn at an authorized high court.',
      '• Certificate of State of Origin: Endorsed by your Local Government Chairman/Secretary.',
      '• Digital Passport Photograph: Plain white background, clear face, size between 20KB and 100KB (JPEG format).',
      '• Valid Email Address & Phone Number: Kept accessible throughout the exercise for test SMS updates.',
      '6 Steps to Complete Your Nigerian Navy Batch Application:',
      '1. Step 1: Open the Official Navy Portal at joinnigeriannavy.com.',
      '2. Step 2: Register a New Candidate Profile with your active email.',
      '3. Step 3: Authenticate Your NIN Record and confirm name spellings.',
      '4. Step 4: Choose Your Enlistment Category (Category A for secondary school leavers, Category B for tradesmen/technicians).',
      '5. Step 5: Upload Credentials & Passport. Ensure your image is clear and under 100KB in standard JPG/PNG format.',
      '6. Step 6: Review, Submit, and Print Slips (Summary Slip, Guarantor Endorsement, and Parent Consent Form).'
    ],
    faqs: [
      {
        question: 'Can I apply for Nigerian Navy Batch 39 with awaiting results?',
        answer: 'No. The Nigerian Navy does not accept awaiting results. All candidates must possess complete original certificates or computer printouts with verifiable grades.'
      },
      {
        question: 'Can I combine WAEC and NECO results for Nigerian Navy recruitment?',
        answer: 'Yes. Candidates can combine two sittings from WAEC, NECO, or NABTEB to complete their required 5 credits, provided English Language and Mathematics are included.'
      },
      {
        question: 'Who can sign as my guarantor for the Navy enlistment?',
        answer: 'Authorized guarantors include Traditional Rulers, Civil Servants not below Grade Level 12, Police Officers not below CSP, or Military Officers from Major/Lt Commander and above.'
      }
    ]
  },
  {
    slug: 'how-to-apply-cdcfib-portal',
    title: 'How to Apply on CDCFIB Portal: NIS, NSCDC & Fire Service Guide',
    seoTitle: 'How to Apply on CDCFIB Portal (NIS, NSCDC & Fire)',
    description: 'Step-by-step CDCFIB recruitment guide. How to register, correct NIN mismatch errors, upload passports, and download guarantor slips without errors.',
    category: 'How-to-Apply',
    date: '2026-09-11',
    branch: 'Civil Defence',
    statusBadge: 'PORTAL STEP-BY-STEP TUTORIAL',
    officialPortalUrl: 'https://cdcfib.career',
    keywords: [
      'how to apply on cdcfib portal',
      'cdcfib career application guide',
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
      'The CDCFIB portal at cdcfib.career handles applications for the Civil Defence, Immigration, Correctional, and Fire services.',
      'Key Application Stages:',
      '1. Agency Selection: Choose between Immigration (NIS), Civil Defence (NSCDC), Federal Fire Service (FFS), or Correctional Service (NCoS).',
      '2. Cadre Determination: Superintendent (BSc/HND, Level 08), Inspectorate (ND/NCE, Level 07/06), or Assistant (SSCE/GCE, Level 03/04).',
      '3. Instant NIN Validation: The portal checks your name and birth date against NIMC records in real time.',
      '4. File Compression: Passports must be in JPEG format under 100KB. Use our free photo compressor tool to avoid upload errors.'
    ],
    faqs: [
      {
        question: 'What is the maximum passport size for CDCFIB application?',
        answer: 'Your passport photo must not exceed 100KB and must be in JPG/JPEG format with a plain background.'
      },
      {
        question: 'How do I resolve NIN mismatch on the CDCFIB portal?',
        answer: 'If your NIN date of birth differs from your educational certificates, you must update your records at an authorized NIMC center before completing the form.'
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
    description: 'Comprehensive guide to Nigerian Air Force Basic Military Training Course (BMTC) 2026. Portalnafrecruitment.airforce.mil.ng, CONAFSS pay, age limit & aptitude test.',
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
