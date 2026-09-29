import React from 'react';
import { Shield, Menu, X, FileText, CheckCircle, Home, Search, BrainCircuit, Newspaper, CircleDollarSign, MapPin, MessageCircle, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import InstallPrompt from './InstallPrompt';
import AdSenseScript from './AdSenseScript';
import TelegramIcon from './TelegramIcon';
import BreadcrumbNav from './BreadcrumbNav';

const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb9F6VeC1FuCXNvVif10';
const TELEGRAM_CHANNEL_URL = 'https://t.me/recruitmenttracker';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Dashboard', path: '/', icon: <Home className="w-5 h-5" /> },
    { label: 'Which Form is Out?', path: '/which-recruitment-form-is-out-now', icon: <FileText className="w-5 h-5" /> },
    { label: 'Recruitments', path: '/recruitments', icon: <Search className="w-5 h-5" /> },
    { label: 'Shortlists & Venues', path: '/shortlist-hub', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Salaries (2026)', path: '/salary-comparison', icon: <CircleDollarSign className="w-5 h-5" /> },
    { label: 'Past Questions', path: '/past-questions', icon: <BrainCircuit className="w-5 h-5" /> },
    { label: 'Eligibility', path: '/eligibility', icon: <CheckCircle className="w-5 h-5" /> },
    { label: 'FAQs', path: '/faqs', icon: <HelpCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdSenseScript />

      {/* Official Community Sticky Alert Bar */}
      <div className="bg-emerald-900 text-white text-xs py-2 px-4 shadow-sm border-b border-emerald-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
            </span>
            <span>
              Follow <strong className="text-emerald-200 font-bold">NIGERIA RECRUITMENT UPDATE</strong> on WhatsApp & join our active <strong className="text-sky-300 font-bold">Telegram Discussion</strong> for verified 2026 Shortlists!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500 hover:bg-sky-400 text-white font-black rounded-full text-[11px] transition-colors shadow-sm shrink-0"
            >
              <TelegramIcon className="w-3 h-3" />
              Telegram Channel
            </a>
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black rounded-full text-[11px] transition-colors shadow-sm shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              Follow on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-military-green sticky top-0 z-50 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src="/assets/logo.png" alt="Recruitment Tracker Logo" className="w-10 h-10 object-contain rounded-lg shadow-sm bg-white p-1" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-wide text-white">RECRUITMENT TRACKER</span>
                <span className="text-[10px] text-gray-300 tracking-wider">NIGERIA PORTAL</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-colors ${isActive(item.path)
                    ? 'bg-military-blue text-white shadow-md'
                    : 'hover:bg-green-800 text-gray-100'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Direct Telegram & WhatsApp Channel Buttons in Desktop Nav */}
              <div className="flex items-center space-x-2 pl-1 border-l border-green-700">
                <a
                  href={TELEGRAM_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs rounded-lg transition-all shadow-sm active:scale-95"
                  title="Join Telegram Discussion Channel"
                >
                  <TelegramIcon className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
                <a
                  href={WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-lg transition-all shadow-sm active:scale-95"
                  title="Follow WhatsApp Channel"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-green-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900 border-t border-green-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Community Mobile Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <a
                  href={TELEGRAM_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 px-2 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-sm"
                >
                  <TelegramIcon className="w-3.5 h-3.5" />
                  <span>Telegram Discussion</span>
                </a>
                <a
                  href={WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 px-2 py-2.5 rounded-xl text-xs font-black bg-emerald-500 text-slate-950 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Alerts</span>
                </a>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium ${isActive(item.path)
                    ? 'bg-military-blue text-white'
                    : 'text-gray-300 hover:bg-green-800 hover:text-white'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <BreadcrumbNav />
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-military-blue text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-white mb-4">
                <img src="/assets/logo.png" alt="Recruitment Tracker Logo" className="w-8 h-8 object-contain rounded-md bg-white p-0.5" />
                <span className="font-bold tracking-wide">RECRUITMENT TRACKER</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                The most reliable platform for tracking Nigerian military, paramilitary, and federal recruitment updates and test preparation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faqs" className="text-amber-300 hover:text-amber-200 font-bold transition-colors">Recruitment FAQs (35+ Answers)</Link></li>
                <li><Link to="/which-recruitment-form-is-out-now" className="text-emerald-300 hover:text-emerald-200 font-bold transition-colors">Which Form is Out (2026)?</Link></li>
                <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/recruitments" className="hover:text-yellow-400 transition-colors">All Recruitments</Link></li>
                <li><Link to="/shortlist-hub" className="text-amber-300 hover:text-amber-200 font-semibold transition-colors">Shortlists & Screening Venues</Link></li>
                <li><Link to="/past-questions" className="hover:text-yellow-400 transition-colors">Past Questions & CBT</Link></li>
                <li><Link to="/guides" className="hover:text-yellow-400 transition-colors">Guides & Tutorials</Link></li>
                <li><Link to="/print-army-screening-slip" className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors">Army Tracking (armynotification)</Link></li>
                <li><Link to="/is-nigerian-army-form-out" className="hover:text-yellow-400 transition-colors">Is Army Form Out 2026?</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">2026 Portals & Guides</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/how-to-apply-nigerian-navy-batch" className="hover:text-yellow-400 transition-colors">How to Apply Navy Batch 39</Link></li>
                <li><Link to="/how-to-apply-cdcfib-portal" className="hover:text-yellow-400 transition-colors">CDCFIB Portal (NIS/NSCDC/Fire)</Link></li>
                <li><Link to="/military-physical-standards-height-requirements" className="hover:text-yellow-400 transition-colors">Military Height & Standards</Link></li>
                <li><Link to="/cdcfib-cbt-past-questions-free-practice" className="text-emerald-300 hover:text-emerald-200 transition-colors">Free CDCFIB CBT Practice</Link></li>
                <li><Link to="/nigerian-army-shortlisted-candidates-pdf" className="hover:text-yellow-400 transition-colors">Army Shortlisted PDF</Link></li>
                <li><Link to="/army-salary" className="hover:text-yellow-400 transition-colors">Nigerian Army Salary (CONAFSS)</Link></li>
                <li><Link to="/navy-salary" className="text-blue-300 hover:text-blue-200 transition-colors">Nigerian Navy Salary</Link></li>
                <li><Link to="/airforce-salary" className="text-sky-300 hover:text-sky-200 transition-colors">Air Force (NAF) Salary</Link></li>
                <li><Link to="/police-salary" className="hover:text-yellow-400 transition-colors">Nigeria Police Salary (CONPOSS)</Link></li>
                <li><Link to="/customs-salary" className="hover:text-yellow-400 transition-colors">Nigeria Customs Salary (CONPASS)</Link></li>
                <li><Link to="/civil-defence-salary" className="text-amber-300 hover:text-amber-200 transition-colors">Civil Defence (NSCDC) Salary</Link></li>
                <li><Link to="/immigration-salary" className="text-teal-300 hover:text-teal-200 transition-colors">Immigration (NIS) Salary</Link></li>
                <li><Link to="/nnpc-salary" className="text-emerald-300 hover:text-emerald-200 transition-colors">NNPC Limited Salary</Link></li>
                <li><Link to="/cbn-salary" className="text-cyan-300 hover:text-cyan-200 transition-colors">CBN Salary Structure</Link></li>
                <li><Link to="/salary-comparison" className="hover:text-yellow-400 transition-colors">Military vs Paramilitary Matrix</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Official Channels</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={TELEGRAM_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-sky-200 font-bold flex items-center justify-center sm:justify-start gap-1.5 transition-colors"
                  >
                    <TelegramIcon className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Telegram Discussion Channel</span>
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-emerald-200 font-bold flex items-center justify-center sm:justify-start gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>WhatsApp: NIGERIA RECRUITMENT UPDATE</span>
                  </a>
                </li>
                <li className="pt-2"><Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/disclaimer" className="hover:text-yellow-400 transition-colors">Disclaimer & Anti-Fraud</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">© 2026 Recruitment Tracker. All rights reserved.</p>
            <p className="text-xs mt-2 text-gray-500">Disclaimer: This is an independent informational tool and not the official portal of the Nigerian Armed Forces.</p>
          </div>
        </div>
      </footer>

      {/* Floating Direct Community Channels Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
        <a
          href={TELEGRAM_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Telegram Discussion Channel"
          className="flex items-center gap-2 px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-white/40 font-bold text-xs group"
        >
          <TelegramIcon className="w-4 h-4 text-white" />
          <span className="hidden sm:inline font-bold tracking-wide">Telegram Discussion</span>
        </a>
        <a
          href={WHATSAPP_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow NIGERIA RECRUITMENT UPDATE on WhatsApp"
          className="flex items-center gap-2.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white/40 font-bold text-xs sm:text-sm group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-current text-white" />
          <span className="hidden sm:inline font-black tracking-wide">WhatsApp Channel</span>
        </a>
      </div>

      <InstallPrompt />
    </div>
  );
};

export default Layout;
