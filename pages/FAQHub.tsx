import React from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle, Shield, CheckCircle, FileText, BrainCircuit,
  CircleDollarSign, ArrowRight, Share2, Smartphone, Calendar,
  Search, Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { BreadcrumbListSchema } from '../components/StructuredData';
import SearchableFAQSection from '../components/SearchableFAQSection';
import AdUnit from '../components/AdUnit';
import { getDailyUpdatedBadge } from '../services/dateUtils';

export const FAQHub: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 px-4 sm:px-6">
      <SEO
        title="Nigerian Military & Paramilitary Recruitment FAQs 2026: Verified Answers"
        description="Searchable answers to common Nigerian recruitment questions: Navy Batch 39 portal, Army form, Police Constable CBT, CDCFIB slip reprint, height & medical screening, CONAFSS salaries & awaiting results."
        canonical="/faqs"
        keywords={[
          'nigerian military recruitment faq',
          'is army form free',
          'can i apply with awaiting result',
          'navy batch 39 age limit and requirements',
          'how to reprint cdcfib application slip',
          'police constable screening date',
          'reasons for military medical disqualification',
          'military vs police salary conafss conposs',
          'flat feet knock knees army screening'
        ]}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Recruitment Guides', url: '/guides' },
          { name: 'Frequently Asked Questions (FAQ)', url: '/faqs' }
        ]}
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-military-blue to-blue-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950">
              Verified 2026 Answers
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {getDailyUpdatedBadge()}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Recruitment FAQs & Knowledge Base
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Instant, verified answers to common questions on military and paramilitary recruitments in Nigeria. Covering <strong>Navy Batch 39</strong>, <strong>Army 88RRI</strong>, <strong>Police Constable</strong>, <strong>CDCFIB</strong>, medical screening, age limits, height rules, and salary structures.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-white">35+</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-semibold">Verified FAQs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-white">8</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-semibold">Agencies Covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">100%</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-semibold">Free Answers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-white">Daily</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-semibold">Status Updates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fast Action Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to="/eligibility"
          className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-military-blue hover:shadow-md transition-all group flex items-start gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-military-blue flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 group-hover:text-military-blue transition-colors">
              Eligibility Checker
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Check if your age, height, and credentials qualify you to apply.
            </p>
          </div>
        </Link>

        <Link
          to="/past-questions"
          className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-military-blue hover:shadow-md transition-all group flex items-start gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              Free CBT Simulator
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Practice timed past questions for Navy, Police, and Army aptitude tests.
            </p>
          </div>
        </Link>

        <Link
          to="/which-recruitment-form-is-out-now"
          className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-military-blue hover:shadow-md transition-all group flex items-start gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
              Which Form is Out?
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Live status tracker of all currently active recruitment portals in Nigeria.
            </p>
          </div>
        </Link>
      </div>

      {/* Main Searchable FAQ Section */}
      <SearchableFAQSection
        title="Search All Recruitment Questions & Answers"
        subtitle="Type keywords or filter by category to find verified recruitment guidance."
        showSearch={true}
        showCategories={true}
        showPopularSearches={true}
        enableStructuredData={true}
      />

      {/* Mid-Page Ad Unit */}
      <AdUnit slotId="faq-hub-bottom-ad" format="horizontal" />
    </div>
  );
};

export default FAQHub;
