import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import {
  Briefcase,
  BookOpen,
  HelpCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp,
  Share2,
  Copy,
  Check,
  AlertTriangle,
  Lightbulb,
  Building2,
  Flame,
  Landmark,
  GraduationCap,
  HeartPulse,
  Globe2,
  Cpu,
  Headphones,
  DollarSign
} from 'lucide-react';
import { JOB_SECTORS, JobSector, JobAptitudeQuestion, JobInterviewQuestion } from '../data/jobPrepData';
import SEO from '../components/SEO';
import { BreadcrumbListSchema, FAQPageSchema, QuizSchema } from '../components/StructuredData';
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

const JobSectorDetail: React.FC = () => {
  const { sectorSlug } = useParams<{ sectorSlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Tab State: 'cbt' | 'interview'
  const activeTab = searchParams.get('tab') === 'interview' ? 'interview' : 'cbt';

  const sector = useMemo(() => {
    return JOB_SECTORS.find((s) => s.slug === sectorSlug);
  }, [sectorSlug]);

  // ── CBT Practice State ────────────────────────────────────────────────────────
  const [cbtState, setCbtState] = useState<'ready' | 'running' | 'completed'>('ready');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // ── Interview Questions Accordion State ──────────────────────────────────────
  const [expandedInterviewId, setExpandedInterviewId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Auto-expand first interview question on mount
  useEffect(() => {
    if (sector && sector.interviewQuestions.length > 0 && !expandedInterviewId) {
      setExpandedInterviewId(sector.interviewQuestions[0].id);
    }
  }, [sector]);

  // Handle Tab Switch
  const handleTabChange = (tab: 'cbt' | 'interview') => {
    setSearchParams({ tab });
  };

  // Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (cbtState === 'running' && timerActive && timeLeftSeconds > 0) {
      interval = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCbtState('completed');
            setTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cbtState, timerActive, timeLeftSeconds]);

  // CBT Calculations - declare hooks unconditionally
  const totalQuestions = sector?.aptitudeQuestions?.length || 0;
  const answeredCount = Object.keys(userAnswers).length;

  const scoreResult = useMemo(() => {
    if (!sector || cbtState !== 'completed') return { score: 0, percentage: 0, passed: false };
    let correct = 0;
    sector.aptitudeQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    const percentage = Math.round((correct / (sector.aptitudeQuestions.length || 1)) * 100);
    return {
      score: correct,
      percentage,
      passed: percentage >= 60
    };
  }, [cbtState, sector, userAnswers]);

  if (!sector) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Job Sector Not Found</h1>
        <p className="text-sm text-gray-600">The career preparation suite you are looking for does not exist or has been relocated.</p>
        <Link
          to="/job-prep"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition shadow"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Job Sectors
        </Link>
      </div>
    );
  }

  const startTest = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    // Allocate 60 seconds per question
    setTimeLeftSeconds(totalQuestions * 60);
    setCbtState('running');
    setTimerActive(true);
  };

  const handleSelectOption = (optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleSubmitTest = () => {
    if (window.confirm('Are you sure you want to submit your aptitude practice test and view your results?')) {
      setCbtState('completed');
      setTimerActive(false);
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopyScript = (scriptText: string, id: string) => {
    navigator.clipboard.writeText(scriptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const schemaQuestions = sector.aptitudeQuestions.map((q) => ({
    question: q.question,
    options: q.options,
    correctOptionIndex: q.correctAnswer,
    explanation: q.explanation
  }));

  const combinedFaqs = [
    ...sector.faqs,
    {
      question: `How are candidate interview scores determined in ${sector.shortTitle}?`,
      answer: `Interview panels typically score candidates on 4 competencies: Technical Knowledge (30%), Behavioral & Cultural Alignment using STAR (30%), Communication & Composure under Pressure (20%), and Long-term Retention Potential (20%).`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      <SEO
        title={`${sector.title} Aptitude Test Practice & Top Interview Questions 2026/2027`}
        description={sector.description}
        canonicalUrl={`/job-prep/${sector.slug}`}
        keywords={[
          `${sector.shortTitle} aptitude test practice`,
          `${sector.shortTitle} interview questions and answers Nigeria`,
          `${sector.targetEmployers[0]} aptitude test questions`,
          `${sector.targetEmployers[1] || sector.shortTitle} interview questions`,
          `STAR method answers for ${sector.shortTitle}`
        ]}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Job Prep', url: '/job-prep' },
          { name: sector.shortTitle, url: `/job-prep/${sector.slug}` }
        ]}
      />

      <QuizSchema
        title={`${sector.title} Aptitude Test CBT Practice`}
        description={sector.description}
        questions={schemaQuestions}
      />

      <FAQPageSchema faqs={combinedFaqs} />

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Link to="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <Link to="/job-prep" className="hover:text-emerald-600">Job Prep Hub</Link>
        <span>/</span>
        <span className="text-gray-900 font-bold">{sector.shortTitle}</span>
      </div>

      {/* Sector Hero Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${sector.themeColor.primary}`}>
              <SectorIcon name={sector.iconName} className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${sector.themeColor.badge}`}>
                  {sector.shortTitle}
                </span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Verified 2026/2027
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
                {sector.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Link
              to="/job-prep"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition w-full md:w-auto justify-center"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Sectors
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed max-w-4xl">
          {sector.description}
        </p>

        {/* Sector Fast Facts Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100">
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
            <span className="block text-[11px] font-bold text-gray-400 uppercase">Assessment Body:</span>
            <span className="text-xs font-bold text-gray-900">{sector.aptitudeTestOverview.testBody}</span>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
            <span className="block text-[11px] font-bold text-gray-400 uppercase">Entry-Level Salary:</span>
            <span className="text-xs font-bold text-emerald-700">{sector.salaryOverview.entryLevel}</span>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
            <span className="block text-[11px] font-bold text-gray-400 uppercase">Top Target Employers:</span>
            <span className="text-xs font-medium text-gray-800 truncate block">
              {sector.targetEmployers.slice(0, 3).join(', ')}...
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-200 pt-2">
          <button
            onClick={() => handleTabChange('cbt')}
            className={`flex items-center gap-2 py-3 px-6 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'cbt'
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50 rounded-t-xl'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Aptitude Test CBT Practice</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[11px] bg-emerald-100 text-emerald-800 font-extrabold">
              {sector.aptitudeQuestions.length} Questions
            </span>
          </button>

          <button
            onClick={() => handleTabChange('interview')}
            className={`flex items-center gap-2 py-3 px-6 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'interview'
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50 rounded-t-xl'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Top Interview Questions & Answers</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[11px] bg-indigo-100 text-indigo-800 font-extrabold">
              {sector.interviewQuestions.length} STAR Guides
            </span>
          </button>
        </div>
      </div>

      {/* Ad Placement */}
      <AdUnit slot="job-sector-top" format="horizontal" />

      {/* ========================================================================= */}
      {/* TAB 1: APTITUDE TEST CBT PRACTICE ENGINE                                  */}
      {/* ========================================================================= */}
      {activeTab === 'cbt' && (
        <div className="space-y-6">
          {/* STATE 1: READY / SETUP */}
          {cbtState === 'ready' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 text-center space-y-6 max-w-2xl mx-auto shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-900">
                  {sector.shortTitle} CBT Aptitude Practice Exam
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Experience a realistic exam environment simulating {sector.aptitudeTestOverview.testBody}. Test your speed, accuracy, and review detailed step-by-step solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs">
                <div>
                  <span className="text-gray-400 block text-[11px] font-bold">TOTAL QUESTIONS:</span>
                  <span className="font-bold text-gray-800 text-sm">{totalQuestions} Questions</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] font-bold">ESTIMATED TIME:</span>
                  <span className="font-bold text-gray-800 text-sm">{totalQuestions} Minutes</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] font-bold">PASS MARK:</span>
                  <span className="font-bold text-emerald-700 text-sm">60% or Higher</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={startTest}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Start Practice CBT Exam Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-gray-400">
                  ⚡ Live automated timer starts immediately upon clicking.
                </p>
              </div>
            </div>
          )}

          {/* STATE 2: RUNNING EXAM */}
          {cbtState === 'running' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Header Bar: Progress & Live Timer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  {sector.aptitudeQuestions[currentQuestionIndex].category && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200">
                      {sector.aptitudeQuestions[currentQuestionIndex].category}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-mono font-bold text-sm">
                    <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
                    <span>Time Left: {formatTimer(timeLeftSeconds)}</span>
                  </div>

                  <button
                    onClick={handleSubmitTest}
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm"
                  >
                    Submit Test
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg font-bold text-gray-900 leading-relaxed">
                  {sector.aptitudeQuestions[currentQuestionIndex].question}
                </p>

                {/* Options List */}
                <div className="space-y-3 pt-2">
                  {sector.aptitudeQuestions[currentQuestionIndex].options.map((optionText, optIdx) => {
                    const isSelected = userAnswers[currentQuestionIndex] === optIdx;
                    const optionLetter = String.fromCharCode(65 + optIdx); // A, B, C, D

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30'
                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {optionLetter}
                        </span>
                        <span className="pt-0.5 leading-relaxed">{optionText}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:pointer-events-none transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Previous
                </button>

                {/* Question Numbers Quick Navigator */}
                <div className="hidden md:flex items-center gap-1.5">
                  {sector.aptitudeQuestions.map((_, idx) => {
                    const isCurrent = idx === currentQuestionIndex;
                    const isAnswered = userAnswers[idx] !== undefined;
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          isCurrent
                            ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                            : isAnswered
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition shadow-sm"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitTest}
                    className="flex items-center gap-1.5 px-6 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm"
                  >
                    <span>Finish & Grade</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STATE 3: COMPLETED RESULTS & DETAILED REVIEW */}
          {cbtState === 'completed' && (
            <div className="space-y-6">
              {/* Scorecard Banner */}
              <div
                className={`rounded-2xl p-6 sm:p-8 border text-center space-y-4 shadow-sm ${
                  scoreResult.passed
                    ? 'bg-gradient-to-br from-emerald-500/10 via-emerald-50 to-white border-emerald-300'
                    : 'bg-gradient-to-br from-amber-500/10 via-amber-50 to-white border-amber-300'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase">
                  {scoreResult.passed ? (
                    <span className="text-emerald-700 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Passed Exam Benchmark
                    </span>
                  ) : (
                    <span className="text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Needs Improvement (Target: 60%+)
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-5xl sm:text-6xl font-black text-gray-900">
                    {scoreResult.percentage}%
                  </span>
                  <p className="text-sm font-bold text-gray-700">
                    You scored {scoreResult.score} out of {totalQuestions} correct
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={startTest}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retake Test
                  </button>

                  <button
                    onClick={() => handleTabChange('interview')}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    Proceed to Interview Prep
                  </button>
                </div>
              </div>

              {/* Detailed Answers Breakdown */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Full Question Review & Step-by-Step Explanations
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    {totalQuestions} questions reviewed
                  </span>
                </div>

                <div className="space-y-6">
                  {sector.aptitudeQuestions.map((q, idx) => {
                    const pickedOption = userAnswers[idx];
                    const isCorrect = pickedOption === q.correctAnswer;
                    const isUnanswered = pickedOption === undefined;

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border space-y-3 ${
                          isCorrect
                            ? 'bg-emerald-50/40 border-emerald-200'
                            : 'bg-red-50/30 border-red-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-xs font-bold text-gray-500">
                            Question #{idx + 1}
                          </span>
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full">
                              <XCircle className="w-3.5 h-3.5" /> {isUnanswered ? 'Unanswered' : 'Incorrect'}
                            </span>
                          )}
                        </div>

                        <p className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed">
                          {q.question}
                        </p>

                        {/* Options comparison */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                          {q.options.map((opt, oIdx) => {
                            const isThisCorrect = oIdx === q.correctAnswer;
                            const isThisPicked = oIdx === pickedOption;

                            let style = 'bg-white border-gray-200 text-gray-700';
                            if (isThisCorrect) {
                              style = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                            } else if (isThisPicked && !isThisCorrect) {
                              style = 'bg-red-100 border-red-400 text-red-900 line-through';
                            }

                            return (
                              <div key={oIdx} className={`p-2.5 rounded-xl border flex items-center gap-2 ${style}`}>
                                <span className="w-5 h-5 rounded-md bg-white/70 flex items-center justify-center font-bold text-[11px] shrink-0">
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation Callout */}
                        <div className="bg-white p-3.5 rounded-xl border border-gray-200 text-xs space-y-1">
                          <strong className="text-gray-900 flex items-center gap-1 font-bold">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            Step-by-Step Explanation:
                          </strong>
                          <p className="text-gray-600 leading-relaxed">{q.explanation}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: TOP INTERVIEW QUESTIONS & MODEL ANSWERS (STAR SCRIPT)              */}
      {/* ========================================================================= */}
      {activeTab === 'interview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2">
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              Frequently Asked Interview Questions in {sector.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Click on each question to review the recruiter's secret intent, red-flag answers that disqualify candidates, and our complete <strong className="text-gray-900 font-bold">STAR Model Script</strong> ready for memorization.
            </p>
          </div>

          {/* Questions Accordion List */}
          <div className="space-y-4">
            {sector.interviewQuestions.map((iq, index) => {
              const isExpanded = expandedInterviewId === iq.id;

              return (
                <div
                  key={iq.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:border-indigo-300"
                >
                  {/* Header / Clickable Toggle */}
                  <button
                    onClick={() => setExpandedInterviewId(isExpanded ? null : iq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                          Question #{index + 1}
                        </span>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            iq.frequency === 'Crucial'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {iq.frequency} Ask Frequency
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                        {iq.question}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0 mt-1">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-gray-100 space-y-6 text-sm">
                      {/* Recruiter Psychology Intent & Red Flags Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-1.5">
                          <span className="text-xs font-bold text-indigo-900 uppercase flex items-center gap-1.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600" />
                            What the Recruiter is Evaluating:
                          </span>
                          <p className="text-xs text-indigo-950 leading-relaxed">
                            {iq.recruiterIntent}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 space-y-1.5">
                          <span className="text-xs font-bold text-rose-900 uppercase flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-rose-600" />
                            Red Flags to Avoid (Immediate Disqualifiers):
                          </span>
                          <ul className="text-xs text-rose-950 space-y-1 list-disc list-inside">
                            {iq.redFlags.map((rf, rfIdx) => (
                              <li key={rfIdx}>{rf}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* STAR Method Model Answer Breakdown */}
                      <div className="space-y-3">
                        <span className="text-xs font-black uppercase tracking-wider text-gray-500">
                          Structured STAR Framework Breakdown:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                            <strong className="text-emerald-700 block font-bold">1. SITUATION</strong>
                            <p className="text-gray-700">{iq.modelAnswer.starBreakdown.situation}</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                            <strong className="text-emerald-700 block font-bold">2. TASK</strong>
                            <p className="text-gray-700">{iq.modelAnswer.starBreakdown.task}</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                            <strong className="text-emerald-700 block font-bold">3. ACTION</strong>
                            <p className="text-gray-700">{iq.modelAnswer.starBreakdown.action}</p>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                            <strong className="text-emerald-700 block font-bold">4. RESULT</strong>
                            <p className="text-gray-700">{iq.modelAnswer.starBreakdown.result}</p>
                          </div>
                        </div>
                      </div>

                      {/* Complete Ready-to-Use Verbal Script */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            Model Word-For-Word Talking Script:
                          </span>
                          <button
                            onClick={() => handleCopyScript(iq.sampleAnswerScript, iq.id)}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition"
                          >
                            {copiedId === iq.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Script</span>
                              </>
                            )}
                          </button>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic border-l-2 border-emerald-400 pl-4 py-1">
                          {iq.sampleAnswerScript}
                        </p>
                      </div>

                      {/* Fresh Graduate Tip & Pro Recruiter Note */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-1 text-xs">
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex-1 space-y-1">
                          <strong className="text-amber-900 block font-bold">For Fresh Graduates:</strong>
                          <p className="text-amber-800">{iq.modelAnswer.freshGraduateTip}</p>
                        </div>
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex-1 space-y-1">
                          <strong className="text-emerald-900 block font-bold">Pro Recruiter Tip:</strong>
                          <p className="text-emerald-800">{iq.proTip}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sector Specific FAQs */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">
          Frequently Asked Questions on {sector.title}
        </h3>
        <div className="space-y-3">
          {combinedFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
              <h4 className="text-sm font-bold text-gray-900">{faq.question}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Other Job Sectors Slider / Grid */}
      <div className="space-y-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Explore Other Job Sectors</h3>
          <Link to="/job-prep" className="text-xs font-bold text-emerald-600 hover:underline">
            View All Sectors &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {JOB_SECTORS.filter((s) => s.id !== sector.id).slice(0, 4).map((s) => (
            <Link
              key={s.id}
              to={`/job-prep/${s.slug}`}
              className="p-3.5 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-md transition text-center space-y-2 group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white mx-auto shadow-sm ${s.themeColor.primary}`}>
                <SectorIcon name={s.iconName} className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-xs text-gray-900 group-hover:text-emerald-600 transition block truncate">
                  {s.shortTitle}
                </strong>
                <span className="text-[10px] text-gray-500 block truncate">
                  {s.aptitudeQuestions.length} CBT • {s.interviewQuestions.length} STAR
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Ad Unit */}
      <AdUnit slot="job-sector-bottom" format="horizontal" />
    </div>
  );
};

export default JobSectorDetail;
