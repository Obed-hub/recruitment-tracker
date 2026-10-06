import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Briefcase, CheckCircle2, Search, ExternalLink,
  HelpCircle, ArrowRight, BookOpen, Layers, Award, Sparkles,
  CheckSquare, Square, Building, TrendingUp, DollarSign, Clock
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import { REAL_TRAINEE_PROGRAMS } from '../services/mockTraineePrograms';

const GRADUATE_FAQS = [
  {
    question: 'What is a Graduate Trainee Program?',
    answer: 'A Graduate Trainee Program is a fast-track corporate employment scheme designed by multinational corporations, banks, and major conglomerates to recruit high-potential recent university and polytechnic graduates. Trainees undergo structured rotations across key business units, receive mentorship from senior executives, and transition into substantive officer or managerial positions upon graduation.'
  },
  {
    question: 'What is the salary for Graduate Trainees in Nigeria in 2026?',
    answer: 'Graduate trainee compensation in Nigeria ranges from ₦230,000 to ₦300,000 per month in top commercial banks (Access Bank, GTBank, Zenith), ₦320,000 to ₦450,000 in professional services and consulting (PwC, KPMG, Deloitte), and ₦500,000 to ₦750,000+ per month in FMCG multinationals and global energy corporations (BAT, Unilever, Shell, TotalEnergies).'
  },
  {
    question: 'What qualifications do I need for a Graduate Trainee role?',
    answer: 'Most top-tier graduate schemes require a Bachelor’s Degree (minimum of Second Class Upper / 2:1, or Second Class Lower / 2:2 for select banks) or a Higher National Diploma (HND Upper Credit). Candidates must have completed their mandatory National Youth Service Corps (NYSC) with a discharge certificate, and generally not exceed the age limit of 26 to 28 years.'
  },
  {
    question: 'How do companies test and select graduate trainees?',
    answer: 'The recruitment process standardly consists of 5 rigorous stages: (1) Online Psychometric Screening (Dragnet, SHL, or Talogy numerical/verbal tests), (2) Asynchronous Video Assessment (HireVue or Pymetrics), (3) In-person or Virtual Assessment Centre (group case study and in-tray exercises), (4) Intensive Academy Training, and (5) Final Executive Panel Interview.'
  },
  {
    question: 'What is the difference between a Graduate Trainee and a Management Trainee?',
    answer: 'Graduate Trainee programs focus on developing functional technical expertise across specialized business units (e.g., credit analysis, internal audit, software development), whereas Management Trainee programs are explicitly fast-tracked leadership pipelines intended to groom candidates for executive and strategic managerial roles within 18 to 36 months.'
  }
];

const APPLICATION_CHECKLIST = [
  { id: 'degree', text: 'Official Degree Certificate or Statement of Result (Minimum 2:1 or 2:2 depending on firm)' },
  { id: 'nysc', text: 'Valid NYSC Discharge Certificate or official National Exemption Letter' },
  { id: 'age', text: 'Verified Age Credentials (NIN Slip and NPC Birth Certificate confirming under 26–27 years)' },
  { id: 'cv', text: 'ATS-Optimized 1-Page Corporate Resume with quantifiable leadership, academic, and internship metrics' },
  { id: 'tests', text: 'Preparation in GMAT/SHL numerical reasoning, verbal critical analysis, and situational judgment' },
  { id: 'video', text: 'Setup for asynchronous video interviews (professional attire, quiet background, clean webcam lighting)' }
];

const GraduateTraineeGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ['All', 'Banking & Finance', 'FMCG & Conglomerates', 'Professional Services', 'Tech & Engineering'];

  const filteredPrograms = REAL_TRAINEE_PROGRAMS.filter(p => {
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = p.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.programTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.eligibility.discipline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <SEO
        title="Best Traineeship Programs 2026: Complete Guide to Graduate Schemes | Salaries & Application"
        description="Discover top graduate trainee programs in Nigeria for 2026. Complete salary benchmarks (₦250k - ₦750k+), eligibility requirements, 5-stage selection guide, and verified application portals."
        canonicalUrl="/traineeships/guide"
        keywords={[
          'trainee programs',
          'graduate trainee programs',
          'traineeship',
          'graduate trainee',
          'graduate training schemes',
          'management trainee program',
          'graduate trainee salary in nigeria'
        ]}
      />

      <ArticleSchema
        title="Complete Guide to Finding the Right Traineeship Program"
        description="Comprehensive analysis of graduate training schemes, multinational leadership pipelines, selection blueprints, and verified portals."
        url="/traineeships/guide"
        publishedAt="2026-10-06T00:45:00.000Z"
        updatedAt="2026-10-06T00:45:00.000Z"
      />

      <FAQPageSchema faqs={GRADUATE_FAQS} />

      <div className="bg-slate-900 text-slate-100 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950/70 via-slate-900 to-slate-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/40">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Verified 2026 Corporate Traineeship Intelligence</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Complete Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">Graduate Trainee Programs</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Launch your career in top financial institutions, FMCG conglomerates, and professional consulting firms. Access real salary scales, eligibility requirements, assessment blueprints, and official application portals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#programs-table"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-lg shadow-indigo-900/40"
              >
                <Briefcase className="w-5 h-5" />
                <span>Explore Verified Trainee Schemes</span>
              </a>
              <Link
                to="/past-questions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition"
              >
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Practice Aptitude Test Questions</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <AdUnit slot="trainee-hub-top" format="horizontal" />
        </div>

        {/* Core Value Pillar: Graduate vs Management Trainee vs Apprenticeship */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Understanding Traineeship Categories</h2>
                <p className="text-sm text-slate-400">Selecting the career acceleration path matched to your background</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 hover:border-indigo-500/40 transition">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-base mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Graduate Trainee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Focused on early-career graduates with 0–2 years of experience. Trainees gain deep functional specialization across finance, software, consulting, or engineering departments.
                </p>
                <div className="text-xs text-indigo-300 font-medium border-t border-slate-800 pt-3">
                  <strong>Typical Salary:</strong> ₦230,000 – ₦450,000/mo
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 hover:border-indigo-500/40 transition">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-base mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Management Trainee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Fast-track cross-functional leadership scheme in FMCGs and conglomerates. Trainees rotate across marketing, supply chain, and operations with international executive mentorship.
                </p>
                <div className="text-xs text-purple-300 font-medium border-t border-slate-800 pt-3">
                  <strong>Typical Salary:</strong> ₦450,000 – ₦750,000/mo
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 hover:border-indigo-500/40 transition">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-base mb-2">
                  <Award className="w-5 h-5" />
                  <span>Tech & Vocational Apprenticeship</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Hands-on technical and software engineering training. Combines real production codebases or industrial plant equipment with stipend allowances and direct job placement.
                </p>
                <div className="text-xs text-teal-300 font-medium border-t border-slate-800 pt-3">
                  <strong>Typical Salary:</strong> ₦120,000 – ₦400,000/mo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filterable Table of Verified Trainee Programs */}
        <section id="programs-table" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Verified 2026 Traineeship Opportunities</h2>
                <p className="text-sm text-slate-400">Authentic corporate schemes with verified compensation scales and portals</p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search bank, firm, or discipline..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/40 transition group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/20">
                        {prog.category}
                      </span>
                      <span className="text-xs text-emerald-400 font-mono font-medium">
                        {prog.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">
                        {prog.programTitle}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
                        <Building className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{prog.companyName}</span> • <span>{prog.durationMonths} Months</span>
                      </p>
                    </div>

                    <div className="bg-slate-950/60 rounded-lg p-3 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center justify-between text-emerald-300 font-semibold">
                        <span>Compensation:</span>
                        <span>{prog.salaryStipendMonthly}</span>
                      </div>
                      <div className="text-slate-400">
                        <strong>Criteria:</strong> {prog.eligibility.minDegree} • Max {prog.eligibility.maxAge} yrs
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 space-y-1">
                      <strong className="text-slate-400 block">Selection Stages:</strong>
                      <ul className="space-y-1">
                        {prog.selectionStages.slice(0, 3).map((stg, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{stg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{prog.status2026}</span>
                    <a
                      href={prog.officialPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition shadow-md"
                    >
                      <span>Official Career Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Stage Selection Pipeline Blueprint */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">The 5-Stage Selection Pipeline</h2>
                <p className="text-sm text-slate-400">How leading organizations filter over 50,000 applicants down to the top 1%</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl">
                <span className="text-xs font-bold text-indigo-400">STAGE 01</span>
                <h3 className="text-base font-bold text-white mt-0.5 mb-1">Online Psychometric Screening (Dragnet, SHL, Talogy)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Timed multiple-choice tests assessing numerical reasoning (data interpretation, ratios, percentages), verbal critical reasoning, and inductive logic. Candidates need &gt;80th percentile to advance.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl">
                <span className="text-xs font-bold text-indigo-400">STAGE 02</span>
                <h3 className="text-base font-bold text-white mt-0.5 mb-1">Asynchronous AI & Video Assessment (HireVue / Pymetrics)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recorded video responses to situational behavioral prompts (e.g. STAR methodology: Situation, Task, Action, Result) evaluated on communication clarity, confidence, and cognitive speed.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl">
                <span className="text-xs font-bold text-indigo-400">STAGE 03</span>
                <h3 className="text-base font-bold text-white mt-0.5 mb-1">The Assessment Centre (AC)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A full-day evaluation involving group business case analysis, in-tray prioritization simulations, and individual pitches observed by HR assessors and business unit leads.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl">
                <span className="text-xs font-bold text-indigo-400">STAGE 04</span>
                <h3 className="text-base font-bold text-white mt-0.5 mb-1">Intensive Corporate Academy Immersion</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Successful candidates enter corporate training schools (e.g. Access School of Banking Excellence, GTBank Abeokuta Academy, PwC Foundation School) receiving full salary while undergoing intensive academic training.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl">
                <span className="text-xs font-bold text-indigo-400">STAGE 05</span>
                <h3 className="text-base font-bold text-white mt-0.5 mb-1">Executive Management Chat & Final Deployment</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Final presentation to Executive Directors and Managing Directors, followed by formal appointment letter issuance and substantive job placement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Application Readiness Checklist */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Application Readiness Checklist</h2>
            <p className="text-sm text-slate-400 mb-6">Verify all core eligibility milestones before applying to graduate schemes</p>

            <div className="space-y-3">
              {APPLICATION_CHECKLIST.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className="cursor-pointer bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3 hover:border-indigo-500/40 transition"
                >
                  <button className="text-indigo-400 shrink-0">
                    {checklist[item.id] ? <CheckSquare className="w-5 h-5 text-indigo-400" /> : <Square className="w-5 h-5 text-slate-500" />}
                  </button>
                  <span className={`text-sm ${checklist[item.id] ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pillar Links */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/traineeships/management"
              className="p-5 bg-slate-800/80 border border-slate-700 rounded-xl hover:border-indigo-500 transition group"
            >
              <h3 className="font-bold text-white group-hover:text-indigo-300 text-sm mb-1 flex items-center justify-between">
                <span>Management Trainee Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-400">Explore FMCG leadership tracks and assessment center case studies.</p>
            </Link>

            <Link
              to="/training/on-the-job"
              className="p-5 bg-slate-800/80 border border-slate-700 rounded-xl hover:border-indigo-500 transition group"
            >
              <h3 className="font-bold text-white group-hover:text-indigo-300 text-sm mb-1 flex items-center justify-between">
                <span>On-The-Job Training Jobs</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-400">Discover paid vocational schemes and earn-while-learning roles.</p>
            </Link>

            <Link
              to="/tech/software-developer-traineeship"
              className="p-5 bg-slate-800/80 border border-slate-700 rounded-xl hover:border-indigo-500 transition group"
            >
              <h3 className="font-bold text-white group-hover:text-indigo-300 text-sm mb-1 flex items-center justify-between">
                <span>Software Developer Traineeship</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-400">Master coding bootcamps, fintech engineering academies, and tech careers.</p>
            </Link>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <AdUnit slot="trainee-hub-bottom" format="rectangle" />
        </div>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {GRADUATE_FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/70 rounded-xl overflow-hidden bg-slate-900/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-200 hover:text-white transition text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <span className="text-indigo-400 font-mono text-lg shrink-0">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GraduateTraineeGuide;
