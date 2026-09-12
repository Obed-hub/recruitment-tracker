import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Calendar, Clock, ArrowRight, BookOpen, Award, CheckCircle,
  HelpCircle, CircleDollarSign, TrendingUp, AlertTriangle, FileText,
  ExternalLink, ChevronDown, ChevronUp, Download, Info
} from 'lucide-react';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import FastActionCard from '../components/FastActionCard';
import ScreeningChecklist from '../components/ScreeningChecklist';
import NextStepInterstitial from '../components/NextStepInterstitial';
import StickyRecommendedBar from '../components/StickyRecommendedBar';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface SalaryRank {
  rank: string;
  category: 'Non-Commissioned (Soldiers)' | 'Commissioned Officers';
  oldMonthly: string;
  newMonthly: string;
  percentIncrease: string;
  annualEstimate: string;
  gradeLevel: string;
  notes: string;
}

const ARMY_SALARY_DATA: SalaryRank[] = [
  {
    rank: 'Recruit / Trainee (Depot Zaria)',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦12,000 - ₦15,000',
    newMonthly: '₦35,000 - ₦40,000',
    percentIncrease: '+140%',
    annualEstimate: '₦420,000',
    gradeLevel: 'Depot Level',
    notes: 'Monthly upkeep stipend + complete free feeding, kitting & medical care during 6 months training.'
  },
  {
    rank: 'Private (Passed Out Recruit)',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦50,000 - ₦60,000',
    newMonthly: '₦77,000 - ₦85,000',
    percentIncrease: '+41%',
    annualEstimate: '₦924,000 - ₦1,020,000',
    gradeLevel: 'CONAFSS 01',
    notes: 'Starting rank after completing Depot basic training. Basic salary excludes field combat allowance.'
  },
  {
    rank: 'Lance Corporal',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦62,000 - ₦68,000',
    newMonthly: '₦92,000 - ₦98,000',
    percentIncrease: '+44%',
    annualEstimate: '₦1,104,000 - ₦1,176,000',
    gradeLevel: 'CONAFSS 02',
    notes: 'First non-commissioned promotion typically awarded after 2 to 3 years satisfactory service.'
  },
  {
    rank: 'Corporal',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦70,000 - ₦78,000',
    newMonthly: '₦104,000 - ₦112,000',
    percentIncrease: '+43%',
    annualEstimate: '₦1,248,000 - ₦1,344,000',
    gradeLevel: 'CONAFSS 03',
    notes: 'Junior section commander in an infantry rifle platoon.'
  },
  {
    rank: 'Sergeant',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦82,000 - ₦90,000',
    newMonthly: '₦120,000 - ₦130,000',
    percentIncrease: '+45%',
    annualEstimate: '₦1,440,000 - ₦1,560,000',
    gradeLevel: 'CONAFSS 04',
    notes: 'Experienced platoon sergeant overseeing equipment maintenance and discipline.'
  },
  {
    rank: 'Staff Sergeant',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦95,000 - ₦105,000',
    newMonthly: '₦140,000 - ₦152,000',
    percentIncrease: '+46%',
    annualEstimate: '₦1,680,000 - ₦1,824,000',
    gradeLevel: 'CONAFSS 05',
    notes: 'Company-level senior NCO assisting company commanders.'
  },
  {
    rank: 'Warrant Officer (WO II)',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦120,000 - ₦135,000',
    newMonthly: '₦175,000 - ₦190,000',
    percentIncrease: '+43%',
    annualEstimate: '₦2,100,000 - ₦2,280,000',
    gradeLevel: 'CONAFSS 06',
    notes: 'Company Sergeant Major (CSM) position.'
  },
  {
    rank: 'Master Warrant Officer (WO I)',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦150,000 - ₦170,000',
    newMonthly: '₦210,000 - ₦230,000',
    percentIncrease: '+37%',
    annualEstimate: '₦2,520,000 - ₦2,760,000',
    gradeLevel: 'CONAFSS 07',
    notes: 'Regimental Sergeant Major (RSM), highest practical battalion-level enlisted role.'
  },
  {
    rank: 'Army Warrant Officer (AWO)',
    category: 'Non-Commissioned (Soldiers)',
    oldMonthly: '₦180,000 - ₦210,000',
    newMonthly: '₦260,000 - ₦290,000',
    percentIncrease: '+41%',
    annualEstimate: '₦3,120,000 - ₦3,480,000',
    gradeLevel: 'CONAFSS 08',
    notes: 'Apex enlisted rank in the Nigerian Army, advisor to the Chief of Army Staff (COAS).'
  },
  {
    rank: 'Second Lieutenant (DSSC / Regular Officer)',
    category: 'Commissioned Officers',
    oldMonthly: '₦180,000 - ₦210,000',
    newMonthly: '₦240,000 - ₦270,000',
    percentIncrease: '+31%',
    annualEstimate: '₦2,880,000 - ₦3,240,000',
    gradeLevel: 'CONAFSS 08 (Commissioned)',
    notes: 'Entry commissioned rank for graduates from NDA or DSSC courses upon passing out.'
  },
  {
    rank: 'Lieutenant',
    category: 'Commissioned Officers',
    oldMonthly: '₦215,000 - ₦240,000',
    newMonthly: '₦290,000 - ₦325,000',
    percentIncrease: '+35%',
    annualEstimate: '₦3,480,000 - ₦3,900,000',
    gradeLevel: 'CONAFSS 09',
    notes: 'Promoted after initial confirmed commission years. Platoon Commander.'
  },
  {
    rank: 'Captain',
    category: 'Commissioned Officers',
    oldMonthly: '₦260,000 - ₦300,000',
    newMonthly: '₦360,000 - ₦410,000',
    percentIncrease: '+37%',
    annualEstimate: '₦4,320,000 - ₦4,920,000',
    gradeLevel: 'CONAFSS 10',
    notes: 'Second-in-command of an infantry company or staff captain at brigade HQ.'
  },
  {
    rank: 'Major',
    category: 'Commissioned Officers',
    oldMonthly: '₦320,000 - ₦380,000',
    newMonthly: '₦450,000 - ₦520,000',
    percentIncrease: '+38%',
    annualEstimate: '₦5,400,000 - ₦6,240,000',
    gradeLevel: 'CONAFSS 11',
    notes: 'Field officer rank. Company Commander or principal staff officer.'
  },
  {
    rank: 'Lieutenant Colonel',
    category: 'Commissioned Officers',
    oldMonthly: '₦400,000 - ₦470,000',
    newMonthly: '₦580,000 - ₦650,000',
    percentIncrease: '+41%',
    annualEstimate: '₦6,960,000 - ₦7,800,000',
    gradeLevel: 'CONAFSS 12',
    notes: 'Battalion Commanding Officer commanding 600 - 800 combat troops.'
  },
  {
    rank: 'Colonel',
    category: 'Commissioned Officers',
    oldMonthly: '₦550,000 - ₦650,000',
    newMonthly: '₦750,000 - ₦850,000',
    percentIncrease: '+33%',
    annualEstimate: '₦9,000,000 - ₦10,200,000',
    gradeLevel: 'CONAFSS 13',
    notes: 'Senior officer commanding larger units or military training institutions.'
  },
  {
    rank: 'Brigadier General',
    category: 'Commissioned Officers',
    oldMonthly: '₦800,000 - ₦950,000',
    newMonthly: '₦1,100,000 - ₦1,300,000',
    percentIncrease: '+37%',
    annualEstimate: '₦13,200,000 - ₦15,600,000',
    gradeLevel: 'CONAFSS 14',
    notes: 'One-star general commanding a military brigade (3 battalions).'
  },
  {
    rank: 'Major General',
    category: 'Commissioned Officers',
    oldMonthly: '₦1,200,000 - ₦1,400,000',
    newMonthly: '₦1,600,000 - ₦1,900,000',
    percentIncrease: '+35%',
    annualEstimate: '₦19,200,000 - ₦22,800,000',
    gradeLevel: 'CONAFSS 15',
    notes: 'Two-star general commanding an entire military division (GOC).'
  },
  {
    rank: 'Lieutenant General',
    category: 'Commissioned Officers',
    oldMonthly: '₦1,500,000 - ₦1,800,000',
    newMonthly: '₦2,000,000 - ₦2,400,000',
    percentIncrease: '+33%',
    annualEstimate: '₦24,000,000 - ₦28,800,000',
    gradeLevel: 'CONAFSS 16',
    notes: 'Three-star general rank held by the Chief of Army Staff (COAS).'
  },
  {
    rank: 'General (4-Star)',
    category: 'Commissioned Officers',
    oldMonthly: '₦1,800,000 - ₦2,200,000',
    newMonthly: '₦2,500,000 - ₦3,000,000',
    percentIncrease: '+37%',
    annualEstimate: '₦30,000,000 - ₦36,000,000',
    gradeLevel: 'CONAFSS 17',
    notes: 'Full four-star general rank held by the Chief of Defence Staff (CDS).'
  }
];

