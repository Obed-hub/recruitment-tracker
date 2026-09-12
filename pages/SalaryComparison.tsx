import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Scale, ArrowRight, BookOpen, Award, CheckCircle,
  HelpCircle, CircleDollarSign, TrendingUp, Info, ChevronDown, ChevronUp,
  FileText, ExternalLink, Calendar, Clock, Anchor, Plane, Users
} from 'lucide-react';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import FastActionCard from '../components/FastActionCard';
import NextStepInterstitial from '../components/NextStepInterstitial';
import StickyRecommendedBar from '../components/StickyRecommendedBar';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface TriServiceComparisonRow {
  rankLevel: string;
  armyRank: string;
  navyRank: string;
  airForceRank: string;
  cadre: string;
  monthlyRange: string;
  specialAllowances: string;
}

const TRI_SERVICE_DATA: TriServiceComparisonRow[] = [
  {
    rankLevel: 'Entry Trainee',
    armyRank: 'Recruit (Depot Zaria)',
    navyRank: 'Trainee (NNBTS Onne)',
    airForceRank: 'Recruit (BTC Kaduna)',
    cadre: 'Basic Training',
    monthlyRange: '₦35,000 - ₦40,000',
    specialAllowances: 'Free feeding, kitting, barracks accommodation & medicals during 6 months basic training.'
  },
  {
    rankLevel: 'Junior Enlisted (Grade 1)',
    armyRank: 'Private',
    navyRank: 'Ordinary Seaman',
    airForceRank: 'Aircraftman / Aircraftwoman',
    cadre: 'Non-Commissioned (Enlisted)',
    monthlyRange: '₦77,000 - ₦86,000',
    specialAllowances: 'Army: Combat duty allowance (₦30k-₦60k). Navy: Sea duty allowance (₦25k-₦50k). NAF: Flight line allowance (₦20k-₦45k).'
  },
  {
    rankLevel: 'Junior Enlisted (Grade 2)',
    armyRank: 'Lance Corporal',
    navyRank: 'Able Seaman',
    airForceRank: 'Leading Aircraftman',
    cadre: 'Non-Commissioned (Enlisted)',
    monthlyRange: '₦92,000 - ₦100,000',
    specialAllowances: 'Uniform kit allowance, subsidized ration pack, free barracks housing.'
  },
  {
    rankLevel: 'Section Commander',
    armyRank: 'Corporal',
    navyRank: 'Leading Seaman',
    airForceRank: 'Corporal',
    cadre: 'Non-Commissioned (Enlisted)',
    monthlyRange: '₦104,000 - ₦115,000',
    specialAllowances: 'Junior supervisory responsibility allowance, duty post hazard stipend.'
  },
  {
    rankLevel: 'Senior NCO (Platoon)',
    armyRank: 'Sergeant',
    navyRank: 'Petty Officer',
    airForceRank: 'Sergeant',
    cadre: 'Senior Non-Commissioned',
    monthlyRange: '₦120,000 - ₦135,000',
    specialAllowances: 'Senior leadership allowance, quarterly uniform maintenance bonus.'
  },
  {
    rankLevel: 'Senior NCO (Company)',
    armyRank: 'Staff Sergeant',
    navyRank: 'Chief Petty Officer',
    airForceRank: 'Flight Sergeant',
    cadre: 'Senior Non-Commissioned',
    monthlyRange: '₦140,000 - ₦158,000',
    specialAllowances: 'Senior technical rating allowance, command supervisory stipend.'
  },
  {
    rankLevel: 'Warrant Rank',
    armyRank: 'Warrant Officer (WO II)',
    navyRank: 'Warrant Officer (WO)',
    airForceRank: 'Warrant Officer (WO)',
    cadre: 'Warrant Officers',
    monthlyRange: '₦175,000 - ₦195,000',
    specialAllowances: 'Regimental duties allowance, domestic quarters allocation.'
  },
  {
    rankLevel: 'Master Warrant Rank',
    armyRank: 'Master Warrant Officer (WO I)',
    navyRank: 'Master Warrant Officer (MWO)',
    airForceRank: 'Master Warrant Officer (MWO)',
    cadre: 'Warrant Officers',
    monthlyRange: '₦210,000 - ₦235,000',
    specialAllowances: 'RSM command advisory allowance, official transport privilege.'
  },
  {
    rankLevel: 'Commissioned Entry (Graduates)',
    armyRank: 'Second Lieutenant (DSSC/NDA)',
    navyRank: 'Sub-Lieutenant (DSSC/NDA)',
    airForceRank: 'Pilot Officer (DSSC/NDA)',
    cadre: 'Commissioned Officers',
    monthlyRange: '₦240,000 - ₦275,000',
    specialAllowances: 'Officers mess allowance, field command stipend, hazard & specialist allowance.'
  },
  {
    rankLevel: 'Junior Officer',
    armyRank: 'Lieutenant',
    navyRank: 'Sub-Lieutenant (Promoted)',
    airForceRank: 'Flying Officer',
    cadre: 'Commissioned Officers',
    monthlyRange: '₦290,000 - ₦330,000',
    specialAllowances: 'Platoon / flight / naval watchkeeping executive command allowance.'
  },
  {
    rankLevel: 'Mid-Level Officer',
    armyRank: 'Captain',
    navyRank: 'Lieutenant (NN)',
    airForceRank: 'Flight Lieutenant',
    cadre: 'Commissioned Officers',
    monthlyRange: '₦360,000 - ₦420,000',
    specialAllowances: 'Company / naval vessel department head command allowance.'
  },
  {
    rankLevel: 'Field Officer',
    armyRank: 'Major',
    navyRank: 'Lieutenant Commander',
    airForceRank: 'Squadron Leader',
    cadre: 'Commissioned Officers',
    monthlyRange: '₦450,000 - ₦530,000',
    specialAllowances: 'Battalion 2IC / flight squadron commander executive stipend.'
  },
  {
    rankLevel: 'Senior Field Officer',
    armyRank: 'Lieutenant Colonel',
    navyRank: 'Commander',
    airForceRank: 'Wing Commander',
    cadre: 'Commissioned Officers',
    monthlyRange: '₦580,000 - ₦670,000',
    specialAllowances: 'Commanding Officer (CO) of warship / combat battalion / air wing.'
  },
  {
    rankLevel: 'Staff Colonel',
    armyRank: 'Colonel',
    navyRank: 'Captain (NN)',
    airForceRank: 'Group Captain',
    cadre: 'Commissioned Officers',
    monthlyRange: '₦750,000 - ₦880,000',
    specialAllowances: 'Brigade chief of staff / naval base commander executive package.'
  },
  {
    rankLevel: 'One-Star General',
    armyRank: 'Brigadier General',
    navyRank: 'Commodore',
    airForceRank: 'Air Commodore',
    cadre: 'General Officers',
    monthlyRange: '₦1,100,000 - ₦1,350,000',
    specialAllowances: 'Flag officer brigade command package, security detail, staff cars.'
  },
  {
    rankLevel: 'Two-Star General',
    armyRank: 'Major General',
    navyRank: 'Rear Admiral',
    airForceRank: 'Air Vice Marshal',
    cadre: 'General Officers',
    monthlyRange: '₦1,600,000 - ₦1,950,000',
    specialAllowances: 'General Officer Commanding (GOC) / Naval Command Flag Officer package.'
  }
];

