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
        title="CBT Practice Centre & Aptitude Test Prep"
        description="Prepare for Nigerian recruitment aptitude tests with our free CBT practice questions for various agencies."
        canonicalPath="/practice"
      />
      <div className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">CBT Practice Centre</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Prepare for your recruitment aptitude test with our simulated Computer Based Test (CBT) environment. Select a branch to begin.
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">{opt.label} Practice</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{opt.desc}</p>

              <div className="flex items-center text-xs text-gray-400 mb-6 space-x-4">
                <div className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Flexible</div>
                <div className="flex items-center"><BookOpen className="w-3 h-3 mr-1" /> 10–100 Questions</div>
              </div>

              <Link
                to={`/practice/${opt.branch}`}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why use our Practice Centre?</h2>
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
    </div>
  );
};

export default QuizHub;