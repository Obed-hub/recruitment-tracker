import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Search, ExternalLink, ShieldCheck, CheckCircle2,
  AlertTriangle, ArrowRight, BookOpen, Sparkles, Building2,
  Flame, HeartPulse, GraduationCap, Landmark, HelpCircle, Layers,
  ChevronRight, Laptop, Clock
} from 'lucide-react';
import SEO from '../components/SEO';
import { BreadcrumbListSchema, FAQPageSchema } from '../components/StructuredData';
import { HOW_TO_APPLY_GUIDES } from '../data/howToApplyData';
import AdUnit from '../components/AdUnit';

export const HowToApplyHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const sectorFilters = [
    { id: 'all', label: 'All Sectors' },
    { id: 'oil-gas', label: 'Oil & Gas / Energy', branchMatch: 'Oil & Gas' },
    { id: 'banking', label: 'Commercial Banking', branchMatch: 'Commercial Banking' },
    { id: 'civil-service', label: 'Federal Civil Service', branchMatch: 'Federal Civil Service' },
    { id: 'law-enforcement', label: 'Anti-Graft & Paramilitary', branchMatch: 'Paramilitary & Law Enforcement' },
    { id: 'teaching', label: 'Teaching & Education', branchMatch: 'Education & Teaching' },
    { id: 'empowerment', label: 'Youth Empowerment & NDDC', branchMatch: 'Empowerment & Intervention' },
    { id: 'healthcare', label: 'Healthcare & MDCN', branchMatch: 'Healthcare' },
  ];

  const filteredGuides = useMemo(() => {
    return HOW_TO_APPLY_GUIDES.filter((guide) => {
      const activeFilter = sectorFilters.find(f => f.id === selectedSector);
      const matchesSector = selectedSector === 'all' || (activeFilter && guide.branch === activeFilter.branchMatch);
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesSector;

      return (
        matchesSector &&
        (guide.title.toLowerCase().includes(q) ||
          guide.description.toLowerCase().includes(q) ||
          guide.branch.toLowerCase().includes(q) ||
          guide.keywords.some(k => k.toLowerCase().includes(q)))
      );
    });
  }, [searchQuery, selectedSector]);

  const documentChecklist = [
    { id: 'nin', title: 'National Identification Number (NIN) Slip', desc: 'Must match your birth date and certificate name spelling exactly.' },
    { id: 'passport', title: 'Recent Digital Passport Photograph', desc: 'White or plain off-white background, under 50KB in JPEG format.' },
    { id: 'olevel', title: 'O-Level Certificate / Statement (WAEC/NECO/NABTEB)', desc: 'Minimum 5 credits including Math & English (single or two sittings depending on agency).' },
    { id: 'degree', title: 'Degree / HND / ND / NCE Certificate or Statement', desc: 'Clean scanned PDF or JPEG under 100KB–200KB.' },
    { id: 'nysc', title: 'NYSC Discharge or Official Exemption Certificate', desc: 'Compulsory for degree & HND holders applying for graduate/officer roles.' },
    { id: 'lga', title: 'Certificate of State of Origin / LGA Identification', desc: 'Duly signed by your Local Government Chairman or State Liaison Office.' },
  ];

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / documentChecklist.length) * 100);

  const hubFaqs = [
    {
      question: 'Do Nigerian recruitment portals charge application fees?',
      answer: 'No. Legitimate Federal Government agencies (NNPC, FIRS, EFCC, Civil Service) and tier-1 commercial banks (Access Bank, GTBank, Zenith) NEVER charge fees, sell scratch cards, or require money for job application forms. Any agent demanding payment is fraudulent.'
    },
    {
      question: 'Why do so many applications get automatically rejected on the portal?',
      answer: 'The top causes of automated rejection are: 1. Name or date-of-birth mismatch between your NIN and WAEC/degree certificates; 2. Uploading blurry documents or files exceeding maximum file sizes (e.g. over 100KB); 3. Applying with awaiting results when completed degrees are mandatory; 4. Age limit exceedance.'
    },
    {
      question: 'What is the best format for uploading CVs and certificates?',
      answer: 'Always use clean PDF format for certificates and transcripts, and high-quality JPEG for passport photos. Use a free PDF compressor to ensure your files remain under 150KB while retaining high legibility.'
    },
    {
      question: 'What should I do after submitting my online application?',
      answer: 'Immediately download and print 2 copies of your Application Acknowledgement Slip with your Registration Reference ID. Next, begin practicing sector-specific Computer-Based Test (CBT) aptitude past questions, as test invitations often arrive with only 48 to 72 hours notice.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6">
      <SEO
        title="How to Apply for Jobs in Nigeria 2026: Official Portals & Application Guides"
        description="Comprehensive step-by-step application walkthroughs for NNPC, Access Bank ELTP, GTBank, FIRS, EFCC, NLNG, SUBEB, and Federal Civil Service. Direct portal links, document checklists, and CBT test prep."
        canonicalUrl="/how-to-apply"
        keywords="how to apply for jobs in nigeria, how to apply for nnpc recruitment, how to apply for access bank graduate trainee, how to apply for firs recruitment portal, official recruitment portals nigeria 2026"
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'How to Apply Hub', url: '/how-to-apply' }
        ]}
      />

      <FAQPageSchema faqs={hubFaqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-800/40 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Verified 2026/2027 Application Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            How to Apply for Nigerian Recruitment & Graduate Schemes
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Stop falling for 300-word clickbait blogs and fake WhatsApp agents. Access verified, end-to-end application guides with direct official portal URLs, document size guidelines, CBT past question bridges, and authentic 2026 salary structures.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">Application Fees</span>
              <span className="text-emerald-400 font-extrabold text-lg">₦0.00 (100% Free)</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">Verified Guides</span>
              <span className="text-white font-extrabold text-lg">{HOW_TO_APPLY_GUIDES.length}+ Portals</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">CBT Practice Bridge</span>
              <span className="text-amber-300 font-extrabold text-lg">Instant Access</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">Salary Transparency</span>
              <span className="text-sky-400 font-extrabold text-lg">2026 Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Flight Document Readiness Checklist */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-military-blue font-bold text-sm uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              Pre-Flight Checklist
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Prepare Your Documents Before Opening Any Portal
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Most recruitment portals time out in 20 minutes. Check off your credentials to ensure smooth, error-free submission.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 self-start sm:self-auto">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-military-blue text-white">
              {progressPercent}%
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block">Readiness Score</span>
              <span className="text-sm font-bold text-slate-800">{completedCount} of {documentChecklist.length} Ready</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {documentChecklist.map((doc) => {
            const isChecked = !!checkedDocs[doc.id];
            return (
              <div
                key={doc.id}
                onClick={() => toggleDoc(doc.id)}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : 'bg-slate-50/50 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                  isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="flex-1">
                  <h4 className={`text-sm font-bold ${isChecked ? 'text-emerald-900' : 'text-slate-900'}`}>
                    {doc.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{doc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ad Placement */}
      <AdUnit slotId="how-to-apply-top" className="my-6" />

      {/* Search & Sector Filters */}
      <div className="space-y-4 mb-8">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by agency, company, qualification, or position (e.g., 'NNPC', 'Access Bank', 'FIRS', 'SUBEB')..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-slate-900"
          />
        </div>

        {/* Sector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {sectorFilters.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setSelectedSector(sector.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedSector === sector.id
                  ? 'bg-military-blue text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {sector.label}
            </button>
          ))}
        </div>
      </div>

      {/* Application Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filteredGuides.map((guide) => (
          <article
            key={guide.slug}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            <div className="p-6">
              {/* Top Badge & Branch */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  {guide.branch}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Free
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug hover:text-military-blue transition-colors">
                <Link to={`/guides/${guide.slug}`}>{guide.title}</Link>
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {guide.description}
              </p>

              {/* Quick Metrics from QuickAnswer */}
              {guide.quickAnswer?.metrics && (
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                  {guide.quickAnswer.metrics.slice(0, 4).map((m, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-slate-400 block font-medium text-[10px]">{m.label}</span>
                      <span className={`font-bold ${m.highlight ? 'text-emerald-700' : 'text-slate-800'}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Official Portal Box */}
              {guide.officialPortalUrl && (
                <div className="flex items-center justify-between bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 text-xs mb-2">
                  <span className="text-slate-500 font-medium">Official Portal:</span>
                  <a
                    href={guide.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-military-blue font-bold hover:underline flex items-center gap-1"
                  >
                    {guide.officialPortalUrl.replace('https://', '')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Bottom Actions Row */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <Link
                to={`/guides/${guide.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-military-blue hover:text-blue-800 transition-colors"
              >
                Read Full Guide
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  to="/aptitude-test-past-questions"
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  CBT Practice
                </Link>
                <Link
                  to="/salary-comparison"
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  2026 Salary
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Ad Placement */}
      <AdUnit slotId="how-to-apply-bottom" className="my-8" />

      {/* FAQs Section */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
        <div className="flex items-center gap-2 text-military-blue font-bold text-sm uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" />
          Frequently Asked Questions
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Everything You Need to Know About Applying for Jobs in Nigeria
        </h2>

        <div className="space-y-4">
          {hubFaqs.map((faq, index) => (
            <div key={index} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
              <h4 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 text-center shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">
          Applied Successfully? Don’t Stop There!
        </h3>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          90% of applicants who pass the online form stage fail the computer-based test (CBT) because of poor time management. Start practicing sector-specific questions today.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/aptitude-test-past-questions"
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md"
          >
            Practice Free CBT Past Questions
          </Link>
          <Link
            to="/interview-questions-and-answers"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
          >
            Study STAR Interview Scripts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowToApplyHub;
