import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, X, ChevronDown, ChevronUp, Link as LinkIcon, Check,
  HelpCircle, MessageCircle, ArrowRight, Sparkles, Filter,
  ThumbsUp, ThumbsDown, Share2, Tag, BookOpen
} from 'lucide-react';
import {
  RECRUITMENT_FAQS,
  FAQ_CATEGORIES,
  POPULAR_FAQ_SEARCHES,
  FAQCategory,
  RecruitmentFAQ,
  searchFAQs
} from '../services/recruitmentFAQs';
import { FAQPageSchema } from './StructuredData';

interface SearchableFAQSectionProps {
  initialCategory?: FAQCategory;
  initialQuery?: string;
  limit?: number;
  showAllLink?: boolean;
  enableStructuredData?: boolean;
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  showCategories?: boolean;
  showPopularSearches?: boolean;
  className?: string;
}

export const SearchableFAQSection: React.FC<SearchableFAQSectionProps> = ({
  initialCategory = 'All',
  initialQuery = '',
  limit,
  showAllLink = false,
  enableStructuredData = true,
  title = 'Frequently Asked Questions',
  subtitle = 'Find verified answers to common questions on military and paramilitary recruitments, portals, screening, and salary.',
  showSearch = true,
  showCategories = true,
  showPopularSearches = true,
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>(initialCategory);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'yes' | 'no'>>({});

  // Filter FAQs based on active query & category
  const filteredFAQs = useMemo(() => {
    const results = searchFAQs(searchQuery, selectedCategory);
    return limit ? results.slice(0, limit) : results;
  }, [searchQuery, selectedCategory, limit]);

  // Handle URL hash on initial mount (e.g. /faqs#awaiting-result-policy)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const matchedFAQ = RECRUITMENT_FAQS.find(f => f.id === hashId);
      if (matchedFAQ) {
        setExpandedIds(prev => new Set(prev).add(hashId));
        // Smooth scroll to element
        setTimeout(() => {
          const el = document.getElementById(hashId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    }
  }, []);

  // Category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: RECRUITMENT_FAQS.length };
    FAQ_CATEGORIES.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = RECRUITMENT_FAQS.filter(f => f.category === cat).length;
      }
    });
    return counts;
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(filteredFAQs.map(f => f.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const handleCopyLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/faqs#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleFeedback = (id: string, type: 'yes' | 'no', e: React.MouseEvent) => {
    e.stopPropagation();
    setFeedbackGiven(prev => ({ ...prev, [id]: type }));
  };

  // Helper function to highlight matching search text
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-amber-200 text-slate-900 rounded-xs px-0.5 font-bold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Structured Data payload for Google Search
  const structuredDataFAQs = useMemo(() => {
    return filteredFAQs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));
  }, [filteredFAQs]);

  return (
    <section className={`space-y-6 ${className}`} id="searchable-faq-section">
      {enableStructuredData && structuredDataFAQs.length > 0 && (
        <FAQPageSchema faqs={structuredDataFAQs} />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-6 bg-military-blue rounded-sm" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {title}
            </h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 text-military-blue border border-blue-100">
              {filteredFAQs.length} Answers
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Global Expand/Collapse Toggle */}
        {filteredFAQs.length > 0 && (
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 shrink-0">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-military-blue transition-colors px-2 py-1 rounded-md hover:bg-slate-100"
            >
              Expand All
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-military-blue transition-colors px-2 py-1 rounded-md hover:bg-slate-100"
            >
              Collapse All
            </button>
          </div>
        )}
      </div>

      {/* Live Search Bar */}
      {showSearch && (
        <div className="relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by topic, agency (e.g., 'Navy Batch 39', 'awaiting result', 'tattoos', 'height', 'reprint slip')..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-military-blue focus:ring-3 focus:ring-blue-100 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Popular Search Suggestions */}
      {showPopularSearches && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Popular:
          </span>
          {POPULAR_FAQ_SEARCHES.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setSearchQuery(tag);
                setSelectedCategory('All');
              }}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                searchQuery.toLowerCase() === tag.toLowerCase()
                  ? 'bg-military-blue text-white border-military-blue font-bold shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Category Tabs */}
      {showCategories && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {FAQ_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border shrink-0 ${
                  isSelected
                    ? 'bg-military-green text-white border-military-green shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* FAQs Accordion List */}
      {filteredFAQs.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-3">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No matching questions found
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We couldn't find any questions matching "{searchQuery}" under {selectedCategory}. Try searching for a different keyword or reset your filters.
          </p>
          <div className="pt-2 flex justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-military-blue text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition-colors shadow-xs"
            >
              Reset Search & Filters
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedIds.has(faq.id);
            const isCopied = copiedId === faq.id;
            const feedback = feedbackGiven[faq.id];

            return (
              <article
                key={faq.id}
                id={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Question Header */}
                <div className="w-full p-4 sm:p-5 flex items-start justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => toggleExpand(faq.id)}
                    aria-expanded={isExpanded}
                    className="flex-1 text-left space-y-1.5 pr-2 focus:outline-hidden group cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {faq.category}
                      </span>
                      {faq.agency && (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-military-blue">
                          {faq.agency}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-military-blue transition-colors leading-snug">
                      {highlightMatch(faq.question, searchQuery)}
                    </h3>
                  </button>

                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    <button
                      type="button"
                      onClick={(e) => handleCopyLink(faq.id, e)}
                      title="Copy link to this answer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-military-blue hover:bg-slate-100 transition-colors cursor-pointer"
                      aria-label="Copy link to this question"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <LinkIcon className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleExpand(faq.id)}
                      aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
                      className="w-7 h-7 rounded-full bg-slate-100 hover:bg-blue-50 flex items-center justify-center text-slate-600 hover:text-military-blue transition-colors cursor-pointer"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-military-blue" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Answer Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
                    <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                      <p>{highlightMatch(faq.answer, searchQuery)}</p>
                    </div>

                    {/* Related Action Link & Feedback */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs">
                      {faq.relatedLink ? (
                        <Link
                          to={faq.relatedLink.url}
                          className="inline-flex items-center gap-1.5 font-bold text-military-blue hover:underline"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{faq.relatedLink.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ) : (
                        <div />
                      )}

                      {/* Helpful Feedback Buttons */}
                      <div className="flex items-center gap-3 text-slate-500">
                        {feedback ? (
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Thank you for your feedback!
                          </span>
                        ) : (
                          <>
                            <span className="text-slate-400">Was this helpful?</span>
                            <button
                              type="button"
                              onClick={(e) => handleFeedback(faq.id, 'yes', e)}
                              className="p-1 px-2 rounded-md hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center gap-1 font-medium"
                            >
                              <ThumbsUp className="w-3.5 h-3.5" /> Yes
                            </button>
                            <button
                              type="button"
                              onClick={(e) => handleFeedback(faq.id, 'no', e)}
                              className="p-1 px-2 rounded-md hover:bg-rose-50 hover:text-rose-700 transition-colors flex items-center gap-1 font-medium"
                            >
                              <ThumbsDown className="w-3.5 h-3.5" /> No
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* Show All Link (when used in preview mode) */}
      {showAllLink && (
        <div className="text-center pt-2">
          <Link
            to="/faqs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm"
          >
            <span>Explore All 35+ Recruitment FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Community / Still Need Help Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm sm:text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Didn't find what you are looking for?
          </h4>
          <p className="text-xs text-slate-300 max-w-xl">
            Join the <strong>NIGERIA RECRUITMENT UPDATE</strong> WhatsApp channel to ask recruitment questions, get verification on rumors, and receive daily breaking shortlist notifications.
          </p>
        </div>

        <a
          href="https://whatsapp.com/channel/0029Vb9F6VeC1FuCXNvVif10"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          Join WhatsApp Channel
        </a>
      </div>
    </section>
  );
};

export default SearchableFAQSection;
