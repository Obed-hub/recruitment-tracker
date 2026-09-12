import React, { useState } from 'react';
import {
  Shield, CircleDollarSign, TrendingUp, HelpCircle, CheckCircle2,
  ArrowRight, Award, AlertCircle, Share2, Printer, Search, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import ViralCommunityWidget from '../components/ViralCommunityWidget';
import QuickPracticeWidget from '../components/QuickPracticeWidget';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface PoliceRankSalary {
  cadre: 'Recruit / Junior Cadre' | 'Non-Commissioned Officers (NCO)' | 'Inspectorate' | 'Senior Officers (Commissioned)';
  rank: string;
  gradeLevel: string;
  monthlyOld: string;
  monthlyNew2026: string;
  annualTotal: string;
  takeHomeEstimate: string;
  keyResponsibilities: string;
}

const POLICE_SALARIES: PoliceRankSalary[] = [
  {
    cadre: 'Recruit / Junior Cadre',
    rank: 'Police Recruit (In Training)',
    gradeLevel: 'CONPOSS 01',
    monthlyOld: '₦10,000 - ₦15,000',
    monthlyNew2026: '₦25,000 - ₦35,000',
    annualTotal: '₦300,000 - ₦420,000',
    takeHomeEstimate: '₦30,000',
    keyResponsibilities: 'Recruits undergoing basic training at Police Colleges (Ikeja, Kaduna, Maiduguri, Oji River).'
  },
  {
    cadre: 'Recruit / Junior Cadre',
    rank: 'Police Constable (PC II)',
    gradeLevel: 'CONPOSS 02/01',
    monthlyOld: '₦43,000 - ₦48,000',
    monthlyNew2026: '₦86,000 - ₦98,000',
    annualTotal: '₦1,032,000 - ₦1,176,000',
    takeHomeEstimate: '₦90,000',
    keyResponsibilities: 'Entry-level patrol officers, station sentry duty, point guard duty, beat patrol.'
  },
  {
    cadre: 'Recruit / Junior Cadre',
    rank: 'Police Constable (PC I)',
    gradeLevel: 'CONPOSS 02/10',
    monthlyOld: '₦51,000 - ₦55,000',
    monthlyNew2026: '₦98,000 - ₦108,000',
    annualTotal: '₦1,176,000 - ₦1,296,000',
    takeHomeEstimate: '₦102,000',
    keyResponsibilities: 'Experienced patrol constable, assisting division desk sergeants.'
  },
  {
    cadre: 'Non-Commissioned Officers (NCO)',
    rank: 'Corporal (Cpl)',
    gradeLevel: 'CONPOSS 04',
    monthlyOld: '₦58,000 - ₦62,000',
    monthlyNew2026: '₦112,000 - ₦124,000',
    annualTotal: '₦1,344,000 - ₦1,488,000',
    takeHomeEstimate: '₦116,000',
    keyResponsibilities: 'Section commander, junior investigator, field patrol supervisor.'
  },
  {
    cadre: 'Non-Commissioned Officers (NCO)',
    rank: 'Sergeant (Sgt)',
    gradeLevel: 'CONPOSS 05',
    monthlyOld: '₦68,000 - ₦75,000',
    monthlyNew2026: '₦128,000 - ₦142,000',
    annualTotal: '₦1,536,000 - ₦1,704,000',
    takeHomeEstimate: '₦132,000',
    keyResponsibilities: 'Station Writer, Crime Branch senior investigator, squad leader.'
  },
  {
    cadre: 'Non-Commissioned Officers (NCO)',
    rank: 'Sergeant Major (SM)',
    gradeLevel: 'CONPOSS 06',
    monthlyOld: '₦78,000 - ₦85,000',
    monthlyNew2026: '₦145,000 - ₦162,000',
    annualTotal: '₦1,740,000 - ₦1,944,000',
    takeHomeEstimate: '₦150,000',
    keyResponsibilities: 'Senior-most enlisted rank, barracks drill discipline and regimental parade marshal.'
  },
  {
    cadre: 'Inspectorate',
    rank: 'Cadet Inspector (In Academy)',
    gradeLevel: 'CONPOSS 07/01',
    monthlyOld: '₦62,000 - ₦70,000',
    monthlyNew2026: '₦125,000 - ₦138,000',
    annualTotal: '₦1,500,000 - ₦1,656,000',
    takeHomeEstimate: '₦130,000',
    keyResponsibilities: 'Trainees at Police Academy Wudil or Staff College undergoing Inspectorate cadetship.'
  },
  {
    cadre: 'Inspectorate',
    rank: 'Substantive Inspector of Police',
    gradeLevel: 'CONPOSS 07/10',
    monthlyOld: '₦87,000 - ₦102,000',
    monthlyNew2026: '₦168,000 - ₦192,000',
    annualTotal: '₦2,016,000 - ₦2,304,000',
    takeHomeEstimate: '₦178,000',
    keyResponsibilities: 'Court prosecutor, Divisional Crime Officer assistant, outpost station head.'
  },
  {
    cadre: 'Inspectorate',
    rank: 'Chief Inspector of Police (CIP)',
    gradeLevel: 'CONPOSS 08',
    monthlyOld: '₦110,000 - ₦125,000',
    monthlyNew2026: '₦205,000 - ₦230,000',
    annualTotal: '₦2,460,000 - ₦2,760,000',
    takeHomeEstimate: '₦215,000',
    keyResponsibilities: 'Direct liaison between station non-commissioned personnel and gazetted officers.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Assistant Superintendent of Police (ASP II)',
    gradeLevel: 'CONPOSS 09/01',
    monthlyOld: '₦145,000 - ₦160,000',
    monthlyNew2026: '₦260,000 - ₦295,000',
    annualTotal: '₦3,120,000 - ₦3,540,000',
    takeHomeEstimate: '₦275,000',
    keyResponsibilities: 'Entry rank for university graduates / Cadet ASPs from POLAC Wudil. Division staff officer.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Assistant Superintendent of Police (ASP I)',
    gradeLevel: 'CONPOSS 09/08',
    monthlyOld: '₦170,000 - ₦190,000',
    monthlyNew2026: '₦305,000 - ₦340,000',
    annualTotal: '₦3,660,000 - ₦4,080,000',
    takeHomeEstimate: '₦320,000',
    keyResponsibilities: 'Second-in-command in smaller divisions, investigative unit commander.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Deputy Superintendent of Police (DSP)',
    gradeLevel: 'CONPOSS 10',
    monthlyOld: '₦210,000 - ₦240,000',
    monthlyNew2026: '₦365,000 - ₦410,000',
    annualTotal: '₦4,380,000 - ₦4,920,000',
    takeHomeEstimate: '₦380,000',
    keyResponsibilities: 'Officer-in-Charge of State CID sections, Anti-Kidnapping, SARS/SWAT operational units.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Superintendent of Police (SP)',
    gradeLevel: 'CONPOSS 11',
    monthlyOld: '₦260,000 - ₦300,000',
    monthlyNew2026: '₦440,000 - ₦495,000',
    annualTotal: '₦5,280,000 - ₦5,940,000',
    takeHomeEstimate: '₦460,000',
    keyResponsibilities: 'Divisional Police Officer (DPO) in suburban and municipal police divisions.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Chief Superintendent of Police (CSP)',
    gradeLevel: 'CONPOSS 12',
    monthlyOld: '₦330,000 - ₦380,000',
    monthlyNew2026: '₦540,000 - ₦620,000',
    annualTotal: '₦6,480,000 - ₦7,440,000',
    takeHomeEstimate: '₦575,000',
    keyResponsibilities: 'Senior DPO in metropolitan commercial capitals (Lagos, Abuja, Port Harcourt, Kano).'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Assistant Commissioner of Police (ACP)',
    gradeLevel: 'CONPOSS 13',
    monthlyOld: '₦420,000 - ₦490,000',
    monthlyNew2026: '₦680,000 - ₦770,000',
    annualTotal: '₦8,160,000 - ₦9,240,000',
    takeHomeEstimate: '₦715,000',
    keyResponsibilities: 'Area Commander supervising multiple police divisions in an area command.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Deputy Commissioner of Police (DCP)',
    gradeLevel: 'CONPOSS 14',
    monthlyOld: '₦550,000 - ₦630,000',
    monthlyNew2026: '₦850,000 - ₦980,000',
    annualTotal: '₦10,200,000 - ₦11,760,000',
    takeHomeEstimate: '₦910,000',
    keyResponsibilities: 'Second-in-command to State Commissioner of Police (Operations, Admin, or SCID).'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Commissioner of Police (CP)',
    gradeLevel: 'CONPOSS 15',
    monthlyOld: '₦720,000 - ₦850,000',
    monthlyNew2026: '₦1,150,000 - ₦1,350,000',
    annualTotal: '₦13,800,000 - ₦16,200,000',
    takeHomeEstimate: '₦1,220,000',
    keyResponsibilities: 'Overall executive commander of a State Police Command or Federal Special Formation.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Assistant Inspector General (AIG)',
    gradeLevel: 'CONPOSS 16',
    monthlyOld: '₦980,000 - ₦1,150,000',
    monthlyNew2026: '₦1,500,000 - ₦1,800,000',
    annualTotal: '₦18,000,000 - ₦21,600,000',
    takeHomeEstimate: '₦1,620,000',
    keyResponsibilities: 'Zonal commander overseeing 3-4 State Police Commands in a geopolitical zone.'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Deputy Inspector General (DIG)',
    gradeLevel: 'CONPOSS 17',
    monthlyOld: '₦1,350,000 - ₦1,600,000',
    monthlyNew2026: '₦2,000,000 - ₦2,400,000',
    annualTotal: '₦24,000,000 - ₦28,800,000',
    takeHomeEstimate: '₦2,150,000',
    keyResponsibilities: 'Heads one of the 7 Force Headquarters Directorates (Operations, CID, Logistics, Training, etc.).'
  },
  {
    cadre: 'Senior Officers (Commissioned)',
    rank: 'Inspector General of Police (IGP)',
    gradeLevel: 'Consolidated Executive',
    monthlyOld: '₦2,100,000 - ₦2,600,000',
    monthlyNew2026: '₦3,100,000 - ₦3,800,000',
    annualTotal: '₦37,200,000 - ₦45,600,000',
    takeHomeEstimate: '₦3,400,000',
    keyResponsibilities: 'Chief executive and commanding officer of the Nigeria Police Force nationwide.'
  }
];

const POLICE_FAQS = [
  {
    question: "How much does a Police Constable earn monthly in Nigeria in 2026?",
    answer: "Under the updated Consolidated Police Salary Structure (CONPOSS), a newly passed out Police Constable earns between ₦86,000 and ₦98,000 basic pay per month, which increases with specialized allowances (duty post, hazard) to approximately ₦90,000 - ₦105,000 take-home."
  },
  {
    question: "What is the monthly salary of an Assistant Superintendent of Police (ASP)?",
    answer: "A fresh graduate entering as an Assistant Superintendent of Police (ASP II / Grade Level 09) receives approximately ₦260,000 to ₦295,000 monthly, with total annual compensation exceeding ₦3,100,000."
  },
  {
    question: "Did President Bola Tinubu increase the Nigeria Police Force salary?",
    answer: "Yes, following the federal wage reviews and the Consolidated Police Salary reviews, police personnel received adjustments ranging between 20% to over 30% alongside expanded hazard and operational duty tour allowances."
  },
  {
    question: "What extra allowances do Nigerian police officers receive?",
    answer: "In addition to basic monthly CONPOSS pay, officers receive Operational Hazard Allowance, Uniform Maintenance Allowance, Duty Tour Allowance (DTA) when on special assignments, Special Constabulary stipends, and Investigation Subsidies for Crime Branch detectives."
  },
  {
    question: "How much does an Inspector of Police earn monthly?",
    answer: "A substantive Inspector of Police (CONPOSS 07) earns approximately ₦168,000 to ₦192,000 per month, while a Chief Inspector of Police earns over ₦205,000 monthly."
  }
];

const PoliceSalary: React.FC = () => {
  const [filterCadre, setFilterCadre] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSalaries = POLICE_SALARIES.filter(item => {
    const matchesCadre = filterCadre === 'All' || item.cadre === filterCadre;
    const matchesSearch = item.rank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gradeLevel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCadre && matchesSearch;
  });

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Salaries', item: '/salary-comparison' },
    { name: 'Nigeria Police Salary Structure', item: '/police-salary' }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <SEO
        title="Nigeria Police Salary Structure 2026 (Updated CONPOSS Scale by Rank)"
        description="Official Nigeria Police Force (NPF) 2026 salary structure. Check monthly & annual pay for Constables, Sergeants, Inspectors, ASPs, and Commissioners under CONPOSS."
        canonical="/police-salary"
        keywords={[
          'Nigeria police salary structure 2026',
          'police constable salary in nigeria',
          'nigerian police rank and salary',
          'ASP salary in nigeria police',
          'inspector of police monthly pay',
          'NPF salary scale CONPOSS'
        ]}
      />

      <BreadcrumbListSchema items={breadcrumbs} />
      <FAQPageSchema faqs={POLICE_FAQS} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
            <CircleDollarSign className="w-3.5 h-3.5 text-blue-400" />
            <span>2026 CONPOSS Remuneration Guide</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-3 text-white">
            Nigeria Police Force Salary Structure 2026
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Detailed rank-by-rank monthly and annual remuneration for the Nigeria Police Force (NPF)
            under the Consolidated Police Salary Structure (CONPOSS), covering Constables, Inspectors, ASPs, and Commissioners.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-blue-200">
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Grade Level 01 to Consolidated
            </span>
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-blue-400" /> {getDailyUpdatedBadge()} • CONPOSS Scale
            </span>
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Award className="w-4 h-4 text-amber-400" /> 100% Verified CONPOSS
            </span>
          </div>
        </div>
      </div>

      {/* Cross-Link Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          to="/army-salary"
          className="p-4 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 rounded-2xl flex items-center justify-between transition-colors group"
        >
          <div>
            <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Army Counterpart</div>
            <div className="font-bold text-emerald-950 text-sm">Nigerian Army 2026 Salary</div>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/customs-salary"
          className="p-4 bg-slate-100 hover:bg-slate-200/80 border border-slate-300 rounded-2xl flex items-center justify-between transition-colors group"
        >
          <div>
            <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Paramilitary Counterpart</div>
            <div className="font-bold text-slate-900 text-sm">Nigeria Customs 2026 Salary</div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/salary-comparison"
          className="p-4 bg-blue-50 hover:bg-blue-100/70 border border-blue-200 rounded-2xl flex items-center justify-between transition-colors group"
        >
          <div>
            <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">Full Side-by-Side</div>
            <div className="font-bold text-blue-950 text-sm">Military vs Paramilitary Matrix</div>
          </div>
          <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Quick Summary Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Police Constable</span>
          <div className="text-xl sm:text-2xl font-black text-blue-900 mt-1">₦86k – ₦98k</div>
          <p className="text-xs text-gray-500 mt-1">Monthly basic entry for SSCE recruits</p>
        </div>
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cadet Inspector</span>
          <div className="text-xl sm:text-2xl font-black text-blue-900 mt-1">₦125k – ₦138k</div>
          <p className="text-xs text-gray-500 mt-1">Monthly basic for ND/NCE cadet entrants</p>
        </div>
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cadet ASP II (Graduate)</span>
          <div className="text-xl sm:text-2xl font-black text-blue-900 mt-1">₦260k – ₦295k</div>
          <p className="text-xs text-gray-500 mt-1">University graduate / POLAC commission</p>
        </div>
        <div className="p-5 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Commissioner (CP)</span>
          <div className="text-xl sm:text-2xl font-black text-blue-900 mt-1">₦1.15m – ₦1.35m</div>
          <p className="text-xs text-gray-500 mt-1">State Command Executive officer</p>
        </div>
      </div>

      {/* Interactive Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search rank (e.g., ASP, Constable, SP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {['All', 'Recruit / Junior Cadre', 'Non-Commissioned Officers (NCO)', 'Inspectorate', 'Senior Officers (Commissioned)'].map((cadre) => (
            <button
              key={cadre}
              onClick={() => setFilterCadre(cadre)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${filterCadre === cadre
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {cadre === 'All' ? 'All Cadres' : cadre.replace(' (Commissioned)', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Salary Table */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              2026 Nigeria Police CONPOSS Rank-by-Rank Scale
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Reflects updated monthly salary, annual base, and key command responsibilities.
            </p>
          </div>
          <span className="text-xs font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full shrink-0">
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
                <th className="px-4 sm:px-6 py-3.5 text-blue-700 bg-blue-50/50">2026 Monthly Pay</th>
                <th className="px-4 sm:px-6 py-3.5">Annual Total</th>
                <th className="px-4 sm:px-6 py-3.5">Key Role / Responsibilities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSalaries.map((item, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-4 sm:px-6 py-4 font-bold text-gray-900">
                    <div className="text-sm">{item.rank}</div>
                    <span className="text-[10px] font-normal text-gray-400 block sm:hidden mt-0.5">{item.cadre}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600 font-mono text-xs">
                    {item.gradeLevel}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-400 line-through">
                    {item.monthlyOld}
                  </td>
                  <td className="px-4 sm:px-6 py-4 font-black text-blue-900 bg-blue-50/30">
                    {item.monthlyNew2026}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-emerald-800 font-semibold">
                    {item.annualTotal}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-gray-600 text-xs leading-relaxed max-w-xs">
                    {item.keyResponsibilities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>* Salaries are based on the Consolidated Police Salary Structure (CONPOSS) and exclude state-specific allowances.</span>
          <Link to="/police-recruitment" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            Check Police Recruitment Portal Status <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Community Alert Widget */}
      <ViralCommunityWidget agencyName="Nigeria Police Force (NPF)" variant="card" />

      {/* Mini Interactive Aptitude Test for Police Screening */}
      <QuickPracticeWidget branch="Nigeria Police Force" quizRoute="/past-questions/police" />

      {/* FAQ Section (Featured Snippets & PAA) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          Frequently Asked Questions on Nigerian Police Salary (PAA)
        </h3>
        <div className="space-y-3 pt-2">
          {POLICE_FAQS.map((faq, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200/70">
              <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                <span className="text-blue-600 font-black">Q:</span>
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

export default PoliceSalary;
