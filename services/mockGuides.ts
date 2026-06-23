export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: 'Salary' | 'Screening' | 'Tutorial' | 'Comparison' | 'Requirements';
  date: string;
  branch: string; // Associated branch name for contextual lookup
  keywords: string[];
  content: string[]; // Content blocks (paragraphs/bullets)
}

export const GUIDES: GuideArticle[] = [
  {
    slug: 'nigerian-army-recruit-salary',
    title: 'How much is the salary of a Nigerian Army recruit?',
    description: 'Learn the official monthly salary, allowances, and benefits of newly recruited soldiers (privates) in the Nigerian Army.',
    category: 'Salary',
    date: '2026-05-10',
    branch: 'Army',
    keywords: ['nigerian army salary', 'army recruit salary', 'salary of private in nigerian army', 'nigeria military pay scale'],
    content: [
      'For many young Nigerians wishing to join the military, understanding the remuneration and welfare packages is a common question. A newly recruited soldier (assigned the rank of Private) receives a base monthly salary ranging from ₦50,000 to ₦60,000.',
      'In addition to the base salary, soldiers deployed to active duty or combat zones (such as operations in the North East or Niger Delta) receive extra combat and hazard allowances. These allowances can increase the monthly take-home pay by ₦20,000 to ₦30,000.',
      'Other benefits provided to recruits include: Free medical care for the soldier and their immediate family members, subsidized accommodation inside barracks, and free uniforms and protective gear.',
      'As a soldier gets promoted in rank (e.g., to Lance Corporal, Corporal, Sergeant, or Warrant Officer), their monthly salary increases in accordance with the Consolidated Armed Forces Salary Structure (CONAFSS).'
    ]
  },
  {
    slug: 'nscdc-physical-screening-centers',
    title: 'Where is the NSCDC physical screening center in your state?',
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
    slug: 'print-army-screening-slip',
    title: 'How to print your screening slip on tracking.armynotification.com.ng',
    description: 'Step-by-step tutorial to log in to tracking.armynotification.com.ng, check your enlistment status, and print your physical screening card.',
    category: 'Tutorial',
    date: '2026-05-15',
    branch: 'Army',
    keywords: ['tracking armynotification com ng', 'print army screening slip', 'army shortlist slip download', 'check army notification status'],
    content: [
      'If your name is shortlisted for the Nigerian Army screening exercise, you must log in to the official notification portal to download and print your screening slip. The official subdomain for this is tracking.armynotification.com.ng.',
      'Follow these steps to print your slip safely:',
      '1. Open your web browser and visit: tracking.armynotification.com.ng.',
      '2. Enter your registered Application Number (e.g., 85RRI/LGA/XXXX) or your registered Email and Password.',
      '3. Click the "Check Status" or "Log In" button.',
      '4. Once logged in, click on "Print Screening Slip" or "Download Exam Slip". Save the PDF file to your phone or computer.',
      '5. Print the slip in full color. Make sure the barcode and your details are printed clearly.',
      'Do not give your login credentials, passwords, or NIN to any unofficial third-party websites claiming to print slips for a fee. The process is entirely free.'
    ]
  },
  {
    slug: 'navy-dssc-vs-bmtc',
    title: 'Nigerian Navy DSSC vs BMTC: What is the Difference?',
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
