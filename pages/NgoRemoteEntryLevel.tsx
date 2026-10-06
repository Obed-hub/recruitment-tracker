import React from 'react';
import { Link } from 'react-router-dom';
import {
  Laptop, MapPin, GraduationCap, CheckCircle2, Globe, ArrowRight,
  ExternalLink, HelpCircle, Briefcase, Award, Building, Sparkles,
  Compass, ArrowLeft
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';

const REMOTE_FAQS = [
  {
    question: 'Can you work remotely for an international NGO from Nigeria?',
    answer: 'Yes! Hundreds of international NGOs and UN agencies hire remote contractors and national staff in Nigeria for roles such as data analysis, grant writing, digital communications, MEAL database design, translation, and research support. Payments are frequently indexed in USD or EUR.'
  },
  {
    question: 'How do I get an entry-level job in an NGO with no prior experience?',
    answer: 'To break into the NGO sector as a fresh graduate: 1) Volunteer with local community-based organizations (CBOs) during or after NYSC; 2) Take free certified humanitarian courses on Kaya (kayaconnect.org), DisasterReady, and USAID Global Health eLearning; 3) Apply for structured graduate fellowships like the Catholic Relief Services (CRS) Fellowship or UN Volunteers (UNV).'
  },
  {
    question: 'What platforms offer legitimate remote NGO jobs?',
    answer: 'Top verified platforms for remote NGO vacancies include ReliefWeb (use the "Workplace: Remote" filter), UN Online Volunteering (unv.org), Idealist.org, Devex, Impactpool, and DevelopmentAid.'
  },
  {
    question: 'Do remote NGO jobs provide laptops and internet stipends?',
    answer: 'Yes, most established international non-profits provide full home-office setup stipends, modern work laptops, and monthly internet/power subsidies for full-time remote personnel.'
  }
];

const REMOTE_SECTORS = [
  {
    title: 'MEAL & Data Analytics',
    desc: 'Designing KoboToolbox forms, cleaning survey data, writing statistical reports in SPSS/R/Stata, and building Power BI dashboards.',
    demand: 'Very High',
    salary: '₦500,000 - ₦950,000 / mo ($)'
  },
  {
    title: 'Grants & Proposal Writing',
    desc: 'Researching institutional donors (USAID, EU, Global Fund), drafting technical concept notes, and assembling narrative logframes.',
    demand: 'High',
    salary: '₦600,000 - ₦1,200,000 / mo ($)'
  },
  {
    title: 'Digital Communications & Media',
    desc: 'Humanitarian storytelling, social media campaigns, video editing, annual report layout design, and newsletter curation.',
    demand: 'High',
    salary: '₦400,000 - ₦800,000 / mo'
  },
  {
    title: 'Translation & Field Transcriptions',
    desc: 'Translating field surveys, policy documents, and training manuals across English, Hausa, Kanuri, Yoruba, French, and Arabic.',
    demand: 'Moderate',
    salary: '₦350,000 - ₦650,000 / mo'
  }
];

const ENTRY_PROGRAMS = [
  {
    name: 'Catholic Relief Services (CRS) Fellowship',
    type: '12-Month Paid Fellowship',
    desc: 'Rotational humanitarian leadership program for fresh Nigerian graduates across program management, MEAL, and finance.',
    link: 'https://www.crs.org/about/careers'
  },
  {
    name: 'United Nations Volunteers (UNV)',
    type: 'National & Online Volunteer',
    desc: 'Placement with UNICEF, UNDP, WHO, or WFP in Nigeria. Offers living stipends and direct UN career progression.',
    link: 'https://www.unv.org'
  },
  {
    name: 'Teach For Nigeria Fellowship',
    type: '2-Year Leadership Fellowship',
    desc: 'Transformational education and community impact fellowship placing graduates in underserved public schools.',
    link: 'https://teachfornigeria.org'
  },
  {
    name: 'DisasterReady & Kaya Connect Certifications',
    type: 'Free Accredited Training',
    desc: 'Complete free, globally recognized humanitarian certificates in MEAL, Child Protection, Project Management, and WASH.',
    link: 'https://kayaconnect.org'
  }
];

const NgoRemoteEntryLevel: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <SEO
        title="Remote & Entry-Level NGO Jobs (2026): Start Your Impact Career"
        description="Find verified remote NGO jobs, entry-level non-profit vacancies, and paid fellowships in Nigeria. Complete career transition roadmap and salary guide."
        canonical="/ngo-jobs/remote-entry-level"
        keywords={[
          'remote ngo jobs',
          'ngo jobs near me',
          'entry level ngo jobs',
          'international ngo jobs entry level',
          'ngo work from home',
          'paid ngo jobs near me',
          'ngo internship work from home',
          'unv nigeria'
        ]}
      />

      <ArticleSchema
        title="Remote and Entry-Level NGO Jobs: Start Your Impact Career"
        description="Authoritative guide on landing remote non-profit roles, entry-level humanitarian fellowships, and local NGO jobs in Nigeria."
        url="https://recruitmenttracker.com.ng/ngo-jobs/remote-entry-level"
        datePublished="2026-10-06"
        authorName="Recruitment Tracker Remote Careers Desk"
      />

      <FAQPageSchema faqs={REMOTE_FAQS} />

      {/* Navigation Breadcrumb */}
      <div>
        <Link to="/ngo-jobs" className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-emerald-700 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Main NGO Jobs Hub
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-8 md:p-12 text-white relative shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Laptop className="w-80 h-80" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-indigo-500/25 border border-indigo-400 text-indigo-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5" /> Remote & Early-Career Focus
            </span>
            <span className="bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Updated 2026
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Remote and Entry-Level NGO Jobs
          </h1>

          <p className="text-indigo-100 text-base md:text-lg leading-relaxed">
            Launch your international development career from anywhere. Discover flexible work-from-home vacancies, paid graduate fellowships, and proven strategies to land entry-level humanitarian roles without prior experience.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs md:text-sm font-semibold">
            <Link
              to="/ngo-jobs"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              Browse All Active NGO Jobs <Briefcase className="w-4 h-4" />
            </Link>
            <a
              href="https://reliefweb.int/jobs?workplace=remote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 text-white px-5 py-2.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              Live Remote Feed on ReliefWeb <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section: Top Remote NGO Roles */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <Laptop className="w-6 h-6 text-indigo-700" /> Top Remote NGO Roles
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                International non-profits are increasingly hiring remote knowledge workers across Nigeria for specialized technical functions. These roles allow you to contribute to global humanitarian missions while working from home:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REMOTE_SECTORS.map((sector, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-900 text-base">{sector.title}</h3>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-150 inline-block mb-2">
                      Demand: {sector.demand}
                    </span>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-xs font-bold text-emerald-700">
                    Est. Pay: {sector.salary}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Entry-Level Opportunities for Beginners */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <GraduationCap className="w-6 h-6 text-emerald-700" /> Entry-Level Opportunities for Beginners
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Breaking into the non-profit sector without 5 years of experience is achievable through structured entry pipelines and fellowships:
              </p>
            </div>

            <div className="space-y-4">
              {ENTRY_PROGRAMS.map((prog, idx) => (
                <div key={idx} className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {prog.type}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base">{prog.name}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{prog.desc}</p>
                  </div>
                  <a
                    href={prog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Learn & Apply <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Finding Local NGO Work */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-sky-700" /> Finding Local NGO Work Near You
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you are looking for <strong>jobs in ngo near me</strong>, non-governmental organizations in Nigeria are heavily clustered around key strategic regions:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 space-y-1.5">
                <h4 className="font-bold text-gray-900 text-sm">Abuja (FCT)</h4>
                <p className="text-gray-600 leading-relaxed">
                  National headquarters for UN agencies (UNICEF, WHO, UNDP), USAID implementing partners (FHI 360, Chemonics, CRS), and policy think tanks.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 space-y-1.5">
                <h4 className="font-bold text-gray-900 text-sm">Northeast (Borno, Yobe, Adamawa)</h4>
                <p className="text-gray-600 leading-relaxed">
                  Active humanitarian hubs (Maiduguri, Damaturu, Yola) with the highest concentration of emergency WASH, Health, Nutrition, and Protection field jobs.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 space-y-1.5">
                <h4 className="font-bold text-gray-900 text-sm">Lagos State</h4>
                <p className="text-gray-600 leading-relaxed">
                  Public health research institutes, gender advocacy foundations, social enterprises, and fintech-for-good programs.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-150 space-y-1.5">
                <h4 className="font-bold text-gray-900 text-sm">Northwest (Kano, Sokoto, Zamfara)</h4>
                <p className="text-gray-600 leading-relaxed">
                  Major focus on maternal and child health (MNCH), routine immunization, CMAM nutrition, and rural livelihood programs.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Remote vs. On-Site Comparison */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <Compass className="w-6 h-6 text-purple-700" /> Remote vs. Field-Based NGO Roles
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compare the lifestyle, compensation structure, and daily expectations between remote non-profit roles and field duty deployments:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-150 space-y-3">
                <h3 className="font-bold text-indigo-950 text-base flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-indigo-700" /> Remote Non-Profit Work
                </h3>
                <ul className="space-y-2 text-xs text-indigo-900 list-disc pl-4">
                  <li>Work from home with flexible working hours across time zones.</li>
                  <li>Monthly internet, power, and equipment subsidies provided.</li>
                  <li>No field hardship or displacement from family.</li>
                  <li>Heavy reliance on asynchronous tools (Slack, Teams, Asana, Google Workspace).</li>
                </ul>
              </div>

              <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-150 space-y-3">
                <h3 className="font-bold text-emerald-950 text-base flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-700" /> Field Humanitarian Deployment
                </h3>
                <ul className="space-y-2 text-xs text-emerald-900 list-disc pl-4">
                  <li>Direct interaction and support with community beneficiaries and IDP camps.</li>
                  <li>Extra Field Hazard and Accommodation Allowances (+20% to +40% pay).</li>
                  <li>Rest & Recuperation (R&R) breaks every 6 to 10 weeks of field duty.</li>
                  <li>Faster career progression into Country Management roles.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Frequently Asked Questions */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-indigo-700" /> Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-sm">
                Common questions on landing remote and entry-level non-profit jobs:
              </p>
            </div>

            <div className="space-y-4">
              {REMOTE_FAQS.map((faq, idx) => (
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

          <AdUnit slot="NGO_REMOTE_BOTTOM_AD" />
        </div>

        {/* Right 1 Col: Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Main Hub Link */}
          <div className="bg-emerald-900 text-white rounded-3xl p-6 shadow-md space-y-3">
            <span className="text-[10px] font-bold uppercase bg-emerald-700 text-white px-2.5 py-0.5 rounded-full">
              Full Directory
            </span>
            <h3 className="text-lg font-bold">Main NGO Vacancies Hub</h3>
            <p className="text-xs text-emerald-200 leading-relaxed">
              Explore active full-time and field openings across health, emergency aid, and nutrition.
            </p>
            <Link
              to="/ngo-jobs"
              className="w-full flex items-center justify-center py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-sm"
            >
              Browse Live Directory <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Recommended Free Certifications */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-yellow-600" /> Free Certifications
            </h3>
            <p className="text-xs text-gray-500">
              Complete these verified online courses to boost your non-profit CV:
            </p>
            <div className="space-y-2.5 text-xs">
              <a href="https://kayaconnect.org" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-150 block transition-colors">
                <div className="font-bold text-gray-900">Kaya Connect (Save the Children)</div>
                <div className="text-gray-500 text-[11px] mt-0.5">MEAL, Humanitarian Essentials & WASH</div>
              </a>
              <a href="https://www.disasterready.org" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-150 block transition-colors">
                <div className="font-bold text-gray-900">DisasterReady.org</div>
                <div className="text-gray-500 text-[11px] mt-0.5">Project Management in Development (PMD Pro)</div>
              </a>
              <a href="https://www.globalhealthlearning.org" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-150 block transition-colors">
                <div className="font-bold text-gray-900">USAID Global Health eLearning</div>
                <div className="text-gray-500 text-[11px] mt-0.5">Maternal Health, HIV/AIDS & Logistics</div>
              </a>
            </div>
          </div>

          <AdUnit slot="NGO_REMOTE_SIDEBAR_AD" format="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default NgoRemoteEntryLevel;
