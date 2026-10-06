// Comprehensive 2026 Salary Intelligence for Nigerian Military, Paramilitary & Key Federal Agencies
// Grounded in latest federal reviews:
// - New National Minimum Wage (₦70,000 baseline)
// - Presidential approval of Armed Forces Salary review (CONAFSS: up to +80% for junior ranks, +50% intermediate, +30% senior)
// - Updated CONPOSS (Police), CONPASS (Paramilitary: Customs, NIS, NSCDC)
// - Updated Corporate packages for NNPC Limited and Central Bank of Nigeria (CBN)

export interface SalaryCadreRank {
  rank: string;
  category: 'Non-Commissioned (Recruits & Junior)' | 'Senior Non-Commissioned / Inspectorate' | 'Commissioned Officers';
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
  salaryScale: string; // e.g. "CONAFSS", "CONPOSS", "CONPASS", "NNPC Corporate", "CBN Scale"
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

export const SALARY_AGENCIES: Record<string, AgencySalaryProfile> = {
  // 1. NIGERIAN NAVY SALARY (CONAFSS 2026)
  'navy-salary': {
    slug: 'navy-salary',
    agencyName: 'Nigerian Navy',
    shortName: 'NN',
    branch: 'Navy',
    color: 'bg-military-blue',
    gradient: 'from-military-blue to-blue-900',
    badgeCol: 'bg-blue-100 text-blue-900 border-blue-200',
    salaryScale: '2026 Consolidated Armed Forces Salary Structure (CONAFSS)',
    seoTitle: 'Nigerian Navy Salary Structure 2026: Rank Table & Monthly Pay',
    seoDescription: 'Verified 2026 Nigerian Navy salary structure: Monthly & annual pay for Ordinary Seaman to Admiral under CONAFSS. Allowances, sea duty stipends & rank table.',
    quickAnswer: {
      question: 'How Much Does the Nigerian Navy Pay in 2026?',
      directAnswer: 'Under the reviewed 2026 CONAFSS scale reflecting the new military wage review, an entry Ordinary Seaman (passed-out rating) earns between ₦105,000 and ₦125,000 basic monthly pay (taking home ₦135,000 - ₦175,000+ when deployed with sea allowances). A commissioned Sub-Lieutenant (DSSC or NDA officer) earns ₦280,000 to ₦340,000 monthly, plus specialized sea duty allowance ranging from ₦35,000 to ₦75,000 per mission.',
      statusText: 'CONAFSS 2026 Military Wage Review Active',
      metrics: [
        { label: 'Rating (Ordinary Seaman)', value: '₦105,000 - ₦125,000 / mo', highlight: true },
        { label: 'Sub-Lieutenant (DSSC)', value: '₦280,000 - ₦340,000 / mo' },
        { label: 'Salary Scale', value: 'CONAFSS 2026' },
        { label: 'Sea Duty Allowance', value: '₦35,000 - ₦75,000 / mission' }
      ]
    },
    introOverview: 'The Nigerian Navy (NN) is the maritime service branch of the Armed Forces of the Federal Republic of Nigeria. Naval personnel remuneration is governed by the Consolidated Armed Forces Salary Structure (CONAFSS), recently updated following presidential approvals to reflect national minimum wage benchmarks and military hardship adjustments. Compensation combines rank base salary with hazardous sea duty, ship engineering bonuses, and diving stipends.',
    scaleDescription: 'The CONAFSS pay scale separates compensation into Non-Commissioned Ratings (BMTC recruits from NNBTS Onne) and Commissioned Officers (Direct Short Service Commission DSSC and Regular Combatant NDA graduates). Rates are paid directly through the Armed Forces IPPIS military payroll system.',
    allowances: [
      { name: 'Sea Duty Allowance (SDA)', rate: '₦35,000 - ₦75,000 / month', eligibility: 'Personnel embarked on naval warships, gunboats, or maritime patrols in the Gulf of Guinea and Niger Delta creeks.' },
      { name: 'Diving / Special Boat Service (SBS)', rate: '₦50,000 - ₦110,000 / month', eligibility: 'Elite Naval SBS commandos and salvage deep-sea divers.' },
      { name: 'Barracks & Official Quarters', rate: '100% Subsidized / Free', eligibility: 'Free barracks accommodation at naval bases (Lagos, Calabar, Warri, Port Harcourt) or rent allowance.' },
      { name: 'Joint Task Force Field Allowance', rate: '₦45,000 - ₦75,000 / month', eligibility: 'Active joint operational theaters (Operation Delta Safe, Operation Hadin Kai).' }
    ],
    ranks: [
      {
        rank: 'Trainee Rating (NNBTS Onne)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'Trainee Cadre',
        oldMonthly: '₦15,000 - ₦20,000',
        newMonthly2026: '₦45,000 - ₦55,000',
        annualEstimate: '₦540,000 - ₦660,000',
        takeHomeEstimate: '₦50,000',
        qualification: 'SSCE/NECO/NABTEB undergoing 6-month BMTC',
        allowancesSummary: 'Free kitting, feeding, and medical care during depot training',
        responsibilities: 'Naval recruit undergoing basic seamanship, drill, and maritime orientation.'
      },
      {
        rank: 'Ordinary Seaman (Pass-out Rating)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONAFSS 01',
        oldMonthly: '₦52,000 - ₦60,000',
        newMonthly2026: '₦105,000 - ₦125,000',
        annualEstimate: '₦1,260,000 - ₦1,500,000',
        takeHomeEstimate: '₦140,000 (with sea allowance)',
        qualification: 'BMTC Graduate (WASSCE / NECO)',
        allowancesSummary: 'Eligible for Sea Duty Allowance (₦35k - ₦55k) + Uniform Maintenance',
        responsibilities: 'First post-depot rating. Sentry, deck maintenance, mooring line operations, and sentry watch.'
      },
      {
        rank: 'Able Seaman (AB)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONAFSS 02',
        oldMonthly: '₦62,000 - ₦68,000',
        newMonthly2026: '₦125,000 - ₦145,000',
        annualEstimate: '₦1,500,000 - ₦1,740,000',
        takeHomeEstimate: '₦160,000',
        qualification: 'Passage exams & 2-3 years naval service',
        allowancesSummary: 'Specialized maritime rating bonus + Free barracks quarters',
        responsibilities: 'Ship navigation watch, engine room assist, gunnery crew support.'
      },
      {
        rank: 'Leading Seaman (LS)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONAFSS 03',
        oldMonthly: '₦72,000 - ₦80,000',
        newMonthly2026: '₦145,000 - ₦168,000',
        annualEstimate: '₦1,740,000 - ₦2,016,000',
        takeHomeEstimate: '₦180,000',
        qualification: 'Supervisory Trade Course',
        allowancesSummary: 'Section leader stipend + maritime combat bonus',
        responsibilities: 'Section commander for junior ratings on naval forward operating bases (FOBs).'
      },
      {
        rank: 'Petty Officer (PO)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 04',
        oldMonthly: '₦84,000 - ₦92,000',
        newMonthly2026: '₦175,000 - ₦205,000',
        annualEstimate: '₦2,100,000 - ₦2,460,000',
        takeHomeEstimate: '₦220,000',
        qualification: 'Senior Ratings Qualifying Exam',
        allowancesSummary: 'Technical rating leadership stipend',
        responsibilities: 'Senior supervisor of technical departments (Weapon Electrical, Marine Engineering).'
      },
      {
        rank: 'Chief Petty Officer (CPO)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 05',
        oldMonthly: '₦95,000 - ₦108,000',
        newMonthly2026: '₦210,000 - ₦245,000',
        annualEstimate: '₦2,520,000 - ₦2,940,000',
        takeHomeEstimate: '₦260,000',
        qualification: 'Advanced Naval Academy Specialist Course',
        allowancesSummary: 'Command technical allowance',
        responsibilities: 'Chief technical adviser for ship divisions, senior mess leader.'
      },
      {
        rank: 'Warrant Officer (WO)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 06',
        oldMonthly: '₦120,000 - ₦135,000',
        newMonthly2026: '₦250,000 - ₦290,000',
        annualEstimate: '₦3,000,000 - ₦3,480,000',
        takeHomeEstimate: '₦305,000',
        qualification: 'Coxswain / Senior Warrant Course',
        allowancesSummary: 'Regimental executive stipend',
        responsibilities: 'Ship coxswain, chief disciplinarian for ship ratings, advisor to commanding officer.'
      },
      {
        rank: 'Master Warrant Officer (MWO)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 07',
        oldMonthly: '₦150,000 - ₦170,000',
        newMonthly2026: '₦295,000 - ₦340,000',
        annualEstimate: '₦3,540,000 - ₦4,080,000',
        takeHomeEstimate: '₦360,000',
        qualification: 'Master Warrant Selection Board',
        allowancesSummary: 'Apex rating command stipend',
        responsibilities: 'Base Regimental Master Warrant Officer, senior advisor across naval formations.'
      },
      {
        rank: 'Sub-Lieutenant (DSSC / Cadet Graduate)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 08 (Commissioned)',
        oldMonthly: '₦180,000 - ₦210,000',
        newMonthly2026: '₦280,000 - ₦340,000',
        annualEstimate: '₦3,360,000 - ₦4,080,000',
        takeHomeEstimate: '₦365,000 (with allowances)',
        qualification: 'B.Sc / HND + DSSC 9-Month Cadet Course / NDA Graduate',
        allowancesSummary: 'Officer kit allowance, official quarters, hazardous sea duty bonus',
        responsibilities: 'Officer of the Watch (OOW), divisional officer managing departments of ratings.'
      },
      {
        rank: 'Lieutenant',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 09',
        oldMonthly: '₦215,000 - ₦245,000',
        newMonthly2026: '₦340,000 - ₦410,000',
        annualEstimate: '₦4,080,000 - ₦4,920,000',
        takeHomeEstimate: '₦440,000',
        qualification: 'Confirmed Commissioned Officer (3-4 years seniority)',
        allowancesSummary: 'Command duty stipend + executive quarters',
        responsibilities: 'Executive officer of inshore patrol craft, navigation officer on warships.'
      },
      {
        rank: 'Lieutenant Commander',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 10',
        oldMonthly: '₦260,000 - ₦300,000',
        newMonthly2026: '₦420,000 - ₦510,000',
        annualEstimate: '₦5,040,000 - ₦6,120,000',
        takeHomeEstimate: '₦545,000',
        qualification: 'Junior Staff College (AFCSC Jaji)',
        allowancesSummary: 'Warship command allowance',
        responsibilities: 'Commanding Officer (CO) of patrol boats, head of major naval base departments.'
      },
      {
        rank: 'Commander',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 11',
        oldMonthly: '₦330,000 - ₦390,000',
        newMonthly2026: '₦540,000 - ₦660,000',
        annualEstimate: '₦6,480,000 - ₦7,920,000',
        takeHomeEstimate: '₦700,000',
        qualification: 'Senior Staff College (AFCSC Jaji)',
        allowancesSummary: 'Capital ship command stipend',
        responsibilities: 'Commanding Officer of capital offshore patrol vessels (OPV) or naval air stations.'
      },
      {
        rank: 'Captain (NN)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 12',
        oldMonthly: '₦500,000 - ₦620,000',
        newMonthly2026: '₦780,000 - ₦960,000',
        annualEstimate: '₦9,360,000 - ₦11,520,000',
        takeHomeEstimate: '₦1,020,000',
        qualification: 'National Defence College (NDC)',
        allowancesSummary: 'Executive naval base command package',
        responsibilities: 'Commanding Officer of major naval dockyards, naval air arm, or base commands.'
      },
      {
        rank: 'Commodore (1-Star)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 13',
        oldMonthly: '₦800,000 - ₦950,000',
        newMonthly2026: '₦1,250,000 - ₦1,550,000',
        annualEstimate: '₦15,000,000 - ₦18,600,000',
        takeHomeEstimate: '₦1,650,000',
        qualification: 'Flag Rank Appointment',
        allowancesSummary: 'Flag officer official vehicle, security detail, executive entertainment allowance',
        responsibilities: 'Fleet Commander, Director at Naval Headquarters (NHQ) Abuja.'
      },
      {
        rank: 'Rear Admiral (2-Star)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 14',
        oldMonthly: '₦1,200,000 - ₦1,450,000',
        newMonthly2026: '₦1,800,000 - ₦2,250,000',
        annualEstimate: '₦21,600,000 - ₦27,000,000',
        takeHomeEstimate: '₦2,400,000',
        qualification: 'Flag Rank Selection',
        allowancesSummary: 'Principal Staff Officer executive package',
        responsibilities: 'Flag Officer Commanding (FOC) of Western, Eastern, or Central Naval Commands.'
      },
      {
        rank: 'Vice Admiral (3-Star) / Admiral (4-Star)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 15 / 16',
        oldMonthly: '₦1,600,000 - ₦2,200,000',
        newMonthly2026: '₦2,400,000 - ₦3,350,000',
        annualEstimate: '₦28,800,000 - ₦40,200,000',
        takeHomeEstimate: '₦3,600,000',
        qualification: 'Presidential Appointment (Chief of Naval Staff / CDS)',
        allowancesSummary: 'Full Service Chief executive perquisites',
        responsibilities: 'Chief of the Naval Staff (CNS) commanding the entire maritime defense force.'
      }
    ],
    faqs: [
      {
        question: 'What is the starting salary of an Ordinary Seaman in 2026?',
        answer: 'Under the reviewed 2026 CONAFSS scale, an Ordinary Seaman receives between ₦105,000 and ₦125,000 basic salary monthly. When deployed aboard naval warships for patrols, Sea Duty Allowance of ₦35,000 to ₦75,000 is added, raising monthly take-home pay to over ₦150,000.'
      },
      {
        question: 'How much does a Nigerian Navy DSSC officer earn?',
        answer: 'University graduates commissioned as Sub-Lieutenants earn between ₦280,000 and ₦340,000 monthly basic pay, in addition to free officer quarters, medical care at Naval Hospitals, and command allowances.'
      },
      {
        question: 'Do Nigerian Navy personnel get paid during training at NNBTS Onne?',
        answer: 'Yes. Recruits undergo 6 months of training and receive a monthly upkeep stipend of ₦45,000 - ₦55,000 alongside free kitting, feeding, and medical care.'
      }
    ],
    relatedAgencySlugs: ['airforce-salary', 'army-salary', 'police-salary', 'customs-salary']
  },

  // 2. NIGERIAN AIR FORCE SALARY (CONAFSS 2026)
  'airforce-salary': {
    slug: 'airforce-salary',
    agencyName: 'Nigerian Air Force',
    shortName: 'NAF',
    branch: 'Air Force',
    color: 'bg-sky-800',
    gradient: 'from-sky-800 to-slate-900',
    badgeCol: 'bg-sky-100 text-sky-900 border-sky-200',
    salaryScale: '2026 Consolidated Armed Forces Salary Structure (CONAFSS)',
    seoTitle: 'Nigerian Air Force Salary Structure 2026: NAF Ranks & Monthly Pay',
    seoDescription: 'Official 2026 Nigerian Air Force salary structure: Monthly and annual pay for Aircraftman to Air Chief Marshal under CONAFSS. Flight allowances & rank table.',
    quickAnswer: {
      question: 'How Much Does the Nigerian Air Force (NAF) Pay in 2026?',
      directAnswer: 'Under the 2026 CONAFSS military wage adjustment, an entry-level recruit (Aircraftman/Aircraftwoman) in the Nigerian Air Force earns between ₦105,000 and ₦125,000 monthly basic pay. A commissioned Flying Officer (DSSC or NDA graduate) earns between ₦280,000 and ₦350,000 monthly. In addition, military pilots and aeronautical flight technicians receive flight risk bonuses between ₦60,000 and ₦180,000.',
      statusText: 'CONAFSS 2026 NAF Scale Verified',
      metrics: [
        { label: 'Aircraftman (Entry Recruit)', value: '₦105,000 - ₦125,000 / mo', highlight: true },
        { label: 'Flying Officer (DSSC)', value: '₦280,000 - ₦350,000 / mo' },
        { label: 'Pilot Flight Pay', value: '₦60k - ₦180k / mo' },
        { label: 'Annual Estimate (Entry)', value: '₦1.26M - ₦1.50M' }
      ]
    },
    introOverview: 'The Nigerian Air Force (NAF) is the aerial warfare branch of the Armed Forces of Nigeria. Personnel compensation is regulated by the Consolidated Armed Forces Salary Structure (CONAFSS), augmented with flight pay for pilots, avionic engineer allowances, and combat operational allowances in regional theaters.',
    scaleDescription: 'Airmen and airwomen (BMTC candidates) start on CONAFSS 01, while DSSC officers enter as Flying Officers on CONAFSS 08. Salaries are disbursed through the Federal Ministry of Defence via the IPPIS military system.',
    allowances: [
      { name: 'Flight Line & Flying Pay', rate: '₦60,000 - ₦180,000 / month', eligibility: 'Licensed combat pilots (Super Tucano, Alpha Jet), transport aviators, and flight technicians.' },
      { name: 'Avionics & Armament Maintenance', rate: '₦35,000 - ₦70,000 / month', eligibility: 'Certified aeronautical engineers servicing aircraft engines and armament systems.' },
      { name: 'Air Base Housing Allowance', rate: '100% Subsidized / Free', eligibility: 'Free accommodation inside NAF Bases (Makurdi, Kaduna, Kainji, Port Harcourt, Abuja).' },
      { name: 'Air Task Force Theater Allowance', rate: '₦45,000 - ₦75,000 / month', eligibility: 'Personnel deployed to Operation Hadin Kai and Operation Fansan Yamma.' }
    ],
    ranks: [
      {
        rank: 'Trainee Airman (BTC Kaduna)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'Trainee Cadre',
        oldMonthly: '₦15,000 - ₦20,000',
        newMonthly2026: '₦45,000 - ₦55,000',
        annualEstimate: '₦540,000 - ₦660,000',
        takeHomeEstimate: '₦50,000',
        qualification: 'SSCE/NECO undergoing Basic Training Kaduna',
        allowancesSummary: 'Free kitting, feeding, and medical care during 6 months training',
        responsibilities: 'Recruit undergoing aviation grounding, physical conditioning, and marksmanship.'
      },
      {
        rank: 'Aircraftman / Aircraftwoman (ACM/ACW)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONAFSS 01',
        oldMonthly: '₦52,000 - ₦60,000',
        newMonthly2026: '₦105,000 - ₦125,000',
        annualEstimate: '₦1,260,000 - ₦1,500,000',
        takeHomeEstimate: '₦125,000',
        qualification: 'Passed-out BMTC Recruit',
        allowancesSummary: 'Eligible for air base maintenance bonus + Uniform allowance',
        responsibilities: 'Base defense, airfield guard, aircraft line marshalling, sentry duty.'
      },
      {
        rank: 'Leading Aircraftman (LAC)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONAFSS 02',
        oldMonthly: '₦62,000 - ₦68,000',
        newMonthly2026: '₦125,000 - ₦145,000',
        annualEstimate: '₦1,500,000 - ₦1,740,000',
        takeHomeEstimate: '₦145,000',
        qualification: '2-3 years service & trade test',
        allowancesSummary: 'Aviation technical specialty bonus',
        responsibilities: 'Junior airframe maintenance, refueling assistance, communications watch.'
      },
      {
        rank: 'Corporal (NAF)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONAFSS 03',
        oldMonthly: '₦72,000 - ₦80,000',
        newMonthly2026: '₦145,000 - ₦168,000',
        annualEstimate: '₦1,740,000 - ₦2,016,000',
        takeHomeEstimate: '₦168,000',
        qualification: 'Air Force Advanced Trade Course',
        allowancesSummary: 'Squad leadership stipend',
        responsibilities: 'Air regiment combat squad leader, perimeter security supervisor.'
      },
      {
        rank: 'Sergeant (NAF)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 04',
        oldMonthly: '₦84,000 - ₦92,000',
        newMonthly2026: '₦175,000 - ₦205,000',
        annualEstimate: '₦2,100,000 - ₦2,460,000',
        takeHomeEstimate: '₦205,000',
        qualification: 'Senior Non-Commissioned Qualifying Course',
        allowancesSummary: 'Technical maintenance leadership stipend',
        responsibilities: 'Overseeing hangar flight line, aircraft refueling teams, avionics squads.'
      },
      {
        rank: 'Flight Sergeant (F/Sgt)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 05',
        oldMonthly: '₦95,000 - ₦108,000',
        newMonthly2026: '₦210,000 - ₦245,000',
        annualEstimate: '₦2,520,000 - ₦2,940,000',
        takeHomeEstimate: '₦245,000',
        qualification: 'Advanced Technical Command Certificate',
        allowancesSummary: 'Supervisory flight maintenance stipend',
        responsibilities: 'Senior maintenance controller, discipline advisor for airmen squads.'
      },
      {
        rank: 'Warrant Officer (WO)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 06',
        oldMonthly: '₦120,000 - ₦135,000',
        newMonthly2026: '₦250,000 - ₦290,000',
        annualEstimate: '₦3,000,000 - ₦3,480,000',
        takeHomeEstimate: '₦290,000',
        qualification: 'Station Warrant Course',
        allowancesSummary: 'Station discipline executive stipend',
        responsibilities: 'Station Warrant Officer (SWO), chief technical advisor to base commanders.'
      },
      {
        rank: 'Master Warrant Officer (MWO)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONAFSS 07',
        oldMonthly: '₦150,000 - ₦170,000',
        newMonthly2026: '₦295,000 - ₦340,000',
        annualEstimate: '₦3,540,000 - ₦4,080,000',
        takeHomeEstimate: '₦340,000',
        qualification: 'Apex Enlisted Selection',
        allowancesSummary: 'Regimental drill & discipline advisory bonus',
        responsibilities: 'Senior-most enlisted rank in air wings, liaison to Air Officer Commanding.'
      },
      {
        rank: 'Flying Officer (DSSC / Cadet Graduate)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 08 (Commissioned)',
        oldMonthly: '₦180,000 - ₦210,000',
        newMonthly2026: '₦280,000 - ₦350,000',
        annualEstimate: '₦3,360,000 - ₦4,200,000',
        takeHomeEstimate: '₦375,000 (pilot extra: ₦60k-₦120k)',
        qualification: 'B.Sc/B.Eng + NAF DSSC 9-Month Course / NDA Graduate',
        allowancesSummary: 'Officer kit allowance, official quarters, aviation hazard pay',
        responsibilities: 'Operational co-pilot, aeronautical engineer, squadron administrative officer.'
      },
      {
        rank: 'Flight Lieutenant',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 09',
        oldMonthly: '₦215,000 - ₦245,000',
        newMonthly2026: '₦340,000 - ₦410,000',
        annualEstimate: '₦4,080,000 - ₦4,920,000',
        takeHomeEstimate: '₦440,000',
        qualification: 'Confirmed Commissioned Aviator / Engineer',
        allowancesSummary: 'Combat mission flight bonus + Staff command allowance',
        responsibilities: 'Combat aircraft pilot-in-command, detachment flight commander.'
      },
      {
        rank: 'Squadron Leader',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 10',
        oldMonthly: '₦260,000 - ₦300,000',
        newMonthly2026: '₦420,000 - ₦510,000',
        annualEstimate: '₦5,040,000 - ₦6,120,000',
        takeHomeEstimate: '₦540,000',
        qualification: 'Junior Staff Course (AFCSC Jaji)',
        allowancesSummary: 'Squadron command stipend',
        responsibilities: 'Commander of operational flying squadrons or technical air maintenance wings.'
      },
      {
        rank: 'Wing Commander',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 11',
        oldMonthly: '₦330,000 - ₦390,000',
        newMonthly2026: '₦540,000 - ₦660,000',
        annualEstimate: '₦6,480,000 - ₦7,920,000',
        takeHomeEstimate: '₦700,000',
        qualification: 'Senior Staff Course (AFCSC Jaji)',
        allowancesSummary: 'Group command executive allowance',
        responsibilities: 'Air base wing commander, staff director at Headquarters NAF.'
      },
      {
        rank: 'Group Captain',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 12',
        oldMonthly: '₦500,000 - ₦620,000',
        newMonthly2026: '₦780,000 - ₦960,000',
        annualEstimate: '₦9,360,000 - ₦11,520,000',
        takeHomeEstimate: '₦1,020,000',
        qualification: 'National Defence College (NDC)',
        allowancesSummary: 'Air base command package + Staff car',
        responsibilities: 'Commander of operational NAF Bases (e.g., Kainji 407 ACTG, Makurdi 101 AG).'
      },
      {
        rank: 'Air Commodore (1-Star)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 13',
        oldMonthly: '₦800,000 - ₦950,000',
        newMonthly2026: '₦1,250,000 - ₦1,550,000',
        annualEstimate: '₦15,000,000 - ₦18,600,000',
        takeHomeEstimate: '₦1,650,000',
        qualification: 'Air Rank Selection',
        allowancesSummary: 'Executive staff car, security detail, entertainment grant',
        responsibilities: 'Director at Defence HQ, Deputy Commandant at Armed Forces institutions.'
      },
      {
        rank: 'Air Vice Marshal (2-Star)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 14',
        oldMonthly: '₦1,200,000 - ₦1,450,000',
        newMonthly2026: '₦1,800,000 - ₦2,250,000',
        annualEstimate: '₦21,600,000 - ₦27,000,000',
        takeHomeEstimate: '₦2,400,000',
        qualification: 'Air Rank Appointment',
        allowancesSummary: 'Principal Staff Officer executive package',
        responsibilities: 'Air Officer Commanding (AOC) of Tactical Air Command, Mobility Command, etc.'
      },
      {
        rank: 'Air Marshal (3-Star) / Air Chief Marshal (4-Star)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONAFSS 15 / 16',
        oldMonthly: '₦1,600,000 - ₦2,200,000',
        newMonthly2026: '₦2,400,000 - ₦3,350,000',
        annualEstimate: '₦28,800,000 - ₦40,200,000',
        takeHomeEstimate: '₦3,600,000',
        qualification: 'Chief of the Air Staff / Chief of Defence Staff',
        allowancesSummary: 'Full Service Chief executive perquisites',
        responsibilities: 'Chief of the Air Staff (CAS) commanding all air defense operations of the nation.'
      }
    ],
    faqs: [
      {
        question: 'What is the starting salary of a Nigerian Air Force recruit in 2026?',
        answer: 'A newly passed-out Aircraftman/Aircraftwoman earns between ₦105,000 and ₦125,000 monthly basic pay under the 2026 updated CONAFSS military scale.'
      },
      {
        question: 'Do Nigerian Air Force pilots get extra salary allowances?',
        answer: 'Yes. Qualified military pilots receive Flight Pay ranging from ₦60,000 to over ₦180,000 monthly, depending on flight hours, jet type (combat/transport), and operational zone deployments.'
      },
      {
        question: 'How much does a DSSC officer earn in the Nigerian Air Force?',
        answer: 'DSSC officers are commissioned as Flying Officers and earn between ₦280,000 and ₦350,000 monthly basic pay, plus subsidized accommodation and officer allowances.'
      }
    ],
    relatedAgencySlugs: ['navy-salary', 'army-salary', 'police-salary', 'customs-salary']
  },

  // 3. CIVIL DEFENCE (NSCDC) SALARY (CONPASS 2026)
  'civil-defence-salary': {
    slug: 'civil-defence-salary',
    agencyName: 'Nigeria Security and Civil Defence Corps (NSCDC)',
    shortName: 'NSCDC',
    branch: 'Civil Defence',
    color: 'bg-red-800',
    gradient: 'from-red-800 to-slate-900',
    badgeCol: 'bg-red-100 text-red-900 border-red-200',
    salaryScale: '2026 Consolidated Paramilitary Salary Structure (CONPASS)',
    seoTitle: 'NSCDC Salary Structure 2026: Civil Defence Rank Table & Pay',
    seoDescription: 'Verified 2026 NSCDC salary structure: Monthly and annual pay for Civil Defence Assistant to Commandant General under CONPASS. Agro-Rangers & weapon hazard allowances.',
    quickAnswer: {
      question: 'How Much Does the Nigeria Security and Civil Defence Corps (NSCDC) Pay in 2026?',
      directAnswer: 'Under the 2026 Consolidated Paramilitary Salary Structure (CONPASS) reflecting the ₦70,000 minimum wage and recent paramilitary adjustments, an entry Civil Defence Assistant (CA III / SSCE holder on GL 03) earns between ₦78,000 and ₦95,000 monthly. A university graduate commissioned as Assistant Superintendent of Corps II (ASCII on GL 08) earns between ₦185,000 and ₦240,000 monthly, plus specialized critical asset hazard stipends.',
      statusText: 'CONPASS 2026 Verified Scale',
      metrics: [
        { label: 'Assistant Cadre (SSCE GL 03)', value: '₦78,000 - ₦95,000 / mo', highlight: true },
        { label: 'Superintendent (B.Sc GL 08)', value: '₦185,000 - ₦240,000 / mo' },
        { label: 'Salary Scale', value: 'CONPASS 2026' },
        { label: 'Critical Asset Hazard', value: '₦20k - ₦45k / mo' }
      ]
    },
    introOverview: 'The Nigeria Security and Civil Defence Corps (NSCDC) is a statutory paramilitary agency under the Federal Ministry of Interior. Charged with protecting critical national assets and infrastructure, combating pipeline vandalism, licensing private security companies, and managing crisis mitigation, personnel are paid according to the Consolidated Paramilitary Salary Structure (CONPASS).',
    scaleDescription: 'The CONPASS pay scale standardizes compensation across CDCFIB paramilitary bodies (NSCDC, NIS, NCoS, and FFS). Grade Levels range from GL 03 for SSCE entrants up to GL 17 for executive commandants.',
    allowances: [
      { name: 'Critical Infrastructure Hazard Allowance', rate: '₦20,000 - ₦45,000 / month', eligibility: 'Officers guarding oil pipelines, telecommunications towers, rail tracks, and electrical grids.' },
      { name: 'Agro-Rangers Special Operations Pay', rate: '₦25,000 - ₦50,000 / month', eligibility: 'Elite armed personnel deployed to secure farmlands and livestock corridors.' },
      { name: 'Uniform & Accoutrement Allowance', rate: 'Annual statutory payment', eligibility: 'All confirmed officers and corps assistants.' },
      { name: 'Anti-Vandal Operational Bonus', rate: '₦30,000 - ₦60,000 / mission', eligibility: 'Field officers on active anti-illegal bunkering task forces in Niger Delta.' }
    ],
    ranks: [
      {
        rank: 'Civil Defence Assistant III (CA III)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONPASS GL 03',
        oldMonthly: '₦38,000 - ₦43,000',
        newMonthly2026: '₦78,000 - ₦95,000',
        annualEstimate: '₦936,000 - ₦1,140,000',
        takeHomeEstimate: '₦88,000',
        qualification: 'SSCE / WAEC / NECO with 4 credits',
        allowancesSummary: 'Station sentry stipend + Uniform upkeep',
        responsibilities: 'Entry-level guard duty, static sentry at federal buildings, point surveillance.'
      },
      {
        rank: 'Civil Defence Assistant II (CA II)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONPASS GL 04',
        oldMonthly: '₦45,000 - ₦50,000',
        newMonthly2026: '₦95,000 - ₦110,000',
        annualEstimate: '₦1,140,000 - ₦1,320,000',
        takeHomeEstimate: '₦104,000',
        qualification: 'SSCE + Trade Certificate or Seniority',
        allowancesSummary: 'Patrol hazard allowance + Kit maintenance',
        responsibilities: 'Mobile patrol support, perimeter security at public facilities.'
      },
      {
        rank: 'Civil Defence Assistant I (CA I)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONPASS GL 05',
        oldMonthly: '₦54,000 - ₦60,000',
        newMonthly2026: '₦110,000 - ₦128,000',
        annualEstimate: '₦1,320,000 - ₦1,536,000',
        takeHomeEstimate: '₦120,000',
        qualification: 'Seniority advancement / Technical certificate',
        allowancesSummary: 'Team leader bonus',
        responsibilities: 'Assistant team leader for guard squads, asset log documentation.'
      },
      {
        rank: 'Assistant Inspector of Corps (AIC)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONPASS GL 06',
        oldMonthly: '₦65,000 - ₦72,000',
        newMonthly2026: '₦130,000 - ₦150,000',
        annualEstimate: '₦1,560,000 - ₦1,800,000',
        takeHomeEstimate: '₦142,000',
        qualification: 'ND (National Diploma) / NCE',
        allowancesSummary: 'Inspectorate cadre stipend',
        responsibilities: 'Sub-station operational supervisor, disaster response unit team member.'
      },
      {
        rank: 'Inspector of Corps (IC)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONPASS GL 07',
        oldMonthly: '₦78,000 - ₦88,000',
        newMonthly2026: '₦150,000 - ₦175,000',
        annualEstimate: '₦1,800,000 - ₦2,100,000',
        takeHomeEstimate: '₦165,000',
        qualification: 'HND / Advanced Inspectorate Exam',
        allowancesSummary: 'Unit leadership allowance',
        responsibilities: 'Senior field inspector, intelligence gathering on pipeline vandalism.'
      },
      {
        rank: 'Assistant Superintendent of Corps II (ASCII)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 08',
        oldMonthly: '₦88,000 - ₦98,000',
        newMonthly2026: '₦185,000 - ₦240,000',
        annualEstimate: '₦2,220,000 - ₦2,880,000',
        takeHomeEstimate: '₦215,000',
        qualification: 'B.Sc / B.A / First Degree + NYSC Certificate',
        allowancesSummary: 'Officer command allowance, hazard pay, uniform maintenance',
        responsibilities: 'Divisional operations officer, platoon commander in Agro-Rangers or Anti-Vandal unit.'
      },
      {
        rank: 'Assistant Superintendent of Corps I (ASCI)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 09',
        oldMonthly: '₦100,000 - ₦115,000',
        newMonthly2026: '₦225,000 - ₦285,000',
        annualEstimate: '₦2,700,000 - ₦3,420,000',
        takeHomeEstimate: '₦255,000',
        qualification: 'Seniority promotion from ASCII',
        allowancesSummary: 'Special operations command stipend',
        responsibilities: 'Station officer, unit head for private security company regulation.'
      },
      {
        rank: 'Deputy Superintendent of Corps (DSC)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 10',
        oldMonthly: '₦120,000 - ₦135,000',
        newMonthly2026: '₦275,000 - ₦340,000',
        annualEstimate: '₦3,300,000 - ₦4,080,000',
        takeHomeEstimate: '₦310,000',
        qualification: 'Command promotional examination',
        allowancesSummary: 'Divisional executive allowance',
        responsibilities: 'Divisional Officer (DO) heading local government command posts.'
      },
      {
        rank: 'Superintendent of Corps (SC)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 11',
        oldMonthly: '₦140,000 - ₦160,000',
        newMonthly2026: '₦325,000 - ₦400,000',
        annualEstimate: '₦3,900,000 - ₦4,800,000',
        takeHomeEstimate: '₦365,000',
        qualification: 'Senior Command Training',
        allowancesSummary: 'Area command leadership stipend',
        responsibilities: 'Area commander overseeing multiple local government divisions.'
      },
      {
        rank: 'Commandant (State Command)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 14 / 15',
        oldMonthly: '₦240,000 - ₦290,000',
        newMonthly2026: '₦480,000 - ₦620,000',
        annualEstimate: '₦5,760,000 - ₦7,440,000',
        takeHomeEstimate: '₦550,000',
        qualification: 'State Command Executive Appointment',
        allowancesSummary: 'State Command executive package + Official escort',
        responsibilities: 'State Commandant heading the entire NSCDC operations in a state.'
      }
    ],
    faqs: [
      {
        question: 'What is the monthly salary of an NSCDC recruit in 2026?',
        answer: 'An SSCE recruit (Civil Defence Assistant III on GL 03) earns between ₦78,000 and ₦95,000 monthly, while a graduate entering as Assistant Superintendent of Corps II (GL 08) receives between ₦185,000 and ₦240,000 monthly under the 2026 CONPASS scale.'
      },
      {
        question: 'Are NSCDC officers entitled to weapons and hazard allowances?',
        answer: 'Yes. Personnel deployed to armed squads such as Agro-Rangers, Anti-Vandal Units, and Critical National Asset Protection teams receive specialized monthly hazard allowances ranging from ₦20,000 to ₦50,000.'
      },
      {
        question: 'Does Civil Defence use CONPASS or CONAFSS?',
        answer: 'The NSCDC operates under the Consolidated Paramilitary Salary Structure (CONPASS), which also governs Immigration (NIS), Correctional Services (NCoS), and Federal Fire Service (FFS).'
      }
    ],
    relatedAgencySlugs: ['immigration-salary', 'police-salary', 'customs-salary', 'army-salary']
  },

  // 4. NIGERIA IMMIGRATION SERVICE (NIS) SALARY (CONPASS 2026)
  'immigration-salary': {
    slug: 'immigration-salary',
    agencyName: 'Nigeria Immigration Service (NIS)',
    shortName: 'NIS',
    branch: 'Immigration',
    color: 'bg-emerald-800',
    gradient: 'from-emerald-800 to-slate-900',
    badgeCol: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    salaryScale: '2026 Consolidated Paramilitary Salary Structure (CONPASS)',
    seoTitle: 'Nigeria Immigration Salary Structure 2026: NIS Ranks & Pay Table',
    seoDescription: 'Official 2026 Nigeria Immigration Service salary structure: Monthly and annual pay for Immigration Assistant to Comptroller General. Border hazard pay & ranks.',
    quickAnswer: {
      question: 'How Much Does the Nigeria Immigration Service (NIS) Pay in 2026?',
      directAnswer: 'Under the updated 2026 CONPASS scale, an entry-level Immigration Assistant (IA III / SSCE holder on GL 03) earns between ₦78,000 and ₦95,000 monthly. A university graduate commissioned as an Assistant Superintendent of Immigration II (ASI II on GL 08) earns between ₦185,000 and ₦240,000 monthly. Officers at airports and international border frontiers receive additional border patrol and shift allowances.',
      statusText: 'CONPASS 2026 NIS Scale Verified',
      metrics: [
        { label: 'Immigration Assistant (GL 03)', value: '₦78,000 - ₦95,000 / mo', highlight: true },
        { label: 'Superintendent (B.Sc GL 08)', value: '₦185,000 - ₦240,000 / mo' },
        { label: 'Salary Scale', value: 'CONPASS 2026' },
        { label: 'Border Patrol Hazard', value: '₦25k - ₦50k / mo' }
      ]
    },
    introOverview: 'The Nigeria Immigration Service (NIS) is the primary paramilitary agency managing border security, passport issuance, visa administration, and surveillance against trans-border human trafficking. Regulated under the CDCFIB board, its officers are compensated via the Consolidated Paramilitary Salary Structure (CONPASS).',
    scaleDescription: 'Compensation is categorized across Assistant, Inspectorate, and Superintendent cadres. Officers assigned to international airports, sea borders, and remote land frontier posts earn specialized border enforcement allowances.',
    allowances: [
      { name: 'Border Patrol & Frontier Hazard Allowance', rate: '₦25,000 - ₦50,000 / month', eligibility: 'Officers stationed along northern and western international border checkpoints.' },
      { name: 'Airport / Passport Office Shift Allowance', rate: '₦20,000 - ₦40,000 / month', eligibility: 'Officers at international airports and passport processing centers.' },
      { name: 'ECOWAS / Expatriate Surveillance Stipend', rate: '₦25,000 - ₦45,000 / month', eligibility: 'Intelligence officers monitoring alien residency and CERPAC work permits.' },
      { name: 'Uniform & Gear Maintenance', rate: 'Annual statutory payment', eligibility: 'All confirmed officers and assistants.' }
    ],
    ranks: [
      {
        rank: 'Immigration Assistant III (IA III)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONPASS GL 03',
        oldMonthly: '₦38,000 - ₦43,000',
        newMonthly2026: '₦78,000 - ₦95,000',
        annualEstimate: '₦936,000 - ₦1,140,000',
        takeHomeEstimate: '₦88,000',
        qualification: 'SSCE / WAEC / NECO with 4 credits',
        allowancesSummary: 'Entry sentry allowance + Uniform stipend',
        responsibilities: 'Border sentry, vehicle manifest checking, gate security at command centers.'
      },
      {
        rank: 'Immigration Assistant II (IA II)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONPASS GL 04',
        oldMonthly: '₦46,000 - ₦52,000',
        newMonthly2026: '₦95,000 - ₦110,000',
        annualEstimate: '₦1,140,000 - ₦1,320,000',
        takeHomeEstimate: '₦104,000',
        qualification: 'SSCE + Relevant Technical Certificate',
        allowancesSummary: 'Frontier patrol hazard pay',
        responsibilities: 'Assisting passport verification desks, frontier surveillance patrols.'
      },
      {
        rank: 'Immigration Assistant I (IA I)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'CONPASS GL 05',
        oldMonthly: '₦55,000 - ₦62,000',
        newMonthly2026: '₦110,000 - ₦128,000',
        annualEstimate: '₦1,320,000 - ₦1,536,000',
        takeHomeEstimate: '₦120,000',
        qualification: 'Seniority advancement from IA II',
        allowancesSummary: 'Patrol lead bonus',
        responsibilities: 'Senior assistant supervisor for frontier patrol squads.'
      },
      {
        rank: 'Assistant Inspector of Immigration (AII)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONPASS GL 06',
        oldMonthly: '₦66,000 - ₦74,000',
        newMonthly2026: '₦130,000 - ₦150,000',
        annualEstimate: '₦1,560,000 - ₦1,800,000',
        takeHomeEstimate: '₦142,000',
        qualification: 'National Diploma (ND) / NCE',
        allowancesSummary: 'Biometric capture desk bonus',
        responsibilities: 'Biometric passport enrollment, alien registration records.'
      },
      {
        rank: 'Inspector of Immigration (II)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'CONPASS GL 07',
        oldMonthly: '₦78,000 - ₦88,000',
        newMonthly2026: '₦150,000 - ₦175,000',
        annualEstimate: '₦1,800,000 - ₦2,100,000',
        takeHomeEstimate: '₦165,000',
        qualification: 'Higher National Diploma (HND)',
        allowancesSummary: 'Inspectorate leadership allowance',
        responsibilities: 'Passport production supervisor, border post shift commander.'
      },
      {
        rank: 'Assistant Superintendent of Immigration II (ASI II)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 08',
        oldMonthly: '₦88,000 - ₦98,000',
        newMonthly2026: '₦185,000 - ₦240,000',
        annualEstimate: '₦2,220,000 - ₦2,880,000',
        takeHomeEstimate: '₦215,000',
        qualification: 'B.Sc / B.A + NYSC Discharge Certificate',
        allowancesSummary: 'Superintendent command allowance, border hazard pay',
        responsibilities: 'Airport terminal immigration officer, visa clearance officer, border station head.'
      },
      {
        rank: 'Assistant Superintendent of Immigration I (ASI I)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 09',
        oldMonthly: '₦102,000 - ₦116,000',
        newMonthly2026: '₦225,000 - ₦285,000',
        annualEstimate: '₦2,700,000 - ₦3,420,000',
        takeHomeEstimate: '₦255,000',
        qualification: 'Seniority / Officer promotional test',
        allowancesSummary: 'Border intelligence stipend',
        responsibilities: 'Anti-human trafficking unit supervisor, passport processing unit leader.'
      },
      {
        rank: 'Deputy Superintendent of Immigration (DSI)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 10',
        oldMonthly: '₦122,000 - ₦138,000',
        newMonthly2026: '₦275,000 - ₦340,000',
        annualEstimate: '₦3,300,000 - ₦4,080,000',
        takeHomeEstimate: '₦310,000',
        qualification: 'Advanced Paramilitary Staff Training',
        allowancesSummary: 'Border command head allowance',
        responsibilities: 'Head of border outpost command, investigation division head.'
      },
      {
        rank: 'Comptroller of Immigration (CIS)',
        category: 'Commissioned Officers',
        gradeLevel: 'CONPASS GL 14 / 15',
        oldMonthly: '₦240,000 - ₦290,000',
        newMonthly2026: '₦480,000 - ₦620,000',
        annualEstimate: '₦5,760,000 - ₦7,440,000',
        takeHomeEstimate: '₦550,000',
        qualification: 'State Command Executive Appointment',
        allowancesSummary: 'Comptroller command vehicle, security escort',
        responsibilities: 'State Comptroller heading immigration commands or international airport borders.'
      }
    ],
    faqs: [
      {
        question: 'How much does an Immigration officer earn in Nigeria in 2026?',
        answer: 'Entry-level Immigration Assistants (SSCE on GL 03) earn between ₦78,000 and ₦95,000 monthly, while university graduates joining as Assistant Superintendent of Immigration II (GL 08) receive between ₦185,000 and ₦240,000 monthly under the 2026 CONPASS scale.'
      },
      {
        question: 'Are there extra bonuses for working at international airports?',
        answer: 'Yes. Personnel deployed to high-intensity ports of entry (Lagos MMIA, Abuja Nnamdi Azikiwe, Kano Aminu Kano, and seaports) receive shift rotation and port facilitation allowances.'
      },
      {
        question: 'What is the salary scale used by Nigeria Immigration Service?',
        answer: 'The Nigeria Immigration Service uses the Consolidated Paramilitary Salary Structure (CONPASS), established by the National Salaries, Incomes and Wages Commission.'
      }
    ],
    relatedAgencySlugs: ['civil-defence-salary', 'customs-salary', 'police-salary', 'army-salary']
  },

  // 5. NNPC LIMITED SALARY (CORPORATE ENERGY SCALE 2026)
  'nnpc-salary': {
    slug: 'nnpc-salary',
    agencyName: 'NNPC Limited',
    shortName: 'NNPC',
    branch: 'NNPC',
    color: 'bg-emerald-700',
    gradient: 'from-emerald-700 to-slate-900',
    badgeCol: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    salaryScale: '2026 NNPC Limited Corporate Energy Salary Structure',
    seoTitle: 'NNPC Salary Structure 2026: Graduate Trainee & Senior Staff Pay Table',
    seoDescription: 'Verified 2026 NNPC Limited salary structure: Monthly and annual pay for Graduate Trainees, Experienced Hires, and Managers. Bonuses, allowances & benefits.',
    quickAnswer: {
      question: 'How Much Does NNPC Limited Pay in 2026?',
      directAnswer: 'In 2026, an NNPC Limited Graduate Trainee (entry-level post-NYSC) earns between ₦280,000 and ₦420,000 monthly basic pay, with total monthly compensation reaching ₦400,000 - ₦600,000+ when upfront housing allowances, transport subsidies, and medical benefits are factored in (annual gross package: ₦4.5M - ₦7.2M). Experienced Senior Staff earn ₦900,000 to ₦1.5M monthly, while Managers earn ₦1.8M to ₦3.5M monthly.',
      statusText: 'NNPC Corporate Scale 2026 Verified',
      metrics: [
        { label: 'Graduate Trainee (Entry)', value: '₦280k - ₦420k / mo', highlight: true },
        { label: 'Annual Package (Entry)', value: '₦4.5M - ₦7.2M / yr' },
        { label: 'Senior Staff (Experienced)', value: '₦900k - ₦1.5M / mo' },
        { label: 'Managerial Grade', value: '₦1.8M - ₦3.5M / mo' }
      ]
    },
    introOverview: 'NNPC Limited is Nigeria\'s national commercial energy corporation operating in crude oil exploration, gas commercialization, refining, midstream shipping, and retail marketing. As a commercial CAMA corporation, its compensation structure is among the highest in Sub-Saharan Africa, offering generous upfront housing grants, comprehensive family health coverage, and performance-driven profit shares.',
    scaleDescription: 'NNPC operates an autonomous corporate grading structure (JS for Junior Staff, SS for Senior Staff, and M for Managerial cadres) separate from civil service scales. All confirmed employees receive upfront annual emoluments.',
    allowances: [
      { name: 'Upfront Annual Housing Allowance', rate: '₦1,800,000 - ₦6,500,000 / year', eligibility: 'Paid upfront annually to confirmed permanent employees based on grade level.' },
      { name: 'Offshore & Platform Hazard Bonus', rate: '₦150,000 - ₦400,000 / month', eligibility: 'Engineers, geologists, and technicians stationed on offshore platforms and FPSOs.' },
      { name: '13th Month & Annual Profit-Share Bonus', rate: '1 to 3 months basic salary', eligibility: 'All confirmed permanent staff based on annual corporate revenue benchmarks.' },
      { name: 'Comprehensive Medical Insurance (HMO)', rate: '100% Comprehensive Coverage', eligibility: 'Employee, legal spouse, and up to 4 biological children in tier-1 private hospitals.' }
    ],
    ranks: [
      {
        rank: 'Graduate Trainee (GT)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'Corporate Grade JS 01',
        oldMonthly: '₦220,000 - ₦260,000',
        newMonthly2026: '₦280,000 - ₦420,000',
        annualEstimate: '₦4,500,000 - ₦6,500,000',
        takeHomeEstimate: '₦360,000',
        qualification: 'First Class or Second Class Upper (2:1) Degree + NYSC Certificate',
        allowancesSummary: 'Relocation bonus, upfront housing allowance, medical HMO',
        responsibilities: '12-month foundational rotation across upstream, gas, midstream, and commercial divisions.'
      },
      {
        rank: 'Officer / Technical Specialist',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'Corporate Grade SS 01',
        oldMonthly: '₦350,000 - ₦420,000',
        newMonthly2026: '₦480,000 - ₦680,000',
        annualEstimate: '₦6,800,000 - ₦9,200,000',
        takeHomeEstimate: '₦560,000',
        qualification: 'Post-trainee confirmation / 2-3 years post-NYSC experience',
        allowancesSummary: 'Field deployment pay + Transport subsidy',
        responsibilities: 'Petroleum engineering analysis, crude accounting, logistics tracking, legal contracts.'
      },
      {
        rank: 'Senior Officer / Senior Engineer',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'Corporate Grade SS 02',
        oldMonthly: '₦480,000 - ₦600,000',
        newMonthly2026: '₦720,000 - ₦950,000',
        annualEstimate: '₦9,800,000 - ₦13,000,000',
        takeHomeEstimate: '₦820,000',
        qualification: '5+ years specialized oil & gas technical experience',
        allowancesSummary: 'Project hazard stipend + Annual leave bonus',
        responsibilities: 'Supervising pipeline asset maintenance, JV audits, reservoir modeling.'
      },
      {
        rank: 'Lead Specialist / Deputy Manager',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'Corporate Grade SS 03',
        oldMonthly: '₦650,000 - ₦800,000',
        newMonthly2026: '₦950,000 - ₦1,350,000',
        annualEstimate: '₦13,500,000 - ₦18,500,000',
        takeHomeEstimate: '₦1,100,000',
        qualification: '7-10 years experience + Professional certifications (NSE, COREN, SPE)',
        allowancesSummary: 'Executive vehicle allowance + Overseas training grants',
        responsibilities: 'Managing project teams, gas commercialization tenders, regulatory compliance.'
      },
      {
        rank: 'Manager',
        category: 'Commissioned Officers',
        gradeLevel: 'Corporate Grade M 01',
        oldMonthly: '₦950,000 - ₦1,300,000',
        newMonthly2026: '₦1,500,000 - ₦2,200,000',
        annualEstimate: '₦20,000,000 - ₦29,000,000',
        takeHomeEstimate: '₦1,750,000',
        qualification: '12+ years energy sector track record',
        allowancesSummary: 'Official executive SUV, domestic staff allowance, child education support',
        responsibilities: 'Departmental head, asset manager for major joint-venture production fields.'
      },
      {
        rank: 'General Manager (GM)',
        category: 'Commissioned Officers',
        gradeLevel: 'Corporate Grade GM',
        oldMonthly: '₦1,800,000 - ₦2,500,000',
        newMonthly2026: '₦2,800,000 - ₦4,500,000',
        annualEstimate: '₦38,000,000 - ₦60,000,000',
        takeHomeEstimate: '₦3,400,000',
        qualification: 'Executive leadership credentials',
        allowancesSummary: 'Full corporate executive perquisites',
        responsibilities: 'Leading strategic business units (e.g., NNPC Upstream, Retail, Trading, Gas).'
      }
    ],
    faqs: [
      {
        question: 'How much does an NNPC Graduate Trainee earn monthly in 2026?',
        answer: 'An NNPC Graduate Trainee earns between ₦280,000 and ₦420,000 monthly basic pay, which expands to over ₦400,000 - ₦600,000 monthly in total emoluments when upfront annual rent, transport, and 13th-month bonuses are included.'
      },
      {
        question: 'What are the main benefits of working at NNPC Limited?',
        answer: 'Benefits include 100% comprehensive medical insurance for the employee and family in top-tier hospitals, upfront annual housing allowances, 13th-month bonus, retirement pension contributions, and paid professional development trainings.'
      },
      {
        question: 'How are salaries paid at NNPC?',
        answer: 'Salaries are paid monthly through NNPC\'s internal corporate treasury systems, unaffected by standard civil service budget delays.'
      }
    ],
    relatedAgencySlugs: ['cbn-salary', 'customs-salary', 'army-salary', 'navy-salary']
  },

  // 6. CENTRAL BANK OF NIGERIA (CBN) SALARY (FINANCIAL SCALE 2026)
  'cbn-salary': {
    slug: 'cbn-salary',
    agencyName: 'Central Bank of Nigeria (CBN)',
    shortName: 'CBN',
    branch: 'CBN',
    color: 'bg-teal-900',
    gradient: 'from-teal-900 to-slate-950',
    badgeCol: 'bg-teal-100 text-teal-900 border-teal-200',
    salaryScale: '2026 CBN Consolidated Financial Institution Pay Scale',
    seoTitle: 'CBN Salary Structure 2026: Executive & Graduate Trainee Pay Table',
    seoDescription: 'Verified 2026 Central Bank of Nigeria (CBN) salary structure: Monthly and annual pay for Graduate Trainee, Assistant Manager to Director. Full benefits breakdown.',
    quickAnswer: {
      question: 'How Much Does the Central Bank of Nigeria (CBN) Pay in 2026?',
      directAnswer: 'In 2026, an entry-level Graduate Trainee / Executive Trainee at the Central Bank of Nigeria (CBN) earns between ₦280,000 and ₦380,000 basic monthly salary, with total compensation reaching ₦450,000 - ₦650,000+ monthly once upfront housing grants and generous staff allowances are added (annual package: ₦4.8M - ₦7.5M). Banking Officers earn ₦550,000 to ₦850,000, Assistant Managers earn ₦1.0M to ₦1.6M, while Directors earn ₦3.5M to ₦6.0M monthly.',
      statusText: 'CBN Financial Scale 2026 Verified',
      metrics: [
        { label: 'Executive Trainee (Entry)', value: '₦280k - ₦380k / mo', highlight: true },
        { label: 'Annual Total (Entry)', value: '₦4.8M - ₦7.5M / yr' },
        { label: 'Assistant Manager', value: '₦1.0M - ₦1.6M / mo' },
        { label: 'Staff Loan Subsidy', value: 'Concessional Mortgages' }
      ]
    },
    introOverview: 'The Central Bank of Nigeria (CBN) is the apex monetary, currency issuance, and banking regulatory authority of Nigeria. Operating independently under the CBN Act, its staff compensation framework is among the most prestigious and secure financial careers in Nigeria, featuring upfront annual allowances, low-interest mortgage facilities, and premium private healthcare.',
    scaleDescription: 'The CBN operates an autonomous financial remuneration structure with clear cadres from Executive Trainees to Banking Officers, Managers, and Directors. Allowances comprise the majority of total emoluments.',
    allowances: [
      { name: 'Upfront Annual Housing Allowance', rate: 'Upfront annual disbursement (₦1.5M - ₦8M)', eligibility: 'All confirmed CBN employees scaled by branch location (Abuja/Lagos tier 1).' },
      { name: 'Staff Concessional Loan Facilities', rate: 'Ultra low-interest subsidized rates', eligibility: 'Home mortgages and car financing for confirmed permanent staff.' },
      { name: 'Child Education & Welfare Grant', rate: 'Annual grant per child', eligibility: 'Up to 4 eligible biological children.' },
      { name: 'Branch Hazard & Currency Processing Bonus', rate: '₦35,000 - ₦80,000 / month', eligibility: 'Currency operations officers managing mint vault and cash distribution.' }
    ],
    ranks: [
      {
        rank: 'Executive Trainee (ET / Graduate Intake)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'Junior Staff (ET)',
        oldMonthly: '₦190,000 - ₦240,000',
        newMonthly2026: '₦280,000 - ₦380,000',
        annualEstimate: '₦4,800,000 - ₦7,500,000',
        takeHomeEstimate: '₦350,000 (basic net)',
        qualification: 'First Class or Second Class Upper (2:1) in Economics, Banking, Accounting, Computer Science, Law',
        allowancesSummary: 'Upfront housing subsidy + Medical HMO',
        responsibilities: 'Rotation across banking supervision, monetary policy, currency ops, and development finance.'
      },
      {
        rank: 'Banking Officer (BO)',
        category: 'Non-Commissioned (Recruits & Junior)',
        gradeLevel: 'Senior Staff (BO)',
        oldMonthly: '₦320,000 - ₦400,000',
        newMonthly2026: '₦550,000 - ₦750,000',
        annualEstimate: '₦8,000,000 - ₦11,000,000',
        takeHomeEstimate: '₦620,000',
        qualification: 'Confirmed Banking Trainee + 2-3 years experience',
        allowancesSummary: 'Branch operational allowance + Leave grant',
        responsibilities: 'Commercial bank compliance audits, foreign exchange monitoring desks, payments oversight.'
      },
      {
        rank: 'Senior Banking Officer (SBO)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'Senior Staff (SBO)',
        oldMonthly: '₦450,000 - ₦550,000',
        newMonthly2026: '₦780,000 - ₦1,100,000',
        annualEstimate: '₦12,000,000 - ₦16,500,000',
        takeHomeEstimate: '₦890,000',
        qualification: '5+ years apex banking experience + Professional accreditation (ACIB, ICAN)',
        allowancesSummary: 'Supervisory allowance + Concessional mortgage access',
        responsibilities: 'Team lead for financial market operations, payment system surveillance.'
      },
      {
        rank: 'Assistant Manager (AM)',
        category: 'Senior Non-Commissioned / Inspectorate',
        gradeLevel: 'Managerial (AM)',
        oldMonthly: '₦580,000 - ₦700,000',
        newMonthly2026: '₦1,050,000 - ₦1,500,000',
        annualEstimate: '₦16,000,000 - ₦22,000,000',
        takeHomeEstimate: '₦1,250,000',
        qualification: '8+ years banking track record',
        allowancesSummary: 'Executive vehicle financing + Family welfare package',
        responsibilities: 'Heading sub-divisions within state branches, lead bank examiner.'
      },
      {
        rank: 'Deputy Manager (DM) / Manager',
        category: 'Commissioned Officers',
        gradeLevel: 'Managerial (DM/M)',
        oldMonthly: '₦750,000 - ₦950,000',
        newMonthly2026: '₦1,500,000 - ₦2,200,000',
        annualEstimate: '₦22,000,000 - ₦32,000,000',
        takeHomeEstimate: '₦1,750,000',
        qualification: '10+ years policy & regulatory experience',
        allowancesSummary: 'Comprehensive executive allowances + Official vehicle',
        responsibilities: 'Managing branch departments, key monetary policy formulation.'
      },
      {
        rank: 'Director / Branch Controller',
        category: 'Commissioned Officers',
        gradeLevel: 'Executive Directorate',
        oldMonthly: '₦1,500,000 - ₦2,200,000',
        newMonthly2026: '₦3,500,000 - ₦5,500,000',
        annualEstimate: '₦50,000,000 - ₦80,000,000',
        takeHomeEstimate: '₦4,200,000',
        qualification: 'Apex financial sector executive leadership',
        allowancesSummary: 'Full central banking executive perquisites',
        responsibilities: 'State Branch Controller, Director of Monetary Policy, Director of Banking Supervision.'
      }
    ],
    faqs: [
      {
        question: 'How much does a CBN Executive Trainee earn in 2026?',
        answer: 'A newly recruited Executive Trainee earns between ₦280,000 and ₦380,000 basic monthly salary. When including upfront housing grants and generous staff allowances, total compensation ranges from ₦450,000 to over ₦650,000 monthly.'
      },
      {
        question: 'What are the main perks of working at the Central Bank of Nigeria?',
        answer: 'Key benefits include ultra-low-interest staff mortgage loans, vehicle financing loans, top-tier private healthcare, children\'s education subsidies, and excellent retirement benefits.'
      },
      {
        question: 'Does CBN recruit every year?',
        answer: 'The CBN conducts targeted recruitment based on departmental vacancies and economic expansion. Be cautious of scam portals—the CBN never charges application fees.'
      }
    ],
    relatedAgencySlugs: ['nnpc-salary', 'customs-salary', 'army-salary', 'police-salary']
  }
};
