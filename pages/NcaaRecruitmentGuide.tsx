import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Plane, CheckCircle2, AlertTriangle, Calendar, FileCheck,
  ExternalLink, Download, HelpCircle, ArrowRight, BookOpen, Clock,
  Printer, CheckSquare, Square, Building2, UserCheck, Award
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';

const NCAA_FAQS = [
  {
    question: 'Is the Nigerian Civil Aviation Authority (NCAA) recruitment form out?',
    answer: 'The Nigerian Civil Aviation Authority (NCAA) opens recruitment in cycles as approved by the Federal Government. All official vacancies are announced on the verified NCAA portal (ncaa.gov.ng) and national dailies. Application forms are 100% free of charge.'
  },
  {
    question: 'What qualifications are required for NCAA recruitment?',
    answer: 'General administrative and regulatory positions require a minimum of a Bachelor’s Degree (Second Class Lower) or Higher National Diploma (HND Upper Credit) in relevant disciplines. Specialized technical cadres (Airworthiness Inspectors, Flight Operations Inspectors, Air Traffic Safety Specialists) require professional aviation licenses (e.g., ICAO/NCAT ratings, AME licenses).'
  },
  {
    question: 'What is the age limit to apply for NCAA jobs?',
    answer: 'For entry-level graduate regulatory and administrative roles, applicants must generally not exceed 30 years of age. For experienced aviation safety inspectors, pilots, and licensed aeronautical engineers, the age limit extends up to 45 years depending on regulatory experience.'
  },
  {
    question: 'How much does the NCAA pay entry-level officers?',
    answer: 'NCAA personnel are remunerated under specialized aviation regulatory scales (CONPSS with enhanced aviation safety hazard and technical allowances), with entry-level salaries starting from approximately ₦110,000 to ₦160,000 per month, plus comprehensive health insurance and international ICAO training opportunities.'
  },
  {
    question: 'Where is the official NCAA recruitment portal located?',
    answer: 'The official portal is hosted under the NCAA government domain at https://ncaa.gov.ng/careers or via the Federal Civil Service Commission portal during coordinated civil service recruitment exercises.'
  }
];

const RECRUITMENT_TIMELINE = [
  {
    step: 'Stage 1',
    title: 'Official Gazette & Public Notice',
    desc: 'NCAA announces open vacancies via ncaa.gov.ng, federal gazettes, and national newspapers with specific role descriptions.'
  },
  {
    step: 'Stage 2',
    title: 'Online Application & Document Upload',
    desc: 'Candidates create a verified profile using their NIN, enter academic qualifications, and upload required aviation certifications.'
  },
  {
    step: 'Stage 3',
    title: 'Automated Screening & Shortlisting',
    desc: 'The NCAA recruitment board verifies credentials against minimum educational, technical, and age requirements.'
  },
  {
    step: 'Stage 4',
    title: 'Computer-Based Aptitude & Technical Assessment',
    desc: 'Shortlisted candidates take CBT exams assessing English, Quantitative Reasoning, Civil Aviation Regulations, and General Paper.'
  },
  {
    step: 'Stage 5',
    title: 'Medical Vetting, Oral Interview & Induction',
    desc: 'Finalists undergo ICAO-compliant medical checks and oral interviews at the NCAA Corporate Headquarters in Abuja.'
  }
];

const CHECKLIST_ITEMS = [
  { id: 'nin', text: 'Valid National Identity Number (NIN) slip with matching date of birth' },
  { id: 'waec', text: 'O\'Level Certificate (WAEC/NECO/NABTEB) with at least 5 credits including English and Mathematics' },
  { id: 'degree', text: 'Bachelor\'s Degree (BSc/BEng) or HND Certificate / Statement of Result' },
  { id: 'nysc', text: 'NYSC Discharge Certificate or Official Exemption Letter' },
  { id: 'lga', text: 'Valid Local Government Area (LGA) Identification Certificate' },
  { id: 'cv', text: 'Updated Curriculum Vitae (CV) in PDF format (maximum 2MB)' },
  { id: 'photo', text: 'Recent passport photograph on white background (JPEG/PNG format)' },
  { id: 'license', text: 'Relevant professional aviation licenses (AME, Pilot License, NCAT diploma) for technical roles' }
];

