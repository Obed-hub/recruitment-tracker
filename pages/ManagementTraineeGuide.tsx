import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Award, CheckCircle2, HelpCircle, ArrowRight, BookOpen,
  DollarSign, Briefcase, Globe, Target, UserCheck, ShieldCheck,
  CheckSquare, Square, FileText, Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';

const MANAGEMENT_FAQS = [
  {
    question: 'What is a Management Trainee Program?',
    answer: 'A Management Trainee Program is a fast-track executive grooming scheme operated by major multinationals (such as BAT, Unilever, Nestle, Dangote, and MTN). Rather than filling a single functional desk, management trainees undergo structured 12 to 36-month cross-departmental rotations (Sales, Marketing, Supply Chain, Operations, Finance) and graduate directly into middle or senior managerial positions.'
  },
  {
    question: 'How much do Management Trainees earn in Nigeria?',
    answer: 'In Nigeria, top-tier Management Trainees earn between ₦500,000 and ₦750,000+ monthly in FMCG multinationals (BAT Global Graduate, Unilever UFLP), ₦400,000 to ₦600,000 in telecommunications (MTN Global Graduate), and ₦350,000 to ₦500,000 in industrial conglomerates (Dangote, Flour Mills of Nigeria), often accompanied by international rotation allowances, health insurance, and performance bonuses.'
  },
  {
    question: 'What happens at a Management Trainee Assessment Centre (AC)?',
    answer: 'The Assessment Centre is a rigorous, day-long evaluation designed to simulate real corporate decision-making. Candidates undergo: (1) In-tray prioritization exercises under strict time limits, (2) Unseen business case studies solved in groups, (3) Individual presentation of strategic solutions to a panel of C-suite executives, and (4) Competency-based behavioral interviews.'
  },
  {
    question: 'What are the main growth tracks for Management Trainees?',
    answer: 'The primary leadership tracks include: (1) Commercial & Trainee Sales Leadership, (2) Trainee Project Manager / Product Operations, (3) Supply Chain & Manufacturing Logistics, and (4) Corporate Strategy & Brand Management.'
  }
];

const SALARY_BENCHMARKS = [
  {
    industry: 'FMCG Multinationals (BAT, Unilever, Nestlé, Diageo)',
    monthlyGross: '₦500,000 – ₦850,000 / month',
    duration: '18 – 36 Months',
    postGraduationRole: 'Brand Manager, Territory Sales Manager, Shift Production Manager',
    perks: 'International training, car allowance, private healthcare, performance bonus'
  },
  {
    industry: 'Telecommunications & Tech (MTN, Airtel, Interswitch)',
    monthlyGross: '₦400,000 – ₦650,000 / month',
    duration: '12 – 24 Months',
    postGraduationRole: 'Product Operations Lead, Network Project Manager, Commercial Analyst',
    perks: 'Remote/hybrid flex, gadget allowance, tech conference sponsorships'
  },
  {
    industry: 'Industrial & Conglomerates (Dangote, FMN, BUA)',
    monthlyGross: '₦350,000 – ₦550,000 / month',
    duration: '12 – 18 Months',
    postGraduationRole: 'Assistant Plant Manager, Logistics Lead, Procurement Specialist',
    perks: 'Plant housing/subsidized accommodation, meal allowances, industrial hazard cover'
  },
  {
    industry: 'Commercial & Investment Banking (Access, GTCO, Stanbic IBTC)',
    monthlyGross: '₦280,000 – ₦450,000 / month',
    duration: '6 – 12 Months',
    postGraduationRole: 'Relationship Manager, Credit Risk Officer, Treasury Dealer',
    perks: 'Structured banking certifications (CFA/ACCA/CIBN), quarterly bonuses'
  }
];

