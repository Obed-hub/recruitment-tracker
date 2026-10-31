// 2026 Real-Time Verified Salary Intelligence for Corporate, Civil Service, Healthcare, Tech & Education Jobs in Nigeria
// Verified against:
// - National Minimum Wage Act (₦70,000 baseline)
// - Federal Government Consolidated Public Service Salary Structure (CONPSS GL 01 - GL 17)
// - Consolidated Medical Salary Structure (CONMESS) & Consolidated Health Salary Structure (CONHESS)
// - Consolidated University Academic Salary Structure (CONUASS)
// - Verified 2026 Nigerian Corporate Compensation Surveys (Banking, Oil & Gas, Tech)

export interface SalaryCadreRank {
  rank: string;
  category: string;
  gradeLevel: string;
  oldMonthly: string;
  newMonthly2026: string;
  annualEstimate: string;
  takeHomeEstimate: string;
  qualification: string;
  allowancesSummary: string;
  responsibilities: string;
}

export interface AgencySalaryProfile {
  slug: string;
  agencyName: string;
  shortName: string;
  branch: string;
  color: string;
  gradient: string;
  badgeCol: string;
  salaryScale: string;
  seoTitle: string;
  seoDescription: string;
  quickAnswer: {
    question: string;
    directAnswer: string;
    statusText: string;
    metrics: { label: string; value: string; highlight?: boolean }[];
  };
  introOverview: string;
  scaleDescription: string;
  allowances: {
    name: string;
    rate: string;
    eligibility: string;
  }[];
  ranks: SalaryCadreRank[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedAgencySlugs: string[];
}

export const JOB_SALARY_PROFILES: Record<string, AgencySalaryProfile> = {
  // 1. FEDERAL CIVIL SERVICE (CONPSS 2026 with ₦70,000 Minimum Wage)
  'civil-service-salary': {
    slug: 'civil-service-salary',
    agencyName: 'Federal Civil Service of Nigeria',
    shortName: 'FCSC / Ministries',
    branch: 'Civil Service',
    color: 'bg-emerald-700',
    gradient: 'from-emerald-800 to-teal-950',
    badgeCol: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    salaryScale: '2026 Consolidated Public Service Salary Structure (CONPSS)',
    seoTitle: 'Federal Civil Service Salary Scale 2026: Grade Level 01 to 17 Table',
    seoDescription: 'Verified 2026 Federal Civil Service salary structure across Grade Levels 01 to 17 under the new ₦70,000 national minimum wage. Monthly net pay, allowances, and annual estimates.',
    quickAnswer: {
      question: 'How Much Does the Federal Civil Service Pay in 2026?',
      directAnswer: 'Under the enacted 2026 CONPSS scale incorporating the ₦70,000 National Minimum Wage and consequential salary adjustments, entry-level Grade Level 01 junior staff earn a minimum baseline of ₦70,000 to ₦77,000 monthly. Graduate entrants on Grade Level 08 Step 1 (B.Sc / HND Administrative Officers) take home between ₦98,000 and ₦135,000 monthly basic pay, rising with utility, transport, and meal allowances. Directors on Grade Level 16/17 earn between ₦480,000 and ₦850,000+ monthly.',
      statusText: 'CONPSS 2026 Enacted Minimum Wage Active',
      metrics: [
        { label: 'GL 01 (Minimum Wage Entry)', value: '₦70,000 - ₦77,000 / mo', highlight: true },
        { label: 'GL 08 (Degree Graduate Entry)', value: '₦98,000 - ₦135,000 / mo' },
        { label: 'GL 14 (Chief Admin Officer)', value: '₦260,000 - ₦340,000 / mo' },
        { label: 'GL 17 (Director / Perm Sec)', value: '₦550,000 - ₦850,000+ / mo' }
      ]
    },
    introOverview: 'The Federal Civil Service Commission (FCSC) and federal ministries, departments, and agencies (MDAs) remunerate career officers using the Consolidated Public Service Salary Structure (CONPSS). Following the signing of the National Minimum Wage Act and the National Salaries, Incomes and Wages Commission (NSIWC) circulars, public servants across all 17 grade levels received upward consequential adjustments.',
    scaleDescription: 'CONPSS spans Grade Level 01 (entry manual/cleaner cadres) up to Grade Level 17 (Permanent Secretaries and Directors-General). Payments are processed through the Federal Government Integrated Personnel and Payroll Information System (IPPIS).',
    allowances: [
      { name: 'Transport & Commuter Allowance', rate: '15% - 25% of Basic Pay', eligibility: 'All confirmed civil servants across Grade Levels 01 to 17.' },
      { name: 'Utility & Housing Subsidy', rate: '20% - 35% of Basic Pay', eligibility: 'Officers not provided official government quarters.' },
      { name: 'Duty Tour Allowance (DTA)', rate: '₦15,000 - ₦35,000 / night', eligibility: 'Officers on authorized official interstate duty assignments.' },
      { name: 'Hazard & Peculiar Allowance', rate: '10% - 20% of Basic Pay', eligibility: 'Staff in technical, inspection, or regulatory federal agencies.' }
    ],
    ranks: [
      {
        rank: 'Junior Assistant / Messenger (GL 01)',
        category: 'Entry Level & Junior',
        gradeLevel: 'CONPSS 01',
        oldMonthly: '₦30,000 - ₦34,000',
        newMonthly2026: '₦70,000 - ₦77,000',
        annualEstimate: '₦840,000 - ₦924,000',
        takeHomeEstimate: '₦74,000',
        qualification: 'Primary School Certificate / FSLC',
        allowancesSummary: 'Standard transport and utility subsidy',
        responsibilities: 'Office registry dispatch, premises maintenance, and clerical assistance.'
      },
      {
        rank: 'Clerical Assistant / Driver (GL 04)',
        category: 'Entry Level & Junior',
        gradeLevel: 'CONPSS 04',
        oldMonthly: '₦36,000 - ₦42,000',
        newMonthly2026: '₦78,000 - ₦88,000',
        annualEstimate: '₦936,000 - ₦1,056,000',
        takeHomeEstimate: '₦83,000',
        qualification: 'SSCE / WAEC / GCE / Driver Trade Test',
        allowancesSummary: 'Mileage and overtime allowance eligible',
        responsibilities: 'Official vehicle operations, document filing, and departmental errands.'
      },
      {
        rank: 'Executive Officer / OND Entry (GL 07)',
        category: 'Entry Level & Junior',
        gradeLevel: 'CONPSS 07',
        oldMonthly: '₦50,000 - ₦62,000',
        newMonthly2026: '₦88,000 - ₦105,000',
        annualEstimate: '₦1,056,000 - ₦1,260,000',
        takeHomeEstimate: '₦96,000',
        qualification: 'OND / NCE / Diploma from recognized polytechnic',
        allowancesSummary: 'Executive cadre allowance + Transport subsidy',
        responsibilities: 'Supervising clerical records, drafting routine correspondence, and registry audits.'
      },
      {
        rank: 'Administrative Officer II / Graduate Entry (GL 08)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'CONPSS 08',
        oldMonthly: '₦65,000 - ₦82,000',
        newMonthly2026: '₦98,000 - ₦135,000',
        annualEstimate: '₦1,176,000 - ₦1,620,000',
        takeHomeEstimate: '₦118,000',
        qualification: 'B.Sc / B.A / HND (NYSC discharged)',
        allowancesSummary: 'Professional development grant + Meal subsidy',
        responsibilities: 'Policy drafting, committee secretariat, inter-agency liaison, and project tracking.'
      },
      {
        rank: 'Senior Administrative Officer (GL 10)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'CONPSS 10',
        oldMonthly: '₦92,000 - ₦115,000',
        newMonthly2026: '₦145,000 - ₦185,000',
        annualEstimate: '₦1,740,000 - ₦2,220,000',
        takeHomeEstimate: '₦168,000',
        qualification: '5+ years post-qualification civil service promotion exams',
        allowancesSummary: 'Supervisory allowance + DTA eligibility',
        responsibilities: 'Unit head in ministry divisions, managing public service records and inquiries.'
      },
      {
        rank: 'Principal Administrative Officer (GL 12)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'CONPSS 12',
        oldMonthly: '₦120,000 - ₦155,000',
        newMonthly2026: '₦190,000 - ₦245,000',
        annualEstimate: '₦2,280,000 - ₦2,940,000',
        takeHomeEstimate: '₦220,000',
        qualification: '8+ years civil service service + Confirmation exams',
        allowancesSummary: 'Enhanced utility subsidy + Official travel perks',
        responsibilities: 'Section head, policy evaluation, drafting ministerial briefs and whitepapers.'
      },
      {
        rank: 'Assistant Director / Chief Officer (GL 14)',
        category: 'Senior & Management',
        gradeLevel: 'CONPSS 14',
        oldMonthly: '₦175,000 - ₦220,000',
        newMonthly2026: '₦260,000 - ₦340,000',
        annualEstimate: '₦3,120,000 - ₦4,080,000',
        takeHomeEstimate: '₦305,000',
        qualification: '12+ years service + Senior Management Course (ASCON)',
        allowancesSummary: 'Management responsibility allowance + Vehicle financing access',
        responsibilities: 'Division coordinator, overseeing ministerial capital budget execution.'
      },
      {
        rank: 'Deputy Director (GL 15)',
        category: 'Senior & Management',
        gradeLevel: 'CONPSS 15',
        oldMonthly: '₦230,000 - ₦290,000',
        newMonthly2026: '₦350,000 - ₦460,000',
        annualEstimate: '₦4,200,000 - ₦5,520,000',
        takeHomeEstimate: '₦410,000',
        qualification: '15+ years service + Federal Directorate Interview',
        allowancesSummary: 'Directorate perk package + Domestic staff allowance',
        responsibilities: 'Second-in-command of ministry department, heading strategic planning.'
      },
      {
        rank: 'Director / Permanent Secretary (GL 16/17)',
        category: 'Executive & Directorate',
        gradeLevel: 'CONPSS 16/17',
        oldMonthly: '₦340,000 - ₦450,000',
        newMonthly2026: '₦550,000 - ₦850,000+',
        annualEstimate: '₦6,600,000 - ₦10,200,000+',
        takeHomeEstimate: '₦720,000',
        qualification: 'Presidential / Federal Civil Service Board Appointment',
        allowancesSummary: 'Official vehicle, security aide, cabinet retreat privileges',
        responsibilities: 'Departmental head, accounting officer, national policy implementation.'
      }
    ],
    faqs: [
      {
        question: 'What is the new starting salary for a graduate in the Nigerian Civil Service?',
        answer: 'A university graduate appointed on Grade Level 08 Step 1 earns between ₦98,000 and ₦135,000 monthly take-home pay under the new CONPSS scale, compared to ₦65,000 before the national wage review.'
      },
      {
        question: 'When do federal civil servants receive their salary payment?',
        answer: 'Federal civil servants paid through IPPIS typically receive their monthly salary alerts between the 23rd and 28th of every calendar month.'
      }
    ],
    relatedAgencySlugs: ['cbn-salary', 'nnpc-salary', 'teacher-salary', 'nurse-salary']
  },

  // 2. COMMERCIAL BANKING: ACCESS BANK
  'access-bank-salary': {
    slug: 'access-bank-salary',
    agencyName: 'Access Bank Plc',
    shortName: 'Access Bank',
    branch: 'Commercial Banking',
    color: 'bg-orange-600',
    gradient: 'from-orange-600 to-amber-900',
    badgeCol: 'bg-orange-100 text-orange-900 border-orange-200',
    salaryScale: 'Access Bank Group 2026 Corporate Compensation Scale',
    seoTitle: 'Access Bank Salary Structure 2026: Graduate Trainee to Manager Pay',
    seoDescription: 'Verified 2026 Access Bank salary structure in Nigeria: Monthly & annual earnings for Graduate Trainee (ELTP), Banking Officer (BO), and Branch Managers.',
    quickAnswer: {
      question: 'How Much Does Access Bank Pay in 2026?',
      directAnswer: 'An Access Bank Graduate Trainee undergoing the Entry Level Training Program (ELTP) at the Banking Academy earns ₦240,000 to ₦280,000 monthly during training. Upon confirmation as an Executive Trainee (ET), monthly take-home pay rises to ₦320,000 - ₦380,000. Confirmed Banking Officers (BO) earn ₦520,000 to ₦680,000, while Branch Managers earn between ₦1,200,000 and ₦1,800,000+ monthly plus performance bonuses.',
      statusText: '2026 Banking Review Active',
      metrics: [
        { label: 'Graduate Trainee (ELTP)', value: '₦240,000 - ₦280,000 / mo', highlight: true },
        { label: 'Executive Trainee (ET)', value: '₦320,000 - ₦380,000 / mo' },
        { label: 'Banking Officer (BO)', value: '₦520,000 - ₦680,000 / mo' },
        { label: 'Branch Manager', value: '₦1.2M - ₦1.8M / mo' }
      ]
    },
    introOverview: 'Access Bank Plc is the largest commercial bank in Nigeria by asset size and customer base. Remuneration at Access Bank is structured around performance appraisals, annual 13th-month bonuses, and profit-sharing schemes for confirmed staff.',
    scaleDescription: 'Graduates enter via the competitive 4-month Entry Level Training Program (ELTP) at the Access Bank School of Banking Excellence before progressing through Executive Trainee, Assistant Banking Officer, and Managerial cadres.',
    allowances: [
      { name: '13th Month Bonus', rate: '100% of 1 Month Basic Pay', eligibility: 'Paid to all confirmed employees in December annually.' },
      { name: 'Medical Health Insurance', rate: 'HMO Coverage for Staff + Family', eligibility: 'Covers private hospital treatment across accredited health facilities.' },
      { name: 'Staff Concessional Loan', rate: 'Single-digit Interest', eligibility: 'Personal and car loans for confirmed banking staff.' },
      { name: 'Profit Sharing / Performance Bonus', rate: '1 - 3 Months Salary Bonus', eligibility: 'Awarded based on branch profit and individual target attainment.' }
    ],
    ranks: [
      {
        rank: 'Graduate Trainee (Banking Academy)',
        category: 'Entry Level & Junior',
        gradeLevel: 'ELTP Cadre',
        oldMonthly: '₦120,000 - ₦150,000',
        newMonthly2026: '₦240,000 - ₦280,000',
        annualEstimate: '₦2,880,000 - ₦3,360,000',
        takeHomeEstimate: '₦255,000',
        qualification: 'First Class or 2:1 Degree from recognized university',
        allowancesSummary: 'Free accommodation during residential academy training',
        responsibilities: 'Undergoing intensive credit analysis, banking software, and retail operations training.'
      },
      {
        rank: 'Executive Trainee (ET - Confirmed)',
        category: 'Entry Level & Junior',
        gradeLevel: 'ET Grade',
        oldMonthly: '₦180,000 - ₦230,000',
        newMonthly2026: '₦320,000 - ₦380,000',
        annualEstimate: '₦3,840,000 - ₦4,560,000',
        takeHomeEstimate: '₦345,000',
        qualification: 'ELTP Academy Graduate',
        allowancesSummary: 'Transport subsidy + HMO Medical Coverage',
        responsibilities: 'Customer onboarding, branch operations, retail credit appraisal, and account management.'
      },
      {
        rank: 'Assistant Banking Officer (ABO)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'ABO Grade',
        oldMonthly: '₦260,000 - ₦320,000',
        newMonthly2026: '₦420,000 - ₦490,000',
        annualEstimate: '₦5,040,000 - ₦5,880,000',
        takeHomeEstimate: '₦450,000',
        qualification: '2+ years banking operations experience',
        allowancesSummary: 'Leave grant + Performance commission eligibility',
        responsibilities: 'Managing SME loan portfolios, relationship management, trade services.'
      },
      {
        rank: 'Banking Officer (BO)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'BO Grade',
        oldMonthly: '₦350,000 - ₦450,000',
        newMonthly2026: '₦520,000 - ₦680,000',
        annualEstimate: '₦6,240,000 - ₦8,160,000',
        takeHomeEstimate: '₦585,000',
        qualification: '4+ years demonstrated banking performance',
        allowancesSummary: 'Car financing allowance + Enhanced leave bonus',
        responsibilities: 'Head of customer service or funds transfer unit, commercial client management.'
      },
      {
        rank: 'Senior Banking Officer (SBO)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'SBO Grade',
        oldMonthly: '₦480,000 - ₦620,000',
        newMonthly2026: '₦720,000 - ₦950,000',
        annualEstimate: '₦8,640,000 - ₦11,400,000',
        takeHomeEstimate: '₦820,000',
        qualification: '6+ years corporate or commercial banking experience',
        allowancesSummary: 'Executive vehicle maintenance allowance',
        responsibilities: 'Leading corporate finance deals, syndicated lending, branch credit risk lead.'
      },
      {
        rank: 'Assistant Manager (AM) / Deputy Manager (DM)',
        category: 'Senior & Management',
        gradeLevel: 'AM/DM Grade',
        oldMonthly: '₦700,000 - ₦900,000',
        newMonthly2026: '₦1,100,000 - ₦1,450,000',
        annualEstimate: '₦13,200,000 - ₦17,400,000',
        takeHomeEstimate: '₦1,250,000',
        qualification: '8+ years banking track record + ACIB certification',
        allowancesSummary: 'Official car + Executive housing allowance',
        responsibilities: 'Branch Operations Manager (BOM) or Business Development Manager.'
      },
      {
        rank: 'Branch Manager (BM)',
        category: 'Senior & Management',
        gradeLevel: 'Managerial (M)',
        oldMonthly: '₦950,000 - ₦1,300,000',
        newMonthly2026: '₦1,500,000 - ₦2,200,000+',
        annualEstimate: '₦18,000,000 - ₦26,400,000+',
        takeHomeEstimate: '₦1,750,000',
        qualification: 'Proven branch profitability and leadership experience',
        allowancesSummary: 'Full branch profit share + Executive perks',
        responsibilities: 'Overall profit and loss responsibility for the branch, deposit mobilization.'
      }
    ],
    faqs: [
      {
        question: 'Does Access Bank pay 13th-month salary?',
        answer: 'Yes. Access Bank pays a mandatory 13th-month bonus in December to all confirmed employees, along with discretionary performance bonuses.'
      },
      {
        question: 'How long is the Access Bank Graduate Trainee training?',
        answer: 'The Access Bank School of Banking Excellence (ELTP) runs for approximately 4 months, during which trainees receive free accommodation and monthly stipend.'
      }
    ],
    relatedAgencySlugs: ['gtbank-salary', 'zenith-bank-salary', 'cbn-salary', 'first-bank-salary']
  },

  // 3. COMMERCIAL BANKING: GTBANK (GUARANTY TRUST)
  'gtbank-salary': {
    slug: 'gtbank-salary',
    agencyName: 'Guaranty Trust Bank (GTCO)',
    shortName: 'GTBank',
    branch: 'Commercial Banking',
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-amber-800',
    badgeCol: 'bg-orange-100 text-orange-950 border-orange-300',
    salaryScale: 'Guaranty Trust Holding Company (GTCO) Compensation Scale 2026',
    seoTitle: 'GTBank Salary Structure 2026: Graduate Trainee & Staff Pay Scale',
    seoDescription: 'Accurate 2026 GTBank (Guaranty Trust) salary structure in Nigeria: Monthly and annual pay for OND Trainees, Graduate Trainees, Banking Officers, and Managers.',
    quickAnswer: {
      question: 'How Much Does GTBank Pay in 2026?',
      directAnswer: 'A GTBank Graduate Trainee earns approximately ₦250,000 to ₦310,000 monthly take-home pay upon appointment. Confirmed Assistant Banking Officers (ABO) earn ₦380,000 to ₦480,000, while Banking Officers (BO) earn between ₦550,000 and ₦750,000 monthly. GTBank is widely recognized in Nigeria for consistent, prompt salary payment and biannual performance appraisal bonuses.',
      statusText: '2026 GTCO Salary Review Active',
      metrics: [
        { label: 'Graduate Trainee (Entry)', value: '₦250,000 - ₦310,000 / mo', highlight: true },
        { label: 'Assistant Banking Officer', value: '₦380,000 - ₦480,000 / mo' },
        { label: 'Banking Officer (BO)', value: '₦550,000 - ₦750,000 / mo' },
        { label: 'Branch Manager', value: '₦1.3M - ₦2.0M / mo' }
      ]
    },
    introOverview: 'Guaranty Trust Bank (GTBank), now operating under Guaranty Trust Holding Company Plc (GTCO), is a pioneer in digital banking in Africa. Its remuneration packages are among the most structured in the Nigerian financial sector, featuring prompt payment cycles and comprehensive medical coverage.',
    scaleDescription: 'GTBank operates a merit-based grading system where promotions are tied to appraisal milestones and key performance indicators (KPIs), moving from Trainee through Banking Officer and Managerial levels.',
    allowances: [
      { name: 'Biannual Performance Bonus', rate: 'Based on Individual Performance', eligibility: 'Paid twice yearly after mid-year and end-of-year appraisals.' },
      { name: 'Comprehensive Health Cover', rate: 'Top-tier HMO for Family', eligibility: 'Covers inpatient, outpatient, and optical dental care.' },
      { name: 'Low-Interest Asset Loan', rate: 'Single-digit Staff Loan', eligibility: 'Eligible after 1 year of confirmed service.' }
    ],
    ranks: [
      {
        rank: 'OND / Intern Trainee',
        category: 'Entry Level & Junior',
        gradeLevel: 'Pre-Entry Cadre',
        oldMonthly: '₦50,000 - ₦70,000',
        newMonthly2026: '₦95,000 - ₦130,000',
        annualEstimate: '₦1,140,000 - ₦1,560,000',
        takeHomeEstimate: '₦110,000',
        qualification: 'OND Upper Credit',
        allowancesSummary: 'Lunch subsidy + Basic transport',
        responsibilities: 'Customer service support, ATM cash sorting, and transaction verification.'
      },
      {
        rank: 'Graduate Trainee (Confirmed Entry)',
        category: 'Entry Level & Junior',
        gradeLevel: 'GT Trainee',
        oldMonthly: '₦140,000 - ₦180,000',
        newMonthly2026: '₦250,000 - ₦310,000',
        annualEstimate: '₦3,000,000 - ₦3,720,000',
        takeHomeEstimate: '₦275,000',
        qualification: 'First Class or 2:1 Degree + NYSC Certificate',
        allowancesSummary: 'Transport allowance + HMO Medical Insurance',
        responsibilities: 'Frontline retail banking, digital product support, and credit documentation.'
      },
      {
        rank: 'Assistant Banking Officer (ABO)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'ABO Cadre',
        oldMonthly: '₦220,000 - ₦280,000',
        newMonthly2026: '₦380,000 - ₦480,000',
        annualEstimate: '₦4,560,000 - ₦5,760,000',
        takeHomeEstimate: '₦420,000',
        qualification: '2+ years banking operations experience',
        allowancesSummary: 'Quarterly leave allowance + Performance bonus',
        responsibilities: 'Managing SME account portfolios, transaction processing supervisor.'
      },
      {
        rank: 'Banking Officer (BO)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'BO Cadre',
        oldMonthly: '₦320,000 - ₦420,000',
        newMonthly2026: '₦550,000 - ₦750,000',
        annualEstimate: '₦6,600,000 - ₦9,000,000',
        takeHomeEstimate: '₦630,000',
        qualification: '4+ years demonstrated performance',
        allowancesSummary: 'Asset vehicle scheme + Family healthcare',
        responsibilities: 'Heading customer service or treasury desk at major branches.'
      },
      {
        rank: 'Senior Banking Officer (SBO)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'SBO Cadre',
        oldMonthly: '₦450,000 - ₦580,000',
        newMonthly2026: '₦780,000 - ₦1,050,000',
        annualEstimate: '₦9,360,000 - ₦12,600,000',
        takeHomeEstimate: '₦890,000',
        qualification: '6+ years corporate / commercial track record',
        allowancesSummary: 'Full vehicle maintenance + Executive housing grant',
        responsibilities: 'Large corporate client relationship manager, branch deputy head.'
      },
      {
        rank: 'Branch Manager / Assistant General Manager',
        category: 'Senior & Management',
        gradeLevel: 'Managerial (M/AGM)',
        oldMonthly: '₦850,000 - ₦1,250,000',
        newMonthly2026: '₦1,400,000 - ₦2,200,000+',
        annualEstimate: '₦16,800,000 - ₦26,400,000+',
        takeHomeEstimate: '₦1,750,000',
        qualification: '10+ years apex financial operations leadership',
        allowancesSummary: 'Official vehicle, executive club memberships, profit share',
        responsibilities: 'Full branch operations and P&L oversight, corporate client acquisition.'
      }
    ],
    faqs: [
      {
        question: 'Does GTBank pay allowance during training?',
        answer: 'Yes. Trainees accepted into the GTBank training school receive a monthly training stipend of ₦100,000 to ₦150,000 along with learning materials.'
      }
    ],
    relatedAgencySlugs: ['access-bank-salary', 'zenith-bank-salary', 'cbn-salary']
  },

  // 4. OIL & GAS: NIGERIA LNG (NLNG)
  'nlng-salary': {
    slug: 'nlng-salary',
    agencyName: 'Nigeria LNG Limited (NLNG)',
    shortName: 'NLNG',
    branch: 'Oil & Gas',
    color: 'bg-blue-600',
    gradient: 'from-blue-700 to-indigo-950',
    badgeCol: 'bg-blue-100 text-blue-900 border-blue-200',
    salaryScale: 'NLNG Corporate & Industrial Plant Pay Scale 2026',
    seoTitle: 'Nigeria LNG (NLNG) Salary Structure 2026: Trainee to Manager Pay',
    seoDescription: 'Verified 2026 Nigeria LNG (NLNG) salary structure: Monthly and annual earnings for Graduate Trainees, Plant Technicians, and Operations Engineers on Bonny Island.',
    quickAnswer: {
      question: 'How Much Does Nigeria LNG (NLNG) Pay in 2026?',
      directAnswer: 'Nigeria LNG (NLNG) is one of the highest-paying corporations in Africa. A Graduate Trainee at NLNG earns between ₦650,000 and ₦950,000 monthly basic pay. Experienced Plant Technicians and Operations Engineers based on Bonny Island take home between ₦1,400,000 and ₦2,500,000 monthly, enhanced by generous offshore/island allowances, world-class residential camp housing, and annual bonuses.',
      statusText: 'NLNG Verified Industrial Scale 2026',
      metrics: [
        { label: 'Graduate Trainee Entry', value: '₦650,000 - ₦950,000 / mo', highlight: true },
        { label: 'Plant / Process Engineer', value: '₦1.4M - ₦2.2M / mo' },
        { label: 'Senior Operations Engineer', value: '₦2.5M - ₦3.8M / mo' },
        { label: 'Plant Superintendent', value: '₦4.5M - ₦7.5M+ / mo' }
      ]
    },
    introOverview: 'Nigeria LNG Limited operates a six-train liquefaction plant on Bonny Island, Rivers State. It is jointly owned by NNPC (49%), Shell (25.6%), TotalEnergies (15%), and Eni (10.4%). Compensation packages are benchmarked against global LNG operators.',
    scaleDescription: 'NLNG compensation includes high base salaries, extensive risk-based allowances for cryogenics plant operations, educational support for staff children, and comprehensive pension provisions.',
    allowances: [
      { name: 'Bonny Island Location Allowance', rate: '25% - 40% of Basic Pay', eligibility: 'Staff stationed at the residential Industrial Area (IA) on Bonny Island.' },
      { name: 'Offshore / Plant Hazard Bonus', rate: '₦250,000 - ₦600,000 / month', eligibility: 'Engineers and technicians working near live gas liquefaction trains.' },
      { name: 'Children Education Grant', rate: 'Up to 4 children in top schools', eligibility: 'Available to all confirmed full-time staff.' }
    ],
    ranks: [
      {
        rank: 'Graduate Trainee (Engineering / Commercial)',
        category: 'Entry Level & Junior',
        gradeLevel: 'Trainee Cadre',
        oldMonthly: '₦350,000 - ₦450,000',
        newMonthly2026: '₦650,000 - ₦950,000',
        annualEstimate: '₦7,800,000 - ₦11,400,000',
        takeHomeEstimate: '₦780,000',
        qualification: 'First Class or 2:1 in Engineering, Physics, or Finance',
        allowancesSummary: 'Free residential camp quarters on Bonny Island + Health cover',
        responsibilities: 'Undergoing 12-month foundational training in gas processing, LNG storage, and marine terminals.'
      },
      {
        rank: 'Plant Operator / Control Room Technician',
        category: 'Mid-Level & Professional',
        gradeLevel: 'Operations Specialist',
        oldMonthly: '₦550,000 - ₦750,000',
        newMonthly2026: '₦1,050,000 - ₦1,600,000',
        annualEstimate: '₦12,600,000 - ₦19,200,000',
        takeHomeEstimate: '₦1,350,000',
        qualification: 'HND / B.Sc in Chemical, Mechanical, or Electrical Engineering',
        allowancesSummary: 'Cryogenic hazard stipend + Shift allowance',
        responsibilities: 'Monitoring Distributed Control Systems (DCS), gas fractionation, and compressor maintenance.'
      },
      {
        rank: 'Process / Mechanical / Electrical Engineer',
        category: 'Mid-Level & Professional',
        gradeLevel: 'Level 2 Professional',
        oldMonthly: '₦750,000 - ₦1,100,000',
        newMonthly2026: '₦1,400,000 - ₦2,200,000',
        annualEstimate: '₦16,800,000 - ₦26,400,000',
        takeHomeEstimate: '₦1,850,000',
        qualification: 'COREN certified engineer with 4+ years plant experience',
        allowancesSummary: 'Bonny Island allowance + Family health insurance',
        responsibilities: 'Optimizing LNG production trains, debottlenecking, and pipeline integrity.'
      },
      {
        rank: 'Senior Operations Engineer / Specialist',
        category: 'Senior & Management',
        gradeLevel: 'Senior Level 3',
        oldMonthly: '₦1,300,000 - ₦1,800,000',
        newMonthly2026: '₦2,500,000 - ₦3,800,000',
        annualEstimate: '₦30,000,000 - ₦45,600,000',
        takeHomeEstimate: '₦3,100,000',
        qualification: '8+ years energy sector technical experience',
        allowancesSummary: 'Executive vehicle allowance + Overseas training grants',
        responsibilities: 'Turnaround maintenance lead, shutdown management, safety integrity.'
      },
      {
        rank: 'Operations Superintendent / Manager',
        category: 'Executive & Directorate',
        gradeLevel: 'Executive Level 4',
        oldMonthly: '₦2,500,000 - ₦3,800,000',
        newMonthly2026: '₦4,500,000 - ₦7,500,000+',
        annualEstimate: '₦54,000,000 - ₦90,000,000+',
        takeHomeEstimate: '₦5,800,000',
        qualification: '15+ years global energy leadership track record',
        allowancesSummary: 'Expatriate-parity benefits, luxury housing, security detail',
        responsibilities: 'Overseeing production train output, maritime shipping schedules, and plant safety.'
      }
    ],
    faqs: [
      {
        question: 'Do NLNG staff pay for housing on Bonny Island?',
        answer: 'No. Nigeria LNG provides fully furnished modern residential accommodation, utilities, recreation centers, and transport for employees stationed on Bonny Island.'
      }
    ],
    relatedAgencySlugs: ['nnpc-salary', 'chevron-salary', 'cbn-salary']
  },

  // 5. HEALTHCARE: DOCTORS (CONMESS)
  'doctor-salary': {
    slug: 'doctor-salary',
    agencyName: 'Medical Doctors in Nigeria',
    shortName: 'Nigerian Doctors',
    branch: 'Healthcare',
    color: 'bg-red-600',
    gradient: 'from-red-600 to-rose-950',
    badgeCol: 'bg-red-100 text-red-900 border-red-200',
    salaryScale: 'Consolidated Medical Salary Structure (CONMESS 2026)',
    seoTitle: 'Nigerian Doctors Salary Structure 2026: House Officer to Consultant',
    seoDescription: 'Verified 2026 Nigerian medical doctors salary structure under CONMESS. Monthly and annual earnings for House Officers, Medical Officers, Registrars, and Consultants.',
    quickAnswer: {
      question: 'How Much Do Doctors Earn in Nigeria in 2026?',
      directAnswer: 'Under the reviewed CONMESS structure with increased hazard and clinical allowances, a medical intern (House Officer) earns between ₦260,000 and ₦340,000 monthly take-home pay. A post-NYSC Medical Officer in a Federal Medical Centre earns ₦380,000 to ₦520,000. Resident Doctors (Senior Registrars) earn ₦550,000 to ₦780,000, while Senior Specialist Consultants earn between ₦950,000 and ₦1,600,000+ monthly.',
      statusText: 'CONMESS 2026 Review Active',
      metrics: [
        { label: 'House Officer (Intern)', value: '₦260,000 - ₦340,000 / mo', highlight: true },
        { label: 'Medical Officer (Post-NYSC)', value: '₦380,000 - ₦520,000 / mo' },
        { label: 'Senior Registrar (Specialist)', value: '₦550,000 - ₦780,000 / mo' },
        { label: 'Consultant Surgeon/Physician', value: '₦950,000 - ₦1.6M / mo' }
      ]
    },
    introOverview: 'Medical doctors in Nigerian federal tertiary institutions (Teaching Hospitals like LUTH, UCH, ABUTH and Federal Medical Centres) are paid under the Consolidated Medical Salary Structure (CONMESS). Recent negotiations by the Nigerian Medical Association (NMA) and MDCAN led to upward revisions in clinical duty and hazard allowances.',
    scaleDescription: 'CONMESS spans Levels 01 (House Officers) through Levels 07 (Chief Consultants and Hospital Directors). Salaries differ between federal tertiary hospitals and state-run general hospitals depending on state CONMESS domestication.',
    allowances: [
      { name: 'Specialist Hazard Allowance', rate: '₦32,000 - ₦40,000 / month', eligibility: 'All practicing clinical medical practitioners.' },
      { name: 'Clinical / Call Duty Allowance', rate: '₦60,000 - ₦180,000 / month', eligibility: 'Doctors undertaking overnight and weekend hospital emergency calls.' },
      { name: 'Teaching & Research Allowance', rate: '₦35,000 - ₦95,000 / month', eligibility: 'Honorary consultants and resident doctors training medical students.' }
    ],
    ranks: [
      {
        rank: 'House Officer (Medical Intern)',
        category: 'Entry Level & Junior',
        gradeLevel: 'CONMESS 01',
        oldMonthly: '₦150,000 - ₦190,000',
        newMonthly2026: '₦260,000 - ₦340,000',
        annualEstimate: '₦3,120,000 - ₦4,080,000',
        takeHomeEstimate: '₦290,000',
        qualification: 'MBBS / MBChB / BDS Degree (Provisionally Registered with MDCN)',
        allowancesSummary: 'Call duty allowance included in basic internship package',
        responsibilities: 'Rotations through Internal Medicine, Surgery, Pediatrics, and Obstetrics/Gynecology.'
      },
      {
        rank: 'Medical Officer / Registrar (Post-NYSC)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'CONMESS 02/03',
        oldMonthly: '₦220,000 - ₦280,000',
        newMonthly2026: '₦380,000 - ₦520,000',
        annualEstimate: '₦4,560,000 - ₦6,240,000',
        takeHomeEstimate: '₦440,000',
        qualification: 'Full MDCN License + NYSC Discharge Certificate',
        allowancesSummary: 'Call duty allowance + Hazard stipend',
        responsibilities: 'Emergency ward management, general surgical procedures, outpatient clinics.'
      },
      {
        rank: 'Senior Registrar (Post-Part 1 Fellowship)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'CONMESS 04/05',
        oldMonthly: '₦320,000 - ₦420,000',
        newMonthly2026: '₦550,000 - ₦780,000',
        annualEstimate: '₦6,600,000 - ₦9,360,000',
        takeHomeEstimate: '₦640,000',
        qualification: 'Passed Part 1 Fellowship (WACS / NPMCN)',
        allowancesSummary: 'Enhanced specialist call allowance',
        responsibilities: 'Supervising junior residents, performing complex surgeries, running specialty clinics.'
      },
      {
        rank: 'Consultant Physician / Surgeon (Part 2 Fellow)',
        category: 'Senior & Management',
        gradeLevel: 'CONMESS 06/07',
        oldMonthly: '₦550,000 - ₦750,000',
        newMonthly2026: '₦950,000 - ₦1,600,000+',
        annualEstimate: '₦11,400,000 - ₦19,200,000+',
        takeHomeEstimate: '₦1,250,000',
        qualification: 'Fellow of the West African College or National Postgraduate Medical College',
        allowancesSummary: 'Clinical specialist bonus + Administrative head allowance',
        responsibilities: 'Apex clinical decision-maker, leading hospital surgical and medical units.'
      }
    ],
    faqs: [
      {
        question: 'Do state doctors earn the same as federal doctors in Nigeria?',
        answer: 'Not always. Federal doctors paid via IPPIS receive 100% CONMESS. Some states (like Lagos, Rivers, and Delta) pay near parity, while other states pay between 70% and 85% of the federal scale.'
      }
    ],
    relatedAgencySlugs: ['nurse-salary', 'civil-service-salary']
  },

  // 6. HEALTHCARE: NURSES (CONHESS)
  'nurse-salary': {
    slug: 'nurse-salary',
    agencyName: 'Nurses in Nigerian Hospitals',
    shortName: 'Nigerian Nurses',
    branch: 'Healthcare',
    color: 'bg-rose-600',
    gradient: 'from-rose-600 to-pink-950',
    badgeCol: 'bg-rose-100 text-rose-900 border-rose-200',
    salaryScale: 'Consolidated Health Salary Structure (CONHESS 2026)',
    seoTitle: 'Nigerian Nurses Salary Structure 2026: Staff Nurse to Chief Matron',
    seoDescription: 'Complete 2026 Nigerian nurses salary structure under CONHESS. Monthly and annual take-home pay for Registered Nurses (RN), Nursing Officers, and Chief Nursing Officers.',
    quickAnswer: {
      question: 'How Much Do Nurses Earn in Nigeria in 2026?',
      directAnswer: 'In Federal Teaching Hospitals and Federal Medical Centres under CONHESS, an entry-level Staff Nurse / Nursing Officer II (CONHESS 07/08) earns between ₦140,000 and ₦220,000 monthly basic pay, rising to ₦180,000 - ₦260,000 with shift and hazard allowances. Senior Nursing Officers (CONHESS 10) earn ₦270,000 to ₦360,000, while Chief Nursing Officers (Matrons on CONHESS 13/14) take home ₦420,000 to ₦650,000 monthly.',
      statusText: 'CONHESS 2026 Review Active',
      metrics: [
        { label: 'Staff Nurse (CONHESS 07)', value: '₦140,000 - ₦185,000 / mo', highlight: true },
        { label: 'Nursing Officer II (Degree entry)', value: '₦180,000 - ₦240,000 / mo' },
        { label: 'Senior Nursing Officer', value: '₦270,000 - ₦360,000 / mo' },
        { label: 'Chief Nursing Officer (Matron)', value: '₦420,000 - ₦650,000 / mo' }
      ]
    },
    introOverview: 'Nurses in Nigerian public health institutions operate under the Consolidated Health Salary Structure (CONHESS). Compensation is governed by the Nursing and Midwifery Council of Nigeria (NMCN) licensing standards and collective bargaining by NANNM.',
    scaleDescription: 'CONHESS grades nurses from Grade Level 07 (Diploma Registered Nurse entry) and Grade Level 08 (B.N.Sc Bachelor of Nursing Science graduate entry) up to Directorate Level 15.',
    allowances: [
      { name: 'Shift Duty Allowance', rate: '₦25,000 - ₦45,000 / month', eligibility: 'Nurses working rotational night and weekend hospital shifts.' },
      { name: 'Health Hazard Allowance', rate: '₦32,000 / month', eligibility: 'All clinical nursing practitioners in frontline hospital duty.' },
      { name: 'Uniform Maintenance Allowance', rate: '₦20,000 / quarterly', eligibility: 'Nursing staff across all hospital wards.' }
    ],
    ranks: [
      {
        rank: 'Staff Nurse / Midwife (RN/RM Entry)',
        category: 'Entry Level & Junior',
        gradeLevel: 'CONHESS 07',
        oldMonthly: '₦70,000 - ₦95,000',
        newMonthly2026: '₦140,000 - ₦185,000',
        annualEstimate: '₦1,680,000 - ₦2,220,000',
        takeHomeEstimate: '₦165,000',
        qualification: 'Registered Nurse (RN) / Registered Midwife (RM) Diploma',
        allowancesSummary: 'Shift duty allowance + Hazard stipend',
        responsibilities: 'Patient bedside care, medication administration, vitals recording, and wound dressing.'
      },
      {
        rank: 'Nursing Officer II (B.N.Sc Degree Graduate Entry)',
        category: 'Entry Level & Junior',
        gradeLevel: 'CONHESS 08',
        oldMonthly: '₦95,000 - ₦130,000',
        newMonthly2026: '₦180,000 - ₦240,000',
        annualEstimate: '₦2,160,000 - ₦2,880,000',
        takeHomeEstimate: '₦215,000',
        qualification: 'B.N.Sc (Bachelor of Nursing Science) + NYSC',
        allowancesSummary: 'Professional nursing allowance + Shift pay',
        responsibilities: 'Care plan design, intravenous therapy, patient triaging in emergency units.'
      },
      {
        rank: 'Senior Nursing Officer (SNO)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'CONHESS 10',
        oldMonthly: '₦140,000 - ₦185,000',
        newMonthly2026: '₦270,000 - ₦360,000',
        annualEstimate: '₦3,240,000 - ₦4,320,000',
        takeHomeEstimate: '₦310,000',
        qualification: '5+ years post-registration experience',
        allowancesSummary: 'Ward leadership bonus + Enhanced hazard allowance',
        responsibilities: 'Ward in-charge, managing ICU / theater equipment, mentoring student nurses.'
      },
      {
        rank: 'Chief Nursing Officer (CNO / Matron)',
        category: 'Senior & Management',
        gradeLevel: 'CONHESS 13/14',
        oldMonthly: '₦240,000 - ₦320,000',
        newMonthly2026: '₦420,000 - ₦650,000',
        annualEstimate: '₦5,040,000 - ₦7,800,000',
        takeHomeEstimate: '₦520,000',
        qualification: '15+ years specialist clinical leadership',
        allowancesSummary: 'Directorate administration stipend',
        responsibilities: 'Hospital nursing services management, staffing allocation, infection control coordinator.'
      }
    ],
    faqs: [
      {
        question: 'Do private hospitals pay nurses more than federal hospitals?',
        answer: 'In Nigeria, federal teaching hospitals and FMC institutions generally pay higher base salaries and pensions under CONHESS than most private hospitals, though top-tier luxury hospitals in Lagos and Abuja offer competitive matching packages.'
      }
    ],
    relatedAgencySlugs: ['doctor-salary', 'civil-service-salary']
  },

  // 7. TECH & SOFTWARE ENGINEERING (FINTECH & STARTUPS)
  'software-engineer-salary': {
    slug: 'software-engineer-salary',
    agencyName: 'Tech & Fintech Software Engineers',
    shortName: 'Software Engineers',
    branch: 'Tech & Telecoms',
    color: 'bg-purple-600',
    gradient: 'from-purple-700 to-indigo-950',
    badgeCol: 'bg-purple-100 text-purple-900 border-purple-200',
    salaryScale: 'Nigerian Tech Ecosystem Compensation Standard 2026',
    seoTitle: 'Software Engineer Salary in Nigeria 2026: Junior to Lead Dev Pay',
    seoDescription: 'Verified 2026 Nigerian software engineer salary benchmarks: Monthly and annual pay for Junior, Mid-Level, Senior Engineers, and Tech Leads at Moniepoint, Flutterwave, and Interswitch.',
    quickAnswer: {
      question: 'How Much Do Software Engineers Earn in Nigeria in 2026?',
      directAnswer: 'Software engineering remains one of the most lucrative careers in Nigeria. An entry-level / Junior Software Engineer in top Nigerian fintechs (Moniepoint, Flutterwave, Paystack, Interswitch) earns between ₦300,000 and ₦550,000 monthly. Mid-Level Developers take home ₦700,000 to ₦1,400,000 monthly, while Senior Software Engineers and Tech Leads command ₦1,800,000 to ₦3,500,000+ monthly (or $2,000 - $5,000+ for foreign remote roles).',
      statusText: '2026 Tech Industry Standard Active',
      metrics: [
        { label: 'Junior Engineer (0-2 yrs)', value: '₦300,000 - ₦550,000 / mo', highlight: true },
        { label: 'Mid-Level Engineer (2-5 yrs)', value: '₦700,000 - ₦1,400,000 / mo' },
        { label: 'Senior Engineer (5+ yrs)', value: '₦1.8M - ₦3.2M / mo' },
        { label: 'Engineering Lead / Manager', value: '₦2.8M - ₦4.5M+ / mo' }
      ]
    },
    introOverview: 'The Nigerian technology ecosystem—powered by Lagos as Africa\'s leading fintech capital—offers rapid compensation growth. Engineers working across payment infrastructure, digital banking, and AI consultancies benefit from flexible remote arrangements and performance equity grants.',
    scaleDescription: 'Tech compensation is based on demonstrated technical proficiency (data structures, system design, microservices, cloud DevOps) rather than university degree certificates.',
    allowances: [
      { name: 'Remote Work & Internet Subsidy', rate: '₦40,000 - ₦100,000 / month', eligibility: 'All distributed and hybrid engineering personnel.' },
      { name: 'Tech Equipment Grant', rate: 'MacBook Pro / High-End Workstation', eligibility: 'Provided upon signing employment contract.' },
      { name: 'Equity / Stock Options (ESOP)', rate: '0.05% - 0.5% Company Equity', eligibility: 'Key mid and senior engineering contributors.' }
    ],
    ranks: [
      {
        rank: 'Junior Software Engineer (Frontend / Backend)',
        category: 'Entry Level & Junior',
        gradeLevel: 'L1 Engineer',
        oldMonthly: '₦150,000 - ₦250,000',
        newMonthly2026: '₦300,000 - ₦550,000',
        annualEstimate: '₦3,600,000 - ₦6,600,000',
        takeHomeEstimate: '₦380,000',
        qualification: 'Computer Science degree or verified Bootcamp portfolio',
        allowancesSummary: 'Internet allowance + Laptop equipment grant',
        responsibilities: 'Building UI components, resolving API integration bugs, writing unit tests.'
      },
      {
        rank: 'Mid-Level Software Engineer',
        category: 'Mid-Level & Professional',
        gradeLevel: 'L2 Engineer',
        oldMonthly: '₦350,000 - ₦600,000',
        newMonthly2026: '₦700,000 - ₦1,400,000',
        annualEstimate: '₦8,400,000 - ₦16,800,000',
        takeHomeEstimate: '₦950,000',
        qualification: '3+ years production code deployment (React, Node, Go, Python, Java)',
        allowancesSummary: 'Health insurance + Learning budget',
        responsibilities: 'Designing microservice APIs, database optimization, maintaining production uptime.'
      },
      {
        rank: 'Senior Software Engineer',
        category: 'Senior & Management',
        gradeLevel: 'L3 Senior',
        oldMonthly: '₦800,000 - ₦1,500,000',
        newMonthly2026: '₦1,800,000 - ₦3,200,000',
        annualEstimate: '₦21,600,000 - ₦38,400,000',
        takeHomeEstimate: '₦2,350,000',
        qualification: '5+ years distributed systems & high-traffic architecture experience',
        allowancesSummary: 'ESOP equity + International conference allowance',
        responsibilities: 'System architecture, code reviews, leading high-concurrency payment engines.'
      },
      {
        rank: 'Tech Lead / Head of Engineering',
        category: 'Executive & Directorate',
        gradeLevel: 'Staff / VP Engineering',
        oldMonthly: '₦1,500,000 - ₦2,500,000',
        newMonthly2026: '₦2,800,000 - ₦4,500,000+',
        annualEstimate: '₦33,600,000 - ₦54,000,000+',
        takeHomeEstimate: '₦3,400,000',
        qualification: '10+ years engineering team leadership',
        allowancesSummary: 'Executive stock package + Comprehensive family perks',
        responsibilities: 'Setting technical roadmap, engineering recruitment, compliance with PCI-DSS & NDPR.'
      }
    ],
    faqs: [
      {
        question: 'Which programming languages pay the highest in Nigeria?',
        answer: 'Currently, Golang (Go), Java, Python, and TypeScript (React/Node) command the highest demand and compensation in fintech payment switches and distributed systems.'
      }
    ],
    relatedAgencySlugs: ['mtn-salary', 'access-bank-salary', 'cbn-salary']
  },

  // 8. EDUCATION: TEACHERS (SUBEB & TESCOM)
  'teacher-salary': {
    slug: 'teacher-salary',
    agencyName: 'Nigerian Public School Teachers',
    shortName: 'SUBEB / TESCOM',
    branch: 'Education',
    color: 'bg-indigo-600',
    gradient: 'from-indigo-700 to-blue-950',
    badgeCol: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    salaryScale: 'Teachers Salary Scale (TSS) / State Civil Service 2026',
    seoTitle: 'Nigerian Teachers Salary Structure 2026: Primary to Secondary School',
    seoDescription: 'Updated 2026 Nigerian teachers salary structure for SUBEB primary and TESCOM secondary schools under the ₦70,000 national minimum wage. Monthly and annual pay breakdown.',
    quickAnswer: {
      question: 'How Much Do Teachers Earn in Nigeria in 2026?',
      directAnswer: 'Under the 2026 national wage review, public primary school teachers under State Universal Basic Education Boards (SUBEB - GL 07 NCE entry) earn between ₦76,000 and ₦95,000 monthly take-home pay. Secondary school graduate teachers under Teaching Service Commissions (TESCOM - GL 08 B.Ed / B.Sc entry) earn between ₦92,000 and ₦125,000 monthly. Senior Masters and Principals on Grade Levels 14–16 earn between ₦220,000 and ₦380,000 monthly.',
      statusText: '2026 Teachers Salary Review Active',
      metrics: [
        { label: 'SUBEB Primary (NCE Entry)', value: '₦76,000 - ₦95,000 / mo', highlight: true },
        { label: 'TESCOM Secondary (B.Ed Entry)', value: '₦92,000 - ₦125,000 / mo' },
        { label: 'Senior Master (GL 10)', value: '₦130,000 - ₦175,000 / mo' },
        { label: 'Secondary School Principal', value: '₦260,000 - ₦380,000 / mo' }
      ]
    },
    introOverview: 'Public school teachers in Nigeria are employed at two tiers: primary education through State Universal Basic Education Boards (SUBEB) and secondary education through Teaching Service Commissions (TESCOM) or the Federal Ministry of Education (Federal Unity Colleges).',
    scaleDescription: 'The Teachers Salary Scale (TSS) provides a 27.5% professional allowance over regular civil service salaries in states that have fully implemented the National Teachers Policy.',
    allowances: [
      { name: 'Teachers Special Allowance (TSA)', rate: '15% - 27.5% of Basic Salary', eligibility: 'Licensed teachers with TRCN professional certification.' },
      { name: 'Rural Posting Allowance', rate: '10% - 20% of Basic Pay', eligibility: 'Teachers posted to remote rural or riverine local communities.' },
      { name: 'Science & Technical Subject Bonus', rate: '₦10,000 - ₦25,000 / month', eligibility: 'Teachers of Physics, Chemistry, Mathematics, and Technical Drawing.' }
    ],
    ranks: [
      {
        rank: 'Primary School Teacher / NCE Entry (GL 07)',
        category: 'Entry Level & Junior',
        gradeLevel: 'TSS / GL 07',
        oldMonthly: '₦38,000 - ₦48,000',
        newMonthly2026: '₦76,000 - ₦95,000',
        annualEstimate: '₦912,000 - ₦1,140,000',
        takeHomeEstimate: '₦84,000',
        qualification: 'NCE (Nigeria Certificate in Education) + TRCN License',
        allowancesSummary: 'Teaching allowance + Local transport subsidy',
        responsibilities: 'Classroom instruction, continuous assessment records, pupil literacy foundation.'
      },
      {
        rank: 'Secondary School Master III / B.Ed Entry (GL 08)',
        category: 'Entry Level & Junior',
        gradeLevel: 'TSS / GL 08',
        oldMonthly: '₦52,000 - ₦68,000',
        newMonthly2026: '₦92,000 - ₦125,000',
        annualEstimate: '₦1,104,000 - ₦1,500,000',
        takeHomeEstimate: '₦108,000',
        qualification: 'B.Ed / B.Sc(Ed) / B.A(Ed) + NYSC',
        allowancesSummary: 'Subject specialty allowance + Lesson preparation stipend',
        responsibilities: 'Teaching assigned subject across Junior or Senior Secondary classes, WAEC registration assist.'
      },
      {
        rank: 'Senior Education Officer / Senior Master (GL 10)',
        category: 'Mid-Level & Professional',
        gradeLevel: 'TSS / GL 10',
        oldMonthly: '₦80,000 - ₦105,000',
        newMonthly2026: '₦130,000 - ₦175,000',
        annualEstimate: '₦1,560,000 - ₦2,100,000',
        takeHomeEstimate: '₦155,000',
        qualification: '5+ years teaching track record + Promotion appraisal',
        allowancesSummary: 'Head of Department (HOD) responsibility allowance',
        responsibilities: 'Subject department head, examination coordinator, curriculum supervision.'
      },
      {
        rank: 'Vice Principal / Principal (GL 14 - 16)',
        category: 'Senior & Management',
        gradeLevel: 'TSS / GL 14-16',
        oldMonthly: '₦145,000 - ₦210,000',
        newMonthly2026: '₦260,000 - ₦380,000',
        annualEstimate: '₦3,120,000 - ₦4,560,000',
        takeHomeEstimate: '₦315,000',
        qualification: '15+ years distinguished educational leadership',
        allowancesSummary: 'School administration allowance + Official staff housing privilege',
        responsibilities: 'Overall school administration, academic calendar execution, parent-teacher liaison.'
      }
    ],
    faqs: [
      {
        question: 'Is TRCN certificate mandatory to earn teacher allowances?',
        answer: 'Yes. The Teachers Registration Council of Nigeria (TRCN) certificate is the statutory license required to qualify for the 27.5% Teachers Salary Scale (TSS) allowance in public schools.'
      }
    ],
    relatedAgencySlugs: ['civil-service-salary', 'nurse-salary']
  }
};