const NcaaRecruitmentGuide: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleChecklist = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <SEO
        title="NCAA Recruitment Guide: Official Application Process"
        description="Comprehensive official guide to Nigerian Civil Aviation Authority recruitment. Check eligibility requirements, salary breakdown, portal steps, and application checklist."
        canonical="/ncaa-recruitment-guide"
        keywords={[
          'nigerian civil aviation authority recruitment',
          'nigeria civil aviation authority recruitment',
          'ncaa recruitment portal',
          'ncaa jobs nigeria',
          'civil aviation authority salary',
          'ncaa past questions'
        ]}
      />

      <ArticleSchema
        title="NCAA Recruitment Guide: Official Application Process"
        description="Authoritative guide on Nigerian Civil Aviation Authority (NCAA) recruitment eligibility, portal application process, and screening stages."
        url="https://recruitmenttracker.com.ng/ncaa-recruitment-guide"
        datePublished="2026-10-05"
        authorName="Recruitment Tracker Aviation Editorial"
      />

      <FAQPageSchema faqs={NCAA_FAQS} />

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 rounded-3xl p-8 md:p-12 text-white relative shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Plane className="w-80 h-80" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-sky-500/25 border border-sky-400 text-sky-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5" /> Aviation & Transport Pillar
            </span>
            <span className="bg-green-500/20 border border-green-400 text-green-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Updated for 2026
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            NCAA Recruitment Guide: Official Application Process
          </h1>

          <p className="text-sky-100 text-base md:text-lg leading-relaxed">
            Everything you need to know about the <strong>Nigerian Civil Aviation Authority recruitment</strong>: verified eligibility baselines, step-by-step portal submission, timeline phases, and an interactive preparation checklist.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs md:text-sm font-semibold">
            <a
              href="https://ncaa.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              Verify on NCAA.gov.ng <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/past-questions"
              className="bg-white/15 hover:bg-white/25 text-white px-5 py-2.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              Practice CBT Past Questions <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section: Overview & Background */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm uppercase tracking-wider">
              <Building2 className="w-4 h-4" /> Aviation Authority Overview
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              The <strong>Nigerian Civil Aviation Authority (NCAA)</strong> is the apex regulatory body for civil aviation in Nigeria. Established under the Civil Aviation Act, the NCAA oversees safety standards, airline licensing, air navigation services, aerodrome certifications, and passenger consumer protection across all domestic and international flight operations.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              Securing employment with the NCAA grants candidates an opportunity to build premier careers in safety regulation, aviation economics, aerospace engineering, airworthiness inspection, and administrative governance.
            </p>
          </div>

          {/* Section: Eligibility Requirements */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <Shield className="w-6 h-6 text-sky-700" />
                Eligibility Requirements for NCAA Applicants
              </h2>
              <p className="text-gray-600 text-sm">
                Candidates applying for the <strong>nigerian civil aviation authority recruitment</strong> must satisfy both general public service conditions and specialized technical benchmarks:
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
                <h3 className="font-bold text-sky-950 text-base mb-2 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-sky-700" /> 1. Academic & Professional Qualifications
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li><strong>General / Administrative Cadres:</strong> Minimum of Bachelor’s Degree (Second Class Lower) or HND (Upper Credit) in Public Administration, Law, Accounting, Economics, Business, Computer Science, or Mass Communication.</li>
                  <li><strong>Technical & Aviation Safety Cadres:</strong> Bachelor’s Degree (BSc/BEng) in Aeronautical, Mechanical, Electrical/Electronic Engineering, Meteorology, or Physics.</li>
                  <li><strong>O\'Level Requirements:</strong> Minimum of 5 credits in WAEC/NECO/NABTEB/GCE, including English Language and Mathematics, obtained in not more than two sittings.</li>
                  <li><strong>NYSC:</strong> Valid National Youth Service Corps (NYSC) Discharge Certificate or legal Certificate of Exemption.</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-gray-700" /> 2. Age Limits & Nationality
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Must be a Nigerian citizen by birth or registration.</li>
                  <li><strong>Entry-Level Cadres:</strong> Age must be between 18 and 30 years at the time of enlistment.</li>
                  <li><strong>Experienced Aviation Specialist Cadres:</strong> Up to 40–45 years for licensed Aircraft Maintenance Engineers (AME), commercial pilots, and certified Air Traffic Controllers.</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" /> 3. Medical, Integrity & Statutory Checks
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Must pass government medical fitness tests and vision screening.</li>
                  <li>Must possess a clear character record with zero criminal convictions.</li>
                  <li>Valid National Identification Number (NIN) with matching biographical data across all credentials.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Application Submission Guide */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <FileCheck className="w-6 h-6 text-green-700" />
                How to Submit Your Application
              </h2>
              <p className="text-gray-600 text-sm">
                Follow this official step-by-step process when applying for <strong>nigeria civil aviation authority recruitment</strong> vacancies:
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-900 font-bold flex items-center justify-center text-sm border border-sky-200">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Visit the Official Portal</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Access the designated career gateway at <a href="https://ncaa.gov.ng" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-semibold underline">ncaa.gov.ng</a>. Always check for the secure SSL padlock and avoid unofficial third-party blog links.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-900 font-bold flex items-center justify-center text-sm border border-sky-200">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Account Creation with NIN</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Register a profile using a functional email address, active phone number, and your 11-digit NIN. Verify your email via the confirmation link sent to your inbox.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-900 font-bold flex items-center justify-center text-sm border border-sky-200">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Select Position & Complete Bio-Data</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Browse the available job cadres and select the role that matches your academic background. Fill out personal bio-data, state of origin, and educational history accurately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-900 font-bold flex items-center justify-center text-sm border border-sky-200">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Upload Document Scans</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Attach clean PDF/JPEG scans of your O\'Level certificate, Degree/HND statement, NYSC discharge certificate, LGA certificate, and recent passport photograph.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-900 font-bold flex items-center justify-center text-sm border border-sky-200">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Review & Print Application Slip</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Cross-check all information before final submission. Download and print the generated Application Confirmation Slip with your unique Application ID.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Fraud Advisory:</strong> The NCAA does not charge any application or processing fees. Anyone asking for payment into private bank accounts in exchange for guaranteed employment is a scammer.
              </div>
            </div>
          </div>

          {/* Section: Recruitment Cycle Timeline Visual */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1 flex items-center gap-2.5">
                <Clock className="w-6 h-6 text-indigo-700" />
                NCAA Recruitment Cycle & Stages
              </h2>
              <p className="text-gray-600 text-sm">
                Understand what happens at every stage of the recruitment screening exercise:
              </p>
            </div>

            <div className="space-y-4">
              {RECRUITMENT_TIMELINE.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-indigo-600 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-lg">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Interactive Application Checklist */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2.5">
                  <CheckSquare className="w-6 h-6 text-green-700" />
                  NCAA Application Readiness Checklist
                </h2>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Track your required documentation before starting your online application.
                </p>
              </div>

              <button
                onClick={handlePrint}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                title="Print checklist"
              >
                <Printer className="w-4 h-4" /> Print Checklist
              </button>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-gray-600">
                <span>Checklist Progress</span>
                <span className={progressPercent === 100 ? 'text-green-700' : 'text-sky-700'}>
                  {completedCount} of {CHECKLIST_ITEMS.length} completed ({progressPercent}%)
                </span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    progressPercent === 100 ? 'bg-green-600' : 'bg-sky-600'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {CHECKLIST_ITEMS.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 select-none ${
                      isChecked
                        ? 'bg-green-50/70 border-green-200 text-green-950'
                        : 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100/70'
                    }`}
                  >
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                    <span className={`text-xs md:text-sm font-medium ${isChecked ? 'line-through text-gray-500' : ''}`}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Frequently Asked Questions */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-sky-700" />
                Frequently Asked Questions About NCAA Careers
              </h2>
              <p className="text-gray-600 text-sm">
                Get quick answers to the most common queries regarding NCAA recruitment and employment:
              </p>
            </div>

            <div className="space-y-4">
              {NCAA_FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 bg-gray-50 border border-gray-200 rounded-2xl space-y-2">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <AdUnit slot="NCAA_GUIDE_BOTTOM_AD" />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Official Verification Channels */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-sky-400" /> Official Verification
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Always verify recruitment bulletins directly through official government institutions:
            </p>
            <div className="space-y-2.5">
              <a
                href="https://ncaa.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white transition-colors"
              >
                <span>NCAA Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </a>
              <a
                href="https://aviation.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white transition-colors"
              >
                <span>Federal Ministry of Aviation</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </a>
              <a
                href="https://fcsc.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white transition-colors"
              >
                <span>Federal Civil Service Commission</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>
          </div>

          {/* Related Transport & Aviation Portals */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-sky-700" /> Related Aviation Agencies
            </h3>
            <div className="space-y-3 text-xs">
              <Link
                to="/faan-recruitment"
                className="p-3 bg-gray-50 hover:bg-sky-50 rounded-xl border border-gray-150 block transition-colors group"
              >
                <div className="font-bold text-gray-900 group-hover:text-sky-800">FAAN Recruitment Hub</div>
                <div className="text-gray-500 mt-0.5">Federal Airports Authority of Nigeria</div>
              </Link>
              <Link
                to="/nimasa-recruitment"
                className="p-3 bg-gray-50 hover:bg-sky-50 rounded-xl border border-gray-150 block transition-colors group"
              >
                <div className="font-bold text-gray-900 group-hover:text-sky-800">NIMASA Recruitment Hub</div>
                <div className="text-gray-500 mt-0.5">Maritime Safety & Administration</div>
              </Link>
              <Link
                to="/frsc-recruitment"
                className="p-3 bg-gray-50 hover:bg-sky-50 rounded-xl border border-gray-150 block transition-colors group"
              >
                <div className="font-bold text-gray-900 group-hover:text-sky-800">FRSC Recruitment Hub</div>
                <div className="text-gray-500 mt-0.5">Federal Road Safety Corps</div>
              </Link>
            </div>
          </div>

          {/* Practice Mock CBT Widget */}
          <div className="bg-gradient-to-br from-indigo-900 to-blue-950 rounded-3xl p-6 text-white shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-yellow-400 text-sm font-bold">
              <Award className="w-5 h-5" /> Free CBT Exam Prep
            </div>
            <p className="text-xs text-indigo-200 leading-relaxed">
              Test your speed and knowledge with our simulated Computer-Based Test portal covering English, Mathematics, and General Aviation Affairs.
            </p>
            <Link
              to="/past-questions"
              className="w-full flex items-center justify-center py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md"
            >
              Launch CBT Simulator <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <AdUnit slot="NCAA_GUIDE_SIDEBAR_AD" format="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default NcaaRecruitmentGuide;
