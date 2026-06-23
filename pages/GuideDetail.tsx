import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Shield, Calendar, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';
import { getGuideBySlug, GuideArticle } from '../services/mockGuides';
import { subscribeToRecruitments } from '../services/firebase';
import { RecruitmentUpdate } from '../types';
import SEO from '../components/SEO';
import { FAQPageSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';

const GuideDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [guide, setGuide] = useState<GuideArticle | null>(null);
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [loading, setLoading] = useState(true);

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
          Back to Guides
        </Link>
      </div>
    );
  }

  // Find related recruitment openings matching this guide's branch
  const relatedRecruitments = recruitments.filter(
    r => r.branch.toLowerCase() === guide.branch.toLowerCase()
  );

  // Dynamic FAQ for Google indexing
  const faqList = [
    {
      question: guide.title,
      answer: guide.content.join(' ')
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Link to="/guides" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Guides
      </Link>

      <SEO
        title={`${guide.title} - Step-by-Step Guide`}
        description={guide.description}
        canonical={`/guides/${guide.slug}`}
        keywords={[...guide.keywords, 'recruitment guidelines', 'Nigeria recruitment tracker']}
      />
      <FAQPageSchema faqs={faqList} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-8 space-y-6">
          <div className="border-b border-gray-100 pb-6">
            <div className="flex items-center gap-3 mb-3 text-xs font-semibold text-gray-400">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600 uppercase tracking-wide">
                {guide.category}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                Published: {new Date(guide.date).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {guide.title}
            </h1>
          </div>

          <article className="prose max-w-none text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
            {guide.content.map((paragraph, index) => {
              if (paragraph.startsWith('•')) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-2 text-sm md:text-base">
                    <li>{paragraph.substring(1).trim()}</li>
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2 my-2 text-sm md:text-base">
                    <li>{paragraph.replace(/^\d+\./, '').trim()}</li>
                  </ol>
                );
              }
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Ad Unit after content */}
          <AdUnit slot="GUIDE_CONTENT_BOTTOM_AD" />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Related Recruitment Widget */}
          {relatedRecruitments.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-military-green" /> Related Portals
              </h3>
              <div className="space-y-4">
                {relatedRecruitments.map(rec => (
                  <div key={rec.id} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide block">{rec.branch} • {rec.category}</span>
                      <h4 className="font-bold text-gray-800 text-sm mt-1 leading-tight">{rec.title}</h4>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                        <span className={`w-2 h-2 rounded-full ${rec.status === 'Open' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                        <span>Status: {rec.status}</span>
                      </div>
                    </div>
                    <Link
                      to={`/recruitments/${rec.id}`}
                      className="mt-4 w-full flex items-center justify-center py-2 bg-military-blue text-white font-bold rounded-lg text-xs hover:bg-blue-900 transition-colors"
                    >
                      Track Portal
                    </Link>
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

          {/* Quick Support Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-600 mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Need Help?
            </h3>
            <p className="text-xs text-yellow-800 leading-relaxed">
              If you notice any outdated information or have questions about a specific center, contact us directly on our support channels.
            </p>
            <Link to="/contact" className="text-xs font-bold text-yellow-900 mt-2 inline-flex items-center hover:underline">
              Contact Support <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
