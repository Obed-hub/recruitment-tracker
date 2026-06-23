import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Shield, Calendar, Clock, ArrowRight, BookOpen, Award, CheckCircle,
  XCircle, AlertCircle, MapPin, Briefcase, CircleDollarSign, Search,
  FileText, Info, ListChecks, ExternalLink
} from 'lucide-react';
import { subscribeToRecruitments, searchShortlist } from '../services/firebase';
import { RecruitmentUpdate, Branch, BRANCH_TO_SLUG, SLUG_TO_BRANCH } from '../types';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { FAQPageSchema, JobPostingSchema } from '../components/StructuredData';

interface AgencyStaticData {
  name: string;
  branch: Branch;
  color: string;
  gradient: string;
  borderCol: string;
  textCol: string;
  bgLight: string;
  description: string;
  generalSalaryDesc: string;
  ranks: { rank: string; salary: string; description: string }[];
  dates: {
    portalOpen: string;
    portalClose: string;
    screeningDate: string;
    examDate: string;
    shortlistDate: string;
  };
  requirements: {
    academic: string[];
    physical: string[];
    medical: string[];
  };
  examInfo: {
    subjects: string[];
    duration: string;
    format: string;
    tips: string[];
  };
  faqs: { question: string; answer: string }[];
}

const AGENCY_HUB_DATA: Record<string, AgencyStaticData> = {
  army: {
    name: 'Nigerian Army',
    branch: 'Army',
    color: 'bg-military-green',
    gradient: 'from-military-green to-green-800',
    borderCol: 'border-green-200',
    textCol: 'text-green-800',
    bgLight: 'bg-green-50/50',
    description: 'The Nigerian Army (NA) is the land branch of the Nigerian Armed Forces. Founded in 1863, it is the largest of the three service branches. It regularly recruits young Nigerians through the Regular Recruit Intake (RRI) for non-commissioned soldiers, and the Direct Short Service Commission (DSSC) / Short Service Commission (SSC) for university and HND graduates.',
    generalSalaryDesc: 'Soldiers and officers are paid according to the Consolidated Armed Forces Salary Structure (CONAFSS), which guarantees competitive salaries, combat allowances, free medical care, and housing within military barracks.',
    ranks: [
      { rank: 'Private (Recruit)', salary: '₦50,000 - ₦60,000 / month', description: 'Starting rank after completing 6 months of basic military training.' },
      { rank: 'Lance Corporal', salary: '₦62,000 - ₦68,000 / month', description: 'Junior non-commissioned rank awarded after initial service years.' },
      { rank: 'Corporal', salary: '₦70,000 - ₦78,000 / month', description: 'Awarded with advanced military experience and leadership skills.' },
      { rank: 'Second Lieutenant (DSSC Officer)', salary: '₦180,000 - ₦210,000 / month', description: 'Commissioned officer rank for new DSSC graduates.' },
      { rank: 'Lieutenant', salary: '₦215,000 - ₦240,000 / month', description: 'Awarded after promotion from Second Lieutenant.' }
    ],
    dates: {
      portalOpen: 'Open Annually (Check live portal)',
      portalClose: 'Refer to active updates',
      screeningDate: 'Zonal screening dates vary state-by-state.',
      examDate: 'Aptitude tests are held at designated army headquarters.',
      shortlistDate: 'Updates published on tracking.armynotification.com.ng'
    },
    requirements: {
      academic: [
        'Must possess a minimum of 4 credits in WASSCE/NECO/GCE/NABTEB including English Language in not more than 2 sittings (for RRI recruits).',
        'Degree holders (DSSC) must possess a Second Class Lower degree or HND Upper Credit with NYSC discharge or exemption certificate.',
        'Credentials must match the registered profile names exactly.'
      ],
      physical: [
        'Height: Not less than 1.68m for male applicants, and 1.65m for female applicants.',
        'Must be between the ages of 18 and 22 years for non-tradesmen, and up to 26 years for tradesmen/tradeswomen.',
        'Must not have any visible tattoos or tribal marks on the body.'
      ],
      medical: [
        'Must be physically, mentally, and medically fit for combat training.',
        'Free from visual impairment, flat feet, hernia, or past bone fractures.',
        'Must pass the mandatory military hospital physical fitness screening.'
      ]
    },
    examInfo: {
      subjects: ['English Language & Verbal Aptitude', 'Mathematics & Quantitative Reasoning', 'Current Affairs & Military History'],
      duration: '60 minutes',
      format: 'Computer Based Test (CBT)',
      tips: [
        'Familiarize yourself with the history of the Nigerian Army, past Chief of Army Staffs (COAS), and major Nigerian historical dates.',
        'Practice basic algebra, fractions, percentages, and word problems.',
        'Speed is key—CBT exams usually allow only 30 to 45 seconds per question.'
      ]
    },
    faqs: [
      { question: 'Is the Nigerian Army recruitment form free?', answer: 'Yes, the official application form is completely free of charge. Do not pay any portal coordinators or third parties.' },
      { question: 'What is the age limit for Army recruitment?', answer: 'For RRI recruits, the age limit is 18–22 years (up to 26 for tradesmen). For DSSC officers, the limit is 30 years (35 for medical officers).' }
    ]
  },
  navy: {
    name: 'Nigerian Navy',
    branch: 'Navy',
    color: 'bg-military-blue',
    gradient: 'from-military-blue to-blue-900',
    borderCol: 'border-blue-200',
    textCol: 'text-blue-800',
    bgLight: 'bg-blue-50/50',
    description: 'The Nigerian Navy (NN) is the maritime branch of the Nigerian Armed Forces. It is tasked with protecting Nigeria\'s territorial waters, oil installations, and combating maritime crimes such as sea piracy and crude oil theft. Recruitment is conducted via the Basic Military Training Course (BMTC) for ratings and the Direct Short Service Commission (DSSC) for officer cadets.',
    generalSalaryDesc: 'Naval personnel are paid in accordance with the CONAFSS structure, with sea allowances, hazard pay, and standard military welfare packages.',
    ranks: [
      { rank: 'Ordinary Seaman (Recruit)', salary: '₦52,000 - ₦62,000 / month', description: 'Entry-level rating rank after completing basic training at NNBTS Onne.' },
      { rank: 'Able Seaman', salary: '₦64,000 - ₦70,000 / month', description: 'Awarded after initial service years and marine certifications.' },
      { rank: 'Sub-Lieutenant (DSSC Officer)', salary: '₦185,000 - ₦215,000 / month', description: 'Commissioned officer entry rank for university graduates.' },
      { rank: 'Lieutenant', salary: '₦220,000 - ₦250,000 / month', description: 'Regular commissioned rank above Sub-Lieutenant.' }
    ],
    dates: {
      portalOpen: 'Annually (Check live tracker)',
      portalClose: 'Refer to active updates',
      screeningDate: 'Screening and physical verification take place at NNBTS Onne, Rivers State.',
      examDate: 'Aptitude tests are held at designated naval secondary schools nationwide.',
      shortlistDate: 'Shortlists are published on the official joinnigeriannavy.com portal.'
    },
    requirements: {
      academic: [
        'Minimum of 5 credits in WASSCE/NECO/GCE/NABTEB including English and Mathematics in not more than 2 sittings.',
        'For DSSC, university degree (minimum 2:2) or HND (Upper Credit) in relevant fields; NYSC certificate is mandatory.',
        'Applicants must present original certificates at the screening venue.'
      ],
      physical: [
        'Height: Minimum of 1.68m for males and 1.65m for females.',
        'Age: 18 to 22 years for ratings, and up to 28 years for DSSC officer cadets.',
        'Must be single with no children (male and female).'
      ],
      medical: [
        'Must be medically fit with no underlying chronic illnesses.',
        'Must pass standard swimming tests and cardiovascular evaluations.',
        'No physical deformity, flat feet, or tattoos.'
      ]
    },
    examInfo: {
      subjects: ['English & Comprehension', 'Mathematics & Algebra', 'General Knowledge & Maritime current affairs'],
      duration: '60 minutes',
      format: 'Computer Based Test (CBT)',
      tips: [
        'Study basic maritime terminology, Nigerian geography, and the organizational structure of the Navy.',
        'Review past questions on current world affairs and Nigerian government policies.',
        'Manage your time well during the exam as questions are numerous.'
      ]
    },
    faqs: [
      { question: 'Where is the Navy screening center?', answer: 'Physical screening is typically conducted at the Nigerian Navy Basic Training School (NNBTS) in Onne, Rivers State.' },
      { question: 'What is the training duration for Navy recruits?', answer: 'Ratings undergo 6 months of training, while DSSC officers undergo 6 to 9 months of cadet training.' }
    ]
  },
  airforce: {
    name: 'Nigerian Air Force',
    branch: 'Air Force',
    color: 'bg-sky-600',
    gradient: 'from-sky-600 to-sky-800',
    borderCol: 'border-sky-200',
    textCol: 'text-sky-800',
    bgLight: 'bg-sky-50/50',
    description: 'The Nigerian Air Force (NAF) was established in 1964 and is responsible for defense of Nigeria\'s airspace. It conducts regular recruitment through the Basic Military Training Course (BMTC) for airmen/airwomen and the Direct Short Service Commission (DSSC) for professional officers.',
    generalSalaryDesc: 'NAF personnel receive base pay according to CONAFSS alongside specialized flying allowances, hazard pay, and subsidized housing.',
    ranks: [
      { rank: 'Aircraftman/woman (Recruit)', salary: '₦51,000 - ₦61,000 / month', description: 'Starting rank after completing basic training at NAF Base Kaduna.' },
      { rank: 'Corporal', salary: '₦72,000 - ₦80,000 / month', description: 'Non-commissioned officer rank.' },
      { rank: 'Flying Officer (DSSC Entry)', salary: '₦190,000 - ₦220,000 / month', description: 'Officer entry rank for DSSC commission.' }
    ],
    dates: {
      portalOpen: 'Annually (Check live tracker)',
      portalClose: 'Refer to active updates',
      screeningDate: 'Zonal screening and physical examinations are held at designated NAF bases.',
      examDate: 'Written tests are held across zonal screening centers.',
      shortlistDate: 'Shortlists are published on nafrecruitment.airforce.mil.ng.'
    },
    requirements: {
      academic: [
        'BMTC: 5 credits in WASSCE/NECO including English and Mathematics in not more than two sittings.',
        'DSSC: Minimum of Second Class Lower or HND Upper Credit; NYSC discharge certificate required.',
        'Applicants must possess original credentials.'
      ],
      physical: [
        'Height: Minimum 1.66m for males, 1.63m for females.',
        'Age: 17 to 22 years for BMTC recruits; up to 30 years for DSSC officer cadets.'
      ],
      medical: [
        'Must pass aviation-standard medical fitness tests.',
        'Free from any optical, auditory, or physical disabilities.'
      ]
    },
    examInfo: {
      subjects: ['English Language', 'Mathematics', 'General Knowledge & Aviation History'],
      duration: '60 minutes',
      format: 'CBT / Paper-based depending on venue',
      tips: [
        'Study the history of flight in Nigeria, NAF commands, and names of previous Chiefs of Air Staff (CAS).',
        'Review basic algebra, geometry, and current affairs.'
      ]
    },
    faqs: [
      { question: 'Where is the NAF basic training held?', answer: 'NAF Basic Military Training is conducted at the Military Training Centre (MTC), NAF Base Kaduna.' }
    ]
  },
  nda: {
    name: 'Nigerian Defence Academy',
    branch: 'NDA',
    color: 'bg-yellow-600',
    gradient: 'from-yellow-600 to-yellow-800',
    borderCol: 'border-yellow-200',
    textCol: 'text-yellow-800',
    bgLight: 'bg-yellow-50/50',
    description: 'The Nigerian Defence Academy (NDA) in Kaduna is the premier military university in Nigeria. Established in 1964, it trains officer cadets for commission into one of the three services of the Nigerian Armed Forces: the Army, Navy, and Air Force. The training includes both academic studies (awarding degrees) and rigorous military training over a 5-year period.',
    generalSalaryDesc: 'NDA cadets receive a monthly pocket allowance (cadet stipend) during training. Upon graduation and commissioning as Second Lieutenants / Midshipmen, they start earning full military officer salaries.',
    ranks: [
      { rank: 'Officer Cadet (Year 1-5)', salary: 'Stipend provided / month', description: 'Pocket money and full academic/military sponsorship during training.' },
      { rank: 'Second Lieutenant / Midshipman', salary: '₦180,000 - ₦215,000 / month', description: 'Commissioned officer starting salary upon graduation with a degree (BSc/BEng).' }
    ],
    dates: {
      portalOpen: 'Typically November to March annually',
      portalClose: 'Refer to official portal check',
      screeningDate: 'Zonal screening and physical fitness testing take place after exam shortlisting.',
      examDate: 'The NDA screening test (NDAET) is held nationwide.',
      shortlistDate: 'Published on the official nda.edu.ng website.'
    },
    requirements: {
      academic: [
        'Must possess a minimum of 5 credits in WASSCE/NECO/GCE/NABTEB including English Language, Mathematics, and subjects relevant to the course of study.',
        'Must score above the cut-off mark in the Unified Tertiary Matriculation Examination (UTME) for that year.',
        'Awaiting results are generally not accepted.'
      ],
      physical: [
        'Height: Minimum of 1.68m for male applicants and 1.65m for female applicants.',
        'Age: Must be between 17 and 21 years old at the time of entry into the academy.'
      ],
      medical: [
        'Must pass highly rigorous physical and medical examinations.',
        'Free from any cardiovascular issues, bone deformities, or chronic health conditions.'
      ]
    },
    examInfo: {
      subjects: ['English Language', 'Mathematics', 'General Paper (Current Affairs, History)', 'Specialized Subject (Physics/Chemistry/Economics depending on course)'],
      duration: '180 minutes',
      format: 'Paper-based / CBT depending on year guidelines',
      tips: [
        'NDAET is highly academic—study your secondary school textbooks for Mathematics and English in detail.',
        'Keep up with Nigerian history, military structures, and international current affairs.'
      ]
    },
    faqs: [
      { question: 'What is the duration of training in NDA?', answer: 'Training lasts for 5 years (4 years academic + 1 year military) for regular course cadets.' },
      { question: 'Do NDA cadets pay tuition fees?', answer: 'No, training at the NDA is fully funded by the Federal Government of Nigeria.' }
    ]
  },
  police: {
    name: 'Nigeria Police Force',
    branch: 'Police',
    color: 'bg-blue-600',
    gradient: 'from-blue-600 to-blue-800',
    borderCol: 'border-blue-200',
    textCol: 'text-blue-800',
    bgLight: 'bg-blue-50/50',
    description: 'The Nigeria Police Force (NPF) is the principal law enforcement agency in Nigeria. It is responsible for maintaining public safety, preventing and detecting crime, and preserving peace nationwide. Recruitment is managed by the Police Service Commission (PSC) and includes intakes for Police Constables (SSCE) and Cadet Inspectors / Cadet ASPs (Graduates).',
    generalSalaryDesc: 'Police personnel are paid according to the Consolidated Police Salary Structure (CONPOSS), which was recently upgraded to enhance officer welfare and allowances.',
    ranks: [
      { rank: 'Police Constable', salary: '₦48,000 - ₦55,000 / month', description: 'Starting rank for O\'Level recruits after completing college training.' },
      { rank: 'Corporal', salary: '₦58,000 - ₦65,000 / month', description: 'Junior non-commissioned officer rank.' },
      { rank: 'Sergeant', salary: '₦68,000 - ₦75,000 / month', description: 'Rank above Corporal, overseeing constable shifts.' },
      { rank: 'Cadet Inspector (Graduate Entry)', salary: '₦85,000 - ₦100,000 / month', description: 'Starting officer rank for diploma/NCE holders.' },
      { rank: 'Assistant Superintendent of Police (ASP)', salary: '₦120,000 - ₦140,000 / month', description: 'Starting rank for university graduates after Police Academy training.' }
    ],
    dates: {
      portalOpen: 'Periodic (Refer to portal updates)',
      portalClose: 'Announced on PSC recruitment portal',
      screeningDate: 'Physical screening and credential verification held at State Command headquarters.',
      examDate: 'Aptitude tests are conducted by JAMB CBT centres.',
      shortlistDate: 'Published on policerecruitment.gov.ng.'
    },
    requirements: {
      academic: [
        'Must possess a minimum of 5 credits in WAEC/NECO/GCE/NABTEB including English and Mathematics in not more than 2 sittings.',
        'Degree holders must possess a valid degree or HND with NYSC discharge certificates.',
        'National Identity Number (NIN) is mandatory for profile creation.'
      ],
      physical: [
        'Height: Minimum 1.67m for males, and 1.64m for females.',
        'Age: Between 18 and 25 years for constables.',
        'Chest Measurement: Not less than 86cm (34 inches) expanded chest (for males only).'
      ],
      medical: [
        'Must be medically fit with good eyesight.',
        'Free from any physical deformity, speech impediment, or pregnant status.'
      ]
    },
    examInfo: {
      subjects: ['English Language', 'Mathematics', 'Current Affairs & Police Duties'],
      duration: '45 minutes',
      format: 'CBT (JAMB standard)',
      tips: [
        'Study basic civic education, duties of the police, and names of previous Inspectors General of Police (IGP).',
        'Brush up on O\'Level English grammar and comprehension skills.'
      ]
    },
    faqs: [
      { question: 'Is the Police application portal free?', answer: 'Yes, NPF recruitment is entirely free. Avoid any individuals demanding payment.' },
      { question: 'How long is the training at the Police College?', answer: 'Selected Police Constables undergo 6 months of training at designated Police Colleges.' }
    ]
  },
  civildefence: {
    name: 'Nigeria Security and Civil Defence Corps',
    branch: 'Civil Defence',
    color: 'bg-red-700',
    gradient: 'from-red-700 to-red-900',
    borderCol: 'border-red-200',
    textCol: 'text-red-800',
    bgLight: 'bg-red-50/50',
    description: 'The Nigeria Security and Civil Defence Corps (NSCDC) is a paramilitary agency of the Federal Government of Nigeria. Officially established in 2003, the NSCDC is mandated to protect critical national infrastructure (pipelines, electrical installations), license and monitor private security companies, and assist in disaster management. Recruitment is managed by the CDCFIB.',
    generalSalaryDesc: 'NSCDC officers are paid under the Consolidated Para-Paramilitary Salary Structure (CONPASS), with benefits including hazard allowances, uniform allowances, and travel bonuses.',
    ranks: [
      { rank: 'Corps Assistant III (SSCE)', salary: '₦43,000 - ₦49,000 / month', description: 'Entry-level paramilitary rank for O\'Level certificate holders.' },
      { rank: 'Inspector of Corps (ND/NCE)', salary: '₦72,000 - ₦85,000 / month', description: 'Entry rank for National Diploma or NCE graduates.' },
      { rank: 'Assistant Superintendent II (Degree)', salary: '₦95,000 - ₦115,000 / month', description: 'Officer entry rank for university degree holders.' }
    ],
    dates: {
      portalOpen: 'Periodic via CDCFIB portal',
      portalClose: 'Refer to active updates',
      screeningDate: 'Physical screening and document verification held at NSCDC State Command headquarters.',
      examDate: 'CBT examinations are held at designated JAMB CBT centres.',
      shortlistDate: 'Check status on recruitment.cdcfib.gov.ng'
    },
    requirements: {
      academic: [
        'SSCE Cadre: Minimum of 5 credits in WAEC/NECO/NABTEB including English and Mathematics.',
        'Officer Cadre: Bachelor\'s degree (BSc/BA) or HND in relevant fields; NYSC discharge certificate required.',
        'Applicants must possess original copies of all certificates.'
      ],
      physical: [
        'Height: Not less than 1.65m for male applicants, and 1.60m for female applicants.',
        'Age: Between 18 and 30 years old.'
      ],
      medical: [
        'Must be certified fit by a government medical officer.',
        'No record of drug addiction, mental illness, or physical deformity.'
      ]
    },
    examInfo: {
      subjects: ['English Language & Verbal Aptitude', 'Basic Mathematics & Logic', 'Current Affairs & NSCDC Mandate'],
      duration: '45 minutes',
      format: 'CBT (JAMB format)',
      tips: [
        'Study the history of the NSCDC, the NSCDC Act of 2003, and the duties under the Ministry of Interior.',
        'Practice general intelligence and reasoning test questions.'
      ]
    },
    faqs: [
      { question: 'Is NSCDC under the Ministry of Interior?', answer: 'Yes, NSCDC, Immigration, Fire Service, and Correctional Services are all supervised by the Ministry of Interior.' },
      { question: 'How can I edit my CDCFIB application?', answer: 'After submission, direct editing is locked. You must submit a support ticket on recruitment.cdcfib.gov.ng for corrections.' }
    ]
  },
  fireservice: {
    name: 'Federal Fire Service',
    branch: 'Fire Service',
    color: 'bg-orange-600',
    gradient: 'from-orange-600 to-orange-850',
    borderCol: 'border-orange-200',
    textCol: 'text-orange-800',
    bgLight: 'bg-orange-50/50',
    description: 'The Federal Fire Service (FFS) is the apex agency responsible for fire safety, emergency rescue, and disaster mitigation in Nigeria. Established in 1963, the FFS works to minimize loss of lives and property from fire outbreaks. Recruitment is managed by the CDCFIB across SSCE, ND/NCE, and HND/Degree cadres.',
    generalSalaryDesc: 'Firefighters are paid according to the CONPASS scale. They receive risk and hazard allowances, medical benefits, and specialized rescue gear allowances.',
    ranks: [
      { rank: 'Fire Assistant III (SSCE)', salary: '₦42,000 - ₦48,000 / month', description: 'Starting rank for O\'Level recruits.' },
      { rank: 'Inspector (ND/NCE)', salary: '₦70,000 - ₦82,000 / month', description: 'Entry level rank for diploma holders.' },
      { rank: 'Assistant Superintendent II (Degree)', salary: '₦95,000 - ₦112,000 / month', description: 'Officer entry rank for university graduates.' }
    ],
    dates: {
      portalOpen: 'Periodic (Refer to portal updates)',
      portalClose: 'Announced on CDCFIB portal',
      screeningDate: 'Physical screening takes place at FFS state commands.',
      examDate: 'CBT examinations are held at designated centers.',
      shortlistDate: 'Published on recruitment.cdcfib.gov.ng.'
    },
    requirements: {
      academic: [
        'O\'Level Cadre: 5 credits in WAEC/NECO including English and Mathematics in not more than 2 sittings.',
        'Degree/HND Cadre: Degree in Engineering, Chemistry, Physics, or related disciplines; NYSC discharge certificate.',
        'Original certificates are required during physical screening.'
      ],
      physical: [
        'Height: Minimum 1.65m for males, 1.60m for females.',
        'Age: Between 18 and 30 years.'
      ],
      medical: [
        'Must pass strict lung capacity, cardiovascular, and physical fitness tests.',
        'No respiratory issues, asthma, or physical impediment.'
      ]
    },
    examInfo: {
      subjects: ['English Language', 'Mathematics', 'Current Affairs & Fire Safety Basics'],
      duration: '45 minutes',
      format: 'CBT format',
      tips: [
        'Study basic chemistry of fire (fire triangle), class of fires, and general rescue terms.',
        'Review current affairs in Nigeria and basic math.'
      ]
    },
    faqs: [
      { question: 'Where is the basic training for Fire Service held?', answer: 'Training is conducted at the National Fire Academy in Sheda, Abuja.' }
    ]
  },
  immigration: {
    name: 'Nigeria Immigration Service',
    branch: 'Immigration',
    color: 'bg-emerald-750',
    gradient: 'from-emerald-700 to-green-800',
    borderCol: 'border-emerald-200',
    textCol: 'text-emerald-800',
    bgLight: 'bg-emerald-50/50',
    description: 'The Nigeria Immigration Service (NIS) is the agency responsible for border patrol, passport issuance, visa administration, and expatriate monitoring in Nigeria. Established in 1963, it has pioneered digital border management solutions in Africa, including the e-Passport. Recruitment is conducted state-by-state under the CDCFIB.',
    generalSalaryDesc: 'Immigration personnel are compensated under the CONPASS structure. Ranks and allowances are aligned with other paramilitary agencies under the Ministry of Interior.',
    ranks: [
      { rank: 'Immigration Assistant III (SSCE)', salary: '₦48,000 - ₦56,000 / month', description: 'Starting rank for O\'Level applicants.' },
      { rank: 'Assistant Inspector (ND/NCE)', salary: '₦76,000 - ₦88,000 / month', description: 'Entry level rank for ND or NCE holders.' },
      { rank: 'Assistant Superintendent II (Degree)', salary: '₦108,000 - ₦125,000 / month', description: 'Entry officer rank for university graduates.' }
    ],
    dates: {
      portalOpen: 'Periodic via CDCFIB portal',
      portalClose: 'Announced on recruitment.cdcfib.gov.ng',
      screeningDate: 'Physical screening and certificate screening are held at NIS State Command offices.',
      examDate: 'Aptitude tests are conducted at designated CBT centers.',
      shortlistDate: 'Published on the CDCFIB recruitment portal.'
    },
    requirements: {
      academic: [
        'Assistant cadre: Minimum 4 credits in WAEC/NECO including English.',
        'Superintendent cadre: Degree or HND in Criminology, Law, Tech, or Business.',
        'NYSC discharge/exemption certificate.'
      ],
      physical: [
        'Height: Minimum 1.65m for males, 1.60m for females.',
        'Age: 18 to 30 years.'
      ],
      medical: [
        'Must pass standard physical fitness examinations.',
        'No flat feet, visible tattoos, or major surgical history.'
      ]
    },
    examInfo: {
      subjects: ['English & Verbal reasoning', 'Basic Mathematics', 'Current Affairs & Border Policies'],
      duration: '45 minutes',
      format: 'CBT format',
      tips: [
        'Study the history of the NIS, previous Comptrollers General, and immigration passport categories.',
        'Practice basic algebra and reading comprehension.'
      ]
    },
    faqs: [
      { question: 'What is the Comptroller General\'s name?', answer: 'The head of the NIS is the Comptroller General (CG).' }
    ]
  },
  customs: {
    name: 'Nigeria Customs Service',
    branch: 'Customs',
    color: 'bg-slate-700',
    gradient: 'from-slate-700 to-slate-900',
    borderCol: 'border-slate-200',
    textCol: 'text-slate-800',
    bgLight: 'bg-slate-50/50',
    description: 'The Nigeria Customs Service (NCS) is a paramilitary organization under the Federal Ministry of Finance. It is responsible for the collection of customs revenue, border security, prevention of smuggling, and trade facilitation. NCS recruits periodically across three main cadres: Customs Assistant (SSCE), Customs Inspector (ND/NCE), and Superintendent (HND/Degree).',
    generalSalaryDesc: 'Customs officers are paid in accordance with the Consolidated Para-Paramilitary Salary Structure (CONPASS), which includes duty tour allowances, hazard allowances, and transport bonuses.',
    ranks: [
      { rank: 'Customs Assistant III (SSCE)', salary: '₦45,000 - ₦55,000 / month', description: 'Entry-level grade for O\'level result holders.' },
      { rank: 'Customs Inspector (HND/Degree)', salary: '₦80,000 - ₦95,000 / month', description: 'Officer cadre starting point for HND or ND holders.' },
      { rank: 'Assistant Superintendent II', salary: '₦105,000 - ₦125,000 / month', description: 'Starting rank for university degree holders.' }
    ],
    dates: {
      portalOpen: 'Periodic (Refer to portal updates)',
      portalClose: 'Updated on vacancy.customs.gov.ng',
      screeningDate: 'Physical screening is held at customs command zonal headquarters.',
      examDate: 'Aptitude tests are conducted at JAMB CBT centers.',
      shortlistDate: 'Shortlists are released via the customs portal.'
    },
    requirements: {
      academic: [
        'Customs Assistant: Minimum of 4 credits in O\'Level results including English and Mathematics.',
        'Superintendent: Minimum of a degree (BSc/BA) or HND in relevant disciplines (Logistics, Law, Finance, IT).',
        'Valid NIN and credentials matching birth certificate details.'
      ],
      physical: [
        'Height: Minimum of 1.68m for males and 1.65m for females.',
        'Age: Between 18 and 30 years.'
      ],
      medical: [
        'Must be medically fit with certified chest X-ray and general physical checkups.',
        'No visual impairment, pregnancy (at time of enlistment), or surgical implants.'
      ]
    },
    examInfo: {
      subjects: ['English & Aptitude', 'Mathematics', 'Current Affairs & Customs Tariff Rules'],
      duration: '45 minutes',
      format: 'CBT (JAMB format)',
      tips: [
        'Learn about ECOWAS tariff rules, ports of entry in Nigeria, and general customs history.',
        'Practice verbal and quantitative reasoning puzzles.'
      ]
    },
    faqs: [
      { question: 'What does a Customs Assistant earn?', answer: 'A starting Customs Assistant earns between ₦45,000 and ₦55,000 base salary plus allowances.' }
    ]
  },
  frsc: {
    name: 'Federal Road Safety Corps',
    branch: 'FRSC',
    color: 'bg-red-500',
    gradient: 'from-red-500 to-red-700',
    borderCol: 'border-red-200',
    textCol: 'text-red-800',
    bgLight: 'bg-red-50/50',
    description: 'The Federal Road Safety Corps (FRSC) is a paramilitary agency founded in 1988. It is responsible for road traffic management, prevention of highway accidents, clearance of obstructions, and registration of vehicles and driver\'s licenses in Nigeria. FRSC recruits Officer Cadets, Marshal Inspectors, and Road Marshal Assistants.',
    generalSalaryDesc: 'FRSC personnel are paid under the CONPASS structure. Ranks and pay increase with academic qualifications and years of active service.',
    ranks: [
      { rank: 'Road Marshal Assistant III (SSCE)', salary: '₦40,000 - ₦48,000 / month', description: 'Starting rank for O\'Level certificate holders.' },
      { rank: 'Marshal Inspector (HND/NCE)', salary: '₦72,000 - ₦85,000 / month', description: 'Starting rank for NCE or National Diploma holders.' },
      { rank: 'ARC / Officer Cadet (Degree)', salary: '₦100,000 - ₦115,000 / month', description: 'Assistant Route Commander rank for university graduates.' }
    ],
    dates: {
      portalOpen: 'Check portal announcements',
      portalClose: 'Refer to active updates',
      screeningDate: 'Screening and physical tests are held at FRSC academy or zonal command offices.',
      examDate: 'Written aptitude exams are conducted by JAMB CBT centres.',
      shortlistDate: 'Shortlisted candidates lists are published on the official FRSC website.'
    },
    requirements: {
      academic: [
        'Road Marshal: 5 credits in WAEC/NECO including English Language.',
        'Officer Cadet: Bachelor\'s degree or equivalent with a minimum of 2:2; NYSC discharge certificate.',
        'All O\'level and degree results must be verified.'
      ],
      physical: [
        'Height: Male applicants must be 1.70m or taller, and female applicants 1.64m or taller.',
        'Age: Between 18 and 30 years.'
      ],
      medical: [
        'Must possess normal eyesight and hearing.',
        'Free from any physical deformity, asthma, or chronic respiratory conditions.'
      ]
    },
    examInfo: {
      subjects: ['English & Verbal Reasoning', 'Basic Mathematics', 'Highway Code & Road Signs'],
      duration: '45 minutes',
      format: 'CBT (JAMB format)',
      tips: [
        'Study the Highway Code, common road traffic signs, and the meaning of FRSC terms (e.g. RTC, Marshal).',
        'Review general current affairs about Nigeria\'s transport sector.'
      ]
    },
    faqs: [
      { question: 'What is the height requirement for FRSC?', answer: 'Males must be at least 1.70m and females must be at least 1.64m.' }
    ]
  },
  ndlea: {
    name: 'National Drug Law Enforcement Agency',
    branch: 'NDLEA',
    color: 'bg-emerald-800',
    gradient: 'from-emerald-800 to-green-900',
    borderCol: 'border-emerald-200',
    textCol: 'text-emerald-800',
    bgLight: 'bg-emerald-50/50',
    description: 'The National Drug Law Enforcement Agency (NDLEA) is a federal agency responsible for eradicating the cultivation, processing, manufacturing, trafficking, and abuse of illicit drugs in Nigeria. It recruits Narcotic Officers (for HND/Degree holders) and Narcotic Assistants (for SSCE/OND holders).',
    generalSalaryDesc: 'NDLEA personnel receive salary packages under the CONPASS structure, along with specialized narcotic risk allowances and medical insurance.',
    ranks: [
      { rank: 'Narcotic Assistant III (SSCE)', salary: '₦45,000 - ₦55,000 / month', description: 'Starting rank for O\'Level recruits.' },
      { rank: 'Narcotic Inspector (HND/NCE)', salary: '₦78,000 - ₦90,000 / month', description: 'Starting rank for diploma holders.' },
      { rank: 'Narcotic Officer (Degree)', salary: '₦90,000 - ₦115,000 / month', description: 'Starting officer rank for university graduates.' }
    ],
    dates: {
      portalOpen: 'Periodic (Refer to portal updates)',
      portalClose: 'Updated on ndlea.gov.ng',
      screeningDate: 'Physical screening and drug testing are conducted at NDLEA command headquarters.',
      examDate: 'Aptitude tests are conducted at designated CBT centers.',
      shortlistDate: 'Shortlists are released via the official portal.'
    },
    requirements: {
      academic: [
        'Narcotic Assistant: Minimum of 5 credits in WAEC/NECO including English and Mathematics.',
        'Narcotic Officer: Bachelor\'s degree or HND in Law, Medicine, Criminology, Chemistry, Pharmacy, or CAs.',
        'Valid NIN and birth certificate required.'
      ],
      physical: [
        'Height: Minimum 1.70m for males and 1.65m for females.',
        'Age: 18 to 30 years.'
      ],
      medical: [
        'Must pass a mandatory drug screening test.',
        'Must be medically fit with no underlying psychiatric history.'
      ]
    },
    examInfo: {
      subjects: ['English & Comprehension', 'Mathematics', 'Current Affairs & Drug Law History'],
      duration: '45 minutes',
      format: 'CBT format',
      tips: [
        'Learn about NDLEA history, Decree No. 48 of 1989, and names of previous chairmen.',
        'Review basic math, English grammar, and logical reasoning.'
      ]
    },
    faqs: [
      { question: 'Do NDLEA recruits undergo drug tests?', answer: 'Yes, passing a drug test is a mandatory condition of recruitment.' }
    ]
  },
  efcc: {
    name: 'Economic and Financial Crimes Commission',
    branch: 'EFCC',
    color: 'bg-amber-700',
    gradient: 'from-amber-700 to-amber-900',
    borderCol: 'border-amber-200',
    textCol: 'text-amber-800',
    bgLight: 'bg-amber-50/50',
    description: 'The Economic and Financial Crimes Commission (EFCC) is a Nigerian law enforcement agency established in 2003. It is mandated to investigate and prosecute financial crimes, such as money laundering, cybercrimes, advance fee fraud, and public corruption. It recruits Investigators, Analysts, ICT Specialists, and Legal Officers.',
    generalSalaryDesc: 'EFCC staff are compensated under a specialized executive commission pay scale that offers highly competitive base salaries and security allowances.',
    ranks: [
      { rank: 'Detective Assistant (O\'Level)', salary: '₦50,000 - ₦62,000 / month', description: 'Starting detective rank for O\'Level holders.' },
      { rank: 'Detective Inspector (HND/ND)', salary: '₦85,000 - ₦98,000 / month', description: 'Detective rank for diploma holders.' },
      { rank: 'Detective Superintendent (Degree)', salary: '₦120,000 - ₦145,000 / month', description: 'Officer entry rank for graduates after Academy training.' }
    ],
    dates: {
      portalOpen: 'Periodic via EFCC Careers portal',
      portalClose: 'Refer to active updates',
      screeningDate: 'Credential screenings are held at EFCC zonal offices.',
      examDate: 'Aptitude tests are conducted at designated EFCC training centers.',
      shortlistDate: 'Published on the official efcc.gov.ng website.'
    },
    requirements: {
      academic: [
        'Must possess a Bachelor\'s degree (Second Class Lower) or HND (Upper Credit) in Law, Accounting, Banking, IT, or Criminology.',
        'NYSC discharge or exemption certificate is mandatory.',
        'Valid NIN and certifications in professional fields are highly valued.'
      ],
      physical: [
        'Age: Not above 30 years at the time of enlistment.',
        'Must have no criminal record and pass a strict background check.'
      ],
      medical: [
        'Must pass rigorous physical, mental, and medical checks.',
        'No history of drug dependency or chronic health conditions.'
      ]
    },
    examInfo: {
      subjects: ['Verbal & Quantitative Aptitude', 'Core Discipline Test (Accounting/IT/Law)', 'Current Affairs & EFCC Act'],
      duration: '60 minutes',
      format: 'CBT format',
      tips: [
        'Review the EFCC Act of 2003, money laundering laws in Nigeria, and basic bookkeeping/logic.',
        'Practice analytical and numerical reasoning questions.'
      ]
    },
    faqs: [
      { question: 'Where is the EFCC Academy?', answer: 'The EFCC training academy is located in Karu, Abuja.' }
    ]
  },
  fcsc: {
    name: 'Federal Civil Service Commission',
    branch: 'FCSC',
    color: 'bg-violet-750',
    gradient: 'from-violet-700 to-indigo-900',
    borderCol: 'border-violet-200',
    textCol: 'text-violet-800',
    bgLight: 'bg-violet-50/50',
    description: 'The Federal Civil Service Commission (FCSC) is the federal executive body in Nigeria that handles recruitment, promotion, and discipline of personnel within the Federal Civil Service. It oversees batch recruitment for various Ministries, Departments, and Agencies (MDAs) across multiple cadres.',
    generalSalaryDesc: 'FCSC staff are paid according to the Consolidated Public Service Salary Structure (CONPSS), graded from Grade Level 03 to 17.',
    ranks: [
      { rank: 'Admin Officer II (GL 08)', salary: '₦80,000 - ₦95,000 / month', description: 'Starting level for new university graduates.' },
      { rank: 'Senior Executive Officer (GL 09)', salary: '₦100,000 - ₦115,000 / month', description: 'Starting level for graduates with experience or Master\'s degrees.' }
    ],
    requirements: {
      academic: [
        'BSc/BA or HND in Public Admin, Business, Social Sciences, Engineering, or Humanities.',
        'NYSC discharge or exemption certificate.',
        'NIN and local government identification letter.'
      ],
      physical: [
        'Age: Must be under 35 years.',
        'No height or specific physical measurements required.'
      ],
      medical: [
        'Must pass basic government medical fitness examinations.'
      ]
    },
    examInfo: {
      subjects: ['Public Service Rules & Civil Service Structure', 'General Paper & Logic', 'Current Affairs'],
      duration: '60 minutes',
      format: 'Paper-based / CBT depending on guidelines',
      tips: [
        'Study the Public Service Rules (PSR), civil service grades, and the ministries of the federal government.'
      ]
    },
    faqs: [
      { question: 'What is the starting Grade Level for graduates?', answer: 'Fresh graduates are commissioned at Grade Level 08 (GL 08).' }
    ]
  },
  nnpc: {
    name: 'NNPC Limited',
    branch: 'NNPC',
    color: 'bg-green-800',
    gradient: 'from-green-800 to-green-950',
    borderCol: 'border-green-200',
    textCol: 'text-green-800',
    bgLight: 'bg-green-50/50',
    description: 'NNPC Limited (formerly Nigerian National Petroleum Corporation) is the state-owned oil corporation of Nigeria. It manages the country\'s petroleum exploration, refining, joint ventures, and distribution. NNPC regularly conducts highly competitive recruitment for Graduate Trainees and Experienced Professionals.',
    generalSalaryDesc: 'NNPC offers premium compensation packages including basic salary, housing allowances, medical coverage, and performance bonuses.',
    ranks: [
      { rank: 'Graduate Trainee (12-month program)', salary: '₦150,000 - ₦200,000 / month', description: 'Structured training stipend during the first year of orientation.' },
      { rank: 'Officer II (Permanent Staff)', salary: '₦250,000 - ₦350,000 / month', description: 'Starting salary for permanent hires post-training.' }
    ],
    requirements: {
      academic: [
        'Minimum of a Bachelor\'s degree (Second Class Lower) or HND (Upper Credit) in Engineering, Geosciences, Social Sciences, Law, or Finance.',
        'NYSC discharge certificate.',
        'Excellent academic transcript.'
      ],
      physical: [
        'Age: Must not be above 28 years at the time of applying (for graduate trainees).'
      ],
      medical: [
        'Must pass international occupational health and drug screenings.'
      ]
    },
    examInfo: {
      subjects: ['Numerical & Verbal Reasoning', 'Abstract & Logical Puzzles', 'General Business & Oil & Gas Industry Affairs'],
      duration: '90 minutes',
      format: 'Online Psychometric / CBT test',
      tips: [
        'Practice GMAT-style numerical and verbal tests.',
        'Research NNPC Limited\'s transformation to a commercial entity and major oil fields in Nigeria.'
      ]
    },
    faqs: [
      { question: 'What is the age limit for NNPC Graduate Trainees?', answer: 'The age limit is strictly 28 years.' }
    ]
  },
  cbn: {
    name: 'Central Bank of Nigeria',
    branch: 'CBN',
    color: 'bg-teal-700',
    gradient: 'from-teal-700 to-teal-900',
    borderCol: 'border-teal-200',
    textCol: 'text-teal-800',
    bgLight: 'bg-teal-50/50',
    description: 'The Central Bank of Nigeria (CBN) is the apex monetary authority in Nigeria. It is responsible for price stability, currency issuance (Naira), monetary policy, and regulating the commercial banking sector. CBN recruits Economists, Accountants, IT Specialists, and Statisticians.',
    generalSalaryDesc: 'CBN offers premium public sector compensation including competitive basic salary, housing loans, and health insurance.',
    ranks: [
      { rank: 'Executive Assistant (Graduate)', salary: '₦130,000 - ₦165,000 / month', description: 'Starting rank for entry-level fresh graduates.' },
      { rank: 'Senior Assistant', salary: '₦180,000 - ₦220,000 / month', description: 'Advanced entry level for master\'s degree holders.' }
    ],
    requirements: {
      academic: [
        'Minimum of a Bachelor\'s degree (Second Class Upper - 2:1) or HND (Upper Credit) in Economics, Finance, Accounting, Statistics, or Computer Science.',
        'NYSC discharge certificate.',
        'Professional certifications (ICAN, ACCA, CFA) are highly advantageous.'
      ],
      physical: [
        'Age: Not above 26 years (for fresh graduates).'
      ],
      medical: [
        'Must pass government-standard medical fitness tests.'
      ]
    },
    examInfo: {
      subjects: ['Numerical Reasoning & Data Interpretation', 'Critical Verbal Reasoning', 'Economics & Financial Sector Affairs'],
      duration: '90 minutes',
      format: 'CBT format',
      tips: [
        'Practice advanced numerical tests and data interpretation.',
        'Study CBN monetary policy tools, inflation rates, and the history of the Naira.'
      ]
    },
    faqs: [
      { question: 'What is the academic baseline for CBN?', answer: 'A minimum of a Second Class Upper (2:1) degree is required.' }
    ]
  },
  nimc: {
    name: 'National Identity Management Commission',
    branch: 'NIMC',
    color: 'bg-blue-800',
    gradient: 'from-blue-800 to-blue-950',
    borderCol: 'border-blue-200',
    textCol: 'text-blue-800',
    bgLight: 'bg-blue-50/50',
    description: 'The National Identity Management Commission (NIMC) is the federal agency responsible for creating, managing, and maintaining the National Identity Database and issuing National Identification Numbers (NIN) in Nigeria. It recruits IT Officers, Data Analysts, Registration Officers, and Admin Staff.',
    generalSalaryDesc: 'NIMC staff are compensated under the CONPSS structure, with specialized tech allowances.',
    ranks: [
      { rank: 'Registration Officer II (GL 08)', salary: '₦75,000 - ₦88,000 / month', description: 'Starting level for new graduates.' }
    ],
    requirements: {
      academic: [
        'BSc/HND in Computer Science, IT, Statistics, or social sciences.',
        'NYSC discharge certificate.',
        'Strong computer literacy is mandatory.'
      ],
      physical: [
        'Age: Under 35 years.'
      ],
      medical: [
        'Must pass basic medical fitness checks.'
      ]
    },
    examInfo: {
      subjects: ['IT & Data Management Basics', 'English & Mathematics', 'Current Affairs & NIN Policies'],
      duration: '45 minutes',
      format: 'CBT format',
      tips: [
        'Learn about the NIMC Act, the database structure, and the enrollment process.'
      ]
    },
    faqs: [
      { question: 'What is the primary role of NIMC?', answer: 'NIMC manages the National Identity Database and issues the NIN.' }
    ]
  },
  ncc: {
    name: 'Nigerian Communications Commission',
    branch: 'NCC',
    color: 'bg-indigo-700',
    gradient: 'from-indigo-700 to-blue-900',
    borderCol: 'border-indigo-200',
    textCol: 'text-indigo-800',
    bgLight: 'bg-indigo-50/50',
    description: 'The Nigerian Communications Commission (NCC) is the independent regulatory authority for the telecommunications industry in Nigeria. Established under the Nigerian Communications Act 2003, it regulates service providers, manages spectrum allocation, and protects consumer rights. Recruitment is conducted periodically for Telecom Engineers, Analysts, and Legal Officers.',
    generalSalaryDesc: 'NCC is a federal commission offering highly competitive salary structures, health insurance, and professional training opportunities.',
    ranks: [
      { rank: 'Officer II (Graduate Entry)', salary: '₦120,000 - ₦150,000 / month', description: 'Starting rank for fresh university graduates.' },
      { rank: 'Officer I', salary: '₦160,000 - ₦195,000 / month', description: 'Promoted grade with 2-3 years experience.' },
      { rank: 'Senior Officer', salary: '₦220,000 - ₦270,000 / month', description: 'Advanced rank with specialized credentials.' }
    ],
    dates: {
      portalOpen: 'Periodic (Refer to portal updates)',
      portalClose: 'Updated on ncc.gov.ng/careers-ncc',
      screeningDate: 'Interviews and screening are held at the NCC HQ in Abuja.',
      examDate: 'Computer-based assessment dates are sent to shortlisted candidates.',
      shortlistDate: 'Published on the official NCC website.'
    },
    requirements: {
      academic: [
        'Minimum of a Bachelor\'s degree (Second Class Lower) or HND (Upper Credit) in Telecommunication Engineering, Computer Science, Law, Economics, or IT.',
        'NYSC discharge or exemption certificate is mandatory.',
        'NIN and academic transcript verification.'
      ],
      physical: [
        'Must not be above 30 years of age for entry level roles.',
        'No specific physical height requirements.'
      ],
      medical: [
        'Must be medically fit and pass basic health screenings.',
        'No drug-related history.'
      ]
    },
    examInfo: {
      subjects: ['Verbal & Quantitative Reasoning', 'Specialized Area Test (IT/Law/Telecom)', 'General Knowledge & Telecom Regulations'],
      duration: '90 minutes',
      format: 'CBT format',
      tips: [
        'Review the Nigerian Communications Act 2003.',
        'Familiarize yourself with telecom abbreviations (e.g. GSM, spectrum, QoS).'
      ]
    },
    faqs: [
      { question: 'What is the age limit for NCC entry level?', answer: 'The age limit is 30 years.' }
    ]
  },
  nitda: {
    name: 'National Information Technology Development Agency',
    branch: 'NITDA',
    color: 'bg-cyan-700',
    gradient: 'from-cyan-700 to-sky-900',
    borderCol: 'border-cyan-200',
    textCol: 'text-cyan-800',
    bgLight: 'bg-cyan-50/50',
    description: 'The National Information Technology Development Agency (NITDA) is the IT regulatory body in Nigeria. Founded in 2001, it is responsible for formulating IT policy, building IT infrastructure, regulating digital systems, and developing digital literacy across the country.',
    generalSalaryDesc: 'NITDA offers highly competitive tech salaries, technical training, and research sponsorships.',
    ranks: [
      { rank: 'IT Officer II (Graduate Entry)', salary: '₦110,000 - ₦140,000 / month', description: 'Starting rank for fresh IT graduates.' }
    ],
    requirements: {
      academic: [
        'BSc/HND in Computer Science, software engineering, cybersecurity, or IT.',
        'NYSC discharge certificate.',
        'Programming, cloud, or cybersecurity certifications are highly valued.'
      ],
      physical: [
        'Age: Under 30 years.'
      ],
      medical: [
        'Must pass basic health fitness screenings.'
      ]
    },
    examInfo: {
      subjects: ['Software & IT Concepts', 'English & Mathematics', 'Current Affairs & Digital Economy Policies'],
      duration: '60 minutes',
      format: 'CBT format',
      tips: [
        'Familiarize yourself with NITDA digital economy regulations and basic tech terms.'
      ]
    },
    faqs: [
      { question: 'What is the main mandate of NITDA?', answer: 'NITDA is the regulatory body for Information Technology in Nigeria.' }
    ]
  },
  faan: {
    name: 'Federal Airports Authority of Nigeria',
    branch: 'FAAN',
    color: 'bg-sky-700',
    gradient: 'from-sky-700 to-sky-900',
    borderCol: 'border-sky-200',
    textCol: 'text-sky-800',
    bgLight: 'bg-sky-50/50',
    description: 'The Federal Airports Authority of Nigeria (FAAN) is a service organization that manages all commercial airports in Nigeria and provides passenger security and check-in services. It regularly recruits Aviation Security Officers, Airport Firefighters, Engineers, and Administrative Staff.',
    generalSalaryDesc: 'FAAN staff are paid according to the CONPSS scale, with specialized aviation risk allowances.',
    ranks: [
      { rank: 'Aviation Security Cadet (SSCE)', salary: '₦45,000 - ₦55,000 / month', description: 'Starting security rank for O\'Level recruits.' },
      { rank: 'Aviation Officer II (Degree)', salary: '₦90,000 - ₦110,000 / month', description: 'Starting rank for new graduates.' }
    ],
    requirements: {
      academic: [
        'Aviation Security: SSCE with 5 credits including English and Math.',
        'Engineering/Admin: Degree or HND in engineering, physics, or business admin.',
        'NYSC discharge certificate.'
      ],
      physical: [
        'Height: Minimum 1.68m for males, 1.65m for females (for security cadres).',
        'Age: 18-35 years.'
      ],
      medical: [
        'Must pass rigorous fitness and background vetting.'
      ]
    },
    examInfo: {
      subjects: ['English & Logical Reasoning', 'Basic Mathematics', 'Current Affairs & Aviation Basics'],
      duration: '60 minutes',
      format: 'CBT format',
      tips: [
        'Learn about FAAN history and major airports in Nigeria.'
      ]
    },
    faqs: [
      { question: 'Where is FAAN headquarters located?', answer: 'The FAAN operational headquarters is at Murtala Muhammed Airport, Lagos.' }
    ]
  },
  nimasa: {
    name: 'Nigerian Maritime Administration and Safety Agency',
    branch: 'NIMASA',
    color: 'bg-slate-600',
    gradient: 'from-slate-600 to-slate-800',
    borderCol: 'border-slate-200',
    textCol: 'text-slate-800',
    bgLight: 'bg-slate-50/50',
    description: 'The Nigerian Maritime Administration and Safety Agency (NIMASA) is the apex regulatory body in Nigeria\'s maritime sector. It ensures maritime safety, prevents marine pollution, registers shipping vessels, and enforces the Cabotage Act.',
    generalSalaryDesc: 'NIMASA offers highly competitive maritime packages, including specialized offshore risk pay and professional seafarer training.',
    ranks: [
      { rank: 'Marine Officer II (Graduate Entry)', salary: '₦130,000 - ₦170,000 / month', description: 'Starting rank for fresh maritime/science graduates.' }
    ],
    requirements: {
      academic: [
        'Degree or HND in Marine Engineering, Nautical Science, Law, or IT.',
        'NYSC discharge certificate.',
        'Seafaring or professional shipping certifications are a major plus.'
      ],
      physical: [
        'Age: Under 35 years.'
      ],
      medical: [
        'Must pass maritime-standard medical and visual tests.'
      ]
    },
    examInfo: {
      subjects: ['Maritime regulations & Shipping terms', 'English & Mathematics', 'General Knowledge'],
      duration: '60 minutes',
      format: 'CBT format',
      tips: [
        'Review the Cabotage Act and NIMASA mandates.'
      ]
    },
    faqs: [
      { question: 'What is the Cabotage Act?', answer: 'A law regulating domestic shipping and reserving local maritime operations for Nigerian vessels.' }
    ]
  },
  nafdac: {
    name: 'National Agency for Food and Drug Administration and Control',
    branch: 'NAFDAC',
    color: 'bg-pink-700',
    gradient: 'from-pink-700 to-pink-900',
    borderCol: 'border-pink-200',
    textCol: 'text-pink-800',
    bgLight: 'bg-pink-50/50',
    description: 'The National Agency for Food and Drug Administration and Control (NAFDAC) regulates the manufacture, import, export, sale, and distribution of food, drugs, cosmetics, and medical devices in Nigeria. It recruits Pharmacists, Chemists, Microbiologists, and Food Scientists.',
    generalSalaryDesc: 'NAFDAC offers competitive civil service salaries (CONPSS) along with chemical and laboratory risk allowances.',
    ranks: [
      { rank: 'Regulatory Officer II (Graduate)', salary: '₦90,000 - ₦115,000 / month', description: 'Starting rank for new graduates.' },
      { rank: 'Pharmacist (Licensed)', salary: '₦120,000 - ₦145,000 / month', description: 'Starting rank for licensed Pharmacists.' }
    ],
    requirements: {
      academic: [
        'Minimum of a Bachelor\'s degree (Second Class Lower) or HND in Pharmacy, Food Science, Chemistry, or Microbiology.',
        'NYSC discharge certificate.',
        'Pharmacists must have a valid license from the PCN.'
      ],
      physical: [
        'Age: Under 30 years.'
      ],
      medical: [
        'Must pass government-standard medical fitness checks.'
      ]
    },
    examInfo: {
      subjects: ['Chemistry, Food Safety & Pharmaceutics', 'English & Mathematics', 'NAFDAC Act & Current Affairs'],
      duration: '60 minutes',
      format: 'CBT format',
      tips: [
        'Study food and drug regulatory laws and NAFDAC structure.'
      ]
    },
    faqs: [
      { question: 'Is NAFDAC under the Ministry of Health?', answer: 'Yes, NAFDAC is supervised by the Federal Ministry of Health.' }
    ]
  }
};

