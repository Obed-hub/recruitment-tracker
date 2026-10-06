export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: 'Salary' | 'Screening' | 'Tutorial' | 'Comparison' | 'Requirements';
  date: string;
  branch: string; // Associated branch name for contextual lookup
  keywords: string[];
  content: string[]; // Content blocks (supports ## headings, • bullet points, and numbered lists)
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const GUIDES: GuideArticle[] = [
  {
    slug: 'nigerian-army-recruit-salary',
    title: 'Nigerian Army Recruit Salary 2026: Official Monthly Pay & Allowances (CONAFSS)',
    description: 'Discover the official monthly salary scale, combat hazard allowances, medical benefits, and promotion structure for soldiers (privates to warrant officers) in the Nigerian Army.',
    category: 'Salary',
    date: '2026-05-10',
    branch: 'Army',
    keywords: ['nigerian army salary', 'army recruit salary', 'salary of private in nigerian army', 'nigeria military pay scale', 'conafss salary scale 2026', 'nigerian army rank and salary'],
    content: [
      'Understanding the remuneration, welfare benefits, and operational allowances of the Nigerian Army is crucial for prospective recruits and their families. Enlisted personnel in the Armed Forces are remunerated under the Consolidated Armed Forces Salary Structure (CONAFSS), periodically adjusted with federal consolidated wage awards.',
      '## Monthly Base Salary Structure for Non-Commissioned Soldiers',
      'Upon successful completion of the 6-month intensive Basic Military Training at the Depot Nigerian Army in Zaria, a recruit is formally attested and passed out with the rank of Private. Below is the official monthly take-home salary progression:',
      '• Private (Recruit Pass-out): ₦65,000 – ₦78,000 per month (Basic pay + statutory service allowances).',
      '• Lance Corporal: ₦82,000 – ₦90,000 per month (Awarded after initial substantive service years).',
      '• Corporal: ₦92,000 – ₦105,000 per month (Non-commissioned junior squad leader).',
      '• Sergeant: ₦115,000 – ₦130,000 per month (Platoon guide and senior tactical non-commissioned officer).',
      '• Staff Sergeant: ₦138,000 – ₦155,000 per month.',
      '• Warrant Officer (WO II): ₦165,000 – ₦190,000 per month.',
      '• Master Warrant Officer (WO I): ₦210,000 – ₦250,000 per month (Highest non-commissioned soldier rank).',
      '## Operational & Combat Hazard Allowances',
      'The base salary is significantly augmented when soldiers are deployed to theater commands and joint military operations across the country:',
      '• Operation Hadin Kai (North East / Counter-Terrorism): Additional ₦30,000 – ₦45,000 monthly operational field allowance.',
      '• Joint Task Force (JTF) Delta Safe (Niger Delta / Maritime Security): Additional ₦35,000 – ₦50,000 monthly offshore/wet-terrain duty allowance.',
      '• Internal Security & Special Operations (North West / Middle Belt): Additional ₦25,000 – ₦35,000 monthly field stipend.',
      '## Comprehensive Welfare & Non-Monetary Benefits',
      'In addition to cash salaries, serving personnel enjoy comprehensive statutory benefits:',
      '1. Subsidized Barracks Accommodation: Free housing within designated military cantonments or rent subsidy allowances.',
      '2. Complete Healthcare Coverage: Free medical care for the soldier, their spouse, and registered biological children at Military Base Hospitals (44 NARH Kaduna, 68 NARH Yaba, Military Hospital Port Harcourt).',
      '3. Uniform & Protective Equipment Allowance: Standard issue combat fatigue uniforms, boots, tactical ballistic helmets, and body armor supplied at zero personal expense.',
      '4. Military Pension & Gratuity Scheme: Guaranteed military pension benefits managed by the Military Pensions Board (MPB) upon completing 35 years of pensionable service or attaining 60 years of age.'
    ],
    faqs: [
      {
        question: 'How much is a Nigerian Army recruit paid during training at Depot Zaria?',
        answer: 'During the 6-month training at Depot Nigerian Army Zaria, recruits receive a monthly training allowance of approximately ₦25,000 to ₦35,000 to cover personal toiletries and upkeep. Full substantive salary commences immediately upon passing out.'
      },
      {
        question: 'What is the salary of a commissioned Officer (DSSC / Regular Combatant)?',
        answer: 'Commissioned officers enter with the rank of Second Lieutenant, earning approximately ₦220,000 to ₦260,000 per month, advancing to Lieutenant (₦260,000 - ₦310,000) and Captain (₦350,000 - ₦420,000).'
      }
    ]
  },
  {
    slug: 'nscdc-physical-screening-centers',
    title: 'NSCDC Physical Screening Centers 2026: State Venues & Document Checklist',
    description: 'Find official NSCDC physical screening centers, state command venues, screening requirements, and document verification rules for all 36 states and the FCT.',
    category: 'Screening',
    date: '2026-05-12',
    branch: 'Civil Defence',
    keywords: ['nscdc screening center', 'nscdc physical screening venue', 'cdcfib screening locations', 'civil defence screening centres', 'nscdc document checklist 2026'],
    content: [
      'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) conducts physical credentials screening and fitness verification in designated venues across all 36 states and the Federal Capital Territory (FCT). Candidates who received shortlisted SMS or email alerts must present themselves at their state command venue.',
      '## Major NSCDC Screening Command Centers Nationwide',
      '• Abuja (FCT): NSCDC FCT Command Headquarters, No. 5 Peace Drive, Wuye District / Garki, Abuja.',
      '• Lagos State: NSCDC Lagos State Command Headquarters, Secretariat Complex, Alausa, Ikeja, Lagos.',
      '• Oyo State: NSCDC State Command, Railway Quarters, Agodi, Ibadan, Oyo State.',
      '• Rivers State: NSCDC Rivers Command, Olu Obasanjo Way, Port Harcourt, Rivers State.',
      '• Kaduna State: NSCDC Kaduna Command Headquarters, College Road, Kurmin Mashi, Kaduna.',
      '• Kano State: NSCDC State Command, State Road / Audu Bako Secretariat, Kano State.',
      '• Enugu State: NSCDC State Command, Rangers Avenue, Independence Layout, Enugu.',
      '• Edo State: NSCDC Edo State Command, Sapele Road / GRA, Benin City, Edo State.',
      '• Borno State: NSCDC Borno Command, Maiduguri-Damaturu Road, Maiduguri.',
      '• Delta State: NSCDC State Command, Okpanam Road, Asaba, Delta State.',
      '## Mandatory Document Verification Checklist',
      'Candidates must organize their credentials in two separate hardcopy folders (Original Documents Folder and Photocopy Duplicate Folder):',
      '1. Printed CDCFIB Application Acknowledgement Slip with clear passport photograph and barcode.',
      '2. Official Shortlist Invitation Letter (downloaded from cdcfib.gov.ng).',
      '3. Original WAEC/NECO/NABTEB O\'Level certificates (maximum of two sittings).',
      '4. Original Degree / HND / ND / NCE Statements of Result (for Superintendent and Inspectorate cadres).',
      '5. Valid National Identity Number (NIN) verification slip issued by NIMC.',
      '6. Certificate of State of Origin / Local Government Identification signed by your LGA Chairman.',
      '7. National Population Commission (NPC) Birth Certificate or High Court Declaration of Age.',
      '8. Four (4) recent passport photographs on a plain white background.',
      '## Dress Code & Fitness Screening Rules',
      'Candidates must arrive at the venue by 6:30 AM in clean white round-neck T-shirts, white shorts, white canvas sneakers, and white socks. Physical drills include a 2.4km stamina run, push-ups, sit-ups, and orthopedic posture vetting.'
    ],
    faqs: [
      {
        question: 'Can I attend NSCDC physical screening in a state other than my state of origin?',
        answer: 'Candidates are required to attend screening in the state selected as their examination/screening center during online registration on the CDCFIB portal. You cannot transfer centers without official CDCFIB authorization.'
      },
      {
        question: 'What happens if my original certificate is not yet issued by my university/polytechnic?',
        answer: 'An official, authenticated Statement of Result signed by your Registrar within its valid duration is acceptable in place of the original certificate during initial screening.'
      }
    ]
  },
  {
    slug: 'print-army-screening-slip',
    title: 'How to Print Army Screening Slip on tracking.armynotification.com.ng (2026)',
    description: 'Step-by-step tutorial to log in to tracking.armynotification.com.ng, check shortlisted candidate status, and download your full-color army screening card PDF.',
    category: 'Tutorial',
    date: '2026-05-15',
    branch: 'Army',
    keywords: ['tracking armynotification com ng', 'print army screening slip', 'army shortlist slip download', 'check army notification status', 'recruitment armynotification com ng'],
    content: [
      'Candidates shortlisted for the Nigerian Army Regular Recruit Intake (RRI) must download and print their official Screening Slip from the verified notification subdomain at **tracking.armynotification.com.ng**. Without this slip, security personnel will deny you entry into the State Screening Center.',
      '## Step-by-Step Slip Download Protocol',
      '1. Open a secure web browser (Google Chrome or Mozilla Firefox on desktop is recommended).',
      '2. Navigate to: `https://tracking.armynotification.com.ng` (or the primary army portal at `recruitment.army.mil.ng`).',
      '3. In the login panel, enter your registered **Application Number** (e.g., `85RRI/AB/12345` or `86RRI/LA/67890`) or your registered Email Address and Password.',
      '4. Click the "Check Status / Log In" button.',
      '5. Once authenticated, your Candidate Dashboard will display your recruitment status as **SHORTLISTED** along with your assigned state screening venue and screening date.',
      '6. Click on "Download Screening Slip (PDF)" or "Print BVN & NIN Attestation Slip".',
      '7. Save the high-resolution PDF document to your local storage.',
      '8. Print two (2) copies in **Full Color** on clean A4 paper. Ensure the QR Code and barcode are crisp and unscratched.',
      '## Troubleshooting Common Portal Errors',
      '• **"Invalid Application Number" Error**: Confirm the exact spelling and slash format (`/`) as written in your original confirmation email.',
      '• **"Page Not Loading / 504 Gateway Timeout"**: During peak shortlist announcement periods, traffic surges cause server delays. Access the portal during off-peak hours (between 10:00 PM and 5:00 AM).',
      '• **Forgotten Password**: Click on "Reset Password", input your registered email address, and follow the password reset link sent to your inbox or spam folder.'
    ],
    faqs: [
      {
        question: 'Do I pay any fee to print my Nigerian Army screening slip?',
        answer: 'No! The Nigerian Army application and slip generation are 100% free. Never pay money to cyber cafes, middlemen, or social media agents claiming to generate shortlisted slips.'
      }
    ]
  },
  {
    slug: 'navy-dssc-vs-bmtc',
    title: 'Nigerian Navy DSSC vs BMTC: Complete Comparison of Ranks, Salary & Requirements',
    description: 'Compare the Nigerian Navy Direct Short Service Commission (DSSC) and Basic Military Training Course (BMTC). Understand officer ranks, ratings pay, and training duration.',
    category: 'Comparison',
    date: '2026-05-18',
    branch: 'Navy',
    keywords: ['navy dssc vs bmtc', 'difference between dssc and bmtc', 'navy officer cadet vs rating', 'nigerian navy ranks', 'nigerian navy salary 2026'],
    content: [
      'Aspiring applicants often ask whether they should enlist via the **Direct Short Service Commission (DSSC)** or the **Basic Military Training Course (BMTC)**. The two tracks cater to completely distinct educational qualifications, training methodologies, and career trajectories within the Nigerian Navy.',
      '## Summary Comparison Table',
      '• **Entry Qualification**: DSSC requires a B.Sc / B.Eng / MBBS / LL.B Degree (Min 2:1) or HND (Upper Credit). BMTC requires SSCE (WAEC/NECO 5 credits), NCE, or OND.',
      '• **Commissioning Rank**: DSSC graduates are commissioned as **Sub-Lieutenant** (or Lieutenant for Doctors/Specialists). BMTC recruits pass out as **Ordinary Seaman / Trainee Rating**.',
      '• **Starting Salary Scale**: DSSC Officers earn ₦220,000 – ₦260,000/month. BMTC Ratings earn ₦65,000 – ₦80,000/month + sea duty hazard allowances.',
      '• **Training Institution**: DSSC trains for 9 months at the Nigerian Naval College in Onne, Rivers State. BMTC trains for 6 months at the Nigerian Navy Basic Training School (NNBTS) in Onne.',
      '• **Age Ceiling**: DSSC accepts candidates up to 30 years (up to 35 for Consultant Doctors). BMTC strictly limits age to 18–22 years (up to 24 for medical/diploma holders).',
      '## Career Progression & Command Structure',
      'DSSC officers serve on executive and technical leadership tracks, commanding naval vessels, naval air squadrons, and naval hospital directorates, advancing to Lieutenant Commander, Commander, and Captain.',
      'BMTC ratings advance across technical trade specializations (Seamanship, Marine Engineering, Weapon Electrical, Communications, Logistics) from Able Seaman to Leading Seaman, Petty Officer, and Warrant Officer.'
    ],
    faqs: [
      {
        question: 'Can a BMTC Rating convert to a commissioned Officer later?',
        answer: 'Yes. Serving ratings who acquire university degrees or excel in distinguished service can apply for Executive Commissioning or Special Duty Commissioning to become commissioned officers.'
      }
    ]
  },
  {
    slug: 'police-constable-subject-combinations',
    title: 'WAEC/NECO Subject Combinations for Nigerian Police Constable Enlistment 2026',
    description: 'Discover mandatory O\'Level subjects, credit requirements, and 2-sittings rules for Nigeria Police Force (NPF) General Duty and Specialist Constable recruitment.',
    category: 'Requirements',
    date: '2026-05-20',
    branch: 'Police',
    keywords: ['police constable waec requirements', 'police recruitment subject combination', 'neco credits for police recruitment', 'npf olevel combination', 'police service commission requirements'],
    content: [
      'The Police Service Commission (PSC) and the Nigeria Police Force (NPF) enforce strict academic minimum baselines for Constable recruitment. Deficiencies in core O\'Level subject credits represent the number one reason for disqualification during credentials vetting.',
      '## Core Academic Baseline: 5 Credits in Not More Than 2 Sittings',
      'Applicants must possess a minimum of five (5) credits in WAEC, NECO, GCE, or NABTEB obtained in a maximum of two (2) examination sittings.',
      '## Mandatory Compulsory Credits',
      '• **English Language**: Must be passed with at least Grade C6 (Credit). Compulsory for both General Duty and Specialist cadres.',
      '• **Mathematics**: Must be passed with at least Grade C6 (Credit). Compulsory for all applicants.',
      '## Approved Subject Combinations for General Duty Constables',
      'In addition to English and Mathematics, candidates must obtain three (3) credits from any of the following approved secondary subjects:',
      '• Science Track: Biology, Chemistry, Physics, Agricultural Science, Computer Studies.',
      '• Arts & Humanities Track: Government, History, Civic Education, Literature-in-English, CRS/IRS.',
      '• Commercial Track: Economics, Commerce, Financial Accounting, Geography.',
      '## Combining Two Results (WAEC + NECO)',
      'You are legally permitted to combine two sittings (e.g. WAEC 2023 + NECO 2024). However, both result certificates must bear the **identical spelling of your Surname, First Name, Middle Name, and Date of Birth** matching your National Identity Number (NIN).'
    ],
    faqs: [
      {
        question: 'Is NABTEB accepted for Nigeria Police recruitment?',
        answer: 'Yes, NABTEB is officially accepted for General Duty and Artisan/Specialist Constable recruitment, provided it contains 5 credits including English Language and Mathematics.'
      }
    ]
  },
  {
    slug: 'correct-cdcfib-portal-errors',
    title: 'How to Correct Errors on CDCFIB Portal (NSCDC, Immigration, Fire Service)',
    description: 'Made a mistake on your CDCFIB profile? Learn the legal process to correct misspelled names, wrong dates of birth, incorrect cadres, and upload errors.',
    category: 'Tutorial',
    date: '2026-05-22',
    branch: 'Civil Defence',
    keywords: ['correct cdcfib errors', 'edit cdcfib profile details', 'immigration portal edit date of birth', 'nscdc name correction', 'cdcfib support ticket'],
    content: [
      'Errors made during registration on `recruitment.cdcfib.gov.ng` (such as inverted names, mismatched date of birth, or selecting the wrong qualification cadre) will lead to disqualification during physical screening unless rectified through official protocols.',
      '## Method 1: Correction Before Final Submission',
      'If your application status is still in draft or pending review, navigate to your Candidate Profile Dashboard, click on "Edit Bio-Data / Qualifications", update the incorrect fields, re-upload clean documents, and click "Save & Submit".',
      '## Method 2: Submitting an Official CDCFIB Support Ticket',
      'If you have already submitted the form and generated an Application ID, the portal locks profile fields. You must log a support ticket:',
      '1. Visit `https://recruitment.cdcfib.gov.ng` and click on "Help & Support".',
      '2. Select "Submit New Ticket" and choose the category **"Profile Modification / Correction"**.',
      '3. Provide your Full Name, Registered Email, Application ID, and NIN.',
      '4. Clearly state the exact field requiring amendment and attach proof (e.g., NIN Slip or WAEC certificate).',
      '## Method 3: Court Affidavit for Screening Venue Defense',
      'If the portal support queue does not update your details before physical screening begins, obtain a sworn **Affidavit of Correction of Name / Declaration of Age** from a Federal or State High Court. Present this legal instrument to the screening panel during document verification.'
    ],
    faqs: [
      {
        question: 'Can I create a second application with a new email to fix errors?',
        answer: 'NO! The CDCFIB system uses automated NIN duplicate detection. Submitting multiple applications with the same NIN will trigger automated fraud flags and disqualify both applications.'
      }
    ]
  },
  {
    slug: 'military-physical-standards-height-requirements',
    title: 'Military Height & Physical Standards in Nigeria: Army, Navy, Air Force & Police (2026)',
    description: 'Complete height, chest measurement, BMI, and physical fitness standards for Nigerian military and paramilitary enlistment. Male and female requirements.',
    category: 'Requirements',
    date: '2026-06-01',
    branch: 'Army',
    keywords: ['military height requirements nigeria', 'army height requirement male female', 'police height requirement', 'air force physical screening standards', 'height for customs recruitment'],
    content: [
      'Meeting physical anthropometric standards is the initial filter administered at the entrance gate of every military and paramilitary screening ground. Candidates failing height or chest measurement standards are disqualified immediately prior to document inspection.',
      '## 2026 Official Height Standards by Agency',
      '• **Nigerian Army**: Male: 1.68m (5ft 6in) | Female: 1.65m (5ft 5in). (Tradesmen/Specialists: Male 1.65m | Female 1.60m).',
      '• **Nigerian Navy**: Male: 1.68m (5ft 6in) | Female: 1.65m (5ft 5in).',
      '• **Nigerian Air Force**: Male: 1.66m (5ft 5.5in) | Female: 1.63m (5ft 4in).',
      '• **Nigeria Police Force (NPF)**: Male: 1.67m (5ft 6in) | Female: 1.64m (5ft 4.5in).',
      '• **Federal Road Safety Corps (FRSC)**: Male: 1.70m (5ft 7in) | Female: 1.64m (5ft 4.5in).',
      '• **Nigeria Security and Civil Defence Corps (NSCDC)**: Male: 1.65m (5ft 5in) | Female: 1.60m (5ft 3in).',
      '• **Nigeria Customs Service (NCS)**: Male: 1.68m (5ft 6in) | Female: 1.65m (5ft 5in).',
      '• **Nigeria Immigration Service (NIS)**: Male: 1.65m (5ft 5in) | Female: 1.60m (5ft 3in).',
      '## Chest Expansion & Body Mass Index (BMI)',
      '• **Chest Measurement (Males Only)**: Minimum expanded chest measurement of **86cm (34 inches)**. Assessed while inhaling deeply.',
      '• **Body Mass Index (BMI)**: Must fall between **18.5 and 25.5 kg/m²**. Candidates presenting extreme obesity or severe underweight indicators are disqualified.',
      '## Orthopedic & Dermatological Disqualifications',
      'Screening officers conduct strict visual inspections for:',
      '• Flat feet (pes planus) that impair long-distance tactical marching.',
      '• Severe knock-knees (genu valgum) or bow legs (genu varum).',
      '• Visible tattoos, tribal facial scarifications, or multiple ear piercings on males.',
      '• Speech impediments (severe stuttering/stammering).'
    ],
    faqs: [
      {
        question: 'Why do military agencies require a minimum height?',
        answer: 'Standard height baselines ensure personnel can comfortably shoulder standard tactical rifles, peer over defense parapets, and operate standard-issue military machinery.'
      }
    ]
  },
  {
    slug: 'military-medical-screening-test-disqualifications',
    title: 'Military Medical Screening Disqualification Factors: Army, Navy, Air Force (2026)',
    description: 'Avoid medical disqualification! In-depth guide to military medical checks: cardiovascular, blood tests (HIV/Hepatitis), vision, surgery, and mental health.',
    category: 'Screening',
    date: '2026-06-12',
    branch: 'Army',
    keywords: ['military medical screening test disqualifications', 'medical test for nigerian army', 'navy medical screening factors', 'military physical fitness tests', 'blood pressure military screening'],
    content: [
      'The comprehensive medical examination represents the most thorough filter in the Armed Forces selection process. Conducted by military medical officers, every candidate undergoes rigorous clinical laboratory, radiological, and physiological tests.',
      '## 1. Cardiovascular & Vital Signs',
      '• **Blood Pressure Limits**: Readings consistently above **130/90 mmHg** (hypertension) or below **90/60 mmHg** lead to immediate failure.',
      '• **Cardiac Arrhythmias**: Resting heart rates exceeding 100 bpm (tachycardia) or heart murmurs detected via stethoscope.',
      '## 2. Laboratory Blood & Serology Tests',
      '• **Infectious Diseases**: Positive serology for **HIV 1 & 2**, **Hepatitis B Surface Antigen (HBsAg)**, and **Hepatitis C (HCV)**.',
      '• **Genotype & Hematology**: Sickle cell disease (SS) is disqualified due to high altitude and severe physical strain intolerance. Genotypes AA and AS are accepted.',
      '• **Urinalysis**: Presence of glucose (diabetes), protein (renal disease), or drug metabolites (cannabis, opioids, amphetamines).',
      '## 3. Optical, Auditory & ENT Checks',
      '• **Color Blindness**: Assessed via Ishihara color plates. Candidates unable to distinguish red and green navigational markers cannot serve in aviation, naval navigation, or artillery.',
      '• **Visual Acuity**: Must meet 6/6 uncorrected vision for combat roles (or 6/9 for select administrative specialists).',
      '• **Hearing**: Perforated eardrums or chronic otitis media lead to rejection.',
      '## 4. Surgical, Abdominal & Reproductive Checks',
      '• Active inguinal or umbilical hernia, hydrocele, varicocele, or extensive recent abdominal incisions.',
      '• Female applicants undergo compulsory pregnancy testing (HCG). Pregnant candidates are strictly disqualified.'
    ],
    faqs: [
      {
        question: 'Can I pass military medical screening with genotype AS?',
        answer: 'Yes! Genotype AS (Sickle Cell Trait) is medically cleared and fully eligible for enlistment in the Nigerian Army, Navy, Air Force, and Police.'
      }
    ]
  },
  {
    slug: 'fix-nigerian-navy-portal-issues',
    title: 'Fix Nigerian Navy Portal Errors: Email Code Not Sending & NIN Validation Fix (2026)',
    description: 'Solve joinnigeriannavy.com errors: OTP email verification delay, NIN verification failure, and passport upload issues with verified technical workarounds.',
    category: 'Tutorial',
    date: '2026-10-06',
    branch: 'Navy',
    keywords: ['nigerian navy recruitment portal email not receiving code', 'joinnigeriannavy email verification code not sending', 'nigerian navy portal nin validation error', 'how to solve navy portal issues'],
    content: [
      'During open enlistment windows on `joinnigeriannavy.com`, thousands of concurrent applicants cause severe database load. Here are the step-by-step solutions to overcome the top portal bugs:',
      '## 1. Email Verification Code (OTP) Delay Fix',
      '• **Check Spam & Promotions**: Automated verification emails from `no-reply@joinnigeriannavy.com` frequently route into Gmail\'s "Promotions" or "Spam" tabs.',
      '• **Do Not Spam Resend**: Clicking "Resend OTP" invalidates the previous code. Wait at least 15–20 minutes before requesting a single fresh token.',
      '• **Use Google Chrome on Desktop**: Mobile browsers often trigger aggressive cookie caching that breaks session OTP timers.',
      '• **Apply During Off-Peak Hours**: Register between 11:30 PM and 5:00 AM when traffic drops by over 80%.',
      '## 2. NIN Validation Failed Error Fix',
      '• **Name Order Synchronization**: Ensure your Surname, First Name, and Middle Name entered on the Navy portal match your NIMC NIN slip character-for-character.',
      '• **NIMC Server Outages**: If details match exactly, the national NIMC API gateway is undergoing scheduled synchronization. Wait 2–3 hours and re-attempt.',
      '## 3. Document & Passport Upload Specifications',
      '• Compress all educational PDF credentials below **200 KB** using free online PDF compressors.',
      '• Passport photos must be exactly **2x2 inches (JPEG/PNG)** under **100 KB** on a clean, solid white background with no headgear or eyeglasses.'
    ],
    faqs: [
      {
        question: 'What is the official domain of the Nigerian Navy recruitment portal?',
        answer: 'The verified official domain is https://joinnigeriannavy.com (or via navy.mil.ng). Never input your NIN or sensitive documents on unofficial third-party blogs.'
      }
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
