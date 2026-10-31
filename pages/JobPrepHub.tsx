import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Search,
  BookOpen,
  HelpCircle,
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  Building2,
  Flame,
  Landmark,
  GraduationCap,
  HeartPulse,
  Globe2,
  Cpu,
  Headphones,
  Sparkles,
  DollarSign
} from 'lucide-react';
import { JOB_SECTORS, JobSector } from '../data/jobPrepData';
import SEO from '../components/SEO';
import { BreadcrumbListSchema, FAQPageSchema } from '../components/StructuredData';
import { getDailyUpdatedBadge } from '../services/dateUtils';
import AdUnit from '../components/AdUnit';

const SectorIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Building2': return <Building2 className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Landmark': return <Landmark className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Globe2': return <Globe2 className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Headphones': return <Headphones className={className} />;
    default: return <Briefcase className={className} />;
  }
};

const JobPrepHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSectors = useMemo(() => {
    return JOB_SECTORS.filter((sector) => {
      const matchesCategory = selectedCategory === 'all' || sector.id === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        sector.title.toLowerCase().includes(q) ||
        sector.shortTitle.toLowerCase().includes(q) ||
        sector.description.toLowerCase().includes(q) ||
        sector.targetEmployers.some((emp) => emp.toLowerCase().includes(q)) ||
        sector.aptitudeTestOverview.testBody.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const globalFaqs = [
    {
      question: "Why do Nigerian jobs require different aptitude tests and interview questions?",
      answer: "Different sectors in Nigeria use specialized recruitment bodies: commercial banks use Dragnet or Workforce Group for numerical and speed tests; oil and gas multinationals emphasize technical reasoning and HSE; federal civil service exams focus on Public Service Rules (PSR); while UN and NGOs rely heavily on Competency-Based Interviewing (CBI)."
    },
    {
      question: "What is the STAR method for Nigerian job interviews?",
      answer: "The STAR method stands for Situation, Task, Action, and Result. Top corporate employers (Access Bank, NLNG, PwC, MTN, UN) expect candidates to structure answers using this framework to provide concrete, verifiable evidence of past performance rather than vague hypotheticals."
    },
    {
      question: "Are these aptitude test questions and interview answers free?",
      answer: "Yes, 100% free. You can practice computer-based tests (CBT) with live countdown timers, instant automated scoring, and review step-by-step model interview answers directly on this portal."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      <SEO
        title="Job Aptitude Test Practice & Top Interview Questions 2026/2027 [Free Sector CBT Mock Tests & STAR Answers]"
        description="Master job recruitment exams and panel interviews in Nigeria. Free CBT practice tests and model STAR interview answers for Banking, Oil & Gas, Civil Service, Teaching, Healthcare, NGOs, and Tech."
        canonicalUrl="/job-prep"
        keywords={[
          'job aptitude test practice Nigeria',
          'job interview questions and answers Nigeria',
          'bank graduate trainee aptitude test',
          'civil service exam past questions',
          'STAR method interview answers Nigeria',
          'nursing interview questions Nigeria',
          'Dragnet aptitude test questions',
          'Workforce group past questions'
        ]}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Job Prep & Interview Hub', url: '/job-prep' }
        ]}
      />

      <FAQPageSchema faqs={globalFaqs} />

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-800/40">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            {getDailyUpdatedBadge()} • Dual-Track Career Accelerator
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Job Aptitude Test Practice & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
              Top Interview Questions
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Don't get disqualified after applying. Select your target industry below to practice real computer-based tests (CBT) and study verified <strong className="text-white">STAR model answers</strong> trusted by hiring managers across Nigeria.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-emerald-400">8</span>
              <span className="text-xs text-gray-300 font-medium">Major Job Sectors</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-teal-300">100%</span>
              <span className="text-xs text-gray-300 font-medium">Free CBT Simulator</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-sky-400">STAR</span>
              <span className="text-xs text-gray-300 font-medium">Interview Scripts</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-amber-400">2026</span>
              <span className="text-xs text-gray-300 font-medium">Verified Question Bank</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Placement */}
      <AdUnit slot="job-prep-top" format="horizontal" />

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by employer (e.g. Access Bank, NNPC, SUBEB, MTN)..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Sectors ({JOB_SECTORS.length})
            </button>
            {JOB_SECTORS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedCategory(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === s.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Job Sectors */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-emerald-600" />
            Available Job Industry Suites ({filteredSectors.length})
          </h2>
          <span className="text-xs text-gray-500 font-medium">Updated for 2026/2027 recruitment drives</span>
        </div>

        {filteredSectors.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-3">
            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="text-gray-700 font-bold">No job sector matched "{searchQuery}"</p>
            <p className="text-xs text-gray-500">Try searching for generic terms like "Bank", "Engineering", "Teacher", or "Health".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredSectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md ${sector.themeColor.primary}`}>
                        <SectorIcon name={sector.iconName} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {sector.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          Tested by: <strong className="text-gray-700">{sector.aptitudeTestOverview.testBody}</strong>
                        </p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${sector.themeColor.badge}`}>
                      {sector.shortTitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Target Employers Chips */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Top Employers Hiring:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.targetEmployers.slice(0, 4).map((emp, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium border border-gray-200">
                          {emp}
                        </span>
                      ))}
                      {sector.targetEmployers.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-gray-50 text-gray-500 text-[11px] font-medium">
                          +{sector.targetEmployers.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlights Snapshot */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{sector.aptitudeQuestions.length} CBT Questions Available</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <Award className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{sector.interviewQuestions.length} STAR Model Answers</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-700 col-span-2">
                      <DollarSign className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Entry: <strong className="text-gray-900">{sector.salaryOverview.entryLevel}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-5 mt-4 border-t border-gray-100">
                  <Link
                    to={`/job-prep/${sector.slug}?tab=cbt`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition border border-emerald-200 text-center"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Practice CBT Test
                  </Link>

                  <Link
                    to={`/job-prep/${sector.slug}?tab=interview`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition shadow-sm text-center"
                  >
                    <span>Interview Answers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Guide Card: The STAR Method Masterclass */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-lg border border-emerald-700">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Recruiter Blueprint
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              How Top Nigerian Recruiters Score Interview Candidates (The STAR Framework)
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              When interviewing for banks, oil firms, or multinationals, 90% of candidates fail because they give vague opinions instead of structured stories. Always break your behavioral answers into:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
              <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
                <strong className="block text-emerald-300 font-bold">S — Situation</strong>
                <span className="text-gray-300 text-[11px]">Set the context & background.</span>
              </div>
              <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
                <strong className="block text-emerald-300 font-bold">T — Task</strong>
                <span className="text-gray-300 text-[11px]">The challenge you had to resolve.</span>
              </div>
              <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
                <strong className="block text-emerald-300 font-bold">A — Action</strong>
                <span className="text-gray-300 text-[11px]">Exact steps YOU took personally.</span>
              </div>
              <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
                <strong className="block text-emerald-300 font-bold">R — Result</strong>
                <span className="text-gray-300 text-[11px]">Quantifiable outcome achieved.</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              to="/job-prep/banking-finance?tab=interview"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              See Sample STAR Scripts &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Global Frequently Asked Questions */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions on Job Aptitude Tests & Interviews</h3>
          <p className="text-xs text-gray-500">Everything you need to know about job screenings in Nigeria.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {globalFaqs.map((faq, idx) => (
            <div key={idx} className="space-y-2 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                {faq.question}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ad Unit */}
      <AdUnit slot="job-prep-bottom" format="horizontal" />
    </div>
  );
};

export default JobPrepHub;
