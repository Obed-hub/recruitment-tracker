import React from 'react';
import { BrainCircuit, BookOpen, Clock, Award, Shield, CheckCircle2, AlertCircle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Branch, BRANCH_TO_SLUG } from '../types';
import SEO from '../components/SEO';
import { FAQPageSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';

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
        title="Past Question Centre 2026: Free CBT Aptitude Test Practice | Army, Navy, Police, NSCDC"
        description="Prepare for Nigerian military, police, and paramilitary recruitment examinations. Practice real computer-based test (CBT) past questions with instant grading, answers, and time-management tips."
        canonicalUrl="/past-questions"
        keywords={[
          'past question',
          'Nigeria recruitment test',
          'aptitude test practice',
          'Army past questions',
          'Police past questions',
          'nscdc past questions',
          'navy cbt questions',
          'military screening exam practice'
        ]}
      />
      <FAQPageSchema faqs={quizFAQs} />

      <div className="text-center py-10 sm:py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-military-blue text-xs font-semibold mb-4">
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Official 2026 CBT Screening Simulation</span>
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
          <div key={opt.branch} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className={`h-2.5 ${opt.color}`}></div>
              <div className="p-6">
                <div className={`w-11 h-11 rounded-lg ${opt.color} flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform shadow-sm`}>
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">{opt.label} Past Questions</h3>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{opt.desc}</p>

                <div className="flex items-center text-xs text-gray-400 mb-2 space-x-3">
                  <div className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Timed & Untimed</div>
                  <div className="flex items-center"><BookOpen className="w-3 h-3 mr-1" /> 10–100 Qs</div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to={`/past-questions/${BRANCH_TO_SLUG[opt.branch] || opt.branch}`}
                className={`w-full block text-center py-2.5 rounded-lg font-bold text-xs text-white transition-opacity hover:opacity-90 shadow-sm ${opt.color}`}
              >
                Launch Mock CBT Test
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Ad Unit */}
      <div className="my-8">
        <AdUnit slot="QUIZ_HUB_MIDDLE_AD" />
      </div>

      {/* CBT Exam Pattern & Subject Weightings Table */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-military-blue" />
          <span>Standard Exam Pattern & Subject Weightings</span>
        </h2>
        <p className="text-sm text-gray-500 mb-6">Standardized blueprint used in JAMB-facilitated and agency internal computer-based assessments</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-700 bg-gray-50">
                <th className="p-3.5 font-bold">Subject Area</th>
                <th className="p-3.5 font-bold">Weighting</th>
                <th className="p-3.5 font-bold">Key Topics Covered</th>
                <th className="p-3.5 font-bold">Benchmark Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr className="hover:bg-gray-50/50">
                <td className="p-3.5 font-semibold text-gray-900">Current Affairs & Nigerian History</td>
                <td className="p-3.5 font-bold text-emerald-600">40%</td>
                <td className="p-3.5">Nigerian constitution, landmark historical dates, agency leadership, military ranks, ECOWAS/AU</td>
                <td className="p-3.5">30 seconds / question</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-3.5 font-semibold text-gray-900">Use of English & Comprehension</td>
                <td className="p-3.5 font-bold text-blue-600">30%</td>
                <td className="p-3.5">Synonyms, antonyms, sentence completion, idiomatic expressions, short comprehension passage</td>
                <td className="p-3.5">40 seconds / question</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-3.5 font-semibold text-gray-900">Mathematics & Quantitative Logic</td>
                <td className="p-3.5 font-bold text-purple-600">30%</td>
                <td className="p-3.5">Basic algebra, percentages, ratios, probability, series completion, logical syllogisms</td>
                <td className="p-3.5">60 seconds / question</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Preparation Tips Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
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