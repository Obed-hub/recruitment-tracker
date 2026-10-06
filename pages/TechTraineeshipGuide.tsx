import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code, Terminal, CheckCircle2, Search, ExternalLink, HelpCircle,
  ArrowRight, Laptop, Cpu, Database, Award, Sparkles, Server,
  CheckSquare, Square, Layers, BookOpen
} from 'lucide-react';
import SEO from '../components/SEO';
import { FAQPageSchema, ArticleSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import { TECH_TRAINEE_TRACKS } from '../services/mockTraineePrograms';

const TECH_FAQS = [
  {
    question: 'What is a Software Developer Traineeship?',
    answer: 'A Software Developer Traineeship (or Tech Apprenticeship) is an immersive training program combining real-world software engineering practice, code reviews, and system architecture design with mentorship from senior engineers. Trainees work on live production software and receive stipends or scholarships, transitioning into salaried junior developer roles upon completion.'
  },
  {
    question: 'What are the top software developer trainee programs in Nigeria?',
    answer: 'Top programs include: (1) ALX Africa Software Engineering (Sand Technologies), (2) Interswitch Engineering Trainee Academy (ETA), (3) Decagon Institute Software Engineering Fellowship, (4) Semicolon Africa Tech Apprenticeship, and (5) The Federal Ministry of Communications 3MTT (Three Million Technical Talents) program.'
  },
  {
    question: 'How much do Software Developer Trainees earn?',
    answer: 'In Nigeria, engineering trainees at fintechs (Interswitch, Moniepoint, Paystack) earn between ₦300,000 and ₦450,000 monthly. Remote junior developers working for international startups via fellowships earn between $600 and $2,000+ per month (₦900,000 – ₦3,000,000).'
  },
  {
    question: 'How should I prepare for a coding traineeship interview?',
    answer: 'Preparation involves 3 critical pillars: (1) Fundamentals of Data Structures & Algorithms (Arrays, Hash Maps, Linked Lists, Trees, Two-Pointer technique on LeetCode / HackerRank), (2) Live pair-programming and Git collaboration etiquette, and (3) A portfolio containing at least 2 full-stack projects deployed with live URLs and clean GitHub documentation.'
  }
];

const TECHNICAL_ROADMAP = [
  {
    phase: 'Phase 1 (Months 1–2)',
    title: 'Programming Foundations & Version Control',
    skills: 'HTML5, CSS3, Modern JavaScript (ES6+), TypeScript, Git & GitHub workflows, Command Line (Bash/Zsh).',
    project: 'Build and deploy a responsive portfolio website with interactive DOM manipulation.'
  },
  {
    phase: 'Phase 2 (Months 3–4)',
    title: 'Full-Stack Web & API Development',
    skills: 'React.js, Next.js, Node.js / Express, PostgreSQL, Prisma ORM, RESTful API architecture, JWT Authentication.',
    project: 'Create a full-stack SaaS application with payment gateway integration (Paystack/Flutterwave).'
  },
  {
    phase: 'Phase 3 (Months 5–6)',
    title: 'Data Structures, Algorithms & System Design',
    skills: 'Big-O notation, recursion, binary search, relational database indexing, caching with Redis, Docker basics.',
    project: 'Design a high-concurrency URL shortener or real-time chat application using WebSockets.'
  },
  {
    phase: 'Phase 4 (Months 7–12)',
    title: 'Live Production Immersion & Technical Placement',
    skills: 'CI/CD pipelines, automated unit/integration testing (Jest), code reviews, sprint planning in Agile/Scrum teams.',
    project: 'Contribute pull requests to live open-source repositories or company core backend microservices.'
  }
];

const TechTraineeshipGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Software Developer Traineeship 2026: Launch Your Tech Career | Complete Roadmap"
        description="Comprehensive guide to Software Developer Traineeships and IT trainee programmes in Nigeria. Learn how to get into ALX, Interswitch Academy, and Decagon with salary scales (₦300k - $2,000+) and technical interview prep."
        canonicalUrl="/tech/software-developer-traineeship"
        keywords={[
          'software developer traineeship',
          'it trainee programme',
          'web developer training jobs',
          'full stack developer traineeship',
          'coding training jobs',
          'electrician traineeship',
          'traineeship engineering'
        ]}
      />

      <ArticleSchema
        title="Software Developer Traineeships and Training Programs"
        description="Definitive technical guide to coding apprenticeships, engineering trainee academies, tech stacks, and career roadmaps."
        url="/tech/software-developer-traineeship"
        publishedAt="2026-10-06T00:45:00.000Z"
        updatedAt="2026-10-06T00:45:00.000Z"
      />

      <FAQPageSchema faqs={TECH_FAQS} />

      <div className="bg-slate-900 text-slate-100 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950/70 via-slate-900 to-slate-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-cyan-900/40">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack, Backend & Cloud Engineering Tracks 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Software Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-indigo-300">Traineeships</span> & Career Roadmap
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transition from beginner to production-ready software engineer. Discover top accredited tech apprenticeships, verified fintech engineering academies, and technical interview blueprints.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#tech-tracks"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition shadow-lg shadow-cyan-900/40"
              >
                <Code className="w-5 h-5" />
                <span>Explore Specialization Tracks</span>
              </a>
              <Link
                to="/past-questions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition"
              >
                <span>Aptitude & Technical CBT Screening</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <AdUnit slot="tech-trainee-top" format="horizontal" />
        </div>

        {/* Specialization Tracks */}
        <section id="tech-tracks" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-xl">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">High-Demand Specialized Tech Tracks</h2>
                <p className="text-sm text-slate-400">Target your training toward high-compensation engineering specializations</p>
              </div>
            </div>

            <div className="space-y-6">
              {TECH_TRAINEE_TRACKS.map((track, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 hover:border-cyan-500/40 transition space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Code className="w-5 h-5 text-cyan-400" />
                      <span>{track.track}</span>
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20">
                      {track.entrySalaryRange}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                    <div>
                      <strong className="text-slate-400 block mb-1">Core Tech Stack:</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {track.coreLanguages.map((lang, lIdx) => (
                          <span key={lIdx} className="px-2 py-0.5 bg-slate-800 text-cyan-300 font-mono rounded text-[11px] border border-slate-700">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <strong className="text-slate-400 block mb-1">Top Programs in Nigeria:</strong>
                      <span>{track.topProgramsInNigeria.join(', ')}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-3 text-xs text-slate-300">
                    <strong className="text-slate-400 block mb-1">Mandatory Portfolio Capstone Projects:</strong>
                    <ul className="space-y-1">
                      {track.keyProjectsRequired.map((proj, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Roadmap */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-xl">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">The 12-Month Developer Trainee Roadmap</h2>
                <p className="text-sm text-slate-400">Structured progression from syntax fundamentals to live production engineering</p>
              </div>
            </div>

            <div className="space-y-4">
              {TECHNICAL_ROADMAP.map((road, idx) => (
                <div key={idx} className="bg-slate-900/90 border border-slate-700/70 rounded-xl p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30">
                      {road.phase}
                    </span>
                    <h3 className="text-base font-bold text-white">{road.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300"><strong>Skills Mastered:</strong> {road.skills}</p>
                  <p className="text-xs text-emerald-400"><strong>Capstone Deliverable:</strong> {road.project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Interview Prep Advice */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">How to Prepare for Coding Traineeship Interviews</h2>
            <p className="text-sm text-slate-400 mb-6">Proven strategies to pass technical screening tests</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-4 space-y-2">
                <h3 className="font-bold text-white text-sm">1. Data Structures & Algorithms</h3>
                <p className="leading-relaxed">
                  Practice 50+ Easy-to-Medium problems on LeetCode/HackerRank focusing on Arrays, Hash Maps, Strings, and Sliding Window techniques. Explain your thought process out loud before typing.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-4 space-y-2">
                <h3 className="font-bold text-white text-sm">2. Live Pair-Programming</h3>
                <p className="leading-relaxed">
                  Interviewers evaluate how you respond to feedback, handle debugging under pressure, and test edge cases. Write clean, self-documenting code with descriptive variable names.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-4 space-y-2">
                <h3 className="font-bold text-white text-sm">3. System Design Basics</h3>
                <p className="leading-relaxed">
                  Understand how web requests travel from browser DNS lookup to CDN, load balancers, web servers, and database queries. Be prepared to explain ACID properties and caching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <AdUnit slot="tech-trainee-bottom" format="rectangle" />
        </div>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {TECH_FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/70 rounded-xl overflow-hidden bg-slate-900/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-200 hover:text-white transition text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <span className="text-cyan-400 font-mono text-lg shrink-0">
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

export default TechTraineeshipGuide;