interface MilitaryVsParamilitaryRow {
  sector: string;
  agency: string;
  salaryScale: string;
  recruitStartingPay: string;
  graduateEntryPay: string;
  riskProfile: string;
  officialPortal: string;
}

const MILITARY_VS_PARAMILITARY_DATA: MilitaryVsParamilitaryRow[] = [
  {
    sector: 'Armed Forces (Land)',
    agency: 'Nigerian Army',
    salaryScale: 'CONAFSS',
    recruitStartingPay: '₦77,000 - ₦85,000',
    graduateEntryPay: '₦240,000 - ₦270,000 (2nd Lt)',
    riskProfile: 'High (Ground combat, territorial defence, counter-terrorism)',
    officialPortal: 'recruitment.army.mil.ng'
  },
  {
    sector: 'Armed Forces (Sea)',
    agency: 'Nigerian Navy',
    salaryScale: 'CONAFSS',
    recruitStartingPay: '₦78,000 - ₦86,000',
    graduateEntryPay: '₦245,000 - ₦275,000 (Sub-Lt)',
    riskProfile: 'High (Maritime security, anti-piracy, oil platform defence)',
    officialPortal: 'joinnigeriannavy.com'
  },
  {
    sector: 'Armed Forces (Air)',
    agency: 'Nigerian Air Force',
    salaryScale: 'CONAFSS',
    recruitStartingPay: '₦77,000 - ₦85,000',
    graduateEntryPay: '₦245,000 - ₦275,000 (Pilot Off.)',
    riskProfile: 'High (Aerial surveillance, close air support, flight missions)',
    officialPortal: 'nafrecruitment.airforce.mil.ng'
  },
  {
    sector: 'Law Enforcement',
    agency: 'Nigeria Police Force (NPF)',
    salaryScale: 'CONPOSS',
    recruitStartingPay: '₦65,000 - ₦75,000 (Constable)',
    graduateEntryPay: '₦150,000 - ₦185,000 (Cadet ASP)',
    riskProfile: 'Medium-High (Internal policing, criminal investigation, public order)',
    officialPortal: 'policerecruitment.gov.ng'
  },
  {
    sector: 'Border & Revenue Security',
    agency: 'Nigeria Customs Service (NCS)',
    salaryScale: 'CONPASS / Special',
    recruitStartingPay: '₦75,000 - ₦88,000 (Customs Assistant)',
    graduateEntryPay: '₦160,000 - ₦200,000 (ASC II)',
    riskProfile: 'Medium (Border patrol, anti-smuggling, port duty)',
    officialPortal: 'customs.gov.ng'
  },
  {
    sector: 'Border & Migration',
    agency: 'Nigeria Immigration Service (NIS)',
    salaryScale: 'CONPASS',
    recruitStartingPay: '₦70,000 - ₦82,000 (Immigration Asst.)',
    graduateEntryPay: '₦155,000 - ₦190,000 (ASI II)',
    riskProfile: 'Medium (Border control, visa processing, passport surveillance)',
    officialPortal: 'cdcfib.gov.ng'
  },
  {
    sector: 'Civil Infrastructure & Protection',
    agency: 'Civil Defence (NSCDC)',
    salaryScale: 'CONPASS',
    recruitStartingPay: '₦65,000 - ₦75,000 (Assistant Cadre)',
    graduateEntryPay: '₦150,000 - ₦185,000 (ASCII)',
    riskProfile: 'Medium (Pipeline security, school protection, disaster management)',
    officialPortal: 'cdcfib.gov.ng'
  },
  {
    sector: 'Road Safety & Traffic',
    agency: 'Federal Road Safety Corps (FRSC)',
    salaryScale: 'CONPASS',
    recruitStartingPay: '₦60,000 - ₦70,000 (Road Marshal)',
    graduateEntryPay: '₦145,000 - ₦175,000 (ARC)',
    riskProfile: 'Low-Medium (Highway patrol, traffic enforcement, crash rescue)',
    officialPortal: 'frsc.gov.ng'
  },
  {
    sector: 'Anti-Narcotics',
    agency: 'NDLEA',
    salaryScale: 'Special Security Scale',
    recruitStartingPay: '₦72,000 - ₦85,000 (Narcotic Assistant)',
    graduateEntryPay: '₦155,000 - ₦195,000 (Narcotic Officer)',
    riskProfile: 'High (Drug raids, border interdiction, syndicate prosecution)',
    officialPortal: 'ndlea.gov.ng'
  }
];

