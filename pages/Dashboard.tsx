import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, ExternalLink, FileDown, AlertCircle, BrainCircuit, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { subscribeToRecruitments, getNews } from '../services/firebase';
import { RecruitmentUpdate, NewsItem, Branch } from '../types';
import SEO from '../components/SEO';

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

    // Fetch News (One-time or could be periodic)
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

  // All agencies to display (military + paramilitary + federal)
  const branches: Branch[] = [
    // Military
    'Army', 'Navy', 'Air Force',
    // Paramilitary & Security
    'Police', 'Civil Defence', 'FRSC', 'Fire Service', 'Immigration', 'Customs',
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
        title="Live Status & Recruitment Updates"
        description="Get real-time updates on Nigerian Army, Navy, Air Force, and Police recruitment status. View latest news and access practice tests."
        canonicalPath="/"
      />
      {/* Hero / Live Status Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <span className="w-2 h-8 bg-military-green mr-3 rounded-sm"></span>
            Live Recruitment Status
          </h1>
          <Link to="/recruitments" className="text-sm font-semibold text-military-blue hover:underline">View All</Link>
        </div>


        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <div key={i} className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>)}
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
                            to={`/recruitments/${data.id}`}
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
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Feed */}
        <section className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Latest Recruitment News</h2>
            <Link to="/news" className="text-military-blue text-sm font-medium hover:underline">View All</Link>
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="h-24 bg-gray-200 animate-pulse rounded-lg"></div>
            ) : (
              news.map(item => (
                <a
                  key={item.id}
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
              ))
            )}
          </div>
        </section>

        {/* Sidebar: Quick Links & Practice & Monitor */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Resources</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">

              {/* CBT Practice Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Preparation</h3>
                <Link to="/practice" className="w-full flex items-center justify-between p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-200 rounded text-indigo-800">
                      <BrainCircuit className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-indigo-900">Take CBT Practice Test</span>
                      <span className="text-xs text-indigo-600">Simulate exam conditions</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600" />
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Past Questions (PDF)</h3>
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded text-red-600">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Nigerian Army DSSC</span>
                  </div>
                  <span className="text-xs text-gray-400">PDF</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded text-red-600">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Police Past Questions</span>
                  </div>
                  <span className="text-xs text-gray-400">PDF</span>
                </button>
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

        </section>
      </div>
    </div >
  );
};

export default Dashboard;