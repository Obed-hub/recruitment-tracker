export interface JobAptitudeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: 'Numerical' | 'Verbal' | 'Abstract' | 'Technical' | 'Situational' | 'Pedagogy' | 'Public Service';
}

export interface StarModelAnswer {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface JobInterviewQuestion {
  id: string;
  question: string;
  frequency: 'High' | 'Very High' | 'Crucial';
  recruiterIntent: string;
  redFlags: string[];
  modelAnswer: {
    summary: string;
    starBreakdown: StarModelAnswer;
    freshGraduateTip: string;
    experiencedTip?: string;
  };
  sampleAnswerScript: string;
  proTip?: string;
}

export interface JobSector {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline: string;
  description: string;
  iconName: 'Building2' | 'Flame' | 'Landmark' | 'GraduationCap' | 'HeartPulse' | 'Globe2' | 'Cpu' | 'Headphones';
  themeColor: {
    primary: string;
    bgLight: string;
    badge: string;
    border: string;
  };
  targetEmployers: string[];
  salaryOverview: {
    entryLevel: string;
    midLevel: string;
    seniorLevel: string;
  };
  aptitudeTestOverview: {
    testBody: string;
    durationMinutes: number;
    recommendedSpeed: string;
    keySubjects: string[];
  };
  aptitudeQuestions: JobAptitudeQuestion[];
  interviewQuestions: JobInterviewQuestion[];
  faqs: { question: string; answer: string }[];
}

export const JOB_SECTORS: JobSector[] = [
  // 1. COMMERCIAL BANKING & FINANCE
  {
    id: 'banking-finance',
    slug: 'banking-finance',
    title: 'Commercial Banking & Graduate Trainee',
    shortTitle: 'Banking & Finance',
    heroHeadline: 'Commercial Banking Aptitude Test Practice & Top Interview Questions 2026/2027',
    description: 'Master commercial bank entry-level recruitment in Nigeria. Practice Dragnet/Workforce-style numerical reasoning, currency math, and learn exact STAR model answers for bank interview panels.',
    iconName: 'Building2',
    themeColor: {
      primary: 'bg-emerald-600',
      bgLight: 'bg-emerald-50',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      border: 'border-emerald-300'
    },
    targetEmployers: ['Access Bank', 'GTBank (Guaranty Trust)', 'Zenith Bank', 'First Bank of Nigeria', 'UBA (United Bank for Africa)', 'Stanbic IBTC', 'Fidelity Bank'],
    salaryOverview: {
      entryLevel: '₦180,000 - ₦380,000 / month',
      midLevel: '₦450,000 - ₦850,000 / month',
      seniorLevel: '₦1,200,000+ / month'
    },
    aptitudeTestOverview: {
      testBody: 'Dragnet Solutions, Workforce Group, SHL',
      durationMinutes: 45,
      recommendedSpeed: '40 seconds per question',
      keySubjects: ['Numerical Data Interpretation', 'Financial Mathematics & Currency', 'Verbal Deductions', 'Abstract Spatial Reasoning']
    },
    aptitudeQuestions: [
      {
        id: 'bk-q1',
        category: 'Numerical',
        question: 'A customer deposits ₦450,000 into a fixed deposit account with an annual interest rate of 12% compounded semi-annually. What will be the total interest earned at the end of 1 year?',
        options: ['₦54,000', '₦55,620', '₦56,250', '₦58,000'],
        correctAnswer: 1,
        explanation: 'For semi-annual compounding: Semi-annual rate = 12% / 2 = 6% (0.06). Number of periods = 2. Total Amount = 450,000 * (1 + 0.06)^2 = 450,000 * 1.1236 = ₦505,620. Total interest = 505,620 - 450,000 = ₦55,620.'
      },
      {
        id: 'bk-q2',
        category: 'Numerical',
        question: 'In Q1, Zenith Branch achieved ₦84 million in loan recovery, which was 20% above their target. What was their original quarterly target?',
        options: ['₦67.2 million', '₦70.0 million', '₦72.5 million', '₦75.0 million'],
        correctAnswer: 1,
        explanation: 'Let target = T. Achieved = 120% of T = 1.2 * T = 84,000,000. Therefore, T = 84,000,000 / 1.2 = ₦70.0 million.'
      },
      {
        id: 'bk-q3',
        category: 'Verbal',
        question: 'Statement: "All commercial banks operating in Nigeria are regulated by the Central Bank of Nigeria (CBN). Fintech credit companies that offer mobile loans without banking licenses are not regulated directly as commercial banks." Which conclusion is TRUE?',
        options: [
          'Fintech credit companies operate completely illegally in Nigeria.',
          'All entities regulated by the CBN are commercial banks.',
          'A company that is not a commercial bank can still provide credit services under differing frameworks.',
          'The CBN only regulates institutions that have physical branch networks.'
        ],
        correctAnswer: 2,
        explanation: 'The statement establishes that credit companies without commercial bank licenses are not regulated directly as commercial banks; this logically implies other regulatory or operational frameworks exist, while not making them automatically illegal.'
      },
      {
        id: 'bk-q4',
        category: 'Numerical',
        question: 'An FX bureau converts $1,200 to Naira at the buying rate of ₦1,520/$. Later that day, the customer repurchases Dollars at the selling rate of ₦1,560/$. How much did the customer lose due to the spread?',
        options: ['₦36,000', '₦42,000', '₦48,000', '₦52,000'],
        correctAnswer: 2,
        explanation: 'Spread loss per dollar = ₦1,560 - ₦1,520 = ₦40 per dollar. Total loss for $1,200 = 1,200 * ₦40 = ₦48,000.'
      },
      {
        id: 'bk-q5',
        category: 'Situational',
        question: 'A long-standing business customer approaches you to withdraw ₦2.5 million in cash across the counter. The branch network goes completely offline for 25 minutes. The customer begins shouting and threatening to close their accounts. What is the most appropriate action?',
        options: [
          'Hand the customer cash immediately from your drawer and balance it manually when network returns.',
          'Call security to escort the customer outside the premises until they calm down.',
          'Acknowledge their frustration calmly, invite them to the customer lounge, notify the Branch Operations Manager immediately, and offer real-time updates and alternative transfer options if available.',
          'Ignore the customer and continue sorting files until the network returns.'
        ],
        correctAnswer: 2,
        explanation: 'In banking operations, never breach security/dual-control protocols (Option A is a dismissal offense), but actively manage high-value client relationships through empathy, transparency, and escalation.'
      },
      {
        id: 'bk-q6',
        category: 'Numerical',
        question: 'If a bank branch has a Cost-to-Income ratio of 64% and its total operating income for the month is ₦125 million, what were its total operating expenses?',
        options: ['₦75 million', '₦80 million', '₦82.5 million', '₦85 million'],
        correctAnswer: 1,
        explanation: 'Cost-to-Income Ratio = Expenses / Income. Expenses = 0.64 * 125,000,000 = ₦80 million.'
      }
    ],
    interviewQuestions: [
      {
        id: 'bk-iq1',
        question: 'Why do you want to build a career in banking, and why our bank specifically?',
        frequency: 'Crucial',
        recruiterIntent: 'Testing whether you understand what commercial banking actually entails (financial discipline, relationship management, risk consciousness) versus just wanting any job.',
        redFlags: [
          'Saying "I heard banks pay well" or "I studied economics so it is the only logical place".',
          'Reciting generic marketing lines without mentioning specific initiatives (e.g. Access Bank retail expansion or GTBank Habari/Squad ecosystem).'
        ],
        modelAnswer: {
          summary: 'Highlight passion for economic empowerment, customer solutions, and link your skills to this bank\'s unique positioning in digital innovation or SME financing.',
          starBreakdown: {
            situation: 'During my undergraduate project on financial inclusion in Nigeria...',
            task: 'I realized how access to capital and frictionless digital banking directly transforms small businesses.',
            action: 'I researched your institution\'s leadership in digital payment infrastructure (like your mobile channels) and your disciplined graduate development academy.',
            result: 'I am motivated to start at the foundational trainee level where I can master risk assessment, credit analysis, and client relationship management.'
          },
          freshGraduateTip: 'Emphasize your analytical mindset, integrity, and eagerness to undergo rigorous banking school training.'
        },
        sampleAnswerScript: '"I want to build my career in commercial banking because it sits at the engine room of the economy—transforming deposits into viable capital for enterprises. I am specifically drawn to your bank because of your proven record in digital banking innovation and SME support. Unlike institutions that focus solely on corporate conglomerates, your retail footprint empowers everyday entrepreneurs. My background in quantitative analysis and client communication makes your Graduate Trainee Program the exact launchpad where I can add measurable value."',
        proTip: 'Mention one current innovation or recent milestone of the bank (e.g. their holding company expansion or international payments gateway).'
      },
      {
        id: 'bk-iq2',
        question: 'Banking involves strict deposit mobilization and product targets. How do you plan to handle target pressure?',
        frequency: 'Very High',
        recruiterIntent: 'Assessing your resilience, proactive prospecting strategy, and whether you crumble or strategize when faced with aggressive KPIs.',
        redFlags: [
          'Saying "I don\'t like sales" or "I only want back-office operations where there are no targets". Every modern banker is a brand ambassador.',
          'Overpromising unrealistically: "I will just ask all my rich uncles to deposit ₦50M".'
        ],
        modelAnswer: {
          summary: 'Acknowledge that targets are the lifeblood of banking profitability. Outline a systematic 3-step pipeline: lead generation, value-based pitching, and referral compounding.',
          starBreakdown: {
            situation: 'In my previous role / during my NYSC community development service...',
            task: 'We were tasked with raising ₦400,000 sponsorship for a youth literacy campaign within 3 weeks.',
            action: 'Instead of cold calling randomly, I mapped local SMEs, prepared clear corporate benefit decks, and pitched directly to owners.',
            result: 'We exceeded our target by 25%. In banking, I apply this same data-driven prospect segmentation and relationship persistence.'
          },
          freshGraduateTip: 'Explain that you view targets as clear performance scorecards rather than burdens.'
        },
        sampleAnswerScript: '"I view targets as a clear roadmap for success rather than pressure. My approach to meeting deposit and sales goals is structured: first, demographic and market segmentation—identifying high-cashflow clusters such as school proprietors, distributors, and logistics firms; second, offering tailored banking value (like POS terminals and collection accounts) rather than just begging for deposits; and third, leveraging existing satisfied clients for warm referrals."',
        proTip: 'Use terms like "prospective client segmentation", "value proposition", and "conversion rate".'
      },
      {
        id: 'bk-iq3',
        question: 'Describe a situation where a customer was furious over an unreversed POS dispense error. How would you de-escalate it?',
        frequency: 'High',
        recruiterIntent: 'Evaluating emotional intelligence, active listening, compliance with CBN dispute reversal guidelines, and customer retention instincts.',
        redFlags: [
          'Getting defensive or saying "It is not my bank\'s fault, it is the switching company/interswitch".',
          'Promising immediate cash refund from your pocket without logging the dispute.'
        ],
        modelAnswer: {
          summary: 'Apply the HEAT model (Hear, Empathize, Apologize, Take Action). Reassure the customer, log the transaction on the portal, and give clear, realistic timelines.',
          starBreakdown: {
            situation: 'A customer walked in visibly agitated, shouting that ₦85,000 was debited without cash dispensed at a merchant POS 48 hours prior.',
            task: 'My goal was to diffuse the tension, protect the banking hall decorum, and initiate the trace.',
            action: 'I invited the customer to a quiet desk, listened without interrupting, acknowledged the stress of being debited without value, pulled up the core banking transaction log, generated the dispute ticket with the central switch, and gave him my direct extension with a follow-up callback commitment within 24 hours.',
            result: 'The customer calmed down, appreciated being treated with dignity, and the funds reversed automatically the next morning.'
          },
          freshGraduateTip: 'Never argue with an angry client. Never blame the customer.'
        },
        sampleAnswerScript: '"My first priority is always emotional de-escalation: I acknowledge their pain immediately without making technical excuses about network switches. I say, \'I completely understand why you are distressed—having your money tied up without value is frustrating, and I am personally going to track this for you.\' I then confirm transaction details, print the dispute slip, escalate it through the settlement desk, and give them a realistic timeline with my desk contact."',
        proTip: 'Mention adherence to the Central Bank of Nigeria (CBN) electronic payment dispute timeline.'
      }
    ],
    faqs: [
      {
        question: 'What is the format of Nigerian bank aptitude tests?',
        answer: 'Most top commercial banks (Access, GTBank, Zenith, First Bank) use Dragnet Solutions or Workforce Group. The test typically has 3 sections: Numerical Reasoning (20 questions, 20 mins), Verbal Reasoning (20 questions, 20 mins), and Abstract/Logic Reasoning (15 questions, 15 mins).'
      },
      {
        question: 'What is the cut-off mark for bank graduate trainee tests?',
        answer: 'While banks rarely publish exact cut-offs, achieving 70% and above across all sections guarantees progression to the documentation, assessment center, and panel interview rounds.'
      }
    ]
  },

  // 2. OIL, GAS & ENERGY
  {
    id: 'oil-gas-energy',
    slug: 'oil-gas-energy',
    title: 'Oil, Gas & Energy Trainee & Operations',
    shortTitle: 'Oil & Gas',
    heroHeadline: 'Oil & Gas Aptitude Test Practice & High-Stakes Interview Guide 2026/2027',
    description: 'Prepare for NNPC, NLNG, Chevron, TotalEnergies, and Shell recruitment. Practice technical logic, mechanical comprehension, and master HSE-focused STAR interview scenarios.',
    iconName: 'Flame',
    themeColor: {
      primary: 'bg-amber-600',
      bgLight: 'bg-amber-50',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      border: 'border-amber-300'
    },
    targetEmployers: ['NNPC Limited', 'Nigeria LNG (NLNG)', 'TotalEnergies Nigeria', 'Chevron Nigeria', 'Seplat Energy', 'Shell Nigeria (SPDC)', 'Oando Plc'],
    salaryOverview: {
      entryLevel: '₦400,000 - ₦1,200,000 / month',
      midLevel: '₦1,500,000 - ₦3,500,000 / month',
      seniorLevel: '₦5,000,000+ / month'
    },
    aptitudeTestOverview: {
      testBody: 'Dragnet GSE, SHL Technical, Talent Central',
      durationMinutes: 60,
      recommendedSpeed: '50 seconds per question',
      keySubjects: ['Mechanical Comprehension', 'Physics & Spatial Logic', 'Quantitative Data Interpretation', 'Health, Safety & Environment (HSE) Basics']
    },
    aptitudeQuestions: [
      {
        id: 'og-q1',
        category: 'Technical',
        question: 'A pipeline with a cross-sectional area of 0.2 m² carries crude oil flowing at a velocity of 3 m/s. What is the volumetric flow rate of the pipeline in m³/hour?',
        options: ['1,800 m³/hr', '2,160 m³/hr', '2,400 m³/hr', '2,880 m³/hr'],
        correctAnswer: 1,
        explanation: 'Volumetric flow rate Q = Area * Velocity = 0.2 m² * 3 m/s = 0.6 m³/s. In one hour (3,600 seconds): 0.6 * 3,600 = 2,160 m³/hour.'
      },
      {
        id: 'og-q2',
        category: 'Technical',
        question: 'Which of the following is the PRIMARY reason nitrogen gas is commonly used for purging process equipment and fuel storage tanks prior to maintenance?',
        options: [
          'It is highly flammable and assists in burning off residual hydrocarbons.',
          'It is an inert gas that displaces oxygen and volatile hydrocarbons, preventing explosive atmospheres.',
          'It cools the metal faster than liquid carbon dioxide.',
          'It acts as an anti-corrosive sealant on pipeline interior walls.'
        ],
        correctAnswer: 1,
        explanation: 'Nitrogen is inert and non-reactive. Purging equipment with nitrogen displaces oxygen below the Lower Explosive Limit (LEL), preventing fire or explosion hazards.'
      },
      {
        id: 'og-q3',
        category: 'Numerical',
        question: 'A refinery storage tank contains 85,000 barrels of oil. If 15% is discharged on Day 1 and 20% of the remainder is discharged on Day 2, how many barrels remain in the tank?',
        options: ['57,800 barrels', '55,250 barrels', '56,100 barrels', '58,450 barrels'],
        correctAnswer: 0,
        explanation: 'After Day 1: 85,000 * 0.85 = 72,250 barrels. After Day 2: 72,250 * 0.80 = 57,800 barrels.'
      },
      {
        id: 'og-q4',
        category: 'Technical',
        question: 'Under the hierarchy of hazard controls recognized in industrial HSE standards, which of the following is considered the MOST effective control measure?',
        options: [
          'Providing advanced Personal Protective Equipment (PPE)',
          'Administrative controls such as training and warning signage',
          'Elimination of the hazard physically from the workplace',
          'Engineering controls such as ventilation guards'
        ],
        correctAnswer: 2,
        explanation: 'Hierarchy of Controls: Elimination (Most effective) > Substitution > Engineering Controls > Administrative Controls > PPE (Least effective).'
      },
      {
        id: 'og-q5',
        category: 'Abstract',
        question: 'Gear A with 30 teeth meshes with Gear B with 60 teeth. If Gear A rotates clockwise at 120 RPM, what is the speed and direction of Gear B?',
        options: [
          '60 RPM, counter-clockwise',
          '60 RPM, clockwise',
          '240 RPM, counter-clockwise',
          '240 RPM, clockwise'
        ],
        correctAnswer: 0,
        explanation: 'Meshed gears rotate in opposite directions. Gear B speed = (Gear A teeth / Gear B teeth) * Gear A speed = (30/60) * 120 = 60 RPM in the opposite (counter-clockwise) direction.'
      }
    ],
    interviewQuestions: [
      {
        id: 'og-iq1',
        question: 'Safety is our highest corporate value. Can you describe a specific time you identified a safety hazard and took action to mitigate it?',
        frequency: 'Crucial',
        recruiterIntent: 'Oil and gas operators live by "Goal Zero" (zero harm to people, asset, and environment). They want proof that you will speak up and stop unsafe work, regardless of hierarchy.',
        redFlags: [
          'Saying "I have never witnessed any safety hazard". That proves lack of hazard awareness.',
          'Focusing on superficial items like someone not wearing a helmet, rather than demonstrating proactive intervention and root cause resolution.'
        ],
        modelAnswer: {
          summary: 'Use STAR. Describe an actual physical hazard (electrical, trip, chemical, or operational), the intervention you made (Stop Work Authority), and the long-term fix.',
          starBreakdown: {
            situation: 'During a university lab project / my previous logistics work...',
            task: 'I noticed an ungrounded high-voltage compressor line running across a damp floor with personnel walking over it.',
            action: 'I immediately enacted Stop Work Authority, informed the lab technician, cordoned off the area with caution tape, and assisted in re-routing the cabling overhead through insulated conduits.',
            result: 'We eliminated the electrocution hazard, and management integrated overhead conduit routing into the standard pre-experiment safety checklist.'
          },
          freshGraduateTip: 'Even everyday situations (like identifying a gas cylinder leak at home or exposed wires in a workspace) prove your safety mindset.'
        },
        sampleAnswerScript: '"In the energy industry, production never supersedes safety. In my previous role, I noticed heavy scaffolding assembled near an active forklift transit path with no barricade or spotter. I exercised Stop Work Authority by immediately asking the forklift operator to pause, brought the site safety supervisor over, and we established physical delineators and dedicated spotters before resuming. That experience reinforced my conviction that no job is too urgent to be done safely."',
        proTip: 'Explicitly mention the term "Stop Work Authority" (SWA) and "Permit to Work" (PTW).'
      },
      {
        id: 'og-iq2',
        question: 'Are you ready to relocate to remote field or offshore environments (e.g., Bonny Island, Escravos, offshore rigs) on 14/14 or 28/28 day shift rotations?',
        frequency: 'Very High',
        recruiterIntent: 'Assessing psychological resilience, adaptability, and whether you will quit after 6 months due to isolation from city life.',
        redFlags: [
          'Hesitating or asking "Is it possible to stay in the Lagos or Abuja head office instead?".',
          'Unrealistic romanticization without understanding the physical isolation of offshore life.'
        ],
        modelAnswer: {
          summary: 'Confirm enthusiastically with concrete proof of your adaptability to demanding, regimented environments.',
          starBreakdown: {
            situation: 'I chose this industry because I enjoy hands-on operational challenges at the source.',
            task: 'I understand that upstream and midstream value creation happens in the field.',
            action: 'I have previously lived in remote settings during fieldwork / boarding school / NYSC in rural locations without disruption to my productivity.',
            result: 'I am fully prepared for rotation schedules and thrive in focused, goal-oriented camp communities.'
          },
          freshGraduateTip: 'Highlight your physical fitness, mental discipline, and ability to collaborate with diverse teams under pressure.'
        },
        sampleAnswerScript: '"Yes, 100%. I actively sought out this industry because real operational engineering happens on the field, not behind a desk in Victoria Island. I am medically fit, accustomed to regimented team environments, and have no personal commitments that impede immediate relocation to Bonny, Escravos, or offshore rigs. I embrace the rotational schedule as an opportunity for deep, focused immersion in plant operations."',
        proTip: 'Reference familiarity with BOSIET (Basic Offshore Safety Induction and Emergency Training) or HUET.'
      }
    ],
    faqs: [
      {
        question: 'What is Dragnet GSE in Oil & Gas recruitment?',
        answer: 'Dragnet General Standardized Examination (GSE) is the primary testing platform used by NNPC, NLNG, and major oil operators. It consists of Numerical Reasoning, Verbal Reasoning, and Abstract Reasoning, with high emphasis on speed and precision under strict time limits.'
      }
    ]
  },

  // 3. CIVIL SERVICE & PUBLIC SECTOR
  {
    id: 'civil-service',
    slug: 'civil-service',
    title: 'Federal & State Civil Service / Parastatals',
    shortTitle: 'Civil Service',
    heroHeadline: 'Civil Service Exam Past Questions & Board Interview Preparation 2026/2027',
    description: 'Prepare for Federal Civil Service Commission (FCSC), Ministries, Agencies (CBN, FIRS, NAFDAC), and State Civil Service exams. Practice Public Service Rules (PSR), Constitution, and interview etiquette.',
    iconName: 'Landmark',
    themeColor: {
      primary: 'bg-blue-700',
      bgLight: 'bg-blue-50',
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      border: 'border-blue-300'
    },
    targetEmployers: ['Federal Civil Service Commission (FCSC)', 'Central Bank of Nigeria (CBN)', 'Federal Inland Revenue Service (FIRS)', 'NAFDAC', 'NIMC', 'State Civil Service Commissions'],
    salaryOverview: {
      entryLevel: '₦95,000 - ₦320,000 / month (CONPSS/Special scales)',
      midLevel: '₦350,000 - ₦750,000 / month',
      seniorLevel: '₦900,000+ / month'
    },
    aptitudeTestOverview: {
      testBody: 'Civil Service Promotion & Recruitment CBT Boards',
      durationMinutes: 45,
      recommendedSpeed: '45 seconds per question',
      keySubjects: ['Public Service Rules (PSR)', '1999 Nigerian Constitution', 'Current Affairs & Governance Structure', 'Official English Correspondence']
    },
    aptitudeQuestions: [
      {
        id: 'cs-q1',
        category: 'Public Service',
        question: 'According to the Nigerian Public Service Rules (PSR), what is the statutory retirement age for career officers in the Federal Civil Service, whichever comes first?',
        options: [
          '60 years of age or 35 years of pensionable service',
          '65 years of age or 30 years of pensionable service',
          '70 years of age or 40 years of pensionable service',
          '55 years of age or 25 years of pensionable service'
        ],
        correctAnswer: 0,
        explanation: 'Under PSR 020810, the compulsory retirement age for all grades in the Service shall be 60 years of age or 35 years of pensionable service, whichever is earlier (excluding academic staff of universities and judicial officers).'
      },
      {
        id: 'cs-q2',
        category: 'Public Service',
        question: 'Under official civil service correspondence standards, which formal salutation and complimentary close is appropriate when addressing a Federal Minister?',
        options: [
          '"Dear Minister," ... "Best regards"',
          '"The Honourable Minister," ... "I have the honour to be, Sir, Your obedient Servant"',
          '"Hello Sir," ... "Cheers"',
          '"To whom it may concern," ... "Yours faithfully"'
        ],
        correctAnswer: 1,
        explanation: 'Traditional official civil service correspondence to high dignitaries maintains formal protocol: "The Honourable Minister" with formal ending such as "I have the honour to be, Sir, Your obedient Servant" or "Yours faithfully".'
      },
      {
        id: 'cs-q3',
        category: 'Public Service',
        question: 'What is the mandatory probationary period for a newly appointed officer in the Federal Civil Service before their appointment is eligible for confirmation?',
        options: ['6 months', '1 year', '2 years', '3 years'],
        correctAnswer: 2,
        explanation: 'According to Public Service Rule 020301, a newly appointed candidate serves on probation for two (2) years before confirmation of appointment, subject to passing required promotion/confirmation examinations.'
      },
      {
        id: 'cs-q4',
        category: 'Public Service',
        question: 'Which body is constitutionally empowered under the 1999 Constitution to handle appeals and disciplinary matters against civil servants?',
        options: [
          'National Assembly Service Commission',
          'Federal Civil Service Commission (FCSC)',
          'Independent Corrupt Practices Commission (ICPC)',
          'Code of Conduct Tribunal exclusively'
        ],
        correctAnswer: 1,
        explanation: 'The Federal Civil Service Commission (FCSC) is vested with constitutional authority under the third schedule of the 1999 Constitution to appoint, promote, and exercise disciplinary control over federal civil servants.'
      }
    ],
    interviewQuestions: [
      {
        id: 'cs-iq1',
        question: 'What do you understand by the Public Service Rules (PSR), and why is official confidentiality critical?',
        frequency: 'Crucial',
        recruiterIntent: 'Verifying that you respect government bureaucracy, chains of command, and the Official Secrets Act rather than treating public office casually.',
        redFlags: [
          'Saying "Rules slow down work, so I like to bypass them".',
          'Showing ignorance of the Official Secrets Act and leaking government memos to social media.'
        ],
        modelAnswer: {
          summary: 'Define the PSR as the regulatory foundation guaranteeing equity, transparency, and accountability across ministries. Emphasize loyalty to the state and strict confidentiality.',
          starBreakdown: {
            situation: 'In public administration, state governance relies on institutional memory and public trust.',
            task: 'Civil servants are custodians of policy files, classified memos, and citizen data.',
            action: 'I strictly observe the Official Secrets Act, ensuring that official documents are never divulged without authorized declassification.',
            result: 'This preserves governmental integrity and protects the administration from unauthorized leaks.'
          },
          freshGraduateTip: 'Memorize the purpose of the PSR and express pride in serving Nigeria with unquestioned integrity.'
        },
        sampleAnswerScript: '"The Public Service Rules represent the regulatory framework governing the conduct, appointment, discipline, and welfare of public officers. It ensures that administrative decisions are objective, standardized, and free from personal whim. Official secrecy is non-negotiable because civil servants handle sensitive state policies and citizen records; breaches undermine national security and public confidence in governance."'
      },
      {
        id: 'cs-iq2',
        question: 'Why choose a civil service career when you could potentially earn higher salaries in multinational corporations?',
        frequency: 'Very High',
        recruiterIntent: 'Distinguishing candidates seeking public service impact and national development from those seeking an easy job or retirement home.',
        redFlags: [
          'Saying "Civil service has job security and nobody can fire you even if you come late".',
          'Admitting you failed to get a corporate job.'
        ],
        modelAnswer: {
          summary: 'Highlight the scale of societal impact—policy decisions in a ministry influence millions of citizens, which no single private firm can match.',
          starBreakdown: {
            situation: 'I evaluated both private corporate careers and public service.',
            task: 'My core ambition is contributing to nationwide systemic policy reforms and institutional efficiency.',
            action: 'Working in a regulatory agency or federal ministry directly impacts infrastructure, public health, or economic policy for over 200 million Nigerians.',
            result: 'That profound sense of civic duty and permanent legacy is what drives my commitment to the public service.'
          },
          freshGraduateTip: 'Connect your discipline (e.g. computer science, law, agriculture) to modernizing the civil service.'
        },
        sampleAnswerScript: '"While private corporations offer attractive immediate perks, they optimize for private shareholder profit. The public service, on the other hand, operates for national public good. A single policy reform or digitized administrative process I contribute to can improve the livelihoods of millions of Nigerians. That permanent legacy and civic contribution is why I am dedicated to a career in the civil service."'
      }
    ],
    faqs: [
      {
        question: 'What is the entry grade level for university graduates in the Federal Civil Service?',
        answer: 'University degree holders (B.Sc / B.A) enter the civil service on Grade Level 08 (Step 1). HND holders enter on Grade Level 08 or 07 depending on the cadre and current harmonized civil service scheme.'
      }
    ]
  },

  // 4. TEACHING & EDUCATION
  {
    id: 'teaching-education',
    slug: 'teaching-education',
    title: 'Teaching & Education (SUBEB, TESCOM & Private)',
    shortTitle: 'Teaching & Education',
    heroHeadline: 'Teaching Aptitude Test Practice & Teacher Recruitment Interview Guide 2026/2027',
    description: 'Prepare for State SUBEB, TESCOM, Federal Unity Schools, and top private school recruitment. Practice pedagogy past questions, classroom psychology, and master teacher interview demo questions.',
    iconName: 'GraduationCap',
    themeColor: {
      primary: 'bg-indigo-600',
      bgLight: 'bg-indigo-50',
      badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      border: 'border-indigo-300'
    },
    targetEmployers: ['State Universal Basic Education Board (SUBEB)', 'Teaching Service Commission (TESCOM)', 'Federal Ministry of Education (Unity Schools)', 'Corona Schools', 'Greensprings School', 'Command Secondary Schools'],
    salaryOverview: {
      entryLevel: '₦60,000 - ₦180,000 / month',
      midLevel: '₦200,000 - ₦450,000 / month',
      seniorLevel: '₦500,000+ / month (Top Private/International Schools)'
    },
    aptitudeTestOverview: {
      testBody: 'TRCN PQE, SUBEB Screening CBT, State Civil Service',
      durationMinutes: 40,
      recommendedSpeed: '45 seconds per question',
      keySubjects: ['Pedagogy & Teaching Methodology', 'Classroom Management & Psychology', 'Use of English & Communication', 'Educational Technology & Assessment']
    },
    aptitudeQuestions: [
      {
        id: 'te-q1',
        category: 'Pedagogy',
        question: 'In Bloom\'s Revised Taxonomy of Educational Objectives, which cognitive level involves breaking information into component parts to explore understandings and relationships?',
        options: ['Remembering', 'Applying', 'Analyzing', 'Evaluating'],
        correctAnswer: 2,
        explanation: 'Analyzing involves breaking material into constituent parts, determining how the parts relate to one another and to an overall structure or purpose.'
      },
      {
        id: 'te-q2',
        category: 'Pedagogy',
        question: 'Which of the following describes "Formative Assessment" in classroom instruction?',
        options: [
          'End-of-term examinations used solely to award final grades and certificates.',
          'Ongoing diagnostic checks, quizzes, and observations conducted during learning to adjust instruction.',
          'A national standardized exam like WAEC or NECO.',
          'Evaluating teacher performance by external ministry inspectors.'
        ],
        correctAnswer: 1,
        explanation: 'Formative assessment takes place during the learning process to provide immediate feedback to both students and teachers, enabling adjustments before final summative evaluations.'
      },
      {
        id: 'te-q3',
        category: 'Pedagogy',
        question: 'A teacher notices two students in the back row consistently whispering and distracting others during a mathematics demonstration. What is the most effective INITIAL response?',
        options: [
          'Send them immediately to the principal\'s office for suspension.',
          'Shout loudly across the classroom to embarrass them in front of peers.',
          'Use proximity control (walk casually toward their desk while continuing the lesson) or make direct eye contact.',
          'Cancel the entire class for all students.'
        ],
        correctAnswer: 2,
        explanation: 'Proximity control and subtle non-verbal cues address mild disruptions without stopping lesson momentum or escalating conflict.'
      }
    ],
    interviewQuestions: [
      {
        id: 'te-iq1',
        question: 'How do you handle a student who is consistently disruptive, disengaged, or defiant in class?',
        frequency: 'Crucial',
        recruiterIntent: 'Evaluating empathy, patience, de-escalation skills, and understanding that misbehavior often stems from frustration or underlying emotional challenges.',
        redFlags: [
          'Advocating harsh corporal punishment or verbal insults.',
          'Admitting that you give up on difficult children.'
        ],
        modelAnswer: {
          summary: 'Separate the child from the behavior. Investigate root causes (academic struggle, hunger, family stress), establish clear boundaries, and provide targeted positive reinforcement.',
          starBreakdown: {
            situation: 'In my previous classroom / during my teaching practice...',
            task: 'A 14-year-old student frequently disrupted English classes by making side comments and refusing to open his textbook.',
            action: 'Instead of publicly yelling at him, I spoke with him privately after class. I discovered he struggled with reading comprehension and masked his embarrassment with humor. I placed him on a discreet reading-partner plan and assigned him leadership tasks during group discussions.',
            result: 'His classroom outbursts decreased by 80%, and his end-of-term score improved from 42% to 68%.'
          },
          freshGraduateTip: 'Highlight child psychology and your belief in restorative, supportive discipline.'
        },
        sampleAnswerScript: '"I approach disruption through diagnosis rather than retaliation. Disruptive behavior is almost always a cry for attention or a mask for academic frustration. I use non-verbal cues during class to prevent public embarrassment, then hold a private 1-on-1 discussion after class to understand what is triggering the behavior. By partnering with the guidance counselor, parents, and tailoring engaging tasks to their interests, I help students channel their energy productively."'
      }
    ],
    faqs: [
      {
        question: 'What is TRCN certification and is it required for SUBEB / TESCOM?',
        answer: 'The Teachers Registration Council of Nigeria (TRCN) license is the statutory professional qualification for teachers in Nigeria. Most state SUBEB and TESCOM recruitment boards make TRCN induction or passing the PQE (Professional Qualifying Examination) mandatory for permanent appointment.'
      }
    ]
  },

  // 5. HEALTHCARE & NURSING
  {
    id: 'healthcare-nursing',
    slug: 'healthcare-nursing',
    title: 'Healthcare, Nursing & Medical Officers',
    shortTitle: 'Healthcare & Nursing',
    heroHeadline: 'Healthcare & Nursing CBT Exam Practice & Clinical Interview Questions 2026/2027',
    description: 'Prepare for Federal Medical Centres (FMC), Teaching Hospitals, and State Hospital Management Boards. Practice clinical nursing council past questions, pharmacology, and triage scenarios.',
    iconName: 'HeartPulse',
    themeColor: {
      primary: 'bg-rose-600',
      bgLight: 'bg-rose-50',
      badge: 'bg-rose-100 text-rose-800 border-rose-200',
      border: 'border-rose-300'
    },
    targetEmployers: ['Federal Medical Centres (FMC)', 'Teaching Hospitals (LUTH, UCH, ABUTH)', 'State Hospital Management Boards', 'National Hospital Abuja', 'Lagoon Hospitals', 'Redington Hospital'],
    salaryOverview: {
      entryLevel: '₦150,000 - ₦380,000 / month (CONHESS/CONMESS)',
      midLevel: '₦450,000 - ₦900,000 / month',
      seniorLevel: '₦1,200,000+ / month'
    },
    aptitudeTestOverview: {
      testBody: 'Nursing & Midwifery Council of Nigeria (NMCN), MDCN, FMC Boards',
      durationMinutes: 50,
      recommendedSpeed: '45 seconds per question',
      keySubjects: ['Clinical Nursing Science & Medical Ethics', 'Pharmacology & Dosage Calculations', 'Infection Prevention & Control', 'Emergency Triage & Vital Signs']
    },
    aptitudeQuestions: [
      {
        id: 'hn-q1',
        category: 'Technical',
        question: 'A doctor prescribes 500 mg of Amoxicillin syrup orally. The bottle label reads 250 mg / 5 mL. How many milliliters (mL) should the nurse administer?',
        options: ['5 mL', '10 mL', '12.5 mL', '15 mL'],
        correctAnswer: 1,
        explanation: 'Formula: (Prescribed Dose / Stock Dose) * Stock Volume = (500 mg / 250 mg) * 5 mL = 2 * 5 mL = 10 mL.'
      },
      {
        id: 'hn-q2',
        category: 'Technical',
        question: 'In assessing a patient using the Glasgow Coma Scale (GCS), what is the MINIMUM possible total score, indicating deep unconsciousness or death?',
        options: ['0', '1', '3', '5'],
        correctAnswer: 2,
        explanation: 'The Glasgow Coma Scale evaluates Eye Opening (1-4), Verbal Response (1-5), and Motor Response (1-6). The minimum score in each category is 1, making the lowest possible total score 3.'
      },
      {
        id: 'hn-q3',
        category: 'Technical',
        question: 'Which of the following is the single MOST effective infection control practice to prevent healthcare-associated infections (nosocomial infections) in clinical settings?',
        options: [
          'Routine prophylactic administration of broad-spectrum antibiotics to all admitted patients',
          'Strict hand hygiene before and after touching every patient or patient surroundings',
          'Fumigating hospital wards once every calendar week',
          'Wearing double gloves throughout the entire shift without changing'
        ],
        correctAnswer: 1,
        explanation: 'Proper hand hygiene (handwashing with soap and water or alcohol rub according to WHO\'s 5 Moments) is universally proven as the single most critical defense against cross-contamination.'
      }
    ],
    interviewQuestions: [
      {
        id: 'hn-iq1',
        question: 'How do you prioritize patient care when multiple emergency cases arrive simultaneously with limited ward resources?',
        frequency: 'Crucial',
        recruiterIntent: 'Testing emergency triage capabilities, composure under pressure, and adherence to ABCDE (Airway, Breathing, Circulation) protocols.',
        redFlags: [
          'Treating patients based on who is screaming loudest or who is influential.',
          'Panicking and freezing when multiple casualties arrive.'
        ],
        modelAnswer: {
          summary: 'Apply the clinical ABCDE triage system. Prioritize life-threatening airway, breathing, and circulatory compromise before non-urgent injuries.',
          starBreakdown: {
            situation: 'During night duty at an accident and emergency unit...',
            task: 'Three road traffic accident victims arrived while we already had a severe pediatric asthma patient in the ward.',
            action: 'I immediately triaged the arrivals: Victim A had an obstructed airway and cyanosis (immediate Red/Priority 1); Victim B had a fractured radius with stable vitals (Yellow/Priority 2); Victim C had abrasions (Green). I managed the airway and oxygen delivery on Victim A immediately while delegating vitals check for Victim B to my junior colleague and paging the trauma surgical registrar.',
            result: 'All patients were stabilized efficiently with zero preventable complications.'
          },
          freshGraduateTip: 'State clearly that triage is based strictly on clinical urgency, not personal favoritism.'
        },
        sampleAnswerScript: '"In an emergency surge, I rely on the standardized ABCDE triage framework. Immediate priority is given to patients with compromised airway, breathing difficulty, or uncontrolled hemorrhage. I quickly classify patients into Red (immediate life threat), Yellow (urgent but stable), and Green (minor). Clear communication with the medical team, calm delegation, and rapid stabilization take precedence over panic."'
      }
    ],
    faqs: [
      {
        question: 'What is the salary scale for federal nurses in Nigeria?',
        answer: 'Nurses in Federal Medical Centres and Teaching Hospitals are remunerated under the Consolidated Health Salary Structure (CONHESS), which includes hazard allowance, shift duty allowance, and specialist bonuses.'
      }
    ]
  },

  // 6. NGO & HUMANITARIAN
  {
    id: 'ngo-humanitarian',
    slug: 'ngo-humanitarian',
    title: 'NGO, UN & International Development',
    shortTitle: 'NGO & Humanitarian',
    heroHeadline: 'NGO & UN Jobs Competency-Based Interview (CBI) Guide & Aptitude Test 2026/2027',
    description: 'Prepare for UN agencies (UNICEF, WHO, WFP), international NGOs (IRC, MSF, Mercy Corps), and USAID partners in Nigeria. Master Competency-Based Interview (CBI) frameworks and project monitoring logic.',
    iconName: 'Globe2',
    themeColor: {
      primary: 'bg-cyan-700',
      bgLight: 'bg-cyan-50',
      badge: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      border: 'border-cyan-300'
    },
    targetEmployers: ['UNICEF Nigeria', 'World Health Organization (WHO)', 'World Food Programme (WFP)', 'International Rescue Committee (IRC)', 'Médecins Sans Frontières (MSF)', 'Mercy Corps', 'Plan International'],
    salaryOverview: {
      entryLevel: '₦350,000 - ₦850,000 / month',
      midLevel: '₦1,200,000 - ₦2,500,000 / month',
      seniorLevel: '₦3,500,000+ / month (Expat / Senior National Officer)'
    },
    aptitudeTestOverview: {
      testBody: 'UN Written Assessments, Development Sector Logic Tests',
      durationMinutes: 60,
      recommendedSpeed: '60 seconds per question',
      keySubjects: ['Logical Framework (LogFrame) Concepts', 'MEAL (Monitoring, Evaluation, Accountability & Learning)', 'Humanitarian Principles & PSEA', 'Grant Budgeting & Report Writing']
    },
    aptitudeQuestions: [
      {
        id: 'ng-q1',
        category: 'Technical',
        question: 'In a Project Logical Framework (LogFrame), what is the difference between an "Output" and an "Outcome"?',
        options: [
          'Outputs are high-level national policy changes; Outcomes are daily training workshops.',
          'Outputs are immediate, tangible deliverables produced by activities; Outcomes are the intermediate changes or benefits resulting from those outputs.',
          'Outputs refer to financial budgets; Outcomes refer to staff salaries.',
          'There is no technical difference; both terms are used interchangeably by donor agencies.'
        ],
        correctAnswer: 1,
        explanation: 'In donor project management (LogFrame): Outputs = Direct goods/services delivered (e.g. 5,000 mothers attended nutrition classes). Outcomes = Resulting behavior/status changes (e.g. 40% reduction in infant malnutrition).'
      },
      {
        id: 'ng-q2',
        category: 'Technical',
        question: 'Which of the following are the four core Humanitarian Principles recognized by the United Nations and international humanitarian law?',
        options: [
          'Profitability, Speed, Publicity, Sovereignty',
          'Humanity, Neutrality, Impartiality, Operational Independence',
          'Nationalism, Strict Alignment, Confidentiality, Discretion',
          'Cost-Recovery, Exclusivity, Bureaucracy, Authorization'
        ],
        correctAnswer: 1,
        explanation: 'The four fundamental humanitarian principles are: Humanity (human suffering must be addressed), Neutrality, Impartiality (based on need alone without discrimination), and Independence.'
      }
    ],
    interviewQuestions: [
      {
        id: 'ng-iq1',
        question: 'Tell me about a time you worked with diverse community stakeholders under tight donor grant deadlines. (UN CBI Format)',
        frequency: 'Crucial',
        recruiterIntent: 'UN panels use Competency-Based Interviewing (CBI). They look for concrete past actions demonstrating "Planning & Organizing", "Stakeholder Engagement", and "Accountability".',
        redFlags: [
          'Speaking in hypothetical terms ("I usually like to talk to chiefs..."). CBI mandates REAL past stories.',
          'Using "We did this" throughout without specifying your individual contribution.'
        ],
        modelAnswer: {
          summary: 'Use the STAR technique with quantified indicators and explicit mention of community participation and accountability.',
          starBreakdown: {
            situation: 'During an IDP camp WASH intervention in Borno State / local community health drive...',
            task: 'We needed to complete community sensitization and construct 12 sanitation facilities before the quarterly donor reporting deadline.',
            action: 'I mobilized local community leaders and women-led committees, organized daily work schedules, and established a feedback-and-complaints mechanism.',
            result: 'We completed the deliverables 4 days ahead of schedule, with zero community grievances and 100% compliance with donor quality standards.'
          },
          freshGraduateTip: 'Focus on field adaptability, cultural sensitivity, and zero tolerance for harassment.'
        },
        sampleAnswerScript: '"In my previous development project in an underserved community, we were faced with an impending donor grant reporting milestone for a water access program. My responsibility was community liaison and monitoring. Rather than imposing our schedule, I convened a town-hall with village elders, established a local water-user committee including women representatives, and tracked milestone indicators daily. As a result, we delivered the project 5 days ahead of schedule with full community ownership and verified monitoring data."'
      }
    ],
    faqs: [
      {
        question: 'What is a Competency-Based Interview (CBI) in UN recruitment?',
        answer: 'UN CBI is an interview style rooted in the philosophy that "past performance is the best predictor of future behavior." Questions start with "Describe a time when..." or "Give an example of...". Candidates must answer using the CAR or STAR method (Context/Situation, Action taken by you, and verifiable Result).'
      }
    ]
  },

  // 7. TECH, TELECOMS & IT
  {
    id: 'tech-telecoms',
    slug: 'tech-telecoms',
    title: 'Tech, Telecoms & IT Graduate Trainee',
    shortTitle: 'Tech & Telecoms',
    heroHeadline: 'Tech & Telecoms Aptitude Test Practice & Technical Interview Questions 2026/2027',
    description: 'Prepare for MTN Nigeria, Airtel, Interswitch, Moniepoint, and fintech graduate trainee assessments. Practice algorithmic reasoning, IT fundamentals, and behavioral interview questions.',
    iconName: 'Cpu',
    themeColor: {
      primary: 'bg-purple-600',
      bgLight: 'bg-purple-50',
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
      border: 'border-purple-300'
    },
    targetEmployers: ['MTN Nigeria', 'Airtel Nigeria', 'Interswitch Group', 'Moniepoint', 'Flutterwave', 'Andela', 'MainOne (Equinix)'],
    salaryOverview: {
      entryLevel: '₦250,000 - ₦650,000 / month',
      midLevel: '₦800,000 - ₦1,800,000 / month',
      seniorLevel: '₦2,500,000+ / month'
    },
    aptitudeTestOverview: {
      testBody: 'HackerRank, Codility, SHL IT Reasoning, Dragnet Tech',
      durationMinutes: 45,
      recommendedSpeed: '50 seconds per question',
      keySubjects: ['Algorithmic Logic & Pseudocode', 'Computer Networking (IP, DNS, Subnets)', 'Databases & SQL Basics', 'System Troubleshooting & Data Structures']
    },
    aptitudeQuestions: [
      {
        id: 'tt-q1',
        category: 'Technical',
        question: 'What is the binary representation of the decimal number 53?',
        options: ['110101', '110011', '101101', '111001'],
        correctAnswer: 0,
        explanation: '53 in binary: 32 + 16 + 0 + 4 + 0 + 1 = 2^5 + 2^4 + 0 + 2^2 + 0 + 2^0 = 110101.'
      },
      {
        id: 'tt-q2',
        category: 'Technical',
        question: 'In relational databases, which SQL clause is used to filter records resulting from a GROUP BY operation based on an aggregate condition?',
        options: ['WHERE', 'HAVING', 'ORDER BY', 'FILTER'],
        correctAnswer: 1,
        explanation: 'WHERE filters rows before aggregation; HAVING filters groups after aggregation.'
      },
      {
        id: 'tt-q3',
        category: 'Technical',
        question: 'A user reports that they cannot access your company\'s website, but other employees in the same office can access it without issues. Which troubleshooting step should you check FIRST?',
        options: [
          'Restart the company\'s core data center servers immediately.',
          'Verify the user\'s local network connection, browser cache, and DNS configuration.',
          'Format the user\'s operating system and reinstall all software.',
          'Call the national internet service provider to report a fiber cut.'
        ],
        correctAnswer: 1,
        explanation: 'Since other users on the same network can access the service, the issue is isolated to the client device/browser or local routing, not the centralized server or ISP.'
      }
    ],
    interviewQuestions: [
      {
        id: 'tt-iq1',
        question: 'Walk me through how you isolate and troubleshoot a critical system bug or network outage step-by-step.',
        frequency: 'Crucial',
        recruiterIntent: 'Evaluating structured thinking, diagnostic methodologies (OSI model, log analysis), and calm systematic problem solving.',
        redFlags: [
          'Saying "I just randomly change things until it works".',
          'Blaming other developers or users.'
        ],
        modelAnswer: {
          summary: 'Outline a scientific 4-step workflow: Reproduce & Define scope, Analyze telemetry/logs, Formulate hypothesis, and Test incremental fixes in staging before deployment.',
          starBreakdown: {
            situation: 'During an e-commerce / web app traffic spike...',
            task: 'Payment webhook callbacks were timing out intermittently.',
            action: 'I checked server response codes and database connection pool logs, isolated a connection leak in an unclosed session, reproduced it locally, and deployed an optimized pooling fix.',
            result: 'Latency dropped by 65% and failed transactions dropped to zero.'
          },
          freshGraduateTip: 'Demonstrate that you rely on error logs and systematic isolation rather than blind guesses.'
        },
        sampleAnswerScript: '"I approach troubleshooting scientifically: first, identify the scope—is it affecting one user, a specific region, or the entire user base? Second, inspect error logs and network telemetry to pinpoint the exact failure layer. Third, form a testable hypothesis and test the resolution in a sandbox environment. Once verified, I deploy the patch and document a post-mortem to ensure permanent prevention."'
      }
    ],
    faqs: [
      {
        question: 'What is tested in Nigerian tech graduate trainee assessments?',
        answer: 'Expect a mix of general quantitative/logic reasoning (SHL or Dragnet style) alongside online technical assessments (HackerRank/Codility) covering data structures, basic algorithms, and networking concepts.'
      }
    ]
  },

  // 8. CUSTOMER SERVICE, SALES & FRONT DESK
  {
    id: 'customer-service-sales',
    slug: 'customer-service-sales',
    title: 'Customer Service, Sales & Front Desk',
    shortTitle: 'Customer Care & Sales',
    heroHeadline: 'Customer Care & Sales Aptitude Test & Top Interview Questions 2026/2027',
    description: 'Prepare for customer support, call center, telesales, and relationship officer roles. Practice Situational Judgment Tests (SJT), communication etiquette, and master the "Sell Me This Pen" challenge.',
    iconName: 'Headphones',
    themeColor: {
      primary: 'bg-teal-600',
      bgLight: 'bg-teal-50',
      badge: 'bg-teal-100 text-teal-800 border-teal-200',
      border: 'border-teal-300'
    },
    targetEmployers: ['MTN / Airtel Call Centres', 'Commercial Banks (Customer Experience)', 'Jumia & Konga', 'Air Peace / Aviation Check-In', 'Multichoice (DStv/GOtv)', 'FMCG Distribution Networks'],
    salaryOverview: {
      entryLevel: '₦90,000 - ₦250,000 / month + Commissions',
      midLevel: '₦280,000 - ₦550,000 / month',
      seniorLevel: '₦700,000+ / month (Customer Experience Head)'
    },
    aptitudeTestOverview: {
      testBody: 'Situational Judgment Tests (SJT), TalentQ, Kenexa',
      durationMinutes: 35,
      recommendedSpeed: '40 seconds per question',
      keySubjects: ['Situational Judgment Scenarios (SJT)', 'Business English & Active Listening', 'Conflict De-escalation Principles', 'Sales Psychology & Conversion Logic']
    },
    aptitudeQuestions: [
      {
        id: 'cs-q1',
        category: 'Situational',
        question: 'An existing customer calls your hotline demanding an immediate refund for a product that is outside the official 7-day refund window according to company policy. The customer threatens to defame your brand on Twitter/X. What is the BEST course of action?',
        options: [
          'Tell the customer bluntly that rules are rules and hang up the phone.',
          'Authorize the refund immediately out of fear of social media backlash.',
          'Empathize with their disappointment, clearly explain the policy constraint, and offer an attractive alternative such as a store credit, replacement, or discount voucher while remaining professional.',
          'Engage in an argument to defend the company\'s reputation.'
        ],
        correctAnswer: 2,
        explanation: 'In customer service, you enforce policy without being combative. Empathizing and offering viable alternatives (store credit, repair, or discount) preserves the customer relationship without setting unauthorized policy precedents.'
      },
      {
        id: 'cs-q2',
        category: 'Verbal',
        question: 'Which of the following phrases represents active listening and positive customer service language?',
        options: [
          '"You clearly misunderstood how our service works."',
          '"What I can certainly do for you right now is check your order status and provide the fastest delivery dispatch."',
          '"Calm down, screaming at me will not solve your issue."',
          '"That is not my department; you will have to call back later."'
        ],
        correctAnswer: 1,
        explanation: 'Positive customer service language focuses on what CAN be done, communicates proactive solution-orientation, and avoids blaming the customer.'
      }
    ],
    interviewQuestions: [
      {
        id: 'cs-iq1',
        question: '"Sell me this pen" — or pitch our service to a hesitant prospect in 60 seconds.',
        frequency: 'Very High',
        recruiterIntent: 'Evaluating whether you understand that great sales is about uncovering customer NEEDS rather than pitching features blindly.',
        redFlags: [
          'Listing pen features immediately ("This pen is black, smooth, and cheap").',
          'Failing to ask the buyer any questions before pitching.'
        ],
        modelAnswer: {
          summary: 'First, qualify the buyer by asking questions. Discover a problem or aspiration, then position the pen as the immediate solution.',
          starBreakdown: {
            situation: 'The interviewer hands you a pen and asks you to sell it.',
            task: 'Diagnose before prescribing.',
            action: 'Ask: "How long have you been in your executive role? When was the last time you signed a life-changing contract or important document? When you signed that contract, did you use a cheap disposable plastic pen, or a pen that reflected your executive standing?"',
            result: 'Position the product as the exact tool that matches their status and urgency.'
          },
          freshGraduateTip: 'Always ask a question first: "What do you value most when writing or signing documents?"'
        },
        sampleAnswerScript: '"Before I tell you about this pen, may I ask: when you signed your last major executive contract, what kind of pen were you holding? In leadership, the tools you carry communicate confidence to clients and partners before you even speak. This pen offers weighted ergonomic balance and clean ink delivery that guarantees no smudge when your signature matters most. Try signing this document right now—feel the difference."'
      }
    ],
    faqs: [
      {
        question: 'What is a Situational Judgment Test (SJT)?',
        answer: 'An SJT presents real workplace scenarios (e.g. an upset client, conflicting manager demands, or missed deadlines) and asks you to select the MOST and LEAST effective responses to evaluate customer empathy, integrity, and decision-making.'
      }
    ]
  }
];
