import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Shield, CircleDollarSign, TrendingUp, HelpCircle, CheckCircle2,
  ArrowRight, Award, AlertCircle, Search, Calendar, Download, Share2,
  Filter, Building2, ExternalLink, ChevronRight, Users, Scale, FileText
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import { PositionZeroQuickAnswer } from '../components/PositionZeroQuickAnswer';
import FastActionCard from '../components/FastActionCard';
import StickyRecommendedBar from '../components/StickyRecommendedBar';
import ViralCommunityWidget from '../components/ViralCommunityWidget';
import QuickPracticeWidget from '../components/QuickPracticeWidget';
import { SALARY_AGENCIES, AgencySalaryProfile } from '../data/salaryData';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface StandaloneSalaryPageProps {
  agencyKeyOverride?: string;
}

export const StandaloneSalaryPage: React.FC<StandaloneSalaryPageProps> = ({ agencyKeyOverride }) => {
  const { agencySlug } = useParams<{ agencySlug?: string }>();
  const activeSlug = agencyKeyOverride || agencySlug || '';

  // Canonical normalize slug (e.g. if user hits "navy-salary" or "airforce-salary")
  const normalizedSlug = activeSlug.endsWith('-salary') ? activeSlug : `${activeSlug}-salary`;
  const agencyData: AgencySalaryProfile | undefined = SALARY_AGENCIES[normalizedSlug];

  // If not found in dynamic dict, redirect to general comparison hub
  if (!agencyData) {
    // If slug matches army, police, customs, let their dedicated routes handle or redirect
    if (activeSlug.includes('army')) return <Navigate to="/army-salary" replace />;
    if (activeSlug.includes('police')) return <Navigate to="/police-salary" replace />;
    if (activeSlug.includes('customs')) return <Navigate to="/customs-salary" replace />;
    return <Navigate to="/salary-comparison" replace />;
  }

  // State filters
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add('All');
    agencyData.ranks.forEach(r => cats.add(r.category));
    return Array.from(cats);
  }, [agencyData]);

  const filteredRanks = useMemo(() => {
    return agencyData.ranks.filter(rank => {
      const matchesCat = selectedCategory === 'All' || rank.category === selectedCategory;
      const matchesSearch =
        rank.rank.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rank.gradeLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rank.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rank.responsibilities.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [agencyData, selectedCategory, searchQuery]);

  // JSON-LD breadcrumbs
  const breadcrumbItems = [
    { name: 'Home', url: 'https://recruitmenttracker.com.ng/' },
    { name: 'Salary Hub', url: 'https://recruitmenttracker.com.ng/salary-comparison' },
    { name: `${agencyData.agencyName} Salary Structure`, url: `https://recruitmenttracker.com.ng/${agencyData.slug}` }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pb-16">
      {/* Dynamic SEO Meta */}
      <SEO
        title={agencyData.seoTitle}
        description={agencyData.seoDescription}
        canonicalUrl={`https://recruitmenttracker.com.ng/${agencyData.slug}`}
        type="article"
      />

      <BreadcrumbListSchema items={breadcrumbItems} />
      <FAQPageSchema faqs={agencyData.faqs} />

      {/* Header Banner */}
      <header className={`bg-gradient-to-r ${agencyData.gradient} text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 shadow-lg`}>
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs text-white/80 mb-4 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <Link to="/salary-comparison" className="hover:text-white transition-colors">Salary Guides</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white font-semibold">{agencyData.agencyName}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 backdrop-blur-xs">
              <CircleDollarSign className="w-3.5 h-3.5 text-amber-300" /> {agencyData.salaryScale}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
              <Calendar className="w-3.5 h-3.5" /> Updated {getDailyUpdatedBadge(false)}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {agencyData.agencyName} Salary Structure 2026
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-3xl leading-relaxed">
            {agencyData.introOverview}
          </p>

          {/* Quick navigational links to other high-demand agencies */}
          <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-white/70 mr-1">Other Official Scales:</span>
            <Link to="/army-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              Nigerian Army
            </Link>
            <Link to="/police-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              Nigeria Police (NPF)
            </Link>
            <Link to="/customs-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              Nigeria Customs (NCS)
            </Link>
            <Link to="/navy-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              Nigerian Navy
            </Link>
            <Link to="/airforce-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              Air Force (NAF)
            </Link>
            <Link to="/civil-defence-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              Civil Defence (NSCDC)
            </Link>
            <Link to="/immigration-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              Immigration (NIS)
            </Link>
            <Link to="/nnpc-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              NNPC Limited
            </Link>
            <Link to="/cbn-salary" className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15">
              CBN
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* POSITION ZERO "QUICK ANSWER" BOX */}
        <section aria-labelledby="featured-snippet-answer">
          <PositionZeroQuickAnswer
            question={agencyData.quickAnswer.question}
            directAnswer={agencyData.quickAnswer.directAnswer}
            statusBadge={{
              text: agencyData.quickAnswer.statusText,
              variant: 'success'
            }}
            metrics={agencyData.quickAnswer.metrics}
            lastVerified={getDailyUpdatedBadge(false)}
          />
        </section>

        {/* ALLOWANCES & BENEFITS GRID */}
        <section className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Key Allowances & Hazard Stipends (2026)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed">
            {agencyData.scaleDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {agencyData.allowances.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50/80 rounded-xl border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{item.name}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {item.rate}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-700">Eligibility:</span> {item.eligibility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPREHENSIVE RANK & SALARY TABLE */}
        <section className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs" id="rank-table">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-military-blue" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  {agencyData.agencyName} Complete Rank-by-Rank Salary Table
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Showing estimated basic monthly take-home, annual compensation, entry qualifications, and duties.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1 rounded-xl w-fit">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-gray-900 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat === 'All' ? 'All Ranks' : cat.split('(')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar inside table */}
          <div className="mb-4 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search rank, grade level, or qualification in ${agencyData.shortName}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-military-blue/20 focus:border-military-blue transition-all"
            />
          </div>

          {/* Tabular data */}
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50/80 text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">Rank & Grade</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">Cadre Category</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap text-emerald-700">2026 Monthly Pay</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap hidden md:table-cell">Annual Total</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 whitespace-nowrap">Entry Qualification</th>
                  <th scope="col" className="px-4 sm:px-6 py-3.5 min-w-[200px]">Duties & Responsibilities</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-xs sm:text-sm">
                {filteredRanks.length > 0 ? (
                  filteredRanks.map((r, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 sm:px-6 py-4">
                        <div className="font-bold text-gray-900">{r.rank}</div>
                        <div className="text-[11px] text-gray-500 font-mono mt-0.5">{r.gradeLevel}</div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-gray-100 text-gray-700">
                          {r.category.split('(')[0].trim()}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <div className="font-extrabold text-emerald-800">{r.newMonthly2026}</div>
                        <div className="text-[10px] text-gray-400 line-through mt-0.5">Old: {r.oldMonthly}</div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell font-medium text-gray-700">
                        {r.annualEstimate}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-xs text-gray-700">
                        {r.qualification}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-xs text-gray-600 leading-relaxed">
                        {r.responsibilities}
                        <div className="mt-1 text-[11px] text-emerald-700 font-medium">
                          Bonus: {r.allowancesSummary}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500 text-sm">
                      No ranks found matching "{searchQuery}". Try a different keyword or reset filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* SIDE-BY-SIDE COMPARISON TEASER */}
        <section className="p-5 sm:p-6 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1 max-w-2xl">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white mb-1">
              Cross-Service Benchmark
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Compare {agencyData.shortName} vs Army, Navy, Police & Customs
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Wondering which security agency pays recruits or DSSC officers the highest in Nigeria? Check our comprehensive side-by-side comparison tables.
            </p>
          </div>
          <Link
            to="/salary-comparison"
            className="px-5 py-3 bg-white text-blue-950 hover:bg-blue-50 font-bold rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap shadow-sm flex items-center gap-2 shrink-0"
          >
            <Scale className="w-4 h-4 text-blue-950" /> View Comparison Tables <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (PAA SEO) */}
        <section className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Frequently Asked Questions (People Also Ask)
            </h2>
          </div>
          <div className="space-y-3.5">
            {agencyData.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1.5 flex items-start gap-2">
                  <span className="text-military-blue font-black shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm pl-5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERLINKING: RELATED AGENCIES */}
        <section className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gray-600" /> Discover Other Agency Salary Scales (2026)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {agencyData.relatedAgencySlugs.map((relSlug) => {
              const relData = SALARY_AGENCIES[relSlug];
              if (!relData) {
                // handle army, police, customs links
                if (relSlug === 'army-salary') {
                  return (
                    <Link key={relSlug} to="/army-salary" className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 flex items-center justify-between transition-colors">
                      <span>Nigerian Army</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </Link>
                  );
                }
                if (relSlug === 'police-salary') {
                  return (
                    <Link key={relSlug} to="/police-salary" className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 flex items-center justify-between transition-colors">
                      <span>Nigeria Police (NPF)</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </Link>
                  );
                }
                if (relSlug === 'customs-salary') {
                  return (
                    <Link key={relSlug} to="/customs-salary" className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 flex items-center justify-between transition-colors">
                      <span>Nigeria Customs</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </Link>
                  );
                }
                return null;
              }
              return (
                <Link
                  key={relSlug}
                  to={`/${relData.slug}`}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 flex items-center justify-between transition-colors"
                >
                  <span>{relData.agencyName}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* WIDGETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ViralCommunityWidget />
          <QuickPracticeWidget />
        </div>
      </main>

      <StickyRecommendedBar
        title={`Explore ${agencyData.shortName} Recruitment 2026`}
        subtitle="Official requirements, closing dates & application portal."
        badgeText="Verified Guide"
        ctaText="View Recruitment"
        ctaLink={`/recruitments`}
        variant="navy"
      />
    </div>
  );
};

export default StandaloneSalaryPage;