const COMPARISON_FAQS = [
  {
    question: 'Which pays higher between the Nigerian Army, Navy, and Air Force?',
    answer: 'Basic salaries across the Nigerian Army, Navy, and Air Force are identical because all three service branches are paid under the Consolidated Armed Forces Salary Structure (CONAFSS). However, overall take-home pay differs depending on specialized operational allowances: Nigerian Navy personnel on sea missions receive sea duty allowances (₦25,000 - ₦50,000/mo), Air Force flight crews earn aviation risk allowances, and Army soldiers in combat zones receive ground combat duty allowances (₦30,000 - ₦60,000/mo).'
  },
  {
    question: 'Does the Nigeria Police earn more than the Nigerian Army in 2026?',
    answer: 'No. The Nigerian Armed Forces (Army, Navy, Air Force) earn higher base pay under CONAFSS than the Nigeria Police Force under CONPOSS. An entry-level Army recruit (Private) earns ₦77,000 - ₦85,000 plus combat allowances, whereas a Police Constable earns approximately ₦65,000 - ₦75,000. At officer level, a Second Lieutenant in the Army earns ₦240,000 - ₦270,000, while a Cadet Assistant Superintendent of Police (ASP) earns ₦150,000 - ₦185,000.'
  },
  {
    question: 'Which paramilitary agency pays the highest salary in Nigeria?',
    answer: 'The Nigeria Customs Service (NCS) and the National Drug Law Enforcement Agency (NDLEA) offer the highest overall remuneration packages among paramilitary bodies. Customs personnel benefit from revenue collection incentives and anti-smuggling allowances, bringing a new graduate officer (ASC II) starting pay to ₦160,000 - ₦200,000 monthly.'
  },
  {
    question: 'What is the difference between CONAFSS and CONPASS salary scales?',
    answer: 'CONAFSS (Consolidated Armed Forces Salary Structure) applies exclusively to the Nigerian military (Army, Navy, Air Force) and includes higher base allowances reflecting national defense combat liabilities. CONPASS (Consolidated Paramilitary Salary Structure) governs paramilitary agencies under the Ministry of Interior, including Immigration (NIS), Civil Defence (NSCDC), Correctional Service (NCoS), and Fire Service (FFS).'
  },
  {
    question: 'Are military and paramilitary recruitment forms free in 2026?',
    answer: 'Yes. All federal military and paramilitary application forms are 100% free. The Nigerian Army (recruitment.army.mil.ng), Navy (joinnigeriannavy.com), Air Force (airforce.mil.ng), and CDCFIB agencies (cdcfib.gov.ng) do not charge application fees. Never pay anyone promising recruitment slots.'
  },
  {
    question: 'What is the official closing date for military recruitment exercises?',
    answer: 'Most military recruitment portals remain open for 4 to 6 weeks. Following portal closure, shortlisted applicants are given 7 to 14 days to download their screening slips, examination passes, and local government parent consent forms before physical screening exercises begin.'
  }
];

const SalaryComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tri-service' | 'military-vs-paramilitary'>('tri-service');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <SEO
        title="Military vs Paramilitary Salary in Nigeria 2026 [Army vs Navy vs Police Scale]"
        description="Side-by-side salary comparison: Nigerian Army vs Navy vs Air Force and Military vs Paramilitary (Police, Customs, NSCDC, NIS). 2026 updated CONAFSS vs CONPASS pay scales."
        canonical="/salary-comparison"
        keywords={[
          'military vs paramilitary salary',
          'army vs navy salary nigeria',
          'nigeria police vs army salary',
          'highest paying paramilitary in nigeria',
          'conafss vs conpass',
          'nigerian navy salary 2026',
          'air force salary structure 2026'
        ]}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://recruitmenttracker.com.ng/' },
          { name: 'Salary Hub', url: 'https://recruitmenttracker.com.ng/army-salary' },
          { name: 'Military vs Paramilitary Comparison', url: 'https://recruitmenttracker.com.ng/salary-comparison' }
        ]}
      />
      <FAQPageSchema faqs={COMPARISON_FAQS} />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-military-blue to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none p-6">
          <Scale className="w-80 h-80 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-indigo-500/20 border border-indigo-400/50 text-indigo-200 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              2026 Comprehensive Comparison
            </span>
            <span className="bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-emerald-300" /> {getDailyUpdatedBadge()}
            </span>
            <span className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
              CONAFSS vs CONPASS Verified
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Military vs Paramilitary Salary in Nigeria (2026)
          </h1>
          <p className="text-base md:text-lg text-indigo-100/90 leading-relaxed mb-6">
            Compare monthly base earnings, rank structures, special branch allowances, and career welfare across the Nigerian Army, Navy, Air Force, Police, Customs, Civil Defence, and Immigration.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-bold">
            <button
              onClick={() => setActiveTab('tri-service')}
              className={`px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 ${
                activeTab === 'tri-service'
                  ? 'bg-yellow-500 text-slate-950 hover:bg-yellow-400'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
              }`}
            >
              <Shield className="w-4 h-4" /> Army vs Navy vs Air Force (Tri-Service)
            </button>
            <button
              onClick={() => setActiveTab('military-vs-paramilitary')}
              className={`px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 ${
                activeTab === 'military-vs-paramilitary'
                  ? 'bg-yellow-500 text-slate-950 hover:bg-yellow-400'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
              }`}
            >
              <Users className="w-4 h-4" /> Military vs Paramilitary (All Agencies)
            </button>
          </div>
        </div>
      </div>

      {/* Featured Snippet Direct Answer Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500/40 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block">
              Featured Snippet • Comparison Breakdown
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              Which pays higher between Nigerian Military and Paramilitary forces?
            </h2>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed bg-white/80 p-4 rounded-xl border border-blue-200">
              <strong>The Nigerian Military (Army, Navy, Air Force) pays higher basic salaries than paramilitary forces.</strong> Military personnel are remunerated under the Consolidated Armed Forces Salary Structure (CONAFSS), where a recruit starts at ₦77,000 - ₦85,000/month and a graduate Second Lieutenant starts at ₦240,000 - ₦270,000/month. By comparison, paramilitary agencies under CONPASS start recruits at ₦65,000 - ₦75,000/month and graduate officers at ₦150,000 - ₦185,000/month.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="bg-white p-3 rounded-xl border border-blue-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Military Recruit (CONAFSS)</span>
                <span className="font-bold text-blue-700 text-sm">₦77,000 - ₦86,000</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-blue-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Paramilitary Recruit (CONPASS)</span>
                <span className="font-bold text-blue-700 text-sm">₦65,000 - ₦75,000</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-blue-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Military Officer (2nd Lt)</span>
                <span className="font-bold text-blue-700 text-sm">₦240,000 - ₦270,000</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-blue-100">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Paramilitary Officer (ASP / ASC)</span>
                <span className="font-bold text-blue-700 text-sm">₦150,000 - ₦190,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Above-the-fold FastActionCard */}
      <FastActionCard
        branch="Armed Forces"
        title="Armed Forces & Paramilitary Tracking Portal 2026"
        portalUrl="https://recruitmenttracker.com.ng/recruitments"
        status="Open"
        deadlineDate="2026-03-31"
        cbtSlug="army"
        onOpenChecklist={() => {
          window.location.href = '/eligibility';
        }}
      />

      <AdUnit slot="SALARY_COMPARISON_TOP_AD" />

      {/* Tab 1: Tri-Service Comparison (Army vs Navy vs Air Force) */}
      {activeTab === 'tri-service' && (
        <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                <Shield className="w-6 h-6 text-military-green" />
                Nigerian Army vs Navy vs Air Force Salary Scale (2026)
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Direct rank-for-rank remuneration comparison across all three Armed Forces branches under CONAFSS.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 self-start sm:self-auto">
              CONAFSS Schedule Verified
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-military-blue text-white text-xs uppercase tracking-wider">
                  <th scope="col" className="py-4 px-4 font-bold">Cadre & Level</th>
                  <th scope="col" className="py-4 px-4 font-bold text-emerald-300">Army Rank</th>
                  <th scope="col" className="py-4 px-4 font-bold text-cyan-300">Navy Rank</th>
                  <th scope="col" className="py-4 px-4 font-bold text-sky-300">Air Force Rank</th>
                  <th scope="col" className="py-4 px-4 font-bold text-yellow-300">New 2026 Base Pay</th>
                  <th scope="col" className="py-4 px-4 font-bold">Special Branch Allowances</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {TRI_SERVICE_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50/60 hover:bg-gray-100/60'}>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-gray-900 block text-xs">{row.rankLevel}</span>
                      <span className="text-[10px] text-gray-500">{row.cadre}</span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-800">
                      {row.armyRank}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-blue-800">
                      {row.navyRank}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-sky-800">
                      {row.airForceRank}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-700 bg-emerald-50/40">
                      {row.monthlyRange}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-600">
                      {row.specialAllowances}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Military vs Paramilitary Comparison */}
      {activeTab === 'military-vs-paramilitary' && (
        <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                Military vs Paramilitary Starting Salary & Officer Pay (2026)
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Comparative overview of Armed Forces (CONAFSS) vs Police (CONPOSS) vs Paramilitary Agencies (CONPASS).
              </p>
            </div>
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-200 self-start sm:self-auto">
              9 Agencies Compared
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th scope="col" className="py-4 px-4 font-bold">Agency Name</th>
                  <th scope="col" className="py-4 px-4 font-bold">Sector / Mandate</th>
                  <th scope="col" className="py-4 px-4 font-bold">Salary Scale</th>
                  <th scope="col" className="py-4 px-4 font-bold text-emerald-300">Recruit Starting Pay</th>
                  <th scope="col" className="py-4 px-4 font-bold text-yellow-300">Graduate Officer Pay</th>
                  <th scope="col" className="py-4 px-4 font-bold">Risk & Operational Focus</th>
                  <th scope="col" className="py-4 px-4 font-bold">Official Portal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {MILITARY_VS_PARAMILITARY_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50/60 hover:bg-gray-100/60'}>
                    <td className="py-3.5 px-4 font-bold text-gray-900">
                      {row.agency}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-600">
                      {row.sector}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs font-bold text-indigo-700">
                      {row.salaryScale}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-emerald-700">
                      {row.recruitStartingPay}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-blue-700">
                      {row.graduateEntryPay}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-600">
                      {row.riskProfile}
                    </td>
                    <td className="py-3.5 px-4">
                      <a
                        href={`https://${row.officialPortal}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-mono"
                      >
                        {row.officialPortal} <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* PAA: "Is the Form Out?" & "Closing Date" Quick Tracker */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-6 h-6 text-military-green" />
          <h3 className="text-xl font-bold text-gray-900">
            Current Intake Status & Closing Dates for All 2026 Agencies
          </h3>
        </div>
        <p className="text-xs md:text-sm text-gray-600 mb-6 leading-relaxed">
          Track official application dates, closing deadlines, and shortlist announcements across Nigerian security forces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
            <span className="font-bold text-emerald-900 block mb-1">Nigerian Army 87/88 RRI</span>
            <p className="text-emerald-800 text-[11px] mb-2">Regular Recruit Intake for SSCE holders.</p>
            <span className="inline-block px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
              Status: Active Monitoring
            </span>
          </div>

          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
            <span className="font-bold text-blue-900 block mb-1">Nigerian Navy Batch 38/39</span>
            <p className="text-blue-800 text-[11px] mb-2">Basic Military Training Course at NNBTS Onne.</p>
            <span className="inline-block px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px]">
              Status: Shortlist PDF Out
            </span>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
            <span className="font-bold text-indigo-900 block mb-1">Police Constable 2026</span>
            <p className="text-indigo-800 text-[11px] mb-2">General Duty & Specialist Constables.</p>
            <span className="inline-block px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px]">
              Status: Zonal Screening
            </span>
          </div>
        </div>
      </div>

      <AdUnit slot="SALARY_COMPARISON_MID_AD" />

      {/* PAA Accordion Section */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="mb-6">
          <span className="text-xs font-bold text-military-green uppercase tracking-wider block mb-1">
            People Also Ask (PAA)
          </span>
          <h3 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions: Military & Paramilitary Remuneration
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Answers to common search questions regarding salary differences, hazard pay, and intake deadlines.
          </p>
        </div>

        <div className="space-y-4">
          {COMPARISON_FAQS.map((faq, idx) => {
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

      {/* Next Step Interstitial */}
      <NextStepInterstitial
        currentBranch="Armed Forces"
        cbtSlug="army"
        currentType="guide"
      />

      {/* Sticky Recommended Bar */}
      <StickyRecommendedBar
        branch="Armed Forces"
        cbtSlug="army"
      />
    </div>
  );
};

export default SalaryComparison;