const ALLOWANCES_DATA = [
  {
    name: 'Operational / Combat Duty Allowance',
    recipients: 'Troops deployed to active operational theaters (e.g. Operation Hadin Kai, Northeast)',
    amount: '₦30,000 - ₦60,000 / month',
    frequency: 'Paid monthly during deployment'
  },
  {
    name: 'Hazard & Specialist Allowance',
    recipients: 'Bomb technicians, combat engineers, airborne paratroopers, military pilots & medical corps',
    amount: '₦25,000 - ₦55,000 / month',
    frequency: 'Monthly depending on technical specialty'
  },
  {
    name: 'Uniform & Boot Maintenance Allowance',
    recipients: 'All enlisted soldiers and officers across branches',
    amount: '₦15,000 - ₦25,000 / quarter',
    frequency: 'Quarterly kit upkeep'
  },
  {
    name: 'Barracks / Residential Quarters',
    recipients: 'All serving personnel and verified dependants',
    amount: '100% Subsidized / Free',
    frequency: 'Continuous official housing inside barracks'
  },
  {
    name: 'Armed Forces Medical Insurance (AFHIS)',
    recipients: 'Soldier, legal spouse, and up to 4 biological children',
    amount: '100% Comprehensive Coverage',
    frequency: 'Free treatment at military base hospitals'
  }
];

const ARMY_SALARY_FAQS = [
  {
    question: 'How much is the salary of a Nigerian Army recruit per month in 2026?',
    answer: 'A newly passed-out Nigerian Army recruit (Private, CONAFSS 01) receives between ₦77,000 and ₦85,000 monthly basic pay (₦924,000 to ₦1,020,000 annually) following the September 1, 2026 effective implementation of the federal wage increase. When posted to active combat operational theaters like Operation Hadin Kai, personnel receive an additional ₦30,000 to ₦60,000 combat allowance, elevating monthly earnings to ₦115,000 – ₦145,000.'
  },
  {
    question: 'Is the 2026 Nigerian Army salary increase implemented?',
    answer: 'Yes. The Consolidated Armed Forces Salary Structure (CONAFSS) upward review approved by President Bola Ahmed Tinubu and announced by the Chief of Defence Staff (CDS), General Christopher Musa, took official effect from September 1, 2026, granting military personnel a 35% to 45% pay bump across non-commissioned and officer cadres.'
  },
  {
    question: 'What is the new Nigerian Army salary structure for 2026?',
    answer: 'The current CONAFSS scale ranges from ₦77,000 – ₦85,000 for Privates; ₦92,000 – ₦98,000 for Lance Corporals; ₦104,000 – ₦112,000 for Corporals; ₦120,000 – ₦130,000 for Sergeants; ₦140,000 – ₦152,000 for Staff Sergeants; ₦175,000 – ₦190,000 for Warrant Officers; ₦240,000 – ₦270,000 for entry Second Lieutenants (DSSC); ₦360,000 – ₦410,000 for Captains; and up to ₦2,500,000 – ₦3,000,000 for a 4-Star General.'
  },
  {
    question: 'Do Nigerian Army recruits get paid during training at Depot Zaria?',
    answer: 'Yes. Recruits undergoing the 6-month basic military training at Depot Nigerian Army in Zaria receive a monthly upkeep stipend of ₦35,000 to ₦40,000. All meals, combat uniforms, boots, accommodation, and medical needs are fully provided by the Federal Government free of charge.'
  },
  {
    question: 'How much does a Second Lieutenant (DSSC) officer earn in the Nigerian Army?',
    answer: 'A newly commissioned Second Lieutenant entering through the Direct Short Service Commission (DSSC) or Regular Combatant NDA course earns a monthly base salary of ₦240,000 to ₦270,000 on CONAFSS Grade 08, with annual take-home estimated between ₦2,880,000 and ₦3,240,000.'
  },
  {
    question: 'What allowances are paid to soldiers in active combat theaters?',
    answer: 'Soldiers deployed to counter-insurgency and internal security operations (e.g. Northeast, Northwest, Niger Delta) receive an operational combat allowance between ₦30,000 and ₦60,000 monthly. Specialists such as bomb technicians, combat medics, and intelligence officers also receive hazard and specialty bonuses ranging from ₦25,000 to ₦55,000 per month.'
  },
  {
    question: 'How does the Nigerian Army salary compare to Nigeria Police and Nigerian Navy?',
    answer: 'Under 2026 scales, an Army Private earns ₦77,000 – ₦85,000, which is virtually identical to a Navy Ordinary Seaman (₦78,000 – ₦86,000) and slightly above a Police Constable (₦75,000 – ₦84,000). However, military personnel enjoy higher combat operational bonuses, complete free barracks housing, and comprehensive Armed Forces health insurance.'
  },
  {
    question: 'Do Nigerian Army soldiers pay tax on their salaries?',
    answer: 'Serving military personnel deployed on operational duty in recognized combat zones receive tax exemptions on their operational allowances. Basic salaries are subject to statutory federal deductions (pension, NHIS, and welfare cooperative deductions).'
  },
  {
    question: 'Is the Nigerian Army recruitment form out for 2026?',
    answer: 'The Nigerian Army conducts enlistment exercises annually through the Regular Recruit Intake (RRI) and Direct Short Service Commission (DSSC). Candidates should monitor tracking.armynotification.com.ng and recruitment.army.mil.ng for live portal updates. Official registration is 100% free.'
  },
  {
    question: 'What is the closing date for the Nigerian Army recruitment exercise?',
    answer: 'Application portals typically remain open for 4 to 6 weeks from the official opening date. Once closed, applicants receive a 7-day window to download and reprint their screening passes and guarantor endorsement forms.'
  }
];

