export interface TraineeProgramInfo {
  id: string;
  companyName: string;
  programTitle: string;
  category: 'Banking & Finance' | 'FMCG & Conglomerates' | 'Tech & Engineering' | 'Oil & Gas' | 'Professional Services' | 'Vocational';
  type: 'Graduate Trainee' | 'Management Trainee' | 'Tech Apprenticeship' | 'Vocational On-the-Job';
  durationMonths: number;
  salaryStipendMonthly: string;
  eligibility: {
    minDegree: string;
    maxAge: number;
    nyscRequired: boolean;
    discipline: string;
  };
  selectionStages: string[];
  officialPortal: string;
  status2026: string;
  locations: string[];
}

export interface VocationalTradeInfo {
  trade: string;
  sponsoringBody: string;
  durationMonths: number;
  stipendRange: string;
  certificationsAwarded: string[];
  employmentSectors: string[];
  officialPortal: string;
}

export interface TechTrackInfo {
  track: string;
  coreLanguages: string[];
  topProgramsInNigeria: string[];
  entrySalaryRange: string;
  keyProjectsRequired: string[];
}

export const REAL_TRAINEE_PROGRAMS: TraineeProgramInfo[] = [
  {
    id: 'access-eltp',
    companyName: 'Access Bank Plc',
    programTitle: 'Entry Level Training Programme (ELTP)',
    category: 'Banking & Finance',
    type: 'Graduate Trainee',
    durationMonths: 4,
    salaryStipendMonthly: '₦237,000 – ₦275,000 (Full Pay during Banking School)',
    eligibility: {
      minDegree: "Bachelor's Degree (Min 2:2) or HND (Upper Credit)",
      maxAge: 26,
      nyscRequired: true,
      discipline: 'All Academic Disciplines welcome'
    },
    selectionStages: [
      'Online Aptitude Test (Numerical & Verbal Reasoning)',
      'Video Assessment / HireVue Interview',
      'Documentation & Age Vetting',
      'Banking Academy (Access School of Banking Excellence)',
      'Final Executive Panel Pitch'
    ],
    officialPortal: 'https://www.accessbankplc.com/careers',
    status2026: 'Annual Cohort Recruiting (Q1 and Q3 Windows)',
    locations: ['Lagos (Banking Academy)', 'Nationwide Branch Deployment']
  },
  {
    id: 'gtbank-gtp',
    companyName: 'Guaranty Trust Bank (GTCO)',
    programTitle: 'Graduate Trainee Programme (GTP)',
    category: 'Banking & Finance',
    type: 'Graduate Trainee',
    durationMonths: 6,
    salaryStipendMonthly: '₦250,000 – ₦290,000 / month',
    eligibility: {
      minDegree: "Bachelor's Degree (Min 2:1) from an accredited university",
      maxAge: 26,
      nyscRequired: true,
      discipline: 'Any Discipline with strong analytical acumen'
    },
    selectionStages: [
      'Computer-Based Aptitude Screening (Dragnet Format)',
      'Document & Academic Verification',
      'Assessment Centre (In-tray & Case Study Analysis)',
      'GTBank Training School (4-Month Intensive)',
      'Executive Management Chat'
    ],
    officialPortal: 'https://www.gtbank.com/careers',
    status2026: 'Active Rolling Intakes',
    locations: ['Abeokuta Training Complex', 'Lagos HQ']
  },
  {
    id: 'bat-gmtp',
    companyName: 'British American Tobacco (BAT)',
    programTitle: 'Global Graduate Management Trainee Programme',
    category: 'FMCG & Conglomerates',
    type: 'Management Trainee',
    durationMonths: 18,
    salaryStipendMonthly: '₦550,000 – ₦750,000 + Global Benefits',
    eligibility: {
      minDegree: "Bachelor's Degree (Min 2:1) or Master's Degree",
      maxAge: 28,
      nyscRequired: true,
      discipline: 'Operations, Marketing, Supply Chain, Human Resources, Finance'
    },
    selectionStages: [
      'Online Cognitive & Situational Judgement Tests',
      'Automated Digital Interview (Pymetrics & Video)',
      'Virtual/Onsite Assessment Centre (Group Business Case)',
      'Global Leadership Academy Masterclass (UK/Regional)',
      'Executive Board Final Presentation'
    ],
    officialPortal: 'https://careers.bat.com',
    status2026: 'Annual Fast-Track Leadership Intake',
    locations: ['Ibadan Factory', 'Lagos Head Office']
  },
  {
    id: 'unilever-uflp',
    companyName: 'Unilever Nigeria',
    programTitle: 'Unilever Future Leaders Programme (UFLP)',
    category: 'FMCG & Conglomerates',
    type: 'Management Trainee',
    durationMonths: 36,
    salaryStipendMonthly: '₦500,000 – ₦700,000 + Mobility Allowances',
    eligibility: {
      minDegree: "Bachelor's Degree (Min 2:1)",
      maxAge: 27,
      nyscRequired: true,
      discipline: 'Customer Development, Supply Chain, Finance, Marketing'
    },
    selectionStages: [
      'Profile Screening & Game-Based Assessment',
      'Digital Video Interview',
      'Unilever Discovery Centre (Day-in-the-Life Business Simulation)',
      '3-Year Rotational Leadership Track'
    ],
    officialPortal: 'https://careers.unilever.com',
    status2026: 'Competitive Annual Selection',
    locations: ['Lagos (Oregun)', 'Agbara Manufacturing Plant']
  },
  {
    id: 'dangote-mtp',
    companyName: 'Dangote Group',
    programTitle: 'Dangote Management Trainee Scheme',
    category: 'FMCG & Conglomerates',
    type: 'Management Trainee',
    durationMonths: 12,
    salaryStipendMonthly: '₦350,000 – ₦450,000 + Housing/Subsidized Meals',
    eligibility: {
      minDegree: "B.Sc/B.Eng (Min 2:1) in Engineering, Business, or Physical Sciences",
      maxAge: 27,
      nyscRequired: true,
      discipline: 'Engineering, Logistics, Supply Chain, Accounting'
    },
    selectionStages: [
      'SHL / Dragnet CBT Aptitude Test',
      'Technical & Management Competency Interview',
      'Dangote Academy Technical Orientation',
      'Cross-Unit Rotational Plant Immersion'
    ],
    officialPortal: 'https://careers.dangote.com',
    status2026: 'Active Nationwide Plant Cohorts',
    locations: ['Lekki Refinery', 'Obajana Cement Plant', 'Ibese', 'Sinoma Units']
  },
  {
    id: 'pwc-graduate-associate',
    companyName: 'PricewaterhouseCoopers (PwC Nigeria)',
    programTitle: 'Graduate Associate Trainee Scheme',
    category: 'Professional Services',
    type: 'Graduate Trainee',
    durationMonths: 24,
    salaryStipendMonthly: '₦320,000 – ₦420,000 + ICAN/ACCA Exam Sponsorship',
    eligibility: {
      minDegree: "Bachelor's Degree (Min 2:1) in any academic field",
      maxAge: 26,
      nyscRequired: true,
      discipline: 'All disciplines welcome with strong numerical aptitude'
    },
    selectionStages: [
      'Online Psychometric & Critical Thinking Tests',
      'PwC Assessment Centre & Case Study Presentation',
      'Partner / Director Final Interview',
      'Professional Certification Track (ICAN/ACCA/CFA)'
    ],
    officialPortal: 'https://www.pwc.com/ng/en/careers.html',
    status2026: 'Annual Graduate Recruitment (Q2 Assessment Window)',
    locations: ['Lagos (Landmark HQ)', 'Abuja Office', 'Port Harcourt']
  },
  {
    id: 'alx-software-trainee',
    companyName: 'ALX Africa / Sand Technologies',
    programTitle: 'Software Engineering Traineeship & Fellowship',
    category: 'Tech & Engineering',
    type: 'Tech Apprenticeship',
    durationMonths: 12,
    salaryStipendMonthly: 'Sponsored Full Scholarship + Job Placement Support ($500–$1,500 remote entry)',
    eligibility: {
      minDegree: 'High School Diploma (SSCE) or University Degree',
      maxAge: 35,
      nyscRequired: false,
      discipline: 'Open to all technical and non-technical backgrounds'
    },
    selectionStages: [
      'Cognitive Aptitude & English Proficiency Assessment',
      'Foundations Sprint (Self-Paced Intensive Coding)',
      'Backend/Frontend Specialization Tracks',
      'Portfolio Capstone Development & Employer Matching'
    ],
    officialPortal: 'https://www.alxafrica.com',
    status2026: 'Quarterly Cohorts Open for Registration',
    locations: ['Remote Online', 'ALX Hubs in Lagos (Costain & Victoria Island)']
  },
  {
    id: 'interswitch-eta',
    companyName: 'Interswitch Group',
    programTitle: 'Engineering Trainee Academy (ETA)',
    category: 'Tech & Engineering',
    type: 'Tech Apprenticeship',
    durationMonths: 6,
    salaryStipendMonthly: '₦300,000 – ₦400,000 / month',
    eligibility: {
      minDegree: "B.Sc / HND (Min 2:1 / Upper Credit) in Computer Science, Electrical/Electronic Engineering, or IT",
      maxAge: 26,
      nyscRequired: true,
      discipline: 'Computer Science, Software Engineering, IT'
    },
    selectionStages: [
      'Online Coding Challenge (Algorithms & Data Structures)',
      'Technical Interview with Senior Fintech Architects',
      '6-Month Intensive Bootcamp at Interswitch Academy',
      'Integration into Live Payment Core Systems'
    ],
    officialPortal: 'https://www.interswitchgroup.com/careers',
    status2026: 'Annual Engineering Academy Intake',
    locations: ['Lagos (Oko Awo, Victoria Island)']
  }
];

