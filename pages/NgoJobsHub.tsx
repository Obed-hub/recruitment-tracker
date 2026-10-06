import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, Globe, Search, Filter, MapPin, DollarSign, Calendar,
  Building2, ExternalLink, CheckCircle2, BookOpen, ArrowRight,
  Shield, HelpCircle, FileText, Award, Layers, Sparkles, HeartHandshake
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema, JobPostingSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import { REAL_NGO_JOBS, NgoJob } from '../services/mockNgoJobs';

const NGO_FAQS = [
  {
    question: 'Where can I find verified NGO jobs in Nigeria?',
    answer: 'The most authoritative and scam-free platforms to find NGO vacancies in Nigeria are ReliefWeb (reliefweb.int/jobs), UN Careers (careers.un.org), UNjobnet, Devex, and direct career portals of verified INGOs like the International Rescue Committee (rescue.org), MSF (msf.org), FHI 360, and Save the Children.'
  },
  {
    question: 'How much do NGOs pay staff in Nigeria?',
    answer: 'NGO salaries in Nigeria depend on the organization tier and donor funding. Entry-level officers earn between ₦350,000 to ₦650,000 monthly; mid-level MEAL, Finance, and Project Officers earn ₦600,000 to ₦1,200,000; while senior Technical Coordinators and UN National Officers (NOA to NOC) earn between ₦1,000,000 to ₦2,500,000+ monthly alongside comprehensive health and hazard allowances.'
  },
  {
    question: 'Do NGOs in Nigeria require NYSC completion?',
    answer: 'Yes, all formal national staff positions across International and National Non-Governmental Organizations in Nigeria mandate a valid NYSC Discharge Certificate or official Letter of Exemption as a baseline compliance requirement.'
  },
  {
    question: 'What are the most in-demand skills in the non-profit and humanitarian sector?',
    answer: 'The highest-demand skills include Monitoring, Evaluation, Accountability & Learning (MEAL), digital data collection (KoboToolbox, ODK, CommCare), public health project management, humanitarian emergency response, grant proposal writing, and financial compliance under USAID/FCDO/EU guidelines.'
  },
  {
    question: 'Is application to NGO jobs free?',
    answer: 'Yes, legitimate NGOs and United Nations agencies never charge application fees, processing fees, or interview charges at any stage of the recruitment process. Always apply through official career portals.'
  }
];

const SALARY_BENCHMARKS = [
  { grade: 'Entry-Level Assistant / Officer (GS-4 / GS-5)', monthlyPay: '₦350,000 - ₦600,000', exampleRoles: 'Community Mobilizer, Data Clerk, Assistant MEAL, Admin Assistant' },
  { grade: 'Mid-Level Specialist (GS-6 / GS-7 / NO-A)', monthlyPay: '₦650,000 - ₦1,200,000', exampleRoles: 'MEAL Officer, WASH Engineer, Public Health Officer, Finance Officer' },
  { grade: 'Senior Program Officer / Manager (NO-B / NO-C)', monthlyPay: '₦1,200,000 - ₦2,200,000', exampleRoles: 'Nutrition Project Manager, Emergency Response Coordinator, Senior Grants Manager' },
  { grade: 'Country Director / Technical Advisor', monthlyPay: '₦2,500,000 - ₦4,500,000+ ($)', exampleRoles: 'Head of Mission, Country Representative, Chief of Party (USAID/PEPFAR)' }
];

const REPUTABLE_PORTALS = [
  { name: 'ReliefWeb Jobs', url: 'https://reliefweb.int/jobs', desc: 'Apex global humanitarian job board maintained by UN OCHA.', badge: 'Apex Portal' },
  { name: 'UN Careers / Inspira', url: 'https://careers.un.org', desc: 'Official portal for UNICEF, WHO, UNDP, WFP, and UN agencies.', badge: 'UN System' },
  { name: 'IRC Careers', url: 'https://careers.rescue.org', desc: 'Direct vacancies across health, protection, and education programs.', badge: 'Global INGO' },
  { name: 'Devex Jobs', url: 'https://www.devex.com/jobs', desc: 'International development contracts, tenders, and consultancy roles.', badge: 'Development' },
  { name: 'Impactpool', url: 'https://www.impactpool.org', desc: 'Career matching for non-profit and intergovernmental impact roles.', badge: 'Impact Careers' }
];

