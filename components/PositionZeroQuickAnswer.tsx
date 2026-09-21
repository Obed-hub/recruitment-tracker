import React from 'react';
import { CheckCircle2, AlertCircle, ExternalLink, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';

export interface QuickAnswerMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface PositionZeroQuickAnswerProps {
  /** The natural language target query e.g. "Is Nigerian Army 88 RRI Form Out for 2026?" */
  question: string;
  /** Direct, factual, high-authority answer within 40-75 words */
  directAnswer: string;
  /** Current verified status e.g., "Portal Open", "Shortlist Out", "Announced - Not Yet Open", "Closed" */
  statusBadge?: {
    text: string;
    variant?: 'success' | 'warning' | 'danger' | 'info';
  };
  /** 3-4 key bullet metrics (Age, Fee, Portal, Deadline) for tabular featured snippet pickup */
  metrics?: QuickAnswerMetric[];
  /** Official portal link */
  portalUrl?: string;
  portalName?: string;
  /** Verification timestamp */
  lastVerified?: string;
  /** Anti-fraud reminder */
  scamNotice?: string;
}

export const PositionZeroQuickAnswer: React.FC<PositionZeroQuickAnswerProps> = ({
  question,
  directAnswer,
  statusBadge = { text: 'Verified Official Status', variant: 'success' },
  metrics = [],
  portalUrl,
  portalName,
  lastVerified = 'Today (Live Checked)',
  scamNotice,
}) => {
  const [copied, setCopied] = React.useState(false);

  const getBadgeColor = (variant = 'success') => {
    switch (variant) {
      case 'success':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'warning':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'danger':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  const handleCopySummary = () => {
    const textToCopy = `${question}\nQuick Answer: ${directAnswer}\nPortal: ${portalUrl || 'recruitmenttracker.com.ng'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="position-zero-quick-answer"
      aria-label="Quick Answer & Featured Summary"
      className="my-6 rounded-2xl bg-gradient-to-b from-white via-emerald-50/20 to-white border-2 border-emerald-500/80 shadow-md shadow-emerald-500/5 overflow-hidden transition-all"
    >
      {/* Top Header Bar for Google Featured Snippet Parsing */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-200">
            Quick Answer • Position-Zero Fact Sheet
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 border border-emerald-700/50">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            {lastVerified}
          </span>
          <button
            onClick={handleCopySummary}
            title="Copy Quick Answer Summary"
            aria-label="Copy Quick Answer Summary"
            className="inline-flex items-center gap-1 rounded-lg bg-white/10 hover:bg-white/20 px-2 py-0.5 text-[11px] font-medium text-emerald-100 transition-colors"
          >
            {copied ? <Check className="h-3 w-3 text-emerald-300" /> : <Copy className="h-3 w-3" />}
            {copied ? 'Copied' : 'Share'}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Natural Search Intent Target H2 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
          <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
            {question}
          </h2>
          {statusBadge && (
            <span
              className={`self-start sm:self-auto inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${getBadgeColor(
                statusBadge.variant
              )}`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              {statusBadge.text}
            </span>
          )}
        </div>

        {/* 40-75 Word Direct Paragraph Answer Optimized for Google Knowledge Graph / Featured Snippet Box */}
        <p className="text-base text-gray-800 leading-relaxed font-normal bg-gray-50/80 p-4 rounded-xl border border-gray-200/80">
          <strong className="font-semibold text-gray-950">Direct Answer: </strong>
          {directAnswer}
        </p>

        {/* Key Metrics / Snapshot Table for List & Table Snippets */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-left ${
                  metric.highlight
                    ? 'bg-emerald-50/70 border-emerald-200'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-[11px] font-semibold text-gray-700 uppercase tracking-wide">
                  {metric.label}
                </div>
                <div className="text-sm font-bold text-gray-900 mt-0.5 truncate" title={metric.value}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Portal CTAs & Scam Alert */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 text-xs">
          {portalUrl ? (
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm"
            >
              <span>Visit Official Portal ({portalName || portalUrl.replace(/^https?:\/\//, '')})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-gray-500 italic">Official portal updates checked continuously.</span>
          )}

          {scamNotice ? (
            <div className="flex items-center gap-1.5 text-amber-900 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200 text-[11px] font-medium">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span>{scamNotice}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-emerald-800 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Official recruitment is 100% free. Never pay any fee or buy scratch cards.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
