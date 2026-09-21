import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Calendar, Clock, ArrowRight, BookOpen, Award, CheckCircle,
  XCircle, AlertCircle, MapPin, Briefcase, CircleDollarSign, Search,
  FileText, Info, ListChecks, ExternalLink, HelpCircle, Share2, Check,
  Sparkles, AlertTriangle, UserCheck, Smartphone, Download, ArrowUpRight
} from 'lucide-react';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';
import { FAQPageSchema, JobPostingSchema, BreadcrumbListSchema } from '../components/StructuredData';
import { getDailyUpdatedBadge } from '../services/dateUtils';
import SearchableFAQSection from '../components/SearchableFAQSection';

interface CadreDetail {
  code: string;
  name: string;
  qualifications: string;
  ageLimit: string;
  description: string;
  keyDuties: string[];
}

const NAVY_CADRES: CadreDetail[] = [
  {
    code: 'CAT-A',
    name: 'General Service (Seaman & Deck Ratings)',
    qualifications: 'SSCE / WAEC / NECO / GCE / NABTEB with at least 5 credits in max 2 sittings (English & Maths compulsory)',
    ageLimit: '18 - 22 Years',
    description: 'Core combatant and nautical crew operating warships, shipboard navigation, radar surveillance, weapons handling, and maritime patrols.',
    keyDuties: ['Deck watchkeeping & helm navigation', 'Naval gunnery & air defence', 'Small craft and boarding boat operations', 'Damage control & maritime firefighting']
  },
  {
    code: 'CAT-B',
    name: 'Artificers & Technical Ratings',
    qualifications: 'National Diploma (ND) / City & Guilds / Technical Certificate in Mechanical, Marine, or Weapon Electrical Engineering',
    ageLimit: '18 - 26 Years',
    description: 'Technical specialists responsible for propulsion machinery, gas turbines, electrical grids, sonar, and missile combat systems.',
    keyDuties: ['Marine diesel & gas turbine maintenance', 'Shipboard electrical distribution & automation', 'Radar, sonar & weapon system repair', 'Hull fabrication & naval dockyard maintenance']
  },
  {
    code: 'CAT-C',
    name: 'Specialist, Medical & Support Rates',
    qualifications: 'Registered Nurse (RN/RM), Medical Lab Tech, Pharmacy Tech, Physical Training / Sports credentials, or Professional Music certificates',
    ageLimit: '18 - 26 Years',
    description: 'Professional healthcare, physical fitness, intelligence, band, and tactical auxiliary departments supporting naval operations.',
    keyDuties: ['Naval hospital and sea-sickbay patient care', 'Physical training instruction & survival swimming', 'Naval military band & ceremonial fanfares', 'Motor transport driving & convoy mechanics']
  },
  {
    code: 'CAT-D',
    name: 'Logistics, ICT & Naval Communications',
    qualifications: 'SSCE / ND in Computer Science, Secretarial Studies, Accounting, or Food Nutrition',
    ageLimit: '18 - 22 (SSCE) / 18 - 26 (ND)',
    description: 'Administrative backbone maintaining naval communications, satellite data, inventory logistics, and galley services.',
    keyDuties: ['Naval communications & signal transmission', 'Cybersecurity & database administration', 'Quartermaster storekeeping & supply accounting', 'Naval catering & wardroom hospitality']
  }
];

const SALARY_RANKS = [
  { rank: 'Trainee Rating (NNBTS Onne)', monthly: '₦35,000 - ₦40,000', annual: '₦480,000', notes: 'Upkeep stipend during 6 months training + free kitting & feeding' },
  { rank: 'Ordinary Seaman (Fresh Recruit)', monthly: '₦78,000 - ₦86,000', annual: '₦1,032,000', notes: 'First official rank upon passing out + sea duty allowance' },
  { rank: 'Able Seaman', monthly: '₦92,000 - ₦100,000', annual: '₦1,200,000', notes: 'Sub-specialization completed with accelerated technical rate' },
  { rank: 'Leading Seaman', monthly: '₦104,000 - ₦115,000', annual: '₦1,380,000', notes: 'Section commander & deck petty team lead' },
  { rank: 'Petty Officer', monthly: '₦125,000 - ₦140,000', annual: '₦1,680,000', notes: 'Senior non-commissioned supervisor' },
  { rank: 'Chief Petty Officer', monthly: '₦148,000 - ₦165,000', annual: '₦1,980,000', notes: 'Department head aboard naval vessels' },
  { rank: 'Warrant Officer / Master Warrant', monthly: '₦175,000 - ₦215,000', annual: '₦2,580,000', notes: 'Highest senior enlisted rank in the Nigerian Navy' }
];

const FAQS = [
  {
    question: 'When is the Nigerian Navy Batch 39 recruitment form opening for 2026?',
    answer: 'The Nigerian Navy Batch 39 online recruitment portal officially opens on Friday, 2 October 2026 at 12:00 AM. Registration closes on Saturday, 31 October 2026 at 11:59 PM.'
  },
  {
    question: 'What is the official website for Nigerian Navy Batch 39 recruitment?',
    answer: 'The official recruitment portals are www.joinnigeriannavy.gov.ng and www.joinnigeriannavy.com. Candidates are strictly warned to avoid third-party job blogs or cybercafe agents asking for application fees.'
  },
  {
    question: 'How much is the Nigerian Navy Batch 39 registration form?',
    answer: 'The application is 100% FREE. The Nigerian Navy does NOT sell scratch cards, voucher PINs, or request bank transfers for application or shortlist placement.'
  },
  {
    question: 'What are the age limits for Nigerian Navy Batch 39?',
    answer: 'For Secondary School Certificate holders (SSCE / WAEC / NECO / NABTEB), applicants must be between 18 and 22 years of age. For applicants with higher technical qualifications (ND, NCE, Nursing, Drivers/Mechanics), the age limit is 18 to 26 years.'
  },
  {
    question: 'What is the minimum height requirement for Nigerian Navy recruitment?',
    answer: 'Male applicants must be at least 1.69 metres (5ft 6.5in) tall, while female applicants must be at least 1.65 metres (5ft 5in) tall.'
  },
  {
    question: 'Can I apply for Navy Batch 39 with awaiting result?',
    answer: 'NO. The Nigerian Navy does not accept awaiting results. All candidates must possess complete O-Level certificates or statements of results with 5 credits including English and Mathematics at the time of online application.'
  },
  {
    question: 'What documents do I need to print after submitting my application?',
    answer: 'After submission on www.joinnigeriannavy.gov.ng, candidates must print: (1) Application Acknowledgement Slip, (2) Parent/Guardian Consent Form, (3) Local Government Attestation Slip, and (4) Police Character / Guarantor Certification Slip.'
  },
  {
    question: 'How long does Nigerian Navy basic training last at NNBTS Onne?',
    answer: 'Enlisted recruits undergo 6 months of intensive military, seamanship, naval weapons, and maritime firefighting training at the Nigerian Navy Basic Training School (NNBTS), Onne, Rivers State.'
  }
];

export const NavyRecruitmentBatch39: React.FC = () => {
  // Live Countdown logic to Portal Opening: October 2, 2026 00:00:00 GMT+1
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLive, setIsLive] = useState(false);
  const [copied, setCopied] = useState(false);

  // Interactive Eligibility Calculator State
  const [calcAge, setCalcAge] = useState<number>(20);
  const [calcGender, setCalcGender] = useState<'male' | 'female'>('male');
  const [calcHeight, setCalcHeight] = useState<number>(170); // in cm
  const [calcEdu, setCalcEdu] = useState<'ssce' | 'diploma' | 'degree'>('ssce');
  const [calcCredits, setCalcCredits] = useState<boolean>(true);
  const [calcSingle, setCalcSingle] = useState<boolean>(true);
  const [selectedCadre, setSelectedCadre] = useState<string>('CAT-A');

  useEffect(() => {
    const targetDate = new Date('2026-10-02T00:00:00+01:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsLive(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsLive(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🚨 OFFICIAL: Nigerian Navy Batch 39 Recruitment 2026 Announced!\n\n` +
      `📅 Portal Opens: 2 October 2026\n` +
      `⏰ Deadline: 31 October 2026\n` +
      `🌐 Official Portal: www.joinnigeriannavy.gov.ng\n` +
      `💰 Cost: 100% FREE (Beware of scammers)\n\n` +
      `Check requirements, salary scale, age limits & practice CBT past questions here:\n` +
      window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Eligibility evaluation logic
  const minHeightRequired = calcGender === 'male' ? 169 : 165;
  const maxAgeAllowed = calcEdu === 'ssce' ? 22 : 26;
  const isHeightEligible = calcHeight >= minHeightRequired;
  const isAgeEligible = calcAge >= 18 && calcAge <= maxAgeAllowed;
  const isEligible = isHeightEligible && isAgeEligible && calcCredits && calcSingle;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 px-4 sm:px-6">
      <SEO
        title="Nigerian Navy Recruitment 2026 (Batch 39): Portal, Requirements & Closing Date"
        description="Official guide for Nigerian Navy Batch 39 recruitment 2026. Portal opens 2 October 2026, closes 31 October 2026 at www.joinnigeriannavy.gov.ng. Age limit, height, salary & eligibility check."
        canonical="/nigerian-navy-recruitment-2026"
        keywords={[
          'nigerian navy recruitment 2026 batch 39',
          'joinnigeriannavy gov ng recruitment portal',
          'nigerian navy batch 39 requirements',
          'nigerian navy closing date 2026',
          'nigerian navy age limit and height',
          'nigerian navy salary for ratings conafss',
          'how to apply nigerian navy batch 39 step by step',
          'nigerian navy past questions cbt 2026'
        ]}
      />

      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Recruitments', url: '/recruitments' },
          { name: 'Navy Hub', url: '/navy-batch-recruitment' },
          { name: 'Navy Batch 39 Recruitment 2026', url: '/nigerian-navy-recruitment-2026' }
        ]}
      />

      <JobPostingSchema
        title="Nigerian Navy Batch 39 Recruitment 2026 (Ratings & Officers)"
        description="Naval Headquarters recruitment for Batch 39 regular ratings, NCOs and Commissioned Officers. Portal opens 2 October 2026 and closes 31 October 2026 on www.joinnigeriannavy.gov.ng."
        organization="Nigerian Navy"
        location="Nigeria"
        datePosted="2026-09-20T00:00:00Z"
        validThrough="2026-10-31T23:59:59Z"
        employmentType="FULL_TIME"
      />

      <FAQPageSchema faqs={FAQS} />

      {/* Hero Header Banner */}
      <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500 text-slate-950">
              Verified 2026 Intake
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {getDailyUpdatedBadge()}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/10">
              BMTC Batch 39
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Nigerian Navy Recruitment 2026 (Batch 39): Portal, Requirements & Closing Date
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            The Naval Headquarters (NHQ), Abuja has officially scheduled the <strong>Batch 39 Regular Enlistment</strong> exercise. Applications commence on <strong>2 October 2026</strong> and close on <strong>31 October 2026</strong> exclusively on <code className="bg-blue-900/60 px-1.5 py-0.5 rounded text-blue-200 font-mono text-xs">www.joinnigeriannavy.gov.ng</code>.
          </p>

          {/* Real-Time Countdown Module */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-blue-500/30 shadow-inner max-w-2xl">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isLive ? 'Application Window Live' : 'Portal Opens In:'}
                </span>
              </div>
              <span className="text-xs text-blue-300 font-semibold">
                Opening Date: 2 Oct 2026 • Closes: 31 Oct 2026
              </span>
            </div>

            {isLive ? (
              <div className="p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-center">
                <span className="text-base sm:text-lg font-black text-emerald-300">
                  PORTAL IS CURRENTLY ACTIVE AND ACCEPTING APPLICATIONS
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="bg-slate-800/90 rounded-xl p-2 sm:p-3 border border-slate-700">
                  <div className="text-xl sm:text-3xl font-black text-white">{timeLeft.days}</div>
                  <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Days</div>
                </div>
                <div className="bg-slate-800/90 rounded-xl p-2 sm:p-3 border border-slate-700">
                  <div className="text-xl sm:text-3xl font-black text-white">{timeLeft.hours}</div>
                  <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Hours</div>
                </div>
                <div className="bg-slate-800/90 rounded-xl p-2 sm:p-3 border border-slate-700">
                  <div className="text-xl sm:text-3xl font-black text-white">{timeLeft.minutes}</div>
                  <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Minutes</div>
                </div>
                <div className="bg-slate-800/90 rounded-xl p-2 sm:p-3 border border-slate-700">
                  <div className="text-xl sm:text-3xl font-black text-emerald-400">{timeLeft.seconds}</div>
                  <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Seconds</div>
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.joinnigeriannavy.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 text-xs sm:text-sm font-black transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Open Official Navy Portal <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleShareWhatsApp}
              className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-md"
            >
              <Share2 className="w-4 h-4" /> Share on WhatsApp
            </button>

            <button
              onClick={handleCopyLink}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Smartphone className="w-4 h-4" />}
              {copied ? 'Link Copied!' : 'Copy Page Link'}
            </button>
          </div>
        </div>
      </div>

      {/* Critical Anti-Scam Public Advisory */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-sm">
        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <strong className="font-black text-amber-950 block mb-1">
            CRITICAL NAVAL DIRECTIVE ON RECRUITMENT FRAUD:
          </strong>
          Registration on <strong>www.joinnigeriannavy.gov.ng</strong> is <strong>100% FREE OF CHARGE</strong>. The Nigerian Navy does not sell scratch cards, voucher PINs, or request candidate deposits into commercial accounts. Do not pay any cybercafe or syndicate promising guaranteed selection or replacement slots.
        </div>
      </div>

      {/* Quick Summary Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-[11px] font-bold uppercase text-slate-500">Opening Date</div>
          <div className="text-base sm:text-lg font-black text-slate-900 mt-1">2 Oct 2026</div>
          <div className="text-[11px] text-emerald-600 font-semibold">Scheduled Launch</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-[11px] font-bold uppercase text-slate-500">Closing Date</div>
          <div className="text-base sm:text-lg font-black text-slate-900 mt-1">31 Oct 2026</div>
          <div className="text-[11px] text-rose-600 font-semibold">Strict Midnight Cut-off</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-[11px] font-bold uppercase text-slate-500">Minimum Height</div>
          <div className="text-base sm:text-lg font-black text-slate-900 mt-1">1.69m / 1.65m</div>
          <div className="text-[11px] text-slate-500 font-medium">Male / Female Standards</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-[11px] font-bold uppercase text-slate-500">Academic Baseline</div>
          <div className="text-base sm:text-lg font-black text-slate-900 mt-1">5 O-Level Credits</div>
          <div className="text-[11px] text-blue-600 font-medium">English & Maths Included</div>
        </div>
      </div>

      {/* Interactive Eligibility Validator */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-military-blue flex items-center justify-center font-bold">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Interactive Batch 39 Eligibility Calculator
            </h2>
            <p className="text-xs text-gray-500">
              Check if your age, height, gender, and academic qualifications meet the Nigerian Navy standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Gender Select */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Gender</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCalcGender('male')}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  calcGender === 'male' ? 'bg-military-blue text-white border-military-blue shadow-xs' : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                Male (Min 1.69m)
              </button>
              <button
                type="button"
                onClick={() => setCalcGender('female')}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  calcGender === 'female' ? 'bg-military-blue text-white border-military-blue shadow-xs' : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                Female (Min 1.65m)
              </button>
            </div>
          </div>

          {/* Age Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
              Applicant Age: <span className="text-military-blue font-black">{calcAge} years</span>
            </label>
            <input
              type="range"
              min="16"
              max="35"
              value={calcAge}
              onChange={(e) => setCalcAge(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-military-blue"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>16 yrs</span>
              <span>18 - 22 (SSCE)</span>
              <span>26 (ND/NCE)</span>
              <span>35 yrs</span>
            </div>
          </div>

          {/* Height Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
              Height: <span className="text-military-blue font-black">{calcHeight} cm</span> ({(calcHeight / 100).toFixed(2)}m)
            </label>
            <input
              type="range"
              min="150"
              max="200"
              value={calcHeight}
              onChange={(e) => setCalcHeight(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-military-blue"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>150 cm</span>
              <span>165 cm (Female)</span>
              <span>169 cm (Male)</span>
              <span>200 cm</span>
            </div>
          </div>

          {/* Qualification Select */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Highest Academic Level</label>
            <select
              value={calcEdu}
              onChange={(e) => setCalcEdu(e.target.value as any)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-military-blue"
            >
              <option value="ssce">SSCE / WAEC / NECO / NABTEB (O-Level)</option>
              <option value="diploma">OND / NCE / Nursing / Tech Diploma</option>
              <option value="degree">HND / B.Sc / University Degree (Officer)</option>
            </select>
          </div>

          {/* 5 Credits Check */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">5 Credits with Eng & Maths?</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCalcCredits(true)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  calcCredits ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                Yes (Passed)
              </button>
              <button
                type="button"
                onClick={() => setCalcCredits(false)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  !calcCredits ? 'bg-rose-600 text-white border-rose-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                No / Deficient
              </button>
            </div>
          </div>

          {/* Marital Status */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Marital Status</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCalcSingle(true)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  calcSingle ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                Single (No Kids)
              </button>
              <button
                type="button"
                onClick={() => setCalcSingle(false)}
                className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                  !calcSingle ? 'bg-rose-600 text-white border-rose-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                Married / Has Kids
              </button>
            </div>
          </div>
        </div>

        {/* Evaluation Output */}
        <div className={`p-4 rounded-xl border flex items-start gap-3 ${
          isEligible
            ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
            : 'bg-rose-50 border-rose-300 text-rose-900'
        }`}>
          {isEligible ? (
            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
          )}

          <div className="text-xs sm:text-sm space-y-1">
            <strong className="block font-bold">
              {isEligible ? 'ELIGIBILITY PASSED: You Meet the Statutory Criteria!' : 'ELIGIBILITY NOTICE: Criteria Not Satisfied'}
            </strong>
            {isEligible ? (
              <p>
                Based on your selections (Age: {calcAge} yrs, Height: {calcHeight} cm, {calcGender.toUpperCase()}), you qualify to apply for <strong>Nigerian Navy Batch 39</strong> when the portal opens on <strong>2 October 2026</strong>.
              </p>
            ) : (
              <ul className="list-disc list-inside space-y-0.5 text-rose-800">
                {!isHeightEligible && (
                  <li>Height requirement not met: Minimum required is {minHeightRequired} cm ({calcGender === 'male' ? '1.69m for Males' : '1.65m for Females'}).</li>
                )}
                {!isAgeEligible && (
                  <li>Age criteria not met: Allowed age is 18 - {maxAgeAllowed} years for your selected academic level.</li>
                )}
                {!calcCredits && (
                  <li>Academic criteria not met: 5 O-Level credits in WASSCE/NECO including English Language and Mathematics are strictly mandatory.</li>
                )}
                {!calcSingle && (
                  <li>Marital status notice: Candidates must be single and unmarried during enlistment and basic military training.</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Cadres Breakdown Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Available Recruitment Categories (Cadres)
            </h2>
            <p className="text-xs text-gray-500">
              Choose the right trade matching your educational qualifications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {NAVY_CADRES.map((cadre) => {
            const isSelected = selectedCadre === cadre.code;
            return (
              <button
                key={cadre.code}
                onClick={() => setSelectedCadre(cadre.code)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-military-blue text-white border-military-blue shadow-md'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`text-[10px] font-black uppercase tracking-wider mb-1 ${
                  isSelected ? 'text-blue-200' : 'text-military-blue'
                }`}>
                  {cadre.code}
                </div>
                <h3 className="text-sm font-black leading-snug mb-1">{cadre.name}</h3>
                <div className={`text-xs ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  Age: {cadre.ageLimit}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Cadre Detail Card */}
        {(() => {
          const cadre = NAVY_CADRES.find(c => c.code === selectedCadre) || NAVY_CADRES[0];
          return (
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-military-blue bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {cadre.code} Details
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mt-1">{cadre.name}</h3>
                </div>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
                  Statutory Age: {cadre.ageLimit}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="space-y-2">
                  <div className="font-bold text-slate-900">Academic Qualification Required:</div>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {cadre.qualifications}
                  </p>
                  <div className="font-bold text-slate-900 pt-2">Role Overview:</div>
                  <p className="text-slate-600 leading-relaxed">
                    {cadre.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-bold text-slate-900">Core Operational Responsibilities:</div>
                  <ul className="space-y-1.5">
                    {cadre.keyDuties.map((duty, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-military-blue shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Step-by-Step Portal Application Protocol */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <ListChecks className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              How to Apply on joinnigeriannavy.gov.ng (Step-by-Step)
            </h2>
            <p className="text-xs text-gray-500">
              Avoid common upload errors and portal timeouts with this tested application sequence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
            <div className="text-xs font-bold uppercase text-military-blue">Step 1: Identity & NIN Authentication</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Visit <strong>www.joinnigeriannavy.gov.ng</strong>. Enter your 11-digit NIN. Ensure your surname, date of birth, and state of origin on NIMC match your academic certificates perfectly.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
            <div className="text-xs font-bold uppercase text-military-blue">Step 2: Category & Trade Selection</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Carefully select your trade. Applicants with WAEC/NECO should pick Category A (Seaman). Those with ND/NCE in engineering or nursing must select their specialized trade code.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
            <div className="text-xs font-bold uppercase text-military-blue">Step 3: Passport Upload Protocol (10KB - 20KB)</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Crucial:</strong> Upload a passport photograph with a plain white background, sized strictly between <strong>10KB and 20KB</strong> (dimensions 200x200 px). Oversized files will cause fatal server timeout errors.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1">
            <div className="text-xs font-bold uppercase text-military-blue">Step 4: Academic Results & Certificate Entry</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your exam registration number and grades. Upload clear, legible scans of your O-Level certificates, Birth Certificate / Declaration of Age, and LGA Certificate of Origin.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1 md:col-span-2">
            <div className="text-xs font-bold uppercase text-military-blue">Step 5: Review & Download Print Slips</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Double-check all inputs before final submission (modifications are locked once submitted). Download and print the <strong>Acknowledgement Slip</strong>, <strong>Parent/Guardian Consent Form</strong>, and <strong>Local Government Endorsement Form</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Official Salary Structure Table (CONAFSS Scale) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
            <CircleDollarSign className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Nigerian Navy Salary Structure for Ratings (CONAFSS)
            </h2>
            <p className="text-xs text-gray-500">
              Verified monthly basic pay and welfare entitlements for enlisted Batch 39 personnel.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 uppercase font-black text-[11px] border-b border-slate-200">
                <th className="py-3 px-4">Enlisted Rank</th>
                <th className="py-3 px-4">Monthly Basic Pay</th>
                <th className="py-3 px-4">Estimated Annual Income</th>
                <th className="py-3 px-4">Allowances & Welfare</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SALARY_RANKS.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900">{item.rank}</td>
                  <td className="py-3 px-4 font-black text-military-blue">{item.monthly}</td>
                  <td className="py-3 px-4 font-semibold text-slate-700">{item.annual}</td>
                  <td className="py-3 px-4 text-xs text-slate-500">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 text-xs text-slate-700 flex items-center gap-2">
          <Info className="w-4 h-4 text-military-blue shrink-0" />
          <span>
            <strong>Note:</strong> Personnel deploying on operational sea warships receive supplementary Sea Duty Allowance, hazard duty allowances, and subsidized barracks accommodation.
          </span>
        </div>
      </div>

      {/* CBT Aptitude Test Preparation Widget */}
      <div className="bg-gradient-to-r from-military-blue to-blue-900 rounded-2xl p-6 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
            Exam Preparation
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white">
            Practice Nigerian Navy CBT Past Questions Free
          </h3>
          <p className="text-xs text-blue-100 max-w-xl">
            Simulate the actual Computer-Based Test (CBT) covering Mathematics, English Language, Current Affairs, and Maritime Knowledge with real-time timers and instant scoring.
          </p>
        </div>

        <Link
          to="/past-questions/Navy"
          className="shrink-0 px-5 py-3 rounded-xl bg-white text-military-blue hover:bg-blue-50 text-xs sm:text-sm font-black transition-all flex items-center gap-2 shadow-md"
        >
          Launch CBT Simulator <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Searchable FAQs Section (Targeting Google PAA) */}
      <SearchableFAQSection
        initialCategory="Nigerian Navy"
        title="Nigerian Navy Batch 39 & Enlistment FAQs"
        subtitle="Search verified answers to common questions on Batch 39 requirements, portal photo upload, training, and disqualifications."
        enableStructuredData={false}
        showAllLink={true}
      />

      {/* Ad Unit & Related Resources */}
      <AdUnit slotId="navy-ranking-bottom-ad" format="horizontal" />

      {/* Viral WhatsApp Share & Quick Links */}
      <div className="p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold">Help Friends & Family Apply Correctly</h4>
          <p className="text-xs text-slate-400">
            Share this verified Nigerian Navy Batch 39 portal guideline and anti-scam warning.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleShareWhatsApp}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" /> Share on WhatsApp
          </button>
          <button
            onClick={handleCopyLink}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-all"
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavyRecruitmentBatch39;
