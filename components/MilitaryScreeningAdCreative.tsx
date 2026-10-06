import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, AlertTriangle, CheckCircle2, ArrowRight, Download, 
  Star, Flame, HelpCircle, Check, XCircle, ChevronRight, BookOpen, AlertOctagon
} from 'lucide-react';

interface MilitaryScreeningAdCreativeProps {
  format?: 'leaderboard' | 'rectangle' | 'native-card' | 'sidebar-banner';
  className?: string;
  agencyContext?: string;
}

export const MilitaryScreeningAdCreative: React.FC<MilitaryScreeningAdCreativeProps> = ({
  format = 'native-card',
  className = '',
  agencyContext = 'Military & Paramilitary'
}) => {
  // ─── Format 1: Medium Rectangle (300x250 / 336x280 Sidebar Unit) ──────────
  if (format === 'rectangle' || format === 'sidebar-banner') {
    return (
      <div className={`my-6 max-w-sm mx-auto bg-gradient-to-b from-[#0A3D0A] via-[#051a05] to-[#041204] border-2 border-[#FFB800] rounded-2xl p-5 shadow-2xl text-white relative overflow-hidden group ${className}`}>
        {/* Editorial Native Label */}
        <div className="flex items-center justify-between text-[10px] text-gray-400 mb-2.5 pb-1.5 border-b border-green-900/60 font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1 text-yellow-400">
            <AlertOctagon className="w-3 h-3 text-[#CC0000]" />
            Screening Elimination Report
          </span>
          <span className="bg-black/50 px-1.5 py-0.5 rounded text-[9px] text-gray-300">Guide ⓘ</span>
        </div>

        {/* Eye-Catching Problem Headline */}
        <h4 className="font-extrabold text-sm sm:text-base text-white leading-snug mb-2.5">
          Why 7 Out Of 10 Candidates Get Disqualified On Day 1 — And How To Pass!
        </h4>

        {/* 3D Visual + Bullet Points */}
        <div className="flex items-center gap-3 mb-3">
          <img 
            src="/assets/screening-guide-cover.jpg" 
            alt="Military & Paramilitary Screening Guide 2026" 
            className="w-16 h-20 object-cover rounded-md border border-[#FFB800] shadow-lg shrink-0 group-hover:scale-105 transition-transform"
          />
          <ul className="text-[11px] text-gray-300 space-y-1 leading-tight font-medium">
            <li className="flex items-center gap-1 text-red-400">
              <XCircle className="w-3 h-3 shrink-0" />
              <span>0.5cm height shortfall trap</span>
            </li>
            <li className="flex items-center gap-1 text-red-400">
              <XCircle className="w-3 h-3 shrink-0" />
              <span>Wet-mat flat foot & knock-knees</span>
            </li>
            <li className="flex items-center gap-1 text-emerald-400 font-bold">
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              <span>Exact doctor cheat codes inside</span>
            </li>
          </ul>
        </div>

        {/* Covered Forces Tags */}
        <div className="flex flex-wrap gap-1 mb-3 text-[9px] font-bold text-gray-400">
          <span className="bg-black/40 px-1.5 py-0.5 rounded border border-green-900">Army</span>
          <span className="bg-black/40 px-1.5 py-0.5 rounded border border-green-900">Navy</span>
          <span className="bg-black/40 px-1.5 py-0.5 rounded border border-green-900">Police</span>
          <span className="bg-black/40 px-1.5 py-0.5 rounded border border-green-900">NIS</span>
          <span className="bg-black/40 px-1.5 py-0.5 rounded border border-green-900">NSCDC</span>
          <span className="bg-black/40 px-1.5 py-0.5 rounded border border-green-900">Customs</span>
        </div>

        {/* High-CTR CTA Button (No Price - Pure Value & Curiosity) */}
        <Link
          to="/military-screening-guide"
          className="w-full py-2.5 bg-gradient-to-r from-[#FFB800] via-yellow-400 to-[#FF9900] text-black font-black text-xs rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 border border-white text-center uppercase tracking-wide"
        >
          <span>HOW TO PASS SCREENING →</span>
        </Link>
      </div>
    );
  }

  // ─── Format 2: Responsive Leaderboard (728x90 Desktop / 320x100 Mobile) ───
  if (format === 'leaderboard') {
    return (
      <div className={`my-6 w-full bg-gradient-to-r from-[#0A3D0A] via-[#0A1F44] to-[#041204] border-2 border-[#FFB800] rounded-2xl p-4 sm:p-5 shadow-xl text-white relative overflow-hidden ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img 
              src="/assets/screening-guide-cover.jpg" 
              alt="Military & Paramilitary Screening Guide 2026" 
              className="w-12 h-16 sm:w-14 sm:h-18 object-cover rounded-lg border border-[#FFB800] shadow-md shrink-0 hidden xs:block"
            />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="bg-[#CC0000] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
                  ⚠️ SCREENING ELIMINATION NOTICE
                </span>
                <span className="bg-[#FFB800] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  ARMY • NAVY • POLICE • NIS • NSCDC • CUSTOMS
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                Why People Get Disqualified During Screening (And How To Qualify On Day 1)
              </h3>
              <p className="text-xs text-gray-300 hidden md:block">
                Learn the barefoot height posture trick, 14-day flat-foot drills, 3-folder NIN & birth cert sorting, and medical secrets.
              </p>
            </div>
          </div>

          <Link
            to="/military-screening-guide"
            className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-[#FFB800] to-yellow-400 text-black font-black text-xs sm:text-sm rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-center border border-white shrink-0 uppercase tracking-wide"
          >
            HOW TO PASS SCREENING →
          </Link>
        </div>
      </div>
    );
  }

  // ─── Format 3: Google Native Recommendation Card (Editorial High-CTR) ─────
  return (
    <div className={`my-8 bg-gradient-to-b from-[#051a05] via-[#072407] to-[#041204] border-2 border-emerald-500/80 hover:border-[#FFB800] rounded-2xl p-5 sm:p-6 shadow-2xl text-white relative overflow-hidden transition-all ${className}`}>
      
      {/* Editorial Header */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3.5 pb-2.5 border-b border-green-900/80 font-bold uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <Shield className="w-4 h-4 text-[#FFB800]" />
          <span>Special Report: 2026 Screening Ground Survival Guide</span>
        </span>
        <span className="bg-black/60 px-2 py-0.5 rounded text-[10px] text-gray-300 border border-gray-800">
          Verified Guide ⓘ
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
        {/* Product Visual */}
        <div className="sm:col-span-3 flex justify-center">
          <Link to="/military-screening-guide" className="block group">
            <img 
              src="/assets/screening-guide-cover.jpg" 
              alt="Military & Paramilitary Screening Readiness Guide 2026" 
              className="w-24 sm:w-32 object-cover rounded-xl border-2 border-[#FFB800] shadow-xl group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Punchy Editorial Copy */}
        <div className="sm:col-span-9 space-y-2.5 text-left">
          
          {/* Target Agencies Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="bg-[#CC0000] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
              DAY 1 ELIMINATION PREVENTION
            </span>
            <span className="text-[10px] text-yellow-300 font-bold bg-yellow-950/80 border border-yellow-800 px-2 py-0.5 rounded">
              Army • Navy • Air Force • Police • Customs • NIS • NSCDC • FRSC • NDLEA
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
            Why People Get Disqualified During Screening — And The Exact Secrets To Pass
          </h3>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
            Over <strong>70% of Nigerian candidates are eliminated on Day 1 & Day 2</strong> before ever writing CBT or running 3.2km. Don't let preventable mistakes ruin your lifetime opportunity:
          </p>

          {/* Key Checklist Hooks */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs text-gray-300 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-red-400 font-black">✗</span>
              <span><strong>0.5cm Height Shortfall:</strong> Learn barefoot spine alignment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-red-400 font-black">✗</span>
              <span><strong>Flat Foot & Knock-Knees:</strong> 14-day corrective exercises</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-red-400 font-black">✗</span>
              <span><strong>Document Rejection:</strong> 3-folder NIN & NPC birth cert setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-red-400 font-black">✗</span>
              <span><strong>Medical Inspection:</strong> High BP, eye acuity & tattoo rules</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-green-900/60 mt-2">
            <div className="text-xs text-gray-300 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
              <span>Complete Step-by-Step Readiness Blueprint</span>
            </div>

            <Link
              to="/military-screening-guide"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#FFB800] via-yellow-400 to-[#FF9900] text-black font-black text-xs sm:text-sm rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-center border border-white uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>SEE HOW TO PASS SCREENING</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilitaryScreeningAdCreative;
