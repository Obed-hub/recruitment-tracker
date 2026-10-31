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
  MessageSquare,
  Users,
  Target,
  FileQuestion,
  Star,
  Quote
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

const InterviewQuestionsHub: React.FC = () => {
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
          sector.interviewQuestions.some((iq) => iq.question.toLowerCase().includes(q)))
      );
    });
  }, [searchQuery, selectedCategory]);

  const totalInterviewQuestions = useMemo(() => {
    return JOB_SECTORS.reduce((acc, s) => acc + s.interviewQuestions.length, 0);
  }, []);

  const interviewFaqs = [
    {
      question: "What is the STAR method for Nigerian job interviews?",
      answer: "The STAR method is a proven answering technique consisting of Situation (context), Task (your goal), Action (the specific steps you personally took), and Result (the measurable positive outcome). Top recruiters at Access Bank, Shell, NLNG, PwC, and UN agencies score behavioral questions using this structure."
    },
    {
      question: "How do I answer 'Tell me about yourself' in a Nigerian job interview?",
      answer: "Structure your response using Present-Past-Future: Start with your current educational or professional background, highlight 1 or 2 relevant achievements or quantitative projects from your past, and conclude with why you are specifically eager to contribute to this organization."
    },
    {
      question: "What should I wear to a corporate job interview in Nigeria?",
      answer: "For Commercial Banking, Oil & Gas, and Civil Service, strict corporate attire is mandatory: a well-fitted dark suit (navy, charcoal, black), crisp long-sleeve collared shirt, conservative tie (for men), closed-toe corporate shoes, and minimal accessories. For Tech roles, smart-casual (blazer over chinos or professional dress) is standard."
    },
    {
      question: "What are the biggest red flags for Nigerian interview panels?",
      answer: "Common red flags include: speaking negatively about former employers or university lecturers, displaying ignorance about the company's recent news or leadership, failing to give concrete examples (giving vague theoretical answers instead of real stories), and arriving late."
    },
    {
      question: "Are these interview questions and model answers free?",
      answer: "Yes, 100% free with complete sample scripts, recruiter intent breakdowns, red flags to avoid, and tailored tips for both fresh graduates and experienced hires across 8 Nigerian job sectors."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      <SEO
        title="Job Interview Questions and Answers Nigeria 2026/2027 [STAR Method Scripts & Expert Tips]"
        description="Master top job interview questions and answers in Nigeria. Verifiable STAR model answers for Commercial Banking, Oil & Gas, Civil Service, FMC Healthcare, Teaching & Tech. Sample scripts & recruiter tips."
        canonicalUrl="/interview-questions-and-answers"
        keywords={[
          'job interview questions and answers Nigeria',
          'interview questions and answers',
          'bank interview questions Nigeria',
          'STAR method interview answers',
          'oil and gas interview questions',
          'civil service interview questions',
          'nursing interview questions Nigeria',
          'tell me about yourself answer Nigeria'
        ]}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Interview Questions & Answers', url: '/interview-questions-and-answers' }
        ]}
      />

      <FAQPageSchema faqs={interviewFaqs} />

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-violet-800/40">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-violet-400" />
            {getDailyUpdatedBadge()} • Full STAR Model Answer Scripts
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Job Interview Questions &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-amber-300">
              Verified Model Answers
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Stop giving nervous, rambling answers. Study real interview questions with word-for-word STAR model answer scripts designed for Nigerian corporate and public sector panels.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-violet-400">8</span>
              <span className="text-xs text-gray-300 font-medium">Job Industries</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-pink-300">{totalInterviewQuestions}+</span>
              <span className="text-xs text-gray-300 font-medium">STAR Scripts</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-amber-300">100%</span>
              <span className="text-xs text-gray-300 font-medium">Free Access</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-emerald-400">2026</span>
              <span className="text-xs text-gray-300 font-medium">Panel-Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Placement */}
      <AdUnit slot="job-prep-top" format="horizontal" />

      {/* The STAR Method Explainer Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-violet-950 rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-lg border border-violet-800/40">
        <div className="space-y-2 max-w-3xl">
          <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-wider">
            Recruiter Scoring Standard
          </span>
          <h2 className="text-xl sm:text-2xl font-black">
            The STAR Method: How Nigerian Interview Panels Evaluate You
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Hiring managers at banks and multinationals are trained to detect rehearsed falsehoods. The STAR structure proves your competence with verifiable evidence:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-violet-600 text-white font-black flex items-center justify-center text-xs">S</span>
              <strong className="text-violet-300 font-bold text-sm">Situation</strong>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Set the scene. Briefly describe the context, company, or challenge you faced during your project or past job.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-pink-600 text-white font-black flex items-center justify-center text-xs">T</span>
              <strong className="text-pink-300 font-bold text-sm">Task</strong>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Define your objective. What exact responsibility was assigned to you and what was the deadline?
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-amber-600 text-white font-black flex items-center justify-center text-xs">A</span>
              <strong className="text-amber-300 font-bold text-sm">Action</strong>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Highlight what YOU personally did. Explain your step-by-step initiative, tools, and collaboration.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center text-xs">R</span>
              <strong className="text-emerald-300 font-bold text-sm">Result</strong>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Provide metrics! Mention percentages, Naira saved or earned, time reduced, or awards received.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by question or industry (e.g. tell me about yourself, targets, safety)..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition"
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
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Interview Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-violet-600" />
            Industry Interview Question Suites ({filteredSectors.length})
          </h2>
          <span className="text-xs text-gray-500 font-medium">Click any sector to study sample answers</span>
        </div>

        {filteredSectors.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-3">
            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="text-gray-700 font-bold">No questions matched "{searchQuery}"</p>
            <p className="text-xs text-gray-500">Try searching for Banking, Safety, Civil Service, or Teaching.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-lg hover:bg-violet-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md ${sector.themeColor.primary}`}>
                        <SectorIcon name={sector.iconName} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                          {sector.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          Salary: <strong className="text-gray-700">{sector.salaryOverview.entryLevel}</strong>
                        </p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${sector.themeColor.badge}`}>
                      {sector.interviewQuestions.length} Scripts
                    </span>
                  </div>

                  {/* Sample Question Preview */}
                  {sector.interviewQuestions.length > 0 && (
                    <div className="bg-violet-50/70 border border-violet-100 rounded-xl p-3.5 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-violet-800 text-xs font-bold">
                        <Quote className="w-3.5 h-3.5" />
                        <span>Featured Panel Question:</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-800 italic">
                        "{sector.interviewQuestions[0].question}"
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Recruiter Intent: {sector.interviewQuestions[0].recruiterIntent.slice(0, 100)}...
                      </p>
                    </div>
                  )}

                  {/* Target Employers Chips */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Target Companies:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.targetEmployers.slice(0, 4).map((emp, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium border border-gray-200">
                          {emp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 pt-5 mt-4 border-t border-gray-100">
                  <Link
                    to={`/interview-questions-and-answers/${sector.slug}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs transition shadow-sm text-center"
                  >
                    <span>Read STAR Scripts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/aptitude-test-past-questions/${sector.slug}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition text-center"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Practice CBT
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions on Nigerian Job Interviews</h3>
          <p className="text-xs text-gray-500">Key insights for passing tough panel screenings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interviewFaqs.map((faq, idx) => (
            <div key={idx} className="space-y-2 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
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

export default InterviewQuestionsHub;

