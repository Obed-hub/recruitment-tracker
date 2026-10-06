import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Clock, Shield, Calendar, BookOpen, ExternalLink,
  HelpCircle, AlertTriangle, CheckCircle2, ChevronRight, Award,
  Sparkles, Layers, Search, FileText, Check
} from 'lucide-react';
import { getGuideBySlug, GuideArticle } from '../services/mockGuides';
import { subscribeToRecruitments } from '../services/firebase';
import { RecruitmentUpdate } from '../types';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema, HowToSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import ScreeningChecklist from '../components/ScreeningChecklist';
import NextStepInterstitial from '../components/NextStepInterstitial';
import { PositionZeroQuickAnswer } from '../components/PositionZeroQuickAnswer';
import { getDailyUpdatedBadge, getTodayISODate } from '../services/dateUtils';
import MilitaryScreeningAdCreative from '../components/MilitaryScreeningAdCreative';

interface GuideDetailProps {
  slugOverride?: string;
}

const GuideDetail: React.FC<GuideDetailProps> = ({ slugOverride }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = slugOverride || paramSlug;
  const [guide, setGuide] = useState<GuideArticle | null>(null);
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

  const relatedRecruitments = recruitments.filter(
    r => r.branch.toLowerCase() === guide.branch.toLowerCase()
  );

  const faqList = guide.faqs && guide.faqs.length > 0 ? guide.faqs : [
    {
      question: guide.title,
      answer: guide.description
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

  const actionBase = (() => {
    const text = (guide.branch + ' ' + guide.title + ' ' + guide.slug).toLowerCase();
    if (text.includes('police')) return 'police';
    if (text.includes('army')) return 'army';
    if (text.includes('navy')) return 'navy';
    if (text.includes('civil') || text.includes('nscdc') || text.includes('cdcfib')) return 'civil-defence';
    if (text.includes('immigration') || text.includes('nis')) return 'immigration';
    if (text.includes('customs')) return 'customs';
    return null;
  })();

  const agencySalaryUrl = (() => {
    if (!actionBase) return '/salary-comparison';
    if (actionBase === 'army') return '/army-salary';
    if (actionBase === 'police') return '/police-salary';
    if (actionBase === 'customs') return '/customs-salary';
    if (actionBase === 'navy') return '/navy-salary';
    if (actionBase === 'civil-defence') return '/civil-defence-salary';
    if (actionBase === 'immigration') return '/immigration-salary';
    return '/salary-comparison';
  })();

  const agencyHubUrl = (() => {
    if (!actionBase) return '/recruitments';
    if (actionBase === 'navy') return '/navy-recruitment';
    if (actionBase === 'civil-defence') return '/civil-defence-recruitment';
    if (actionBase === 'immigration') return '/immigration-recruitment';
    return `/${actionBase}-recruitment`;
  })();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <Link to="/guides" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Guides & Tutorials
      </Link>

      <SEO
        title={pageTitle}
        description={guide.description}
        canonicalUrl={slugOverride ? `/${guide.slug}` : `/guides/${guide.slug}`}
        keywords={[...guide.keywords, 'recruitment guidelines', 'Nigeria recruitment tracker 2026', 'official portal guide']}
      />

      <FAQPageSchema faqs={faqList} />
      <ArticleSchema
        title={guide.title}
        description={guide.description}
        url={`https://recruitmenttracker.com.ng/${slugOverride ? guide.slug : `guides/${guide.slug}`}`}
        publishedAt={guide.date}
        updatedAt={getTodayISODate()}
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
              <span>•</span>
              <span className="text-military-blue font-bold">Branch: {guide.branch}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {guide.title}
            </h1>

            {/* Position-Zero "Quick Answer" Box (Top 100 Words) for Google Featured Snippets */}
            {guide.quickAnswer ? (
              <PositionZeroQuickAnswer
                question={guide.quickAnswer.question}
                directAnswer={guide.quickAnswer.directAnswer}
                statusBadge={{
                  text: guide.quickAnswer.statusText,
                  variant: guide.quickAnswer.statusVariant || 'success'
                }}
                metrics={guide.quickAnswer.metrics}
                portalUrl={guide.officialPortalUrl}
                lastVerified={getDailyUpdatedBadge(false)}
                scamNotice={guide.scamNotice}
              />
            ) : (
              <PositionZeroQuickAnswer
                question={`What You Need to Know: ${guide.title}`}
                directAnswer={`${guide.description} Official guidance, requirements, free application instructions and screening verification.`}
                statusBadge={{
                  text: guide.statusBadge || 'Official Guide Verified',
                  variant: 'success'
                }}
                portalUrl={guide.officialPortalUrl}
                lastVerified={getDailyUpdatedBadge(false)}
                scamNotice={guide.scamNotice}
              />
            )}

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
                    Official Enlistment Verification Terminal
                  </span>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40">
                  2026 Batch Check
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2">Check & Format Your Nigerian Army Application Number</h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Ensure your application number matches the required format before accessing the recruitment portal to avoid verification errors.
              </p>

              <form onSubmit={handleValidateAppNumber} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200 mb-1">
                    Enter Application / Slip Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={appNumberInput}
                      onChange={(e) => setAppNumberInput(e.target.value)}
                      placeholder="e.g. 88RRI/OG/12345 or DSSC32/2026/001"
                      className="w-full bg-slate-900/90 border border-emerald-600/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>Check Format</span>
                    </button>
                  </div>
                </div>
              </form>

              {validationResult && (
                <div className="mt-4 p-3.5 rounded-xl border text-xs leading-relaxed animate-fade-in">
                  {validationResult === 'valid-rri' && (
                    <div className="bg-emerald-950/80 border-emerald-500 text-emerald-200 p-3 rounded-lg flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Valid Regular Recruits Intake (RRI) Format!</strong>
                        <p className="mt-0.5 text-emerald-300">
                          Proceed to the portal login with your registered phone number or email to reprint your screening slip.
                        </p>
                      </div>
                    </div>
                  )}
                  {validationResult === 'valid-dssc' && (
                    <div className="bg-blue-950/80 border-blue-500 text-blue-200 p-3 rounded-lg flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Valid Direct Short Service / Short Service Commission Format!</strong>
                        <p className="mt-0.5 text-blue-300">
                          Use your cadet registration credentials on the DSSC portal tab.
                        </p>
                      </div>
                    </div>
                  )}
                  {validationResult === 'custom-format' && (
                    <div className="bg-yellow-950/80 border-yellow-500 text-yellow-200 p-3 rounded-lg flex items-start gap-2">
                      <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Format Recognized.</strong>
                        <p className="mt-0.5 text-yellow-300">
                          Ensure all letters are capitalized when entering credentials on the recruitment server.
                        </p>
                      </div>
                    </div>
                  )}
                  {validationResult === 'invalid' && (
                    <div className="bg-rose-950/80 border-rose-500 text-rose-200 p-3 rounded-lg flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Incomplete Application Number Format.</strong>
                        <p className="mt-0.5 text-rose-300">
                          Standard Army application numbers look like <code className="bg-black/40 px-1 py-0.5 rounded">88RRI/StateCode/Number</code>. Check your initial email receipt.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Render Parsed Article Content */}
          <article className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
            {guide.content.map((block, index) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 pt-4 pb-1 border-b border-gray-100 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-military-green" />
                    <span>{block.replace('## ', '')}</span>
                  </h2>
                );
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-bold text-gray-800 pt-2">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('•') || block.startsWith('- ')) {
                return (
                  <div key={index} className="flex items-start gap-2.5 my-1.5 pl-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{block.replace(/^[•\-]\s*/, '').trim()}</span>
                  </div>
                );
              }
              if (block.match(/^\d+\./)) {
                return (
                  <div key={index} className="flex items-start gap-3 my-2 p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-military-blue text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {block.match(/^\d+/)?.[0]}
                    </span>
                    <span className="text-gray-800">{block.replace(/^\d+\.\s*/, '').trim()}</span>
                  </div>
                );
              }
              return (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {block}
                </p>
              );
            })}
          </article>

          {/* 🎖️ High-Converting Military & Paramilitary Screening Elimination Native Ad */}
          <MilitaryScreeningAdCreative format="native-card" agencyContext={guide.branch} className="my-6" />

          {/* FAQ Accordion Section */}
          {guide.faqs && guide.faqs.length > 0 && (
            <div className="border-t border-gray-100 pt-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-military-blue" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-3">
                {guide.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                      className="w-full text-left px-4 py-3.5 flex items-center justify-between font-semibold text-gray-800 hover:text-military-blue transition text-sm sm:text-base bg-gray-50/50"
                    >
                      <span>{faq.question}</span>
                      <span className="text-military-blue font-mono font-bold ml-2">
                        {openFaq === fIdx ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === fIdx && (
                      <div className="px-4 pb-4 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
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
              <span>Official {guide.branch} Candidate Actions</span>
            </h4>
            <div className="space-y-2.5">
              {actionBase ? (
                <>
                  <Link
                    to={`/${actionBase}-print-confirmation-slip`}
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
                  >
                    <span>Reprint Confirmation Slip</span>
                    <span className="text-emerald-600 font-bold">Free PDF</span>
                  </Link>

                  <Link
                    to={`/${actionBase}-guarantor-form`}
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
                  >
                    <span>Download Guarantor Form</span>
                    <span className="text-blue-600 font-bold">Oaths</span>
                  </Link>

                  <Link
                    to={`/${actionBase === 'civil-defence' ? 'cdcfib-portal-login' : `${actionBase}-recruitment-portal-login`}`}
                    className="flex items-center justify-between p-3 bg-gray-50 hover:bg-amber-50 hover:border-amber-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
                  >
                    <span>Candidate Portal Login</span>
                    <span className="text-amber-600 font-bold">Login</span>
                  </Link>
                </>
              ) : (
                <Link
                  to="/print-army-screening-slip"
                  className="flex items-center justify-between p-3 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
                >
                  <span>Print Screening Slip</span>
                  <span className="text-emerald-600 font-bold">Portal</span>
                </Link>
              )}

              <Link
                to={agencySalaryUrl}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-amber-50 hover:border-amber-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>2026 {guide.branch} Salary Scale</span>
                <span className="text-amber-700 font-bold">CONAFSS</span>
              </Link>

              <Link
                to={`/past-questions/${getBranchPracticeSlug(guide.branch)}`}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-teal-50 hover:border-teal-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>Practice {guide.branch} CBT Questions</span>
                <span className="text-teal-700 font-bold">100% Free</span>
              </Link>

              <Link
                to="/shortlist-hub"
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>State Screening Venues (36 States)</span>
                <span className="text-military-blue font-bold">Barracks</span>
              </Link>

              <Link
                to="/eligibility"
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-purple-50 hover:border-purple-200 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>Verify Age, Height & O'Level</span>
                <span className="text-purple-700 font-bold">Checker</span>
              </Link>

              <Link
                to={agencyHubUrl}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-slate-100 hover:border-slate-300 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 transition-all"
              >
                <span>Full {guide.branch} Enlistment Hub</span>
                <span className="text-slate-900 font-bold">Hub</span>
              </Link>
            </div>
          </div>

          {/* 🎖️ High-Converting Screening Guide Sidebar Ad */}
          <MilitaryScreeningAdCreative format="sidebar-banner" agencyContext={guide.branch} />

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
