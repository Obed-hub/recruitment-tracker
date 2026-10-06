import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, X, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

interface StickyRecommendedBarProps {
  branch?: string;
  cbtSlug?: string;
}

export const StickyRecommendedBar: React.FC<StickyRecommendedBarProps> = ({
  branch = 'Army',
  cbtSlug = 'army'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('sticky_cta_dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('sticky_cta_dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:right-6 sm:max-w-md z-40 animate-fade-in-up print:hidden">
      <div className="bg-gradient-to-r from-slate-950 via-gray-900 to-slate-900 text-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-emerald-500/40 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-md">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-white truncate">
              Preparing for {branch} Screening?
            </div>
            <p className="text-[11px] text-gray-300 truncate">
              Test your score with real 2026 CBT questions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to={`/past-questions/${cbtSlug}`}
            className="px-3.5 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1 group"
          >
            <span>Practice</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={handleDismiss}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Dismiss"
            aria-label="Dismiss recommendation"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyRecommendedBar;
