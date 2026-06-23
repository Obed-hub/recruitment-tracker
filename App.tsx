import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import GuidesHub from './pages/GuidesHub';
import GuideDetail from './pages/GuideDetail';
import BlogHub from './pages/BlogHub';
import BlogDetail from './pages/BlogDetail';
import AgencyHub from './pages/AgencyHub';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin panel — full page, outside the main Layout */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* All other pages share the main Layout */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/recruitments/:id" element={<Layout><RecruitmentDetail /></Layout>} />
        <Route path="/recruitments" element={<Layout><RecruitmentFilter /></Layout>} />
        <Route path="/eligibility" element={<Layout><EligibilityChecker /></Layout>} />
        <Route path="/practice" element={<Navigate to="/past-questions" replace />} />
        <Route path="/practice/:branch" element={<Navigate to="/past-questions/:branch" replace />} />
        <Route path="/past-questions" element={<Layout><QuizHub /></Layout>} />
        <Route path="/past-questions/:branch" element={<Layout><QuizInterface /></Layout>} />
        <Route path="/guides" element={<Layout><GuidesHub /></Layout>} />
        <Route path="/guides/:slug" element={<Layout><GuideDetail /></Layout>} />
        <Route path="/blog" element={<Layout><BlogHub /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogDetail /></Layout>} />

        <Route path="/ncc-recruitment" element={<Layout><AgencyHub agencySlug="ncc" /></Layout>} />
        <Route path="/army-recruitment" element={<Layout><AgencyHub agencySlug="army" /></Layout>} />
        <Route path="/navy-recruitment" element={<Layout><AgencyHub agencySlug="navy" /></Layout>} />
        <Route path="/airforce-recruitment" element={<Layout><AgencyHub agencySlug="airforce" /></Layout>} />
        <Route path="/customs-recruitment" element={<Layout><AgencyHub agencySlug="customs" /></Layout>} />
        <Route path="/frsc-recruitment" element={<Layout><AgencyHub agencySlug="frsc" /></Layout>} />
        <Route path="/ndlea-recruitment" element={<Layout><AgencyHub agencySlug="ndlea" /></Layout>} />
        <Route path="/nis-recruitment" element={<Layout><AgencyHub agencySlug="nis" /></Layout>} />
        <Route path="/nda-recruitment" element={<Layout><AgencyHub agencySlug="nda" /></Layout>} />
        <Route path="/police-recruitment" element={<Layout><AgencyHub agencySlug="police" /></Layout>} />
        <Route path="/civil-defence-recruitment" element={<Layout><AgencyHub agencySlug="civildefence" /></Layout>} />
        <Route path="/nscdc-recruitment" element={<Layout><AgencyHub agencySlug="civildefence" /></Layout>} />
        <Route path="/fire-service-recruitment" element={<Layout><AgencyHub agencySlug="fireservice" /></Layout>} />
        <Route path="/fire-recruitment" element={<Layout><AgencyHub agencySlug="fireservice" /></Layout>} />
        <Route path="/immigration-recruitment" element={<Layout><AgencyHub agencySlug="immigration" /></Layout>} />
        <Route path="/efcc-recruitment" element={<Layout><AgencyHub agencySlug="efcc" /></Layout>} />
        <Route path="/fcsc-recruitment" element={<Layout><AgencyHub agencySlug="fcsc" /></Layout>} />
        <Route path="/nnpc-recruitment" element={<Layout><AgencyHub agencySlug="nnpc" /></Layout>} />
        <Route path="/cbn-recruitment" element={<Layout><AgencyHub agencySlug="cbn" /></Layout>} />
        <Route path="/nimc-recruitment" element={<Layout><AgencyHub agencySlug="nimc" /></Layout>} />
        <Route path="/nitda-recruitment" element={<Layout><AgencyHub agencySlug="nitda" /></Layout>} />
        <Route path="/faan-recruitment" element={<Layout><AgencyHub agencySlug="faan" /></Layout>} />
        <Route path="/nimasa-recruitment" element={<Layout><AgencyHub agencySlug="nimasa" /></Layout>} />
        <Route path="/nafdac-recruitment" element={<Layout><AgencyHub agencySlug="nafdac" /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsConditions /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;