import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, ExternalLink, FileDown, AlertCircle, BrainCircuit, BookOpen, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { subscribeToRecruitments, getNews } from '../services/firebase';
import { RecruitmentUpdate, NewsItem, Branch } from '../types';
import PortalMonitor from '../components/PortalMonitor';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { WebSiteSchema, OrganizationSchema, FAQPageSchema } from '../components/StructuredData';
import { GUIDES } from '../services/mockGuides';
import { BLOG_ARTICLES } from '../services/mockBlog';


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
      .catch(err => console.error('[Dashboard] News fetch error:', err));

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

  const generalFAQs = [
    {
      question: "How do I check Nigerian military recruitment status?",
      answer: "You can track the live status of Nigerian Army, Navy, and Air Force recruitment portals directly on our home dashboard. We monitor portal availability, status updates (Open, Closed, Shortlist Out), and application deadlines in real-time."
    },
    {
      question: "Are military recruitment forms free in Nigeria?",
      answer: "Yes, official recruitment forms for the Nigerian Army, Navy, Air Force, Police, and paramilitary agencies are completely free of charge. Avoid paying individuals claiming to represent these agencies."
    },
    {
      question: "What is DSSC in Nigerian military recruitment?",
      answer: "DSSC stands for Direct Short Service Commission. It is a commission type in the Nigerian military for university graduates and HND holders, allowing professionals (doctors, engineers, lawyers, teachers) to join as commissioned officers."
    },
    {
      question: "How long does military recruitment screening last?",
      answer: "The screening duration varies, but generally, physical screening, credential verification, and aptitude tests last between 1 to 2 weeks at designated zonal centers."
    }
  ];

  return (
    <div className="space-y-8">
      <SEO
        title="Home - Track Latest Recruitment Updates"
        description="Stay updated with the latest recruitment news in Nigeria. Check eligibility, track portal status, and prepare with CBT tests."
        canonical="/"
        keywords={['Nigeria recruitment updates', 'Latest job recruitment 2026', 'Recruitment tracker', 'CBT practice Nigeria']}
      />
      <WebSiteSchema />
      <OrganizationSchema />
      <FAQPageSchema faqs={generalFAQs} />

      {/* Hero / Live Status Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <span className="w-2 h-8 bg-military-green mr-3 rounded-sm"></span>
            Live Recruitment Status
          </h2>
          <Link to="/recruitments" className="text-sm font-semibold text-military-blue hover:underline">View All</Link>
        </div>


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
                            <span>Updated: {new Date(data.updated_at).toLocaleDateString()}</span>
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
                            View Details <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col h-[100px] justify-center items-center">
                        <p className="text-sm text-gray-400 text-center">No active updates.</p>
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
          <Link to="/news" className="text-military-blue text-sm font-medium hover:underline">View All</Link>
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
    </div >
  );
};


export default Dashboard;