import React, { useState, useEffect } from 'react';
import {
  Anchor, Clock, ArrowRight, FileText, Sparkles, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavyBatch39BannerProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export const NavyBatch39Banner: React.FC<NavyBatch39BannerProps> = ({
  variant = 'full',
  className = ''
}) => {
  // Official Opening: 2 October 2026 00:00:00 WAT (UTC+1)
  const openDate = new Date('2026-10-02T00:00:00+01:00').getTime();
  const closeDate = new Date('2026-10-31T23:59:59+01:00').getTime();

  const [phase, setPhase] = useState<'upcoming' | 'live' | 'closed'>('upcoming');
  const [countdownText, setCountdownText] = useState<string>('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();

      if (now < openDate) {
        const diff = openDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setPhase('upcoming');
        setCountdownText(days > 0 ? `${days}d ${hours}h left until portal opens` : `${hours}h left until portal opens`);
      } else if (now <= closeDate) {
        const diff = closeDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setPhase('live');
        setCountdownText(`Portal LIVE (${days} days remaining to apply)`);
      } else {
        setPhase('closed');
        setCountdownText('Application Closed • Screening in Progress');
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, [openDate, closeDate]);

  // Full SEO Showcase (Default)
  return (
    <section
      aria-label="Nigerian Navy Batch 39 Recruitment 2026 Official Portal Notice"
      className={`mb-6 rounded-3xl bg-gradient-to-br from-slate-950 via-[#071936] to-slate-900 text-white p-5 sm:p-7 shadow-xl border-2 border-amber-400/50 relative overflow-hidden ${className}`}
    >
      {/* Background nautical blur glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Top Header Row: Agency Tag + Live Schedule Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/40 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0">
              <Anchor className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 block">
                Official Enlistment Notice • 2026/2027 Intake
              </span>
              <span className="text-[11px] text-slate-300 font-medium">
                Nigerian Navy Basic Training School (NNBTS Batch 39)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{countdownText || '2 Oct – 31 Oct 2026'}</span>
            </span>
            <span className="hidden sm:inline-flex text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
              joinnigeriannavy.com
            </span>
          </div>
        </div>

        {/* Main Title & Description in FULL for SEO */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
            Nigerian Navy Recruitment 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">NNBTS Batch 39</span> Application Portal Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            The Nigerian Navy has announced the commencement of online registration for the <strong>Nigerian Navy Basic Training School (NNBTS) Batch 39 Recruitment</strong>. Eligible Nigerian male and female candidates can apply online across Non-Tradesmen and Tradesmen cadres. Registration is strictly free of charge.
          </p>
        </div>

        {/* Action Gateways: Direct SEO Cross-Links */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-800">
          <Link
            to="/nigerian-navy-recruitment-2026"
            title="Complete Nigerian Navy Batch 39 Recruitment 2026 Portal Guide"
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-1.5 group"
          >
            <span>Read Full Batch 39 Requirements & Portal Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/how-to-apply-nigerian-navy-batch"
            title="Step-by-step How to Apply on Nigerian Navy Portal"
            className="px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Step-by-Step Portal Guide</span>
          </Link>

          <Link
            to="/past-questions/navy"
            title="Practice Nigerian Navy Past Questions"
            className="px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Navy CBT Past Questions</span>
          </Link>

          <Link
            to="/navy-salary"
            title="Nigerian Navy Salary Scale 2026"
            className="px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <span>Navy Salary (CONAFSS)</span>
          </Link>

          <a
            href="https://joinnigeriannavy.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Official Nigerian Navy Application Portal"
            className="px-3.5 py-2.5 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white font-semibold text-xs rounded-xl border border-blue-500/40 transition-colors flex items-center gap-1 ml-auto"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavyBatch39Banner;
