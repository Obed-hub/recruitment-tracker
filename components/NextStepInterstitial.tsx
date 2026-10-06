import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, CheckCircle2, ArrowRight, Shield, Award, Sparkles, BookOpen, Clock } from 'lucide-react';

interface NextStepInterstitialProps {
  currentBranch?: string;
  cbtSlug?: string;
  currentType?: 'recruitment' | 'guide' | 'blog';
}

export const NextStepInterstitial: React.FC<NextStepInterstitialProps> = ({
  currentBranch = 'Army',
  cbtSlug = 'army',
  currentType = 'recruitment'
}) => {
  // Quick mini-eligibility calculator state
  const [age, setAge] = useState<number>(21);
  const [height, setHeight] = useState<'adequate' | 'borderline' | 'short'>('adequate');
  const [olevel, setOlevel] = useState<'valid' | 'invalid'>('valid');

  const getMiniStatus = () => {
    if (olevel === 'invalid') {
      return {
        qualified: false,
        text: 'WAEC Requirement Incomplete (Needs 5 credits including English & Math)',
        color: 'text-rose-600 bg-rose-50 border-rose-200'
      };
    }
    if (height === 'short') {
      return {
        qualified: false,
        text: 'Below standard minimum height (1.65m male / 1.62m female)',
        color: 'text-amber-600 bg-amber-50 border-amber-200'
      };
    }
    if (age <= 22) {
      return {
        qualified: true,
        text: 'Highly Qualified: Eligible for Non-Tradesmen & Regular Enlistment',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300'
      };
    }
    if (age <= 26) {
      return {
        qualified: true,
        text: 'Qualified: Eligible for Tradesmen, Specialists & Police Constable',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300'
      };
    }
    if (age <= 30) {
      return {
        qualified: true,
        text: 'Qualified for Direct Short Service Commission (DSSC) & Officer Entry',
        color: 'text-blue-700 bg-blue-50 border-blue-300'
      };
    }
    return {
      qualified: false,
      text: 'Exceeds standard entry age limit (Check special civilian roles)',
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    };
  };

  const miniResult = getMiniStatus();

  return (
    <div className="my-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-military-green via-green-900 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-green-300">
              Candidate Success Hub
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">Recommended Next Steps for Candidates</h3>
          <p className="text-xs text-green-100 mt-1 max-w-xl">
            Don't leave without confirming your qualification and testing your aptitude score for the upcoming screening.
          </p>
        </div>

        <Link
          to={`/past-questions/${cbtSlug}`}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-md group"
        >
          <BrainCircuit className="w-4 h-4" />
          <span>Launch 5-Min CBT Mock Test</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Quick In-Page Eligibility Mini-Check */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Quick Eligibility Mini-Check
            </h4>
            <span className="text-[11px] text-gray-500">Instant Screening Preview</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Age Selector */}
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Age:</label>
              <select
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full text-xs font-semibold bg-white border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              >
                {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32].map((a) => (
                  <option key={a} value={a}>{a} years old</option>
                ))}
              </select>
            </div>

            {/* Height Selector */}
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Height:</label>
              <select
                value={height}
                onChange={(e) => setHeight(e.target.value as any)}
                className="w-full text-xs font-semibold bg-white border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="adequate">1.68m+ (Standard Male/Female)</option>
                <option value="borderline">1.63m - 1.67m (Borderline)</option>
                <option value="short">Below 1.62m (Under height)</option>
              </select>
            </div>

            {/* O-Level Selector */}
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
              <label className="block text-xs font-bold text-gray-700 mb-1">O'Level Credits:</label>
              <select
                value={olevel}
                onChange={(e) => setOlevel(e.target.value as any)}
                className="w-full text-xs font-semibold bg-white border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="valid">5+ Credits with Eng & Math</option>
                <option value="invalid">Less than 5 credits</option>
              </select>
            </div>
          </div>

          {/* Quick Result Badge */}
          <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${miniResult.color}`}>
            <div className="text-xs font-bold leading-tight">
              {miniResult.text}
            </div>
            <Link
              to="/eligibility"
              className="shrink-0 text-xs font-extrabold underline flex items-center gap-1 hover:opacity-80"
            >
              Full Calculator <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Right Column: High-Traffic Recommended Links */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-military-blue" />
            Essential Screening Resources
          </h4>

          <div className="space-y-2.5">
            <Link
              to={`/past-questions/${cbtSlug}`}
              className="flex items-center justify-between p-3 rounded-xl bg-indigo-50/70 hover:bg-indigo-100/80 border border-indigo-100 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-950 group-hover:text-indigo-800">
                    {currentBranch} CBT Past Questions & Answers
                  </div>
                  <div className="text-[10px] text-indigo-600">20 Timed Practice Questions</div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/guides/print-army-screening-slip"
              className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-100 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-950 group-hover:text-emerald-800">
                    tracking.armynotification.com.ng Guide
                  </div>
                  <div className="text-[10px] text-emerald-700">Check shortlist & reprint screening slip</div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/blog/top-10-high-paying-agencies-nigeria"
              className="flex items-center justify-between p-3 rounded-xl bg-amber-50/70 hover:bg-amber-100/80 border border-amber-100 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-950 group-hover:text-amber-800">
                    Top 10 High-Paying Federal Agencies
                  </div>
                  <div className="text-[10px] text-amber-700">Official monthly salaries and allowances</div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepInterstitial;