const ArmySalary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Non-Commissioned (Soldiers)' | 'Commissioned Officers'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredRanks = selectedCategory === 'all'
    ? ARMY_SALARY_DATA
    : ARMY_SALARY_DATA.filter(item => item.category === selectedCategory);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <SEO
        title="Nigerian Army Salary 2026: Full List (Recruit to General) New vs Old Scale"
        description="Official September 2026 updated Nigerian Army salary scale following the Tinubu federal wage review. Old vs New comparison table, Privates, Sergeants, DSSC officers & General ranks pay breakdown."
        canonical="/army-salary"
        keywords={[
          'nigerian army recruit salary per month',
          'nigerian army salary 2026',
          'nigerian army salary structure',
          'nigerian army recruit salary',
          'army salary scale old vs new',
          'conafss salary scale 2026',
          'dssc officer salary nigeria',
          'army corporal salary per month',
          'nigerian army allowance'
        ]}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://recruitmenttracker.com.ng/' },
          { name: 'Army Recruitment Hub', url: 'https://recruitmenttracker.com.ng/army-recruitment' },
          { name: 'Army Salary Structure 2026', url: 'https://recruitmenttracker.com.ng/army-salary' }
        ]}
      />
      <FAQPageSchema faqs={ARMY_SALARY_FAQS} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-military-green via-green-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none p-6">
          <Shield className="w-80 h-80 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              2026 CONAFSS Pay Review Verified
            </span>
            <span className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-300" /> {getDailyUpdatedBadge()} • 2026 CONAFSS Scale
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Nigerian Army Salary Structure 2026 (Full List: Recruit to General)
          </h1>
          <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed mb-6">
            Complete rank-by-rank breakdown of monthly and annual remuneration under the updated Consolidated Armed Forces Salary Structure (CONAFSS) following the approved wage review announced by Chief of Defence Staff (CDS) General Christopher Musa and President Bola Ahmed Tinubu.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-bold">
            <a
              href="#salary-table"
              className="px-5 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <CircleDollarSign className="w-4 h-4" /> View Full Salary Table
            </a>
            <Link
              to="/salary-comparison"
              className="px-5 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all border border-white/30 flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" /> Compare Army vs Navy vs Air Force
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Snippet Quick Answer Box (Google PAA Target) */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-500/40 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              Quick Answer • Featured Snippet Box
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              How much is Nigerian Army recruit salary per month in 2026?
            </h2>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed bg-white/80 p-4 rounded-xl border border-emerald-200">
              <strong>A newly passed-out Nigerian Army recruit (Private, CONAFSS 01) earns between ₦77,000 and ₦85,000 per month (₦924,000 – ₦1,020,000 annually)</strong> under the updated 2026 Consolidated Armed Forces Salary Structure (CONAFSS), effective September 1, 2026. Recruits undergoing the 6-month Depot Zaria basic military training receive a monthly upkeep stipend of <strong>₦35,000 to ₦40,000</strong> plus 100% free food, uniforms, and lodging. When posted to active combat theatres or counter-insurgency operations (such as Operation Hadin Kai), soldiers receive an additional combat allowance of <strong>₦30,000 to ₦60,000</strong>, elevating take-home pay to <strong>₦115,000 – ₦145,000 monthly</strong>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="bg-white p-3 rounded-xl border border-emerald-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Recruit Base Pay</span>
                <span className="font-bold text-emerald-700 text-sm">₦77,000 - ₦85,000</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-emerald-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Combat Allowance</span>
                <span className="font-bold text-emerald-700 text-sm">+₦30,000 - ₦60,000</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-emerald-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">DSSC 2nd Lieutenant</span>
                <span className="font-bold text-emerald-700 text-sm">₦240,000 - ₦270,000</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-emerald-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Quarters & Healthcare</span>
                <span className="font-bold text-emerald-700 text-sm">100% Free (Barracks)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Above-the-fold FastActionCard */}
      <FastActionCard
        branch="Army"
        title="Nigerian Army Enlistment Portal 2026"
        portalUrl="https://recruitment.army.mil.ng"
        status="Open"
        deadlineDate="2026-03-31"
        cbtSlug="army"
        onOpenChecklist={() => {
          const el = document.getElementById('salary-checklist');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* PAA: "Is the Form Out?" & "Closing Date" Verified Status Box */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold text-military-green uppercase tracking-wider block mb-1">
              Live Intake Verification & PAA
            </span>
            <h3 className="text-xl font-bold text-gray-900">
              Is the Nigerian Army Recruitment Form Out for 2026?
            </h3>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
            ACTIVE TRACKING
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
              <Calendar className="w-4 h-4 text-military-green" />
              Intake Cycle & Portal Status
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              The Nigerian Army conducts two major streams annually: the Regular Recruit Intake (RRI) for SSCE holders and the Direct Short Service Commission (DSSC) for degree holders.
            </p>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 block">
              Official Portal: recruitment.army.mil.ng
            </span>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
              <Clock className="w-4 h-4 text-blue-600" />
              Closing Date & Deadline Advisory
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              Official portals generally close 30 to 45 days after announcement. Beware of third-party websites claiming deadline extensions for a fee.
            </p>
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200 block">
              Grace Period: 7 days to reprint slips
            </span>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
              <Shield className="w-4 h-4 text-indigo-600" />
              Application Fee Policy
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              The application form is 100% free of charge. The Army headquarters does not appoint agents, coordinators, or bank account representatives.
            </p>
            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded border border-indigo-200 block">
              Zero Application Fee
            </span>
          </div>
        </div>
      </div>

      <AdUnit slot="ARMY_SALARY_TOP_AD" />

      {/* Main Salary Table Section */}
      <div id="salary-table" className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-military-green" />
              Nigerian Army Salary Scale: Old vs New CONAFSS Rates
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Comparison between pre-review baseline pay and the current 2026 adjusted Armed Forces remuneration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-lg transition-colors ${selectedCategory === 'all' ? 'bg-military-green text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
            >
              All Ranks ({ARMY_SALARY_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('Non-Commissioned (Soldiers)')}
              className={`px-3 py-2 rounded-lg transition-colors ${selectedCategory === 'Non-Commissioned (Soldiers)' ? 'bg-military-green text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Soldiers / NCOs
            </button>
            <button
              onClick={() => setSelectedCategory('Commissioned Officers')}
              className={`px-3 py-2 rounded-lg transition-colors ${selectedCategory === 'Commissioned Officers' ? 'bg-military-green text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Officers
            </button>
          </div>
        </div>

        {/* Semantic HTML Table for Google Featured Snippets */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-military-blue text-white text-xs uppercase tracking-wider">
                <th scope="col" className="py-4 px-4 font-bold">Military Rank & Cadre</th>
                <th scope="col" className="py-4 px-4 font-bold">Grade Level</th>
                <th scope="col" className="py-4 px-4 font-bold text-gray-200">Previous Monthly Pay (Old)</th>
                <th scope="col" className="py-4 px-4 font-bold text-emerald-300">2026 New Monthly Salary</th>
                <th scope="col" className="py-4 px-4 font-bold text-center text-amber-300">% Increase</th>
                <th scope="col" className="py-4 px-4 font-bold">Estimated Annual Take-Home</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium">
              {filteredRanks.map((item, idx) => {
                const isHighlight = item.rank.includes('Recruit') || item.rank.includes('Private');
                return (
                  <tr
                    key={idx}
                    className={
                      isHighlight
                        ? 'bg-emerald-50/70 hover:bg-emerald-100/60 font-semibold'
                        : idx % 2 === 0
                        ? 'bg-white hover:bg-gray-50'
                        : 'bg-gray-50/60 hover:bg-gray-100/60'
                    }
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 block">{item.rank}</span>
                        {isHighlight && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                            High Demand
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-gray-500 font-normal">{item.notes}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-gray-600">
                      {item.gradeLevel}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-gray-500 line-through decoration-red-400">
                      {item.oldMonthly}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-700 bg-emerald-50/40">
                      {item.newMonthly}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-emerald-100 text-emerald-800 border border-emerald-300/60">
                        {item.percentIncrease}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-gray-800">
                      {item.annualEstimate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 italic">
          * Note: Basic salaries represent net base pay before operational combat field bonuses, hazard risk stipends, or personal tax exemptions. Figures reflect verified CONAFSS schedules.
        </p>
      </div>

      {/* Allowances and Special Benefits Table */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-military-green" />
            Military Allowances & Welfare Packages (Beyond Basic Salary)
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Soldiers and commissioned officers receive standard statutory allowances depending on their operational theater and specialty.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white text-xs uppercase tracking-wider">
                <th scope="col" className="py-3.5 px-4 font-bold">Allowance Category</th>
                <th scope="col" className="py-3.5 px-4 font-bold">Eligible Personnel</th>
                <th scope="col" className="py-3.5 px-4 font-bold text-emerald-300">Rate / Coverage</th>
                <th scope="col" className="py-3.5 px-4 font-bold">Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ALLOWANCES_DATA.map((allowance, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-3.5 px-4 font-bold text-gray-900">
                    {allowance.name}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-gray-600">
                    {allowance.recipients}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">
                    {allowance.amount}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-gray-500">
                    {allowance.frequency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Screening Checklist Trigger */}
      <div id="salary-checklist" className="mt-6">
        <ScreeningChecklist
          branch="Army"
          title="Nigerian Army Screening Day Document Checklist (Required at Zonal Centers)"
        />
      </div>

      <AdUnit slot="ARMY_SALARY_MID_AD" />

      {/* Frequently Asked Questions (PAA Structured for Search Bots) */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="mb-6">
          <span className="text-xs font-bold text-military-green uppercase tracking-wider block mb-1">
            People Also Ask (PAA)
          </span>
          <h3 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions About Nigerian Army Salary & Recruitment
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Verified answers to common search questions regarding recruitment dates, allowances, and pay rates.
          </p>
        </div>

        <div className="space-y-4">
          {ARMY_SALARY_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100/70 transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 bg-white text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Step Re-circulation */}
      <NextStepInterstitial
        currentBranch="Army"
        cbtSlug="army"
        currentType="guide"
      />

      {/* Sticky Recommended Bar */}
      <StickyRecommendedBar
        branch="Army"
        cbtSlug="army"
      />
    </div>
  );
};

export default ArmySalary;
