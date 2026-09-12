import React, { useState } from 'react';
import {
  MapPin, Search, FileText, CheckCircle2, AlertTriangle, Shield,
  ArrowRight, Download, Filter, HelpCircle, ExternalLink, Calendar,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FAQPageSchema, BreadcrumbListSchema } from '../components/StructuredData';
import ViralCommunityWidget from '../components/ViralCommunityWidget';
import ScreeningChecklist from '../components/ScreeningChecklist';
import { getDailyUpdatedBadge } from '../services/dateUtils';

interface VenueEntry {
  state: string;
  zone: 'North West' | 'North East' | 'North Central' | 'South West' | 'South East' | 'South South';
  armyVenue: string;
  navyVenue: string;
  airForceVenue: string;
  policeVenue: string;
  cdcfibVenue: string;
}

const STATE_VENUES: VenueEntry[] = [
  {
    state: 'Abuja (FCT)',
    zone: 'North Central',
    armyVenue: 'Mogadishu Cantonment (Abacha Barracks), Asokoro / Lungi Barracks, Maitama',
    navyVenue: 'Naval Unit Abuja, Area 7 Garki / Mogadishu Barracks parade ground',
    airForceVenue: 'NAF Base Bill Clinton Drive, Nnamdi Azikiwe International Airport Road',
    policeVenue: 'Police Command Headquarters, Garki 2 / Police College, Dei-Dei',
    cdcfibVenue: 'Civil Defence Academy, Sauka / NIS Headquarters, Airport Road, Sauka'
  },
  {
    state: 'Lagos',
    zone: 'South West',
    armyVenue: '9 Brigade, Ikeja Military Cantonment, Ikeja / Bonny Camp, Victoria Island',
    navyVenue: 'Nigerian Navy Ship WEY / NNS QUORRA, Navy Town, Ojo, Lagos',
    airForceVenue: 'NAF Logistics Command, Sam Ethnan Air Force Base, Ikeja',
    policeVenue: 'Police College Ikeja (PCI), College Road, Ikeja',
    cdcfibVenue: 'NSCDC State Command Headquarters, Alausa, Ikeja / Federal Secretariat Complex, Ikoyi'
  },
  {
    state: 'Kano',
    zone: 'North West',
    armyVenue: '3 Brigade Nigerian Army, Bukavu Barracks, Airport Road, Kano',
    navyVenue: 'Naval Logistics College, Dawakin Tofa, Kano State',
    airForceVenue: '403 Flying Training School, NAF Base Kano',
    policeVenue: 'Police Training School (PTS), Challawa, Kano',
    cdcfibVenue: 'NSCDC State Command Headquarters, Sharada Industrial Area, Kano'
  },
  {
    state: 'Kaduna',
    zone: 'North West',
    armyVenue: '1 Division Headquarters, Ribadu Cantonment / Dalet Barracks, Kawo, Kaduna',
    navyVenue: 'Armed Forces Command and Staff College (AFCSC), Jaji, Kaduna',
    airForceVenue: 'NAF Base, Air Training Command, Mando Road, Kaduna',
    policeVenue: 'Police College Kaduna (PCK), Independence Way, Kaduna',
    cdcfibVenue: 'Immigration Training School, Zaria / NSCDC State Command, Bye-Pass, Kaduna'
  },
  {
    state: 'Rivers',
    zone: 'South South',
    armyVenue: '6 Division Nigerian Army, Bori Camp, Aba Road, Port Harcourt',
    navyVenue: 'NNS PATHFINDER, Naval Base, Rumuolumeni, Port Harcourt',
    airForceVenue: '115 Special Operations Group, NAF Base, Port Harcourt',
    policeVenue: 'Police Training School, Nonwa Tai / State Command HQ, Moscow Road, Port Harcourt',
    cdcfibVenue: 'NSCDC State Headquarters, Olu Obasanjo Road, Port Harcourt'
  },
  {
    state: 'Oyo',
    zone: 'South West',
    armyVenue: '2 Division Nigerian Army Headquarters, Adekunle Fajuyi Cantonment, Odogbo, Ibadan',
    navyVenue: 'Naval Base liaison command / Zonal screening center, Ibadan',
    airForceVenue: 'NAF Detachment, Alakia Airport, Ibadan',
    policeVenue: 'Police Training School, Eleyele, Ibadan',
    cdcfibVenue: 'NSCDC State Command Headquarters, Agodi GRA, Ibadan'
  },
  {
    state: 'Enugu',
    zone: 'South East',
    armyVenue: '82 Division Nigerian Army Headquarters, Abakpa Cantonment, Enugu',
    navyVenue: 'Naval Outpost Oguta liaison command center, Enugu Zonal Command',
    airForceVenue: '553 Base Services Group, NAF Base, Emene, Enugu',
    policeVenue: 'Police College Oji River, Oji River LGA, Enugu State',
    cdcfibVenue: 'NSCDC State Command Headquarters, Federal Secretariat, Independence Layout, Enugu'
  },
  {
    state: 'Edo',
    zone: 'South South',
    armyVenue: '4 Brigade Nigerian Army, Ekenwan Barracks, Benin City',
    navyVenue: 'Naval Outpost liaison command / Sapele Naval Base screening zone',
    airForceVenue: 'NAF Base 107 Air Maritime Group, Airport Road, Benin City',
    policeVenue: 'Police Training School, Ogida Barracks, Benin City',
    cdcfibVenue: 'NSCDC State Command Headquarters, Aduwawa, Benin City'
  },
  {
    state: 'Delta',
    zone: 'South South',
    armyVenue: '3 Battalion, David Ejoor Barracks, Effurun-Warri / 63 Brigade HQ, Asaba',
    navyVenue: 'NNS DELTA, Naval Base, Warri',
    airForceVenue: 'NAF Forward Operational Base, Osubi Airstrip, Delta',
    policeVenue: 'Police Training School, Nonwa/Isele-Uku, Delta State',
    cdcfibVenue: 'NSCDC State Command Headquarters, Okpanam Road, Asaba'
  },
  {
    state: 'Plateau',
    zone: 'North Central',
    armyVenue: '3 Division Nigerian Army Headquarters, Maxwell Khobe Cantonment, Rukuba, Jos',
    navyVenue: 'Naval Headquarters liaison center, Rukuba Barracks, Jos',
    airForceVenue: 'Air Force Military School (AFMS) / 451 Base Services Group, Jos',
    policeVenue: 'Police Staff College, Zaria Road, Jos',
    cdcfibVenue: 'NSCDC State Command Headquarters, Old Airport Road, Jos'
  },
  {
    state: 'Borno',
    zone: 'North East',
    armyVenue: '7 Division Headquarters, Maimalari Military Cantonment, Baga Road, Maiduguri',
    navyVenue: 'Naval Outpost Baga liaison center, Maiduguri',
    airForceVenue: '105 Composite Group, NAF Base, Maiduguri',
    policeVenue: 'Police College Maiduguri, Bama Road, Maiduguri',
    cdcfibVenue: 'NSCDC State Command Headquarters, Sir Kashim Ibrahim Way, Maiduguri'
  },
  {
    state: 'Anambra',
    zone: 'South East',
    armyVenue: '302 Artillery Regiment, Military Cantonment, Onitsha',
    navyVenue: 'Naval Outpost Onitsha, Bridge Head, Onitsha',
    airForceVenue: 'NAF Detachment, Uga Airstrip / Chinua Achebe Airport, Umueri',
    policeVenue: 'Police State Command Headquarters, Amawbia, Awka',
    cdcfibVenue: 'NSCDC State Command Headquarters, Awka Industrial Layout, Anambra'
  },
  {
    state: 'Imo',
    zone: 'South East',
    armyVenue: '34 Artillery Brigade, Obinze Barracks, Owerri',
    navyVenue: 'Naval Base Oguta / Obinze joint verification center',
    airForceVenue: '211 Quick Response Group, NAF Base, Owerri',
    policeVenue: 'Police State Command Headquarters, Rockview Road, Owerri',
    cdcfibVenue: 'NSCDC State Command Headquarters, Port Harcourt Road, Owerri'
  },
  {
    state: 'Ogun',
    zone: 'South West',
    armyVenue: '35 Artillery Brigade, Alamala Barracks, Abeokuta',
    navyVenue: 'Navy Town Ojo Zonal screening outpost, Ogun sector',
    airForceVenue: 'NAF Detachment, Gateway Agro-Cargo International Airport, Iperu-Remo',
    policeVenue: 'Police Training School, Iperu-Remo / State Command, Eleweran, Abeokuta',
    cdcfibVenue: 'NSCDC State Command Headquarters, Kobape Road, Abeokuta'
  },
  {
    state: 'Akwa Ibom',
    zone: 'South South',
    armyVenue: '2 Brigade Nigerian Army, Wellington Bassey Barracks, Ibagwa, Abak',
    navyVenue: 'Forward Operating Base (FOB) Ibaka, Mbo LGA, Akwa Ibom',
    airForceVenue: 'NAF Detachment, Victor Attah International Airport, Uyo',
    policeVenue: 'Police Training School, Ikot Akpan Abia, Uyo',
    cdcfibVenue: 'NSCDC State Command Headquarters, Federal Secretariat, Uyo'
  }
];

