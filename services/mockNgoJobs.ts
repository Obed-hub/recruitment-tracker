export interface NgoJob {
  id: string;
  title: string;
  organization: string;
  logoUrl?: string;
  location: string;
  state: string;
  country: string;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Hybrid' | 'Fellowship' | 'Internship';
  experienceLevel: 'Entry-level' | 'Mid-level' | 'Senior-level' | 'Executive';
  sector: 'Public Health' | 'Humanitarian Aid' | 'Education' | 'MEAL / Data' | 'Finance & Admin' | 'Protection & Human Rights' | 'Nutrition & Food Security';
  salaryRange: string;
  deadline: string;
  portalUrl: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}

export const REAL_NGO_JOBS: NgoJob[] = [
  {
    id: 'unicef-wash-officer-2026',
    title: 'WASH Officer (National Officer - NOA)',
    organization: 'UNICEF Nigeria',
    location: 'Maiduguri, Borno State',
    state: 'Borno',
    country: 'Nigeria',
    type: 'Full-time',
    experienceLevel: 'Entry-level',
    sector: 'Humanitarian Aid',
    salaryRange: '₦850,000 - ₦1,200,000 / month (UN NO-A Scale)',
    deadline: '2026-11-15',
    portalUrl: 'https://jobs.unicef.org',
    description: 'UNICEF is seeking a qualified National Officer to support the planning, implementation, monitoring, and evaluation of Water, Sanitation, and Hygiene (WASH) humanitarian interventions in conflict-affected communities in Northeast Nigeria.',
    requirements: [
      'University degree in Civil Engineering, Public Health, Environmental Science, or related field.',
      'Minimum of 2 years of professional experience in WASH project implementation.',
      'Fluency in English and working knowledge of Hausa or Kanuri is an asset.',
      'Strong knowledge of emergency response protocols.'
    ],
    responsibilities: [
      'Provide technical support in the rehabilitation and construction of community water schemes and sanitation facilities.',
      'Facilitate hygiene promotion campaigns across IDP camps.',
      'Collaborate with State Ministries of Water Resources and RUWASSA.'
    ],
    postedDate: '2026-10-01'
  },
  {
    id: 'irc-meal-officer-abuja-2026',
    title: 'Monitoring, Evaluation, Accountability & Learning (MEAL) Officer',
    organization: 'International Rescue Committee (IRC)',
    location: 'Abuja (HQ with field visits)',
    state: 'Abuja (FCT)',
    country: 'Nigeria',
    type: 'Full-time',
    experienceLevel: 'Mid-level',
    sector: 'MEAL / Data',
    salaryRange: '₦600,000 - ₦850,000 / month + Medical & Life Insurance',
    deadline: '2026-11-20',
    portalUrl: 'https://rescue.csod.com/ux/ats/careersite/1/home',
    description: 'The MEAL Officer will lead data collection, database management, and field monitoring for USAID and ECHO-funded health and protection grants across Nigeria field offices.',
    requirements: [
      'Bachelor’s degree in Statistics, Economics, Public Health, Computer Science, or Social Sciences.',
      'At least 3 years direct experience in non-profit M&E systems, KoboToolbox, CommCare, and Power BI.',
      'Demonstrated experience conducting quantitative and qualitative baseline and endline surveys.'
    ],
    responsibilities: [
      'Design digital data collection instruments on Kobo Collect and ODK.',
      'Conduct routine data quality audits (DQAs) at health facilities.',
      'Maintain the country program indicator tracking matrix.'
    ],
    postedDate: '2026-10-02'
  },
  {
    id: 'msf-medical-doctor-2026',
    title: 'Medical Doctor (Emergency Trauma & Pediatrics)',
    organization: 'Médecins Sans Frontières (MSF / Doctors Without Borders)',
    location: 'Jigawa / Zamfara',
    state: 'Zamfara',
    country: 'Nigeria',
    type: 'Contract',
    experienceLevel: 'Mid-level',
    sector: 'Public Health',
    salaryRange: '₦900,000 - ₦1,350,000 / month + Hazard Allowance',
    deadline: '2026-11-30',
    portalUrl: 'https://msf.org/careers',
    description: 'Provide clinical consultations, emergency pediatric care, malnutrition management, and emergency response in MSF-supported inpatient therapeutic feeding centres (ITFC).',
    requirements: [
      'MBBS or equivalent medical degree with valid registration with the Medical and Dental Council of Nigeria (MDCN).',
      'Minimum of 2 years post-NYSC clinical experience in pediatrics or emergency room settings.',
      'Willingness to live and work in remote and demanding field conditions.'
    ],
    responsibilities: [
      'Manage severe acute malnutrition with medical complications in children under 5.',
      'Ensure strict adherence to MSF clinical protocols and hygiene standards.',
      'Supervise national nursing staff and clinical officers.'
    ],
    postedDate: '2026-10-03'
  },
  {
    id: 'fhi360-finance-grants-officer-2026',
    title: 'Finance & Grants Officer',
    organization: 'FHI 360',
    location: 'Lagos, Nigeria',
    state: 'Lagos',
    country: 'Nigeria',
    type: 'Full-time',
    experienceLevel: 'Mid-level',
    sector: 'Finance & Admin',
    salaryRange: '₦650,000 - ₦950,000 / month',
    deadline: '2026-11-18',
    portalUrl: 'https://fhi.wd1.myworkdayjobs.com/FHI_360_External_Career_Portal',
    description: 'Manage financial compliance, sub-grant management, budget tracking, and donor reporting for PEPFAR/USAID funded HIV/TB sustainability grants.',
    requirements: [
      'BSc/HND in Accounting, Finance, or Business Administration. Professional certification (ICAN/ACCA) preferred.',
      'Minimum 3 to 5 years experience managing US Government (USG) or Global Fund grant finances.',
      'Proficiency in QuickBooks or Deltek Costpoint financial software.'
    ],
    responsibilities: [
      'Review sub-recipient financial liquidation reports and conduct monthly reconciliations.',
      'Ensure strict compliance with USAID 2 CFR 200 financial regulations.',
      'Prepare statutory tax deductions (WHT, PAYE, Pension) remittances.'
    ],
    postedDate: '2026-10-04'
  },
  {
    id: 'save-children-nutrition-coordinator-2026',
    title: 'Nutrition Project Coordinator',
    organization: 'Save the Children International',
    location: 'Damaturu, Yobe State',
    state: 'Yobe',
    country: 'Nigeria',
    type: 'Full-time',
    experienceLevel: 'Senior-level',
    sector: 'Nutrition & Food Security',
    salaryRange: '₦1,100,000 - ₦1,600,000 / month + Field Hazard Subsidies',
    deadline: '2026-11-25',
    portalUrl: 'https://www.savethechildren.net/careers',
    description: 'Lead the strategic execution of community-based management of acute malnutrition (CMAM) and infant and young child feeding (IYCF) programs across vulnerable LGAs.',
    requirements: [
      'Master’s degree or BSc in Human Nutrition, Dietetics, or Public Health.',
      'Minimum of 5 years management experience in emergency nutrition programs in Northern Nigeria.',
      'Proven track record of donor engagement with BHA and FCDO.'
    ],
    responsibilities: [
      'Oversee the technical quality and operational rollout of CMAM and IYCF-E initiatives.',
      'Manage program budgets, staffing, and supply chain for therapeutic foods (RUTF).',
      'Represent Save the Children in Nutrition Sector coordination meetings.'
    ],
    postedDate: '2026-10-04'
  },
  {
    id: 'remote-unv-digital-comms-2026',
    title: 'Remote Digital Communications & Content Specialist',
    organization: 'UN Volunteers / UNDP Global',
    location: 'Remote (Work from Anywhere in Nigeria)',
    state: 'Remote',
    country: 'Nigeria / Global',
    type: 'Remote',
    experienceLevel: 'Entry-level',
    sector: 'Education',
    salaryRange: '$800 - $1,400 / month (USD equivalent)',
    deadline: '2026-11-28',
    portalUrl: 'https://www.unv.org/become-volunteer',
    description: 'Support international development campaigns through digital storytelling, newsletter curation, social media campaign analytics, and web content publishing.',
    requirements: [
      'Degree in Communications, Journalism, English, Media Studies, or Marketing.',
      'Strong portfolio in content creation, SEO copywriting, Canva, and social media analytics.',
      'Ability to collaborate asynchronously across international time zones.'
    ],
    responsibilities: [
      'Draft case studies showcasing community resilience and sustainable development goals (SDGs).',
      'Manage content calendars across Twitter/X, LinkedIn, and Medium.',
      'Monitor digital engagement metrics and optimize audience reach.'
    ],
    postedDate: '2026-10-05'
  },
  {
    id: 'remote-grants-writer-aid-2026',
    title: 'Remote Grants Proposal Writer & Researcher',
    organization: 'Action Against Hunger (Remote Support Unit)',
    location: 'Remote (Nigeria & West Africa)',
    state: 'Remote',
    country: 'Nigeria',
    type: 'Remote',
    experienceLevel: 'Mid-level',
    sector: 'Humanitarian Aid',
    salaryRange: '₦700,000 - ₦1,050,000 / month (Remote Contract)',
    deadline: '2026-12-05',
    portalUrl: 'https://actionagainsthunger.org/careers',
    description: 'Conduct donor prospect research, draft technical narratives, and develop logframes for humanitarian emergency response proposals.',
    requirements: [
      'Minimum of 3 years demonstrable grant writing experience for EU, USAID, GAC, or UN funding mechanisms.',
      'Exceptional analytical writing and proofreading skills.',
      'Strong understanding of humanitarian response plans and cluster coordination.'
    ],
    responsibilities: [
      'Coordinate with field teams to gather qualitative baseline indicators for project concepts.',
      'Draft responsive, compliant grant applications under strict deadlines.',
      'Maintain the organization donor proposal tracker and calendar.'
    ],
    postedDate: '2026-10-05'
  },
  {
    id: 'crs-entry-fellowship-2026',
    title: 'Humanitarian Leadership Graduate Fellow (2026-2027 Cohort)',
    organization: 'Catholic Relief Services (CRS)',
    location: 'Abuja / Maiduguri / Sokoto',
    state: 'Abuja (FCT)',
    country: 'Nigeria',
    type: 'Fellowship',
    experienceLevel: 'Entry-level',
    sector: 'Humanitarian Aid',
    salaryRange: '₦450,000 - ₦600,000 / month (Full Fellowship Stipend)',
    deadline: '2026-12-15',
    portalUrl: 'https://www.crs.org/about/careers',
    description: 'A 12-month accelerated fellowship for high-potential Nigerian university graduates to gain rotational field experience in emergency response, procurement, MEAL, and program management.',
    requirements: [
      'First-class or Second-class upper degree (BSc/BA) in any discipline completed within the last 3 years.',
      'Completed NYSC by start of fellowship.',
      'Demonstrated commitment to social justice and humanitarian causes.'
    ],
    responsibilities: [
      'Rotate across Program Management, MEAL, and Supply Chain departments.',
      'Lead community engagement assessments in target intervention LGAs.',
      'Complete structured leadership and international development modules.'
    ],
    postedDate: '2026-10-05'
  }
];

export const getNgoJobs = async (): Promise<NgoJob[]> => {
  return new Promise((resolve) => {
    resolve(REAL_NGO_JOBS);
  });
};

export const getNgoJobById = async (id: string): Promise<NgoJob | null> => {
  return new Promise((resolve) => {
    const job = REAL_NGO_JOBS.find(j => j.id === id) || null;
    resolve(job);
  });
};