export const VOCATIONAL_TRADES: VocationalTradeInfo[] = [
  {
    trade: 'Industrial Electrical & Instrumentation Technicians',
    sponsoringBody: 'Flour Mills of Nigeria (FMN) / Dangote Academy',
    durationMonths: 18,
    stipendRange: '₦90,000 – ₦140,000 + Tools & PPE Allowance',
    certificationsAwarded: ['City & Guilds London', 'NABTEB Advanced Craft Certificate', 'Plant Safety Certificate'],
    employmentSectors: ['Manufacturing', 'Food Processing', 'Power Distribution', 'Refineries'],
    officialPortal: 'https://fmnplc.com/careers'
  },
  {
    trade: 'Mechanical Fitting, Machining & Heavy Equipment Maintenance',
    sponsoringBody: 'Julius Berger Apprenticeship Program',
    durationMonths: 24,
    stipendRange: '₦100,000 – ₦150,000 + Full Health Insurance',
    certificationsAwarded: ['German Dual Vocational Training (AHK Certification)', 'Trade Test 1, 2, 3 (Federal Ministry of Labour)'],
    employmentSectors: ['Civil Construction', 'Mining', 'Heavy Logistics', 'Port Operations'],
    officialPortal: 'https://www.julius-berger.com/careers'
  },
  {
    trade: 'Automotive Mechatronics & Diagnostic Systems',
    sponsoringBody: 'National Industrial Skills Development Programme (ITF-NISDP)',
    durationMonths: 6,
    stipendRange: '₦45,000 – ₦70,000 + Free Modern Starter Toolkits',
    certificationsAwarded: ['ITF National Vocational Certificate', 'NABTEB Modular Certificate'],
    employmentSectors: ['Automobile Dealerships', 'Fleet Maintenance', 'Private Auto Tech Entrepreneurship'],
    officialPortal: 'https://www.itf.gov.ng'
  },
  {
    trade: 'Underwater & Structural High-Pressure Welding (SMAW/GTAW)',
    sponsoringBody: 'Petroleum Technology Development Fund (PTDF) & NCDMB',
    durationMonths: 12,
    stipendRange: '₦120,000 – ₦180,000 / month',
    certificationsAwarded: ['American Welding Society (AWS D1.1)', 'ISO 9606 Certification', 'BOSIET Offshore Safety'],
    employmentSectors: ['Offshore Oil & Gas Fabrication', 'Shipyards', 'Pipeline Engineering'],
    officialPortal: 'https://ncdmb.gov.ng'
  }
];

