export interface RecruitmentFAQ {
  id: string;
  question: string;
  answer: string;
  category: 'General & Portal' | 'Nigerian Army' | 'Nigerian Navy' | 'Nigeria Police' | 'CDCFIB (NIS/NSCDC/Fire)' | 'Physical & Medical' | 'Salary & Ranks' | 'CBT & Exams';
  agency?: string;
  keywords: string[];
  relatedLink?: {
    label: string;
    url: string;
  };
}

export const FAQ_CATEGORIES = [
  'All',
  'General & Portal',
  'Nigerian Army',
  'Nigerian Navy',
  'Nigeria Police',
  'CDCFIB (NIS/NSCDC/Fire)',
  'Physical & Medical',
  'Salary & Ranks',
  'CBT & Exams'
] as const;

export type FAQCategory = typeof FAQ_CATEGORIES[number];

export const POPULAR_FAQ_SEARCHES = [
  'Navy Batch 39',
  'Awaiting Result',
  'Height Requirements',
  'Tattoos & Scars',
  'Reprint Slip',
  'Army Salary',
  'Guarantor Form',
  'Police CBT Date',
  'Married Candidates',
  'NIN Mismatch'
];

export const RECRUITMENT_FAQS: RecruitmentFAQ[] = [
  // GENERAL & PORTAL RULES
  {
    id: 'recruitment-form-fees',
    question: 'Are military and paramilitary recruitment forms free in Nigeria?',
    answer: 'Yes! Official recruitment forms for the Nigerian Army, Nigerian Navy, Nigerian Air Force, Nigeria Police Force (NPF), Nigeria Customs Service (NCS), and CDCFIB (Immigration, NSCDC, Fire Service, Corrections) are 100% FREE. The Federal Government prohibits charging processing fees or selling scratch cards. Any cybercafe, agent, or website asking you to pay money into an account for "application forms" or "guaranteed placement" is a scam.',
    category: 'General & Portal',
    keywords: ['form cost', 'is army form free', 'navy form price', 'police form cost', 'scratch card fee', 'scam alert'],
    relatedLink: {
      label: 'Check Open Recruitment Forms (2026)',
      url: '/which-recruitment-form-is-out-now'
    }
  },
  {
    id: 'awaiting-result-policy',
    question: 'Can I apply for military or paramilitary recruitment with awaiting results (AR)?',
    answer: 'No. Neither the Nigerian Armed Forces (Army, Navy, Air Force) nor paramilitary agencies (Police, Customs, Immigration, NSCDC) accept awaiting results. All candidates must have their complete statement of results or original certificates (WAEC, NECO, GCE, or NABTEB) with at least 5 credits including English Language and Mathematics at the time of online application.',
    category: 'General & Portal',
    keywords: ['awaiting results', 'waec awaiting', 'neco awaiting result', 'can i use awaiting result in army', 'navy awaiting result'],
    relatedLink: {
      label: 'Interactive Eligibility Checker',
      url: '/eligibility'
    }
  },
  {
    id: 'nin-name-mismatch',
    question: 'Can I apply if my name or date of birth on NIN differs from my WAEC certificate?',
    answer: 'No. Your biodata on the National Identity Management Commission (NIMC) database must synchronize with your educational certificates. Any discrepancy in your surname, first name, date of birth, or state of origin between your NIN and O-Level certificates will lead to automatic rejection at the biometric screening center. Visit a NIMC enrolment center to correct errors before applying.',
    category: 'General & Portal',
    keywords: ['nin mismatch', 'change date of birth on nimc', 'waec name different from nin', 'bvn mismatch screening'],
    relatedLink: {
      label: 'Read Guide on Document Discrepancies',
      url: '/guides'
    }
  },
  {
    id: 'married-candidates-policy',
    question: 'Can married candidates or applicants with children join the Nigerian military as recruits?',
    answer: 'No. For regular recruitments (Non-Commissioned Officers / Ratings / Airmen) in the Nigerian Army, Navy, and Air Force, applicants must be single and unmarried at the time of enlistment and must remain unmarried throughout the basic military training course. However, married individuals who hold University degrees or HND may apply for Direct Short Service Commission (DSSC) officer cadres if they satisfy the specific branch age and marital criteria.',
    category: 'General & Portal',
    keywords: ['can married woman join army', 'can married man join military', 'recruitment marital status', 'pregnancy military'],
    relatedLink: {
      label: 'Check Military Physical Standards',
      url: '/military-physical-standards-height-requirements'
    }
  },
  {
    id: 'multiple-applications-ban',
    question: 'Can I submit multiple applications using different email addresses or NINs?',
    answer: 'Absolutely not. Submitting multiple applications for the same recruitment exercise using different emails or phone numbers triggers automatic blacklisting. The portal software uses your 11-digit NIN and biometric fingerprint registry to detect duplicate entries, which immediately invalidates all applications submitted in your name.',
    category: 'General & Portal',
    keywords: ['multiple applications', 'submit twice on portal', 'double registration military', 'disqualification'],
  },
  {
    id: 'retrieving-lost-application-slip',
    question: 'How do I retrieve a forgotten application code, password, or portal login slip?',
    answer: 'Most official portals (including joinnigeriannavy.gov.ng, recruitment.army.mil.ng, and cdcfib.career) provide a "Forgot Application Number" or "Forgot Password" tool. Enter the email address, registered phone number, or 11-digit NIN used during registration. The system will send an OTP or recovery link. You can also log back in anytime before the deadline to reprint lost acknowledgement slips.',
    category: 'General & Portal',
    keywords: ['lost application code', 'forgot application number', 'reprint acknowledgement slip', 'reset portal password'],
    relatedLink: {
      label: 'CDCFIB Slip Reprint Guide',
      url: '/how-to-apply-cdcfib-portal'
    }
  },
  {
    id: 'general-age-limits',
    question: 'What are the typical age limits for Nigerian military and paramilitary recruitments?',
    answer: 'For secondary school leavers (SSCE / NECO holders), the statutory age limit is usually between 18 and 22 years (e.g. Nigerian Navy Batch 39 requires 18–22). For tradesmen, artisans, and diploma holders (ND, NCE, Nursing, Drivers), the age bracket extends up to 26 years. For degree holders applying for officer cadet or DSSC commission, the maximum age is usually between 28 and 30 years (or up to 32–35 for medical doctors).',
    category: 'General & Portal',
    keywords: ['age limit for military', 'how old to join army', 'navy age limit', 'police recruitment age limit 2026'],
    relatedLink: {
      label: 'Police Age Limit & Requirements',
      url: '/police-recruitment-requirements-age-limit'
    }
  },

  // NIGERIAN NAVY (BATCH 39 & OFFICERS)
  {
    id: 'navy-batch-39-dates',
    question: 'When is the Nigerian Navy Batch 39 recruitment opening and closing in 2026?',
    answer: 'The Nigerian Navy Batch 39 recruitment portal officially opens on Friday, 2 October 2026 at 12:00 AM and closes on Saturday, 31 October 2026 at 11:59 PM. The registration period spans four full weeks. Candidates must submit before the deadline as late submissions are not allowed.',
    category: 'Nigerian Navy',
    agency: 'Navy',
    keywords: ['navy batch 39 date', 'joinnigeriannavy portal opening', 'navy recruitment closing date 2026', 'batch 39 deadline'],
    relatedLink: {
      label: 'View Navy Batch 39 Dedicated Hub',
      url: '/nigerian-navy-recruitment-2026'
    }
  },
  {
    id: 'navy-batch-39-portal',
    question: 'What is the authentic application portal website for the Nigerian Navy?',
    answer: 'The only verified and authentic portals are www.joinnigeriannavy.gov.ng and www.joinnigeriannavy.com. Do NOT submit personal credentials or payment details on third-party blogs or unofficial web forms masquerading as the Nigerian Navy.',
    category: 'Nigerian Navy',
    agency: 'Navy',
    keywords: ['joinnigeriannavy gov ng', 'official navy portal', 'authentic navy website', 'navy recruitment portal link'],
    relatedLink: {
      label: 'How to Apply for Navy Batch 39 Step-by-Step',
      url: '/how-to-apply-nigerian-navy-batch'
    }
  },
  {
    id: 'navy-photo-upload-rules',
    question: 'Why do applicants get upload errors on the Nigerian Navy recruitment portal?',
    answer: 'The primary cause of upload failure on the Nigerian Navy portal is image dimensions and file size. The portal strictly mandates a recent passport photo with a plain white background, compressed to between 10KB and 20KB, in JPEG/JPG format with dimensions around 200x200 pixels. Uploading photos larger than 20KB or in PNG format causes immediate server timeout errors.',
    category: 'Nigerian Navy',
    agency: 'Navy',
    keywords: ['navy passport photo size', 'joinnigeriannavy upload error', '20kb photo resize', 'white background navy passport'],
    relatedLink: {
      label: 'Navy Batch 39 Application Guide',
      url: '/nigerian-navy-recruitment-2026'
    }
  },
  {
    id: 'navy-bmtc-training-duration',
    question: 'How long does Nigerian Navy basic training last at NNBTS Onne, Rivers State?',
    answer: 'Basic Maritime Training Course (BMTC) for ratings at the Nigerian Navy Basic Training School (NNBTS), Onne, Rivers State lasts approximately 6 months. Recruits undergo seamanship drills, maritime navigation, naval gunnery, firefighting, physical fitness, and naval traditions before passing out as Ordinary Seamen (OS).',
    category: 'Nigerian Navy',
    agency: 'Navy',
    keywords: ['nnbts onne training duration', 'how long is navy training', 'basic maritime training course months', 'passing out parade navy'],
  },
  {
    id: 'navy-height-standards',
    question: 'What is the minimum height required for Nigerian Navy Batch 39 recruitment?',
    answer: 'The statutory minimum height requirement is 1.69 metres (5 feet 6.5 inches) for male applicants, and 1.65 metres (5 feet 5 inches) for female applicants. Candidates with height deficiency are automatically disqualified during physical measurement at the screening venue.',
    category: 'Nigerian Navy',
    agency: 'Navy',
    keywords: ['navy height requirement', 'male height navy', 'female height navy', '5ft 6 inches navy'],
    relatedLink: {
      label: 'Calculate Your Height & Eligibility',
      url: '/nigerian-navy-recruitment-2026'
    }
  },

  // NIGERIAN ARMY (REGULAR RECRUIT & DSSC)
  {
    id: 'army-notification-slip',
    question: 'What is armynotification and how do I print the Nigerian Army screening slip?',
    answer: 'The armynotification platform (recruitment.army.mil.ng or tracking.armynotification.com.ng) is the official verification portal where applicants track application status, verify shortlist inclusion, and download their screening and verification slips. To print, log in with your application number or email and download the PDF slip containing your screening center and assigned date.',
    category: 'Nigerian Army',
    agency: 'Army',
    keywords: ['armynotification', 'print army screening slip', 'recruitment army mil ng tracking', 'army shortlisted pdf'],
    relatedLink: {
      label: 'Print Army Screening Slip (armynotification)',
      url: '/print-army-screening-slip'
    }
  },
  {
    id: 'army-tradesmen-vs-non-tradesmen',
    question: 'What is the difference between Tradesmen and Non-Tradesmen in the Nigerian Army?',
    answer: 'Non-Tradesmen are general duty infantry soldiers whose primary roles are combat, reconnaissance, weapons handling, and tactical field operations (SSCE / WAEC / NECO holders aged 18–22). Tradesmen possess technical or vocational trade certifications (Trade Test 1, 2, or 3, OND, or City & Guilds) in specialized fields such as mechanics, electrical engineering, plumbing, medical lab, nursing, carpentry, or military band (aged 18–26).',
    category: 'Nigerian Army',
    agency: 'Army',
    keywords: ['tradesmen vs non tradesmen', 'army tradesmen qualification', 'trade test army', 'general duty recruit'],
    relatedLink: {
      label: 'Is Nigerian Army Form Out (2026)?',
      url: '/is-nigerian-army-form-out'
    }
  },
  {
    id: 'army-dssc-vs-ssc-vs-recruit',
    question: 'What is the difference between DSSC, SSC, and Regular Recruit in the Nigerian Army?',
    answer: 'Regular Recruits enter as other ranks (Private soldiers) with secondary school or diploma certificates. Short Service Commission (SSC) trains civilian graduates into executive combatant officers (Lieutenant) via NDA. Direct Short Service Commission (DSSC) commissions university graduates into specialized corps (Medical Doctors, Lawyers, Engineers, Chaplains, Accountants) without combat leadership training at NDA.',
    category: 'Nigerian Army',
    agency: 'Army',
    keywords: ['dssc vs recruit', 'direct short service commission', 'army regular recruit vs officer', 'lieutenant rank'],
    relatedLink: {
      label: 'Nigerian Army Salary Structure',
      url: '/army-salary'
    }
  },
  {
    id: 'depot-zaria-training',
    question: 'How long does Depot Nigerian Army Zaria training last for new recruits?',
    answer: 'Enlisted recruits undergo 6 months of rigorous combat, marksmanship, physical conditioning, tactical survival, obstacle crossing, and drill training at Depot Nigerian Army, Zaria, Kaduna State. Successful trainees pass out as Private soldiers (Pte) with weapons qualification.',
    category: 'Nigerian Army',
    agency: 'Army',
    keywords: ['depot zaria training duration', 'how long is army depot training', 'passing out parade zaria', 'recruit training months'],
  },
  {
    id: 'army-state-quota-system',
    question: 'How are state quotas and local government slots determined for Nigerian Army recruitments?',
    answer: 'Under the Federal Character Commission guidelines, recruitment into the Nigerian Armed Forces is shared equally across all 36 States and the Federal Capital Territory (FCT). Typically, every state receives an equal number of recruit slots (e.g. 100 to 150 recruits per state per intake), distributed evenly across its constitutionally recognized Local Government Areas (LGAs). This ensures equal ethnic and regional representation.',
    category: 'Nigerian Army',
    agency: 'Army',
    keywords: ['state quota military', 'local government slots army', 'federal character recruitment', 'how many recruits per state'],
  },

  // NIGERIA POLICE FORCE (NPF)
  {
    id: 'police-constable-requirements',
    question: 'What are the minimum requirements for Nigeria Police Constable (General Duty)?',
    answer: 'Applicants for Police Constable must: (1) Be Nigerian by birth with valid NIN, (2) Be between 18 and 25 years of age, (3) Have at least 5 O-Level credits in WAEC/NECO in max 2 sittings including English Language and Mathematics, (4) Meet height minimums (1.67m for males, 1.64m for females), and (5) Have an expanded chest measurement of not less than 86 cm (34 inches) for males.',
    category: 'Nigeria Police',
    agency: 'Police',
    keywords: ['police constable requirements', 'npf recruitment criteria', 'police age limit', 'chest measurement police'],
    relatedLink: {
      label: 'How to Apply for Police Constable',
      url: '/how-to-apply-police-constable'
    }
  },
  {
    id: 'police-cbt-syllabus',
    question: 'What subjects are tested in the Nigeria Police CBT screening exam?',
    answer: 'The Police Service Commission (PSC) and JAMB conduct a computer-based aptitude test covering four main subjects: English Language (Comprehension, Grammar, and Lexis), Mathematics (Basic arithmetic, algebra, statistics), General Knowledge (Current affairs, Nigerian geography, constitution), and Abstract Reasoning / Verbal Aptitude.',
    category: 'Nigeria Police',
    agency: 'Police',
    keywords: ['police cbt exam subjects', 'jamb police screening', 'past questions police constable', 'npf exam syllabus'],
    relatedLink: {
      label: 'Practice Nigeria Police CBT Past Questions',
      url: '/past-questions/Police'
    }
  },
  {
    id: 'police-salary-constable',
    question: 'How much does a Police Recruit and Police Constable earn monthly in Nigeria?',
    answer: 'Under the Consolidated Police Salary Structure (CONPOSS), a Police Recruit in training receives between ₦30,000 and ₦35,000 monthly allowance. Upon passing out from Police College as a Police Constable (Grade Level 03), take-home pay ranges between ₦84,000 and ₦95,000 monthly, plus duty hazard and uniform allowances.',
    category: 'Nigeria Police',
    agency: 'Police',
    keywords: ['police constable salary 2026', 'npf conposs scale', 'police recruit salary', 'how much police earn'],
    relatedLink: {
      label: 'View Detailed Nigeria Police Salary Scale',
      url: '/police-salary'
    }
  },

  // CDCFIB (IMMIGRATION, NSCDC, FIRE SERVICE, CORRECTIONS)
  {
    id: 'cdcfib-reprint-slips',
    question: 'How do I reprint my CDCFIB application acknowledgment slip and guarantor form?',
    answer: 'To reprint your CDCFIB slip, visit the official portal at cdcfib.career. Click on "Check Status / Reprint Slip", enter your Application Code and registered Phone Number or NIN, and select "Generate Slip". Download the PDF containing your Referee / Guarantor Form, Parent Consent Form, and Verification Slip. Have your guarantor sign and affix a passport photo before screening.',
    category: 'CDCFIB (NIS/NSCDC/Fire)',
    agency: 'CDCFIB',
    keywords: ['cdcfib reprint slip', 'guarantor form download cdcfib', 'immigration slip reprint', 'nscdc acknowledgement slip'],
    relatedLink: {
      label: 'CDCFIB Portal & Application Guide',
      url: '/how-to-apply-cdcfib-portal'
    }
  },
  {
    id: 'cdcfib-agencies-list',
    question: 'What agencies fall under the CDCFIB recruitment portal (cdcfib.career)?',
    answer: 'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) recruits for four federal paramilitary services: (1) Nigeria Immigration Service (NIS), (2) Nigeria Security and Civil Defence Corps (NSCDC), (3) Federal Fire Service (FFS), and (4) Nigerian Correctional Service (NCoS).',
    category: 'CDCFIB (NIS/NSCDC/Fire)',
    agency: 'CDCFIB',
    keywords: ['cdcfib agencies', 'civil defence recruitment', 'immigration service portal', 'federal fire service recruitment'],
  },
  {
    id: 'acceptable-guarantor-rules',
    question: 'Who qualifies as an acceptable guarantor for military and paramilitary recruitment?',
    answer: 'Eligible guarantors must be reputable Nigerian citizens of proven integrity. Standard acceptable guarantors include: (1) Traditional Rulers or Village Heads, (2) Senior Civil Servants not below Grade Level 12 (or equivalent in State/Federal service), (3) Commissioned Military or Police Officers not below Captain / Superintendent, (4) Legal Practitioners / Magistrates, or (5) School Principals. Guarantors must attach an endorsement letter and passport photo.',
    category: 'CDCFIB (NIS/NSCDC/Fire)',
    keywords: ['acceptable guarantor', 'who can sign guarantor form', 'civil service grade 12 guarantor', 'referee form paramilitary'],
  },
  {
    id: 'cdcfib-cbt-format',
    question: 'What is the exam format and cut-off mark for CDCFIB CBT screening?',
    answer: 'The CDCFIB Computer-Based Test usually consists of 50 to 100 multiple-choice questions administered by JAMB or the Board. Subjects include English Language, General Mathematics, Current Affairs, and Agency-Specific Aptitude. The typical cut-off mark for shortlisting to the physical screening stage is 50% to 60%, depending on state competition and candidate volume.',
    category: 'CDCFIB (NIS/NSCDC/Fire)',
    agency: 'CDCFIB',
    keywords: ['cdcfib cbt cut off mark', 'jamb cdcfib test format', 'nis exam past questions', 'nscdc cbt score'],
    relatedLink: {
      label: 'Practice Free CDCFIB CBT Past Questions',
      url: '/cdcfib-cbt-past-questions-free-practice'
    }
  },

  // PHYSICAL & MEDICAL SCREENING
  {
    id: 'tattoos-and-body-scars',
    question: 'Will tattoos, body scars, or tribal marks disqualify me from military or police screening?',
    answer: 'Yes. The Nigerian Army, Navy, Air Force, and Police Force strictly prohibit tattoos, body piercings (for male candidates), and extensive self-inflicted body scars. Tattoos are considered a permanent medical and psychological disqualifier. Light traditional tribal marks are usually tolerated if documented from birth, but modern ornamental tattoos or gang marks will result in immediate disqualification.',
    category: 'Physical & Medical',
    keywords: ['tattoo in military', 'tattoos disqualify army', 'piercings police screening', 'tribal marks military screening'],
    relatedLink: {
      label: 'Check Military Physical Standards',
      url: '/military-physical-standards-height-requirements'
    }
  },
  {
    id: 'flat-feet-and-knock-knees',
    question: 'Can someone with flat feet, knock knees, or bow legs pass military physical screening?',
    answer: 'No. Severe flat feet (pes planus), knock knees (genu valgum), bow legs (genu varum), and bent elbows are statutory physical disqualifications in the Nigerian Armed Forces. During long-distance marches, obstacle courses, and load carrying, these orthopedic conditions cause severe joint failure, stress fractures, and inability to maintain combat stamina.',
    category: 'Physical & Medical',
    keywords: ['flat feet military screening', 'knock knees disqualification', 'bow legs army screening', 'orthopedic defect'],
  },
  {
    id: 'medical-screening-tests',
    question: 'What medical tests are conducted during military and police screening?',
    answer: 'Candidate medical fitness evaluation includes: (1) Cardiovascular check (Blood pressure & ECG), (2) Chest X-ray (Screening for tuberculosis and lung anomalies), (3) Full blood count and genotype (Hb AA/AS; SS is disqualified), (4) Hepatitis B and C viral screening, (5) HIV/AIDS test, (6) Urinalysis & toxicology drug screen, (7) Visual acuity & color blindness test, and (8) Pregnancy test for female candidates.',
    category: 'Physical & Medical',
    keywords: ['medical tests military', 'what blood test in army', 'hepatitis b army disqualification', 'genotype test military'],
    relatedLink: {
      label: 'Read Common Reasons for Medical Disqualification',
      url: '/guides'
    }
  },
  {
    id: 'eye-glasses-vision-rules',
    question: 'Can someone who wears prescription glasses join the Nigerian military or police?',
    answer: 'For regular combatant recruits in the Army, Navy, and Air Force, uncorrected 6/6 vision is strictly mandatory; candidates who cannot read the Snellen eye chart without glasses or who have color blindness (Ishihara test failure) are disqualified. However, university graduates applying for non-combatant DSSC officer corps (such as Legal, Medical, or Accountancy) may be accepted with corrected vision using glasses.',
    category: 'Physical & Medical',
    keywords: ['can i wear glasses in army', 'short sighted military', 'color blindness test navy', 'eye test military screening'],
  },
  {
    id: 'female-pregnancy-screening',
    question: 'Are female candidates tested for pregnancy, and does pregnancy disqualify an applicant?',
    answer: 'Yes. All female candidates undergo mandatory laboratory urine and blood pregnancy screening prior to physical endurance drills and upon reporting to the training depot. Pregnant candidates are strictly disqualified and sent home because the intense physical exertion, tactical obstacle courses, and live-fire drills would pose severe maternal and fetal health risks.',
    category: 'Physical & Medical',
    keywords: ['pregnancy test military', 'can pregnant woman join army', 'female screening pregnancy', 'disqualification pregnant'],
  },

  // SALARY, RANKS & WELFARE
  {
    id: 'conafss-military-salary',
    question: 'What is CONAFSS and how much do Nigerian military recruits earn?',
    answer: 'CONAFSS stands for the Consolidated Armed Forces Salary Structure. Under CONAFSS, enlisted recruits during training receive an upkeep stipend of ₦35,000 to ₦40,000 monthly. Upon passing out as Private (Army), Ordinary Seaman (Navy), or Aircraftman (Air Force), basic salary ranges between ₦78,000 and ₦88,000 monthly, supplemented by operational hazard pay, free kitting, and medical care.',
    category: 'Salary & Ranks',
    keywords: ['conafss salary scale', 'private soldier salary', 'ordinary seaman salary', 'how much army pays recruit'],
    relatedLink: {
      label: 'Explore Complete Army Salary Structure',
      url: '/army-salary'
    }
  },
  {
    id: 'military-vs-paramilitary-salary-matrix',
    question: 'How does military pay compare to paramilitary (Police, Customs, Immigration) salaries?',
    answer: 'The military is compensated under CONAFSS, while the Nigeria Police uses CONPOSS, and paramilitary agencies (Immigration, Customs, Civil Defence) use CONPASS (or special NCS scales for Customs). Customs officers generally receive higher performance bonuses and border hazard allowances, while Armed Forces personnel enjoy superior pension gratuities, free quarters, and combat operational allowances.',
    category: 'Salary & Ranks',
    keywords: ['military vs paramilitary salary', 'customs vs army salary', 'who earns more army or police', 'conpass vs conafss'],
    relatedLink: {
      label: 'Compare Military vs Paramilitary Salaries',
      url: '/salary-comparison'
    }
  },
  {
    id: 'degree-holders-entry-rank',
    question: 'What rank do University degree (B.Sc) and HND holders get upon commissioning?',
    answer: 'Degree holders (B.Sc/BA) commissioned through Direct Short Service Commission (DSSC) enter the Nigerian Army as Second Lieutenant (or substantive Lieutenant for engineers/doctors), in the Nigerian Navy as Sub-Lieutenant, and in the Nigerian Air Force as Flying Officer. In the Nigeria Police, university graduates pass out as Assistant Superintendent of Police (ASP II).',
    category: 'Salary & Ranks',
    keywords: ['bsc rank in army', 'hnd rank in military', 'dssc entry rank', 'asp rank police degree'],
  },

  // CBT EXAMS & SCREENING PREPARATION
  {
    id: 'screening-items-checklist',
    question: 'What essential documents and items should I bring to the screening venue?',
    answer: 'Candidates invited for zonal screening must bring: (1) Printed Application Slip & Guarantor Form, (2) Original and photocopies of Primary & Secondary School Certificates, (3) Local Government Indigene / Origin Certificate, (4) Birth Certificate or National Population Commission Declaration of Age, (5) NIN slip, (6) 4 recent white-background passport photos, and (7) Plain white vest, blue shorts, white canvas shoes, and white socks for physical drills.',
    category: 'CBT & Exams',
    keywords: ['what to bring to army screening', 'items for police screening', 'screening requirements venue', 'white canvas vest military'],
    relatedLink: {
      label: 'View State Screening Venues & Shortlists',
      url: '/shortlist-hub'
    }
  },
  {
    id: 'free-cbt-practice-access',
    question: 'Where can I practice authentic military and paramilitary CBT past questions for free?',
    answer: 'You can practice hundreds of authentic, timed Computer-Based Test (CBT) questions for the Nigerian Army, Nigerian Navy, Nigeria Police Force, and CDCFIB right here on Recruitment Tracker. Our simulator includes live countdown timers, instant score feedback, and detailed answer explanations to help you score in the top 10 percentile.',
    category: 'CBT & Exams',
    keywords: ['free cbt past questions', 'navy past questions free', 'police cbt practice', 'cdcfib aptitude test questions'],
    relatedLink: {
      label: 'Launch Free CBT Practice Simulator',
      url: '/past-questions'
    }
  },
  {
    id: 'shortlist-release-timeline',
    question: 'How long does it take for shortlisted candidates lists to be released after application closes?',
    answer: 'On average, official shortlisted candidate lists are published between 4 and 8 weeks after the online portal closes. The agency board conducts electronic data screening, verifies NIN records, and cross-checks academic credentials before releasing the state-by-state PDF lists and scheduling zonal physical screening dates.',
    category: 'CBT & Exams',
    keywords: ['when will shortlist be out', 'how long to release army shortlist', 'navy batch 39 shortlist date', 'check shortlisted pdf'],
    relatedLink: {
      label: 'Check Shortlist Hub & Verification Status',
      url: '/shortlist-hub'
    }
  }
];

export const searchFAQs = (
  query: string,
  category: FAQCategory = 'All'
): RecruitmentFAQ[] => {
  const cleanQuery = query.trim().toLowerCase();

  return RECRUITMENT_FAQS.filter((faq) => {
    // Category match
    const categoryMatch = category === 'All' || faq.category === category;
    if (!categoryMatch) return false;

    // If query is empty, return all category matches
    if (!cleanQuery) return true;

    // Search query matches question, answer, keywords, or agency
    const questionMatch = faq.question.toLowerCase().includes(cleanQuery);
    const answerMatch = faq.answer.toLowerCase().includes(cleanQuery);
    const agencyMatch = faq.agency?.toLowerCase().includes(cleanQuery);
    const keywordMatch = faq.keywords.some(kw => kw.toLowerCase().includes(cleanQuery));

    return questionMatch || answerMatch || agencyMatch || keywordMatch;
  });
};
