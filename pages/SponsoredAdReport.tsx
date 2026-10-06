import React, { useState, useEffect } from 'react';
import { 
  Building2, MessageCircle, Eye, TrendingUp, ShieldCheck, 
  Clock, Share2, Printer, CheckCircle2, ArrowUpRight, Copy, Check 
} from 'lucide-react';
import SEO from '../components/SEO';
import { 
  subscribeToSponsoredAd, subscribeToAdMetrics, 
  SponsoredAdConfig, AdMetrics, DEFAULT_SPONSORED_AD 
} from '../services/firebase';

export const SponsoredAdReport: React.FC = () => {
  const [adConfig, setAdConfig] = useState<SponsoredAdConfig>(DEFAULT_SPONSORED_AD);
  const [metrics, setMetrics] = useState<AdMetrics>({ impressions: 0, clicks: 0, placements: {} });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const unsubAd = subscribeToSponsoredAd((data) => {
      if (data) setAdConfig(data);
    });
    const unsubMetrics = subscribeToAdMetrics((data) => {
      if (data) setMetrics(data);
    });

    return () => {
      unsubAd();
      unsubMetrics();
    };
  }, []);

  const ctr = metrics.impressions > 0 
    ? ((metrics.clicks / metrics.impressions) * 100).toFixed(2) 
    : '0.00';

  const handleCopyReportLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const PLACEMENT_LABELS: Record<string, string> = {
    homepage_feed: 'Homepage Main Feed (Top Position)',
    navy_batch_39: 'Nigerian Navy Batch 39 Official Hub',
    which_form_is_out: 'Which Form is Out Now? Live Directory',
    salary_comparison: 'Federal Military & Paramilitary Salary Hub',
    recruitment_detail_army: 'Nigerian Army Recruitment Detail Page',
    recruitment_detail_navy: 'Nigerian Navy Recruitment Detail Page',
    recruitment_detail_police: 'Nigeria Police Recruitment Detail Page',
    recruitment_detail_civil_defence: 'NSCDC Civil Defence Detail Page',
    recruitment_detail_immigration: 'NIS Immigration Detail Page',
    recruitment_detail_customs: 'Customs NCS Detail Page',
    general: 'General Recruitment Pages',
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <SEO 
        title={`Live Ad Campaign Report - ${adConfig.company} | Nigeria Recruitment Tracker`}
        description="Real-time verified impressions, WhatsApp click-throughs, and placement performance report."
        noindex={true}
        canonical="/ad-report"
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Navigation & Share Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Live Verified Client Performance Report
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyReportLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Link Copied!' : 'Copy Shareable Link'}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-black text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Export PDF
            </button>
          </div>
        </div>

        {/* Executive Header Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-800">
                    Sponsored Campaign
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Placement
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  {adConfig.title}
                </h1>
                <p className="text-sm text-slate-300 font-medium">
                  {adConfig.company} • {adConfig.location}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
              <span className="text-[11px] font-bold text-slate-400 uppercase block">Campaign Status</span>
              <span className={`text-sm font-black flex items-center gap-1.5 ${
                adConfig.active ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                <span className={`w-2 h-2 rounded-full ${adConfig.active ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                {adConfig.active ? 'LIVE & ACTIVE SITE-WIDE' : 'PAUSED'}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Target: {adConfig.directUrl}
              </span>
            </div>
          </div>
        </div>

        {/* Real-Time Metric Scorecards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Impressions */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Ad Views (Impressions)
              </span>
              <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <Eye className="w-4 h-4" />
              </span>
            </div>
            <p className="text-3xl font-black text-slate-900">
              {metrics.impressions.toLocaleString()}
            </p>
            <p className="text-[11px] text-slate-400">
              Verified viewable impressions across recruitment pages
            </p>
          </div>

          {/* Clicks / WhatsApp Inquiries */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                WhatsApp Applications
              </span>
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <MessageCircle className="w-4 h-4" />
              </span>
            </div>
            <p className="text-3xl font-black text-emerald-600">
              {metrics.clicks.toLocaleString()}
            </p>
            <p className="text-[11px] text-slate-400">
              Candidates who clicked to message hiring desk directly
            </p>
          </div>

          {/* CTR */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Click-Through Rate (CTR)
              </span>
              <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                <TrendingUp className="w-4 h-4" />
              </span>
            </div>
            <p className="text-3xl font-black text-indigo-600">
              {ctr}%
            </p>
            <p className="text-[11px] text-slate-400">
              Conversion rate from candidate view to WhatsApp action
            </p>
          </div>
        </div>

        {/* Placement Performance Breakdown Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Placement Performance Breakdown
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Exact traffic distribution across portal pages on Nigeria Recruitment Tracker
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
              Real-Time Sync
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase font-bold">
                <tr>
                  <th className="py-3 px-4">Live Placement Location</th>
                  <th className="py-3 px-4 text-center">Audience Views</th>
                  <th className="py-3 px-4 text-center">WhatsApp Leads</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {Object.keys(PLACEMENT_LABELS).map((key) => {
                  const pData = metrics.placements?.[key] || { impressions: 0, clicks: 0 };
                  return (
                    <tr key={key} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{PLACEMENT_LABELS[key]}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-800">
                        {pData.impressions.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-emerald-600">
                        {pData.clicks.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          Active
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verification Note */}
        <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-center text-xs text-slate-500">
          This report is generated dynamically by <strong>Nigeria Military Recruitment Tracker</strong>. All impression and click events are verified in real time without sampling.
        </div>
      </div>
    </div>
  );
};

export default SponsoredAdReport;
