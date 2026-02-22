import React from 'react';
import { Shield, Menu, X, FileText, CheckCircle, Home, Search, BrainCircuit } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    { label: 'Practice Tests', path: '/practice', icon: <BrainCircuit className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-military-green sticky top-0 z-50 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-yellow-400" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-wide">MILITARY TRACKER</span>
                <span className="text-[10px] text-gray-300 tracking-wider">NIGERIA RECRUITMENT PORTAL</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
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
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium ${
                    isActive(item.path)
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
      <footer className="bg-military-blue text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Nigeria Military Recruitment Tracker. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-500">Disclaimer: This is an informational tool and not the official portal of the Nigerian Armed Forces.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;