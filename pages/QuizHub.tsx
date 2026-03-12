import React from 'react';
import { BrainCircuit, BookOpen, Clock, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Branch } from '../types';
import SEO from '../components/SEO';

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
    { branch: 'General', label: 'General Knowledge', desc: 'Mixed questions from all sectors including Current Affairs', color: 'bg-gray-700' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <SEO
        title="Past Question Centre - Nigeria Recruitment Preparation"
        description="Prepare for Nigerian recruitment aptitude tests with our professional Past Question CBT tests. Practice with real exam questions from Army, Navy, Police, and more."
        canonical="/past-questions"
        keywords={['past question', 'Nigeria recruitment test', 'aptitude test practice', 'Army past questions', 'Police past questions']}
      />
      <div className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Past Question Centre</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Prepare for your recruitment aptitude test with our simulated Computer Based Test (CBT) environment. We provide real past questions from previous recruitment exercises to help you understand the pattern, timing, and difficulty level of the official exams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {practiceOptions.map((opt) => (
          <div key={opt.branch} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
            <div className={`h-3 ${opt.color}`}></div>
            <div className="p-8">
              <div className={`w-12 h-12 rounded-lg ${opt.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{opt.label} Past Question</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{opt.desc}</p>

              <div className="flex items-center text-xs text-gray-400 mb-6 space-x-4">
                <div className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Flexible</div>
                <div className="flex items-center"><BookOpen className="w-3 h-3 mr-1" /> 10–100 Questions</div>
              </div>

              <Link
                to={`/past-questions/${opt.branch}`}
                className={`w-full block text-center py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 ${opt.color}`}
              >
                Start Test
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-indigo-50 rounded-2xl p-8 lg:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why use our Past Questions Centre?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-indigo-200 p-1 rounded mr-3 mt-1"><BrainCircuit className="w-4 h-4 text-indigo-700" /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Exam Simulation</h4>
                  <p className="text-sm text-gray-600">Get familiar with the CBT interface used in actual recruitment screenings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-200 p-1 rounded mr-3 mt-1"><Award className="w-4 h-4 text-indigo-700" /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Instant Scoring</h4>
                  <p className="text-sm text-gray-600">See your results immediately and review correct answers to learn from mistakes.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md rotate-3 border border-indigo-100 max-w-xs">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                <span className="text-xs font-bold text-gray-500">SCORE REPORT</span>
                <span className="text-green-600 font-bold text-sm">PASSED</span>
              </div>
              <div className="text-center py-4">
                <div className="text-5xl font-extrabold text-indigo-900">85%</div>
                <p className="text-sm text-gray-500 mt-2">Excellent performance!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Preparation Tips Section */}
      <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-military-blue" />
          Aptitude Test Preparation Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-1">1. Master Current Affairs</h4>
              <p>Nigerian recruitment tests heavily feature questions on Nigerian history, geography, and current political leadership. Stay updated with national news.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-1">2. Practice Speed & Accuracy</h4>
              <p>Most CBT exams give about 30-45 seconds per question. Use our untimed mode first to learn, then try to finish within 30 minutes to simulate real pressure.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-1">3. Know Your Branch</h4>
              <p>Each agency has specific roles. The Navy often asks about maritime boundaries, while the Air Force might ask about aircraft types and ranks.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-1">4. Review and Relax</h4>
              <p>After each test, use our "Review Answers" feature. Understanding why you missed a question is more valuable than just getting a high score.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHub;