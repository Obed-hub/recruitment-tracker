import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, Clock, AlertTriangle, ShieldCheck, Search, Filter,
  ArrowRight, ExternalLink, Calendar, BookOpen, GraduationCap,
  Sparkles, HelpCircle, Share2, Check, MessageCircle, AlertCircle
} from 'lucide-react';
import { subscribeToRecruitments } from '../services/firebase';
import { RecruitmentUpdate, Branch } from '../types';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import { getDailyUpdatedBadge } from '../services/dateUtils';
import NavyBatch39Banner from '../components/NavyBatch39Banner';

interface UpcomingAgency {
  name: string;
  category: string;
  expectedDate: string;
  cadres: string;
  status: 'Announced' | 'Awaiting Gazetting' | 'Portal Maintenance';
  portalUrl: string;
  hubUrl: string;
  warning: string;
}

const UPCOMING_2026_AGENCIES: UpcomingAgency[] = [
  {
    name: 'Nigerian Navy Recruitment 2026 (Batch 39)',
    category: 'Military',
    expectedDate: 'Opens 2 Oct 2026 • Closes 31 Oct 2026',
    cadres: 'Seaman / Naval Ratings, NCOs, Commissioned Officers',
    status: 'Announced',
    portalUrl: 'https://www.joinnigeriannavy.gov.ng',
    hubUrl: '/navy-batch-recruitment',
    warning: 'Official announcement released: registration begins 2 October 2026 on www.joinnigeriannavy.gov.ng. Registration is 100% free of charge.',
  },
  {
    name: 'Nigeria Immigration Service (NIS)',
    category: 'Paramilitary',
    expectedDate: 'Q2 / Q3 2026',
    cadres: 'Superintendent, Inspectorate, Assistant Cadre',
    status: 'Announced',
    portalUrl: 'https://cdcfib.career',
    hubUrl: '/nis-recruitment',
    warning: 'CDCFIB has not opened the NIS portal for 2026 general intake. Beware of fake cdcfib-portal.com links charging application fees.',
  },
  {
    name: 'Nigeria Security and Civil Defence Corps (NSCDC)',
    category: 'Paramilitary',
    expectedDate: 'Mid 2026',
    cadres: 'Corps Assistant, Inspectorate & Superintendent',
    status: 'Announced',
    portalUrl: 'https://cdcfib.career',
    hubUrl: '/nscdc-recruitment',
    warning: 'Civil Defence recruitment is exclusively hosted on cdcfib.career. Do not patronize syndicates asking for payment.',
  },
  {
    name: 'NNPC Limited Graduate Trainee & Experienced Hire',
    category: 'Federal Parastatal',
    expectedDate: '2026 Cycle Announcement',
    cadres: 'Graduate Trainee (First Class/2:1), Experienced Hire',
    status: 'Announced',
    portalUrl: 'https://careers.nnpcgroup.com',
    hubUrl: '/nnpc-recruitment',
    warning: 'NNPC never charges aptitude test or processing fees. Verify all portal updates on nnpcgroup.com.',
  },
  {
    name: 'Federal Fire Service (FFS)',
    category: 'Paramilitary',
    expectedDate: 'Q3 2026',
    cadres: 'Fireman/Firewoman, Assistant Inspector, Assistant Superintendent',
    status: 'Awaiting Gazetting',
    portalUrl: 'https://cdcfib.career',
    hubUrl: '/fire-service-recruitment',
    warning: 'Recruitment is 100% free under CDCFIB board directives.',
  },
  {
    name: 'Central Bank of Nigeria (CBN)',
    category: 'Financial Regulatory',
    expectedDate: '2026 Annual Entry Window',
    cadres: 'Entry-Level Executive, IT Analysts, Economists',
    status: 'Awaiting Gazetting',
    portalUrl: 'https://www.cbn.gov.ng',
    hubUrl: '/cbn-recruitment',
    warning: 'Beware of fake recruitment portals like cbn-careers-gov.org. CBN recruits only through official press bulletins.',
  },
  {
    name: 'Federal Road Safety Corps (FRSC)',
    category: 'Paramilitary',
    expectedDate: 'Late 2026',
    cadres: 'RMA (Road Marshal Assistant), MI (Marshal Inspector), ARC',
    status: 'Portal Maintenance',
    portalUrl: 'https://frsc.gov.ng',
    hubUrl: '/frsc-recruitment',
    warning: 'FRSC recruitment is conducted under the supervision of the Civil Defence & Paramilitary board.',
  }
];

const WHICH_FORM_FAQS = [
  {
    question: 'Which military or paramilitary recruitment form is currently out in 2026?',
    answer: 'Currently in 2026, the Nigerian Army DSSC (Direct Short Service Commission) and Nigeria Police Force (NPF) Constable recruitment are accepting verified online applications. Nigerian Navy Batch 38 has completed registration and entered screening stage, while Batch 39 is scheduled for announcement.'
  },
  {
    question: 'Is the Nigerian Army 88 Regular Recruit Intake (RRI) form out for 2026?',
    answer: 'The Nigerian Army publishes official calls for 88 RRI exclusively on recruitment.army.mil.ng. When open, registration runs for approximately 6 to 8 weeks. Beware of Facebook and WhatsApp syndicates claiming scratch cards are on sale—Army registration is 100% free.'
  },
  {
    question: 'Is the Nigeria Police Constable 2026 form open?',
    answer: 'Yes. The Police Service Commission (PSC) and Nigeria Police Force (NPF) open online applications via apply.policerecruitment.gov.ng for General Duty and Specialist Constables. Applicants must possess a minimum of 5 credits in WAEC/NECO/NABTEB including English and Mathematics.'
  },
  {
    question: 'Has CDCFIB opened recruitment for Immigration (NIS) or Civil Defence (NSCDC)?',
    answer: 'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) is currently preparing the next intake cycle on cdcfib.career. Candidates should verify their National Identity Number (NIN) and keep their O-Level result slips ready while monitoring official announcements.'
  },
  {
    question: 'How do I avoid recruitment scams when checking which form is out?',
    answer: 'Follow four strict rules: (1) Never pay money for recruitment scratch cards, PINs, or guaranteed slots; (2) Always verify the web address ends in .gov.ng or .mil.ng; (3) Do not transfer funds to personal bank accounts; (4) Use our verified tracker to access official portal links directly.'
  }
];

