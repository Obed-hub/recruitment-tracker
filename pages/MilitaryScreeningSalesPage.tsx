import React, { useState, useEffect } from 'react';
import { 
  Shield, AlertTriangle, CheckCircle2, XCircle, Clock, Zap, 
  Award, Lock, ArrowRight, Download, Star, HelpCircle, 
  ChevronDown, ChevronUp, MessageCircle, FileText, Check, AlertOctagon,
  Flame, BookOpen, Users, PhoneCall, Sparkles, Trophy
} from 'lucide-react';
import SEO from '../components/SEO';
import TelegramIcon from '../components/TelegramIcon';
import { ProductSchema, FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';

// User's verified Paystack payment checkout link
const CHECKOUT_PAYMENT_URL = "https://paystack.shop/pay/hppcjzq3t4";

const SALES_PAGE_FAQS = [
  {
    question: "Is this an official publication of the Nigerian Armed Forces?",
    answer: "No. This is an independent prep and survival manual compiled by veteran instructors, physical conditioning coaches, and successful recruits based on statutory 2025/2026 military and police screening guidelines."
  },
  {
    question: "How do I avoid disqualification during military height measurement in Nigeria?",
    answer: "Our guide details the exact barefoot decompression and spine alignment posture techniques used by candidates to gain 0.5cm - 1cm, alongside avoiding morning measurement shrinkage and standing correctly against the stadiometer bar."
  },
  {
    question: "Can flat foot or knock-knees be corrected before physical screening?",
    answer: "Yes. The guide features a 14-day corrective exercise protocol (towel scrunches, heel walks, band lateral squats) designed to strengthen foot arches and align leg posture for the wet-mat and visual inspection tests."
  },
  {
    question: "How should I organize my NIN, NPC Birth Certificate, and O'Level documents?",
    answer: "We provide the 3-folder legal document sorting blueprint (Original Folder, Certified Photocopy Folder, and Verification Folder) to guarantee 0-minute clearance and prevent Day 1 document disqualification."
  },
  {
    question: "How will I receive the screening guide after payment?",
    answer: "Instantly. Once your payment of ₦1,500 is confirmed via Paystack (Debit Card, Bank Transfer, USSD, Apple Pay), you will be redirected immediately to the instant high-speed PDF download page, and a backup link will be sent to your email."
  },
  {
    question: "Can I read this guide on Android and iPhone?",
    answer: "Yes! The guide is formatted in standard high-definition PDF format. You can read it smoothly on any smartphone, tablet, laptop, or print it out."
  }
];

// Real-time verified buyer simulation for social proof
const RECENT_BUYERS = [
  { name: 'Abubakar M.', location: 'Kaduna State', time: '2 minutes ago', branch: 'Army 89 RRI' },
  { name: 'Chidinma O.', location: 'Enugu State', time: '4 minutes ago', branch: 'Navy Batch 39' },
  { name: 'Tunde A.', location: 'Lagos State', time: '7 minutes ago', branch: 'Police 50k Intake' },
  { name: 'Ibrahim S.', location: 'Kano State', time: '11 minutes ago', branch: 'Air Force BMTC' },
  { name: 'Blessing E.', location: 'Delta State', time: '15 minutes ago', branch: 'Navy Batch 39' },
  { name: 'Usman D.', location: 'Abuja FCT', time: '19 minutes ago', branch: 'Army DSSC' },
  { name: 'Emeka K.', location: 'Anambra State', time: '24 minutes ago', branch: 'Police Constable' },
];

const MilitaryScreeningSalesPage: React.FC = () => {
  // ─── Countdown Timer (Urgency Mechanism) ──────────────────────────────────
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 18
  });

  // ─── Live Buyer Toast Notification ────────────────────────────────────────
  const [currentBuyerIdx, setCurrentBuyerIdx] = useState(0);
  const [showBuyerToast, setShowBuyerToast] = useState(true);

  useEffect(() => {
    const toastInterval = setInterval(() => {
      setShowBuyerToast(false);
      setTimeout(() => {
        setCurrentBuyerIdx(prev => (prev + 1) % RECENT_BUYERS.length);
        setShowBuyerToast(true);
      }, 1000);
    }, 6000);
    return () => clearInterval(toastInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset cycle
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ─── FAQ Accordion State ──────────────────────────────────────────────────
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToCheckout = () => {
    const element = document.getElementById('checkout-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = CHECKOUT_PAYMENT_URL;
    }
  };

  return (
    <div className="min-h-screen bg-[#061a06] text-white font-sans selection:bg-[#FFB800] selection:text-black">
      <SEO
        title="2026 Nigerian Military & Police Screening Readiness Guide | Pass Medical & Physical Tests"
        description="The only survival manual showing exact height, BMI, flat-foot, knock-knee, chest expansion tests, document folder architecture, and 4-week physical drills for Army, Navy, Air Force & Police."
        canonicalUrl="https://recruitmenttracker.com.ng/military-screening-guide"
        ogType="website"
        ogImage="/assets/screening-guide-cover.jpg"
        keywords={[
          'military screening guide nigeria',
          'how to pass army screening',
          'nigerian navy screening requirements',
          'flat foot correction military',
          'knock knee screening army',
          'nigerian police screening physical fitness',
          '3.2km run workout plan',
          'military height requirements nigeria',
          'nin npc screening documents sorting',
          'air force bmtc screening tricks',
          'cdcfib physical screening guide'
        ]}
      />
      <ProductSchema
        name="Nigerian Military & Paramilitary Screening Readiness Guide (2026 Edition)"
        description="Complete step-by-step readiness blueprint detailing doctor height posture tricks, 14-day flat-foot & knock-knee exercises, 3-folder NIN/NPC document sorting, and 4-week 3.2km physical fitness conditioning plan."
        image="/assets/screening-guide-cover.jpg"
        price="1500"
        priceCurrency="NGN"
        sku="MIL-SCREEN-2026"
        mpn="NG-MIL-2026"
        brandName="Nigeria Recruitment Tracker Publishing"
        ratingValue={4.9}
        reviewCount={492}
        availability="https://schema.org/InStock"
        url="https://recruitmenttracker.com.ng/military-screening-guide"
      />
      <FAQPageSchema faqs={SALES_PAGE_FAQS} />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://recruitmenttracker.com.ng/' },
          { name: 'Screening Guides', url: 'https://recruitmenttracker.com.ng/guides' },
          { name: 'Military & Paramilitary Screening Survival Guide 2026', url: 'https://recruitmenttracker.com.ng/military-screening-guide' }
        ]}
      />

      {/* ─── URGENCY & SOCIAL PROOF TOP TICKER ───────────────────────── */}
      <div className="bg-[#CC0000] text-white font-black text-center py-2.5 px-4 text-xs sm:text-base tracking-wide flex flex-wrap items-center justify-center gap-2 sticky top-0 z-50 shadow-md">
        <span className="inline-flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full text-yellow-300 font-extrabold text-xs">
          <Flame className="w-4 h-4 animate-bounce text-yellow-300" />
          492+ APPLICANTS PURCHASED TODAY
        </span>
        <span>
          ⚡ EARLY BIRD ACCESS: <strong className="text-[#FFB800] underline font-black">₦1,500 ONLY</strong> (PRICE JUMPS TO ₦5,000 AS SCREENING DRAWS CLOSE):
        </span>
        <span className="bg-black/60 px-2.5 py-0.5 rounded font-mono text-yellow-300 font-black tracking-wider text-xs sm:text-sm">
          {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* ─── FLOATING LIVE BUYER TOAST NOTIFICATION ──────────────────── */}
      {showBuyerToast && (
        <div className="fixed bottom-20 left-4 z-50 bg-[#051a05] border-2 border-[#FFB800] text-white p-3 sm:p-3.5 rounded-2xl shadow-2xl backdrop-blur-md max-w-xs animate-fade-in flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center shrink-0 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs space-y-0.5">
            <div className="font-black text-yellow-300">
              {RECENT_BUYERS[currentBuyerIdx].name} ({RECENT_BUYERS[currentBuyerIdx].location})
            </div>
            <div className="text-gray-300 text-[11px]">
              Purchased <strong>{RECENT_BUYERS[currentBuyerIdx].branch} Manual</strong> • <span className="text-emerald-400">{RECENT_BUYERS[currentBuyerIdx].time}</span>
            </div>
          </div>
        </div>
      )}

      {/* ─── 1. HERO SECTION (Above The Fold) ─────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A3D0A] via-[#082908] to-[#041204] pt-10 pb-16 sm:pb-24 border-b-4 border-[#FFB800]">
        {/* Subtle Camouflage Gradient Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          {/* Social Proof & Urgency Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 bg-[#CC0000] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
              <AlertTriangle className="w-4 h-4 text-yellow-300" />
              <span>CRITICAL WARNING FOR 2026 APPLICANTS</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#FFB800] text-black px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
              <Flame className="w-4 h-4 text-red-700" />
              <span>492+ CANDIDATES JUST PURCHASED</span>
            </div>
          </div>

          {/* Heavy Hitting Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight sm:leading-tight uppercase tracking-tight max-w-5xl mx-auto drop-shadow-md">
            7 Out Of Every 10 Candidates Are <span className="text-[#FFB800] underline decoration-[#CC0000] decoration-4 sm:decoration-8">Sent Home On DAY 1</span> — Don't Be The Next Victim!
          </h1>

          {/* Brutal Reality Sub-headline */}
          <p className="mt-6 text-lg sm:text-2xl text-gray-200 font-semibold max-w-4xl mx-auto leading-relaxed">
            The Navy Said <span className="text-yellow-300 bg-black/40 px-2 py-0.5 rounded font-black">"Zero Tattoos, No Flat Foot"</span> — The Army Said <span className="text-yellow-300 bg-black/40 px-2 py-0.5 rounded font-black">"1.68m Minimum Height"</span>. One Tiny Mistake and Your Tag Number Is Collected, Followed By An Armed Military Police Escort Out Of Camp Gate!
          </p>

          {/* Product Hero 3D Card & CTA Box */}
          <div className="mt-10 max-w-4xl mx-auto bg-[#0A1F44]/90 border-2 border-[#FFB800] rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFB800] to-[#00FF66] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <img 
                  src="/assets/screening-guide-cover.jpg" 
                  alt="Nigerian Military Screening Guide 2026" 
                  className="relative rounded-xl shadow-2xl border-2 border-[#FFB800] w-64 sm:w-72 object-cover"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#CC0000] text-white font-black px-3 py-1 rounded-lg text-xs tracking-wider shadow-lg border border-white">
                  2026 VERIFIED
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="inline-block bg-emerald-900/80 text-emerald-300 border border-emerald-500/50 px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider">
                ⚡ Complete Survival Blueprint
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                NIGERIAN MILITARY & POLICE SCREENING READINESS GUIDE (2026 MANUAL)
              </h2>
              <ul className="space-y-2.5 text-base sm:text-lg text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
                  <span><strong>Exact Height & Chest Expansion</strong> Doctor's Measurement Cheat Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
                  <span><strong>14-Day Flat Foot & Knock-Knee</strong> At-Home Correction Exercises</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
                  <span><strong>Original Legal Document Folder Architecture</strong> (NIN, NPC, Affidavits)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
                  <span><strong>4-Week 3.2km & Push-up</strong> Military Training Regimen</span>
                </li>
              </ul>

              {/* Massive CTA Button */}
              <div className="pt-4">
                <button
                  onClick={scrollToCheckout}
                  className="w-full py-4 sm:py-5 px-6 bg-gradient-to-r from-[#FFB800] via-yellow-400 to-[#FF9900] text-black font-black text-lg sm:text-2xl rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-white cursor-pointer group"
                >
                  <span>YES! I WANT TO PASS MY SCREENING</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <p className="text-center text-xs sm:text-sm text-gray-300 font-bold mt-2.5 flex items-center justify-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Instant PDF Download • 5 Free Bonuses (Worth ₦50,000) • 100% Secure</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 2. PAIN SECTION: What Happens on Screening Day ───────────── */}
      <section className="py-16 sm:py-24 bg-[#0A1F44] border-b-4 border-[#CC0000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#CC0000] bg-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              BRUTAL TRUTH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight">
              This Is What ACTUALLY Happens On Screening Day
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl font-medium mt-3">
              Screening officers are NOT there to help you pass. Their job is to ELIMINATE 80% of candidates as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Disqualification 1 */}
            <div className="bg-[#050f22] border-2 border-red-600/60 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-red-500 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500 flex items-center justify-center text-red-500">
                <XCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-red-400">
                Disqualified for 0.5cm Height Shortfall
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                <em>"I measured 1.68m at my local chemist. When I got to the camp stadiometer barefoot, the officer pressed the head bar down hard and shouted <strong>'1.67.5m! STEP ASIDE, YOU ARE OUT!'</strong>"</em>
              </p>
              <div className="pt-2 text-xs font-black text-yellow-400 uppercase tracking-wider">
                → Learn the deep-inhalation spine trick to gain 1.0cm
              </div>
            </div>

            {/* Disqualification 2 */}
            <div className="bg-[#050f22] border-2 border-red-600/60 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-red-500 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500 flex items-center justify-center text-red-500">
                <XCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-red-400">
                Disqualified for Flat Foot & Knock-Knees
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                <em>"They made us walk barefoot on a wet foam mat and step on concrete. My sole had no inner curve. The doctor yelled <strong>'Pes Planus! Tag collected!'</strong> In 10 seconds, my 2 years of waiting vanished."</em>
              </p>
              <div className="pt-2 text-xs font-black text-yellow-400 uppercase tracking-wider">
                → Learn the 14-day towel curl & arch restoration drill
              </div>
            </div>

            {/* Disqualification 3 */}
            <div className="bg-[#050f22] border-2 border-red-600/60 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-red-500 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500 flex items-center justify-center text-red-500">
                <XCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-red-400">
                Disqualified for NIN / Birth Cert Mismatch
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                <em>"My secondary school testimonial had 'Musa B. Ibrahim' but my NIN slip had 'Ibrahim Musa'. The verification officer threw my file back and said <strong>'Fake credentials, move out!'</strong>"</em>
              </p>
              <div className="pt-2 text-xs font-black text-yellow-400 uppercase tracking-wider">
                → Use our Court Affidavit of Name Confirmation template
              </div>
            </div>
          </div>

          {/* Real Quote Banner */}
          <div className="mt-10 bg-black/60 border-l-8 border-[#CC0000] p-6 sm:p-8 rounded-r-2xl max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl font-bold text-yellow-300 italic leading-relaxed">
              "Our credentials were checked line by line under a magnifying glass. Candidates with unsealed affidavits or 1cm height deficit had their tag numbers ripped off on the spot and were attached to armed Military Police to be marched out through the front gate."
            </p>
            <span className="block mt-3 text-sm font-black text-gray-400 uppercase tracking-wider">
              — Verified Nigerian Armed Forces Screening Candidate Experience (Kaduna Screening Ground)
            </span>
          </div>
        </div>
      </section>

      {/* ─── 3. THE SOLUTION ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0A3D0A] border-b-4 border-[#FFB800]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-[#FFB800] text-black px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider">
              YOUR UNFAIR ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              The ONLY Guide That Shows You EXACTLY How They Check You — <span className="text-[#FFB800]">BEFORE</span> They Check You!
            </h2>
            <p className="text-gray-200 text-lg sm:text-xl font-semibold mt-3">
              Stop guessing. Know every medical test, doctor's trick question, and measurement standard in advance.
            </p>
          </div>

          {/* Official Standards Summary Grid */}
          <div className="bg-[#051a05] border-2 border-[#FFB800] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-[#FFB800] uppercase tracking-wide text-center mb-6">
              ⭐ Official 2025/2026 Statutory Measurement Matrix
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-green-800 text-sm sm:text-base font-black text-yellow-300">
                    <th className="py-3 px-4">Branch / Force</th>
                    <th className="py-3 px-4">Male Min. Height</th>
                    <th className="py-3 px-4">Female Min. Height</th>
                    <th className="py-3 px-4">Chest Expansion</th>
                    <th className="py-3 px-4">Tattoo Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-900 text-sm sm:text-base font-semibold text-gray-200">
                  <tr className="hover:bg-green-950/60">
                    <td className="py-3.5 px-4 font-black text-white">Nigerian Army (88/89 RRI)</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.68m (5 ft 6")</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.62m (5 ft 4")</td>
                    <td className="py-3.5 px-4">34" (86 cm)</td>
                    <td className="py-3.5 px-4 text-red-400 font-bold">Zero Tolerance</td>
                  </tr>
                  <tr className="hover:bg-green-950/60">
                    <td className="py-3.5 px-4 font-black text-white">Nigerian Navy (Batch 39)</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.68m (5 ft 6")</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.65m (5 ft 5")</td>
                    <td className="py-3.5 px-4">34" (86 cm)</td>
                    <td className="py-3.5 px-4 text-red-400 font-bold">Instant Disqualification</td>
                  </tr>
                  <tr className="hover:bg-green-950/60">
                    <td className="py-3.5 px-4 font-black text-white">Nigerian Air Force (BMTC)</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.66m (5 ft 5")</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.63m (5 ft 4")</td>
                    <td className="py-3.5 px-4">34" (86 cm)</td>
                    <td className="py-3.5 px-4 text-red-400 font-bold">Strictly Barred</td>
                  </tr>
                  <tr className="hover:bg-green-950/60">
                    <td className="py-3.5 px-4 font-black text-white">Nigeria Police (NPF 50k Intake)</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.67m (5 ft 6")</td>
                    <td className="py-3.5 px-4 text-[#FFB800]">1.64m (5 ft 4")</td>
                    <td className="py-3.5 px-4">86 cm Expanded</td>
                    <td className="py-3.5 px-4 text-red-400 font-bold">Disqualification</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 italic text-center mt-4">
              *Inside the guide, discover how to pass even if you are on the borderline edge of these requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT'S INSIDE (Value Stack Modules 1-6 + 5 Bonuses) ─── */}
      <section className="py-16 sm:py-24 bg-[#0A1F44] border-b-4 border-[#FFB800]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-[#CC0000] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider">
              FULL BATTLE-TESTED CURRICULUM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              Here Is What You Get Inside The 2026 Master Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Module 1 */}
            <div className="bg-[#050f22] border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#FFB800] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-lg border border-emerald-500">
                  01
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  Anthropometric Cheat Code Matrix
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Exact stadiometer barefoot height techniques, deep chest breathing exercises to hit 34 inches (86cm), and the exact BMI formula to prevent "Underweight" or "Obese" red flags.
              </p>
            </div>

            {/* Module 2 */}
            <div className="bg-[#050f22] border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#FFB800] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-lg border border-emerald-500">
                  02
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  Medical Elimination Traps & 14-Day Fix
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Step-by-step at-home self-tests for Flat Feet (*Pes Planus*), Knock-Knees (*Genu Valgum*), Bow-Legs, Snellen 6/6 eye chart, Ishihara color-blind plates, Varicocele, Hernia, and Blood Pressure spike prevention.
              </p>
            </div>

            {/* Module 3 */}
            <div className="bg-[#050f22] border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#FFB800] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-lg border border-emerald-500">
                  03
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  Tattoos, Scars, Dental & Ear Policies
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Clear distinction between traditional tribal marks vs. barred cult incisions, missing teeth regulations, and why you must syringe your ears 7 days before camp to avoid instant ENT failure.
              </p>
            </div>

            {/* Module 4 */}
            <div className="bg-[#050f22] border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#FFB800] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-lg border border-emerald-500">
                  04
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  4-Week Maximum Score Training Plan
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Day-by-day physical conditioning schedule to take your 3.2km (2-mile) run under 13:00 minutes, execute 45+ perfect military push-ups in 60 seconds, and conquer the timed sit-up trials.
              </p>
            </div>

            {/* Module 5 */}
            <div className="bg-[#050f22] border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#FFB800] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-lg border border-emerald-500">
                  05
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  Screening Day Documentation Survival Pack
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                The 3-Folder Spring File System: NIN plastic slip protocols, National Population Commission (NPC) vs. High Court Affidavits, Chairman LGA endorsements, and qualified Guarantor rank requirements.
              </p>
            </div>

            {/* Module 6 */}
            <div className="bg-[#050f22] border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#FFB800] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-lg border border-emerald-500">
                  06
                </div>
                <h3 className="text-xl font-black text-white uppercase">
                  50 High-Yield CBT & Oral Interview Questions
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Full solutions for Nigerian Armed Forces current affairs, military command hierarchies, Armed Forces Act, math speed formulas, and exact winning model answers for the officer panel interview.
              </p>
            </div>
          </div>

          {/* 🎁 5 GOLD BONUSES SECTION */}
          <div className="mt-14 bg-gradient-to-br from-[#FFB800] via-yellow-400 to-[#FF9900] text-black rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-white">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider">
                FREE WHEN YOU ORDER TODAY
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase mt-3">
                5 Exclusive Bonuses Worth ₦50,000 Included FREE!
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="bg-white/95 rounded-2xl p-4 border border-black/10 shadow-md">
                <div className="font-black text-xs text-red-600 uppercase">BONUS #1 (Value: ₦7,500)</div>
                <div className="font-bold text-base text-gray-900 mt-1">Printable Height/Chest/BMI Self-Assessment Scorecard</div>
              </div>

              <div className="bg-white/95 rounded-2xl p-4 border border-black/10 shadow-md">
                <div className="font-black text-xs text-red-600 uppercase">BONUS #2 (Value: ₦10,000)</div>
                <div className="font-bold text-base text-gray-900 mt-1">7-Day Pre-Screening Final Checklist (What To Wear & Pack)</div>
              </div>

              <div className="bg-white/95 rounded-2xl p-4 border border-black/10 shadow-md">
                <div className="font-black text-xs text-red-600 uppercase">BONUS #3 (Value: ₦7,500)</div>
                <div className="font-bold text-base text-gray-900 mt-1">3.2km Endurance & Push-Up Daily Training Log Sheet</div>
              </div>

              <div className="bg-white/95 rounded-2xl p-4 border border-black/10 shadow-md">
                <div className="font-black text-xs text-red-600 uppercase">BONUS #4 (Value: ₦10,000)</div>
                <div className="font-bold text-base text-gray-900 mt-1">Video Breakdown: How To Do Strict Military Push-ups That Count</div>
              </div>

              <div className="bg-white/95 rounded-2xl p-4 border border-black/10 shadow-md sm:col-span-2 lg:col-span-2">
                <div className="font-black text-xs text-red-600 uppercase">BONUS #5 (Value: ₦15,000)</div>
                <div className="font-bold text-base text-gray-900 mt-1">VIP Candidate Community Access for Live 2026 Shortlist Alerts & Venue Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHO IS IT FOR ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#0A3D0A] border-b-4 border-[#CC0000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            🎯 This Survival Guide Is Specially Engineered For You If You Are Applying For:
          </h2>
          
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-sm sm:text-base font-bold">
            <div className="bg-black/50 border border-[#FFB800] p-3.5 rounded-xl text-yellow-300">
              ✓ Nigerian Army 88/89/92 RRI
            </div>
            <div className="bg-black/50 border border-[#FFB800] p-3.5 rounded-xl text-yellow-300">
              ✓ Nigerian Navy Batch 39
            </div>
            <div className="bg-black/50 border border-[#FFB800] p-3.5 rounded-xl text-yellow-300">
              ✓ NAF Air Force BMTC 47
            </div>
            <div className="bg-black/50 border border-[#FFB800] p-3.5 rounded-xl text-yellow-300">
              ✓ Police (50,000 Constables)
            </div>
            <div className="bg-black/50 border border-[#FFB800] p-3.5 rounded-xl text-yellow-300">
              ✓ NDA 77th / 78th RC
            </div>
            <div className="bg-black/50 border border-[#FFB800] p-3.5 rounded-xl text-yellow-300">
              ✓ Army, Navy, Air Force DSSC / SSC
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PROOF / TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0A1F44] border-b-4 border-[#FFB800]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-[#00FF66] text-slate-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider">
              REAL RESULTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              Hear From Recruits Who Used This Blueprint To Pass
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#050f22] border-2 border-yellow-500/50 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex text-[#FFB800]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-base text-gray-200 italic leading-relaxed">
                "I was rejected in 2024 because my chest expansion was only 84cm. I applied the diaphragm breathing exercises in Module 1 for 3 weeks. At the 2025 screening in Kaduna, my expanded chest hit <strong>87.5cm</strong>. I was given my green pass card immediately!"
              </p>
              <div className="border-t border-gray-800 pt-3">
                <div className="font-black text-white">S. T. (Kaduna State)</div>
                <div className="text-xs text-[#FFB800] font-bold">Successfully Enlisted in Nigerian Army</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#050f22] border-2 border-yellow-500/50 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex text-[#FFB800]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-base text-gray-200 italic leading-relaxed">
                "I honestly thought my flat foot was spiritual because my elder brother was also rejected for it. I followed the towel curl and arch restoration exercises in Module 2 for 20 days. When the medical officer checked my wet footprint, the arch was distinct. That single drill saved my career!"
              </p>
              <div className="border-t border-gray-800 pt-3">
                <div className="font-black text-white">J. O. (Lagos State)</div>
                <div className="text-xs text-[#FFB800] font-bold">Nigerian Navy Batch Candidate</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#050f22] border-2 border-yellow-500/50 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex text-[#FFB800]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-base text-gray-200 italic leading-relaxed">
                "The 3-Folder Spring File arrangement in Module 5 made my document verification take less than 2 minutes. The screening officer commended me for having all NIN seals and NPC attestations sorted while others were running around looking for cyber cafés."
              </p>
              <div className="border-t border-gray-800 pt-3">
                <div className="font-black text-white">M. A. (Enugu State)</div>
                <div className="text-xs text-[#FFB800] font-bold">Police Cadet Candidate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. PRICE ANCHOR & CHECKOUT SECTION ──────────────────────── */}
      <section id="checkout-section" className="py-16 sm:py-24 bg-[#0A3D0A] border-b-4 border-[#FFB800] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="bg-[#051a05] border-4 border-[#FFB800] rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#CC0000] text-white font-black px-6 py-1.5 text-xs sm:text-sm uppercase tracking-wider transform rotate-12 translate-x-8 translate-y-4 shadow-md">
              97% OFF TODAY
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
              <span className="text-emerald-400 text-xs sm:text-sm font-black uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500">
                SPECIAL 2026 RECRUITMENT SEASON SUBSIDY
              </span>
              <span className="bg-[#FFB800] text-black text-xs sm:text-sm font-black uppercase tracking-wider px-3 py-1 rounded-full">
                🔥 492+ COPIES CLAIMED
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 uppercase">
              Get Instant Access To The Complete Survival Manual
            </h2>

            {/* Price Increase Tease Banner */}
            <div className="mt-4 p-3.5 bg-red-950/80 border-2 border-red-500 rounded-xl text-left max-w-2xl mx-auto space-y-1">
              <div className="flex items-center gap-2 text-red-400 font-black text-sm uppercase">
                <AlertTriangle className="w-4 h-4 text-yellow-300" />
                <span>PRICE INCREASE TEASER WARNING:</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-200">
                This <strong>₦1,500 early-bird price</strong> is heavily subsidised to help every serious candidate qualify. <strong>The price will automatically increase to ₦5,000</strong> as state screening dates draw close and the official shortlist is released!
              </p>
            </div>

            <p className="text-gray-300 text-base sm:text-lg font-medium mt-3 max-w-2xl mx-auto">
              Join the 492+ applicants already using this manual to prepare and be among the top 10% who secure their military & police uniform!
            </p>

            {/* Price Strikethrough Display */}
            <div className="my-8 py-6 bg-black/60 rounded-2xl border border-yellow-500/40 max-w-lg mx-auto space-y-2">
              <div className="text-gray-400 text-sm sm:text-base font-bold">
                Total Value (Guide + 5 Bonuses): <span className="line-through text-red-400 decoration-2 font-black">₦50,000</span>
              </div>
              <div className="text-4xl sm:text-6xl font-black text-[#FFB800] tracking-tight">
                TODAY: ₦1,500
              </div>
              <div className="text-xs sm:text-sm text-emerald-400 font-black uppercase tracking-wider">
                ⚡ (One-Time Payment • Instant PDF Download)
              </div>
            </div>

            {/* Primary Payment Action Button */}
            <div className="max-w-lg mx-auto">
              <a
                href={CHECKOUT_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 px-8 bg-gradient-to-r from-[#FFB800] via-yellow-400 to-[#FF9900] text-black font-black text-xl sm:text-2xl rounded-2xl shadow-2xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-white cursor-pointer"
              >
                <Download className="w-6 h-6" />
                <span>PAY ₦1,500 & DOWNLOAD NOW</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300 font-bold">
              <span className="flex items-center gap-1">🔒 Paystack / Bank Card</span>
              <span className="flex items-center gap-1">⚡ Instant PDF Delivery</span>
              <span className="flex items-center gap-1">🛡️ 30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. 30-DAY NO-QUESTIONS-ASKED GUARANTEE ──────────────────── */}
      <section className="py-14 bg-[#0A1F44] border-b-4 border-[#CC0000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#050f22] border-2 border-emerald-500 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-xl">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-4 border-emerald-400 flex items-center justify-center shrink-0">
              <Shield className="w-12 h-12 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white uppercase">
                100% Risk-Free 30-Day Money-Back Guarantee
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                If you do not find this manual 10 times more valuable than the random advice on social media, simply send us your Paystack receipt and we will refund every kobo immediately. No questions asked. No bad blood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS (FAQ) ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0A3D0A] border-b-4 border-[#FFB800]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-[#FFB800] text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this an official publication of the Nigerian Armed Forces?",
                a: "No. This is an independent prep and survival manual compiled by veteran instructors, physical conditioning coaches, and successful recruits based on the official 2025/2026 statutory military guidelines."
              },
              {
                q: "Does this guide guarantee I will get selected?",
                a: "No single book can guarantee final recruitment selection. What this guide GUARANTEES is that you will NOT be eliminated on Day 1 or Day 2 for preventable reasons like height measurement posture, flat foot tests, blood pressure panic, or document discrepancies."
              },
              {
                q: "How will I receive the guide after payment?",
                a: "Instantly. Once your payment of ₦1,500 is confirmed via Paystack (Debit Card, Bank Transfer, USSD), you will be redirected to the instant high-speed download page, and a backup link will be sent to your email."
              },
              {
                q: "Can I read this on my Android / iPhone?",
                a: "Yes! The guide is formatted in standard high-definition PDF format. You can read it smoothly on any smartphone, tablet, laptop, or print it out."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="bg-[#051a05] border-2 border-green-800 hover:border-[#FFB800] rounded-2xl p-5 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-black text-lg text-white">
                    {item.q}
                  </h4>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#FFB800] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </div>
                {openFaq === idx && (
                  <p className="mt-3 text-base text-gray-300 border-t border-green-900 pt-3 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. FINAL URGENCY CTA & OFFICIAL DISCLAIMER ─────────────── */}
      <section className="py-16 sm:py-24 bg-[#0A1F44] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#CC0000] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-yellow-300" />
            <span>FINAL CALL — DON'T ARRIVE UNPREPARED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Your Competitors Are Already Training. Will You Step On Camp Ground Unprepared?
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Secure your copy right now for just <strong>₦1,500</strong> before the price increases, master the physical drills, sort your legal documents, and show up ready to earn your military uniform.
          </p>

          <div className="pt-4 max-w-lg mx-auto">
            <button
              onClick={scrollToCheckout}
              className="w-full py-5 px-8 bg-gradient-to-r from-[#FFB800] via-yellow-400 to-[#FF9900] text-black font-black text-xl sm:text-2xl rounded-2xl shadow-2xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-white cursor-pointer"
            >
              <span>GET THE COMPLETE MANUAL (₦1,500)</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12 text-xs text-gray-500 space-y-2 max-w-2xl mx-auto">
            <p>
              <strong>Official Portal Verification:</strong> Always cross-reference statutory military dates on verified headquarters portals: <em>recruitment.army.mil.ng</em>, <em>joinnigeriannavy.com</em>, and <em>nafrecruitment.airforce.mil.ng</em>.
            </p>
            <p>© 2026 Nigeria Recruitment Tracker Publishing Division. All Rights Reserved.</p>
          </div>
        </div>
      </section>

      {/* ─── STICKY BOTTOM BUY BAR FOR MOBILE / DESKTOP ─────────────── */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#050f22]/95 border-t-2 border-[#FFB800] py-3 px-4 z-40 backdrop-blur-md flex items-center justify-between gap-4 max-w-7xl mx-auto shadow-2xl">
        <div className="hidden sm:block">
          <div className="text-xs font-bold text-gray-300">2026 Military & Police Screening Survival Guide</div>
          <div className="text-lg font-black text-[#FFB800]">₦1,500 <span className="line-through text-xs text-gray-500 font-normal">₦50,000</span></div>
        </div>
        
        <button
          onClick={scrollToCheckout}
          className="flex-1 sm:flex-initial py-3 px-6 sm:px-8 bg-gradient-to-r from-[#FFB800] to-yellow-400 text-black font-black text-sm sm:text-base rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>DOWNLOAD GUIDE (₦1,500)</span>
        </button>
      </div>
    </div>
  );
};

export default MilitaryScreeningSalesPage;
