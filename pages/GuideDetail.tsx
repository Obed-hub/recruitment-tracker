import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Shield, Calendar, BookOpen, ExternalLink, HelpCircle, CheckCircle2, AlertTriangle, Search, FileText, Check } from 'lucide-react';
import { getGuideBySlug, GuideArticle } from '../services/mockGuides';
import { subscribeToRecruitments } from '../services/firebase';
import { RecruitmentUpdate } from '../types';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema, HowToSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import ScreeningChecklist from '../components/ScreeningChecklist';
import NextStepInterstitial from '../components/NextStepInterstitial';
import { getDailyUpdatedBadge, getTodayISODate } from '../services/dateUtils';

interface GuideDetailProps {
  slugOverride?: string;
}

const GuideDetail: React.FC<GuideDetailProps> = ({ slugOverride }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = slugOverride || paramSlug;
  const [guide, setGuide] = useState<GuideArticle | null>(null);
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [appNumberInput, setAppNumberInput] = useState('');
  const [validationResult, setValidationResult] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getGuideBySlug(slug).then(data => {
        setGuide(data);
        setLoading(false);
      });
    }

    const unsub = subscribeToRecruitments((data) => {
      setRecruitments(data);
    });
    return () => unsub();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="h-64 bg-gray-200 rounded mt-8"></div>
        </div>
      </div>
    );
  }

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Guide Not Found</h2>
        <Link to="/guides" className="text-military-blue hover:underline mt-4 inline-block">
          Back to Guides Directory
        </Link>
      </div>
    );
  }

  const handleValidateAppNumber = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = appNumberInput.trim().toUpperCase();
    if (!clean) {
      setValidationResult(null);
      return;
    }
    const rriPattern = /^(\d{2,3}RRI)\/([A-Z]{2,3})\/(\d{3,6})$/i;
    const dsscPattern = /^(DSSC|SSC)(\d{1,3})?\/([A-Z0-9\/]+)$/i;

    if (rriPattern.test(clean)) {
      setValidationResult('valid-rri');
    } else if (dsscPattern.test(clean)) {
      setValidationResult('valid-dssc');
    } else if (clean.length >= 6) {
      setValidationResult('custom-format');
    } else {
      setValidationResult('invalid');
    }
  };

  // Find related recruitment openings matching this guide's branch
  const relatedRecruitments = recruitments.filter(
    r => r.branch.toLowerCase() === guide.branch.toLowerCase()
  );

  // Dynamic FAQ for Google indexing
  const faqList = guide.faqs && guide.faqs.length > 0 ? guide.faqs : [
    {
      question: guide.title,
      answer: guide.content.join(' ')
    }
  ];

  const pageTitle = guide.seoTitle || `${guide.title} [2026/2027 Official Guide]`;

  const howToSteps = guide.howToSteps || (guide.slug === 'print-army-screening-slip' ? [
    { name: 'Visit Official Portal', text: 'Open your web browser and visit tracking.armynotification.com.ng.' },
    { name: 'Enter Candidate Credentials', text: 'Enter your registered Application Number (e.g., 87RRI/AD/1234 or DSSC32) or registered email address.' },
    { name: 'Complete Password / Verification', text: 'Enter your password or SMS confirmation code received on your registered phone number.' },
    { name: 'View Enlistment Status', text: 'Check your candidate dashboard to verify if your name is shortlisted for state screening.' },
    { name: 'Download Screening Slip PDF', text: 'Click Print Screening Slip or Download Examination Pass and save the PDF file.' },
    { name: 'Print Clean A4 Copy', text: 'Print the slip on clean white A4 paper ensuring barcode and passport photos are legible.' }
  ] : null);

  const getBranchPracticeSlug = (branch: string) => {
    const b = branch.toLowerCase();
    if (b.includes('navy')) return 'navy';
    if (b.includes('air')) return 'air-force';
    if (b.includes('police')) return 'police';
    if (b.includes('civil') || b.includes('nscdc') || b.includes('immigration')) return 'civil-defence';
    if (b.includes('customs')) return 'customs';
    return 'army';
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Link to="/guides" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Guides & Tutorials
      </Link>

      <SEO
        title={pageTitle}
        description={guide.description}
        canonical={slugOverride ? `/${guide.slug}` : `/guides/${guide.slug}`}
        keywords={[...guide.keywords, 'recruitment guidelines', 'Nigeria recruitment tracker 2026', 'official portal guide']}
      />
      <FAQPageSchema faqs={faqList} />
      <ArticleSchema
        title={guide.title}
        description={guide.description}
        url={`https://recruitmenttracker.com.ng/${slugOverride ? guide.slug : `guides/${guide.slug}`}`}
        datePublished={guide.date}
        dateModified={getTodayISODate()}
        authorName="Nigeria Military & Federal Recruitment Board"
      />
      {howToSteps && (
        <HowToSchema
          name={guide.title}
          description={guide.description}
          steps={howToSteps}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
          <div className="border-b border-gray-100 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold">
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wide">
                {guide.category}
              </span>
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                {getDailyUpdatedBadge()} • Verified Portal Check
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {guide.title}
            </h1>

            {/* Real-time Status Card Badge */}
            {guide.statusBadge && (
              <div className="mt-4 p-3.5 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-slate-700 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-gray-300 font-medium">Portal Status:</span>
                  <span className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
                    {guide.statusBadge}
                  </span>
                </div>
                {guide.officialPortalUrl && (
                  <a
                    href={guide.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition-colors shrink-0"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Anti-Scam Security Notice Banner */}
          {guide.scamNotice && (
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-amber-950 text-xs sm:text-sm leading-relaxed shadow-sm">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">Anti-Scam & Verification Advisory</h4>
                  <p>{guide.scamNotice}</p>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Army Tracking Assistant Widget (Shown for tracking guide) */}
          {guide.slug === 'print-army-screening-slip' && (
            <div className="bg-gradient-to-br from-green-950 via-emerald-900 to-slate-950 text-white rounded-2xl p-6 border border-emerald-700/50 shadow-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                    Official Portal Gateway
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-800/80 text-emerald-200 font-mono">
                  tracking.armynotification.com.ng
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-white mb-2">Check Application & Screening Slip Status</h2>
              <p className="text-xs text-emerald-100/90 mb-5 leading-relaxed">
                Verify your application number format before accessing the server to prevent login lockout.
              </p>

              <form onSubmit={handleValidateAppNumber} className="space-y-3 mb-5">
                <label className="block text-xs font-medium text-emerald-200">
                  Verify Application Number Format (e.g. 87RRI/AD/1234 or DSSC32/2026/001):
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={appNumberInput}
                    onChange={(e) => setAppNumberInput(e.target.value)}
                    placeholder="e.g. 87RRI/AD/1234"
                    className="flex-1 px-3.5 py-2.5 bg-slate-950/80 border border-emerald-700/80 rounded-xl text-white placeholder-gray-400 text-xs font-mono focus:outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Search className="w-3.5 h-3.5" /> Check Format
                  </button>
                </div>

                {validationResult === 'valid-rri' && (
                  <div className="p-3 bg-emerald-950/90 border border-emerald-500/60 rounded-xl text-xs text-emerald-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Valid Regular Recruit Intake (RRI) format. You can proceed to the portal login.</span>
                  </div>
                )}
                {validationResult === 'valid-dssc' && (
                  <div className="p-3 bg-emerald-950/90 border border-emerald-500/60 rounded-xl text-xs text-emerald-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Valid Direct Short Service Commission (DSSC) format. You can proceed to the portal login.</span>
                  </div>
                )}
                {validationResult === 'custom-format' && (
                  <div className="p-3 bg-blue-950/90 border border-blue-500/60 rounded-xl text-xs text-blue-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Format recognized. Ready to connect to official tracking server.</span>
                  </div>
                )}
                {validationResult === 'invalid' && (
                  <div className="p-3 bg-red-950/90 border border-red-500/60 rounded-xl text-xs text-red-200 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Format appears incomplete. Check your registration email/SMS for the exact number.</span>
                  </div>
                )}
              </form>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="https://tracking.armynotification.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" /> Open Official Tracking Portal
                </a>
                <Link
                  to="/past-questions/army"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-emerald-100 font-bold rounded-xl text-xs transition-all border border-slate-700"
                >
                  <BookOpen className="w-4 h-4" /> Practice Army CBT Questions
                </Link>
              </div>
            </div>
          )}

          {/* Quick Structured Data Table if present */}
          {guide.quickTable && (
            <div className="my-6 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <div className="bg-gray-100 px-4 py-2.5 font-bold text-gray-800 text-sm border-b border-gray-200 flex items-center gap-2">
                <FileText className="w-4 h-4 text-military-blue" />
                <span>Quick Summary & Enlistment Parameters</span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-xs sm:text-sm text-gray-700">
                  <thead className="bg-gray-50 text-gray-900 uppercase font-semibold border-b border-gray-200">
                    <tr>
                      {guide.quickTable.headers.map((h, idx) => (
                        <th key={idx} className="px-4 py-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {guide.quickTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <td className="px-4 py-3 font-semibold text-gray-900">{row[0]}</td>
                        <td className="px-4 py-3 text-gray-700">{row[1]}</td>
                        {row[2] && <td className="px-4 py-3 text-gray-700">{row[2]}</td>}
                        {row[3] && <td className="px-4 py-3 text-gray-700">{row[3]}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Article Main Body with Rich Formatting */}
          <article className="prose max-w-none text-gray-700 leading-relaxed space-y-4 text-base">
            {guide.content.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 pt-4 pb-2 border-b border-gray-100">
                    {paragraph.replace(/^## /, '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-bold text-gray-800 pt-2">
                    {paragraph.replace(/^### /, '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('• ')) {
                return (
                  <div key={index} className="flex items-start gap-2.5 my-1.5 pl-2 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-military-green mt-2 shrink-0"></span>
                    <span>{paragraph.substring(2).trim()}</span>
                  </div>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <div key={index} className="flex items-start gap-3 my-2 p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-military-blue text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {paragraph.match(/^\d+/)?.[0]}
                    </span>
                    <span className="text-gray-800">{paragraph.replace(/^\d+\.\s*/, '').trim()}</span>
                  </div>
                );
              }
              return (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* High-Converting Contextual CTAs */}
          <div className="p-5 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl my-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                  Preparing for {guide.branch} Aptitude & CBT Screening?
                </h4>
                <p className="text-xs text-gray-600">
                  Practice timed questions with instant scoring, explanations, and review.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Link
                  to={`/past-questions/${getBranchPracticeSlug(guide.branch)}`}
                  className="px-4 py-2.5 bg-military-green hover:bg-green-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
                >
                  Start Practice Test
                </Link>
                <Link
                  to="/shortlist-hub"
                  className="px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-bold text-xs rounded-xl transition-all"
                >
                  Screening Venues
                </Link>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions Section (PAA Structured) */}
          {guide.faqs && guide.faqs.length > 0 && (
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-military-green" /> Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {guide.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 border border-gray-200/70 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-900 mb-1.5">{faq.question}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ad Unit after content */}
          <AdUnit slot="GUIDE_CONTENT_BOTTOM_AD" />

          {/* Interactive Screening Document Preparation Checklist */}
          {(guide.slug.includes('slip') || guide.slug.includes('screening') || guide.slug.includes('requirement') || guide.slug.includes('height')) && (
            <div id="guide-screening-checklist" className="mt-8">
              <ScreeningChecklist
                branch={guide.title.includes('Army') ? 'Army' : guide.title.includes('Navy') ? 'Navy' : 'Security Forces'}
                title="Screening Verification Checklist (Carry to Venue)"
              />
            </div>
          )}

          {/* Re-circulation Next Step Interstitial */}
          <NextStepInterstitial
            currentBranch={guide.title.includes('Navy') ? 'Navy' : guide.title.includes('Air Force') ? 'Air Force' : guide.title.includes('Police') ? 'Police' : 'Army'}
            cbtSlug={guide.title.includes('Navy') ? 'navy' : guide.title.includes('Air Force') ? 'airforce' : guide.title.includes('Police') ? 'police' : 'army'}
            currentType="guide"
          />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-military-blue" />
              <span>Essential Portal Tools</span>
            </h4>
            <div className="space-y-2.5">
              <Link
                to="/print-army-screening-slip"
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>Print Screening Slip</span>
                <span className="text-emerald-600">Portal</span>
              </Link>
              <Link
                to="/shortlist-hub"
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>State Screening Venues</span>
                <span className="text-military-blue">View</span>
              </Link>
              <Link
                to="/salary-comparison"
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-amber-50 hover:border-amber-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>2026 Salary Comparison</span>
                <span className="text-amber-700">CONAFSS</span>
              </Link>
              <Link
                to="/eligibility"
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-purple-50 hover:border-purple-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>Check Your Eligibility</span>
                <span className="text-purple-700">Checker</span>
              </Link>
            </div>
          </div>

          {/* Related Live Enlistment Openings */}
          {relatedRecruitments.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Active {guide.branch} Enlistments
              </h4>
              <div className="space-y-3">
                {relatedRecruitments.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/recruitments/${rec.id}`}
                    className="block p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        rec.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {rec.status}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono">
                        {rec.deadline_date ? `Deadline: ${new Date(rec.deadline_date).toLocaleDateString()}` : 'Ongoing'}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-gray-900 line-clamp-2">{rec.title}</h5>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Ad Unit in Sidebar */}
          <AdUnit slot="GUIDE_SIDEBAR_AD" />
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
