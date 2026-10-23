import React from 'react';
import { Plane, Clock, ArrowRight, FileText, Sparkles, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface AirForceShortlistBannerProps {
  className?: string;
}

export const AirForceShortlistBanner: React.FC<AirForceShortlistBannerProps> = ({
  className = ''
}) => {
  return (
    <section
      aria-label="Nigerian Air Force 2026 Exam Shortlist Breaking Announcement"
      className={`mb-6 rounded-3xl bg-gradient-to-br from-slate-950 via-[#071f3d] to-sky-950 text-white p-5 sm:p-7 shadow-xl border-2 border-sky-400/60 relative overflow-hidden ${className}`}
    >
      {/* Background aerial radar glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-60 h-60 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Top Header Row: Agency Tag + Live Schedule Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/30 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0">
              <Plane className="w-4 h-4 text-sky-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  BREAKING RECRUITMENT ALERT • EXAM: 24 OCT 2026
                </span>
              </div>
              <span className="text-[11px] text-slate-300 font-medium">
                HQ Nigerian Air Force (NAF BMTC 47 General Aptitude Test)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>SHORTLIST RELEASED • SCREENING ACTIVE</span>
            </span>
            <span className="hidden sm:inline-flex text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
              nafrecruitment.airforce.mil.ng
            </span>
          </div>
        </div>

        {/* Main Title & Description in FULL for High CTR & SEO */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
            Nigerian Air Force Exam Shortlist 2026 Out:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-amber-300">
              Check Names, State Screening Centers & CBT Dates
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            The Nigerian Air Force has officially released the list of successful candidates shortlisted for the <strong>2026 Zonal Screening Exercise & Computer-Based Aptitude Tests</strong> nationwide. Check your name, state command screening venue, mandatory dress code, and prepare with verified past questions.
          </p>
        </div>

        {/* Action Gateways: Direct SEO Cross-Links */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-800">
          <Link
            to="/air-force-shortlist"
            title="Check Nigerian Air Force Shortlisted Candidates & State Centers"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md hover:shadow-amber-500/25 shrink-0"
          >
            <CheckCircle2 className="w-4 h-4 text-slate-950" />
            Check Shortlist & State Centers
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://drive.google.com/drive/folders/1cqKwJssriCQb9xiwhdcCbnOuFg-Atf3y?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Nigerian Air Force Shortlist PDF from Google Drive"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md shrink-0 animate-pulse"
          >
            <Download className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            Download PDF (Drive Mirror)
          </a>

          <Link
            to="/past-questions/air-force"
            title="Take Free Nigerian Air Force CBT Practice Exam"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-900/60 hover:bg-sky-800/80 text-sky-200 border border-sky-400/40 font-bold text-xs sm:text-sm transition-all shrink-0"
          >
            <FileText className="w-4 h-4 text-sky-300" />
            Free Air Force CBT Practice
          </Link>

          <Link
            to="/military-screening-guide"
            title="Download Military Screening Survival Guide"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-xs sm:text-sm transition-all shrink-0"
          >
            <Clock className="w-4 h-4 text-amber-400" />
            Screening Checklist & Medical Tips
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AirForceShortlistBanner;
