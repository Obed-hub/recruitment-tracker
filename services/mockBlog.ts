export interface BlogContentBlock {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'ol';
  text?: string;
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  category: 'Career Advice' | 'Exam Prep' | 'Salaries' | 'Guides';
  date: string;
  readTime: string;
  keywords: string[];
  image: string;
  content: BlogContentBlock[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'top-10-high-paying-agencies-nigeria',
    title: 'Top 10 High-Paying Federal Government Agencies in Nigeria (2026)',
    seoTitle: 'Top 10 High-Paying Federal Agencies in Nigeria 2026/2027 [Full Salary Scale & Allowances]',
    description: 'Discover the top 10 highest-paying federal government agencies in Nigeria for 2026. Explore their salary structures, benefits, and how to apply.',
    category: 'Salaries',
    date: '2026-06-20',
    readTime: '6 min read',
    keywords: [
      'highest paying agencies in nigeria',
      'cbn salary structure',
      'nnpc salary scale',
      'federal government salaries nigeria',
      'high paying civil service jobs'
    ],
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'In Nigeria, securing a job in the federal civil service is highly coveted. However, not all federal government establishments are equal. Due to specialized operations, statutory duties, and independent funding, certain federal agencies offer vastly superior salary packages, health benefits, and allowances compared to the standard civil service ministries.'
      },
      {
        type: 'h2',
        text: 'Understanding Federal Salary Structures'
      },
      {
        type: 'p',
        text: 'Standard government ministries pay employees using the Consolidated Public Service Salary Structure (CONPSS). However, high-paying agencies utilize specialized structures such as the Consolidated Armed Forces Salary Structure (CONAFSS), the Consolidated Paramilitary Salary Structure (CONPASS), and customized corporate salary structures.'
      },
      {
        type: 'h2',
        text: 'Top 10 Highest-Paying Federal Agencies'
      },
      {
        type: 'ol',
        items: [
          'Central Bank of Nigeria (CBN): As the apex financial regulator, CBN pays entry-level graduates approximately ₦120,000 to ₦180,000 monthly, with massive allowances for housing, wardrobe, and medicals, pushing annual take-home above ₦3 million.',
          'Nigerian National Petroleum Company Limited (NNPC): Operates as a commercial state-owned enterprise. Entry-level salaries (Graduate Trainees) start from ₦150,000 to ₦250,000 monthly, plus oil-industry specific bonuses.',
          'Federal Inland Revenue Service (FIRS): Responsible for national tax collection. FIRS staff receive substantial performance-based bonuses alongside a robust basic salary starting at ₦120,000 monthly.',
          'Nigerian Upstream Petroleum Regulatory Commission (NUPRC): Tasked with monitoring exploration and production, NUPRC inherits the high-paying oil-sector salary packages.',
          'Nigerian Communications Commission (NCC): The telecommunications regulator pays entry-level personnel around ₦130,000 monthly, accompanied by rich quarterly benefits.',
          'Nigerian Maritime Administration and Safety Agency (NIMASA): The shipping regulator pays lucrative maritime-specific allowances, placing its staff among the top earners.',
          'Nigeria Deposit Insurance Corporation (NDIC): Operates hand-in-hand with the CBN and offers an closely matched financial sector salary scale.',
          'Economic and Financial Crimes Commission (EFCC): Law enforcement officers in the EFCC are paid under specialized scales with danger and intelligence allowances.',
          'Nigerian Ports Authority (NPA): Manages ports and harbor facilities. Provides competitive entry-level packages starting from ₦100,000 monthly plus maritime allowances.',
          'Corporate Affairs Commission (CAC): The corporate registry agency offers competitive salaries and allowances derived from administrative filing fees.'
        ]
      },
      {
        type: 'h2',
        text: 'Key Allowances & Employee Benefits'
      },
      {
        type: 'p',
        text: 'The true value of working in these agencies lies in their fringe benefits:'
      },
      {
        type: 'ul',
        items: [
          'Housing Allowances: Annual or bi-annual subsidies to cover accommodation costs in major cities.',
          '13th Month Salary: An extra month of basic pay paid to employees in December.',
          'Medical Insurance (HMO): Comprehensive healthcare coverage covering the employee, their spouse, and up to four children.',
          'Pensions & Gratuities: Contributory pension schemes that guarantee high retirement security.'
        ]
      },
      {
        type: 'h2',
        text: 'How to Position Yourself for Enlistment'
      },
      {
        type: 'p',
        text: 'Because these agencies do not recruit every month, candidates should proactively monitor recruitment tracker portals, set up alert updates, prepare for computer-based tests (CBT), and keep their O\'level and university credentials fully verified.'
      }
    ],
    faqs: [
      {
        question: 'Which federal agency pays the highest entry-level salary?',
        answer: 'The Central Bank of Nigeria (CBN) and NNPC consistently rank at the top, with graduate entry-level packages starting between ₦150,000 and ₦250,000 per month, excluding allowances.'
      },
      {
        question: 'Do you need political connection to get recruited?',
        answer: 'While networking helps, many agencies now employ independent recruitment boards and CBT test centers to conduct merit-based screenings to eliminate bias.'
      }
    ]
  },
  {
    slug: 'how-to-prepare-pass-military-aptitude-tests',
    title: 'How to Prepare and Pass Military Aptitude Tests: A Comprehensive Guide',
    seoTitle: 'How to Pass Military Aptitude Tests 2026/2027 [CBT Exam Format & Study Tips]',
    description: 'A complete preparation guide for the Nigerian Army, Navy, and Air Force CBT exam. Get past questions, topic break-downs, and screening day tips.',
    category: 'Exam Prep',
    date: '2026-06-18',
    readTime: '5 min read',
    keywords: [
      'military aptitude test prep',
      'nigerian army cbt questions',
      'navy dssc exam format',
      'how to pass military exams nigeria'
    ],
    image: 'https://images.unsplash.com/photo-1508847154043-be12a62861c1?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'Every year, hundreds of thousands of applicants apply for the Nigerian Army, Navy, and Air Force. To narrow down this pool, the military uses Computer-Based Tests (CBT) or written aptitude tests. Passing these tests is mandatory to progress to the physical screening stage. Below is a comprehensive blueprint to help you prepare and score high.'
      },
      {
        type: 'h2',
        text: 'Exam Structure and Key Subject Areas'
      },
      {
        type: 'p',
        text: 'Most military recruitment exams follow a standard template of 50 to 100 questions, testing three main areas:'
      },
      {
        type: 'ul',
        items: [
          'Mathematics (Basic Algebra, Fractions, Ratios, Percentages, Simple Interest, Geometry).',
          'English Language (Synonyms, Antonyms, Sentence Structure, Comprehension, Spelling Errors).',
          'General Paper & Current Affairs (Nigerian History, Military Ranks, Current Ministers, World Geography, Capital Cities, Civic Duties).'
        ]
      },
      {
        type: 'h2',
        text: 'Step-by-Step Preparation Strategy'
      },
      {
        type: 'p',
        text: 'Success is a combination of early preparations and correct resources:'
      },
      {
        type: 'ol',
        items: [
          'Use Real Past Questions: The military frequently recycles questions. Practicing with verified past papers from previous Army RRI or DSSC sessions will give you an immediate advantage.',
          'Practice with Timers: The CBT exams are heavily time-restricted. You typically have less than 45 seconds per question. Learn to skip difficult questions and come back to them later.',
          'Study Military Command Structures: Make sure you know who the Current President is, the Chief of Defence Staff, and Chiefs of Army, Navy, and Air Staff. Memorize the basic ranks.'
        ]
      },
      {
        type: 'h2',
        text: 'What to Expect on screening Exam Day'
      },
      {
        type: 'p',
        text: 'Ensure you sleep well the night before. Arrive at the CBT center at least 2 hours before your scheduled time. You must bring: your printed screening slip, a valid state ID, and a blue pen. Phones, smartwatches, and calculators are strictly forbidden.'
      }
    ],
    faqs: [
      {
        question: 'Are calculators allowed in Nigerian military exams?',
        answer: 'No. Calculators are strictly prohibited. You must perform all mathematical operations manually or using scratch sheets provided at the venue.'
      },
      {
        question: 'What is the pass mark for the military CBT?',
        answer: 'The pass mark is usually not made public, as it is determined by quota systems per state. However, scoring 60% and above generally guarantees qualification.'
      }
    ]
  },
  {
    slug: 'common-reasons-disqualification-military-physical-screening',
    title: 'Common Reasons for Disqualification During Military Physical Screening',
    seoTitle: 'Reasons for Disqualification at Military Screening 2026/2027 [Avoid These Mistakes]',
    description: 'Don\'t get disqualified! Learn the medical, physical, and credential reasons why candidates fail Nigerian military and paramilitary screenings.',
    category: 'Guides',
    date: '2026-06-15',
    readTime: '4 min read',
    keywords: [
      'military physical screening disqualifications',
      'knock knees military requirements',
      'medical check for nigerian army',
      'flat foot army screening'
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'Passing the CBT exam is only half the battle. The most challenging filter for applicants is the physical screening and medical checkup. A minor, often undetected physical trait or document spelling error can lead to instant disqualification at the gates. Here are the most common reasons candidates are sent home.'
      },
      {
        type: 'h2',
        text: '1. Medical & Internal Conditions'
      },
      {
        type: 'p',
        text: 'Military life demands extreme physical fitness, which is why comprehensive medical checks are conducted on-site:'
      },
      {
        type: 'ul',
        items: [
          'High Blood Pressure (Hypertension): Standard blood pressure must not exceed 130/90 mmHg.',
          'Chronic Infections: Testing positive for HIV, Hepatitis B/C, or Tuberculosis.',
          'Vision Defects: Color blindness or poor distance vision. Wearing eyeglasses usually disqualifies applicants from combat roles.',
          'Hernia & Varicocele: Scrotal swellings or abdominal weaknesses are checked during the surgical inspection.'
        ]
      },
      {
        type: 'h2',
        text: '2. Orthopedic and Structural Traits'
      },
      {
        type: 'p',
        text: 'Certain bone and joint structures are deemed unsuitable for heavy military marches:'
      },
      {
        type: 'ul',
        items: [
          'Flat Feet: A lacking arch in the foot increases fatigue and prevents long-distance running.',
          'Knock Knees & Bow Legs: If your knees touch when standing straight, or have an extreme outward curve, you will be disqualified.',
          'Physical Deformities: Missing digits, joint stiffness, or un-straightened broken limbs.'
        ]
      },
      {
        type: 'h2',
        text: '3. Documentation & Name Errors'
      },
      {
        type: 'p',
        text: 'Document screening is highly strict. Typical disqualification factors include:'
      },
      {
        type: 'ul',
        items: [
          'Date of Birth Mismatches: If the age on your WAEC certificate differs from your NIN profile or birth certificate.',
          'Name Misspellings: Slight deviations in names across documents (e.g. "Mohammed" vs "Muhammad").',
          'Incomplete O\'level Credits: Lacking a credit pass in English or Mathematics.'
        ]
      },
      {
        type: 'h2',
        text: 'How to Prevent Rejection'
      },
      {
        type: 'p',
        text: 'Before going for screening, do a checkup at a general hospital to test your BP and blood chemistry. If your documents have name issues, visit a court of law to obtain a Correction of Name Affidavit and a newspaper publication before traveling to the venue.'
      }
    ],
    faqs: [
      {
        question: 'Does having tattoos disqualify me from the military?',
        answer: 'Yes. The Nigerian military and paramilitary forces have a strict no-tattoo policy. Visible or hidden tattoos will result in immediate disqualification.'
      },
      {
        question: 'Can I use a name affidavit to correct spelling errors?',
        answer: 'Yes. An affidavit sworn in a High Court along with a national newspaper publication is legally accepted for minor discrepancies.'
      }
    ]
  },
  {
    slug: 'paramilitary-vs-military-ranks-salaries-nigeria',
    title: 'Paramilitary vs Military: Ranks, Salaries, and Career Paths in Nigeria',
    seoTitle: 'Paramilitary vs Military Ranks & Salaries in Nigeria 2026/2027 [Comparison Table]',
    description: 'Compare careers in the Nigerian Armed Forces (Army, Navy, Air Force) versus paramilitary agencies (Customs, NIS, NSCDC, NDLEA).',
    category: 'Career Advice',
    date: '2026-06-10',
    readTime: '7 min read',
    keywords: [
      'paramilitary vs military nigeria',
      'nigerian navy vs customs salary',
      'civil defence ranks vs army ranks',
      'military career paths nigeria'
    ],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'For young Nigerians looking to serve their country, deciding whether to join the Military or a Paramilitary agency is a key choice. Both offer uniforms, ranks, and national pride, but the day-to-day operations, remuneration structures, and danger levels differ significantly.'
      },
      {
        type: 'h2',
        text: 'Mandates and Operations'
      },
      {
        type: 'p',
        text: 'The primary difference is the threat context they deal with:'
      },
      {
        type: 'ul',
        items: [
          'The Military (Army, Navy, Air Force) focuses on external aggression, territorial integrity, and combat operations in active conflict zones.',
          'Paramilitary Agencies (Customs, Immigration, NSCDC, NDLEA, FRSC) are civil security services designed for internal enforcement, border control, drug interdiction, and disaster management.'
        ]
      },
      {
        type: 'h2',
        text: 'Salary Scales: CONAFSS vs CONPASS'
      },
      {
        type: 'p',
        text: 'Remuneration follows different federal pay schedules:'
      },
      {
        type: 'ul',
        items: [
          'CONAFSS (Consolidated Armed Forces Salary Structure): Pays military personnel. Basic salary is highly supplemented by hazard and deployment allowances.',
          'CONPASS (Consolidated Paramilitary Salary Structure): Pays paramilitary personnel. While their basic salary is competitive, their hazard packages are generally lower, except in specialized commands like Customs and NDLEA.'
        ]
      },
      {
        type: 'h2',
        text: 'Career Progression & Ranks'
      },
      {
        type: 'p',
        text: 'Ranks are structured differently between the forces. For instance:'
      },
      {
        type: 'ul',
        items: [
          'Army Officers progress from Second Lieutenant ➔ Lieutenant ➔ Captain ➔ Major ➔ Lieutenant Colonel ➔ Colonel ➔ Brigadier General.',
          'Civil Defence (NSCDC) and Immigration Officers progress from Assistant Superintendent ➔ Deputy Superintendent ➔ Superintendent ➔ Chief Superintendent ➔ Assistant Comptroller/Commandant ➔ Comptroller/Commandant.'
        ]
      },
      {
        type: 'h2',
        text: 'Work-Life Balance'
      },
      {
        type: 'p',
        text: 'Paramilitary officers typically enjoy a better work-life balance, working shifts in city terminals, borders, and command stations. Military personnel are subject to immediate deployments, long deployments away from family, and live primarily within strict barrack regulations.'
      }
    ],
    faqs: [
      {
        question: 'Which pay structure is higher: CONAFSS or CONPASS?',
        answer: 'CONAFSS (military) generally offers higher overall pay when combat, hazard, and field allowances are included. However, some paramilitary agencies like Customs have high revenue-based allowances.'
      },
      {
        question: 'Can a paramilitary officer be deployed to war?',
        answer: 'No. Paramilitary forces are not active combatants in external wars, though they can offer internal joint-task-force support in secured areas.'
      }
    ]
  },
  {
    slug: 'nigeria-police-force-ranks-salary-structure',
    title: 'Nigeria Police Force Ranks and Salary Structure: A Detailed Breakdown',
    seoTitle: 'Nigeria Police Force Ranks & Salary Structure 2026/2027 [Constable to IGP Monthly Pay]',
    description: 'Comprehensive overview of the Nigeria Police Force (NPF) ranking system and monthly salary structure from Constable to Inspector General.',
    category: 'Salaries',
    date: '2026-06-05',
    readTime: '5 min read',
    keywords: [
      'nigeria police ranks',
      'npf salary structure',
      'police constable monthly salary',
      'nigerian police force ranks and salary'
    ],
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'The Nigeria Police Force (NPF) is the primary internal law enforcement agency in the country. Following recent federal reforms and salary increases, the NPF salary structure has been updated to improve officer welfare. Here is the breakdown of the rank structure and official monthly payouts.'
      },
      {
        type: 'h2',
        text: 'NPF Ranking Structure'
      },
      {
        type: 'p',
        text: 'Ranks in the NPF are categorized into three broad divisions:'
      },
      {
        type: 'ul',
        items: [
          'Non-Commissioned Officers (NCOs): Recruit Constable, Police Constable, Corporal, Sergeant, Sergeant Major.',
          'Inspectorate Ranks: Cadet Inspector, Unconfirmed Inspector, Confirmed Inspector, Principal Inspector, Chief Inspector.',
          'Commissioned Officers (ASP to IGP): Assistant Superintendent of Police (ASP), Deputy Superintendent (DSP), Superintendent (SP), Chief Superintendent (CSP), Assistant Commissioner (ACP), Deputy Commissioner (DCP), Commissioner of Police (CP), Assistant Inspector-General (AIG), Inspector-General of Police (IGP).'
        ]
      },
      {
        type: 'h2',
        text: 'Monthly Salary Scale (Estimated Post-Increase)'
      },
      {
        type: 'p',
        text: 'Estimated average take-home pay per month for key ranks:'
      },
      {
        type: 'ul',
        items: [
          'Police Constable (Grade Level 03): ₦84,000 to ₦96,000.',
          'Police Sergeant (Grade Level 05): ₦96,000 to ₦104,000.',
          'Police Inspector (Grade Level 07): ₦120,000 to ₦140,000.',
          'Assistant Superintendent of Police (ASP - Grade Level 08): ₦150,000 to ₦180,000.',
          'Superintendent of Police (SP - Grade Level 10): ₦180,000 to ₦210,000.',
          'Commissioner of Police (CP - Grade Level 15): ₦300,000 to ₦350,000.'
        ]
      },
      {
        type: 'h2',
        text: 'Allowances and Deductions'
      },
      {
        type: 'p',
        text: 'Police officers are entitled to various monthly allowances including: Rent/Accommodation allowance (if not living in barracks), Hazard allowance, Operations allowance (when on special deployment), and Uniform/Wardrobe allowance. Deductions are made for the National Housing Fund (NHF), contributory pension, and police cooperative societies.'
      }
    ],
    faqs: [
      {
        question: 'Are police recruits paid during training?',
        answer: 'Yes. Recruits receive a stipend of approximately ₦20,000 to ₦30,000 monthly to cover basic needs at the Police Colleges.'
      },
      {
        question: 'What is the entry rank for a university graduate in the police?',
        answer: 'University graduates (BSc/HND) who enter through Cadet ASP recruitment start at the rank of Assistant Superintendent of Police (ASP) on Grade Level 08.'
      }
    ]
  },
  {
    slug: 'nigerian-army-shortlisted-candidates-pdf-checker',
    title: 'Nigerian Army Shortlisted Candidates 2026/2027 PDF List (State-by-State 88 RRI Screening Centers)',
    seoTitle: 'Nigerian Army Shortlist 2026 PDF Download (State-by-State 88 RRI Screening Centers)',
    description: 'Download official Nigerian Army shortlisted candidates PDF for 88 RRI and DSSC. Find state screening venues, required kits, and interview dates.',
    category: 'Guides',
    date: '2026-09-08',
    readTime: '7 min read',
    keywords: [
      'nigerian army shortlisted candidates 2026 pdf',
      'army 88 rri shortlist download',
      'nigerian army screening venue 2026',
      'how to check army shortlist online',
      'army screening date and center'
    ],
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'The Nigerian Army has published the official shortlist of successful candidates for the 88 Regular Recruit Intake (RRI) and Direct Short Service Commission (DSSC). Candidates who completed their online applications can now check their names on the state-by-state PDF lists and prepare for the mandatory physical and credentials screening exercise.'
      },
      {
        type: 'h2',
        text: 'How to Check Your Name on the Army Shortlist PDF'
      },
      {
        type: 'p',
        text: 'Checking the shortlist on your mobile phone or computer is straightforward. Follow these steps to verify your application status without paying cyber cafe operators:'
      },
      {
        type: 'ol',
        items: [
          'Visit the official recruitment portal (recruitment.army.mil.ng) or our dedicated Shortlist Hub (recruitmenttracker.com.ng/shortlist-hub).',
          'Select your State of Origin to download the verified PDF document for your state.',
          'Open the downloaded PDF using Adobe Acrobat Reader, Google Drive, or WPS Office.',
          'Use the Search function (Ctrl + F on laptop, or tap the magnifying glass icon on mobile).',
          'Enter your full Application ID (e.g., 88RRI/KN/10492) or your surname to locate your screening center and reporting date.'
        ]
      },
      {
        type: 'h2',
        text: 'State-by-State Screening Venues and Barracks'
      },
      {
        type: 'p',
        text: 'Candidates are required to report strictly to the screening center designated for their state of origin. Major state centers include: Lagos State at 9 Brigade Ikeja Military Cantonment; Kaduna State at 1 Division Ribadu Cantonment; Kano State at 3 Brigade Bukavu Barracks; Rivers State at 6 Division Bori Camp; and Oyo State at 2 Division Adekunle Fajuyi Cantonment, Odogbo Ibadan.'
      },
      {
        type: 'h2',
        text: 'Mandatory Items and Dress Code for Screening'
      },
      {
        type: 'ul',
        items: [
          'White round-neck vest and plain white shorts (no logos or colored stripes).',
          'Pure white canvas shoes and plain white socks.',
          'Original and photocopies of educational certificates (FSLC, WAEC/NECO/NABTEB).',
          'Original LGA Indigene / State of Origin Certificate.',
          'National Identity Management Commission (NIMC) NIN Slip.',
          'Two pairs of completed and endorsed guarantor forms with authentic passport photographs.',
          'Scratch card for online O-Level result verification (WAEC or NECO).'
        ]
      },
      {
        type: 'h2',
        text: 'Stay Updated on WhatsApp'
      },
      {
        type: 'p',
        text: 'Screening timetables are batched by Local Government Areas. To ensure you do not miss your batch reporting date, follow the official NIGERIA RECRUITMENT UPDATE WhatsApp channel (https://whatsapp.com/channel/0029Vb9F6VeC1FuCXNvVif10) for instant PDF drops and real-time alerts.'
      }
    ],
    faqs: [
      {
        question: 'Is the Nigerian Army 88 RRI shortlist completely free to download?',
        answer: 'Yes, downloading the shortlist PDF and attending the state screening exercise is 100% free of charge. Never pay any recruitment agent claiming to insert your name on the supplementary list.'
      },
      {
        question: 'What happens if my name is on the list but I missed my state screening date?',
        answer: 'Candidates who miss their designated LGA screening date are generally disqualified, as military boards adhere to strict daily quotas. Occasionally, mop-up screening is held on the final two days of the exercise.'
      },
      {
        question: 'Can I attend screening in Lagos if my state of origin is Kano or Enugu?',
        answer: 'No. Candidates are screened exclusively in their official state of origin to preserve constitutional federal character quotas.'
      }
    ]
  },
  {
    slug: 'nigerian-navy-batch-39-recruitment-guide-portal',
    title: 'Nigerian Navy Batch 39 Recruitment 2026: Application Portal, Requirements & Registration Guide',
    seoTitle: 'Nigerian Navy Batch 39 Recruitment 2026/2027 Portal Form & Requirements',
    description: 'Complete guide to Nigerian Navy Batch 39 Basic Maritime Training Course (BMTC) recruitment 2026. Portal link, age limits, height rules, and CBT tips.',
    category: 'Guides',
    date: '2026-09-07',
    readTime: '6 min read',
    keywords: [
      'nigerian navy batch 39 recruitment 2026',
      'joinnigeriannavy portal closing date',
      'navy bmtc entry requirements',
      'how to apply for navy batch 39',
      'navy recruitment height and age requirements'
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'The Nigerian Navy has announced the opening of the official registration portal for the Basic Maritime Training Course (Batch 39 BMTC). This recruitment is open to Nigerian citizens seeking enlistment into the naval service as ratings across general duties, technical departments, medical ratings, and maritime engineering branches.'
      },
      {
        type: 'h2',
        text: 'Official Portal and Application Fee'
      },
      {
        type: 'p',
        text: 'The only authentic website for Batch 39 registration is joinnigeriannavy.com. Application is 100% free. Any third-party blog or social media account asking for form purchase fees or scratch card payments is completely fraudulent.'
      },
      {
        type: 'h2',
        text: 'Statutory Eligibility Requirements'
      },
      {
        type: 'ul',
        items: [
          'Nationality: Must be a Nigerian citizen by birth with a valid National Identity Number (NIN).',
          'Age Limits: Between 18 and 22 years for Secondary School Certificate holders (SSCE/GCE/NECO); up to 26 years for diploma holders (ND, NCE, Nursing, Technical certificates).',
          'Height Requirements: Minimum height of 1.69 meters (5ft 6in) for male candidates, and 1.65 meters (5ft 5in) for female candidates.',
          'Educational Qualifications: Minimum of 5 credits in SSCE, NECO, or GCE in not more than 2 sittings, including English Language and Mathematics.',
          'Marital Status: Applicants must be single and remain unmarried throughout the 9-month training period at the Basic Maritime Training College, Onne, Port Harcourt.'
        ]
      },
      {
        type: 'h2',
        text: 'Passport Photograph Upload Rule (Avoid Portal Error)'
      },
      {
        type: 'p',
        text: 'A common reason why candidates are locked out of the naval portal is uploading images larger than 20KB. The naval portal requires a recent passport photo with a clean white background, compressed to between 10KB and 20KB with 200x200 pixel dimensions. Ensure your image is resized to standard dimensions before uploading.'
      },
      {
        type: 'h2',
        text: 'Naval Aptitude Test & CBT Preparation'
      },
      {
        type: 'p',
        text: 'Shortlisted candidates will sit for an electronic Computer-Based Test (CBT) covering Mathematics, English Language, and General Knowledge (Nigerian history, naval traditions, and current affairs). Candidates should practice authentic naval past questions at recruitmenttracker.com.ng/past-questions/navy.'
      }
    ],
    faqs: [
      {
        question: 'Can I apply for Navy Batch 39 with awaiting result?',
        answer: 'No. The Nigerian Navy does not accept awaiting results. All academic qualifications (WAEC, NECO, NABTEB, ND) must be fully certified at the time of submission.'
      },
      {
        question: 'How long does Navy basic training last?',
        answer: 'BMTC training at the Nigerian Naval Basic Training School (NNBTS) Onne, Rivers State lasts approximately 9 months.'
      }
    ]
  },
  {
    slug: 'police-constable-cbt-exam-date-screening-centers',
    title: 'NPF Police Constable CBT Exam Date & Screening Venues 2026: What to Expect & Passing Score',
    seoTitle: 'NPF Police Constable CBT Exam Date 2026 & Nationwide Screening Centers',
    description: 'Everything you need to know about the 2026 Nigeria Police Force (NPF) Constable computer-based test (CBT), JAMB testing centers, and passing cut-off marks.',
    category: 'Exam Prep',
    date: '2026-09-06',
    readTime: '6 min read',
    keywords: [
      'police constable cbt exam date 2026',
      'npf screening date and centers',
      'jamb police recruitment cbt test',
      'police recruitment cut off mark',
      'npf constable interview date'
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'The Police Service Commission (PSC) and the Nigeria Police Force (NPF) have finalized arrangements for the nationwide Computer-Based Test (CBT) for shortlisted General Duty and Specialist Police Constable candidates. The examination is conducted in accredited JAMB CBT centers across all 36 states and the Federal Capital Territory.'
      },
      {
        type: 'h2',
        text: 'Structure of the Police CBT Examination'
      },
      {
        type: 'p',
        text: 'The NPF aptitude test is composed of 60 to 100 objective questions delivered via the JAMB e-testing engine. Candidates are evaluated across four key sections:'
      },
      {
        type: 'ul',
        items: [
          'Use of English (Grammar, comprehension, antonyms/synonyms): 25 questions.',
          'General Mathematics & Quantitative Reasoning: 20 questions.',
          'General Studies & Current Affairs (History of Nigeria, constitution, police hierarchy): 25 questions.',
          'Basic Verbal & Abstract Reasoning: 20 questions.'
        ]
      },
      {
        type: 'h2',
        text: 'Passing Score and Selection Criteria'
      },
      {
        type: 'p',
        text: 'While the PSC does not declare a uniform national cut-off score in advance, historical recruitment data indicates that scoring 50% and above significantly boosts your placement on the state quota allocation. Scores are ranked per Local Government Area (LGA), ensuring that every local council gets fair representation.'
      },
      {
        type: 'h2',
        text: 'What Candidates Must Bring to the JAMB Center'
      },
      {
        type: 'ol',
        items: [
          'Printed CBT Examination Slip showing your examination center, date, seat number, and scheduled session.',
          'Original National Identity Number (NIN) slip.',
          'Valid photo ID card (Voter card, Driver license, or International Passport).',
          'Two clean HB pencils (electronic devices, smart watches, bags, and calculators are strictly banned inside the hall).'
        ]
      }
    ],
    faqs: [
      {
        question: 'When will the 2026 Police Constable CBT examination hold?',
        answer: 'Dates are batched by state commands and transmitted directly via SMS and email to shortlisted candidates. Verified date announcements are also published on the NIGERIA RECRUITMENT UPDATE WhatsApp channel.'
      },
      {
        question: 'Are specialist police candidates tested on the same questions as general duty?',
        answer: 'Specialist applicants (drivers, mechanics, medics, band officers) sit for an abbreviated general paper followed by practical trade tests at the Police Colleges.'
      }
    ]
  },
  {
    slug: 'cdcfib-reprint-application-slip-guarantor-form',
    title: 'How to Reprint CDCFIB Application Slip & Guarantor Form (Civil Defence, NIS, Fire & Corrections)',
    seoTitle: 'How to Reprint CDCFIB Application Slip & Guarantor Form 2026 [cdcfib.career]',
    description: 'Step-by-step guide to reprinting your CDCFIB registration slip, referee forms, and screening invitations for NSCDC, NIS, Federal Fire Service, and NCoS.',
    category: 'Guides',
    date: '2026-09-05',
    readTime: '5 min read',
    keywords: [
      'how to reprint cdcfib application slip',
      'cdcfib career guarantor form download',
      'reprint civil defence screening slip',
      'nis recruitment portal slip reprint',
      'cdcfib referee endorsement'
    ],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'During recruitment exercises conducted by the Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB), thousands of candidates misplace their initial registration confirmation slips. If you applied for the Nigeria Security and Civil Defence Corps (NSCDC), Nigeria Immigration Service (NIS), Federal Fire Service (FFS), or Nigerian Correctional Service (NCoS), having your printed slip and completed guarantor form is compulsory at the screening gate.'
      },
      {
        type: 'h2',
        text: 'Step-by-Step Guide to Reprinting from cdcfib.career'
      },
      {
        type: 'ol',
        items: [
          'Navigate to the official portal: cdcfib.career.',
          'Click on the "Reprint Slip" or "Application Status" button on the portal menu.',
          'Enter the Email Address and Phone Number used during your original submission.',
          'Input your unique Application Reference Number (e.g., NSCDC-2026-XXXXX or NIS-2026-XXXXX).',
          'Click "Generate Slip" to download the official PDF containing your personal details, biometric barcode, and designated screening center.'
        ]
      },
      {
        type: 'h2',
        text: 'Who Can Endorse the CDCFIB Guarantor Form?'
      },
      {
        type: 'p',
        text: 'The CDCFIB board requires every applicant to present two endorsed guarantor forms. Eligible guarantors include: Traditional Rulers (Oba, Emir, Obi, Baale), Magistrates or High Court Judges, Civil Servants not below Grade Level 12, or Senior Police/Military Officers not below the rank of Superintendent of Police or Major. Ensure the guarantor signs, dates, and attaches an official stamp.'
      }
    ],
    faqs: [
      {
        question: 'Can I reprint my slip if I forgot my Application ID?',
        answer: 'Yes. Use the "Forgot Reference" tool on cdcfib.career by entering your registered NIN and date of birth to retrieve your application credentials.'
      },
      {
        question: 'Does the CDCFIB application slip need to be printed in color?',
        answer: 'Yes. It is strongly recommended to print your screening slip in high-resolution color so that your photograph and barcode scan properly during biometric gate vetting.'
      }
    ]
  },
  {
    slug: 'military-medical-screening-test-disqualifications',
    title: 'Complete Military Medical Screening Disqualification List: Tattoos, Flat Feet, BP, Vision & Tests',
    seoTitle: 'Military Medical Test Disqualification List Nigeria 2026 [Army, Navy, Air Force]',
    description: 'Discover the medical conditions that lead to disqualification in Nigerian Army, Navy, Air Force, and Police screenings: eye defects, flat feet, tattoos, and blood pressure.',
    category: 'Career Advice',
    date: '2026-09-04',
    readTime: '7 min read',
    keywords: [
      'military medical test disqualifications nigeria',
      'can someone with tattoo join nigerian army',
      'army physical medical examination rules',
      'flat feet disqualification military',
      'medical tests done in military screening'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    content: [
      {
        type: 'p',
        text: 'Passing the academic aptitude test and running the 3.2km endurance run are major milestones, but medical screening remains the single highest point of candidate elimination in Nigerian Armed Forces recruitment. Over 40% of candidates who reach the state screening centers are turned back by the military medical board for conditions they were previously unaware of.'
      },
      {
        type: 'h2',
        text: 'Top Conditions That Cause Immediate Disqualification'
      },
      {
        type: 'ul',
        items: [
          'Visible Body Tattoos and Deep Body Scarifications: Military regulations prohibit tattoos anywhere on the body, as well as cult-related branding or non-traditional deep marks.',
          'Severe Flat Feet (Pes Planus): The military requires a natural foot arch for tactical stamina and load-bearing marches; severe fallen arches cause chronic fatigue and joint damage.',
          'Visual Impairments & Color Blindness: Recruits must have 6/6 uncorrected visual acuity without glasses. Color blindness is an automatic disqualifier because combatants must identify military navigation markers and signal flares.',
          'Hypertension & Cardiac Murmurs: Resting blood pressure exceeding 140/90 mmHg poses grave risk under intensive boot camp drills at depot.',
          'Knock Knees (Genu Valgum) and Bow Legs (Genu Varum): Severe skeletal misalignments that impede standard parade marching or cause persistent knee degeneration under tactical gear.'
        ]
      },
      {
        type: 'h2',
        text: 'Laboratory Tests Conducted at the Zonal Screening Center'
      },
      {
        type: 'p',
        text: 'Candidates undergo comprehensive clinical diagnostics including: Complete Blood Count (CBC), Hepatitis B and C screening, HIV 1 & 2 serology, Urinalysis (checking for kidney pathology or diabetes mellitus), Chest X-Ray for active tuberculosis or pulmonary lesions, and Pregnancy testing for all female candidates (pregnancy at any stage leads to immediate deferral).'
      },
      {
        type: 'h2',
        text: 'How to Prepare Before Your Medical Date'
      },
      {
        type: 'p',
        text: 'Visit a reputable government hospital or primary health center 3 to 4 weeks prior to your screening date. Run a basic urinalysis, check your blood pressure, and undergo a simple eye acuity test. Treating mild ear wax impactions, infections, or transient blood pressure spikes beforehand can save your military career.'
      }
    ],
    faqs: [
      {
        question: 'Can I join the Nigerian military if I have sickle cell trait (Hb AS)?',
        answer: 'Candidates with sickle cell trait (AS) are generally accepted if asymptomatic and organ function is normal. However, candidates with homozygous sickle cell disease (SS or SC) cannot be accepted due to high-altitude and physical stress hazards.'
      },
      {
        question: 'Are surgical scars like appendectomy disqualifying?',
        answer: 'Clean, fully healed surgical scars (such as an uncomplicated appendectomy or hernia repair performed more than 12 months prior) are acceptable, provided there is no chronic pain or abdominal wall herniation.'
      }
    ]
  }
];

export const getBlogArticles = async (): Promise<BlogArticle[]> => {
  return new Promise((resolve) => {
    resolve(BLOG_ARTICLES);
  });
};

export const getBlogBySlug = async (slug: string): Promise<BlogArticle | null> => {
  return new Promise((resolve) => {
    const article = BLOG_ARTICLES.find(a => a.slug === slug) || null;
    resolve(article);
  });
};
