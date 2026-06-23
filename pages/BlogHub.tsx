import React, { useState, useEffect } from 'react';
import { Newspaper, Search, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogArticles, BlogArticle } from '../services/mockBlog';
import SEO from '../components/SEO';

const BlogHub: React.FC = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogArticles().then(data => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  const categories = ['All', 'Career Advice', 'Exam Prep', 'Salaries', 'Guides'];

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Salaries': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Exam Prep': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Career Advice': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Guides': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6">
      <SEO
        title="Career Advice, Salaries & Latest Recruitment News"
        description="Stay updated with our recruitment blog. Get detailed information on government salaries, military preparation guides, physical screening tips, and paramilitary career options in Nigeria."
        canonical="/blog"
        keywords={['nigerian recruitment news', 'federal government salary scale', 'military screening preparation', 'paramilitary vs military Nigeria', 'police force salary structures']}
      />

      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Latest Insights & Career Advice</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Expert articles, study tips, salary structures, and insider guides to help you land your dream job in Nigerian federal and military agencies.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* Search */}
        <div className="w-full md:w-96 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search articles or keywords..."
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
        <div className="text-center py-12 text-gray-500">Loading insights...</div>
      ) : filteredArticles.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
          <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900">No posts found</h3>
          <p className="text-gray-500 mt-1">Try adjusting your search criteria or category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <article key={article.slug} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className={`absolute top-4 left-4 px-2.5 py-0.5 rounded-full text-xs font-bold border shadow-sm ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs text-gray-400 mb-3 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {article.readTime}
                    </span>
                    <span>{new Date(article.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>

                  <Link to={`/blog/${article.slug}`} className="hover:text-military-blue transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-military-blue">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-500 line-clamp-3 mb-6">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-military-blue hover:text-blue-900 group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
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

export default BlogHub;
