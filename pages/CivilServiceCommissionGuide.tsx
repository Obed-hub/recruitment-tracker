import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, Shield, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight,
  FileCheck, ExternalLink, Download, UserCheck, Scale, Award, Search,
  Briefcase, CheckSquare, Square, FileText, ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import { COMMISSIONS_DIRECTORY, GRADE_LEVEL_SCALES } from '../services/mockCivilService';

const COMMISSION_FAQS = [
  {
    question: 'What is the role of the Civil Service Commission?',
    answer: 'Under Section 153 and the Third Schedule of the 1999 Constitution of Nigeria, the Federal Civil Service Commission (FCSC) and respective State Civil Service Commissions are constitutionally empowered to appoint persons to offices in the civil service, dismiss and exercise disciplinary control over persons holding such offices, and establish merit-based promotion standards across ministries, departments, and agencies (MDAs).'
  },
  {
    question: 'What are the official rules governing Civil Service appointments?',
    answer: 'Appointments are strictly governed by the Revised Public Service Rules (PSR). Key conditions include: (1) Nigerian citizenship, (2) verified age (maximum 30-35 years for entry-level graduate cadre depending on MDA gazette), (3) requisite academic qualifications from accredited institutions, (4) National Youth Service Corps (NYSC) Discharge or Exemption Certificate, (5) medical fitness certification from a government hospital, and (6) a mandatory two-year probationary period prior to permanent confirmation.'
  },
  {
    question: 'How do I apply for Civil Service Commission jobs in Nigeria?',
    answer: 'Applications are submitted online via the official Federal Civil Service Commission recruitment portal (fedcivilservice.gov.ng) or designated state civil service job portals (e.g., jobs.lagosstate.gov.ng for Lagos, jobportal.oyostate.gov.ng for Oyo). All legitimate civil service applications are 100% free of charge.'
  },
  {
    question: 'What salary scale is used for Nigerian Civil Servants?',
    answer: 'Civil servants in core ministries are paid under the Consolidated Public Service Salary Structure (CONPSS), which ranges from Grade Level 03 (Junior Staff) to Grade Level 17 (Permanent Secretary / Director cadre). Specialized regulatory agencies and tax authorities use enhanced consolidated structures (e.g., CONRAISS, CONTOISS).'
  },
  {
    question: 'What is a Civil Service Certification / Shortlist?',
    answer: 'The Civil Service Certification list refers to the roster of vetted candidates who have passed computer-based screening, document verification, and oral interviews, making them eligible for formal issuance of Letters of Permanent Appointment.'
  }
];

const APPLICATION_CHECKLIST = [
  { id: 'nin', text: 'National Identification Number (NIN) slip matching date of birth and names' },
  { id: 'nysc', text: 'NYSC Discharge Certificate or official Certificate of Exemption' },
  { id: 'degree', text: "Original Degree / HND / ND / SSCE Certificates (Statements of Result accepted within validity)" },
  { id: 'lga', text: 'Local Government Area (LGA) Identification / Certificate of State of Origin' },
  { id: 'birth', text: 'Birth Certificate (NPC) or valid Declaration of Age sworn in high court' },
  { id: 'medical', text: 'Comprehensive Medical Fitness Certificate issued by a Federal/State Medical Facility' },
  { id: 'guarantor', text: 'Duly completed Civil Service Guarantor/Referee forms signed by senior public officers' }
];

const CivilServiceCommissionGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rules' | 'salary' | 'directory'>('rules');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checklistState, setChecklistState] = useState<{ [key: string]: boolean }>({});

  const toggleChecklist = (id: string) => {
    setChecklistState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCommissions = COMMISSIONS_DIRECTORY.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.shortName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Civil Service Commission: Jobs, Rules & Careers | Complete 2026 Guide"
        description="Comprehensive guide to Federal & State Civil Service Commission jobs, appointment rules, revised Public Service Rules (PSR), Grade Level CONPSS salary scales, and official recruitment portals."
        canonicalUrl="/jobs/civil-service-commission-guide"
        keywords={[
          'civil service commissions',
          'civil service commission jobs',
          'public service commission jobs',
          'civil service appointment rules',
          'civil service commission laws and rules',
          'fcsc recruitment portal',
          'civil service salary grade levels'
        ]}
      />

      <ArticleSchema
        title="Navigating Civil Service Commission Jobs & Rules"
        description="Authoritative guide on Civil Service Commission appointments, revised Public Service Rules, salary grade level matrices, and verified portal directories in Nigeria."
        url="/jobs/civil-service-commission-guide"
        publishedAt="2026-10-06T00:32:00.000Z"
        updatedAt="2026-10-06T00:32:00.000Z"
      />

      <FAQPageSchema faqs={COMMISSION_FAQS} />

      <div className="bg-slate-900 text-slate-100 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-5">
              <Scale className="w-4 h-4" />
              <span>Public Service Rules & Regulatory Directory 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Navigating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">Civil Service Commission</span> Jobs & Rules
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to know about applying for government jobs, constitutional appointment rules under the <strong>Revised Public Service Rules (PSR)</strong>, CONPSS salary structures, and official Commission portals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab('directory')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-lg shadow-blue-900/40"
              >
                <Search className="w-5 h-5" />
                <span>Search Commission Directory</span>
              </button>
              <Link
                to="/exams/civil-service-exam-guide"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition"
              >
                <span>Civil Service Exam Prep Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <AdUnit slot="civil-commission-top" format="horizontal" />
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex border-b border-slate-800 gap-2 sm:gap-4 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-4 py-2.5 font-semibold text-sm rounded-t-lg transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'rules'
                  ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>Appointment Rules & Legal Framework</span>
            </button>
            <button
              onClick={() => setActiveTab('salary')}
              className={`px-4 py-2.5 font-semibold text-sm rounded-t-lg transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'salary'
                  ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Grade Levels & CONPSS Salary Scale</span>
            </button>
            <button
              onClick={() => setActiveTab('directory')}
              className={`px-4 py-2.5 font-semibold text-sm rounded-t-lg transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'directory'
                  ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Commission Directory & Portals</span>
            </button>
          </div>

          {/* TAB 1: RULES & LEGAL FRAMEWORK */}
          {activeTab === 'rules' && (
            <div className="mt-8 space-y-8 animate-fadeIn">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Understanding Civil Service Commission Rules</h2>
                    <p className="text-sm text-slate-400">Constitutional Mandate & Revised Public Service Rules (PSR)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 space-y-3">
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span>1. Entry & Eligibility Mandate</span>
                    </h3>
                    <p className="leading-relaxed">
                      Applicants must be Nigerian citizens and not exceed the gazetted age ceiling (typically 30 years for GL 08 graduate entry, extending up to 35-40 for medical/specialist technical cadres). Must possess valid NYSC discharge or exemption certification.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 space-y-3">
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-blue-400" />
                      <span>2. Two-Year Probation & Confirmation</span>
                    </h3>
                    <p className="leading-relaxed">
                      All new appointments are probationary for a period of <strong>two (2) years</strong>. Confirmation of permanent pensionable appointment requires passing the ASCON Compulsory Confirmation Examination and maintaining satisfactory character reports.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 space-y-3">
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <Scale className="w-4 h-4 text-blue-400" />
                      <span>3. The 8-Year Directorate Tenure Policy</span>
                    </h3>
                    <p className="leading-relaxed">
                      Under the Revised PSR gazette, Directors (GL 17) and Permanent Secretaries serve a cumulative maximum tenure of 8 years (or retirement upon attaining 60 years of age / 35 years of pensionable service, whichever comes first).
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 space-y-3">
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-blue-400" />
                      <span>4. Disciplinary & Code of Conduct Rules</span>
                    </h3>
                    <p className="leading-relaxed">
                      Rigid statutory processes govern queries, suspension, interdiction, and dismissals. Civil servants are constitutionally prohibited from engaging in partisan politics or maintaining private businesses that conflict with official duties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Application Checklist */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Application Requirements Checklist</h2>
                    <p className="text-sm text-slate-400">Ensure all mandatory verification documents are in order before applying</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {APPLICATION_CHECKLIST.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklist(item.id)}
                      className="cursor-pointer bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition"
                    >
                      <button className="text-blue-400 shrink-0">
                        {checklistState[item.id] ? <CheckSquare className="w-5 h-5 text-blue-400" /> : <Square className="w-5 h-5 text-slate-500" />}
                      </button>
                      <span className={`text-sm ${checklistState[item.id] ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GRADE LEVELS & SALARY */}
          {activeTab === 'salary' && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Grade Level Structure & CONPSS Salary Matrix</h2>
                    <p className="text-sm text-slate-400">Official classification for Nigerian Federal & State Civil Services</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {GRADE_LEVEL_SCALES.map((scale, idx) => (
                    <div key={idx} className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 hover:border-blue-500/40 transition">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 font-bold text-sm rounded-lg border border-blue-500/30">
                            {scale.level}
                          </span>
                          <h3 className="text-base font-bold text-white">{scale.cadre}</h3>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20">
                          {scale.estimatedMonthlyGrossCONPSS}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 border-t border-slate-800 pt-3">
                        <div>
                          <strong className="text-slate-400 block mb-1">Minimum Qualification:</strong>
                          <span>{scale.minQualification}</span>
                        </div>
                        <div>
                          <strong className="text-slate-400 block mb-1">Typical Roles:</strong>
                          <span>{scale.roleExamples.join(', ')}</span>
                        </div>
                        <div>
                          <strong className="text-slate-400 block mb-1">Career Path:</strong>
                          <span>{scale.careerProgression}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: COMMISSION DIRECTORY */}
          {activeTab === 'directory' && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Accessing Career Opportunities: Official Portals</h2>
                    <p className="text-sm text-slate-400">Verified links to Federal and State Public Service Commission recruitment systems</p>
                  </div>

                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Filter commission or state..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCommissions.map((comm) => (
                    <div key={comm.id} className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 flex flex-col justify-between hover:border-blue-500/40 transition">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">
                            {comm.jurisdiction}
                          </span>
                          <span className="text-xs text-emerald-400 font-medium">{comm.applicationMode}</span>
                        </div>
                        <h3 className="text-base font-bold text-white">{comm.name}</h3>
                        <p className="text-xs text-slate-400">{comm.headquarters}</p>
                        <p className="text-xs text-slate-300 pt-1">
                          <strong>2026 Status:</strong> {comm.status2026}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Verified Commission</span>
                        <a
                          href={comm.officialPortal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition"
                        >
                          <span>Visit Official Portal</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Scam Warning Alert */}
          <div className="mt-10 bg-amber-950/40 border border-amber-800/60 rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div className="text-sm space-y-1">
              <h3 className="font-bold text-amber-200">Security Warning: Beware of Employment Racketeering</h3>
              <p className="text-slate-300 leading-relaxed">
                The Federal Civil Service Commission (FCSC) and State Civil Service Commissions <strong>DO NOT</strong> charge application fees, sell scratch cards, or authorize third-party agents to issue appointment letters. All genuine vacancies are published on verified <code className="text-amber-300">.gov.ng</code> domains and in national gazettes.
              </p>
            </div>
          </div>

          {/* Ad Unit */}
          <div className="mt-10">
            <AdUnit slot="civil-commission-middle" format="rectangle" />
          </div>

          {/* FAQ Section */}
          <section className="mt-12 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {COMMISSION_FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/70 rounded-xl overflow-hidden bg-slate-900/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-200 hover:text-white transition text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <span className="text-blue-400 font-mono text-lg shrink-0">
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
          </section>
        </div>
      </div>
    </>
  );
};

export default CivilServiceCommissionGuide;
