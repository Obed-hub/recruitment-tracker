import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  FileText, ShieldCheck, LogIn, RefreshCw, AlertCircle, CheckCircle2,
  XCircle, ExternalLink, ChevronRight, Printer, Clock, HelpCircle,
  Info, Scale, ArrowRight, ChevronDown, ChevronUp, Share2, Copy, Check
} from 'lucide-react';
import SEO from '../components/SEO';
import { PORTAL_ACTIONS_DATA, ActionType, ACTION_SLUGS } from '../data/portalActionsData';
import AdUnit from '../components/AdUnit';

interface PortalActionPageProps {
  agencyOverride?: string;
  actionOverride?: ActionType;
}

export const PortalActionPage: React.FC<PortalActionPageProps> = ({
  agencyOverride,
  actionOverride
}) => {
  const params = useParams<{ agencySlug?: string; actionType?: string }>();
  
  const agencyKey = agencyOverride || params.agencySlug || 'police';
  const actionKey = (actionOverride || params.actionType || 'confirmation-slip') as ActionType;

  const agencyData = PORTAL_ACTIONS_DATA[agencyKey] || PORTAL_ACTIONS_DATA['police'];
  const actionData = agencyData.actions[actionKey] || agencyData.actions['confirmation-slip'];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Structured Data JSON-LD for Google Sitelinks & HowTo Snippet
  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': actionData.title,
    'description': actionData.metaDescription,
    'step': actionData.stepByStep.map((s, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': s.step,
      'text': s.instruction
    }))
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': actionData.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://recruitmenttracker.com.ng/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': agencyData.shortName,
        'item': `https://recruitmenttracker.com.ng/${agencyData.slug}-recruitment`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': ACTION_SLUGS[actionKey].name,
        'item': typeof window !== 'undefined' ? window.location.href : `https://recruitmenttracker.com.ng/${agencyData.slug}-${actionKey}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      <SEO
        title={actionData.seoTitle}
        description={actionData.metaDescription}
        keywords={[
          `${agencyData.shortName} ${ACTION_SLUGS[actionKey].name.toLowerCase()}`,
          `${agencyData.acronym} recruitment 2026`,
          `${agencyData.shortName} portal login`,
          `${agencyData.shortName} guarantor form pdf`,
          `${agencyData.shortName} confirmation slip reprint`,
          `${agencyData.shortName} update documents`
        ]}
      />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero Header */}
      <div className={`bg-gradient-to-br ${agencyData.themeColor.gradient} text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800`}>
        <div className="max-w-5xl mx-auto">
          {/* Agency Badge & Status */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-md text-xs font-semibold uppercase tracking-wider text-slate-200 border border-white/10">
              {agencyData.branchBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {actionData.statusText}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">
            {actionData.heroHeadline}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed mb-6">
            {actionData.heroSubheadline}
          </p>

          {/* Direct CTA Action Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={actionData.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm shadow-lg hover:shadow-emerald-500/25 transition-all group"
            >
              <span>{actionData.directActionLabel}</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/20 transition-all"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Guide'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sitelinks Action Navigator (Exact Google Sitelinks Navigation) */}
      <div className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 shadow-md">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto no-scrollbar py-2.5 flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 hidden sm:inline">
            {agencyData.acronym} Actions:
          </span>

          {(['confirmation-slip', 'guarantor-form', 'portal-login', 'update-documents'] as ActionType[]).map((type) => {
            const isActive = actionKey === type;
            const targetUrl = `/${agencyData.slug}-${type === 'confirmation-slip' ? 'print-confirmation-slip' : type}`;

            return (
              <Link
                key={type}
                to={targetUrl}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {type === 'confirmation-slip' && <FileText className="w-3.5 h-3.5" />}
                {type === 'guarantor-form' && <ShieldCheck className="w-3.5 h-3.5" />}
                {type === 'portal-login' && <LogIn className="w-3.5 h-3.5" />}
                {type === 'update-documents' && <RefreshCw className="w-3.5 h-3.5" />}
                <span>{ACTION_SLUGS[type].name}</span>
              </Link>
            );
          })}

          <Link
            to={`/${agencyData.slug}-recruitment#faqs`}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Recruitment FAQ</span>
          </Link>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Anti-Scam Verification Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-sm text-slate-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-900 uppercase tracking-wide">
              Official Anti-Fraud & Free Access Guarantee
            </span>
            <p className="text-amber-800 leading-relaxed">
              {actionData.warningNotice}
            </p>
          </div>
        </div>

        {/* Position Zero Quick Answer Summary */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
              <CheckCircle2 className="w-4 h-4" />
            </span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
              Direct Quick Answer & Portal Overview
            </h2>
          </div>

          <p className="text-base text-slate-700 leading-relaxed mb-4">
            To <strong>{ACTION_SLUGS[actionKey].name.toLowerCase()}</strong> for <strong>{agencyData.agencyName}</strong>, 
            candidates must access the authentic official domain at{' '}
            <a
              href={actionData.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold underline hover:text-emerald-800"
            >
              {actionData.officialDomain}
            </a>. 
            All forms, slips, and document correction utilities are 100% free of charge. Ensure your National Identity Number (NIN)
            matches your O-Level educational records exactly to avoid disqualification during physical screening.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">Fee</span>
              <span className="text-sm font-bold text-emerald-600">₦0.00 (100% Free)</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">Official Domain</span>
              <span className="text-sm font-bold text-slate-800 truncate block font-mono">{actionData.officialDomain}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">Identity Auth</span>
              <span className="text-sm font-bold text-slate-800">11-Digit NIN</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">Paper Format</span>
              <span className="text-sm font-bold text-slate-800">A4 Color Print</span>
            </div>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Official Step-by-Step Guide
              </h2>
              <p className="text-xs text-slate-500">
                Follow these numbered instructions in chronological order
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {actionData.stepByStep.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-800">
                    {s.step}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {s.instruction}
                  </p>
                  {s.detail && (
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      💡 <em>{s.detail}</em>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Takes approximately 3 - 5 minutes on desktop or mobile</span>
            </div>

            <a
              href={actionData.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <span>Launch {actionData.officialDomain}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Guarantor Specific Section: Who Can & Cannot Sign */}
        {actionKey === 'guarantor-form' && actionData.eligibleGuarantors && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eligible */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold">Approved & Eligible Guarantors</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {actionData.eligibleGuarantors.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ineligible */}
            <div className="bg-white border border-rose-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-rose-800">
                <XCircle className="w-5 h-5 text-rose-600" />
                <h3 className="text-base font-bold">Strictly Ineligible (Rejection Causes)</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {actionData.ineligibleGuarantors?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Troubleshooting Common Portal Errors */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Common Portal Errors & Instant Solutions
              </h2>
              <p className="text-xs text-slate-500">
                Solutions to 504 timeouts, barcode rendering failures, and NIN mismatches
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {actionData.commonErrors.map((err, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Error: {err.error}</span>
                </div>
                <p className="text-xs text-slate-600">
                  <strong>Cause:</strong> {err.cause}
                </p>
                <p className="text-xs text-emerald-800 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200/70 font-medium">
                  <strong>✅ Solution:</strong> {err.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest 2026 Official Screening Compliance & Credential Verification Kit */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Official Screening Protocol & Document Filing Order (2026)
              </h2>
              <p className="text-xs text-slate-500">
                Mandatory physical requirements enforced at state command screening grounds
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Folder Order */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Mandatory Document Filing Sequence (Plastic File Jacket)</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Screening officers strictly demand your credentials arranged inside a transparent flat plastic file jacket in this precise order:
              </p>
              <ol className="text-xs text-slate-700 space-y-2 list-decimal list-inside font-medium">
                <li><strong className="text-slate-900">3 Printed Copies of Confirmation Slip</strong> with crisp, uncreased barcode.</li>
                <li><strong className="text-slate-900">2 Endorsed Guarantor Forms</strong> with Magistrate / High Court legal seal.</li>
                <li><strong className="text-slate-900">Original Birth Certificate</strong> from National Population Commission (NPC) or sworn Age Declaration.</li>
                <li><strong className="text-slate-900">Certificate of State of Origin</strong> signed and stamped by your Local Government Chairman.</li>
                <li><strong className="text-slate-900">Original WAEC / NECO / NABTEB Statement of Results</strong> (max 2 sittings, 5 credits with English & Maths).</li>
                <li><strong className="text-slate-900">NIN Verification Slip</strong> printed from NIMC with scannable QR code.</li>
                <li><strong className="text-slate-900">8 Recent Passport Photographs</strong> (white background, full face, under 3 months old).</li>
              </ol>
            </div>

            {/* Dress Code & Physical Standards */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Mandatory Screening Dress Code & Physical Metrics</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Failure to comply with strict appearance and biometric standards results in immediate lockout at the venue gates:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Dress Code:</strong> Clean white round-neck T-shirt, plain white running shorts (no cargo pockets or logos), white canvas shoes, and plain white socks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Grooming:</strong> Males must have cleanly shaved neat low haircut, clean-shaven beard. Females must have hair packed neatly or braided backward without colored extensions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Height Standard:</strong> Males not less than 1.68m (Army/Police) or 1.70m (Customs/NDLEA). Females not less than 1.65m.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Zero-Tolerance Disqualifiers:</strong> Tattoos, ritual markings, flat feet, knock-knees, bowlegs, deformed fingers, past surgical fractures, or speech impediments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* In-Content Ad Placeholder */}
        <AdUnit
          slotId="action-guide-mid"
          format="auto"
          className="my-6 min-h-[120px] bg-slate-100/50 rounded-xl"
        />

        {/* Comprehensive Internal Linking Hub: Essential Candidate Tools */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-900/50 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                🔗 Essential Candidate Resources & Cross-Links
              </span>
              <h2 className="text-xl font-bold text-white">
                Prepare for {agencyData.shortName} Recruitment (2026)
              </h2>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 w-fit">
              Official Hub Navigation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Main Agency Hub */}
            <Link
              to={`/${agencyData.slug}-recruitment`}
              className="p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all group block"
            >
              <span className="text-xs font-semibold text-emerald-400 block uppercase tracking-wider mb-1">
                Overview & Portal Status
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                {agencyData.shortName} Recruitment Hub
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Full requirements, intake quotas, dates, and live application updates.
              </p>
            </Link>

            {/* 2. Salary Structure */}
            <Link
              to={`/${agencyData.slug}-salary`}
              className="p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all group block"
            >
              <span className="text-xs font-semibold text-amber-400 block uppercase tracking-wider mb-1">
                2026 Pay Scale
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                {agencyData.shortName} Salary Structure
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Official CONAFSS / CONPASS monthly ranks, allowances, and cadet earnings.
              </p>
            </Link>

            {/* 3. CBT Past Questions */}
            <Link
              to={`/past-questions/${agencyData.slug === 'civil-defence' ? 'nscdc' : agencyData.slug}`}
              className="p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all group block"
            >
              <span className="text-xs font-semibold text-cyan-400 block uppercase tracking-wider mb-1">
                Free CBT Practice
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {agencyData.shortName} CBT Past Questions
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Practice 150+ timed questions in General Knowledge, English, and Maths.
              </p>
            </Link>

            {/* 4. Eligibility Checker */}
            <Link
              to="/eligibility"
              className="p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all group block"
            >
              <span className="text-xs font-semibold text-rose-400 block uppercase tracking-wider mb-1">
                Automated Verification
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                Candidate Eligibility Checker
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Instantly check your age, height, and O-Level qualifications against requirements.
              </p>
            </Link>

            {/* 5. Shortlist & Screening Centers */}
            <Link
              to="/shortlist-hub"
              className="p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all group block"
            >
              <span className="text-xs font-semibold text-purple-400 block uppercase tracking-wider mb-1">
                State Screening Grounds
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                Shortlisted Candidates & Venues
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Verified screening venue addresses across all 36 state commands and FCT.
              </p>
            </Link>

            {/* 6. Avoid Disqualification Guide */}
            <Link
              to="/guides/common-reasons-disqualification-military-physical-screening"
              className="p-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all group block"
            >
              <span className="text-xs font-semibold text-yellow-400 block uppercase tracking-wider mb-1">
                Zero-Rejection Manual
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors">
                Top 10 Disqualification Reasons
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Critical mistakes that disqualify thousands of candidates at the screening camp.
              </p>
            </Link>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500">
                Verified answers for {agencyData.shortName} candidates
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {actionData.faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-3 text-sm font-bold text-slate-800 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cross-Agency Programmatic Mesh (Internal Linking) */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div>
              <h3 className="text-lg font-bold text-white">
                Check Other Military & Paramilitary Actions
              </h3>
              <p className="text-xs text-slate-400">
                Reprint slips, download guarantor forms, and log in to other federal security portals
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
            {Object.values(PORTAL_ACTIONS_DATA).map((ag) => (
              <Link
                key={ag.slug}
                to={`/${ag.slug}-${actionKey === 'confirmation-slip' ? 'print-confirmation-slip' : actionKey}`}
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left transition-colors group block"
              >
                <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors block truncate">
                  {ag.shortName}
                </span>
                <span className="text-[11px] text-slate-400 block pt-0.5 truncate">
                  {ACTION_SLUGS[actionKey].name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortalActionPage;