const WhichFormIsOut: React.FC = () => {
  const [recruitments, setRecruitments] = useState<RecruitmentUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'all' | 'open' | 'screening' | 'upcoming'>('all');
  const [selectedQualification, setSelectedQualification] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const unsub = subscribeToRecruitments((data) => {
      setRecruitments(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const openForms = useMemo(() => {
    return recruitments.filter(r => r.status === 'Open');
  }, [recruitments]);

  const screeningForms = useMemo(() => {
    return recruitments.filter(r => r.status === 'Shortlist Out');
  }, [recruitments]);

  const closedForms = useMemo(() => {
    return recruitments.filter(r => r.status === 'Closed');
  }, [recruitments]);

  const filteredRecruitments = useMemo(() => {
    return recruitments.filter(item => {
      if (selectedTab === 'open' && item.status !== 'Open') return false;
      if (selectedTab === 'screening' && item.status !== 'Shortlist Out') return false;
      if (selectedTab === 'upcoming') return false;

      if (selectedQualification !== 'all') {
        const titleAndCat = `${item.title} ${item.category} ${item.description || ''}`.toLowerCase();
        if (selectedQualification === 'ssce' && !titleAndCat.includes('tradesmen') && !titleAndCat.includes('recruit') && !titleAndCat.includes('constable') && !titleAndCat.includes('bmtc') && !titleAndCat.includes('cadet')) {
          // Keep general non-commissioned entries
        }
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchBranch = item.branch.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        if (!matchTitle && !matchBranch && !matchCat) return false;
      }

      return true;
    });
  }, [recruitments, selectedTab, selectedQualification, searchQuery]);

  const handleCopyLink = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getBranchBadgeColor = (branch: Branch) => {
    switch (branch) {
      case 'Army': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Navy': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Air Force': return 'bg-sky-100 text-sky-800 border-sky-300';
      case 'Police': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'Civil Defence': return 'bg-red-100 text-red-800 border-red-300';
      case 'Immigration': return 'bg-teal-100 text-teal-800 border-teal-300';
      case 'Customs': return 'bg-amber-100 text-amber-800 border-amber-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const getHubPath = (branch: Branch, id: string) => {
    switch (branch) {
      case 'Army': return '/army-recruitment';
      case 'Navy': return '/navy-recruitment';
      case 'Air Force': return '/airforce-recruitment';
      case 'Police': return '/police-recruitment';
      case 'Civil Defence': return '/nscdc-recruitment';
      case 'Immigration': return '/nis-recruitment';
      case 'Customs': return '/customs-recruitment';
      case 'NNPC': return '/nnpc-recruitment';
      case 'CBN': return '/cbn-recruitment';
      default: return `/recruitments/${id}`;
    }
  };

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Recruitments', item: '/recruitments' },
    { name: 'Which Form is Out Now?', item: '/which-recruitment-form-is-out-now' }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      <SEO
        title="Which Recruitment Form is Out Now? (2026/2027 Live Status & Official Portals)"
        description="Comprehensive live tracker for recruitment forms currently selling and open in Nigeria for 2026. Check Army, Navy, Police, Immigration, NSCDC and NNPC portal updates, closing dates, and screening venues."
        canonical="/which-recruitment-form-is-out-now"
        keywords={[
          'which recruitment form is out now',
          'is nigerian army form out for 2026',
          'which recruitment form is selling now',
          'nigeria police recruitment 2026',
          'immigration recruitment 2026 portal',
          'nscdc form out 2026',
          'federal government recruitment forms out now',
          'jobs recruiting in nigeria 2026'
        ]}
      />

      <BreadcrumbListSchema items={breadcrumbs} />
      <FAQPageSchema faqs={WHICH_FORM_FAQS} />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-military-navy to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            2026 Live Status Board • {getDailyUpdatedBadge()}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
            Which Recruitment Form is Out Now in Nigeria?
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Real-time verified status of all Federal Military, Police, Paramilitary (CDCFIB), and Corporate Agency application portals for 2026/2027. Avoid scams and fake payment agents.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-slate-800/80">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Open Now
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {loading ? '...' : openForms.length}
              </div>
              <div className="text-[11px] text-slate-400">Accepting applications</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400" /> Screening
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {loading ? '...' : screeningForms.length}
              </div>
              <div className="text-[11px] text-slate-400">Shortlists & CBT</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-400" /> Upcoming
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {UPCOMING_2026_AGENCIES.length}
              </div>
              <div className="text-[11px] text-slate-400">2026 Announced</div>
            </div>
          </div>
        </div>
      </div>

      {/* Anti-Scam Public Advisory */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-sm">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <strong className="font-bold block text-amber-950 mb-1">
            CRITICAL NIGERIA RECRUITMENT VERIFICATION DIRECTIVE:
          </strong>
          All Nigerian Military (Army, Navy, Air Force), Police (PSC), and Paramilitary (NIS, NSCDC, Fire Service, NCoS) registration forms are <strong>100% FREE OF CHARGE</strong>. Never purchase scratch cards, PIN codes, or make bank transfers to individuals claiming to guarantee shortlisted slots.
        </div>
      </div>

      {/* Breaking Navy Batch 39 Announcement & Countdown */}
      <NavyBatch39Banner />

      {/* Interactive Filter & Search Controls */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          {/* Status Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedTab === 'all'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Recruitment Forms ({recruitments.length})
            </button>
            <button
              onClick={() => setSelectedTab('open')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'open'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open & Selling Now ({openForms.length})
            </button>
            <button
              onClick={() => setSelectedTab('screening')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'screening'
                  ? 'bg-amber-600 text-white shadow'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Shortlist Out ({screeningForms.length})
            </button>
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'upcoming'
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
              }`}
            >
              Upcoming 2026 ({UPCOMING_2026_AGENCIES.length})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Army, Navy, NIS, Police..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* Section 1: Active Portals List */}
      {selectedTab !== 'upcoming' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <span>Recruitment Portals Live Status</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {filteredRecruitments.length} Results
              </span>
            </h2>

            <Link
              to="/eligibility"
              className="text-xs font-bold text-military-green hover:underline flex items-center gap-1"
            >
              Check My Eligibility <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="py-16 text-center">
              <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-600">Checking live portal statuses...</p>
            </div>
          ) : filteredRecruitments.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
              <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No recruitment matches found</h3>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting a different status filter.</p>
              <button
                onClick={() => { setSelectedTab('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRecruitments.map((recruitment) => {
                const isOpen = recruitment.status === 'Open';
                const isShortlist = recruitment.status === 'Shortlist Out';
                const daysLeft = Math.ceil((new Date(recruitment.deadline_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                const shareText = `🚨 *${recruitment.title}* is verified! Status: ${recruitment.status.toUpperCase()}. Check requirements & apply safely on official portal: https://recruitmenttracker.com.ng/recruitments/${recruitment.id}`;
                const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

                return (
                  <div
                    key={recruitment.id}
                    className={`bg-white rounded-2xl p-5 border transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
                      isOpen
                        ? 'border-emerald-300 shadow-sm'
                        : isShortlist
                        ? 'border-amber-300'
                        : 'border-slate-200'
                    }`}
                  >
                    <div>
                      {/* Status Badges Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getBranchBadgeColor(recruitment.branch)}`}>
                          {recruitment.branch}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-md flex items-center gap-1 ${
                              isOpen
                                ? 'bg-emerald-600 text-white'
                                : isShortlist
                                ? 'bg-amber-500 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {isOpen && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                            {recruitment.status}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-2 hover:text-emerald-700 transition-colors">
                        <Link to={`/recruitments/${recruitment.id}`}>
                          {recruitment.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                        {recruitment.description || `Official ${recruitment.branch} recruitment exercise. Review entry guidelines, qualification prerequisites, and screening schedule.`}
                      </p>

                      <div className="space-y-1.5 text-xs text-slate-500 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 flex items-center gap-1">
                            <GraduationCap className="w-3.5 h-3.5" /> Category:
                          </span>
                          <span className="font-semibold text-slate-800">{recruitment.category}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> Deadline:
                          </span>
                          <span className="font-semibold text-slate-800">
                            {new Date(recruitment.deadline_date).toLocaleDateString()}
                            {isOpen && daysLeft >= 0 && (
                              <span className="ml-1 text-[10px] font-bold text-emerald-600">
                                ({daysLeft === 0 ? 'Today!' : `${daysLeft} days left`})
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <Link
                        to={`/recruitments/${recruitment.id}`}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
                          isOpen
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        {isOpen ? 'Check Requirements & Apply' : 'View Portal & CBT Slip'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* WhatsApp Viral Share Button */}
                      <a
                        href={whatsappShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share to WhatsApp"
                        className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 transition-colors"
                        title="Share on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>

                      {/* Copy Link Button */}
                      <button
                        onClick={() => handleCopyLink(recruitment.id, `https://recruitmenttracker.com.ng/recruitments/${recruitment.id}`)}
                        className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                        title="Copy link"
                      >
                        {copiedId === recruitment.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Ad Unit Between Lists */}
      <AdUnit slot="WHICH_FORM_MID_AD" format="horizontal" />

      {/* Section 2: Expected 2026 Recruitment Intakes (Upcoming Forms) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            2026 Expected Cycle Calendar
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Upcoming Military, Paramilitary & Parastatal Forms (2026 Intake)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            These federal agencies have announced or are preparing their 2026 recruitment cycles. Keep your National Identity Number (NIN) and O-Level certificates updated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {UPCOMING_2026_AGENCIES.map((agency, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {agency.category}
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    Expected: {agency.expectedDate}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 mb-1">
                  {agency.name}
                </h3>

                <p className="text-xs text-slate-600 mb-2">
                  <strong className="text-slate-800 font-semibold">Available Cadres:</strong> {agency.cadres}
                </p>

                <div className="p-2.5 bg-amber-50/70 border border-amber-200/60 rounded-xl text-[11px] text-amber-900 leading-relaxed mb-3">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 inline mr-1 -mt-0.5" />
                  {agency.warning}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
                <Link
                  to={agency.hubUrl}
                  className="flex-1 py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold text-center transition-colors"
                >
                  View Agency Portal Guide
                </Link>

                <a
                  href={agency.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  Official Web <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Converting Secondary Gateways */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/past-questions"
          className="p-5 bg-gradient-to-br from-purple-900 to-indigo-950 text-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-500/30 flex items-center justify-center text-purple-300 mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-black text-sm mb-1 text-white group-hover:text-purple-200 transition-colors">
            Free 2026 CBT Past Questions
          </h3>
          <p className="text-xs text-purple-200/80 leading-relaxed">
            Practice timed Computer-Based Tests for Army DSSC, Navy, and Police Constable exams.
          </p>
        </Link>

        <Link
          to="/shortlist-hub"
          className="p-5 bg-gradient-to-br from-amber-900 to-yellow-950 text-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-500/30 flex items-center justify-center text-amber-300 mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-black text-sm mb-1 text-white group-hover:text-amber-200 transition-colors">
            State Screening Venues & PDF Checker
          </h3>
          <p className="text-xs text-amber-200/80 leading-relaxed">
            Check official physical screening centers across all 36 states and FCT Abuja.
          </p>
        </Link>

        <Link
          to="/salary-comparison"
          className="p-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/30 flex items-center justify-center text-emerald-300 mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-black text-sm mb-1 text-white group-hover:text-emerald-200 transition-colors">
            2026 Salary Comparison Table
          </h3>
          <p className="text-xs text-emerald-200/80 leading-relaxed">
            Compare monthly allowances and CONAFSS salary scales for all military & paramilitary ranks.
          </p>
        </Link>
      </div>

      {/* Frequently Asked Questions (PAA Section) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Candidate Questions Answered
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions: Which Recruitment Form is Out?
          </h2>
        </div>

        <div className="space-y-3">
          {WHICH_FORM_FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-4 transition-colors open:bg-white open:border-emerald-300"
            >
              <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg ml-2">
                  ▾
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhichFormIsOut;
