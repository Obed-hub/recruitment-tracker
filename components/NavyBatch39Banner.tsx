import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ExternalLink, Share2, CheckCircle2, Shield, ArrowRight, Bell, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  phase: 'upcoming' | 'live' | 'closed';
}

const NavyBatch39Banner: React.FC = () => {
  // Official Opening: 2 October 2026 00:00:00 WAT (UTC+1)
  // Official Closing: 31 October 2026 23:59:59 WAT (UTC+1)
  const openDate = new Date('2026-10-02T00:00:00+01:00').getTime();
  const closeDate = new Date('2026-10-31T23:59:59+01:00').getTime();

  const [timeState, setTimeState] = useState<TimeState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    phase: 'upcoming',
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();

      if (now < openDate) {
        // Phase 1: Countdown to Opening
        const diff = openDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeState({ days, hours, minutes, seconds, phase: 'upcoming' });
      } else if (now <= closeDate) {
        // Phase 2: Portal Live - Countdown to Closing
        const diff = closeDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeState({ days, hours, minutes, seconds, phase: 'live' });
      } else {
        // Phase 3: Registration Closed - Screening & Shortlist Stage
        setTimeState({ days: 0, hours: 0, minutes: 0, seconds: 0, phase: 'closed' });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [openDate, closeDate]);

  const SITE_NAVY_BATCH_39_URL = 'https://recruitmenttracker.com.ng/nigerian-navy-recruitment-2026';

  const shareText = encodeURIComponent(
    `🚨 BREAKING: Nigerian Navy Recruitment 2026 (Batch 39) has been officially announced!\n\n` +
    `📅 OPENS: 2 October 2026\n` +
    `📅 CLOSES: 31 October 2026\n` +
    `🌐 OFFICIAL PORTAL: www.joinnigeriannavy.gov.ng\n\n` +
    `Available Categories:\n` +
    `1. Seaman / Naval Ratings\n` +
    `2. Non-Commissioned Officers (NCOs)\n` +
    `3. Commissioned Officers\n\n` +
    `Check full requirements, age limit & application guide on Recruitment Tracker:\n` +
    `${SITE_NAVY_BATCH_39_URL}`
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `Nigerian Navy Recruitment 2026 Batch 39 opens 2 October 2026 at www.joinnigeriannavy.gov.ng. Check full guide: ${SITE_NAVY_BATCH_39_URL}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div id="navy-batch-39-hero" className="mb-8 rounded-2xl bg-gradient-to-br from-[#071325] via-[#0b203e] to-[#040c17] text-white p-5 sm:p-7 shadow-xl border-2 border-amber-400/40 relative overflow-hidden">
      {/* Decorative background anchor/watermark */}
      <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-white select-none">
        <Shield className="w-80 h-80" />
      </div>

      {/* Top Tag & Alert Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full uppercase tracking-wider animate-pulse shadow-md">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Official Notice
          </span>
          <span className="px-2.5 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold rounded-full">
            Batch 39 • 2026 Enlistment
          </span>
        </div>
        <div className="text-xs text-slate-300 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-blue-400" />
          <span>Service • Discipline • Excellence</span>
        </div>
      </div>

      {/* Main Title & Flyer Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
            Nigerian Navy Recruitment 2026 <span className="text-amber-400">Batch 39</span>
          </h2>
          <p className="text-sm text-slate-200 mb-4 leading-relaxed">
            The Naval Headquarters has officially scheduled the 2026 Batch 39 enlistment exercise. Applications are submitted exclusively online at <strong className="text-amber-300 font-mono">www.joinnigeriannavy.gov.ng</strong>.
          </p>

          {/* Quick Key Dates Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                Portal Opens
              </span>
              <span className="text-sm font-extrabold text-white flex items-center justify-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" /> 2 Oct 2026
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-red-400 block">
                Closing Date
              </span>
              <span className="text-sm font-extrabold text-white flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-red-400" /> 31 Oct 2026
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">
                Application Fee
              </span>
              <span className="text-sm font-extrabold text-white mt-0.5 block">
                100% Free (₦0.00)
              </span>
            </div>
          </div>

          {/* Available Cadres (from official flyer) */}
          <div className="bg-blue-950/60 border border-blue-500/20 rounded-xl p-3 mb-5">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wide block mb-1.5">
              Available Recruitment Categories:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Seaman / Naval Ratings</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Non-Commissioned Officers (NCOs)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Commissioned Officers</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/nigerian-navy-recruitment-2026"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-amber-400/20"
            >
              Full Requirements & Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/past-questions?branch=Navy"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              Practice Navy CBT Questions
            </Link>
            <a
              href="https://www.joinnigeriannavy.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-blue-600/50 hover:bg-blue-600 border border-blue-400/40 text-blue-200 hover:text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              Official Portal <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Live Countdown & Viral Sharing Sidecard */}
        <div className="lg:col-span-5 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
              {timeState.phase === 'upcoming' && 'LIVE OPENING COUNTDOWN'}
              {timeState.phase === 'live' && 'PORTAL IS LIVE • CLOSING COUNTDOWN'}
              {timeState.phase === 'closed' && 'REGISTRATION CLOSED • SHORTLIST STAGE'}
            </span>
            <p className="text-xs text-slate-300">
              {timeState.phase === 'upcoming' && 'Countdown to Portal Launch (Opens 2 October 2026)'}
              {timeState.phase === 'live' && 'Applications Active. Closing deadline: 31 October 2026.'}
              {timeState.phase === 'closed' && 'Portal closed. Nigerian Navy screening & shortlist underway.'}
            </p>
          </div>

          {/* Countdown Clock Display or Closed Status Card */}
          {timeState.phase !== 'closed' ? (
            <div className="grid grid-cols-4 gap-2 mb-5">
              <div className="bg-slate-950/80 border border-amber-400/30 rounded-xl p-2.5 text-center">
                <span className="text-xl sm:text-2xl font-black text-white font-mono block">
                  {String(timeState.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">Days</span>
              </div>
              <div className="bg-slate-950/80 border border-amber-400/30 rounded-xl p-2.5 text-center">
                <span className="text-xl sm:text-2xl font-black text-white font-mono block">
                  {String(timeState.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">Hours</span>
              </div>
              <div className="bg-slate-950/80 border border-amber-400/30 rounded-xl p-2.5 text-center">
                <span className="text-xl sm:text-2xl font-black text-white font-mono block">
                  {String(timeState.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">Mins</span>
              </div>
              <div className="bg-slate-950/80 border border-amber-400/30 rounded-xl p-2.5 text-center">
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono block animate-pulse">
                  {String(timeState.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">Secs</span>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-slate-950/80 border border-emerald-400/30 rounded-xl text-center mb-5 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-400/30">
                <CheckCircle2 className="w-3.5 h-3.5" /> Shortlists In Progress
              </div>
              <p className="text-xs text-slate-300">
                Candidates who applied can check state screening timetables and verified PDF lists.
              </p>
              <Link
                to="/shortlist-hub"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-lg text-xs transition-colors"
              >
                View Shortlists & Screening Venues <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Scam Warning & Anti-Fraud Notice */}
          <div className="flex items-start gap-2 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-[11px] text-amber-200 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Do not pay anyone:</strong> Nigerian Navy form is 100% free. Any agent or website demanding scratch cards or money is a scam.
            </span>
          </div>

          {/* Viral WhatsApp Share Buttons */}
          <div className="space-y-2">
            <a
              href={`https://api.whatsapp.com/send?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Share2 className="w-4 h-4" /> Share Navy Batch 39 on WhatsApp
            </a>
            <button
              onClick={handleCopyLink}
              className="w-full py-2 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? '✓ Link & Details Copied to Clipboard!' : 'Copy Announcement Link'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavyBatch39Banner;
