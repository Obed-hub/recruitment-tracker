import React, { useState } from 'react';
import {
  Shield, CircleDollarSign, TrendingUp, HelpCircle, CheckCircle2,
  ArrowRight, Award, AlertCircle, Search, Anchor, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import ViralCommunityWidget from '../components/ViralCommunityWidget';
import QuickPracticeWidget from '../components/QuickPracticeWidget';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface CustomsRankSalary {
  cadre: 'Support Staff / Junior (CA)' | 'Inspectorate Cadre (IC)' | 'Superintendent Cadre (Commissioned)';
  rank: string;
  gradeLevel: string;
  monthlyOld: string;
  monthlyNew2026: string;
  annualTotal: string;
  qualification: string;
  keyResponsibilities: string;
}

const CUSTOMS_SALARIES: CustomsRankSalary[] = [
  {
    cadre: 'Support Staff / Junior (CA)',
    rank: 'Customs Assistant III (CA III)',
    gradeLevel: 'CONPASS GL 03',
    monthlyOld: '₦38,000 - ₦43,000',
    monthlyNew2026: '₦82,000 - ₦94,000',
    annualTotal: '₦984,000 - ₦1,128,000',
    qualification: 'SSCE / WAEC / NECO (Minimum 4 Credits)',
    keyResponsibilities: 'Border checkpoint surveillance, gate sentry, vehicle inspection assistance.'
  },
  {
    cadre: 'Support Staff / Junior (CA)',
    rank: 'Customs Assistant II (CA II)',
    gradeLevel: 'CONPASS GL 04',
    monthlyOld: '₦46,000 - ₦52,000',
    monthlyNew2026: '₦95,000 - ₦108,000',
    annualTotal: '₦1,140,000 - ₦1,296,000',
    qualification: 'SSCE + Relevant Technical Trade Certificate',
    keyResponsibilities: 'Warehouse inventory tracking, perimeter protection at customs federal operation units.'
  },
  {
    cadre: 'Support Staff / Junior (CA)',
    rank: 'Customs Assistant I (CA I)',
    gradeLevel: 'CONPASS GL 05',
    monthlyOld: '₦55,000 - ₦62,000',
    monthlyNew2026: '₦112,000 - ₦126,000',
    annualTotal: '₦1,344,000 - ₦1,512,000',
    qualification: 'Seniority advancement from CA II / Trade Test',
    keyResponsibilities: 'Team leader for junior border patrol squads, physical search supervision.'
  },
  {
    cadre: 'Inspectorate Cadre (IC)',
    rank: 'Assistant Inspector of Customs (AIC)',
    gradeLevel: 'CONPASS GL 06',
    monthlyOld: '₦68,000 - ₦76,000',
    monthlyNew2026: '₦138,000 - ₦155,000',
    annualTotal: '₦1,656,000 - ₦1,860,000',
    qualification: 'National Diploma (ND) / NCE / Registered Nurse',
    keyResponsibilities: 'Container inspection assistant at sea ports, cargo manifest preliminary check.'
  },
  {
    cadre: 'Inspectorate Cadre (IC)',
    rank: 'Inspector of Customs (IC)',
    gradeLevel: 'CONPASS GL 07',
    monthlyOld: '₦85,000 - ₦98,000',
    monthlyNew2026: '₦175,000 - ₦198,000',
    annualTotal: '₦2,100,000 - ₦2,376,000',
    qualification: 'Higher National Diploma (HND) / Senior ND promotion',
    keyResponsibilities: 'Customs scanning center operator, revenue document assessor at airport terminals.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Assistant Superintendent of Customs II (ASC II)',
    gradeLevel: 'CONPASS GL 08',
    monthlyOld: '₦135,000 - ₦150,000',
    monthlyNew2026: '₦275,000 - ₦315,000',
    annualTotal: '₦3,300,000 - ₦3,780,000',
    qualification: "Bachelor's Degree (BSc/BA) + NYSC Certificate",
    keyResponsibilities: 'Entry rank for university graduates. Assessment officer, cargo release verifier, border patrol commander.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Assistant Superintendent of Customs I (ASC I)',
    gradeLevel: 'CONPASS GL 09',
    monthlyOld: '₦165,000 - ₦185,000',
    monthlyNew2026: '₦330,000 - ₦375,000',
    annualTotal: '₦3,960,000 - ₦4,500,000',
    qualification: 'Promotion / Post-Graduate entry',
    keyResponsibilities: 'Senior valuation officer, fast-track container clearance unit head.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Deputy Superintendent of Customs (DSC)',
    gradeLevel: 'CONPASS GL 10',
    monthlyOld: '₦210,000 - ₦240,000',
    monthlyNew2026: '₦410,000 - ₦465,000',
    annualTotal: '₦4,920,000 - ₦5,580,000',
    qualification: 'Seniority advancement GL 10',
    keyResponsibilities: 'Officer in Charge (O/C) of anti-smuggling surveillance strike force teams.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Superintendent of Customs (SC)',
    gradeLevel: 'CONPASS GL 11',
    monthlyOld: '₦260,000 - ₦300,000',
    monthlyNew2026: '₦495,000 - ₦560,000',
    annualTotal: '₦5,940,000 - ₦6,720,000',
    qualification: 'Seniority advancement GL 11',
    keyResponsibilities: 'Border outpost commander, terminal supervisor at Apapa / Tin Can Island ports.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Chief Superintendent of Customs (CSC)',
    gradeLevel: 'CONPASS GL 12',
    monthlyOld: '₦340,000 - ₦395,000',
    monthlyNew2026: '₦620,000 - ₦710,000',
    annualTotal: '₦7,440,000 - ₦8,520,000',
    qualification: 'Seniority advancement GL 12',
    keyResponsibilities: 'Enforcement and compliance head for major customs area commands.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Assistant Comptroller of Customs (AC)',
    gradeLevel: 'CONPASS GL 13',
    monthlyOld: '₦430,000 - ₦510,000',
    monthlyNew2026: '₦780,000 - ₦890,000',
    annualTotal: '₦9,360,000 - ₦10,680,000',
    qualification: 'Executive selection board',
    keyResponsibilities: 'Deputy Customs Area Controller overseeing revenue generation or anti-smuggling.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Deputy Comptroller of Customs (DC)',
    gradeLevel: 'CONPASS GL 14',
    monthlyOld: '₦570,000 - ₦670,000',
    monthlyNew2026: '₦980,000 - ₦1,150,000',
    annualTotal: '₦11,760,000 - ₦13,800,000',
    qualification: 'Executive cadre advancement',
    keyResponsibilities: 'Second-in-Command of major seaport and international airport customs commands.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Comptroller of Customs (CC)',
    gradeLevel: 'CONPASS GL 15',
    monthlyOld: '₦760,000 - ₦900,000',
    monthlyNew2026: '₦1,350,000 - ₦1,600,000',
    annualTotal: '₦16,200,000 - ₦19,200,000',
    qualification: 'Area Controller Command Appointment',
    keyResponsibilities: 'Customs Area Controller (CAC) responsible for billions in import tariffs and national borders.'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Assistant Comptroller General (ACG)',
    gradeLevel: 'CONPASS GL 16',
    monthlyOld: '₦1,100,000 - ₦1,350,000',
    monthlyNew2026: '₦1,850,000 - ₦2,200,000',
    annualTotal: '₦22,200,000 - ₦26,400,000',
    qualification: 'Zone / Directorate Head Appointment',
    keyResponsibilities: 'Zonal Coordinator managing multiple State Area Commands (Zone A Lagos, Zone B Kaduna, etc.).'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Deputy Comptroller General (DCG)',
    gradeLevel: 'CONPASS GL 17',
    monthlyOld: '₦1,500,000 - ₦1,800,000',
    monthlyNew2026: '₦2,400,000 - ₦2,900,000',
    annualTotal: '₦28,800,000 - ₦34,800,000',
    qualification: 'Customs Management Board Member',
    keyResponsibilities: 'Heads one of the strategic NCS directorates (Tariff & Trade, Enforcement, HRD).'
  },
  {
    cadre: 'Superintendent Cadre (Commissioned)',
    rank: 'Comptroller General of Customs (CGC)',
    gradeLevel: 'Consolidated Executive',
    monthlyOld: '₦2,400,000 - ₦3,000,000',
    monthlyNew2026: '₦3,600,000 - ₦4,500,000',
    annualTotal: '₦43,200,000 - ₦54,000,000',
    qualification: 'Presidential Appointment',
    keyResponsibilities: 'Chief Executive Officer and head of the Nigeria Customs Service nationwide.'
  }
];

const CUSTOMS_FAQS = [
  {
    question: "Why is Nigeria Customs Service (NCS) known as the highest-paying paramilitary agency?",
    answer: "In addition to base pay under the Consolidated Paramilitary Salary Structure (CONPASS), Nigeria Customs personnel benefit from statutory operational incentives, including staff welfare bonuses derived from revenue performance, anti-smuggling hazard allowances, free medical care, and specialized border posting subsidies."
  },
  {
    question: "How much does an Assistant Superintendent of Customs (ASC II) earn in 2026?",
    answer: "A fresh university graduate entering the Nigeria Customs Service as an Assistant Superintendent of Customs II (Grade Level 08) earns between ₦275,000 and ₦315,000 monthly basic pay, with annual total earnings exceeding ₦3.3 million."
  },
  {
    question: "What is the monthly salary of a Customs Assistant (CA III) with SSCE?",
    answer: "A newly recruited Customs Assistant III (Grade Level 03) holding SSCE/WAEC earns approximately ₦82,000 to ₦94,000 per month under the updated 2026 wage scale."
  },
  {
    question: "What qualifications are needed for Inspector of Customs vs Superintendent?",
    answer: "National Diploma (ND) and NCE holders enter at Grade Level 06 (Assistant Inspector of Customs), Higher National Diploma (HND) holders enter at Grade Level 07 (Inspector of Customs), while university Bachelor's degree (BSc/BA) holders enter at Grade Level 08 (Assistant Superintendent of Customs II)."
  },
  {
    question: "Does Nigeria Customs pay anti-smuggling hazard allowance?",
    answer: "Yes, personnel deployed to Federal Operations Units (FOU), border patrol stations, and anti-smuggling strike forces receive designated monthly operational and risk allowances due to the hazardous nature of combating contraband trafficking."
  }
];

const CustomsSalary: React.FC = () => {
  const [filterCadre, setFilterCadre] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSalaries = CUSTOMS_SALARIES.filter(item => {
    const matchesCadre = filterCadre === 'All' || item.cadre === filterCadre;
    const matchesSearch = item.rank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gradeLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCadre && matchesSearch;
  });

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Salaries', item: '/salary-comparison' },
    { name: 'Nigeria Customs Salary Structure', item: '/customs-salary' }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <SEO
        title="Nigeria Customs Salary Structure 2026 (Grade Level 03 to 17 CONPASS Scale)"
        description="Updated 2026 Nigeria Customs Service (NCS) salary breakdown by rank and grade level. Monthly & annual earnings for Customs Assistants, Inspectors, and Superintendents."
        canonical="/customs-salary"
        keywords={[
          'Nigeria customs salary structure 2026',
          'customs assistant salary in nigeria',
          'ASC II salary nigeria customs',
          'customs grade level salary scale',
          'NCS salary after tinubu wage review',
          'customs superintendent monthly earnings'
        ]}
      />

      <BreadcrumbListSchema items={breadcrumbs} />
      <FAQPageSchema faqs={CUSTOMS_FAQS} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-4">
            <CircleDollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>2026 CONPASS Paramilitary Scale</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-3 text-white">
            Nigeria Customs Service Salary Structure 2026
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Comprehensive rank-by-rank monthly and annual remuneration for the Nigeria Customs Service (NCS).
            Examine Grade Levels 03 to 17 across Support Staff, Inspectorate, and Superintendent Cadres.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> GL 03 to CGC Consolidated
            </span>
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-emerald-400" /> {getDailyUpdatedBadge()} • NCS Scale
            </span>
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Award className="w-4 h-4 text-amber-400" /> Highest-Paying Paramilitary Service
            </span>
          </div>
        </div>
      </div>

      {/* Cross-Link Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          to="/police-salary"
          className="p-4 bg-blue-50 hover:bg-blue-100/70 border border-blue-200 rounded-2xl flex items-center justify-between transition-colors group"
        >
          <div>
            <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">Police Counterpart</div>
            <div className="font-bold text-blue-950 text-sm">Nigeria Police 2026 Salary</div>
          </div>
          <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/army-salary"
          className="p-4 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 rounded-2xl flex items-center justify-between transition-colors group"
        >
          <div>
            <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Armed Forces Scale</div>
            <div className="font-bold text-emerald-950 text-sm">Nigerian Army 2026 Salary</div>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/salary-comparison"
          className="p-4 bg-purple-50 hover:bg-purple-100/70 border border-purple-200 rounded-2xl flex items-center justify-between transition-colors group"
        >
          <div>
            <div className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">Comparative Matrix</div>
            <div className="font-bold text-purple-950 text-sm">Army vs Customs vs Police</div>
          </div>
          <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Snapshot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Customs Assistant III (SSCE)</span>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">₦82k – ₦94k</div>
          <p className="text-xs text-gray-500 mt-1">Grade Level 03 monthly basic entry</p>
        </div>
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Inspector of Customs (HND)</span>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">₦175k – ₦198k</div>
          <p className="text-xs text-gray-500 mt-1">Grade Level 07 cargo clearance lead</p>
        </div>
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">ASC II (University BSc)</span>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">₦275k – ₦315k</div>
          <p className="text-xs text-gray-500 mt-1">Grade Level 08 commissioned entry</p>
        </div>
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Comptroller of Customs (CAC)</span>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">₦1.35m – ₦1.60m</div>
          <p className="text-xs text-gray-500 mt-1">Grade Level 15 Area Command Head</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search cadre, rank, or qualification..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {['All', 'Support Staff / Junior (CA)', 'Inspectorate Cadre (IC)', 'Superintendent Cadre (Commissioned)'].map((cadre) => (
            <button
              key={cadre}
              onClick={() => setFilterCadre(cadre)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${filterCadre === cadre
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {cadre === 'All' ? 'All Cadres' : cadre.replace(' (Commissioned)', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Customs Table */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-700" />
              2026 Nigeria Customs CONPASS Scale (GL 03 - GL 17)
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Reflects updated monthly salary, annual total, and minimum entry qualification.
            </p>
          </div>
          <span className="text-xs font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full shrink-0">
            {filteredSalaries.length} Ranks Displayed
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 text-gray-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 sm:px-6 py-3.5">Rank & Cadre</th>
                <th className="px-4 sm:px-6 py-3.5">Grade Level</th>
                <th className="px-4 sm:px-6 py-3.5">Old Monthly Pay</th>
                <th className="px-4 sm:px-6 py-3.5 text-emerald-800 bg-emerald-50/50">2026 Monthly Pay</th>
                <th className="px-4 sm:px-6 py-3.5">Annual Total</th>
                <th className="px-4 sm:px-6 py-3.5">Entry Qualification & Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSalaries.map((item, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                  <td className="px-4 sm:px-6 py-4 font-bold text-gray-900">
                    <div className="text-sm">{item.rank}</div>
                    <span className="text-[10px] font-normal text-gray-400 block sm:hidden mt-0.5">{item.cadre}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-emerald-900 font-mono text-xs font-semibold">
                    {item.gradeLevel}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-400 line-through">
                    {item.monthlyOld}
                  </td>
                  <td className="px-4 sm:px-6 py-4 font-black text-emerald-950 bg-emerald-50/30">
                    {item.monthlyNew2026}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-slate-800 font-semibold">
                    {item.annualTotal}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600 text-xs leading-relaxed max-w-xs">
                    <span className="font-semibold text-gray-900 block">{item.qualification}</span>
                    <span className="text-gray-500 mt-0.5 block">{item.keyResponsibilities}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>* Base salary follows Consolidated Paramilitary Salary Structure (CONPASS). Operational and anti-smuggling allowances apply.</span>
          <Link to="/customs-recruitment" className="text-emerald-700 font-bold hover:underline flex items-center gap-1">
            Check Customs Portal Application Status <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Community Alert Widget */}
      <ViralCommunityWidget agencyName="Nigeria Customs Service (NCS)" variant="card" />

      {/* Mini Interactive Aptitude Test for Customs Aptitude */}
      <QuickPracticeWidget branch="Nigeria Customs Service" quizRoute="/past-questions/customs" />

      {/* FAQ Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          Frequently Asked Questions on Nigeria Customs Remuneration (PAA)
        </h3>
        <div className="space-y-3 pt-2">
          {CUSTOMS_FAQS.map((faq, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200/70">
              <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                <span className="text-emerald-700 font-black">Q:</span>
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 pl-5 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomsSalary;