export const TECH_TRAINEE_TRACKS: TechTrackInfo[] = [
  {
    track: 'Full-Stack Web Development',
    coreLanguages: ['TypeScript', 'React.js', 'Next.js', 'Node.js / Express', 'PostgreSQL / MongoDB'],
    topProgramsInNigeria: ['ALX Africa', 'Decagon Institute', 'Semicolon Africa', 'Andela Learning Community'],
    entrySalaryRange: '₦250,000 – ₦550,000/mo (Local) | $800 – $2,500/mo (Remote International)',
    keyProjectsRequired: ['Production E-Commerce with Payment Gateway (Paystack/Flutterwave)', 'Real-time Collaborative App with WebSockets', 'Full Authentication & Role-Based Access Dashboard']
  },
  {
    track: 'Backend & Fintech Systems Engineering',
    coreLanguages: ['Java (Spring Boot)', 'Python (FastAPI / Django)', 'Go (Golang)', 'Redis', 'Kafka', 'Docker'],
    topProgramsInNigeria: ['Interswitch Engineering Academy', 'Moniepoint Graduate Track', 'Paystack Tech Associate'],
    entrySalaryRange: '₦350,000 – ₦700,000/mo',
    keyProjectsRequired: ['High-throughput Ledger / Transaction Engine with Idempotency', 'RESTful API with Rate Limiting & JWT Vetting', 'Microservices Architecture with Message Queues']
  },
  {
    track: 'Data Engineering & Analytics',
    coreLanguages: ['Python', 'SQL (Advanced Window Functions)', 'Apache Spark', 'BigQuery', 'dbt', 'Airflow'],
    topProgramsInNigeria: ['DataCamp Scholarships', '3MTT National Cohort', 'Konga / Jumia Data Fellowships'],
    entrySalaryRange: '₦300,000 – ₦600,000/mo',
    keyProjectsRequired: ['Automated End-to-End ETL Pipeline ingesting real-world API data into Data Warehouse', 'Interactive Business Intelligence Dashboard in Power BI / Tableau', 'Predictive ML Model for Customer Churn / Fraud Detection']
  }
];
