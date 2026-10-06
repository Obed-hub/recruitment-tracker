import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Clock, Shield, Calendar, BookOpen, ExternalLink,
  HelpCircle, AlertTriangle, CheckCircle2, ChevronRight, Award,
  Sparkles, Layers
} from 'lucide-react';
import { getGuideBySlug, GuideArticle } from '../services/mockGuides';
import { subscribeToRecruitments } from '../services/firebase';
import { RecruitmentUpdate } from '../types';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';

const GuideDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [guide, setGuide] = useState<GuideArticle | null>(null);
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const faqList = guide.faqs && guide.faqs.length > 0
    ? guide.faqs
    : [
        {
          question: guide.title,
          answer: guide.description
        }
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <Link to="/guides" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to All Guides
      </Link>

      <SEO
        title={`${guide.title} | Recruitment Tracker Nigeria`}
        description={guide.description}
        canonicalUrl={`/guides/${guide.slug}`}
        keywords={[...guide.keywords, 'Nigeria recruitment guidelines', 'recruitment tracker']}
      />

      <ArticleSchema
        title={guide.title}
        description={guide.description}
        url={`/guides/${guide.slug}`}
        publishedAt={guide.date}
        updatedAt={guide.date}
      />

      <FAQPageSchema faqs={faqList} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
          <div className="border-b border-gray-100 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold text-gray-500">
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-wide border border-emerald-200">
                {guide.category}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-gray-400" />
                Updated: {new Date(guide.date).toLocaleDateString()}
              </span>
              <span>•</span>
              <span className="text-military-blue font-bold">Branch: {guide.branch}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {guide.title}
            </h1>
          </div>

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
              if (block.startsWith('•')) {
                return (
                  <div key={index} className="flex items-start gap-2.5 my-1.5 pl-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{block.substring(1).trim()}</span>
                  </div>
                );
              }
              if (block.match(/^\d+\./)) {
                return (
                  <div key={index} className="flex items-start gap-2.5 my-2 pl-2 text-gray-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="font-bold text-military-blue shrink-0">{block.match(/^\d+\./)?.[0]}</span>
                    <span>{block.replace(/^\d+\./, '').trim()}</span>
                  </div>
                );
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-3">
                  {block}
                </p>
              );
            })}
          </article>

          {/* Official Security Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-900 mt-6">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Verification Warning:</strong>
              <span>
                All official military and paramilitary applications are 100% free. Never send money to individuals claiming to offer slot allocations or accelerated screening cards.
              </span>
            </div>
          </div>

          {/* Ad Unit after content */}
          <div className="pt-4">
            <AdUnit slot="GUIDE_CONTENT_BOTTOM_AD" />
          </div>

          {/* FAQ Accordion */}
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
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Related Recruitment Widget */}
          {relatedRecruitments.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-military-green" /> Related Openings
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
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-700 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" /> Practice Mock CBT Test
            </h3>
            <p className="text-xs text-indigo-950 leading-relaxed mb-4">
              Practice timed multiple-choice questions for military and paramilitary screening tests with instant scoring.
            </p>
            <Link
              to="/past-questions"
              className="w-full flex items-center justify-center py-2.5 bg-indigo-600 text-white font-bold rounded-lg text-xs hover:bg-indigo-700 transition-colors shadow-md"
            >
              Start Free CBT Practice
            </Link>
          </div>

          {/* Quick Support Banner */}
          <div className="bg-yellow-50/70 border border-yellow-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-800 mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-yellow-600" /> Need Help?
            </h3>
            <p className="text-xs text-yellow-900 leading-relaxed">
              Have questions about a specific screening center or portal technical issue? Contact our community support.
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
