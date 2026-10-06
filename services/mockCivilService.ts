export interface CivilServiceCommissionInfo {
  id: string;
  name: string;
  shortName: string;
  jurisdiction: 'Federal' | 'State' | 'Regional';
  officialPortal: string;
  headquarters: string;
  applicationMode: 'Online Portal' | 'Gazetted Calls' | 'Physical Submission';
  typicalEntryLevels: string[];
  status2026: string;
}

export interface CivilServiceExamModule {
  subject: string;
  percentage: number;
  questionCount: number;
  keyTopics: string[];
  recommendedPreparation: string;
}

export interface GradeLevelScale {
  level: string;
  cadre: string;
  minQualification: string;
  roleExamples: string[];
  estimatedMonthlyGrossCONPSS: string;
  careerProgression: string;
}

export const COMMISSIONS_DIRECTORY: CivilServiceCommissionInfo[] = [
  {
    id: 'fcsc-federal',
    name: 'Federal Civil Service Commission (FCSC)',
    shortName: 'FCSC Nigeria',
    jurisdiction: 'Federal',
    officialPortal: 'https://fedcivilservice.gov.ng',
    headquarters: '4, Abidjan Street, Wuse Zone 3, Abuja, FCT',
    applicationMode: 'Online Portal',
    typicalEntryLevels: ['GL 08 (Degree/HND)', 'GL 09 (Master/Law/Medical)', 'GL 07 (ND/RN)'],
    status2026: 'Cyclical MDA Replacements & Technical Pool Openings'
  },
  {
    id: 'lagos-lasrec',
    name: 'Lagos State Civil Service Commission (LASREC)',
    shortName: 'Lagos CSC',
    jurisdiction: 'State',
    officialPortal: 'https://jobs.lagosstate.gov.ng',
    headquarters: 'Block 1, Secretariat, Alausa, Ikeja, Lagos',
    applicationMode: 'Online Portal',
    typicalEntryLevels: ['GL 08 (Administrative/Planning Officers)', 'GL 07 (Technical/Accounts)'],
    status2026: 'Active E-Recruitment for Health, Education & Core Administration'
  },
  {
    id: 'oyo-csc',
    name: 'Oyo State Civil Service Commission',
    shortName: 'Oyo CSC',
    jurisdiction: 'State',
    officialPortal: 'https://jobportal.oyostate.gov.ng',
    headquarters: 'Secretariat Complex, Agodi, Ibadan, Oyo State',
    applicationMode: 'Online Portal',
    typicalEntryLevels: ['GL 08 (Education, Health, Agriculture, Admin)'],
    status2026: 'Periodic Cadre Replacements & TESCOM Screenings'
  },
  {
    id: 'rivers-csc',
    name: 'Rivers State Civil Service Commission',
    shortName: 'Rivers CSC',
    jurisdiction: 'State',
    officialPortal: 'https://riversstate.gov.ng',
    headquarters: 'State Secretariat Complex, Port Harcourt, Rivers State',
    applicationMode: 'Gazetted Calls',
    typicalEntryLevels: ['GL 07 - GL 09 (General Service Cadres)'],
    status2026: 'Statewide Employment Screening Drives'
  },
  {
    id: 'kano-csc',
    name: 'Kano State Civil Service Commission',
    shortName: 'Kano CSC',
    jurisdiction: 'State',
    officialPortal: 'https://kanostate.gov.ng',
    headquarters: 'Audu Bako Secretariat, Kano State',
    applicationMode: 'Online Portal',
    typicalEntryLevels: ['GL 07 (Technical)', 'GL 08 (Graduate Officers)'],
    status2026: 'Civil Service Rationalization & Health/Education Cohorts'
  },
  {
    id: 'edo-csc',
    name: 'Edo State Civil Service Commission',
    shortName: 'Edo CSC / John Odigie-Oyegun Academy',
    jurisdiction: 'State',
    officialPortal: 'https://edogov.org',
    headquarters: 'Sapele Road, Benin City, Edo State',
    applicationMode: 'Online Portal',
    typicalEntryLevels: ['GL 08 (Public Service Transformation Cadres)'],
    status2026: 'Continuous Institutional Modernization Recruiting'
  }
];

