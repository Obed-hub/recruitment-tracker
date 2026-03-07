import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import RecruitmentFilter from './pages/RecruitmentFilter';
import EligibilityChecker from './pages/EligibilityChecker';
import RecruitmentDetail from './pages/RecruitmentDetail';
import QuizHub from './pages/QuizHub';
import QuizInterface from './pages/QuizInterface';
import AdminPanel from './pages/AdminPanel';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Admin panel — full page, outside the main Layout */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* All other pages share the main Layout */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/recruitments" element={<Layout><RecruitmentFilter /></Layout>} />
        <Route path="/recruitments/:id" element={<Layout><RecruitmentDetail /></Layout>} />
        <Route path="/eligibility" element={<Layout><EligibilityChecker /></Layout>} />
        <Route path="/eligibility" element={<Layout><EligibilityChecker /></Layout>} />
        <Route path="/practice" element={<Layout><QuizHub /></Layout>} />
        <Route path="/practice/:branch" element={<Layout><QuizInterface /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsConditions /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;