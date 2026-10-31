import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Trophy,
  BookOpen,
  Sparkles,
  Target,
  Building2,
  Flame,
  Landmark,
  GraduationCap,
  HeartPulse,
  Globe2,
  Cpu,
  Headphones,
  Briefcase,
  Timer,
  BarChart3,
  HelpCircle
} from 'lucide-react';
import { JOB_SECTORS } from '../data/jobPrepData';
import SEO from '../components/SEO';
import { BreadcrumbListSchema, FAQPageSchema, HowToSchema } from '../components/StructuredData';
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

const CBTPracticeLanding: React.FC = () => {
  const cbtFaqs = [
    {
      question: "What is a CBT practice test for Nigerian jobs?",
      answer: "A CBT (Computer-Based Test) practice simulator recreates the digital exam interface used by Nigerian employers (Dragnet, Workforce, SHL). It includes strict per-question or total countdown timers, multiple-choice selection, automatic grading, and immediate answer explanations."
    },
    {
      question: "Do I need to pay or create an account to take these CBT tests?",
      answer: "No. All CBT practice tests on this portal are 100% free with unlimited retakes. No registration, card details, or PDF downloads required."
    },
    {
      question: "What device can I use to practice?",
      answer: "Our CBT simulator is fully responsive and optimized for mobile phones (smartphones), tablets, laptops, and desktop computers. It runs directly inside your web browser."
    },
    {
      question: "Which industries are covered in this CBT simulator?",
      answer: "We offer tailored CBT questions for 8 key employment sectors in Nigeria: Commercial Banking (Dragnet/Workforce), Oil & Gas (NNPC/NLNG), Federal Civil Service (PSR), Nursing & Healthcare (NMCN), Teaching (SUBEB/TRCN), NGOs & Development, IT/Tech, and Customer Support."
    }
  ];

  const howToSteps = [
    {
      name: "Select Your Target Industry",
      text: "Choose the career sector you are applying for (e.g., Banking, Oil & Gas, Civil Service, or Tech)."
    },
    {
      name: "Start the Timed CBT Session",
      text: "Click 'Start CBT Test'. The countdown timer will immediately begin simulating the speed pressure of real exam halls."
    },
    {
      name: "Submit & Receive Instant Scoring",
      text: "Answer all questions and click Submit to see your percentage score, pass/fail status, and detailed working for each question."
    },
    {
      name: "Review STAR Interview Answers",
      text: "Switch to the interview tab to master the behavioral and technical panel questions asked in the next recruitment round."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      <SEO
        title="Free CBT Practice Test for Nigerian Jobs 2026 [Timed Quiz + Instant Scoring]"
        description="Take free computer-based aptitude tests for Nigerian job recruitment. Timed CBT practice for Banking, NNPC Oil & Gas, Civil Service, Nursing, Teaching & Tech. Realistic countdown timer & instant answer explanations."
        canonicalUrl="/cbt-practice-test"
        keywords={[
          'CBT practice test Nigeria',
          'free CBT test for Nigerian jobs',
          'computer based test practice',
          'Dragnet CBT practice',
          'aptitude test CBT Nigeria',
          'timed aptitude test practice',
          'online CBT practice Nigeria',
          'job recruitment CBT test'
        ]}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'CBT Practice Test', url: '/cbt-practice-test' }
        ]}
      />

      <FAQPageSchema faqs={cbtFaqs} />

      <HowToSchema
        name="How to Practice for Nigerian Job CBT Aptitude Tests"
        description="A 4-step guide to testing your speed and accuracy using free online Computer-Based Test simulators."
        steps={howToSteps}
      />

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-800/40">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            {getDailyUpdatedBadge()} • Live Exam Simulator
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Free CBT Practice Test <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">
              For Nigerian Job Seekers
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Over 75% of Nigerian job candidates fail aptitude tests due to poor time management, not lack of intelligence. Build your exam speed with timed, mobile-friendly CBT simulations featuring Dragnet, SHL, and Workforce-format questions.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-emerald-400">Timed</span>
              <span className="text-xs text-gray-300 font-medium">Real Countdown</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-teal-300">Instant</span>
              <span className="text-xs text-gray-300 font-medium">Automated Scoring</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-sky-300">100%</span>
              <span className="text-xs text-gray-300 font-medium">Free &amp; Unlimited</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-amber-400">Mobile</span>
              <span className="text-xs text-gray-300 font-medium">Optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Placement */}
      <AdUnit slot="job-prep-top" format="horizontal" />

      {/* Core Advantages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Timer className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Strict Countdown Timer</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Practice pacing yourself under the same intense 45-second per question time constraint used by corporate testing centres.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Instant Scoring &amp; Breakdown</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Get your total percentage score immediately upon submission, with clear color-coded indicators of what you got right or wrong.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Detailed Explanations</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Every question features comprehensive mathematical working and verbal logic explanations so you learn how to solve them next time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Zero Paywalls</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            No subscription fees, no locked answers, and no Scribd download paywalls. Everything is accessible right in your browser.
          </p>
        </div>
      </div>

      {/* Select Test Sector Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Select Your CBT Exam Simulator ({JOB_SECTORS.length} Suites Available)
          </h2>
          <span className="text-xs text-gray-500 font-medium">Free timed mock tests</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {JOB_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
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
                        Standard Time: <strong>{sector.aptitudeTestOverview.durationMinutes} mins</strong> ({sector.aptitudeTestOverview.recommendedSpeed})
                      </p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${sector.themeColor.badge}`}>
                    {sector.aptitudeQuestions.length} Qs
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {sector.description}
                </p>

                {/* Test Subjects */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Exam Test Subjects:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.aptitudeTestOverview.keySubjects.map((subj, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium border border-gray-200">
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-gray-100">
                <Link
                  to={`/aptitude-test-past-questions/${sector.slug}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm w-full text-center"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Launch CBT Practice Simulator &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions on CBT Practice Tests</h3>
          <p className="text-xs text-gray-500">Everything you need to know about our free mock test platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cbtFaqs.map((faq, idx) => (
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

export default CBTPracticeLanding;

