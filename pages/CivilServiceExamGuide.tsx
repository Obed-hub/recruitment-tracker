import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, CheckCircle2, AlertCircle, HelpCircle, ArrowRight,
  Clock, Award, Calendar, Layers, ShieldCheck, CheckSquare, Square,
  BarChart2, FileText, Globe, Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import { EXAM_MODULES } from '../services/mockCivilService';

const CIVIL_SERVICE_EXAM_FAQS = [
  {
    question: 'What is the Civil Service Exam in Nigeria?',
    answer: 'The Civil Service Exam encompasses both entry-level competitive aptitude tests (conducted by the Federal Civil Service Commission - FCSC or State Civil Service Commissions) and the mandatory Compulsory Confirmation Examination (ASCON) taken by newly appointed officers to confirm permanent pensionable status.'
  },
  {
    question: 'How often is the Civil Service Exam conducted?',
    answer: 'Entry-level screening tests occur whenever recruitment portals open for specific ministries, departments, and agencies (MDAs). The Compulsory Confirmation Examination for confirmed civil servants is conducted annually or bi-annually nationwide by the Administrative Staff College of Nigeria (ASCON) and the Office of the Head of the Civil Service of the Federation (OHCSF).'
  },
  {
    question: 'What is the pass mark for the Civil Service Examination?',
    answer: 'The benchmark pass mark is typically 60% overall, with a requirement to score at least 50% in the core Public Service Rules (PSR) and Financial Regulations (FR) papers. Scoring below 50% in PSR may require a candidate to resit the paper.'
  },
  {
    question: 'What subjects are tested in the Civil Service CBT exam?',
    answer: 'The standardized computer-based test (CBT) consists of four key sections: (1) Public Service Rules & Ethics, (2) General Knowledge & Current Affairs, (3) Use of English & Minute Drafting, and (4) Quantitative Reasoning & Basic Financial Regulations.'
  },
  {
    question: 'Are old civil service exam past questions (2016-2025) still relevant for the 2026 exam?',
    answer: 'Yes. While current affairs change, over 70% of exam questions in Public Service Rules, administrative procedures, English, and numerical reasoning follow recurring question banks. Practicing past papers is the single highest-yield preparation technique.'
  }
];

const STUDY_PLAN = [
  {
    week: 'Week 1 - 2',
    title: 'Foundations of Public Service Rules (PSR)',
    focus: 'Master PSR Chapters on Appointments, Confirmation, Discipline, Leaves, and the Revised 8-Year Directorate Tenure Rule.',
    deliverable: 'Draft summary notes of key administrative offenses, query timelines, and probation criteria.'
  },
  {
    week: 'Week 3',
    title: 'Nigerian Government Structure & Current Affairs',
    focus: 'Study the 1999 Constitution (as amended), Federal Executive Council structure, key line ministries, and landmark national policies.',
    deliverable: 'Take 3 timed current affairs quizzes covering recent federal budget priorities and bilateral agreements.'
  },
  {
    week: 'Week 4',
    title: 'Administrative Communication & Minute Writing',
    focus: 'Practice official letter formatting, minute drafting protocols, file indexing, and advanced comprehension exercises.',
    deliverable: 'Draft sample official memos and practice 50 lexis and structure questions.'
  },
  {
    week: 'Week 5',
    title: 'Quantitative Reasoning & Financial Regulations',
    focus: 'Master basic percentages, statistical interpretations, audit queries, and public procurement threshold rules.',
    deliverable: 'Solve 100 mathematical aptitude questions under timed conditions (1 minute per question).'
  },
  {
    week: 'Week 6',
    title: 'Full CBT Simulation & Timed Mock Exams',
    focus: 'Execute full 100-question timed mocks mimicking actual FCSC/ASCON test parameters (60 minutes).',
    deliverable: 'Review incorrect answers and eliminate knowledge gaps in weak sections.'
  }
];

const CivilServiceExamGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'plan' | 'regional'>('syllabus');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <SEO
        title="Civil Service Exam Guide: Everything You Need to Know | Syllabus, Study Plan & Past Questions"
        description="Master the Civil Service Exam in Nigeria with our definitive 2026 guide. Complete breakdown of Public Service Rules (PSR), CBT syllabus, 6-week study plan, and free practice tests."
        canonicalUrl="/exams/civil-service-exam-guide"
        keywords={[
          'civil services exam',
          'cbt exam for civil service',
          'civil service commission exam',
          'civil service exam 2026',
          'civil service past questions',
          'public service rules exam',
          'ascon exam past questions'
        ]}
      />

      <ArticleSchema
        title="Mastering the Civil Service Exam: A Comprehensive Guide"
        description="The definitive guide to preparing for and passing Federal and State Civil Service Commission examinations in Nigeria."
        url="/exams/civil-service-exam-guide"
        publishedAt="2026-10-06T00:32:00.000Z"
        updatedAt="2026-10-06T00:32:00.000Z"
      />

      <FAQPageSchema faqs={CIVIL_SERVICE_EXAM_FAQS} />

      <div className="bg-slate-900 text-slate-100 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950/60 via-slate-900 to-slate-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-5">
              <Sparkles className="w-4 h-4" />
              <span>Official 2026 Public Service Examination Framework</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Mastering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Civil Service Exam</span>: Complete Blueprint
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you are sitting for the <strong>Federal Civil Service Commission (FCSC)</strong> entry screening or the mandatory <strong>ASCON Compulsory Confirmation Examination</strong>, this evergreen guide provides the complete syllabus, study methodology, and CBT preparation roadmap.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/past-questions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition shadow-lg shadow-emerald-900/40"
              >
                <BookOpen className="w-5 h-5" />
                <span>Practice Civil Service CBT Questions</span>
              </Link>
              <Link
                to="/jobs/civil-service-commission-guide"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition"
              >
                <span>View Commission Rules & Careers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <AdUnit slot="civil-exam-top" format="horizontal" />
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex border-b border-slate-800 gap-2 sm:gap-4 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-4 py-2.5 font-semibold text-sm rounded-t-lg transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'syllabus'
                  ? 'bg-slate-800 text-emerald-400 border-b-2 border-emerald-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Exam Syllabus & Scoring</span>
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`px-4 py-2.5 font-semibold text-sm rounded-t-lg transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'plan'
                  ? 'bg-slate-800 text-emerald-400 border-b-2 border-emerald-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>6-Week Evergreen Study Plan</span>
            </button>
            <button
              onClick={() => setActiveTab('regional')}
              className={`px-4 py-2.5 font-semibold text-sm rounded-t-lg transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'regional'
                  ? 'bg-slate-800 text-emerald-400 border-b-2 border-emerald-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Federal vs. State & Regional Exams</span>
            </button>
          </div>

          {/* TAB 1: SYLLABUS & SCORING */}
          {activeTab === 'syllabus' && (
            <div className="mt-8 space-y-8 animate-fadeIn">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">What is the Civil Service Exam?</h2>
                    <p className="text-sm text-slate-400">Understanding the 100-Question Standardized CBT Format</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Civil service examinations in Nigeria are designed to evaluate an applicant’s administrative acumen, ethical grounding in the <strong>Public Service Rules (PSR)</strong>, command of official communication, and general knowledge of national governance. The standard screening is a <strong>100-question Computer-Based Test (CBT)</strong> lasting <strong>60 to 90 minutes</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {EXAM_MODULES.map((mod, idx) => (
                    <div key={idx} className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 hover:border-emerald-500/40 transition">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20">
                          {mod.percentage}% of Exam ({mod.questionCount} Questions)
                        </span>
                        <span className="text-xs text-slate-400 font-mono">Module 0{idx + 1}</span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">{mod.subject}</h3>
                      <ul className="space-y-1.5 mb-4 text-xs text-slate-300">
                        {mod.keyTopics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 italic">
                        <strong>Prep Tip:</strong> {mod.recommendedPreparation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anti-Thin Guidance Callout */}
              <div className="bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-800/40 rounded-2xl p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Year-by-Year Exam Question Patterns (2016 – 2026)
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Many candidates search for specific years like <em>"civil service exam 2021"</em> or <em>"civil service 2025"</em>. While current political figures and budget statistics update annually, the foundational assessment questions in <strong>Public Service Rules, Administrative Minute Writing, and General Logic</strong> remain strictly standardized. Practicing with our compiled multi-year past question bank covers all essential recurring question stems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 6-WEEK STUDY PLAN */}
          {activeTab === 'plan' && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Preparing for Upcoming Exams: 6-Week Master Plan</h2>
                    <p className="text-sm text-slate-400">A structured timetable to ensure top-percentile performance in any civil service screening</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {STUDY_PLAN.map((plan, idx) => (
                    <div key={idx} className="bg-slate-900/80 border border-slate-700/70 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1 sm:max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {plan.week}
                          </span>
                          <h3 className="font-bold text-white text-base">{plan.title}</h3>
                        </div>
                        <p className="text-sm text-slate-300">{plan.focus}</p>
                        <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                          <FileText className="w-3.5 h-3.5 text-emerald-400" />
                          <span><strong>Milestone:</strong> {plan.deliverable}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => toggleCheck(`plan-${idx}`)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-medium border flex items-center gap-2 transition shrink-0 ${
                          checkedItems[`plan-${idx}`]
                            ? 'bg-emerald-600 text-white border-emerald-500'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        {checkedItems[`plan-${idx}`] ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                        <span>{checkedItems[`plan-${idx}`] ? 'Completed' : 'Mark Done'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REGIONAL & AGENCY SPECIFIC EXAMS */}
          {activeTab === 'regional' && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Regional and Agency Specific Exams</h2>
                    <p className="text-sm text-slate-400">Comparing Federal FCSC, State CSCs, and International Public Service testing models</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-300 bg-slate-900/50">
                        <th className="p-3.5 font-semibold">Exam Tier / Entity</th>
                        <th className="p-3.5 font-semibold">Administering Body</th>
                        <th className="p-3.5 font-semibold">Testing Format</th>
                        <th className="p-3.5 font-semibold">Primary Assessment Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-300">
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-3.5 font-semibold text-white">Federal Civil Service (FCSC)</td>
                        <td className="p-3.5">FCSC / ASCON / JAMB CBT</td>
                        <td className="p-3.5">Computer-Based Test (100 Questions)</td>
                        <td className="p-3.5">Federal PSR, General Paper, Constitution & English</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-3.5 font-semibold text-white">State Civil Service Commissions (e.g. Lagos, Oyo, Edo)</td>
                        <td className="p-3.5">State Civil Service Boards</td>
                        <td className="p-3.5">CBT + Written Essay / Cadre Assessment</td>
                        <td className="p-3.5">State Public Service Rules, Local Affairs & Professional Cadre Test</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-3.5 font-semibold text-white">Specialized Regulatory (NUPRC, NCAA, NCC)</td>
                        <td className="p-3.5">Agency Board & Dragnet/SHL</td>
                        <td className="p-3.5">Aptitude Test + Technical Paper</td>
                        <td className="p-3.5">Sector-specific regulations, Critical Thinking, Numerical Reasoning</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-3.5 font-semibold text-white">State Public Service Commissions (e.g. APSC / Regional)</td>
                        <td className="p-3.5">Regional Commissions</td>
                        <td className="p-3.5">Multi-Stage Prelims & Mains</td>
                        <td className="p-3.5">General Studies, Administrative Law & Regional Governance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Interactive CBT CTA Card */}
          <div className="mt-10 bg-gradient-to-r from-emerald-900/60 to-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Ready to test your readiness?</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Take our free 2026 Civil Service CBT mock examination. Experience real timer simulation, instant grading, and detailed explanations for every question.
              </p>
            </div>
            <Link
              to="/past-questions"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shrink-0 flex items-center gap-2"
            >
              <Award className="w-5 h-5" />
              <span>Launch Free CBT Test</span>
            </Link>
          </div>

          {/* Ad Unit */}
          <div className="mt-10">
            <AdUnit slot="civil-exam-middle" format="rectangle" />
          </div>

          {/* FAQ Section */}
          <section className="mt-12 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {CIVIL_SERVICE_EXAM_FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/70 rounded-xl overflow-hidden bg-slate-900/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-200 hover:text-white transition text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <span className="text-emerald-400 font-mono text-lg shrink-0">
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
          </section>
        </div>
      </div>
    </>
  );
};

export default CivilServiceExamGuide;
