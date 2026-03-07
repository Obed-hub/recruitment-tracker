import React from 'react';
import { Shield, Menu, X, FileText, CheckCircle, Home, Search, BrainCircuit } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import InstallPrompt from './InstallPrompt';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Dashboard', path: '/', icon: <Home className="w-5 h-5" /> },
    { label: 'Recruitments', path: '/recruitments', icon: <Search className="w-5 h-5" /> },
    { label: 'Eligibility', path: '/eligibility', icon: <CheckCircle className="w-5 h-5" /> },
    { label: 'Shortlists', path: '/shortlists', icon: <FileText className="w-5 h-5" /> },
    { label: 'Past Questions', path: '/practice', icon: <BrainCircuit className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                    ? 'bg-military-blue text-white shadow-md'
                    : 'hover:bg-green-800 text-gray-100'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
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
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-military-blue text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-white mb-4">
                <img src="/assets/logo.png" alt="Recruitment Tracker Logo" className="w-8 h-8 object-contain rounded-md bg-white p-0.5" />
                <span className="font-bold tracking-wide">RECRUITMENT TRACKER</span>
              </div>
              <p className="text-sm text-gray-400">
                The most reliable platform for tracking Nigerian recruitment updates and preparation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/recruitments" className="hover:text-yellow-400 transition-colors">All Recruitments</Link></li>
                <li><Link to="/practice" className="hover:text-yellow-400 transition-colors">Past Questions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/terms" className="hover:text-yellow-400 transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">© 2026 Recruitment Tracker. All rights reserved.</p>
            <p className="text-xs mt-2 text-gray-500">Disclaimer: This is an independent informational tool and not the official portal of the Nigerian Armed Forces.</p>
          </div>
        </div>
      </footer>
      <InstallPrompt />
    </div>
  );
};

export default Layout;