const SHORTLIST_FAQS = [
  {
    question: "How do I check if my name is on the 2026 military recruitment shortlist?",
    answer: "Shortlists are published in PDF format on official recruitment portals (e.g., recruitment.army.mil.ng, joinnigeriannavy.com, or cdcfib.career). To check, download your state's PDF and use the search function (Ctrl+F on computer or the search icon in your mobile PDF reader) to input your Application ID or full surname."
  },
  {
    question: "What documents are compulsory for state screening exercises in Nigeria?",
    answer: "You must present: 1) Printed Application / Screening Slip with visible barcode, 2) NIN verification slip, 3) Original O-Level (WAEC/NECO/NABTEB) statement of results, 4) LGA Indigene / State of Origin certificate, 5) Birth certificate from NPC or Age Declaration, 6) FSLC primary school testimonial, 7) Two pairs of completed guarantor forms endorsed by a magistrate, senior police officer, or traditional ruler."
  },
  {
    question: "What is the official screening dress code for military and police candidates?",
    answer: "Standard dress code across all military and paramilitary screening centers: Clean white round-neck T-shirt, pure white shorts (above knees), white canvas trainers with plain white socks, and a blue/black pen with clipboard."
  },
  {
    question: "What happens if I miss my state screening date?",
    answer: "State screening boards follow strict timetables batched by Local Government Area (LGA). Missing your scheduled date usually leads to disqualification unless the board permits mop-up screening on designated overflow days."
  },
  {
    question: "Do I pay any money at the physical screening venue?",
    answer: "No. Physical screening, biometric verification, document vetting, and medical fitness checks are 100% free. Any officer or person demanding money for 'guaranteed enlistment' is fraudulent and should be reported immediately."
  }
];

