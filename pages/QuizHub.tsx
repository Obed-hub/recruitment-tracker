import React from 'react';
import { BrainCircuit, BookOpen, Clock, Award, Shield, CheckCircle2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Branch, BRANCH_TO_SLUG } from '../types';
import SEO from '../components/SEO';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import { getDailyUpdatedBadge } from '../services/dateUtils';
import AdUnit from '../components/AdUnit';
import MilitaryScreeningAdCreative from '../components/MilitaryScreeningAdCreative';

const QuizHub: React.FC = () => {
  const practiceOptions: { branch: Branch | 'General', label: string, desc: string, color: string }[] = [
    { branch: 'Army', label: 'Nigerian Army', desc: 'Current Affairs, Logic, and Army History', color: 'bg-military-green' },
    { branch: 'Navy', label: 'Nigerian Navy', desc: 'Current Affairs, Maritime knowledge and General Studies', color: 'bg-military-blue' },
    { branch: 'Air Force', label: 'Air Force', desc: 'Current Affairs, Aircraft knowledge and General Studies', color: 'bg-sky-600' },
    { branch: 'NDA', label: 'NDA Entrance', desc: 'Maths, English, Current Affairs & General Knowledge', color: 'bg-yellow-600' },
    { branch: 'Police', label: 'Police Force', desc: 'Current Affairs, Legal basics and General Knowledge', color: 'bg-blue-600' },
    { branch: 'Civil Defence', label: 'NSCDC', desc: 'Current Affairs, Civil protection and General Studies', color: 'bg-red-700' },
    { branch: 'Immigration', label: 'Immigration', desc: 'Current Affairs, NIS policies and Passport regulations', color: 'bg-emerald-700' },
    { branch: 'Customs', label: 'Customs', desc: 'Current Affairs, Import/Export rules and NCS duties', color: 'bg-slate-700' },
    { branch: 'FRSC', label: 'FRSC', desc: 'Current Affairs, Road signs, Highway Code, and Safety', color: 'bg-red-500' },
    { branch: 'Fire Service', label: 'Fire Service', desc: 'Current Affairs, Fire safety and Emergency response', color: 'bg-orange-600' },
    { branch: 'NDLEA', label: 'NDLEA', desc: 'Current Affairs, Drug laws, and NDLEA history', color: 'bg-emerald-800' },
    { branch: 'General', label: 'General Knowledge', desc: 'Mixed questions from all sectors including Current Affairs', color: 'bg-gray-700' },
  ];

  const quizFAQs = [
    {
      question: "Where can I get free Nigerian military & paramilitary past questions?",
      answer: "Our Past Question Centre provides 100% free computer-based test (CBT) practice questions and answers for Nigerian Army, Navy, Air Force, Police, Civil Defence, Immigration, Customs, and FRSC screening examinations."
    },
    {
      question: "What subjects are tested in Nigerian recruitment aptitude tests?",
      answer: "Standard CBT screening examinations cover: (1) Use of English & Comprehension (30%), (2) General Knowledge & Current Affairs (40%), (3) Mathematics & Quantitative Logic (30%), and agency-specific technical questions."
    },
    {
      question: "What is the pass mark for Nigerian military and police CBT screening exams?",
      answer: "While cut-off marks vary based on state quotas and applicant volume, achieving 60% or higher is generally required to secure a place on the shortlisted candidate interview list."
    },
    {
      question: "How much time is given per question in recruitment CBT exams?",
      answer: "Most recruitment examinations (administered via JAMB CBT centers or specialized test providers) allow between 30 to 45 seconds per question (e.g. 50 to 100 questions within 45 to 60 minutes)."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SEO
        title="Recruitment Past Questions & CBT Exam Practice 2026/2027 [Free Mock Tests & Answers]"
        description="Prepare for Nigerian military, police, and paramilitary recruitment examinations. Practice real computer-based test (CBT) past questions with instant grading, answers, and time-management tips."
        canonicalUrl="/past-questions"
        keywords={[
          'recruitment past questions',
          'Nigeria military CBT practice',
          'police exam questions and answers',
          'army aptitude test questions',
          'free recruitment mock exam',
          'nscdc past questions',
          'navy cbt questions',
          'military screening exam practice'
        ]}
      />
      <FAQPageSchema faqs={quizFAQs} />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Past Questions & CBT Practice', url: '/past-questions' }
        ]}
      />

      <div className="text-center py-10 sm:py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
          <span>{getDailyUpdatedBadge()} • Official 2026 CBT Screening Simulation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Recruitment Past Question CBT Centre
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Master your computer-based screening test with simulated mock examinations. Practice real past questions from previous Nigerian Army, Navy, Air Force, Police, and paramilitary recruitment cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {practiceOptions.map((opt) => (
          <div
            key={opt.branch}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 overflow-hidden flex flex-col justify-between"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm ${opt.color}`}>
                  {opt.label.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">{opt.label}</h2>
                  <span className="text-xs text-gray-400 font-medium">Standard Screening Pool</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {opt.desc}
              </p>
            </div>
            
            <div className="p-6 pt-0 mt-auto">
              <Link
                to={opt.branch === 'General' ? '/quiz/general' : `/quiz/${BRANCH_TO_SLUG[opt.branch as Branch]}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-black transition-colors"
              >
                <span>Start Practice Quiz</span>
                <BrainCircuit className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <AdUnit slot="quiz-hub-ad" format="auto" />
      </div>

      {/* 🎖️ High-Converting Military & Paramilitary Screening Elimination Native Ad */}
      <MilitaryScreeningAdCreative format="native-card" className="mb-12" />

      {/* Guide Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-military-blue" />
          <span>Aptitude Test Preparation Strategy</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1. Master Current Affairs</span>
            </h4>
            <p className="text-xs leading-relaxed">
              Recruitment screening heavily features questions on national governance, agency mandates, and security leaders. Review our dedicated guide articles before attempting quizzes.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>2. Speed & Pacing</span>
            </h4>
            <p className="text-xs leading-relaxed">
              CBT tests permit ~40 seconds per question. Begin with untimed practice to understand answer explanations, then switch to timed simulation mode to build real test resilience.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>3. Agency Knowledge</span>
            </h4>
            <p className="text-xs leading-relaxed">
              Each agency tests specialty lore (e.g., Nigerian Navy tests maritime coordinates and ship categories; Air Force tests aircraft classifications; Customs tests tariff codes).
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {quizFAQs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
              <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizHub;