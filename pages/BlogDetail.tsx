import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, BookOpen, Share2, Copy, Check, Twitter } from 'lucide-react';
import { getBlogBySlug, getBlogArticles, BlogArticle } from '../services/mockBlog';
import SEO from '../components/SEO';
import { ArticleSchema, FAQPageSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getBlogBySlug(slug).then(data => {
        setArticle(data);
        setLoading(false);
      });
    }

    // Fetch related articles
    getBlogArticles().then(all => {
      const filtered = all.filter(a => a.slug !== slug).slice(0, 3);
      setRelatedArticles(filtered);
    });
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Article Not Found</h2>
        <Link to="/blog" className="text-military-blue hover:underline mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  const shareText = `Check out this article: ${article.title}`;
  const shareUrl = window.location.href;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' - ' + shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
      </Link>

      <SEO
        title={article.title}
        description={article.description}
        canonical={`/blog/${article.slug}`}
        keywords={[...article.keywords, 'Nigeria recruitment news', 'federal government guidelines']}
        ogType="article"
        ogImage={article.image}
      />

      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://recruitmenttracker.com.ng/blog/${article.slug}`}
        image={article.image}
        datePublished={article.date}
        authorName="Recruitment Tracker Editorial"
      />

      {article.faqs && article.faqs.length > 0 && (
        <FAQPageSchema faqs={article.faqs} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Featured Image */}
            <div className="h-64 md:h-96 w-full overflow-hidden bg-gray-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* Meta */}
              <div className="border-b border-gray-100 pb-6">
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-semibold text-gray-400">
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-150 uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {article.title}
                </h1>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5" /> Share:
                </span>
                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-gray-50 hover:bg-gray-150 rounded-lg text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1 text-xs font-semibold"
                  title="Copy link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 hover:text-green-800 transition-colors text-xs font-semibold"
                >
                  WhatsApp
                </a>
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-50 hover:bg-sky-100 rounded-lg text-sky-600 hover:text-sky-700 transition-colors text-xs font-semibold flex items-center gap-1"
                >
                  <Twitter className="w-3.5 h-3.5" /> X
                </a>
              </div>

              {/* Article Blocks */}
              <article className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                {article.content.map((block, index) => {
                  switch (block.type) {
                    case 'p':
                      return (
                        <p key={index} className="text-base md:text-lg">
                          {block.text}
                        </p>
                      );
                    case 'h2':
                      return (
                        <h2 key={index} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-100 pb-2">
                          {block.text}
                        </h2>
                      );
                    case 'h3':
                      return (
                        <h3 key={index} className="text-lg md:text-xl font-bold text-gray-900 mt-6 mb-3">
                          {block.text}
                        </h3>
                      );
                    case 'ul':
                      return (
                        <ul key={index} className="list-disc pl-6 space-y-2 my-4 text-base">
                          {block.items?.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      );
                    case 'ol':
                      return (
                        <ol key={index} className="list-decimal pl-6 space-y-2 my-4 text-base">
                          {block.items?.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ol>
                      );
                    default:
                      return null;
                  }
                })}
              </article>

              {/* FAQs Section */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="mt-10 border-t border-gray-100 pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {article.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-150 p-5 rounded-xl">
                        <h3 className="font-bold text-gray-900 text-base mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ad Unit after content */}
              <AdUnit slot="BLOG_CONTENT_BOTTOM_AD" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-1.5">
                Related Insights
              </h3>
              <div className="space-y-4">
                {relatedArticles.map(art => (
                  <div key={art.slug} className="group border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide block">{art.category}</span>
                    <Link to={`/blog/${art.slug}`} className="hover:text-military-blue transition-colors">
                      <h4 className="font-bold text-gray-800 text-sm mt-1 leading-tight group-hover:text-military-blue">{art.title}</h4>
                    </Link>
                    <span className="text-[11px] text-gray-400 block mt-1">{art.readTime}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practice CBT Widget */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Practice Mock CBT
            </h3>
            <p className="text-xs text-indigo-800 leading-relaxed mb-4">
              Get fully prepared for your recruitment screening. Access real, timed CBT questions for military and paramilitary agencies.
            </p>
            <Link
              to="/past-questions"
              className="w-full flex items-center justify-center py-2.5 bg-indigo-600 text-white font-bold rounded-lg text-xs hover:bg-indigo-700 transition-colors"
            >
              Start Free CBT Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