const INTERVIEW_PREP_CHECKLIST = [
  { id: 'star', text: 'Master the STAR Framework (Situation, Task, Action, Result) for all behavioral competency answers' },
  { id: 'commercial', text: 'Thoroughly research the company’s 2025/2026 financial report, market share, and FMCG retail distribution model' },
  { id: 'case', text: 'Practice solving McKinsey/BCG-style market entry and profit-optimization business case studies' },
  { id: 'intray', text: 'Complete timed in-tray prioritization exercises (managing 15 urgent emails/memos under 45 minutes)' },
  { id: 'pitch', text: 'Prepare a compelling 2-minute elevator pitch demonstrating quantifiable leadership impact' }
];

const ManagementTraineeGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <SEO
        title="Management Trainee Programs 2026: Career Paths, Leadership Tracks & Salaries"
        description="Learn how to land a lucrative Management Trainee role in Nigeria. Complete breakdown of BAT, Unilever, Dangote, and MTN schemes, Assessment Centre case study prep, and salary scales (₦400k - ₦850k+)."
        canonicalUrl="/traineeships/management"
        keywords={[
          'management trainee',
          'management trainee programme',
          'management trainee program',
          'trainee sales',
          'trainee project manager',
          'international management trainee',
          'graduate management schemes'
        ]}
      />

      <ArticleSchema
        title="Management Trainee Programs: Launch Your Leadership Career"
        description="Comprehensive guide to landing high-paying Management Trainee programs, mastering the Assessment Centre, and accelerating your executive career."
        url="/traineeships/management"
        publishedAt="2026-10-06T00:45:00.000Z"
        updatedAt="2026-10-06T00:45:00.000Z"
      />

      <FAQPageSchema faqs={MANAGEMENT_FAQS} />

      <div className="bg-slate-900 text-slate-100 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-950/70 via-slate-900 to-slate-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-purple-900/40">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Executive Leadership Pipeline Blueprint</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Mastering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-amber-200">Management Trainee</span> Career Path
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Management Trainee programs are the most competitive, high-paying corporate pathways for young professionals. Discover how to conquer the Assessment Centre, navigate rotational tracks, and secure executive compensation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#assessment-centre"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition shadow-lg shadow-purple-900/40"
              >
                <Target className="w-5 h-5" />
                <span>Assessment Centre Masterclass</span>
              </a>
              <Link
                to="/traineeships/guide"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition"
              >
                <span>View General Graduate Schemes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <AdUnit slot="mgmt-trainee-top" format="horizontal" />
        </div>

        {/* Core Competencies for Success */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-purple-500/20 text-purple-400 rounded-xl">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Key Competencies Evaluated by Multinationals</h2>
                <p className="text-sm text-slate-400">The 4 critical pillars assessed during the selection process</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>1. Strategic Agility & Commercial Acumen</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ability to understand financial statements, market dynamics, cost drivers, and consumer psychology. Assessors look for candidates who think like business owners rather than employees.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span>2. Leading Teams Without Formal Authority</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Management trainees must influence senior technicians, plant operators, and cross-functional teams without having direct line authority. Emotional intelligence and persuasive negotiation are paramount.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span>3. High Cognitive Speed & Data Synthesis</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Processing complex charts, unorganized spreadsheets, and customer feedback surveys under severe time constraints to extract actionable business interventions.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>4. Resilience & Cultural Adaptability</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Trainees are frequently deployed to rural manufacturing hubs, regional distribution centers, or overseas headquarters. Demonstrating adaptability to changing environments is a primary selection filter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Roles: From Sales to Project Management */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">High-Growth Specialized Management Tracks</h2>
            <p className="text-sm text-slate-400 mb-6">Explore the fastest routes to executive leadership</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-3 hover:border-purple-500/40 transition">
                <span className="text-xs font-semibold px-2.5 py-0.5 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">
                  Commercial Leadership
                </span>
                <h3 className="text-lg font-bold text-white">Trainee Sales & Territory Manager</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focuses on distributor relationship management, key account negotiation, retail route-to-market optimization, and revenue growth. Trainees manage multi-million naira monthly trade budgets.
                </p>
                <div className="text-xs text-purple-300 font-mono border-t border-slate-800 pt-2">
                  <strong>Career Progression:</strong> Trainee Sales → Area Sales Manager → Commercial Director
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-3 hover:border-purple-500/40 transition">
                <span className="text-xs font-semibold px-2.5 py-0.5 bg-pink-500/10 text-pink-300 rounded border border-pink-500/20">
                  Product & Operations
                </span>
                <h3 className="text-lg font-bold text-white">Trainee Project Manager</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Oversees cross-functional business transformation projects, digital software rollouts, supply chain relocations, and new factory line commissioning using Agile and Scrum methodologies.
                </p>
                <div className="text-xs text-pink-300 font-mono border-t border-slate-800 pt-2">
                  <strong>Career Progression:</strong> Trainee PM → Project Lead → VP of Strategy & Operations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Centre Masterclass */}
        <section id="assessment-centre" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-purple-500/20 text-purple-400 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Assessment Centre (AC) Masterclass</h2>
                <p className="text-sm text-slate-400">A step-by-step blueprint for cracking the final hurdle</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base">1. The Group Business Case Simulation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Candidates are grouped in teams of 5–6 and given a 20-page fictional company dossier with declining margins. Assessors do NOT reward the loudest candidate; they reward the individual who synthesizes data, resolves team conflicts, keeps track of time, and structures the final presentation logically.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base">2. The In-Tray Prioritization Exercise</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You are presented with 20 incoming communications (client complaints, supply chain delays, safety hazards, executive emails) and given 45 minutes to categorize them into: *Urgent & Important (Do immediately)*, *Important but Not Urgent (Schedule)*, *Urgent but Not Important (Delegate)*, and *Neither (Ignore)* with clear written justifications.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-white text-base">3. The Executive Boardroom Pitch</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A 10-minute slide deck presentation to Vice Presidents and Managing Directors defending your strategic investment proposal, followed by 10 minutes of intense cross-examination challenging your financial projections and risk mitigation strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Specific Salary Table */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">2026 Management Trainee Compensation Matrix</h2>
            <p className="text-sm text-slate-400 mb-6">Real-world remuneration and progression benchmarks across Nigerian industries</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-300 bg-slate-900/60">
                    <th className="p-3.5 font-semibold">Industry Vertical</th>
                    <th className="p-3.5 font-semibold">Monthly Gross Remuneration</th>
                    <th className="p-3.5 font-semibold">Duration</th>
                    <th className="p-3.5 font-semibold">Post-Graduation Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 text-xs">
                  {SALARY_BENCHMARKS.map((bench, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="p-3.5 font-semibold text-white">{bench.industry}</td>
                      <td className="p-3.5 text-emerald-400 font-mono font-medium">{bench.monthlyGross}</td>
                      <td className="p-3.5">{bench.duration}</td>
                      <td className="p-3.5">{bench.postGraduationRole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Interactive Interview Checklist */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Management Trainee Interview Prep Checklist</h2>
            <p className="text-sm text-slate-400 mb-6">Tick off each prep milestone before heading into your Assessment Centre</p>

            <div className="space-y-3">
              {INTERVIEW_PREP_CHECKLIST.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className="cursor-pointer bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/40 transition"
                >
                  <button className="text-purple-400 shrink-0">
                    {checklist[item.id] ? <CheckSquare className="w-5 h-5 text-purple-400" /> : <Square className="w-5 h-5 text-slate-500" />}
                  </button>
                  <span className={`text-sm ${checklist[item.id] ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <AdUnit slot="mgmt-trainee-bottom" format="rectangle" />
        </div>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {MANAGEMENT_FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/70 rounded-xl overflow-hidden bg-slate-900/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-200 hover:text-white transition text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <span className="text-purple-400 font-mono text-lg shrink-0">
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

export default ManagementTraineeGuide;
