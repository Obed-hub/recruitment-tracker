import React from 'react';
import { ExternalLink, ShieldCheck, Clock, CheckCircle2, BrainCircuit, FileCheck2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FastActionCardProps {
  branch: string;
  title: string;
  portalUrl: string;
  status: 'Open' | 'Closed' | 'Shortlist Out' | 'Upcoming';
  deadlineDate?: string;
  onOpenChecklist?: () => void;
  cbtSlug?: string;
}

export const FastActionCard: React.FC<FastActionCardProps> = ({
  branch,
  title,
  portalUrl,
  status,
  deadlineDate,
  onOpenChecklist,
  cbtSlug
}) => {
  const daysRemaining = (() => {
    if (!deadlineDate) return null;
    const diffTime = new Date(deadlineDate).getTime() - new Date().getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  })();

  const cleanDomain = (() => {
    try {
      const url = new URL(portalUrl);
      return url.hostname;
    } catch {
      return portalUrl;
    }
  })();

  const getStatusBadge = () => {
    switch (status) {
      case 'Open':
        return {
          bg: 'bg-emerald-500 text-white',
          pulse: 'bg-emerald-400',
          text: 'Portal Active & Accepting Applications'
        };
      case 'Shortlist Out':
        return {
          bg: 'bg-blue-600 text-white',
          pulse: 'bg-blue-400',
          text: 'Shortlist PDF Released - Check Centers'
        };
      case 'Closed':
        return {
          bg: 'bg-rose-600 text-white',
          pulse: 'bg-rose-400',
          text: 'Applications Closed - Screening Phase'
        };
      case 'Upcoming':
      default:
        return {
          bg: 'bg-amber-500 text-white',
          pulse: 'bg-amber-400',
          text: 'Announced - Portal Opening Soon'
        };
    }
  };

  const statusInfo = getStatusBadge();

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 text-white rounded-2xl p-5 md:p-6 shadow-xl border border-emerald-500/30 mb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative z-10 space-y-4">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusInfo.pulse}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${statusInfo.pulse}`}></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              {statusInfo.text}
            </span>
          </div>

          {daysRemaining !== null && status === 'Open' && (
            <div className="flex items-center gap-1.5 text-xs bg-gray-800/80 px-2.5 py-1 rounded-full border border-gray-700 text-gray-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {daysRemaining > 0 ? `${daysRemaining} days until deadline` : 'Closing today!'}
              </span>
            </div>
          )}
        </div>

        {/* Center Grid: Verified Official Portal Link & Fast Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Left info */}
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                Official Government Recruitment URL
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-base sm:text-lg font-mono font-bold text-white bg-black/40 px-3 py-1.5 rounded-lg border border-gray-700 select-all">
                {cleanDomain}
              </span>
              <span className="text-[11px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-medium">
                Verified Portal
              </span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
              Access the authentic {branch} portal directly without navigating through unofficial third-party redirect loops or phishing blogs.
            </p>
          </div>

          {/* Right Direct CTAs */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all text-sm group"
            >
              <span>Open Official Portal</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/eligibility"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg text-xs font-semibold border border-gray-700 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Check Eligibility</span>
              </Link>

              {cbtSlug ? (
                <Link
                  to={`/past-questions/${cbtSlug}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-yellow-300 rounded-lg text-xs font-semibold border border-gray-700 transition-colors"
                >
                  <BrainCircuit className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Free CBT Mock</span>
                </Link>
              ) : (
                <Link
                  to="/past-questions"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-yellow-300 rounded-lg text-xs font-semibold border border-gray-700 transition-colors"
                >
                  <BrainCircuit className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Free CBT Mock</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Anti-Scam Bottom Trust Note */}
        <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between gap-3 text-[11px] text-gray-400">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              <strong>Scam Advisory:</strong> Application forms for Nigerian Armed Forces & Paramilitary services are <strong>100% free</strong>.
            </span>
          </div>

          {onOpenChecklist && (
            <button
              onClick={onOpenChecklist}
              className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1 shrink-0 transition-colors"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Screening Checklist</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FastActionCard;
