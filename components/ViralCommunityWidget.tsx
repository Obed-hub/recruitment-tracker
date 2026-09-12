import React, { useState } from 'react';
import { MessageCircle, Bell, CheckCircle2, Users, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb9F6VeC1FuCXNvVif10';

interface ViralCommunityWidgetProps {
  agencyName?: string;
  variant?: 'banner' | 'card' | 'inline';
}

const ViralCommunityWidget: React.FC<ViralCommunityWidgetProps> = ({ agencyName, variant = 'card' }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedAgency, setSelectedAgency] = useState(agencyName || 'All Agencies (Tri-Service & Paramilitary)');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail.trim()) return;
    try {
      localStorage.setItem('recruitment_tracker_alerts_subscriber', phoneOrEmail.trim());
      localStorage.setItem('recruitment_tracker_preferred_agency', selectedAgency);
    } catch {
      // safe fallback
    }
    setSubscribed(true);
  };

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-emerald-900 via-green-950 to-slate-950 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
              <MessageCircle className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/30 text-emerald-300 border border-emerald-400/40">
                  Official WhatsApp Channel
                </span>
                <span className="text-xs text-gray-300 flex items-center gap-1 font-medium">
                  <Users className="w-3.5 h-3.5 text-emerald-400" /> NIGERIA RECRUITMENT UPDATE
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                Follow the NIGERIA RECRUITMENT UPDATE Channel on WhatsApp
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Get PDF shortlist links, state screening venue dates, and CBT questions delivered straight to your WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-black rounded-xl transition-all shadow-md active:scale-95 animate-bounce-short"
            >
              <MessageCircle className="w-4 h-4 fill-current text-slate-950" />
              Follow on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden my-8">
      {/* Background ambient accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>VIP 2026 Recruitment Alert Community</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>154,200+ Nigerian Candidates Connected</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
              Never Miss a Shortlist PDF or Screening Venue Date Again
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Recruitment portals close within minutes of quota fulfillment, and screening dates vary by state.
              Get verified notifications, direct portal links, and daily past questions sent to your phone.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                <div className="text-emerald-400 font-black text-sm">Army 88 RRI / DSSC</div>
                <div className="text-[11px] text-gray-400">Instant SMS & WhatsApp</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                <div className="text-sky-400 font-black text-sm">Navy Batch 38 & 39</div>
                <div className="text-[11px] text-gray-400">NNBTS Screening Updates</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                <div className="text-amber-400 font-black text-sm">Police & CDCFIB</div>
                <div className="text-[11px] text-gray-400">CBT Exam Venues & Slips</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 space-y-4">
            <div>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Follow on WhatsApp
              </a>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-white/10 w-full"></div>
              <span className="bg-slate-900 px-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider absolute">
                Or Direct Alert Via Email
              </span>
            </div>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                <p className="text-xs font-bold text-white">Alert Preferences Saved!</p>
                <p className="text-[11px] text-emerald-200">You will receive breaking shortlist bulletins for {selectedAgency}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Select Your Agency Interest
                  </label>
                  <select
                    value={selectedAgency}
                    onChange={(e) => setSelectedAgency(e.target.value)}
                    className="w-full bg-slate-800 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="All Agencies (Tri-Service & Paramilitary)">All Military & Paramilitary Portals</option>
                    <option value="Nigerian Army (RRI & DSSC)">Nigerian Army (RRI & DSSC)</option>
                    <option value="Nigerian Navy (BMTC & DSSC)">Nigerian Navy (BMTC & DSSC)</option>
                    <option value="Nigerian Air Force (BMTC & DSSC)">Nigerian Air Force (BMTC & DSSC)</option>
                    <option value="Nigeria Police Force (Constables & Cadets)">Nigeria Police Force (NPF)</option>
                    <option value="Civil Defence & Immigration (CDCFIB)">Civil Defence (NSCDC) & Immigration (NIS)</option>
                    <option value="Nigeria Customs Service (NCS)">Nigeria Customs Service (NCS)</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Enter email or WhatsApp number"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    className="flex-1 bg-slate-800 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shrink-0 flex items-center gap-1"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    Notify Me
                  </button>
                </div>
              </form>
            )}

            <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
              <ShieldAlert className="w-3 h-3 text-emerald-400" /> 100% Free • No Spam • Official Portal Links Only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViralCommunityWidget;
