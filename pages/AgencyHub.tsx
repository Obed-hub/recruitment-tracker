import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Shield, Calendar, Clock, ArrowRight, BookOpen, Award, CheckCircle,
  XCircle, AlertCircle, MapPin, Briefcase, CircleDollarSign, Search,
  FileText, Info, ListChecks, ExternalLink, HelpCircle
} from 'lucide-react';
import { subscribeToRecruitments, searchShortlist } from '../services/firebase';
import { RecruitmentUpdate, Branch, BRANCH_TO_SLUG, SLUG_TO_BRANCH } from '../types';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { FAQPageSchema, JobPostingSchema } from '../components/StructuredData';
import FastActionCard from '../components/FastActionCard';
import ScreeningChecklist from '../components/ScreeningChecklist';
import NextStepInterstitial from '../components/NextStepInterstitial';
import StickyRecommendedBar from '../components/StickyRecommendedBar';
import { getDailyUpdatedBadge } from '../services/dateUtils';

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
  officialPortalUrl?: string;
  scamWarning?: string;
  customSeoTitle?: string;
  customSeoDescription?: string;
  dates?: {
    portalOpen: string;
    portalClose: string;
    screeningDate: string;
    examDate: string;
    shortlistDate: string;
  };
  stepByStep?: string[];
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
    generalSalaryDesc: 'Soldiers and officers are paid according to the 2026 updated Consolidated Armed Forces Salary Structure (CONAFSS), which guarantees competitive salaries, combat allowances, free medical care, and housing within military barracks.',
    ranks: [
      { rank: 'Private (Passed Out Recruit)', salary: '₦77,000 - ₦85,000 / month', description: 'Starting rank after completing 6 months of basic military training at Depot Zaria. Excludes operational combat allowance.' },
      { rank: 'Lance Corporal', salary: '₦92,000 - ₦98,000 / month', description: 'Junior non-commissioned rank awarded after initial service years and exams.' },
      { rank: 'Corporal', salary: '₦104,000 - ₦112,000 / month', description: 'Section leader awarded with advanced military experience and tactical training.' },
      { rank: 'Sergeant', salary: '₦120,000 - ₦130,000 / month', description: 'Platoon senior non-commissioned officer.' },
      { rank: 'Second Lieutenant (DSSC / Regular Officer)', salary: '₦240,000 - ₦270,000 / month', description: 'Entry commissioned officer rank for university/HND graduates.' },
      { rank: 'Lieutenant', salary: '₦290,000 - ₦325,000 / month', description: 'Confirmed commissioned officer after initial probationary tenure.' }
    ],
    dates: {
      portalOpen: 'Annually (Check live portal for 88 RRI & DSSC)',
      portalClose: 'Refer to active countdown in tracker',
      screeningDate: 'Zonal screening conducted across all 36 state commands.',
      examDate: 'Computer-Based aptitude tests held at designated military command schools.',
      shortlistDate: 'Verified on tracking.armynotification.com.ng and official portal.'
    },
    stepByStep: [
      'Step 1: Visit the official Nigerian Army portal at recruitment.army.mil.ng.',
      'Step 2: Authenticate using your National Identification Number (NIN) and a functional email address.',
      'Step 3: Select either Regular Recruit Intake (RRI) for SSCE holders or Direct Short Service Commission (DSSC) for degree holders.',
      'Step 4: Upload your scanned credentials, local government certificate of origin, and passport photographs.',
      'Step 5: Download and print the completed application summary sheet and guarantor endorsement slips.',
      'Step 6: Track your application status and reprint screening passes on tracking.armynotification.com.ng.'
    ],
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
      { question: 'Is the Nigerian Army recruitment form out for 2026?', answer: 'The Nigerian Army conducts regular recruitment intakes annually. Candidates should verify the live status badge on this tracker or check recruitment.army.mil.ng for active registration dates.' },
      { question: 'What is the official closing date for Nigerian Army recruitment?', answer: 'The application portal typically remains active for 4 to 6 weeks from flag-off. Always print your application summary and guarantor forms before the announced midnight closing deadline.' },
      { question: 'How much is the salary of a Nigerian Army recruit in 2026?', answer: 'Under the updated CONAFSS pay scale, a newly passed-out recruit (Private) earns between ₦77,000 and ₦85,000 monthly basic pay, plus combat allowances ranging from ₦30,000 to ₦60,000 when deployed to active operations.' },
      { question: 'Is the Nigerian Army application form free?', answer: 'Yes, the official application form is 100% free of charge. Do not pay any portal coordinators or third parties.' },
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
    officialPortalUrl: 'https://joinnigeriannavy.com',
    scamWarning: 'CRITICAL NAVY ANTI-FRAUD ADVISORY: The Nigerian Navy does NOT sell scratch cards or charge registration fees for Batch ratings or DSSC officers. All authentic enlistment portals operate exclusively on joinnigeriannavy.com and navy.mil.ng. Do not pay money to anyone claiming to offer shortlisted slots or physical screening assistance.',
    description: 'The Nigerian Navy (NN) is the maritime branch of the Nigerian Armed Forces. It is tasked with protecting Nigeria\'s territorial waters, oil installations, and combating maritime crimes such as sea piracy and crude oil theft. Recruitment is conducted via the Basic Military Training Course (BMTC) for ratings and the Direct Short Service Commission (DSSC) for officer cadets.',
    generalSalaryDesc: 'Naval personnel are paid in accordance with the 2026 updated CONAFSS structure, with additional sea duty allowances, diving bonuses, and standard armed forces medical and housing packages.',
    ranks: [
      { rank: 'Ordinary Seaman (Passed Out Recruit)', salary: '₦78,000 - ₦86,000 / month', description: 'Entry-level rating rank after completing basic training at NNBTS Onne, plus sea allowances.' },
      { rank: 'Able Seaman', salary: '₦92,000 - ₦100,000 / month', description: 'Awarded after initial service years and marine technical certifications.' },
      { rank: 'Leading Seaman', salary: '₦104,000 - ₦115,000 / month', description: 'Junior naval section commander.' },
      { rank: 'Sub-Lieutenant (DSSC Officer)', salary: '₦245,000 - ₦275,000 / month', description: 'Commissioned officer entry rank for university and HND graduates.' },
      { rank: 'Lieutenant', salary: '₦290,000 - ₦330,000 / month', description: 'Regular commissioned rank above Sub-Lieutenant.' }
    ],
    dates: {
      portalOpen: 'Annually (Batch 38/39 & DSSC 30)',
      portalClose: 'Refer to active updates on tracker',
      screeningDate: 'Screening and physical verification take place at NNBTS Onne, Rivers State.',
      examDate: 'Aptitude tests are held at designated naval secondary schools nationwide.',
      shortlistDate: 'Shortlists are published on the official joinnigeriannavy.com portal.'
    },
    stepByStep: [
      'Step 1: Access the official recruitment portal at joinnigeriannavy.com.',
      'Step 2: Enter your National Identification Number (NIN) to verify your personal bio-data.',
      'Step 3: Select your chosen recruitment stream: Basic Military Training Course (BMTC Batch) or DSSC Graduate Officer.',
      'Step 4: Upload certified copies of your educational certificates, state of origin document, and white-background passport photograph.',
      'Step 5: Print out the Parent/Guardian Consent Form and the Local Government Attestation Slip.',
      'Step 6: Attend the nationwide Computer-Based Test (CBT) and proceed to NNBTS Onne for final screening if shortlisted.'
    ],
    requirements: {
      academic: [
        'Minimum of 5 credits in WASSCE/NECO/GCE/NABTEB including English and Mathematics in not more than 2 sittings.',
        'For DSSC, university degree (minimum 2:2) or HND (Upper Credit) in relevant fields; NYSC certificate is mandatory.',
        'Applicants must present original certificates at the screening venue.'
      ],
      physical: [
        'Height: Minimum of 1.68m for males and 1.65m for females.',
        'Age: 18 to 22 years for ratings, and up to 28 years for DSSC officer cadets (30 for medical practitioners).',
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
      { question: 'Is the Nigerian Navy recruitment form out for 2026?', answer: 'The Nigerian Navy opens registration periodically for BMTC ratings and DSSC officer cadets. Track the active status on joinnigeriannavy.com and on this portal.' },
      { question: 'What is the official closing date for the Nigerian Navy recruitment exercise?', answer: 'Naval registration portals typically stay open for 4 to 6 weeks. Candidates should submit applications at least 3 days before the deadline to prevent portal congestion.' },
      { question: 'What is the official portal to apply for Nigerian Navy recruitment?', answer: 'The only official portal for all Nigerian Navy enlistment exercises is joinnigeriannavy.com (and navy.mil.ng). Any other URL requesting application fees or PIN purchases is fraudulent.' },
      { question: 'How much does a Nigerian Navy recruit earn per month?', answer: 'An Ordinary Seaman in the Nigerian Navy earns between ₦78,000 and ₦86,000 monthly basic pay under the 2026 CONAFSS scale. When embarked on naval vessels or maritime anti-piracy operations, personnel receive additional sea duty allowances of ₦25,000 to ₦50,000.' },
      { question: 'Where is the Navy screening center?', answer: 'Physical screening is typically conducted at the Nigerian Navy Basic Training School (NNBTS) in Onne, Rivers State.' },
      { question: 'What is the training duration for Navy recruits?', answer: 'Ratings undergo 6 months of training at NNBTS Onne, while DSSC officers undergo 9 months of cadet training.' }
    ]
  },
  'navy-batch': {
    name: 'Nigerian Navy Basic Training School (Batch 38 & 39 Regular Intake)',
    branch: 'Navy',
    color: 'bg-military-blue',
    gradient: 'from-blue-900 via-military-blue to-slate-900',
    borderCol: 'border-blue-200',
    textCol: 'text-blue-800',
    bgLight: 'bg-blue-50/50',
    officialPortalUrl: 'https://joinnigeriannavy.com',
    customSeoTitle: 'Nigerian Navy Recruitment 2026 Batch 39: Portal, Closing Date & Slip Reprint',
    customSeoDescription: 'Nigerian Navy Batch 38/39 recruitment guide 2026. Official joinnigeriannavy.com portal status, closing dates, NNBTS Onne screening requirements, salary scale & slip reprint.',
    scamWarning: 'CRITICAL NAVAL RECRUITMENT WARNING: The Nigerian Navy does NOT sell scratch cards or request money through bank transfers, POS, or recruitment agents for Batch 38/39 enlistment. The only official registration portal is joinnigeriannavy.com. Disregard fake websites or WhatsApp syndicate numbers claiming to provide guaranteed shortlisting.',
    description: 'The Nigerian Navy Basic Military Training Course (BMTC Batch Intake) is the official enlistment channel for non-commissioned ratings (sailors, tradesmen, and artisans). Recruits undergo rigorous 6-month naval instruction at the Nigerian Navy Basic Training School (NNBTS), Onne, Rivers State, receiving military drill, seamanship, naval weapons training, and maritime firefighting.',
    generalSalaryDesc: 'Naval ratings are compensated under the Consolidated Armed Forces Salary Structure (CONAFSS), starting at ₦78,000 - ₦86,000 monthly upon passing out, plus free barracks housing, medical cover, and sea allowances.',
    ranks: [
      { rank: 'Trainee Rating (NNBTS Onne)', salary: '₦35,000 - ₦40,000 / month', description: 'Monthly upkeep stipend during 6 months basic training, including free meals, kitting, and accommodation.' },
      { rank: 'Ordinary Seaman (Pass-out Recruit)', salary: '₦78,000 - ₦86,000 / month', description: 'First official rank upon graduation from NNBTS Onne. Eligible for sea duty allowance.' },
      { rank: 'Able Seaman', salary: '₦92,000 - ₦100,000 / month', description: 'Awarded after completion of specialized technical maritime ratings.' },
      { rank: 'Leading Seaman', salary: '₦104,000 - ₦115,000 / month', description: 'Junior naval rating supervisor and section leader.' }
    ],
    dates: {
      portalOpen: 'Open Annually (Batch 38 / 39 Streams)',
      portalClose: 'Refer to live countdown on tracker',
      screeningDate: 'NNBTS Onne, Rivers State (Zonal Screening Phase)',
      examDate: 'CBT examination across 36 state naval command centers',
      shortlistDate: 'Official PDF shortlist published on joinnigeriannavy.com'
    },
    stepByStep: [
      'Step 1: Access the official recruitment portal at joinnigeriannavy.com.',
      'Step 2: Validate your National Identification Number (NIN) to ensure personal names and birth dates match your SSCE credentials.',
      'Step 3: Select your rating category (e.g. Seaman, Marine Engineering, Communications, Medical, or Stores).',
      'Step 4: Upload clear scans of your O-Level results (WAEC/NECO/NABTEB) and passport photograph.',
      'Step 5: Print out the completed Application Form, Parent/Guardian Consent Form, and Local Government Attestation Slip.',
      'Step 6: Check the official shortlist PDF on joinnigeriannavy.com and report to your designated CBT and screening center.'
    ],
    requirements: {
      academic: [
        'Minimum of 5 credits in WASSCE/NECO/GCE/NABTEB in not more than 2 sittings (must include English Language and Mathematics).',
        'Tradesmen applicants require Trade Test certificates or National Technical Certificate (NTC).',
        'Age must be between 18 and 22 years for non-tradesmen, and up to 26 years for tradesmen with diploma.'
      ],
      physical: [
        'Height: Not less than 1.68m for male applicants and 1.65m for female applicants.',
        'Chest measurement: Minimum of 86cm (34 inches) expanded for males.',
        'Applicants must be single with no children at the time of enlistment.'
      ],
      medical: [
        'Must possess normal colour perception and visual acuity (no glasses or laser eye surgery).',
        'Must be free from flat feet, surgical scars, tattoos, and orthopedic deformities.',
        'Must pass standard cardiovascular and swimming assessments at NNBTS Onne.'
      ]
    },
    examInfo: {
      subjects: ['English Language', 'Mathematics & Arithmetic', 'Current Affairs & Maritime Knowledge'],
      duration: '60 minutes',
      format: 'Computer Based Test (CBT)',
      tips: [
        'Practice rapid arithmetic and quantitative reasoning; time per question is under 45 seconds.',
        'Review current Chief of Naval Staff (CNS) name, naval ranks, and Nigerian geography.',
        'Bring your printed exam slip and original photo ID to the CBT center.'
      ]
    },
    faqs: [
      { question: 'Is the Nigerian Navy Batch 39 recruitment form out for 2026?', answer: 'The Nigerian Navy opens applications for its Regular Recruit Intake annually. Active batches and portal links are tracked in real-time at joinnigeriannavy.com and on this dashboard.' },
      { question: 'What is the official closing date for Nigerian Navy Batch recruitment?', answer: 'Portals generally stay open for 4 to 6 weeks. Candidates should submit applications and print all guarantor and consent slips well before the stated midnight deadline.' },
      { question: 'What is the official portal to apply for Nigerian Navy recruitment?', answer: 'The authentic website is joinnigeriannavy.com. Candidates must never submit credentials or payments on third-party job boards.' },
      { question: 'How much is the salary of a Navy recruit at NNBTS Onne?', answer: 'Trainees receive a monthly upkeep stipend of ₦35,000 to ₦40,000 with complete feeding and housing. Upon passing out, an Ordinary Seaman receives ₦78,000 to ₦86,000 monthly basic pay, plus sea allowances when deployed.' },
      { question: 'How do I download and print my Nigerian Navy screening slip?', answer: 'Log into joinnigeriannavy.com with your registered email and password or application number, click on "Print Slip/Status", and generate your screening pass, guarantor endorsement form, and consent slip.' },
      { question: 'What are the physical and academic requirements for Navy Batch 39?', answer: 'Candidates must be 18 to 22 years old (up to 26 for tradesmen), have a minimum height of 1.68m for males and 1.65m for females, possess at least 5 O-Level credits including English and Mathematics in no more than 2 sittings, and be single.' },
      { question: 'Where is the Navy Batch physical screening venue?', answer: 'Initial aptitude tests are held at designated naval secondary schools in each state, followed by final interview and verification at NNBTS Onne, Rivers State.' }
    ]
  },
  'navy-dssc': {
    name: 'Nigerian Navy Direct Short Service Commission (DSSC Course 30)',
    branch: 'Navy',
    color: 'bg-military-blue',
    gradient: 'from-slate-900 via-military-blue to-blue-950',
    borderCol: 'border-blue-200',
    textCol: 'text-blue-800',
    bgLight: 'bg-blue-50/50',
    description: 'The Nigerian Navy Direct Short Service Commission (DSSC) Course is the premier enlistment route for university graduates and Higher National Diploma (HND) holders to obtain executive and professional officer commissions in the Armed Forces. Successful candidates are commissioned as Sub-Lieutenants across branches including Marine Engineering, Weapon Electrical, Logistics, Medical, Legal, and Hydrography.',
    generalSalaryDesc: 'DSSC commissioned officers are placed on CONAFSS Grade 08, earning a competitive starting salary of ₦245,000 - ₦275,000 per month, plus hazard, mess, and specialized duty allowances.',
    ranks: [
      { rank: 'Cadet Officer (In Training)', salary: '₦45,000 - ₦55,000 / month', description: 'Upkeep stipend during 9 months cadet officer instruction at Nigerian Naval College, Onne.' },
      { rank: 'Sub-Lieutenant (Commissioned Entry)', salary: '₦245,000 - ₦275,000 / month', description: 'First commissioned officer rank awarded to DSSC graduates upon passing out parade.' },
      { rank: 'Lieutenant (Promoted)', salary: '₦290,000 - ₦330,000 / month', description: 'Awarded after confirmation of executive watchkeeping certificates and mandatory service years.' },
      { rank: 'Lieutenant Commander', salary: '₦450,000 - ₦530,000 / month', description: 'Senior naval officer rank commanding ship departments or executive naval units.' }
    ],
    dates: {
      portalOpen: 'Annually (DSSC Course 30 Intake)',
      portalClose: 'Refer to live countdown on tracker',
      screeningDate: 'Nigerian Naval College / NNBTS Onne, Rivers State',
      examDate: 'Computer-Based Aptitude Test nationwide',
      shortlistDate: 'Published on joinnigeriannavy.com and national dailies'
    },
    stepByStep: [
      'Step 1: Check eligibility: Ensure you possess a minimum of Second Class Lower (2:2) degree or HND Upper Credit with an official NYSC discharge or exemption certificate.',
      'Step 2: Visit joinnigeriannavy.com and navigate to the DSSC Enlistment tab.',
      'Step 3: Register with your NIN and create your candidate portal profile.',
      'Step 4: Upload your degree certificates, academic transcripts, professional registrations (e.g. COREN, MDCN, NBA where applicable), and birth certificate.',
      'Step 5: Download and print the parent/guardian consent slip and local government attestation forms.',
      'Step 6: Sit for the CBT aptitude test and attend the Central Selection Board interview in Onne if shortlisted.'
    ],
    requirements: {
      academic: [
        'Bachelor’s degree with not less than Second Class Lower Division (2:2) or HND with Upper Credit from recognized institutions.',
        'NYSC Discharge Certificate or official Certificate of Exemption is mandatory.',
        'Professional certification (e.g., COREN for Engineers, MDCN for Medical Doctors, NBA for Legal Officers) is advantageous.'
      ],
      physical: [
        'Height: Minimum of 1.68m for male applicants and 1.65m for female applicants.',
        'Age: Not less than 22 years and not more than 28 years by birth (up to 30 years for Medical Consultants).',
        'Must be single and unmarried at the time of enlistment and training.'
      ],
      medical: [
        'Must possess excellent physical and psychological health certified by a military hospital.',
        'Visual acuity of 6/6 without corrective lenses for executive seaman cadre.',
        'No past major surgical operations, chronic cardiovascular conditions, or psychiatric history.'
      ]
    },
    examInfo: {
      subjects: ['General Paper & Maritime Knowledge', 'Verbal Reasoning', 'Quantitative Analysis', 'Professional Specialty Assessment'],
      duration: '90 minutes',
      format: 'Computer Based Test (CBT)',
      tips: [
        'Study contemporary Nigerian military command structure and international maritime affairs.',
        'Review degree-level fundamentals for your technical specialty.',
        'Arrive at the CBT center in formal attire with your printed exam slip and photo ID.'
      ]
    },
    faqs: [
      { question: 'Is the Nigerian Navy DSSC Course 30 form out for 2026?', answer: 'The Nigerian Navy announces DSSC enlistment cycles once annually. Active status and portal access are verified live on joinnigeriannavy.com and on this tracking hub.' },
      { question: 'What is the official closing date for Navy DSSC recruitment?', answer: 'The online registration window for DSSC lasts for approximately 4 weeks from flag-off. Late submissions or incomplete uploads are automatically invalidated.' },
      { question: 'What rank and salary does a Navy DSSC officer receive?', answer: 'DSSC graduates are commissioned with the rank of Sub-Lieutenant on CONAFSS Grade 08, earning between ₦245,000 and ₦275,000 per month, plus allowances for hazard, officers mess, and sea duties.' },
      { question: 'Can married people apply for Nigerian Navy DSSC?', answer: 'No. All applicants must be single and unmarried at the time of application and throughout the 9 months of training at the Nigerian Naval College.' },
      { question: 'What is the training duration for Navy DSSC officer cadets?', answer: 'Navy DSSC cadets undergo 9 months of intensive military leadership, navigation, and maritime combat training at the Nigerian Naval College, Onne, Rivers State.' }
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
    officialPortalUrl: 'https://www.cbn.gov.ng/Recruitment',
    customSeoTitle: 'CBN Recruitment 2026: Portal Status, Requirements & Scam Warning',
    customSeoDescription: 'Central Bank of Nigeria (CBN) recruitment 2026 portal status at cbn.gov.ng. Verified graduate trainee criteria, CBT exam dates, salary scale, and official anti-fraud warnings.',
    scamWarning: 'OFFICIAL CBN ANTI-FRAUD NOTICE: The Central Bank of Nigeria (CBN) never charges any fee for job applications, aptitude tests, or appointment letters. All authentic recruitment announcements are issued exclusively on the official domain www.cbn.gov.ng. Beware of fraudulent cloned websites such as cbn-careers-gov.org, fake WhatsApp recruitment groups, and middlemen claiming to offer reserved governor slots.',
    description: 'The Central Bank of Nigeria (CBN) is the apex monetary authority in Nigeria. It is responsible for price stability, currency issuance (Naira), monetary policy, and regulating the commercial banking sector. CBN recruits Economists, Accountants, IT Specialists, Cyber Security Engineers, and Statisticians.',
    generalSalaryDesc: 'CBN offers premium public sector compensation under its autonomous corporate grade structure, including competitive basic salary, housing loans, health insurance, and 13th-month bonuses.',
    ranks: [
      { rank: 'Executive Assistant (Graduate Entry)', salary: '₦145,000 - ₦185,000 / month', description: 'Starting rank for fresh university graduates post-NYSC with Second Class Upper degree.' },
      { rank: 'Senior Assistant (Specialist Entry)', salary: '₦210,000 - ₦260,000 / month', description: 'Advanced entry level for Master\'s degree holders or professional chartered accountants (ICAN/ACCA).' },
      { rank: 'Assistant Manager (Economist / Analyst)', salary: '₦320,000 - ₦400,000 / month', description: 'Experienced technical hire managing monetary policy data, banking supervision, or digital payments.' }
    ],
    dates: {
      portalOpen: 'Periodic Specialist & Graduate Enlistment',
      portalClose: 'Refer to active postings on cbn.gov.ng/Recruitment',
      screeningDate: 'CBN Headquarters, Central Business District, Abuja (Final Interview Phase)',
      examDate: 'Computer-Based psychometric and economic acumen evaluation at certified test centers',
      shortlistDate: 'Published strictly via cbn.gov.ng official dispatch & registered email'
    },
    stepByStep: [
      'Step 1: Access the authentic Central Bank of Nigeria careers gateway at cbn.gov.ng/Recruitment.',
      'Step 2: Review open job roles: Executive Assistant (entry graduate), Specialist Cadre, or Experienced Professional.',
      'Step 3: Complete NIN authentication and provide verifiable personal, academic, and NYSC discharge details.',
      'Step 4: Upload university degree certificates (minimum Second Class Upper - 2:1) or HND (Upper Credit), alongside curriculum vitae.',
      'Step 5: Review all entries and submit before the stated deadline, recording your confidential application tracking reference.',
      'Step 6: Invited candidates receive secure test invitations from official @cbn.gov.ng email addresses.'
    ],
    requirements: {
      academic: [
        'Minimum of a Bachelor\'s degree (Second Class Upper - 2:1) or HND (Upper Credit) in Economics, Finance, Accounting, Statistics, Data Science, Cyber Security, or Computer Science.',
        'NYSC discharge or official exemption certificate is strictly mandatory.',
        'Professional certifications (ICAN, ACCA, CFA, CISA, CISSP) are highly advantageous.'
      ],
      physical: [
        'Age: Not above 26 years for fresh graduate Executive Assistants (up to 30 for Master\'s holders or experienced specialist cadres).',
        'No height or military physical measurements required.'
      ],
      medical: [
        'Must pass government-standard medical fitness tests and occupational vision/drug evaluations.'
      ]
    },
    examInfo: {
      subjects: ['Numerical Reasoning & Data Interpretation', 'Critical Verbal Reasoning', 'Macroeconomics & Financial Sector Affairs', 'Abstract Puzzles'],
      duration: '90 minutes',
      format: 'Computer Based Test (CBT)',
      tips: [
        'Practice GMAT and SHL style advanced numerical tests and data interpretation.',
        'Study CBN monetary policy tools, inflation targets, cash reserve ratio (CRR), and historical governors of the apex bank.',
        'Accuracy is heavily weighted alongside speed; avoid reckless guessing on complex logic questions.'
      ]
    },
    faqs: [
      { question: 'Is the CBN recruitment form out for 2026?', answer: 'The Central Bank of Nigeria opens recruitment on an as-needed basis for graduate and experienced cadres. When active, official links and verification alerts are posted on cbn.gov.ng and tracked live on this dashboard.' },
      { question: 'What is the official Central Bank of Nigeria recruitment website?', answer: 'The ONLY official website for CBN job openings is www.cbn.gov.ng/Recruitment. Beware of copycat websites ending in .com, .org, or .net asking for application fees.' },
      { question: 'What are the educational qualifications required for CBN recruitment?', answer: 'CBN strictly requires a minimum of a Second Class Honours (Upper Division - 2:1) Bachelor\'s degree or Higher National Diploma (Upper Credit), plus a valid NYSC discharge certificate.' },
      { question: 'How much is the starting salary for an entry-level staff at the Central Bank of Nigeria (CBN)?', answer: 'An entry-level Executive Assistant at the CBN earns an estimated ₦145,000 to ₦185,000 monthly basic pay, plus generous annual allowances, subsidized healthcare, and pension contributions.' },
      { question: 'Does CBN recruit SSCE / WAEC certificate holders?', answer: 'Entry-level executive and analyst recruitment at the CBN requires a university degree or HND. Support staff or auxiliary roles are sourced via licensed civil service channels.' },
      { question: 'How does the CBN recruitment CBT screening test work?', answer: 'Candidates who pass the initial credential review are invited to a proctored Computer-Based Test (CBT) covering numerical reasoning, verbal logic, and macroeconomic/financial literacy, followed by panel interviews.' }
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
    officialPortalUrl: 'https://www.ncc.gov.ng/careers-ncc',
    customSeoTitle: 'NCC Recruitment 2026: Application Portal, Requirements & Exam Date',
    customSeoDescription: 'Nigerian Communications Commission (NCC) recruitment 2026 at ncc.gov.ng/careers-ncc. Officer entry requirements, salary scale, CBT aptitude dates, and official guidelines.',
    scamWarning: 'OFFICIAL NCC NOTICE & DISCLAIMER: The Nigerian Communications Commission (NCC) is Nigeria\'s federal independent telecommunications regulatory authority. NCC recruitment is strictly competitive, merit-based, and completely free of charge. No payment is required for application forms, screening exams, or placement. Never send money to recruiters claiming to offer insider commission slots.',
    description: 'The Nigerian Communications Commission (NCC) is the independent regulatory authority for the telecommunications industry in Nigeria. Established under the Nigerian Communications Act 2003, it regulates service providers, manages spectrum allocation, protects consumer rights, and advances broadband rollout. Recruitment is conducted periodically for Telecom Engineers, Spectrum Analysts, IT Specialists, and Legal Officers.',
    generalSalaryDesc: 'NCC is an autonomous federal commission offering premium public service remuneration, health maintenance coverage, foreign training programs, and performance-based allowances.',
    ranks: [
      { rank: 'Officer II (Graduate Entry)', salary: '₦135,000 - ₦170,000 / month', description: 'Starting rank for fresh university graduates and HND holders post-NYSC.' },
      { rank: 'Officer I (Confirmed Grade)', salary: '₦180,000 - ₦220,000 / month', description: 'Confirmed officer cadre with 2-3 years specialized regulatory experience.' },
      { rank: 'Senior Officer (Technical Specialist)', salary: '₦250,000 - ₦310,000 / month', description: 'Advanced rank for spectrum planning, cybersecurity, and telecommunication compliance specialists.' }
    ],
    dates: {
      portalOpen: 'Periodic Enlistment via NCC Careers Gateway',
      portalClose: 'Check updates on ncc.gov.ng/careers-ncc',
      screeningDate: 'NCC Headquarters, Plot 423, Aguiyi Ironsi Street, Maitama, Abuja',
      examDate: 'Computer-Based aptitude assessment at accredited JAMB CBT centers nationwide',
      shortlistDate: 'Published on official NCC website and emailed to shortlisted applicants'
    },
    stepByStep: [
      'Step 1: Navigate to the verified NCC careers portal at ncc.gov.ng/careers-ncc.',
      'Step 2: Select the active recruitment vacancy matching your professional discipline (e.g. Spectrum Management, Engineering, Legal, IT).',
      'Step 3: Enter your biographical data and ensure your NIN matches your O-Level and degree certificates.',
      'Step 4: Upload your degree certificate (minimum Second Class Lower - 2:2) or HND (Upper Credit) with NYSC discharge slip.',
      'Step 5: Complete online psychometric questionnaires and submit your digital application dossier.',
      'Step 6: Check for official CBT test scheduling notices sent exclusively from official @ncc.gov.ng email domains.'
    ],
    requirements: {
      academic: [
        'Minimum of a Bachelor\'s degree (Second Class Lower - 2:2) or HND (Upper Credit) in Telecommunications Engineering, Electrical/Electronic Engineering, Computer Science, Law, Economics, or Information Systems.',
        'NYSC discharge or exemption certificate is strictly mandatory.',
        'NIN and certified academic transcript verification.'
      ],
      physical: [
        'Must not be above 30 years of age for entry level roles.',
        'No physical height or military physical requirements.'
      ],
      medical: [
        'Must be medically fit and pass basic occupational health screenings.',
        'No drug-related or criminal conviction history.'
      ]
    },
    examInfo: {
      subjects: ['Verbal & Quantitative Reasoning', 'Specialized Area Test (IT/Telecom Engineering/Law)', 'General Knowledge & Nigerian Communications Act 2003'],
      duration: '90 minutes',
      format: 'Computer Based Test (CBT)',
      tips: [
        'Study the Nigerian Communications Act 2003 and key functions of the commission.',
        'Familiarize yourself with telecom terminology (e.g. 5G rollout, spectrum bandwidth, QoS, QoS KPIs, USSD regulations).',
        'Practice timed numerical and logical reasoning assessments.'
      ]
    },
    faqs: [
      { question: 'Is NCC recruitment form out for 2026?', answer: 'The Nigerian Communications Commission advertises job openings periodically as vacancies arise. When applications open, authentic notices are published on ncc.gov.ng/careers-ncc and tracked in real-time on this portal.' },
      { question: 'What is the official Nigerian Communications Commission careers portal?', answer: 'The genuine recruitment gateway is www.ncc.gov.ng/careers-ncc. Do not register or submit personal documents on third-party blogs or unofficial portals.' },
      { question: 'What degree qualifications are needed to work at NCC?', answer: 'NCC generally requires a minimum of a Second Class Lower (2:2) degree or HND (Upper Credit) in Engineering, Computer Science, Law, Economics, or Mass Communication, plus an NYSC discharge certificate.' },
      { question: 'How much does an entry-level officer earn at NCC?', answer: 'An entry-level Officer II at the Nigerian Communications Commission earns an estimated ₦135,000 to ₦170,000 monthly basic salary, accompanied by comprehensive health insurance and statutory allowances.' },
      { question: 'What subjects are tested in the NCC CBT aptitude screening?', answer: 'The CBT assessment tests verbal reasoning, quantitative mathematics, current affairs, and domain-specific knowledge in telecommunications, IT, or regulatory law.' },
      { question: 'What is the age limit for NCC entry level?', answer: 'The maximum age limit for entry-level officer positions at NCC is 30 years at the time of application.' }
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

  // Find dynamic recruitment entry corresponding to this branch or intake
  const activeRecruitment = recruitments.find(r => {
    if (agencySlug === 'navy-batch') return r.id === 'navy-batch' || (r.branch === 'Navy' && r.category === 'Regular Recruit');
    if (agencySlug === 'navy-dssc') return r.id === 'navy-dssc' || (r.branch === 'Navy' && r.category === 'DSSC');
    return r.branch.toLowerCase() === staticData.branch.toLowerCase();
  }) || recruitments.find(
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

  const getDynamicAgencyHook = () => {
    if (activeRecruitment?.status === 'Open') {
      return '[Application Portal Open - Apply Now]';
    }
    if (activeRecruitment?.status === 'Shortlist Out') {
      return '[Shortlist PDF Out - Check Name & Centers]';
    }
    if (activeRecruitment?.status === 'Upcoming') {
      return '[Opening Soon - Requirements & Salary Scale]';
    }
    if (activeRecruitment?.status === 'Closed') {
      return '[Portal Closed - Screening Slip & CBT Questions]';
    }
    return '[Official Portal, Salary Scale & Screening Guide]';
  };

  const dynamicHook = getDynamicAgencyHook();
  const pageTitle = staticData.customSeoTitle || `${staticData.name} Recruitment 2026/2027 ${dynamicHook}`;
  const metaDescription = staticData.customSeoDescription || `Official ${staticData.name} (${staticData.branch}) recruitment portal 2026/2027. Status: ${activeRecruitment?.status || 'Active Tracking'}. Check requirements, salary scale, screening dates & official login link.`;

  return (
    <div className="max-w-6xl mx-auto">
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonical={`/${agencySlug}-recruitment`}
        keywords={[
          `${staticData.name} recruitment 2026`,
          `${staticData.name} salary structure`,
          `${staticData.name} portal login`,
          `${staticData.name} requirements`,
          `${staticData.name} screening date`,
          'Nigerian recruitment portal',
          'Nigeria recruitment tracker'
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
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              {staticData.branch} Hub
            </span>
            <span className="bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-emerald-300" /> {getDailyUpdatedBadge()}
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

      {/* Above-the-fold Fast-Action Strip */}
      <FastActionCard
        branch={staticData.branch}
        title={`${staticData.name} Recruitment 2026`}
        portalUrl={activeRecruitment?.portal_url || `https://${agencySlug}.gov.ng`}
        status={activeRecruitment?.status || 'Closed'}
        deadlineDate={activeRecruitment?.deadline_date}
        cbtSlug={BRANCH_TO_SLUG[staticData.branch] || agencySlug}
        onOpenChecklist={() => setActiveTab('requirements')}
      />

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
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Important Deadlines & Schedule</h4>
                      <div className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                        <div><strong>Portal Opens:</strong> {staticData.dates?.portalOpen || 'Annually (See live badge)'}</div>
                        <div><strong>Closing Date:</strong> <span className="text-red-700 font-semibold">{activeRecruitment?.deadline_date ? new Date(activeRecruitment.deadline_date).toLocaleDateString() : staticData.dates?.portalClose || 'Refer to live countdown'}</span></div>
                        {staticData.dates?.screeningDate && (
                          <div><strong>Screening Venue:</strong> {staticData.dates.screeningDate}</div>
                        )}
                        {staticData.dates?.examDate && (
                          <div><strong>CBT Aptitude Exam:</strong> {staticData.dates.examDate}</div>
                        )}
                        {staticData.dates?.shortlistDate && (
                          <div><strong>Shortlist Status:</strong> {staticData.dates.shortlistDate}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Official Anti-Scam & Portal Security Advisory */}
                {staticData.scamWarning && (
                  <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50/70 border-2 border-amber-300/80 rounded-2xl text-amber-950 shadow-xs flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-extrabold text-sm text-amber-950 uppercase tracking-wide">
                          Official Anti-Scam & Portal Security Advisory
                        </h4>
                        {staticData.officialPortalUrl && (
                          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/90 text-amber-950 font-mono font-bold">
                            Verified: {new URL(staticData.officialPortalUrl).hostname}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-amber-900 leading-relaxed font-medium">
                        {staticData.scamWarning}
                      </p>
                      {staticData.officialPortalUrl && (
                        <div className="pt-1 flex flex-wrap items-center gap-3">
                          <a
                            href={staticData.officialPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-950 hover:text-amber-800 underline decoration-amber-500 underline-offset-2"
                          >
                            Access Official Portal ({staticData.officialPortalUrl}) <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Nigerian Army Application Status & Screening Slip Gateway */}
                {agencySlug === 'army' && (
                  <div className="p-6 bg-gradient-to-br from-green-950 via-emerald-900 to-slate-950 text-white rounded-2xl border border-emerald-700/60 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                          Official Notification Gateway
                        </span>
                      </div>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-800 text-emerald-200 font-mono">
                        tracking.armynotification.com.ng
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      Track Application Status & Download Screening Slip
                    </h3>
                    <p className="text-xs text-emerald-100/90 leading-relaxed mb-4">
                      Are you looking to verify your enlistment progress or print your physical screening slip for 87 RRI, 88 RRI, or DSSC? Check your application number on the official tracking portal or read our step-by-step tutorial.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/guides/print-army-screening-slip"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                      >
                        <FileText className="w-4 h-4" /> Slip Printing & Status Guide
                      </Link>
                      <a
                        href="https://tracking.armynotification.com.ng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-emerald-100 font-bold rounded-xl text-xs transition-colors border border-slate-700"
                      >
                        <ExternalLink className="w-4 h-4" /> Open tracking.armynotification.com.ng
                      </a>
                    </div>
                  </div>
                )}

                {/* Step-by-Step Application Guide */}
                {(activeRecruitment?.application_process || staticData.stepByStep) && (
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ListChecks className="w-5 h-5 text-military-green" /> Step-by-Step Application Process
                    </h3>
                    <div className="space-y-3">
                      {(activeRecruitment?.application_process || staticData.stepByStep)!.map((step, idx) => (
                        <div key={idx} className="flex gap-3 sm:gap-4 p-3.5 bg-gray-50/80 rounded-2xl border border-gray-100 items-start">
                          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-military-blue text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-sm mt-0.5">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Frequently Asked Questions (PAA & Featured Snippet Indexable Section) */}
                {staticData.faqs && staticData.faqs.length > 0 && (
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-amber-600" /> Frequently Asked Questions (PAA Answers)
                    </h3>
                    <div className="space-y-3">
                      {staticData.faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 bg-slate-50/70 hover:bg-slate-50 rounded-2xl border border-gray-200/80 transition-colors">
                          <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1.5 flex items-start gap-2">
                            <span className="text-military-blue font-black shrink-0">Q:</span>
                            <span>{faq.question}</span>
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm pl-5 leading-relaxed">
                            {faq.answer}
                          </p>
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

                <div className="pt-6 border-t border-gray-100">
                  <ScreeningChecklist
                    branch={staticData.branch}
                    title={`${staticData.name} Physical Screening Document Checklist`}
                  />
                </div>
              </div>
            )}

            {/* TAB: SALARY */}
            {activeTab === 'salary' && (
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <CircleDollarSign className="w-5 h-5 text-emerald-600" /> 2026 Salary Breakdown
                    </h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 w-fit">
                      2026 CONAFSS Updated Scale
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    {staticData.generalSalaryDesc}
                  </p>

                  {/* Army Salary Hub Link */}
                  {agencySlug === 'army' && (
                    <div className="p-4 sm:p-5 mb-5 bg-gradient-to-r from-emerald-50 to-green-100/70 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-200 text-emerald-900 mb-1">
                          Dedicated Salary Page & Old vs New Table
                        </span>
                        <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                          Comprehensive 2026 Nigerian Army Salary Structure
                        </h4>
                        <p className="text-xs text-emerald-800 mt-0.5">
                          View full rank-by-rank monthly & annual CONAFSS rates, combat allowances, and take-home pay.
                        </p>
                      </div>
                      <Link
                        to="/army-salary"
                        className="px-4 py-2.5 bg-military-green hover:bg-green-800 text-white font-bold rounded-xl text-xs transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
                      >
                        Open Full Army Salary Page <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}

                  {/* Tri-Service / Paramilitary Comparison CTA */}
                  <div className="p-4 sm:p-5 mb-5 bg-gradient-to-r from-blue-50 to-indigo-100/70 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-200 text-blue-900 mb-1">
                        Cross-Agency Comparison Tables
                      </span>
                      <h4 className="font-bold text-blue-950 text-sm sm:text-base">
                        Compare Army vs Navy vs Air Force vs Police Salaries
                      </h4>
                      <p className="text-xs text-blue-800 mt-0.5">
                        Side-by-side comparison tables across recruits, DSSC officers, and command allowances.
                      </p>
                    </div>
                    <Link
                      to="/salary-comparison"
                      className="px-4 py-2.5 bg-military-blue hover:bg-blue-900 text-white font-bold rounded-xl text-xs transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
                    >
                      View Comparison Tables <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-xs">
                    <table className="min-w-full divide-y divide-gray-200 text-left">
                      <thead className="bg-gray-50 text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <tr>
                          <th className="px-4 sm:px-6 py-3.5 whitespace-nowrap">Rank / Cadre</th>
                          <th className="px-4 sm:px-6 py-3.5 whitespace-nowrap">2026 Estimated Monthly Salary</th>
                          <th className="px-4 sm:px-6 py-3.5">Key Responsibilities / Details</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-sm">
                        {staticData.ranks.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                            <td className="px-4 sm:px-6 py-4 font-bold text-gray-900 whitespace-nowrap">{item.rank}</td>
                            <td className="px-4 sm:px-6 py-4 font-extrabold text-emerald-700 whitespace-nowrap">{item.salary}</td>
                            <td className="px-4 sm:px-6 py-4 text-gray-600 text-xs leading-relaxed">{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 leading-relaxed">
                  <strong>Official Note:</strong> Armed forces personnel are remunerated according to the Consolidated Armed Forces Salary Structure (CONAFSS), while paramilitary personnel follow the Consolidated Paramilitary Salary Structure (CONPASS). Operational and combat allowances vary by theater of operation.
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

                  {agencySlug === 'army' && (
                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-emerald-900">
                      <div>
                        <span className="font-bold text-emerald-800 block text-sm">
                          Direct Portal Check (tracking.armynotification.com.ng)
                        </span>
                        <span>
                          For physical screening shortlist and verification slip printing, check directly on the Army tracking portal.
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          to="/guides/print-army-screening-slip"
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg"
                        >
                          Read Guide
                        </Link>
                        <a
                          href="https://tracking.armynotification.com.ng"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-white border border-emerald-300 text-emerald-800 font-bold rounded-lg flex items-center gap-1 hover:bg-emerald-50"
                        >
                          Open Portal <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

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

          {/* Re-circulation Next Step Interstitial */}
          <NextStepInterstitial
            currentBranch={staticData.branch}
            cbtSlug={BRANCH_TO_SLUG[staticData.branch] || agencySlug}
            currentType="recruitment"
          />
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

      {/* Floating Sticky Recommended Bar on Scroll */}
      <StickyRecommendedBar
        branch={staticData.branch}
        cbtSlug={BRANCH_TO_SLUG[staticData.branch] || agencySlug}
      />
    </div>
  );
};

export default AgencyHub;
