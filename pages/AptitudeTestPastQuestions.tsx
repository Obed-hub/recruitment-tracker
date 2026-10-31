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
  DollarSign,
  ShieldCheck,
  FileText,
  Target,
  Zap
} from 'lucide-react';
import { JOB_SECTORS } from '../data/jobPrepData';
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

const AptitudeTestPastQuestions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSectors = useMemo(() => {
    return JOB_SECTORS.filter((sector) => {
      const matchesCategory = selectedCategory === 'all' || sector.id === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      return (
        matchesCategory &&
        (sector.title.toLowerCase().includes(q) ||
          sector.shortTitle.toLowerCase().includes(q) ||
          sector.description.toLowerCase().includes(q) ||
          sector.targetEmployers.some((emp) => emp.toLowerCase().includes(q)) ||
          sector.aptitudeTestOverview.testBody.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory]);

  const totalQuestions = useMemo(() => {
    return JOB_SECTORS.reduce((acc, s) => acc + s.aptitudeQuestions.length, 0);
  }, []);

  const aptitudeFaqs = [
    {
      question: "What is an aptitude test for Nigerian job recruitment?",
      answer: "A job aptitude test in Nigeria is a standardized Computer-Based Test (CBT) used by commercial banks, oil multinationals, consulting firms, and government parastatals to assess numerical reasoning, verbal logic, spatial thinking, and problem-solving speed before invited to panel interviews."
    },
    {
      question: "Which companies conduct aptitude tests in Nigeria?",
      answer: "The major recruitment test administrators in Nigeria include Dragnet Solutions (used by NNPC, NLNG, Access Bank, Chevron), Workforce Group (First Bank, GTBank), SHL (multinational consulting and FMCG), and specialized in-house CBT portals by Federal Civil Service, FIRS, and CBN."
    },
    {
      question: "What is the average pass mark for Nigerian job aptitude tests?",
      answer: "While cut-off marks vary depending on applicant pool volume, scoring 70% and above in all sub-sections (Quantitative, Verbal, and Abstract) typically guarantees progression to the documentation, assessment centre, or interview stage."
    },
    {
      question: "Are these aptitude test past questions and answers free?",
      answer: "Yes, 100% free with no subscription or PDF paywall. You can take live timed CBT tests, receive immediate automated scoring, and review step-by-step mathematical and logical explanations for each question."
    },
    {
      question: "How should I prepare for high-speed Dragnet and Workforce tests?",
      answer: "Focus on speed and mental math. Most Nigerian tests allot roughly 40-50 seconds per question. Practice with countdown timers, memorize common percentage-to-fraction conversions, and skip questions that consume more than 60 seconds to review later."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      <SEO
        title="Aptitude Test Past Questions and Answers 2026/2027 [Free CBT Practice for Nigerian Jobs]"
        description="Practice 100% free job aptitude test past questions and answers in Nigeria. Timed CBT mock tests with instant scoring for Commercial Banks, NNPC Oil & Gas, Civil Service, FMC Healthcare, Teaching & Tech."
        canonicalUrl="/aptitude-test-past-questions"
        keywords={[
          'aptitude test past questions and answers',
          'job aptitude test past questions PDF Nigeria',
          'CBT practice test Nigerian jobs',
          'banking aptitude test past questions',
          'NNPC aptitude test past questions',
          'civil service exam past questions',
          'Dragnet aptitude test past questions and answers',
          'Workforce group aptitude questions'
        ]}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Aptitude Test Past Questions', url: '/aptitude-test-past-questions' }
        ]}
      />

      <FAQPageSchema faqs={aptitudeFaqs} />

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-indigo-800/40">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            {getDailyUpdatedBadge()} • Free CBT Test Simulator
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Job Aptitude Test <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
              Past Questions &amp; Answers
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Stop paying for outdated PDFs on Scribd. Practice verified Dragnet, SHL, and Workforce-style Computer-Based Tests (CBT) with live countdown timers, step-by-step working, and zero paywalls.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-indigo-400">8</span>
              <span className="text-xs text-gray-300 font-medium">Job Industries</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-sky-300">{totalQuestions}+</span>
              <span className="text-xs text-gray-300 font-medium">CBT Questions</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-emerald-400">100%</span>
              <span className="text-xs text-gray-300 font-medium">Free Access</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-amber-400">2026</span>
              <span className="text-xs text-gray-300 font-medium">Verified Syllabus</span>
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
              placeholder="Filter by agency or bank (Access Bank, NNPC, CBN, FIRS)..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
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
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            Choose Your Aptitude Test Category ({filteredSectors.length})
          </h2>
          <span className="text-xs text-gray-500 font-medium">Free interactive CBT tests</span>
        </div>

        {filteredSectors.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-3">
            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="text-gray-700 font-bold">No test category found for "{searchQuery}"</p>
            <p className="text-xs text-gray-500">Try searching for Bank, Oil, Civil Service, or Teaching.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredSectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md ${sector.themeColor.primary}`}>
                        <SectorIcon name={sector.iconName} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
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

                  {/* Key Subjects Badges */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Exam Test Subjects:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.aptitudeTestOverview.keySubjects.map((subj, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-medium border border-indigo-100">
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Target Employers Chips */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Major Recruiters:</span>
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
                      <Clock className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{sector.aptitudeQuestions.length} Timed CBT Questions</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>{sector.aptitudeTestOverview.recommendedSpeed}</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="grid grid-cols-2 gap-3 pt-5 mt-4 border-t border-gray-100">
                  <Link
                    to={`/aptitude-test-past-questions/${sector.slug}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm text-center"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Start CBT Test
                  </Link>

                  <Link
                    to={`/interview-questions-and-answers/${sector.slug}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition text-center"
                  >
                    <span>Interview Q&amp;A</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* In-Depth SEO Guide: Mastering Nigerian Aptitude Tests */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6 text-gray-800 shadow-sm leading-relaxed">
        <div className="border-b border-gray-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Comprehensive Candidate Guide</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
            How to Pass Nigerian Job Aptitude Tests on Your First Attempt
          </h2>
          <p className="text-sm text-gray-500">Proven test strategies for Dragnet, SHL, Workforce, and Federal Commission CBTs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              1. Master Numerical Data Interpretation &amp; Currency Math
            </h3>
            <p className="text-gray-600">
              Commercial banks (Access Bank, GTBank, Zenith) and oil firms (NNPC, Shell, Chevron) place heavy weighting on numerical reasoning. You will face complex tables, currency exchange spreads, percentage increases, and compound interest calculations. Never calculate manually down to five decimals; learn approximation and elimination of impossible answer choices.
            </p>

            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              2. Decode Dragnet Verbal Reasoning Deductions
            </h3>
            <p className="text-gray-600">
              In Dragnet GSE verbal sections, you are given compact analytical passages followed by statements to classify as <em>True</em>, <em>False</em>, or <em>Cannot Say</em>. A major error candidates make is injecting external real-world knowledge. If the passage doesn't explicitly state a fact, the answer is always <em>Cannot Say</em>.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              3. Conquering Abstract &amp; Spatial Patterns
            </h3>
            <p className="text-gray-600">
              Abstract logic evaluates pure cognitive horsepower irrespective of language or mathematical background. Look for consistent transformation rules: clockwise rotation, alternating shading, side subtraction, and mirror reflections.
            </p>

            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              4. The 45-Second Pacing Rule
            </h3>
            <p className="text-gray-600">
              Most Nigerian job screening CBTs give you between 30 and 45 minutes for 40 to 50 questions. That means you have exactly 45 to 55 seconds per question. If a numerical problem is taking more than 60 seconds, pick your best educated guess, flag it, and immediately move forward.
            </p>
          </div>
        </div>

        {/* Cross-Link Callouts */}
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl p-6 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div className="space-y-1">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base">Passed the aptitude test and got shortlisted for an interview?</h4>
            <p className="text-xs text-gray-600">Study verified STAR model answer scripts and panel tips for your industry.</p>
          </div>
          <Link
            to="/interview-questions-and-answers"
            className="shrink-0 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition shadow"
          >
            Study Interview Q&amp;A &rarr;
          </Link>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions on Job Aptitude Tests</h3>
          <p className="text-xs text-gray-500">Answers to common questions about CBT tests in Nigeria</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aptitudeFaqs.map((faq, idx) => (
            <div key={idx} className="space-y-2 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
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

export default AptitudeTestPastQuestions;