interface AgencyHubProps {
  agencySlug: string;
}

const AgencyHub: React.FC<AgencyHubProps> = ({ agencySlug }) => {
  const navigate = useNavigate();
  const staticData = AGENCY_HUB_DATA[agencySlug.toLowerCase()];

  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'salary' | 'cbt' | 'shortlist'>('overview');
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  // Shortlist search states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    // Dynamic tab reset when changing agency
    setActiveTab('overview');
    setSearchQuery('');
    setSearchResults([]);
    setSearched(false);

    // Fetch live recruitments from database
    const unsub = subscribeToRecruitments((data) => {
      setRecruitments(data);
      setLoading(false);
    });

    return () => unsub();
  }, [agencySlug]);

  if (!staticData) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Agency Not Found</h2>
        <p className="text-gray-500 mt-2">The requested recruitment hub does not exist.</p>
        <Link to="/" className="text-military-blue hover:underline mt-4 inline-block font-semibold">
          Back to Home Dashboard
        </Link>
      </div>
    );
  }

  // Find dynamic recruitment entry corresponding to this branch
  const activeRecruitment = recruitments.find(
    r => r.branch.toLowerCase() === staticData.branch.toLowerCase()
  );

  const handleShortlistSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearching(true);
    setSearched(true);
    try {
      const results = await searchShortlist(searchQuery);
      // Filter results matching this branch
      setSearchResults(results.filter(r => r.status === 'Shortlisted'));
    } catch (err) {
      console.error(err);
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-800 border-green-200';
      case 'Closed': return 'bg-red-100 text-red-800 border-red-200';
      case 'Shortlist Out': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const pageTitle = `${staticData.name} Recruitment 2026/2027 Portal, Ranks & Salary`;
  const metaDescription = `Looking for ${staticData.name} recruitment details? Read official requirements, starting salaries, O\'Level combinations, CBT past questions, and check shortlist updates.`;

  return (
    <div className="max-w-6xl mx-auto">
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonical={`/${agencySlug}-recruitment`}
        keywords={[
          `${staticData.name} recruitment`,
          `${staticData.name} salary`,
          `${staticData.name} portal login`,
          `${staticData.name} requirements`,
          'Nigerian recruitment portal'
        ]}
      />
      <FAQPageSchema faqs={staticData.faqs} />
      {activeRecruitment && (
        <JobPostingSchema
          title={activeRecruitment.title}
          description={activeRecruitment.description || staticData.description}
          organization={staticData.name}
          location="Nigeria"
          datePosted={activeRecruitment.updated_at}
          validThrough={activeRecruitment.deadline_date}
          employmentType="FULL_TIME"
        />
      )}

      {/* Hero Header Banner */}
      <div className={`rounded-3xl shadow-xl overflow-hidden mb-8 text-white relative bg-gradient-to-r ${staticData.gradient}`}>
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Shield className="w-80 h-80" />
        </div>
        <div className="p-8 md:p-12 relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              {staticData.branch} Hub
            </span>
            {activeRecruitment ? (
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${
                activeRecruitment.status === 'Open' ? 'bg-green-500/20 border-green-400 text-green-100' :
                activeRecruitment.status === 'Shortlist Out' ? 'bg-yellow-500/20 border-yellow-400 text-yellow-100' :
                'bg-red-500/20 border-red-400 text-red-100'
              }`}>
                STATUS: {activeRecruitment.status.toUpperCase()}
              </span>
            ) : (
              <span className="bg-gray-500/20 border border-gray-400 text-gray-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                STATUS: CLOSED
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {staticData.name} Recruitment 2026
          </h1>
          <p className="text-base md:text-lg text-white/95 max-w-3xl leading-relaxed mb-6">
            Get the most reliable guidelines, rank structures, monthly welfare packages, registration baselines, and preparation materials for the {staticData.name}.
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            {activeRecruitment?.portal_url && activeRecruitment.status === 'Open' && (
              <a
                href={activeRecruitment.portal_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 text-military-blue px-6 py-3 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2"
              >
                Apply on Official Portal <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <Link
              to={`/past-questions/${BRANCH_TO_SLUG[staticData.branch] || agencySlug}`}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-all backdrop-blur-md border border-white/20 flex items-center gap-2"
            >
              Practice Past Questions <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Tabs) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200 flex flex-wrap gap-1">
            {(['overview', 'requirements', 'salary', 'cbt', 'shortlist'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] text-center py-2.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  activeTab === tab
                    ? `${staticData.color} text-white shadow-md`
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab === 'cbt' ? 'CBT Prep' : tab}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-military-blue" /> Agency Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {staticData.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Registration Status</h4>
                      <p className="text-sm font-bold text-gray-800">
                        {activeRecruitment?.title ? activeRecruitment.title : `${staticData.name} Enlistment`}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        {activeRecruitment ? (
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusStyle(activeRecruitment.status)}`}>
                            {activeRecruitment.status}
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-red-100 text-red-800 border-red-200">
                            Closed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Important Deadlines</h4>
                      <div className="space-y-1 text-sm text-gray-700">
                        <div><strong>Portal Closes:</strong> {activeRecruitment?.deadline_date ? new Date(activeRecruitment.deadline_date).toLocaleDateString() : 'N/A'}</div>
                        <div><strong>Screening Venue:</strong> {staticData.dates.screeningDate}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {activeRecruitment?.application_process && (
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ListChecks className="w-5 h-5 text-military-green" /> How to Apply
                    </h3>
                    <div className="space-y-4">
                      {activeRecruitment.application_process.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-military-blue font-bold flex items-center justify-center border border-blue-100">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 mt-1 text-sm md:text-base">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB: REQUIREMENTS */}
            {activeTab === 'requirements' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> Academic & Certificate Requirements
                  </h2>
                  <ul className="space-y-3 pl-5 list-disc text-gray-700 text-sm md:text-base">
                    {staticData.requirements.academic.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-indigo-600" /> Physical & Age Baselines
                  </h2>
                  <ul className="space-y-3 pl-5 list-disc text-gray-700 text-sm md:text-base">
                    {staticData.requirements.physical.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" /> Medical Exclusions
                  </h2>
                  <ul className="space-y-3 pl-5 list-disc text-gray-700 text-sm md:text-base">
                    {staticData.requirements.medical.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: SALARY */}
            {activeTab === 'salary' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5 text-emerald-600" /> Salary Breakdown
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {staticData.generalSalaryDesc}
                  </p>

                  <div className="overflow-hidden border border-gray-200 rounded-2xl">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <tr>
                          <th className="px-6 py-3">Rank / Cadre</th>
                          <th className="px-6 py-3">Estimated Monthly Salary</th>
                          <th className="px-6 py-3">Details</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-sm">
                        {staticData.ranks.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-gray-900">{item.rank}</td>
                            <td className="px-6 py-4 font-extrabold text-emerald-700">{item.salary}</td>
                            <td className="px-6 py-4 text-gray-500 text-xs">{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 leading-relaxed">
                  <strong>Disclaimer:</strong> Salaries are estimates compiled from previous years and may vary depending on active-duty status, command posting, and special allowances (e.g. hazardous operations).
                </div>
              </div>
            )}

            {/* TAB: CBT PREP */}
            {activeTab === 'cbt' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" /> CBT Examination Pattern
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    The {staticData.name} aptitude test is highly competitive. Practice with real exam questions covering:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {staticData.examInfo.subjects.map((sub, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-xl font-semibold text-gray-800 text-sm text-center">
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl">
                    <h4 className="font-bold text-indigo-900 text-sm mb-2 flex items-center"><Award className="w-4 h-4 mr-1" /> Exam Format</h4>
                    <div className="text-xs text-indigo-800 space-y-1">
                      <div><strong>Duration:</strong> {staticData.examInfo.duration}</div>
                      <div><strong>Interface:</strong> {staticData.examInfo.format}</div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-100 rounded-2xl">
                    <h4 className="font-bold text-green-950 text-sm mb-2 flex items-center"><ListChecks className="w-4 h-4 mr-1" /> Practice Simulator</h4>
                    <p className="text-xs text-green-900 mb-2">Simulate real exam timing and question mix.</p>
                    <Link
                      to={`/past-questions/${BRANCH_TO_SLUG[staticData.branch] || agencySlug}`}
                      className="text-xs font-bold text-green-700 hover:underline flex items-center"
                    >
                      Launch Exam Simulator →
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Preparation Tips</h3>
                  <ul className="space-y-2 text-xs text-gray-600">
                    {staticData.examInfo.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: SHORTLIST */}
            {activeTab === 'shortlist' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-yellow-600" /> Shortlisted Candidates
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    If the shortlist for the {staticData.name} is out, you can search the official database using your full name or examination/application number below.
                  </p>

                  <form onSubmit={handleShortlistSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
                    <div className="flex-grow relative">
                      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Enter Name or Application Number (e.g. Adebayo)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-military-green text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={searching}
                      className="bg-military-blue hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors flex items-center justify-center"
                    >
                      {searching ? 'Searching...' : 'Search'}
                    </button>
                  </form>

                  {/* Results panel */}
                  {searched && (
                    <div className="border border-gray-100 rounded-2xl overflow-hidden">
                      {searchResults.length === 0 ? (
                        <div className="p-8 text-center bg-gray-50 text-gray-500 text-sm">
                          <XCircle className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                          No shortlisted candidates found for "{searchQuery}". Make sure spelling is correct or check if this recruitment shortlist is out.
                        </div>
                      ) : (
                        <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                          <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            <tr>
                              <th className="px-6 py-3">Name</th>
                              <th className="px-6 py-3">State</th>
                              <th className="px-6 py-3">Exam Number</th>
                              <th className="px-6 py-3">Status</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {searchResults.map((cand) => (
                              <tr key={cand.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-bold text-gray-900">{cand.name}</td>
                                <td className="px-6 py-4 text-gray-500">{cand.state}</td>
                                <td className="px-6 py-4 font-mono text-gray-600">{cand.exam_number}</td>
                                <td className="px-6 py-4">
                                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                                    {cand.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  )}

                  {!searched && (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-xs text-yellow-800">
                      <strong>Check Shortlist Status:</strong> Shortlist details are updated as soon as they are officially released by the {staticData.name} board.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Metrics Widget */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-military-green" /> Quick Parameters
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block">Min Age Limit</span>
                  <span className="text-sm font-bold text-gray-800">18 Years</span>
                </div>
                <Clock className="w-5 h-5 text-gray-300" />
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block">Min Height Req.</span>
                  <span className="text-sm font-bold text-gray-800">
                    {staticData.branch === 'FRSC' ? '1.70m (M), 1.64m (F)' :
                     staticData.branch === 'Customs' ? '1.68m (M), 1.65m (F)' :
                     staticData.branch === 'Police' ? '1.67m (M), 1.64m (F)' :
                     '1.68m (M), 1.65m (F)'}
                  </span>
                </div>
                <MapPin className="w-5 h-5 text-gray-300" />
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block">Starting Salary Est.</span>
                  <span className="text-sm font-bold text-green-700">
                    {staticData.ranks[0]?.salary ? staticData.ranks[0].salary.split(' /')[0] : 'N/A'}
                  </span>
                </div>
                <CircleDollarSign className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
          </div>

          <AdUnit slot="AGENCY_HUB_SIDEBAR_AD" format="rectangle" />

          {/* CBT practice CTA */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-6 text-white shadow-lg overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-10">
              <BookOpen className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" /> Practice Mock CBT
              </h3>
              <p className="text-indigo-200 text-xs leading-relaxed mb-4">
                Prepare for the {staticData.name} written exam with our online test simulator.
              </p>
              <Link
                to={`/past-questions/${BRANCH_TO_SLUG[staticData.branch] || agencySlug}`}
                className="w-full flex items-center justify-center py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-xl text-xs transition-all transform hover:-translate-y-0.5"
              >
                Launch Mock Exam <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyHub;
