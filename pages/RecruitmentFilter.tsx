import React, { useState, useEffect } from 'react';
import { Filter, Calendar, ExternalLink, Clock, Info } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import { getRecruitments } from '../services/mockFirebase';
import { RecruitmentUpdate, Branch, RecruitmentCategory } from '../types';

const RecruitmentFilter: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter States - Initialize from URL params or default to 'All'
  const [selectedBranch, setSelectedBranch] = useState<Branch | 'All'>(
    (searchParams.get('branch') as Branch) || 'All'
  );
  const [selectedCategory, setSelectedCategory] = useState<RecruitmentCategory | 'All'>(
    (searchParams.get('category') as RecruitmentCategory) || 'All'
  );

  // Sync state when URL params change (e.g. navigation from other pages)
  useEffect(() => {
    const branchParam = searchParams.get('branch') as Branch | 'All';
    const categoryParam = searchParams.get('category') as RecruitmentCategory | 'All';

    if (branchParam) setSelectedBranch(branchParam);
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [searchParams]);

  useEffect(() => {
    getRecruitments().then((data) => {
      setRecruitments(data);
      setLoading(false);
    });
  }, []);

  const filteredRecruitments = recruitments.filter(item => {
    if (selectedBranch !== 'All' && item.branch !== selectedBranch) return false;
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-600';
      case 'Closed': return 'bg-red-500';
      case 'Shortlist Out': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getBranchColor = (branch: Branch) => {
    switch (branch) {
      case 'Army': return 'bg-military-green';
      case 'Navy': return 'bg-military-blue';
      case 'Air Force': return 'bg-sky-600';
      case 'Police': return 'bg-blue-600';
      case 'Civil Defence': return 'bg-red-700';
      case 'FRSC': return 'bg-red-500';
      case 'Fire Service': return 'bg-orange-600';
      case 'Immigration': return 'bg-emerald-700';
      case 'Customs': return 'bg-slate-700';
      case 'EFCC': return 'bg-amber-700';
      case 'FCSC': return 'bg-violet-700';
      case 'NNPC': return 'bg-green-800';
      case 'CBN': return 'bg-teal-700';
      case 'NIMC': return 'bg-blue-800';
      case 'NCC': return 'bg-indigo-700';
      case 'NITDA': return 'bg-cyan-700';
      case 'FAAN': return 'bg-sky-700';
      case 'NIMASA': return 'bg-slate-600';
      case 'NAFDAC': return 'bg-pink-700';
      default: return 'bg-gray-500';
    }
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const due = new Date(deadline);
    const diffTime = due.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const branches = [
    'All',
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

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Recruitment Portal</h1>
        <p className="text-gray-600 mt-2">Browse active and past recruitment exercises across all branches.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
            <div className="flex flex-wrap gap-2">
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch as Branch | 'All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedBranch === branch
                      ? 'bg-military-green text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {['All', 'Regular Recruit', 'DSSC', 'SSC', 'Constable', 'Inspector'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat as RecruitmentCategory | 'All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                      ? 'bg-military-blue text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading recruitments...</div>
        ) : filteredRecruitments.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900">No recruitments found</h3>
            <p className="text-gray-500">Try adjusting your filters.</p>
          </div>
        ) : (
          filteredRecruitments.map((rec) => {
            const daysLeft = getDaysRemaining(rec.deadline_date);
            return (
              <div key={rec.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
                <div className={`w-full md:w-2 ${getBranchColor(rec.branch)}`}></div>

                <div className="p-6 flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${getStatusColor(rec.status)}`}></span>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{rec.branch} • {rec.category}</span>
                      </div>
                      <Link to={`/recruitments/${rec.id}`} className="hover:text-military-blue transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{rec.title}</h3>
                      </Link>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Deadline: {new Date(rec.deadline_date).toLocaleDateString()}</span>
                        </div>

                        {rec.status === 'Open' && daysLeft >= 0 && (
                          <div className={`flex items-center gap-1 font-semibold px-2 py-0.5 rounded border ${daysLeft <= 7 ? 'text-red-700 bg-red-50 border-red-200 animate-pulse' : 'text-orange-700 bg-orange-50 border-orange-200'
                            }`}>
                            <Clock className="w-3.5 h-3.5" />
                            <span>
                              {daysLeft === 0 ? 'Deadline Today' : `${daysLeft} Days Remaining`}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className={`px-4 py-1.5 rounded text-center text-sm font-bold border ${rec.status === 'Open' ? 'bg-green-50 text-green-700 border-green-200' :
                          rec.status === 'Shortlist Out' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-gray-100 text-gray-600'
                        }`}>
                        {rec.status}
                      </span>
                      <Link
                        to={`/recruitments/${rec.id}`}
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
                      >
                        View Details <Info className="w-3 h-3" />
                      </Link>
                      <a
                        href={rec.portal_url}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        Visit Portal <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RecruitmentFilter;