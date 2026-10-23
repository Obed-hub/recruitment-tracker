import React, { useState } from 'react';
import {
  Plane, MapPin, Search, FileText, CheckCircle2, AlertTriangle, Shield,
  ArrowRight, Download, Filter, HelpCircle, ExternalLink, Calendar,
  MessageCircle, Share2, Check, Clock, Sparkles, BookOpen, UserCheck, AlertCircle,
  Copy, FolderOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import AdUnit from '../components/AdUnit';
import SponsoredJobCard from '../components/SponsoredJobCard';
import MilitaryScreeningAdCreative from '../components/MilitaryScreeningAdCreative';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface NAFVenue {
  state: string;
  zone: 'North West' | 'North East' | 'North Central' | 'South West' | 'South East' | 'South South';
  venue: string;
  address: string;
  reportingTime: string;
  instructions: string;
}

const NAF_STATE_VENUES: NAFVenue[] = [
  {
    state: 'Abia',
    zone: 'South East',
    venue: 'NAF Detachment, Government College Umuahia / 144 Battalion Verification Center',
    address: 'Umuahia, Abia State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Candidates from all LGAs must report in designated batch order with original credentials.'
  },
  {
    state: 'Adamawa',
    zone: 'North East',
    venue: '153 Base Services Group, Nigerian Air Force Base Yola',
    address: 'Airport Road, Yola, Adamawa State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Verification at NAF Base parade ground. Gates shut strictly at 07:00 AM.'
  },
  {
    state: 'Akwa Ibom',
    zone: 'South South',
    venue: 'NAF Detachment, Victor Attah International Airport',
    address: 'Uyo-Okobo Road, Uyo, Akwa Ibom State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Report in clean white shorts and T-shirt with two passport photos and NIN slip.'
  },
  {
    state: 'Anambra',
    zone: 'South East',
    venue: 'NAF Detachment, Chinua Achebe International Airport, Umueri / Uga Airstrip',
    address: 'Umueri, Anambra State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Physical verification and credential checking batched by Local Government of origin.'
  },
  {
    state: 'Bauchi',
    zone: 'North East',
    venue: '251 Base Services Group, Nigerian Air Force Base Bauchi',
    address: 'Kano-Jos Road, Bauchi State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'CBT examination and biometric screening conducted at the Base Education Centre.'
  },
  {
    state: 'Bayelsa',
    zone: 'South South',
    venue: 'Forward Operating Base (FOB) / NAF Heliport, Yenagoa',
    address: 'Yenagoa, Bayelsa State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Ensure all LGA certificates are authenticated by official LGA headquarters.'
  },
  {
    state: 'Benue',
    zone: 'North Central',
    venue: 'Tactical Air Command (TAC) HQ / 401 Flying Training School, NAF Base Makurdi',
    address: 'Gboko Road, Makurdi, Benue State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Major NAF training base screening center. Strict military discipline enforced.'
  },
  {
    state: 'Borno',
    zone: 'North East',
    venue: '105 Composite Group, Nigerian Air Force Base Maiduguri',
    address: 'Airport Road, Maiduguri, Borno State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Security checkpoint accreditation required before entry into base screening hall.'
  },
  {
    state: 'Cross River',
    zone: 'South South',
    venue: '207 Special Mobility Group, Nigerian Air Force Base Calabar',
    address: 'Margaret Ekpo International Airport Road, Calabar',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Report with completed Attestation and Parental Consent forms duly signed.'
  },
  {
    state: 'Delta',
    zone: 'South South',
    venue: 'Forward Operating Base (FOB), Osubi Airstrip / 63 Brigade Logistics Center',
    address: 'Osubi, Warri / Asaba, Delta State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Accreditation starts 06:30 AM. Candidates must bring their printed verification slips.'
  },
  {
    state: 'Ebonyi',
    zone: 'South East',
    venue: 'NAF Detachment, Ebonyi State International Airport, Onueke',
    address: 'Onueke, Ebonyi State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Physical fitness screening conducted after document credential verification.'
  },
  {
    state: 'Edo',
    zone: 'South South',
    venue: '107 Air Maritime Group (AMG), Nigerian Air Force Base Benin',
    address: 'Airport Road, Benin City, Edo State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'All shortlisted non-tradesmen and tradesmen from Edo State report directly here.'
  },
  {
    state: 'Ekiti',
    zone: 'South West',
    venue: 'NAF Detachment, Agro-Cargo International Airport / Christ\'s School Verification Ground',
    address: 'Ado-Ekiti, Ekiti State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Come along with original WAEC/NECO certificates and valid photo ID.'
  },
  {
    state: 'Enugu',
    zone: 'South East',
    venue: '553 Base Services Group, Nigerian Air Force Base Emene',
    address: 'Emene, Enugu, Enugu State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Regional headquarters screening center for Enugu State candidates.'
  },
  {
    state: 'Federal Capital Territory (Abuja)',
    zone: 'North Central',
    venue: 'NAF Base, Bill Clinton Drive, Nnamdi Azikiwe International Airport',
    address: 'Bill Clinton Drive, Airport Road, Abuja FCT',
    reportingTime: '06:00 AM Prompt',
    instructions: 'All FCT shortlisted candidates report at NAF Base main gate by 06:00 AM.'
  },
  {
    state: 'Gombe',
    zone: 'North East',
    venue: 'NAF Forward Operating Base (FOB), Gombe Lawanti International Airport',
    address: 'Lawanti, Gombe State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Screening includes original certificate vetting, medical vitals, and height check.'
  },
  {
    state: 'Imo',
    zone: 'South East',
    venue: '211 Quick Response Group (QRG), Nigerian Air Force Base Owerri',
    address: 'Port Harcourt Road / Sam Mbakwe Airport Wing, Owerri',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Candidates must possess white canvas, white socks, and white round-neck T-shirt.'
  },
  {
    state: 'Jigawa',
    zone: 'North West',
    venue: 'NAF Detachment, Dutse International Airport / State Secretariat Screening Hall',
    address: 'Dutse, Jigawa State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Verification strictly monitored. Impersonation leads to immediate military arrest.'
  },
  {
    state: 'Kaduna',
    zone: 'North West',
    venue: 'Air Training Command / Ground Training Command, NAF Base Kaduna',
    address: 'Mando Road / Kawo, Kaduna State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Primary recruitment hub and Depot training grounds. Ensure all documents are intact.'
  },
  {
    state: 'Kano',
    zone: 'North West',
    venue: '403 Flying Training School, Nigerian Air Force Base Kano',
    address: 'Airport Road, Kano State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'High volume center. Arrive early to complete biometric fingerprint clearance.'
  },
  {
    state: 'Katsina',
    zone: 'North West',
    venue: '213 Forward Operating Base (FOB), Umaru Musa Yar\'Adua Airport Wing',
    address: 'Katsina Airport Road, Katsina State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'State screening board verifies LGA credentials before aptitude test login.'
  },
  {
    state: 'Kebbi',
    zone: 'North West',
    venue: 'NAF Detachment, Sir Ahmadu Bello International Airport',
    address: 'Birnin Kebbi, Kebbi State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Indigene identification certificates will be cross-checked with official LGA registers.'
  },
  {
    state: 'Kogi',
    zone: 'North Central',
    venue: 'NAF Quick Response Unit / Command Secondary School Verification Center',
    address: 'Lokoja, Kogi State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Candidates report with clipboard, 2B pencils, blue biros, and slip printouts.'
  },
  {
    state: 'Kwara',
    zone: 'North Central',
    venue: '303 Medium Airlift Group, Nigerian Air Force Base Ilorin',
    address: 'Airport Road, Ilorin, Kwara State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Screening includes physical fitness run, push-ups, sit-ups, and CBT aptitude test.'
  },
  {
    state: 'Lagos',
    zone: 'South West',
    venue: 'Logistics Command HQ, Sam Ethnan Air Force Base, Ikeja',
    address: 'Airport Road, Ikeja, Lagos State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Report at Sam Ethnan Base main auditorium. Strictly no entry without verification slip.'
  },
  {
    state: 'Nasarawa',
    zone: 'North Central',
    venue: 'NAF Forward Operating Base (FOB) Lafia / Lafia Cargo Airport Detachment',
    address: 'Lafia, Nasarawa State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Report in proper dress code. Mobile phones prohibited during examination.'
  },
  {
    state: 'Niger',
    zone: 'North Central',
    venue: '013 Quick Response Force (QRF), Nigerian Air Force Base Minna',
    address: 'Minna Airport Road, Minna, Niger State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Document inspection begins immediately after morning morning assembly at 06:30 AM.'
  },
  {
    state: 'Ogun',
    zone: 'South West',
    venue: 'NAF Detachment, Gateway Agro-Cargo International Airport / Abeokuta Verification Point',
    address: 'Iperu-Remo / Abeokuta, Ogun State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Candidates from all 20 Ogun LGAs report with authentic state of origin certificates.'
  },
  {
    state: 'Ondo',
    zone: 'South West',
    venue: '32 Artillery Brigade / NAF Detachment, Akure Airport Wing',
    address: 'Akure, Ondo State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Screening timetable adheres strictly to LGA allocation published in the PDF.'
  },
  {
    state: 'Osun',
    zone: 'South West',
    venue: 'NAF Research & Development Centre (AFRDC) / NAF Detachment, Osogbo',
    address: 'Ilesa Road / Osogbo, Osun State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Credential vetting followed by computer-based aptitude test in JAMB CBT center.'
  },
  {
    state: 'Oyo',
    zone: 'South West',
    venue: 'NAF Detachment, Samuel Ladoke Akintola International Airport, Alakia',
    address: 'Alakia, Ibadan, Oyo State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'All shortlisted Oyo State candidates report at Alakia NAF Detachment ground.'
  },
  {
    state: 'Plateau',
    zone: 'North Central',
    venue: 'Air Force Military School (AFMS) / 451 Base Services Group, Jos',
    address: 'AFMS Compound, Jos, Plateau State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Historic Air Force institution. Strict military dress code and conduct mandatory.'
  },
  {
    state: 'Rivers',
    zone: 'South South',
    venue: '115 Special Operations Group (SOG), Nigerian Air Force Base Port Harcourt',
    address: 'Aba Road, Port Harcourt, Rivers State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Report at 115 SOG Base parade ground. Gates shut strictly at 07:00 AM.'
  },
  {
    state: 'Sokoto',
    zone: 'North West',
    venue: '119 Forward Operating Base, Nigerian Air Force Base Sokoto',
    address: 'Sultan Abubakar III International Airport Road, Sokoto',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Ensure full name on NIN slip matches SSCE certificates and application printout.'
  },
  {
    state: 'Taraba',
    zone: 'North East',
    venue: 'NAF Quick Response Wing, Danbaba Suntai Airport Wing, Jalingo',
    address: 'Jalingo, Taraba State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Bring four recent passport photographs with white background.'
  },
  {
    state: 'Yobe',
    zone: 'North East',
    venue: '233 Battalion / NAF Detachment, Muhammadu Buhari Cargo Airport',
    address: 'Damaturu, Yobe State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Security vetting conducted at military checkpoint prior to registration hall entry.'
  },
  {
    state: 'Zamfara',
    zone: 'North West',
    venue: '207 Quick Response Group (QRG), NAF Base Gusau',
    address: 'Gusau, Zamfara State',
    reportingTime: '06:00 AM Prompt',
    instructions: 'Check candidate serial number on state PDF before approaching verification desk.'
  }
];

const AIRFORCE_SHORTLIST_FAQS = [
  {
    question: "Is the Nigerian Air Force (NAF) 2026 exam shortlist officially out?",
    answer: "YES! The Nigerian Air Force has officially released the shortlisted candidates for the 2026 Basic Military Training Course (BMTC 45) and Direct Short Service Commission (DSSC) Zonal Recruitment Screening and Computer-Based Aptitude Tests. Candidates can check their names by state on nafrecruitment.airforce.mil.ng or using our state screening directory."
  },
  {
    question: "How do I check and download the Nigerian Air Force shortlist PDF?",
    answer: "To check: 1) Visit the official NAF recruitment portal at nafrecruitment.airforce.mil.ng, 2) Click on 'Shortlisted Candidates for 2026 Zonal Screening', 3) Select your State of Origin to download the official PDF, 4) Open the PDF on your device and press Ctrl+F (or use the magnifying glass icon) to search your Application Number or Surname, 5) Note your assigned screening date and state screening center."
  },
  {
    question: "What is the compulsory dress code for the Air Force screening exercise?",
    answer: "All candidates must strictly adhere to the military screening dress code: Plain white round-neck T-shirt, plain white shorts (above knee-length), clean white canvas trainers or sneakers, and plain white socks. Wearing jeans, patterned clothing, or slippers will result in immediate denial of entry at the base gate."
  },
  {
    question: "What documents must I bring to the Air Force screening center?",
    answer: "You must present: 1) Original & photocopies of O-Level results (WAEC, NECO, or NABTEB) in max 2 sittings, 2) Primary School Leaving Certificate (FSLC) / testimonial, 3) NIN verification slip from NIMC, 4) Local Government Area (LGA) Indigene / State of Origin Certificate, 5) Birth Certificate from NPC or Declaration of Age, 6) Printed Application Confirmation Slip, 7) Duly completed and endorsed Attestation / Guarantor Form, 8) Four (4) recent passport photographs with white background."
  },
  {
    question: "What subjects are tested in the Nigerian Air Force CBT Aptitude Test?",
    answer: "The Nigerian Air Force CBT Aptitude Test comprises 75 to 100 questions within 45 to 60 minutes across three core modules: 1) English Language & Comprehension (35%), 2) General Mathematics & Quantitative Aptitude (35%), and 3) General Knowledge, Current Affairs & Military Awareness (30%). You can practice free simulated Air Force CBT tests directly on our portal."
  },
  {
    question: "What happens if my name is shortlisted but I cannot find my application slip?",
    answer: "You can log into the NAF portal at nafrecruitment.airforce.mil.ng using your registered email and password, or NIN, and navigate to 'Reprint Slips' to print a fresh copy of your application confirmation slip and guarantor form. Do not attend screening without a printed slip."
  },
  {
    question: "Do I have to pay any fee at the Air Force screening center?",
    answer: "NO! Enlistment and screening into the Nigerian Air Force is 100% FREE OF CHARGE. Headquarters Nigerian Air Force does not demand screening fees, medical card fees, or replacement slot charges. Anyone soliciting money under the guise of guaranteeing your enlistment is a fraudster."
  }
];

const GOOGLE_DRIVE_SHORTLIST_URL = "https://drive.google.com/drive/folders/1cqKwJssriCQb9xiwhdcCbnOuFg-Atf3y?usp=drive_link";

export const AirForceShortlist2026: React.FC = () => {
  const [searchState, setSearchState] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [selectedCadre, setSelectedCadre] = useState<'BMTC Non-Trades' | 'BMTC Tradesmen' | 'DSSC'>('BMTC Non-Trades');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedDriveLink, setCopiedDriveLink] = useState<boolean>(false);

  const handleCopyDriveLink = () => {
    navigator.clipboard.writeText(GOOGLE_DRIVE_SHORTLIST_URL);
    setCopiedDriveLink(true);
    setTimeout(() => setCopiedDriveLink(false), 2500);
  };

  const handleShareDriveWhatsApp = () => {
    const text = encodeURIComponent(
      `🚨 *NIGERIAN AIR FORCE (NAF) 2026 SHORTLIST PDF DOWNLOAD (GOOGLE DRIVE MIRROR)*\n\n` +
      `The official Nigerian Air Force 2026 Shortlist PDF documents for all 36 States + FCT are now available on Google Drive for instant high-speed download (No Portal Downtime!):\n\n` +
      `📥 Download State PDFs: ${GOOGLE_DRIVE_SHORTLIST_URL}\n\n` +
      `📍 Check State Screening Centers, Dress Code & Free CBT Practice Exam:\n` +
      `https://recruitmenttracker.com.ng/air-force-shortlist`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const zones = ['All', 'North Central', 'North East', 'North West', 'South East', 'South South', 'South West'];

  const filteredVenues = NAF_STATE_VENUES.filter((venue) => {
    const matchesState = venue.state.toLowerCase().includes(searchState.toLowerCase()) ||
                         venue.venue.toLowerCase().includes(searchState.toLowerCase()) ||
                         venue.address.toLowerCase().includes(searchState.toLowerCase());
    const matchesZone = selectedZone === 'All' || venue.zone === selectedZone;
    return matchesState && matchesZone;
  });

  const checklistItems = [
    { id: 'item-1', label: 'Original and 4 photocopies of WAEC / NECO / NABTEB / Degree / ND statement of result' },
    { id: 'item-2', label: 'Original Primary School Leaving Certificate (FSLC) and primary testimonial' },
    { id: 'item-3', label: 'Authentic National Identity Management Commission (NIMC) NIN verification slip' },
    { id: 'item-4', label: 'Certificate of State of Origin signed by LGA Chairman or Secretary' },
    { id: 'item-5', label: 'Birth Certificate issued by National Population Commission (NPC) or valid Age Declaration' },
    { id: 'item-6', label: 'Completed Attestation / Guarantor Form endorsed by a Magistrate or Military Officer' },
    { id: 'item-7', label: 'Printed 2026 Air Force Application Confirmation Slip & Barcode Slip' },
    { id: 'item-8', label: 'Four (4) recent passport-sized photographs on a clean white background' },
    { id: 'item-9', label: 'Two (2) pairs of plain white round-neck T-shirts (strictly unbranded)' },
    { id: 'item-10', label: 'Two (2) pairs of plain white shorts (above knees) and white socks' },
    { id: 'item-11', label: 'One (1) pair of clean white canvas trainers / sports sneakers' },
    { id: 'item-12', label: 'Writing materials: Clipboard, blue/black biro pens, HB pencils, and sharpener' }
  ];

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedChecklistCount = Object.values(checkedItems).filter(Boolean).length;

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🚨 *BREAKING NEWS:* The Nigerian Air Force (NAF) 2026 CBT Exam Shortlist is OUT!\n\n` +
      `Check your state screening center, reporting date, required documents checklist, and take the FREE Air Force CBT practice mock test here:\n` +
      `https://recruitmenttracker.com.ng/air-force-shortlist`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Dynamic SEO Meta Tags */}
      <SEO
        title="Nigerian Air Force Shortlisted Candidates 2026 PDF Download & CBT Exam Venues (BMTC 45 / DSSC)"
        description="Check Nigerian Air Force (NAF) 2026 shortlisted candidates list and state screening centers across all 36 states and FCT. Download PDF, verify CBT exam date, required dress code & take free mock tests."
        canonicalUrl="/air-force-shortlist"
        keywords={[
          'air force exam shortlist 2026',
          'nigerian air force shortlisted candidates 2026',
          'naf shortlist pdf download',
          'naf bmtc 45 shortlisted candidates',
          'naf screening date and venue 2026',
          'nafrecruitment.airforce.mil.ng shortlist',
          'how to check air force shortlist 2026',
          'air force cbt past questions free test',
          'naf state screening centers'
        ]}
      />

      {/* JSON-LD Structured Data Schema */}
      <FAQPageSchema faqs={AIRFORCE_SHORTLIST_FAQS} />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Shortlists & Venues', url: '/shortlist-hub' },
          { name: 'Nigerian Air Force Shortlist 2026', url: '/air-force-shortlist' }
        ]}
      />

      {/* Hero Header Section with High-Impact Aviation Design */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-[#071f3d] to-sky-950 text-white p-6 sm:p-9 shadow-2xl border-2 border-sky-400/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -mb-10 w-72 h-72 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Top Pill / Badge Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                OFFICIAL SHORTLIST RELEASE • 2026/2027 INTAKE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={GOOGLE_DRIVE_SHORTLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/30 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                Drive PDF Mirror Ready
              </a>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                Updated {getDailyUpdatedBadge()}
              </span>
              <span className="hidden sm:inline-block text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700">
                nafrecruitment.airforce.mil.ng
              </span>
            </div>
          </div>

          {/* Main H1 Title */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Nigerian Air Force (NAF) Shortlisted Candidates 2026:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-amber-300">
                CBT Exam Dates & State Screening Centers
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
              Headquarters Nigerian Air Force (HQ NAF) has officially released the list of successful candidates shortlisted for the <strong>2026 Zonal Screening & Computer-Based Aptitude Tests (BMTC Batch 45 & DSSC)</strong>. Use our verified state directory below to locate your screening venue, download PDF guidelines, review mandatory items, and practice real Air Force CBT questions.
            </p>
          </div>

          {/* Key Metrics / Snapshot Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block uppercase">Portal Status</span>
              <span className="text-sm sm:text-base font-black text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Shortlist Out
              </span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block uppercase">Venues Listed</span>
              <span className="text-sm sm:text-base font-black text-sky-300 mt-0.5 block">
                36 States + FCT
              </span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block uppercase">Exam Format</span>
              <span className="text-sm sm:text-base font-black text-amber-300 mt-0.5 block">
                CBT Aptitude Test
              </span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block uppercase">PDF Cloud Mirror</span>
              <a
                href={GOOGLE_DRIVE_SHORTLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-black text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-1 mt-0.5"
              >
                <FolderOpen className="w-4 h-4 text-emerald-400" /> Google Drive
              </a>
            </div>
          </div>

          {/* Action Button Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800">
            <a
              href={GOOGLE_DRIVE_SHORTLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 shrink-0 animate-pulse"
            >
              <Download className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              Download Shortlist PDFs (Drive Mirror)
              <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
            </a>
            <a
              href="#state-venues"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              <MapPin className="w-4 h-4 text-slate-950" />
              Find State Screening Venue
            </a>
            <Link
              to="/past-questions/air-force"
              className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              <BookOpen className="w-4 h-4 text-white" />
              Take Free CBT Practice Exam
            </Link>
            <button
              onClick={handleShareWhatsApp}
              className="px-4 py-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              <Share2 className="w-4 h-4 text-white" />
              Share to WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Dedicated Google Drive Shortlist Cloud Mirror & Interactive Viewer */}
      <section
        id="drive-archive"
        className="rounded-3xl bg-gradient-to-br from-slate-950 via-[#071d3a] to-slate-900 text-white p-6 sm:p-8 shadow-2xl border-2 border-emerald-500/50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 bg-sky-600/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  AUTHENTIC NAF SHORTLIST CLOUD MIRROR
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-800">
                  All 36 States + FCT
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                Download Air Force Shortlist 2026 PDF{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">
                  (Official Google Drive Archive)
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                To prevent applicants from getting locked out due to heavy traffic or server downtime on <code className="text-sky-300 font-mono bg-slate-900 px-1 py-0.5 rounded">nafrecruitment.airforce.mil.ng</code>, all verified state shortlisted candidate PDF lists are hosted on this fast Google Drive cloud mirror.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0">
              <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-700/50 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Free & No Sign-In Required
              </span>
              <span className="text-xs font-bold text-sky-300 bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-700/50 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-sky-400" /> Verified HQ NAF Documents
              </span>
            </div>
          </div>

          {/* Action Hub Strip */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={GOOGLE_DRIVE_SHORTLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 shrink-0 group"
            >
              <Download className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              <span>Open Google Drive Folder (All States)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopyDriveLink}
              className={`px-4 py-3.5 rounded-xl border font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0 ${
                copiedDriveLink
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              {copiedDriveLink ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copiedDriveLink ? 'Drive Link Copied!' : 'Copy Drive Link'}</span>
            </button>

            <button
              onClick={handleShareDriveWhatsApp}
              className="px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              <Share2 className="w-4 h-4 text-white" />
              <span>Share Link to WhatsApp</span>
            </button>
          </div>

          {/* 3 Steps: How to Search Your Name in the Drive PDFs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center border border-sky-400/30">1</span>
                <h3 className="font-bold text-white text-sm">On Android / iPhone</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click <strong>Open Google Drive Folder</strong>. Tap your State of Origin PDF. Tap the magnifying glass (<kbd className="bg-slate-800 px-1 py-0.5 rounded text-sky-300 font-mono">🔍</kbd>) at the top and type your Surname or Application ID.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-400/30">2</span>
                <h3 className="font-bold text-white text-sm">On Windows / Mac / Cybercafe</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open the Drive folder and double-click your state PDF. Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300 font-mono">Ctrl + F</kbd> (or <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300 font-mono">Cmd + F</kbd> on Mac). Type your Application Number to jump straight to your row.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-400/30">3</span>
                <h3 className="font-bold text-white text-sm">If Your Name is Shortlisted</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Take note of your <strong>Assigned Screening Center</strong>, <strong>Reporting Date</strong>, and <strong>Batch Number</strong>. Prepare your white kit and use our screening checklist below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Visibility Ad / Notice Unit */}
      <AdUnit slot="airforce_shortlist_top" format="auto" />

      {/* Step-by-Step Guide: How to Check Your Name on NAF Portal */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              How to Check Your Name on the Air Force Shortlist PDF (2026)
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Official verification steps to confirm your screening batch, date, and exam center
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative">
            <span className="w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center mb-3">1</span>
            <h3 className="font-bold text-gray-900 text-base mb-1">Access Official NAF Portal</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Visit <a href="https://nafrecruitment.airforce.mil.ng" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-semibold underline">nafrecruitment.airforce.mil.ng</a> on your phone or computer. Beware of unofficial clone websites.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative flex flex-col justify-between">
            <div>
              <span className="w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center mb-3">2</span>
              <h3 className="font-bold text-gray-900 text-base mb-1">Download State PDF List</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Click on <strong>"Shortlisted Candidates for 2026 Zonal Screening"</strong> or use our Google Drive mirror to access the authentic PDF for your State of Origin.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-200">
              <a
                href={GOOGLE_DRIVE_SHORTLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                Download via Google Drive
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative">
            <span className="w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center mb-3">3</span>
            <h3 className="font-bold text-gray-900 text-base mb-1">Search Your Surname or ID</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Open the downloaded PDF and use the search bar (<kbd className="bg-gray-200 px-1.5 py-0.5 rounded text-xs font-mono">Ctrl + F</kbd>). Enter your Application ID or exact Surname to confirm your name.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900">
              <strong>Portal Overload Notice:</strong> If <code className="font-mono bg-amber-100 px-1 rounded">nafrecruitment.airforce.mil.ng</code> is slow or temporarily timing out due to massive applicant traffic, bypass the delay by downloading your state PDF directly from our Google Drive mirror.
            </div>
          </div>
          <a
            href={GOOGLE_DRIVE_SHORTLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shrink-0 flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            Open Drive Mirror
          </a>
        </div>
      </section>

      {/* Interactive State-by-State NAF Zonal Screening Centers Directory */}
      <section id="state-venues" className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-sky-600" />
                Air Force State Screening Centers & Command Venues
              </h2>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                {filteredVenues.length} of 37 Venues
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select your state of origin or type your state/LGA to find your official NAF base verification center
            </p>
          </div>

          {/* Cadre Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
            {(['BMTC Non-Trades', 'BMTC Tradesmen', 'DSSC'] as const).map((cadre) => (
              <button
                key={cadre}
                onClick={() => setSelectedCadre(cadre)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCadre === cadre
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cadre}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              placeholder="Search by state (e.g., Lagos, Kaduna, Rivers, Kano, Abuja)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-gray-50/50"
            />
          </div>

          <div className="relative">
            <Filter className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-gray-50/50 appearance-none font-medium text-gray-700"
            >
              {zones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone === 'All' ? 'All Geopolitical Zones' : zone}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVenues.length > 0 ? (
            filteredVenues.map((venue) => (
              <div
                key={venue.state}
                className="rounded-2xl border border-gray-200 p-5 bg-gradient-to-br from-white to-sky-50/30 hover:border-sky-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-gray-900 text-lg">{venue.state} State</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">
                        {venue.zone}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" /> {venue.reportingTime}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 block mb-0.5">
                      Assigned NAF Screening Center:
                    </span>
                    <p className="font-bold text-gray-900 text-sm leading-snug">
                      {venue.venue}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      {venue.address}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 bg-white/80 p-2.5 rounded-xl border border-gray-100 leading-relaxed">
                    <strong>Note:</strong> {venue.instructions}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-500">
                      Cadre: <span className="text-sky-700">{selectedCadre}</span>
                    </span>
                    <Link
                      to="/past-questions/air-force"
                      className="font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                    >
                      Practice CBT Test <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <a
                    href={GOOGLE_DRIVE_SHORTLIST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Download ${venue.state} State Air Force Shortlist PDF from Google Drive`}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold flex items-center justify-center gap-1.5 transition-colors group"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Download {venue.state} Shortlist PDF (Drive)</span>
                    <ExternalLink className="w-3 h-3 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-gray-500">
              <p className="text-base font-semibold">No state venues found matching "{searchState}".</p>
              <button
                onClick={() => { setSearchState(''); setSelectedZone('All'); }}
                className="mt-2 text-sm text-sky-600 font-bold hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CBT Aptitude Test Breakdown & Practice Gateway */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-500/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Air Force CBT Screening Simulation 2026
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Prepare for the Air Force CBT Aptitude Test
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Nigerian Air Force screening board administers a computer-based aptitude test covering English comprehension, quantitative logic, and general current affairs. Achieving a high cut-off mark (above 65%) is strictly required to qualify for the final interview board in Kaduna.
            </p>

            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <span className="text-lg font-black text-sky-400 block">35%</span>
                <span className="text-[11px] text-slate-300">English Language</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <span className="text-lg font-black text-amber-400 block">35%</span>
                <span className="text-[11px] text-slate-300">Mathematics & Logic</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <span className="text-lg font-black text-emerald-400 block">30%</span>
                <span className="text-[11px] text-slate-300">Current Affairs</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-4 shrink-0 lg:w-80 text-center">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Free Online Mock Test</h3>
              <p className="text-xs text-slate-400 mt-1">
                Real past questions with timer, instant scoring & explanations
              </p>
            </div>
            <Link
              to="/past-questions/air-force"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              Start Free CBT Mock Exam
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mandatory Screening Items & Dress Code Checklist */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              Air Force Screening Documents & Dress Code Checklist
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Tick items off as you pack your bag for the state screening center. Missing documents will lead to disqualification.
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold self-start sm:self-auto">
            {completedChecklistCount} of {checklistItems.length} Items Packed
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${(completedChecklistCount / checklistItems.length) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {checklistItems.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : 'bg-gray-50/60 border-gray-200 text-gray-700 hover:bg-gray-100/70'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className={`text-xs sm:text-sm font-medium leading-relaxed ${isChecked ? 'line-through text-gray-400' : ''}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Military Screening Survival Guide Promo (High Monetization) */}
      <section className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2.5">
            <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2.5 py-1 rounded-md">
              High-Risk Medical & Physical Screening Warning
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
              Don't Get Disqualified at Air Force Medical Screening!
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl">
              Over <strong>65% of candidates</strong> who pass the Air Force CBT exam are disqualified during medical and physical verification due to high blood pressure, flat foot, hernia, tattoo scars, knock-knees, or varicocele. Learn how to pass every military medical test with our comprehensive guide.
            </p>
          </div>
          <Link
            to="/military-screening-guide"
            className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-md hover:shadow-lg shrink-0 flex items-center gap-2"
          >
            Get Military Screening Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Sponsored Job Placement */}
      <SponsoredJobCard placementContext="airforce_shortlist_middle" className="my-2" />

      {/* Viral WhatsApp & Telegram Community Invitation */}
      <section className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <MessageCircle className="w-4 h-4" /> Official Community Channel
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Join 50,000+ Aspirants for Instant Air Force Updates
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 max-w-xl">
              Get immediate alerts when batch screening dates change, PDF download links are refreshed, and final interview lists for Kaduna Depot are announced.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://whatsapp.com/channel/0029Vb9F6VeC1FuCXNvVif10"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Follow on WhatsApp
            </a>
            <a
              href="https://t.me/recruitmenttracker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              Join Telegram Channel
            </a>
          </div>
        </div>
      </section>

      {/* Anti-Scam Advisory */}
      <section className="bg-red-50 rounded-2xl p-5 border border-red-200 flex items-start gap-3.5">
        <Shield className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-red-950 space-y-1">
          <h3 className="font-bold text-red-900 text-sm">Official Anti-Scam Advisory from Headquarters Nigerian Air Force</h3>
          <p className="leading-relaxed">
            The Nigerian Air Force selection process is strictly merit-based. <strong>DO NOT PAY MONEY</strong> to anyone claiming to be a recruitment officer, Air Commodore, or cybercafe agent promising "direct enlistment" or "replacement slots" into BMTC 45. The Nigerian Air Force does not have recruitment bank accounts. Report fraud directly to the nearest NAF base or military police detachment.
          </p>
        </div>
      </section>

      {/* Comprehensive FAQs Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Frequently Asked Questions (Air Force Shortlist 2026)
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Answers to critical questions regarding the 2026 NAF shortlist, CBT exam, and state screening
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {AIRFORCE_SHORTLIST_FAQS.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-sky-600 font-extrabold">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 pl-5 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Unit Bottom */}
      <AdUnit slot="airforce_shortlist_bottom" format="auto" />
    </div>
  );
};

export default AirForceShortlist2026;
