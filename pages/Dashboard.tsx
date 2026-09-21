import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, ExternalLink, FileDown, AlertCircle, BrainCircuit, BookOpen, Image as ImageIcon, MapPin, CircleDollarSign, Sparkles, Calendar, CheckCircle2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { subscribeToRecruitments, getNews } from '../services/firebase';
import { RecruitmentUpdate, NewsItem, Branch } from '../types';
import PortalMonitor from '../components/PortalMonitor';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { WebSiteSchema, OrganizationSchema, FAQPageSchema } from '../components/StructuredData';
import { GUIDES } from '../services/mockGuides';
import { BLOG_ARTICLES } from '../services/mockBlog';
import ViralCommunityWidget from '../components/ViralCommunityWidget';
import NavyBatch39Banner from '../components/NavyBatch39Banner';
import { getDailyUpdatedBadge, formatCardUpdateDate } from '../services/dateUtils';
import SearchableFAQSection from '../components/SearchableFAQSection';


const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStyle = () => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-800 border-green-200';
      case 'Closed': return 'bg-red-100 text-red-800 border-red-200';
      case 'Shortlist Out': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStyle()}`}>
      {status.toUpperCase()}
    </span>
  );
};

const Dashboard: React.FC = () => {
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;
    let timeoutId: NodeJS.Timeout;

    // Set a timeout to stop loading if Firebase doesn't respond
    timeoutId = setTimeout(() => {
      if (loading) {
        console.warn('[Dashboard] Firebase timeout - showing UI without data');
        setLoading(false);
      }
    }, 5000); // 5 second timeout

    try {
      // Real-time subscription to Firebase
      unsubscribe = subscribeToRecruitments((data) => {
        clearTimeout(timeoutId);
        setRecruitments(data);
        setLoading(false);
        setError(null);
      });
    } catch (err) {
      console.error('[Dashboard] Firebase subscription error:', err);
      setError('Failed to connect to database');
      setLoading(false);
    }

    getNews()
      .then(newsData => setNews(newsData))
      .catch(err => console.warn('[Dashboard] News fetch notice:', err));

    return () => {
      clearTimeout(timeoutId);
      if (unsubscribe) unsubscribe();
    };
  }, []);


  const getBranchStatus = (branch: string) => {
    // Find the most recent/relevant update for the branch
    const updates = recruitments.filter(r => r.branch === branch);
    if (updates.length === 0) return null;
    return updates[0]; // Assuming sorted by relevance/date in backend
  };

  const getHubLink = (branch: string, defaultId: string) => {
    switch (branch) {
      case 'Army': return '/army-recruitment';
      case 'Navy': return '/navy-recruitment';
      case 'Air Force': return '/airforce-recruitment';
      case 'NDA': return '/nda-recruitment';
      case 'Police': return '/police-recruitment';
      case 'Civil Defence': return '/nscdc-recruitment';
      case 'Fire Service': return '/fire-service-recruitment';
      case 'Immigration': return '/nis-recruitment';
      case 'Customs': return '/customs-recruitment';
      case 'FRSC': return '/frsc-recruitment';
      case 'NDLEA': return '/ndlea-recruitment';
      case 'EFCC': return '/efcc-recruitment';
      case 'FCSC': return '/fcsc-recruitment';
      case 'NNPC': return '/nnpc-recruitment';
      case 'CBN': return '/cbn-recruitment';
      case 'NIMC': return '/nimc-recruitment';
      case 'NCC': return '/ncc-recruitment';
      case 'NITDA': return '/nitda-recruitment';
      case 'FAAN': return '/faan-recruitment';
      case 'NIMASA': return '/nimasa-recruitment';
      case 'NAFDAC': return '/nafdac-recruitment';
      default: return `/recruitments/${defaultId}`;
    }
  };

  // All agencies to display (military + paramilitary + federal)
  const branches: Branch[] = [
    // Military
    'Army', 'Navy', 'Air Force',
    // Paramilitary & Security
    'Police', 'Civil Defence', 'FRSC', 'Fire Service', 'Immigration', 'Customs', 'NDLEA',
    // Law Enforcement
    'EFCC',
    // Civil Service
    'FCSC',
    // Oil & Gas
    'NNPC',
    // Finance
    'CBN',
    // Tech & Identity
    'NIMC', 'NCC', 'NITDA',
    // Transport & Maritime
    'FAAN', 'NIMASA',
    // Health
    'NAFDAC',
  ];

  // We will display all in a grid
  const displayBranches = branches;

  return (
    <div className="space-y-8">
      <SEO
        title="Nigeria Recruitment Tracker 2026/2027 [Live Portal Status & Free CBT Questions]"
        description="Official tracking portal for Nigerian military & paramilitary recruitments 2026/2027. Check live portal status for Army, Navy, Police, NSCDC, take free CBT mock tests & download screening slips."
        canonical="/"
        keywords={['Nigeria recruitment updates 2026', 'Latest military recruitment Nigeria', 'Recruitment tracker', 'CBT practice Nigeria', 'Army recruitment 2026', 'Police recruitment portal']}
      />
      <WebSiteSchema />
      <OrganizationSchema />

      {/* Hero / Live Status Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="w-2 h-8 bg-military-green mr-3 rounded-sm"></span>
              Live Recruitment Status
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" /> {getDailyUpdatedBadge()}
            </span>
          </div>
          <Link to="/recruitments" className="text-sm font-semibold text-military-blue hover:underline">View All Agencies</Link>
        </div>

        {/* High-Impact Announcement: Nigerian Navy Batch 39 Recruitment 2026 */}
        <NavyBatch39Banner />

        {/* Featured Query Banner: Which Recruitment Form is Out Now (2026)? */}
        <div className="mb-4 p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-blue-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded-full">
                  Rank #1 Search Trend
                </span>
                <span className="text-[10px] font-semibold text-slate-300">Updated Daily</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white mt-0.5">
                Which Recruitment Form is Out Now in Nigeria? (2026/2027)
              </h3>
              <p className="text-xs text-slate-300">
                Live list of active military, police & paramilitary portals currently accepting applications vs upcoming calls.
              </p>
            </div>
          </div>
          <Link
            to="/which-recruitment-form-is-out-now"
            className="shrink-0 w-full sm:w-auto px-4 py-2.5 bg-blue-500 hover:bg-blue-400 text-slate-950 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
          >
            Check Active Forms <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Quick Gateway Callout for tracking.armynotification.com.ng */}
        <div className="mb-6 p-4 bg-gradient-to-r from-emerald-950 via-green-900 to-slate-950 text-white rounded-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-emerald-700/50">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                Nigerian Army Candidate Gateway
              </span>
              <p className="text-xs sm:text-sm font-medium text-emerald-100">
                Checking your 87/88 RRI or DSSC status on <span className="font-mono text-emerald-300 font-bold">tracking.armynotification.com.ng</span>?
              </p>
            </div>
          </div>
          <Link
            to="/guides/print-army-screening-slip"
            className="shrink-0 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
          >
            Status Check & Slip Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* High-Traffic Quick Gateways: Shortlists, Salaries, Guides & Slips, CBT */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <Link
            to="/shortlist-hub"
            className="p-3.5 sm:p-4 bg-white rounded-2xl border border-amber-200/80 hover:border-amber-400 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 text-amber-600 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md">
                36 States
              </span>
            </div>
            <div className="text-xs sm:text-sm font-black text-gray-900 group-hover:text-amber-700 transition-colors">
              Shortlists & Venues
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5 hidden sm:block">
              State screening centers & PDF checker
            </p>
          </Link>

          <Link
            to="/salary-comparison"
            className="p-3.5 sm:p-4 bg-white rounded-2xl border border-blue-200/80 hover:border-blue-400 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <CircleDollarSign className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md">
                2026 Pay
              </span>
            </div>
            <div className="text-xs sm:text-sm font-black text-gray-900 group-hover:text-blue-700 transition-colors">
              2026 Salary Scales
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5 hidden sm:block">
              Army, Police & Customs CONAFSS
            </p>
          </Link>

          <Link
            to="/guides"
            className="p-3.5 sm:p-4 bg-white rounded-2xl border border-emerald-200/80 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 text-emerald-600 mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md">
                Application
              </span>
            </div>
            <div className="text-xs sm:text-sm font-black text-gray-900 group-hover:text-emerald-700 transition-colors">
              Guides & Slips
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5 hidden sm:block">
              Reprint slip & portal steps
            </p>
          </Link>

          <Link
            to="/past-questions"
            className="p-3.5 sm:p-4 bg-white rounded-2xl border border-purple-200/80 hover:border-purple-400 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 text-purple-600 mb-1">
              <BrainCircuit className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded-md">
                Timed CBT
              </span>
            </div>
            <div className="text-xs sm:text-sm font-black text-gray-900 group-hover:text-purple-700 transition-colors">
              CBT Mock Exams
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5 hidden sm:block">
              5,000+ past questions & answers
            </p>
          </Link>
        </div>

        {/* Viral WhatsApp Community Alert */}
        <ViralCommunityWidget agencyName="Nigeria Recruitment Tracker" variant="banner" />


        {loading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => <div key={i} className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>)}
            </div>
            <div className="text-center py-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-sm font-medium text-gray-500">Connecting to recruitment database...</p>
              <p className="text-[10px] text-gray-400">Fetching live portal status for Nigerian Military & Paramilitary agencies.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayBranches.map(branch => {
              const data = getBranchStatus(branch);
              // Determine header color based on organization type
              let headerColor = 'bg-gray-600';
              if (branch === 'Army') headerColor = 'bg-military-green';
              else if (branch === 'Navy') headerColor = 'bg-military-blue';
              else if (branch === 'Air Force') headerColor = 'bg-sky-600';
              else if (branch === 'Police') headerColor = 'bg-blue-600';
              else if (branch === 'Civil Defence') headerColor = 'bg-red-700';
              else if (branch === 'FRSC') headerColor = 'bg-red-500';
              else if (branch === 'Fire Service') headerColor = 'bg-orange-600';
              else if (branch === 'Immigration') headerColor = 'bg-emerald-700';
              else if (branch === 'Customs') headerColor = 'bg-slate-700';
              else if (branch === 'EFCC') headerColor = 'bg-amber-700';
              else if (branch === 'FCSC') headerColor = 'bg-violet-700';
              else if (branch === 'NNPC') headerColor = 'bg-green-800';
              else if (branch === 'CBN') headerColor = 'bg-teal-700';
              else if (branch === 'NIMC') headerColor = 'bg-blue-800';
              else if (branch === 'NCC') headerColor = 'bg-indigo-700';
              else if (branch === 'NITDA') headerColor = 'bg-cyan-700';
              else if (branch === 'FAAN') headerColor = 'bg-sky-700';
              else if (branch === 'NIMASA') headerColor = 'bg-slate-600';
              else if (branch === 'NAFDAC') headerColor = 'bg-pink-700';
              else if (branch === 'NDLEA') headerColor = 'bg-emerald-800';

              // Check if portal is offline
              const isOffline = data?.site_status === 'offline';

              return (
                <div key={branch} className={`bg-white rounded-xl shadow-md overflow-hidden border ${isOffline ? 'border-red-300' : 'border-gray-100'} hover:shadow-lg transition-shadow relative`}>
                  {/* Offline overlay indicator */}
                  {isOffline && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="flex items-center gap-1 bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded-full border border-red-200 animate-pulse">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        PORTAL OFFLINE
                      </span>
                    </div>
                  )}

                  <div className={`h-2 w-full ${isOffline ? 'bg-red-500' : headerColor}`}></div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-800">{branch}</h3>
                      {data ? <StatusBadge status={data.status} /> : <span className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-400">No Data</span>}
                    </div>

                    {data ? (
                      <>
                        <p className="text-sm font-medium text-gray-900 line-clamp-2 h-[40px] mb-2">{data.title}</p>

                        {/* Site status indicator */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>Updated: {formatCardUpdateDate(data.updated_at)}</span>
                          </div>
                          {data.site_status && (
                            <span className={`flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${data.site_status === 'online'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : 'bg-red-50 text-red-700 border border-red-200'
                              }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${data.site_status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                              {data.site_status === 'online' ? 'Site Online' : 'Site Offline'}
                            </span>
                          )}
                        </div>

                        {/* Latency if available */}
                        {data.latency && data.site_status === 'online' && (
                          <div className="text-[10px] text-gray-400 mb-2">
                            Response time: {data.latency}ms
                          </div>
                        )}

                        {isOffline ? (
                          <div className="w-full py-2 px-4 rounded-lg text-sm font-medium text-center bg-gray-100 text-gray-500 border border-gray-200">
                            Portal Currently Unavailable
                          </div>
                        ) : (
                          <Link
                            to={getHubLink(branch, data.id)}
                            className={`w-full flex items-center justify-center py-2 px-4 rounded-lg text-sm font-semibold text-white transition-colors ${headerColor} hover:opacity-90`}
                          >
                            View Portal & Guidelines <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        )}

                        {/* High-Impact SEO & User Internal Links to Salary/Guides */}
                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
                          {branch === 'Army' ? (
                            <>
                              <Link
                                to="/army-salary"
                                className="text-emerald-700 hover:text-emerald-900 font-bold bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded transition-colors"
                              >
                                ₦ 2026 Army Salary
                              </Link>
                              <Link
                                to="/guides/print-army-screening-slip"
                                className="text-military-blue hover:underline font-medium"
                              >
                                Slip Printing Guide →
                              </Link>
                            </>
                          ) : branch === 'Navy' ? (
                            <>
                              <Link
                                to="/navy-batch-recruitment"
                                className="text-blue-700 hover:text-blue-900 font-bold bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded transition-colors"
                              >
                                Batch 38/39 Portal
                              </Link>
                              <Link
                                to="/salary-comparison"
                                className="text-emerald-700 hover:underline font-medium"
                              >
                                Navy CONAFSS Pay →
                              </Link>
                            </>
                          ) : branch === 'CBN' ? (
                            <>
                              <Link
                                to="/cbn-recruitment"
                                className="text-teal-800 hover:text-teal-950 font-bold bg-teal-50 hover:bg-teal-100 px-2 py-0.5 rounded transition-colors"
                              >
                                Verified CBN Portal
                              </Link>
                              <span className="text-amber-700 font-medium text-[10px]">
                                Anti-Scam Alert
                              </span>
                            </>
                          ) : branch === 'NCC' ? (
                            <>
                              <Link
                                to="/ncc-recruitment"
                                className="text-indigo-700 hover:text-indigo-900 font-bold bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded transition-colors"
                              >
                                NCC Officer Salary
                              </Link>
                              <Link
                                to="/past-questions"
                                className="text-indigo-600 hover:underline font-medium"
                              >
                                CBT Questions →
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link
                                to="/salary-comparison"
                                className="text-gray-600 hover:text-emerald-700 font-medium hover:underline"
                              >
                                2026 Salary Scale
                              </Link>
                              <Link
                                to="/past-questions"
                                className="text-military-blue hover:underline font-medium"
                              >
                                CBT Mock Tests →
                              </Link>
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col justify-center items-center py-4 space-y-2">
                        <p className="text-xs text-gray-400 text-center">No active recruitment cycle currently open.</p>
                        <div className="flex items-center gap-2 text-[11px]">
                          <Link to={getHubLink(branch, '')} className="text-military-blue hover:underline font-semibold">
                            Official Guidelines
                          </Link>
                          <span className="text-gray-300">•</span>
                          <Link to="/salary-comparison" className="text-emerald-700 hover:underline font-medium">
                            Salary Scale
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Ad Unit after recruitment grid */}
        <AdUnit slot="HOME_GRID_BOTTOM_AD" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left/Main Column: Quick Resources & Monitor */}
        <section className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Resources</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
              {/* CBT Past Questions Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Past Questions</h3>
                <Link to="/past-questions" className="w-full flex items-center justify-between p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-200 rounded text-indigo-800">
                      <BrainCircuit className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-indigo-900">Take Past Question</span>
                      <span className="text-xs text-indigo-600">Prepare with real past questions</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600" />
                </Link>
              </div>

              {/* Army Candidate Tracking Section */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Candidate Portal Gateway</h3>
                <Link to="/guides/print-army-screening-slip" className="w-full flex items-center justify-between p-4 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-200 rounded text-emerald-900">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-emerald-950">tracking.armynotification.com.ng</span>
                      <span className="text-xs text-emerald-700">Verify application number & reprint screening slip</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:text-emerald-800" />
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Help Desk</h3>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div className="text-xs text-yellow-800">
                    <span className="font-bold block mb-1">Scam Alert</span>
                    Recruitment forms are FREE. Do not pay anyone for assistance. Report suspicious activity.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portal Monitor */}
          <div>
            <PortalMonitor portals={recruitments.map(r => ({ id: r.id, name: r.branch, url: r.portal_url, status: r.site_status, latency: r.latency }))} />
          </div>

          {/* Sidebar Ad (now in main col) */}
          <AdUnit slot="DASHBOARD_MAIN_COL_AD" format="rectangle" />
        </section>

        {/* Right Column: News Feed (Moved to bottom of grid or separate section) */}
        {/* We actually want news to be the LAST thing, so let's put it below this grid */}
      </div>

      {/* News Feed - Now at the bottom */}
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Latest Military & Paramilitary News</h2>
          <Link to="/blog" className="text-military-blue text-sm font-medium hover:underline">View All</Link>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="h-24 bg-gray-200 animate-pulse rounded-lg"></div>
          ) : (
            news.map((item, index) => (
              <React.Fragment key={item.id}>
                <a
                  href={item.source_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-military-green transition-all duration-300 overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image Section */}
                    <div className="sm:w-32 md:w-40 h-32 sm:h-auto bg-gray-100 flex-shrink-0 relative overflow-hidden">
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 absolute top-0 left-0 ${item.image_url ? 'hidden' : ''}`}>
                        <ImageIcon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex-grow">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {item.source && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {item.source}
                          </span>
                        )}
                        <span className="text-xs text-gray-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.date_posted}
                        </span>
                        {item.is_official && (
                          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100">
                            OFFICIAL
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-military-blue transition-colors leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {item.content_summary || "Click to read the full story on the official source website."}
                      </p>

                      <div className="flex items-center text-military-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Article <ExternalLink className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </a>
                {/* Insert Ad every 4 news items */}
                {(index + 1) % 4 === 0 && <AdUnit slot="DASHBOARD_FEED_AD" />}
              </React.Fragment>
            ))
          )}
        </div>
      </section>

      {/* Latest Guides & Tutorials Section */}
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="w-2 h-8 bg-military-green mr-3 rounded-sm"></span>
            Latest Guides & Tutorials
          </h2>
          <Link to="/guides" className="text-sm font-semibold text-military-blue hover:underline">View All Guides</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.slice(0, 3).map(guide => (
            <article key={guide.slug} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col group p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  {guide.category}
                </span>
                <span className="text-[10px] text-gray-400 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(guide.date).toLocaleDateString()}
                </span>
              </div>
              <Link to={`/guides/${guide.slug}`} className="hover:text-military-blue transition-colors flex-grow">
                <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight group-hover:text-military-blue line-clamp-2">
                  {guide.title}
                </h3>
              </Link>
              <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                {guide.description}
              </p>
              <div className="pt-3 border-t border-gray-100 mt-auto flex justify-between items-center">
                <Link
                  to={`/guides/${guide.slug}`}
                  className="inline-flex items-center text-xs font-bold text-military-blue hover:text-blue-900 group-hover:translate-x-0.5 transition-transform"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Latest News & Career Insights Section */}
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="w-2 h-8 bg-military-green mr-3 rounded-sm"></span>
            Latest News & Career Insights
          </h2>
          <Link to="/blog" className="text-sm font-semibold text-military-blue hover:underline">View All Articles</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_ARTICLES.slice(0, 3).map(article => (
            <article key={article.slug} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col group">
              <div className="relative h-32 overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${article.slug}`} className="hover:text-military-blue transition-colors">
                    <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight group-hover:text-military-blue line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                    {article.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 mt-auto">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-xs font-bold text-military-blue hover:text-blue-900 group-hover:translate-x-0.5 transition-transform"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Recruitment FAQs & Fast Answers (Searchable & Schema-Enabled) */}
      <section className="mt-12">
        <SearchableFAQSection
          limit={6}
          showAllLink={true}
          enableStructuredData={true}
          title="Recruitment FAQs & Quick Answers"
          subtitle="Search verified answers to common questions about ongoing military & paramilitary recruitments, portal slips, and screening."
        />
      </section>
    </div >
  );
};


export default Dashboard;