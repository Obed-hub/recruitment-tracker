export interface BlogContentBlock {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'ol';
  text?: string;
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
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