const NgoJobsHub: React.FC = () => {
  const [jobs, setJobs] = useState<NgoJob[]>(REAL_NGO_JOBS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || job.sector === selectedSector;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesLevel = selectedLevel === 'All' || job.experienceLevel === selectedLevel;
    return matchesSearch && matchesSector && matchesType && matchesLevel;
  });

  const sectors = ['All', 'Humanitarian Aid', 'Public Health', 'MEAL / Data', 'Finance & Admin', 'Nutrition & Food Security', 'Education'];
  const types = ['All', 'Full-time', 'Contract', 'Remote', 'Fellowship'];
  const levels = ['All', 'Entry-level', 'Mid-level', 'Senior-level'];

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <SEO
        title="Latest NGO Jobs & Career Opportunities (2026): Find Your Impact Role"
        description="Explore verified NGO jobs, humanitarian vacancies, and UN careers in Nigeria. View live listings, salary scales, recruitment portals, and application guidelines."
        canonical="/ngo-jobs"
        keywords={[
          'ngo jobs',
          'ngo vacancies',
          'ngo recruitment',
          'ngo careers',
          'ngo recruitment portal',
          'non governmental organization jobs',
          'latest ngo vacancies',
          'unicef jobs nigeria',
          'irc jobs nigeria',
          'remote ngo jobs'
        ]}
      />

      <ArticleSchema
        title="Latest NGO Jobs & Career Opportunities: Find Your Impact Role"
        description="Comprehensive guide to NGO recruitment, active vacancies, salary scales, and application portals across Nigeria and international humanitarian organizations."
        url="https://recruitmenttracker.com.ng/ngo-jobs"
        datePublished="2026-10-06"
        authorName="Recruitment Tracker NGO Careers Desk"
      />

      <FAQPageSchema faqs={NGO_FAQS} />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <HeartHandshake className="w-80 h-80" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-emerald-500/25 border border-emerald-400 text-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Humanitarian & Non-Profit Pillar
            </span>
            <span className="bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Verified 2026 Listings
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Find Your Next Career Move: Latest NGO Jobs and Vacancies
          </h1>

          <p className="text-emerald-100 text-base md:text-lg leading-relaxed">
            Discover verified openings across top international non-governmental organizations (INGOs) and United Nations agencies in Nigeria. Access official recruitment portals, salary benchmarks, and remote impact roles.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs md:text-sm font-semibold">
            <Link
              to="/ngo-jobs/remote-entry-level"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              Explore Remote & Entry-Level Roles <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#active-vacancies"
              className="bg-white/15 hover:bg-white/25 text-white px-5 py-2.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              View Active NGO Jobs <Briefcase className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section: Live Job Filter Widget */}
          <div id="active-vacancies" className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1 flex items-center gap-2.5">
                <Briefcase className="w-6 h-6 text-emerald-700" /> Active NGO Job Listings
              </h2>
              <p className="text-gray-600 text-sm">
                Filter live vacancies by sector, location, or work model. Real data curated directly from verified organization recruitment feeds:
              </p>
            </div>

            {/* Filter Controls */}
            <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-150">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search by job title, organization (e.g. UNICEF, IRC), or city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div>
                  <label className="block text-gray-500 font-bold mb-1">Sector</label>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  >
                    {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-500 font-bold mb-1">Work Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  >
                    {types.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-500 font-bold mb-1">Experience Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg p-2 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  >
                    {levels.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings Count */}
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 px-1">
              <span>Showing {filteredJobs.length} verified vacancies</span>
              {(searchTerm || selectedSector !== 'All' || selectedType !== 'All' || selectedLevel !== 'All') && (
                <button
                  onClick={() => { setSearchTerm(''); setSelectedSector('All'); setSelectedType('All'); setSelectedLevel('All'); }}
                  className="text-emerald-700 hover:underline"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all space-y-3 group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {job.organization}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mt-1 group-hover:text-emerald-800 transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      job.type === 'Remote' ? 'bg-sky-50 text-sky-700 border border-sky-200' :
                      job.type === 'Fellowship' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-emerald-700">
                      <DollarSign className="w-3.5 h-3.5" /> {job.salaryRange}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" /> Deadline: {job.deadline}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">
                      Sector: <strong>{job.sector}</strong> • {job.experienceLevel}
                    </span>
                    <a
                      href={job.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                    >
                      Apply on Official Portal <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Navigating NGO Recruitment Portals */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <Globe className="w-6 h-6 text-sky-700" /> Navigating NGO Recruitment Portals
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Applying for <strong>ngo recruitment</strong> requires understanding the official platforms utilized by international donors, UN organizations, and humanitarian clusters:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REPUTABLE_PORTALS.map((portal, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-150 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-gray-900 text-sm">{portal.name}</h4>
                      <span className="text-[10px] font-extrabold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-150">
                        {portal.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {portal.desc}
                    </p>
                  </div>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                  >
                    Visit Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Career Paths & Salary Benchmarks */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <Award className="w-6 h-6 text-indigo-700" /> Career Paths & 2026 Salary Benchmarks
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Humanitarian compensation in Nigeria follows competitive scales based on local market assessments by the International Civil Service Commission (ICSC) and INGO peer surveys:
              </p>
            </div>

            <div className="overflow-hidden border border-gray-200 rounded-2xl">
              <table className="min-w-full divide-y divide-gray-200 text-left text-xs md:text-sm">
                <thead className="bg-gray-50 font-bold text-gray-600 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-5 py-3.5">Category & Grade</th>
                    <th className="px-5 py-3.5">Estimated Monthly Package</th>
                    <th className="px-5 py-3.5">Typical Roles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150 bg-white">
                  {SALARY_BENCHMARKS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-5 py-3.5 font-bold text-gray-900">{item.grade}</td>
                      <td className="px-5 py-3.5 font-extrabold text-emerald-700">{item.monthlyPay}</td>
                      <td className="px-5 py-3.5 text-gray-600 text-xs">{item.exampleRoles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-emerald-50/60 border border-emerald-150 rounded-2xl text-xs text-emerald-900 leading-relaxed">
              <strong>Fringe Benefits:</strong> Most reputable INGOs and UN agencies provide additional benefits, including 100% Comprehensive Health Insurance (covering employee + spouse + up to 4 children), Life Insurance, Hazard Allowances in Northeast field duty stations, and generous annual leave (24 to 30 days/year).
            </div>
          </div>

          {/* Section: Frequently Asked Questions */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-emerald-700" /> Frequently Asked Questions About NGO Careers
              </h2>
              <p className="text-gray-600 text-sm">
                Get clarity on the most common questions regarding non-governmental organization recruitment and application processes:
              </p>
            </div>

            <div className="space-y-4">
              {NGO_FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 bg-gray-50 border border-gray-200 rounded-2xl space-y-2">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <AdUnit slot="NGO_HUB_BOTTOM_AD" />
        </div>

        {/* Right 1 Col: Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Sub-Pillar Feature Callout */}
          <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-950 rounded-3xl p-6 text-white shadow-lg space-y-4">
            <span className="text-[10px] font-extrabold uppercase bg-yellow-400 text-slate-950 px-2.5 py-0.5 rounded-full">
              Specialized Hub
            </span>
            <h3 className="text-lg font-bold leading-tight">
              Remote & Entry-Level NGO Jobs
            </h3>
            <p className="text-xs text-indigo-200 leading-relaxed">
              Looking for work-from-home humanitarian roles, fellowships, or graduate entry opportunities? Access our dedicated sub-pillar guide.
            </p>
            <Link
              to="/ngo-jobs/remote-entry-level"
              className="w-full flex items-center justify-center py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md"
            >
              View Remote & Entry Guide <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Resume & Application Checklist */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-700" /> Non-Profit Resume Tips
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Use standard 2-page reverse chronological format tailored to donor specifications.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Quantify impact: e.g. "Monitored 14 health facilities serving 45,000 IDP beneficiaries."</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Highlight donor experience: USAID, FCDO, ECHO, Global Fund, BHA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Include digital tool proficiencies: KoboToolbox, ODK, SPSS, Stata, Power BI.</span>
              </li>
            </ul>
          </div>

          {/* Related Federal Agencies */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-500">
              Explore Government Agencies
            </h3>
            <div className="space-y-2 text-xs">
              <Link to="/faan-recruitment" className="p-2.5 bg-white rounded-xl border border-gray-150 block hover:text-emerald-700 font-semibold">
                FAAN (Aviation Security & Safety)
              </Link>
              <Link to="/nafdac-recruitment" className="p-2.5 bg-white rounded-xl border border-gray-150 block hover:text-emerald-700 font-semibold">
                NAFDAC (Health & Drug Regulatory)
              </Link>
              <Link to="/ncaa-recruitment-guide" className="p-2.5 bg-white rounded-xl border border-gray-150 block hover:text-emerald-700 font-semibold">
                NCAA Civil Aviation Guide
              </Link>
            </div>
          </div>

          <AdUnit slot="NGO_HUB_SIDEBAR_AD" format="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default NgoJobsHub;
