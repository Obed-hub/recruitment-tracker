import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Clock, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getGuides, GuideArticle } from '../services/mockGuides';
import SEO from '../components/SEO';
import { BreadcrumbListSchema } from '../components/StructuredData';
import { getDailyUpdatedBadge } from '../services/dateUtils';

const GuidesHub: React.FC = () => {
  const [guides, setGuides] = useState<GuideArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGuides().then(data => {
      setGuides(data);
      setLoading(false);
    });
  }, []);

  const categories = [
    'All',
    'Live Status',
    'How-to-Apply',
    'Shortlist',
    'Requirements',
    'Past Questions',
    'Salary',
    'Screening',
    'Tutorial',
    'Comparison'
  ];

  const filteredGuides = guides.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          g.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || g.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Live Status': return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'How-to-Apply': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'Shortlist': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Requirements': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Past Questions': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Salary': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Screening': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Tutorial': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Comparison': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6">
      <SEO
        title="Recruitment Guides & Screening Tutorials 2026/2027 [Official Salary & Slip Guides]"
        description="Step-by-step guides for Nigerian military & paramilitary screenings. Access official salary structures, screening center venues, O'level requirements, and portal reprint procedures."
        canonical="/guides"
        keywords={['military guides', 'recruitment salary Nigeria 2026', 'screening center locations', 'CBT tutorials', 'print screening slip']}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Recruitment Guides & Tutorials', url: '/guides' }
        ]}
      />

      <div className="text-center py-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold mb-4">
          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
          <span>{getDailyUpdatedBadge()} • All 24 Screening & Portal Guides Verified</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Guides & Screening Tutorials</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get verified, step-by-step guides, salary details, and tutorial walk-throughs to help you navigate your recruitment screening successfully.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* Search */}
        <div className="w-full md:w-96 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search guides or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-military-green"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                selectedCategory === cat
                  ? 'bg-military-green text-white border-military-green shadow-sm'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading guides...</div>
      ) : filteredGuides.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900">No guides found</h3>
          <p className="text-gray-500 mt-1">Try adjusting your search criteria or categories.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => (
            <article key={guide.slug} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col group">
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getCategoryColor(guide.category)}`}>
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {new Date(guide.date).toLocaleDateString()}
                  </span>
                </div>

                <Link to={`/guides/${guide.slug}`} className="hover:text-military-blue transition-colors flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-military-blue">
                    {guide.title}
                  </h3>
                </Link>

                <p className="text-sm text-gray-500 line-clamp-3 mb-6">
                  {guide.description}
                </p>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-military-blue hover:text-blue-900 group-hover:translate-x-1 transition-transform"
                  >
                    Read Guide <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuidesHub;