export const EXAM_MODULES: CivilServiceExamModule[] = [
  {
    subject: 'Public Service Rules (PSR) & Bureaucratic Ethics',
    percentage: 30,
    questionCount: 30,
    keyTopics: [
      'Appointments, Probation, and Confirmation rules',
      'Disciplinary procedures (Queries, Interdiction, Dismissal)',
      'Leaves, Allowances, and Medical Boards',
      'The 8-Year Tenure Policy for Directors and Permanent Secretaries',
      'Code of Conduct and Anti-Corruption provisions'
    ],
    recommendedPreparation: 'Study the Revised 2021/2023 Gazette of the Federal Public Service Rules.'
  },
  {
    subject: 'General Knowledge & Nigerian Current Affairs',
    percentage: 25,
    questionCount: 25,
    keyTopics: [
      'Constitutional history and 1999 Constitution (as amended)',
      'Structure of Nigerian Ministries, Departments & Agencies (MDAs)',
      'ECOWAS, African Union, and United Nations treaties',
      'Recent socioeconomic reforms, fiscal policies, and national landmarks',
      'Organs of Government (Executive, Legislature, Judiciary)'
    ],
    recommendedPreparation: 'Review contemporary Nigerian history, federal budget priorities, and national gazettes.'
  },
  {
    subject: 'Use of English & Administrative Communication',
    percentage: 25,
    questionCount: 25,
    keyTopics: [
      'Comprehension and analytical reading',
      'Official letter formats, Memoranda, and Minute writing conventions',
      'Grammar, Sentence correction, and Lexis/Structure',
      'Synonyms, Antonyms, and Idiomatic expressions'
    ],
    recommendedPreparation: 'Practice reading comprehension and standard civil service minute-drafting formats.'
  },
  {
    subject: 'Quantitative & Logical Reasoning / Data Interpretation',
    percentage: 20,
    questionCount: 20,
    keyTopics: [
      'Basic statistical analysis (Percentages, Ratios, Averages, Tabular data)',
      'Logical syllogisms, Critical thinking, and Problem solving',
      'Financial Regulations (FR) basics (Vouchers, Audits, Procurement thresholds)'
    ],
    recommendedPreparation: 'Practice standard civil service CBT quantitative past papers and financial rule fundamentals.'
  }
];

export const GRADE_LEVEL_SCALES: GradeLevelScale[] = [
  {
    level: 'GL 03 - GL 06',
    cadre: 'Junior / Sub-Clerical Cadre',
    minQualification: 'SSCE / WAEC / NECO / OND / ND',
    roleExamples: ['Clerical Assistant', 'Driver / Dispatch', 'Office Security Officer', 'Library Assistant'],
    estimatedMonthlyGrossCONPSS: '₦70,000 – ₦95,000 + Statutory Allowances',
    careerProgression: 'Advance to Senior Clerical and conversion to Executive Cadre upon acquiring higher diploma/degree.'
  },
  {
    level: 'GL 07',
    cadre: 'Executive / Technical Cadre',
    minQualification: 'National Diploma (ND) Upper Credit or Registered Nurse (RN)',
    roleExamples: ['Executive Officer (General Duties)', 'Higher Health Tech', 'Assistant Technical Officer'],
    estimatedMonthlyGrossCONPSS: '₦85,000 – ₦115,000 + Allowances',
    careerProgression: 'Promotes across Senior Executive Officer (GL 08) up to Chief Executive Officer (GL 14).'
  },
  {
    level: 'GL 08',
    cadre: 'Senior / Professional Officer Cadre (Graduate Entry)',
    minQualification: "Bachelor's Degree (B.Sc / B.A - Min 2nd Class Lower) or HND",
    roleExamples: ['Administrative Officer II', 'Planning Officer II', 'State Counsel II', 'Accountant II', 'Engineer II'],
    estimatedMonthlyGrossCONPSS: '₦105,000 – ₦150,000 (Higher in Revenue Agencies like NUPRC/FIRS)',
    careerProgression: 'Standard graduate entry level. Eligible for advancement every 3 years upon passing promotion exams.'
  },
  {
    level: 'GL 09 - GL 10',
    cadre: 'Senior Professional / Specialist Entry',
    minQualification: "Master's Degree, Law (BL), Medicine (MBBS), Pharmacy, or PhD",
    roleExamples: ['Administrative Officer I', 'Medical Officer II', 'Senior State Counsel', 'Senior Research Officer'],
    estimatedMonthlyGrossCONPSS: '₦140,000 – ₦210,000 + Specialty Duty Allowances',
    careerProgression: 'Step stone into mid-management positions across federal and state line ministries.'
  },
  {
    level: 'GL 12 - GL 14',
    cadre: 'Middle & Senior Management Cadre',
    minQualification: 'Substantive Officers with 9–15+ years post-qualification and ASCON/Promotion clearance',
    roleExamples: ['Principal Officer (GL 12)', 'Assistant Chief Officer (GL 13)', 'Chief Officer (GL 14)'],
    estimatedMonthlyGrossCONPSS: '₦220,000 – ₦380,000 + Departmental Responsibility Allowances',
    careerProgression: 'Heads units and sections; sits for Directorate-level promotion screening.'
  },
  {
    level: 'GL 15 - GL 17',
    cadre: 'Directorate Level (Top Civil Service Hierarchy)',
    minQualification: 'Confirmed Senior Officers via Competitive Federal/State Directorate Exams',
    roleExamples: ['Assistant Director (GL 15)', 'Deputy Director (GL 16)', 'Director (GL 17)'],
    estimatedMonthlyGrossCONPSS: '₦420,000 – ₦750,000+ + Official transport, hazard & executive packages',
    careerProgression: 'Subject to the 8-year cumulative tenure ceiling under Revised Public Service Rules (PSR).'
  }
];