const ShortlistHub: React.FC = () => {
  const [searchState, setSearchState] = useState('');
  const [selectedAgency, setSelectedAgency] = useState<'All' | 'Army' | 'Navy' | 'Air Force' | 'Police' | 'CDCFIB'>('All');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const filteredVenues = STATE_VENUES.filter(v => {
    const matchesState = v.state.toLowerCase().includes(searchState.toLowerCase()) ||
      v.armyVenue.toLowerCase().includes(searchState.toLowerCase()) ||
      v.policeVenue.toLowerCase().includes(searchState.toLowerCase());
    const matchesZone = selectedZone === 'All' || v.zone === selectedZone;
    return matchesState && matchesZone;
  });

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Shortlists & Venues', item: '/shortlist-hub' }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <SEO
        title="Nigerian Military & Police Shortlist 2026 (State Screening Venues & PDF Checker)"
        description="Check 2026 shortlisted candidates list and state screening venues for Nigerian Army, Navy, Police, Air Force & CDCFIB across all 36 states and FCT."
        canonical="/shortlist-hub"
        keywords={[
          'Nigerian army shortlist 2026 PDF',
          'army screening venue lagos kaduna kano',
          'navy batch 38 39 shortlisted candidates',
          'police CBT screening venues 36 states',
          'civil defence shortlist venue list',
          'documents required for military screening'
        ]}
      />

      <BreadcrumbListSchema items={breadcrumbs} />
      <FAQPageSchema faqs={SHORTLIST_FAQS} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-military-blue text-white rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>2026 Nationwide State Screening Locator</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-3 text-white">
            2026 Shortlisted Candidates & State Screening Venues
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Verify official screening centers, barracks locations, and police college testing venues across all 36 States
            and the FCT. Review required documents and step-by-step PDF shortlist checking rules.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-blue-200">
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 36 States + FCT Abuja Covered
            </span>
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Shield className="w-4 h-4 text-blue-400" /> Tri-Service & Paramilitary Venues
            </span>
            <span className="flex items-center gap-1.5 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-amber-400" /> {getDailyUpdatedBadge()} • Screening Schedules
            </span>
          </div>
        </div>
      </div>

      {/* Community Alert Broadcast */}
      <ViralCommunityWidget agencyName="All Shortlist Portals" variant="banner" />

      {/* How to Check Shortlist Guide & Verification Rules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm mb-3">
            1
          </div>
          <h4 className="font-bold text-gray-900 text-sm mb-1.5">Download Official State PDF</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Avoid unofficial WhatsApp blog summaries. Download the authentic PDF list directly from the agency portal or our verified links.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm mb-3">
            2
          </div>
          <h4 className="font-bold text-gray-900 text-sm mb-1.5">Search via Application ID</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Use the search feature in Adobe Acrobat or Drive PDF Reader. Type your full Application ID (e.g. <span className="font-mono text-gray-700">88RRI/LA/12345</span>) to jump straight to your record.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm mb-3">
            3
          </div>
          <h4 className="font-bold text-gray-900 text-sm mb-1.5">Note Your LGA Batch Date</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Screening boards divide candidates by Local Government Area. Report only on your designated date with your white screening kit.
          </p>
        </div>
      </div>

      {/* Search and Geopolitical Filter */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto items-stretch sm:items-center">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search your State (e.g. Lagos, Kano, Kaduna)..."
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
            />
          </div>

          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              '📍 *2026 Nationwide Military & Police Screening Venues List (36 States + FCT)*\n\nFind your official screening barracks, police colleges, and required documents here:\nhttps://recruitmenttracker.com.ng/shortlist-hub'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition-colors whitespace-nowrap"
            title="Share Venue Directory on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Share Venues to WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {['All', 'North Central', 'North West', 'North East', 'South West', 'South East', 'South South'].map(zone => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${selectedZone === zone
                ? 'bg-military-blue text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      {/* State Screening Venues Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            Official State Screening Centers & Command Venues
          </h2>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {filteredVenues.length} States Displayed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredVenues.map((v, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    {v.state} State
                  </h3>
                  <span className="text-[11px] font-bold bg-blue-50 text-military-blue px-2.5 py-0.5 rounded-full border border-blue-100">
                    {v.zone}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                    <span className="font-bold text-emerald-950 block mb-0.5">Nigerian Army Screening Venue:</span>
                    <span className="text-emerald-900">{v.armyVenue}</span>
                  </div>

                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                    <span className="font-bold text-blue-950 block mb-0.5">Nigerian Navy Screening Venue:</span>
                    <span className="text-blue-900">{v.navyVenue}</span>
                  </div>

                  <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                    <span className="font-bold text-sky-950 block mb-0.5">Nigerian Air Force Venue:</span>
                    <span className="text-sky-900">{v.airForceVenue}</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-0.5">Police & CDCFIB (NSCDC/NIS) Venue:</span>
                    <span className="text-gray-700">{v.policeVenue}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-military-blue">
                <span>Check state quota & arrival batch</span>
                <Link to="/guides/print-army-screening-slip" className="hover:underline flex items-center gap-1">
                  Screening Slip Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Printable Screening Day Checklist */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Mandatory Screening Day Packing Checklist
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Tick off each item before setting out for the screening grounds to avoid automatic disqualification at the gate.
          </p>
        </div>

        <ScreeningChecklist
          recruitmentTitle="2026 Nationwide Military & Paramilitary Screening"
          branch="Army"
        />
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          Frequently Asked Questions on Shortlists & Screening Venues
        </h3>
        <div className="space-y-3 pt-2">
          {SHORTLIST_FAQS.map((faq, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200/70">
              <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                <span className="text-military-blue font-black">Q:</span>
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 pl-5 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortlistHub;
