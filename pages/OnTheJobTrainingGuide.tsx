import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Hammer, CheckCircle2, Search, ExternalLink, HelpCircle,
  ArrowRight, ShieldCheck, DollarSign, Award, Factory, MapPin,
  Sparkles, CheckSquare, Square
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import { VOCATIONAL_TRADES } from '../services/mockTraineePrograms';

const ON_THE_JOB_FAQS = [
  {
    question: 'What are On-the-Job Training (OJT) jobs?',
    answer: 'On-the-job training (OJT) jobs are paid employment positions where candidates receive hands-on technical instruction, industry certifications, and daily mentorship while working on live production lines, construction sites, or industrial facilities. You earn a monthly wage/stipend from day one with zero required prior work experience.'
  },
  {
    question: 'What are the top government-backed On-the-Job Training schemes in Nigeria?',
    answer: 'The primary government vocational programs include: (1) Industrial Training Fund (ITF) National Industrial Skills Development Programme (NISDP), (2) National Directorate of Employment (NDE) National Open Apprenticeship Scheme (NOAS), and (3) Petroleum Technology Development Fund (PTDF) specialized technical welding and fabrication apprenticeships.'
  },
  {
    question: 'How much do paid vocational trainees earn during on-the-job training?',
    answer: 'Monthly stipends typically range from ₦45,000 to ₦70,000 in public vocational programs (ITF/NDE) with free starter toolkits, ₦90,000 to ₦150,000 in manufacturing conglomerates (Flour Mills of Nigeria, Dangote Academy, Julius Berger), and up to ₦180,000 in offshore oil and gas specialized technical crafts (SMAW/GTAW Welding, NDT).'
  },
  {
    question: 'Do I need a university degree to apply for on-the-job training jobs?',
    answer: 'No. Most vocational on-the-job training schemes only require a Senior Secondary School Certificate (SSCE/WAEC/NECO), National Technical Certificate (NABTEB), or National Diploma (ND). Selection focuses on mechanical aptitude, basic numeracy, physical fitness, and eagerness to learn.'
  }
];

const OnTheJobTrainingGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredTrades = VOCATIONAL_TRADES.filter(t =>
    t.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.sponsoringBody.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.employmentSectors.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <SEO
        title="On the Job Training Jobs: Paid Apprenticeships & Vocational Schemes 2026"
        description="Find paid on-the-job training jobs in Nigeria. Complete guide to ITF-NISDP, Julius Berger, Dangote Academy, and Flour Mills technical apprenticeships with monthly stipends (₦50k - ₦180k) and zero experience requirements."
        canonicalUrl="/training/on-the-job"
        keywords={[
          'on the job training jobs',
          'on the job training jobs near me',
          'paid training jobs',
          'vocational apprenticeships nigeria',
          'itf skills acquisition training',
          'technical trainee jobs'
        ]}
      />

      <ArticleSchema
        title="How to Find On the Job Training Jobs: Complete Vocational Guide"
        description="Definitive directory and career blueprint for securing paid vocational apprenticeships, earn-while-learning programs, and accredited industrial certifications."
        url="/training/on-the-job"
        publishedAt="2026-10-06T00:45:00.000Z"
        updatedAt="2026-10-06T00:45:00.000Z"
      />

      <FAQPageSchema faqs={ON_THE_JOB_FAQS} />

      <div className="bg-slate-900 text-slate-100 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-950/60 via-slate-900 to-slate-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-amber-900/40">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Earn While You Learn • Zero Experience Required</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              How to Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-emerald-300">On the Job Training Jobs</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Start earning a monthly salary immediately while learning high-demand industrial trades, mechatronics, electrical engineering, and precision manufacturing across verified corporate and government apprenticeships.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#trades-directory"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold transition shadow-lg shadow-amber-900/40"
              >
                <Wrench className="w-5 h-5" />
                <span>Explore Vocational Schemes</span>
              </a>
              <Link
                to="/traineeships/guide"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition"
              >
                <span>Corporate Graduate Traineeships</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <AdUnit slot="ojt-top" format="horizontal" />
        </div>

        {/* Benefits of Paid On-the-Job Training */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Benefits of Paid Job Training Programs</h2>
                <p className="text-sm text-slate-400">Why hands-on industrial apprenticeships outperform classroom theory</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>1. Guaranteed Monthly Stipend</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Avoid student loans or unpaid internships. Receive standard monthly stipends (₦50k – ₦180k) plus free protective gear (PPE), meals, and safety allowances.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>2. Internationally Accredited Licensure</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Graduate with recognized industry credentials such as City & Guilds London, German Dual Vocational (AHK), NABTEB Advanced Craft, and AWS Welding certifications.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>3. 85%+ Direct Absorption Rate</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Companies like Flour Mills, Julius Berger, and Dangote recruit apprentices specifically to staff expanding production lines, resulting in immediate full-time employment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Directory of Verified Vocational Trades */}
        <section id="trades-directory" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">High-Demand Paid Vocational Training Programs</h2>
                <p className="text-sm text-slate-400">Verified corporate and public technical training programs in Nigeria</p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter trade, sponsor, or sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTrades.map((trade, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-amber-500/10 text-amber-300 rounded border border-amber-500/20">
                        {trade.durationMonths} Months Program
                      </span>
                      <span className="text-xs text-emerald-400 font-mono font-medium">
                        {trade.stipendRange}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white">{trade.trade}</h3>
                      <p className="text-xs text-slate-400 font-medium mt-0.5 flex items-center gap-1.5">
                        <Factory className="w-3.5 h-3.5 text-amber-400" />
                        <span>{trade.sponsoringBody}</span>
                      </p>
                    </div>

                    <div className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800 pt-3">
                      <div>
                        <strong className="text-slate-400 block">Certifications Awarded:</strong>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {trade.certificationsAwarded.map((cert, cIdx) => (
                            <span key={cIdx} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[11px]">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-1">
                        <strong className="text-slate-400">Target Hiring Sectors: </strong>
                        <span>{trade.employmentSectors.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Verified Training Body</span>
                    <a
                      href={trade.officialPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs transition"
                    >
                      <span>Application Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finding Opportunities Near You */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">How to Find Opportunities in Your Area</h2>
                <p className="text-sm text-slate-400">Step-by-step methodology for locating local training centers</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl space-y-1">
                <h3 className="font-bold text-white text-sm">1. Industrial Training Fund (ITF) Area Offices</h3>
                <p>
                  Visit the nearest ITF Area Office located in every state capital (e.g., Lagos, Abuja, Ibadan, Kaduna, Port Harcourt, Kano, Jos). Register for the upcoming cohort of the National Industrial Skills Development Programme (NISDP).
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl space-y-1">
                <h3 className="font-bold text-white text-sm">2. National Directorate of Employment (NDE) Skill Acquisition Centers</h3>
                <p>
                  Submit your SSCE or National Diploma credential at your state NDE office for placement into accredited private technical partner workshops across automotive, electrical, and fabrication lines.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl space-y-1">
                <h3 className="font-bold text-white text-sm">3. Direct Corporate Academy Intake Windows</h3>
                <p>
                  Watch for annual Q1 and Q3 technical apprenticeship advertisements from major industrial conglomerates like Flour Mills of Nigeria (FMN Technical Trainee), Dangote Academy Obajana, and Julius Berger Vocational Academy Abuja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <AdUnit slot="ojt-bottom" format="rectangle" />
        </div>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {ON_THE_JOB_FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/70 rounded-xl overflow-hidden bg-slate-900/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-200 hover:text-white transition text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <span className="text-amber-400 font-mono text-lg shrink-0">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnTheJobTrainingGuide;
