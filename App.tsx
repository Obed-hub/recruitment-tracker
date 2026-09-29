import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
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
import Disclaimer from './pages/Disclaimer';
import ScrollToTop from './components/ScrollToTop';
import GoogleAnalyticsTracker from './components/GoogleAnalyticsTracker';
import GuidesHub from './pages/GuidesHub';
import GuideDetail from './pages/GuideDetail';
import BlogHub from './pages/BlogHub';
import BlogDetail from './pages/BlogDetail';
import AgencyHub from './pages/AgencyHub';
import ArmySalary from './pages/ArmySalary';
import SalaryComparison from './pages/SalaryComparison';
import PoliceSalary from './pages/PoliceSalary';
import CustomsSalary from './pages/CustomsSalary';
import StandaloneSalaryPage from './pages/StandaloneSalaryPage';
import ShortlistHub from './pages/ShortlistHub';
import WhichFormIsOut from './pages/WhichFormIsOut';
import NavyRecruitmentBatch39 from './pages/NavyRecruitmentBatch39';
import FAQHub from './pages/FAQHub';
import PortalActionPage from './pages/PortalActionPage';

const PracticeBranchRedirect: React.FC = () => {
  const { branch } = useParams<{ branch: string }>();
  return <Navigate to={`/past-questions/${branch || ''}`} replace />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalyticsTracker />
      <Routes>
        {/* Admin panel — full page, outside the main Layout */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* All other pages share the main Layout */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/recruitments/:id" element={<Layout><RecruitmentDetail /></Layout>} />
        <Route path="/recruitments" element={<Layout><RecruitmentFilter /></Layout>} />
        <Route path="/eligibility" element={<Layout><EligibilityChecker /></Layout>} />
        <Route path="/practice" element={<Navigate to="/past-questions" replace />} />
        <Route path="/practice/:branch" element={<PracticeBranchRedirect />} />
        <Route path="/past-questions" element={<Layout><QuizHub /></Layout>} />
        <Route path="/past-questions/:branch" element={<Layout><QuizInterface /></Layout>} />
        <Route path="/guides" element={<Layout><GuidesHub /></Layout>} />
        <Route path="/guides/:slug" element={<Layout><GuideDetail /></Layout>} />

        {/* Dedicated Ranking Page: Nigerian Navy Batch 39 Recruitment 2026 */}
        <Route path="/nigerian-navy-recruitment-2026" element={<Layout><NavyRecruitmentBatch39 /></Layout>} />
        <Route path="/navy-batch-39" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/navy-batch-39-recruitment" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/navy-batch-recruitment" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/navy-batch" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/navy-registration-portal" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/is-navy-form-out" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/nigeria-navy-portal-2026" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/www-joinnigeriannavy-com-portal" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/joinnigeriannavy-portal" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/joinnigeriannavy-application-form" element={<Navigate to="/nigerian-navy-recruitment-2026" replace />} />
        <Route path="/login-nigerian-navy-portal" element={<Navigate to="/navy-recruitment-portal-login" replace />} />

        {/* Dedicated Searchable FAQ Hub */}
        <Route path="/faqs" element={<Layout><FAQHub /></Layout>} />
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/recruitment-faqs" element={<Navigate to="/faqs" replace />} />
        <Route path="/recruitment-faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/frequently-asked-questions" element={<Navigate to="/faqs" replace />} />

        {/* TOPIC 1: Live Status & "Is the Form Out?" Pages */}
        <Route path="/which-recruitment-form-is-out-now" element={<Layout><WhichFormIsOut /></Layout>} />
        <Route path="/which-recruitment-form-is-out" element={<Navigate to="/which-recruitment-form-is-out-now" replace />} />
        <Route path="/which-form-is-out-now" element={<Navigate to="/which-recruitment-form-is-out-now" replace />} />
        <Route path="/recruitment-forms-out-now" element={<Navigate to="/which-recruitment-form-is-out-now" replace />} />
        <Route path="/is-nigerian-army-form-out" element={<Layout><GuideDetail slugOverride="is-nigerian-army-form-out" /></Layout>} />
        <Route path="/is-nigerian-navy-batch-39-form-out" element={<Layout><GuideDetail slugOverride="is-nigerian-navy-batch-39-form-out" /></Layout>} />
        <Route path="/is-police-recruitment-form-out" element={<Layout><GuideDetail slugOverride="is-police-recruitment-form-out" /></Layout>} />
        <Route path="/is-cdcfib-recruitment-form-out" element={<Layout><GuideDetail slugOverride="is-cdcfib-recruitment-form-out" /></Layout>} />

        {/* TOPIC 2: How-to-Apply & Portal Guides */}
        <Route path="/how-to-apply-nigerian-navy-batch" element={<Layout><GuideDetail slugOverride="how-to-apply-nigerian-navy-batch" /></Layout>} />
        <Route path="/how-to-apply-cdcfib-portal" element={<Layout><GuideDetail slugOverride="how-to-apply-cdcfib-portal" /></Layout>} />
        <Route path="/how-to-apply-police-constable" element={<Layout><GuideDetail slugOverride="how-to-apply-police-constable" /></Layout>} />

        {/* TOPIC 3: Shortlist, Screening & Tracking Slip Content */}
        <Route path="/print-army-screening-slip" element={<Layout><GuideDetail slugOverride="print-army-screening-slip" /></Layout>} />
        <Route path="/nigerian-army-shortlisted-candidates-pdf" element={<Layout><GuideDetail slugOverride="nigerian-army-shortlisted-candidates-pdf" /></Layout>} />
        <Route path="/police-shortlisted-candidates-cbt-date" element={<Layout><GuideDetail slugOverride="police-shortlisted-candidates-cbt-date" /></Layout>} />
        <Route path="/army-application-tracking" element={<Navigate to="/print-army-screening-slip" replace />} />
        <Route path="/tracking-armynotification" element={<Navigate to="/print-army-screening-slip" replace />} />
        <Route path="/tracking-armynotification-com-ng" element={<Navigate to="/print-army-screening-slip" replace />} />
        <Route path="/armynotification" element={<Navigate to="/print-army-screening-slip" replace />} />
        <Route path="/army-notification" element={<Navigate to="/print-army-screening-slip" replace />} />
        <Route path="/army-dssc" element={<Navigate to="/recruitments/army-dssc" replace />} />

        {/* TOPIC 4: Eligibility, Requirements & Physical Standards */}
        <Route path="/military-physical-standards-height-requirements" element={<Layout><GuideDetail slugOverride="military-physical-standards-height-requirements" /></Layout>} />
        <Route path="/police-recruitment-requirements-age-limit" element={<Layout><GuideDetail slugOverride="police-recruitment-requirements-age-limit" /></Layout>} />
        <Route path="/ndlea-recruitment-requirements-qualifications" element={<Layout><GuideDetail slugOverride="ndlea-recruitment-requirements-qualifications" /></Layout>} />

        {/* TOPIC 5: Past Questions & CBT Practice Expansion */}
        <Route path="/cdcfib-cbt-past-questions-free-practice" element={<Layout><GuideDetail slugOverride="cdcfib-cbt-past-questions-free-practice" /></Layout>} />
        <Route path="/nigerian-navy-past-questions-bmtc-exam" element={<Layout><GuideDetail slugOverride="nigerian-navy-past-questions-bmtc-exam" /></Layout>} />
        <Route path="/police-recruitment-cbt-past-questions" element={<Layout><GuideDetail slugOverride="police-recruitment-cbt-past-questions" /></Layout>} />
        <Route path="/news" element={<Navigate to="/blog" replace />} />
        <Route path="/news/:slug" element={<Navigate to="/blog" replace />} />
        <Route path="/blog" element={<Layout><BlogHub /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogDetail /></Layout>} />

        {/* Dedicated High-Traffic Salary Pages (Featured Snippets & PAA) */}
        <Route path="/army-salary" element={<Layout><ArmySalary /></Layout>} />
        <Route path="/nigerian-army-salary" element={<Layout><ArmySalary /></Layout>} />
        <Route path="/nigerian-army-salary-structure" element={<Layout><ArmySalary /></Layout>} />
        <Route path="/police-salary" element={<Layout><PoliceSalary /></Layout>} />
        <Route path="/nigeria-police-salary" element={<Layout><PoliceSalary /></Layout>} />
        <Route path="/npf-salary" element={<Layout><PoliceSalary /></Layout>} />
        <Route path="/customs-salary" element={<Layout><CustomsSalary /></Layout>} />
        <Route path="/nigeria-customs-salary" element={<Layout><CustomsSalary /></Layout>} />
        <Route path="/ncs-salary" element={<Layout><CustomsSalary /></Layout>} />

        {/* High-Intent Standalone pSEO Salary Pages */}
        <Route path="/navy-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="navy-salary" /></Layout>} />
        <Route path="/nigerian-navy-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="navy-salary" /></Layout>} />
        <Route path="/nigerian-navy-salary-structure" element={<Layout><StandaloneSalaryPage agencyKeyOverride="navy-salary" /></Layout>} />
        
        <Route path="/airforce-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="airforce-salary" /></Layout>} />
        <Route path="/air-force-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="airforce-salary" /></Layout>} />
        <Route path="/nigerian-airforce-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="airforce-salary" /></Layout>} />
        <Route path="/naf-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="airforce-salary" /></Layout>} />

        <Route path="/civil-defence-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="civil-defence-salary" /></Layout>} />
        <Route path="/civildefence-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="civil-defence-salary" /></Layout>} />
        <Route path="/nscdc-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="civil-defence-salary" /></Layout>} />

        <Route path="/immigration-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="immigration-salary" /></Layout>} />
        <Route path="/nigeria-immigration-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="immigration-salary" /></Layout>} />
        <Route path="/nis-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="immigration-salary" /></Layout>} />

        <Route path="/nnpc-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="nnpc-salary" /></Layout>} />
        <Route path="/nnpc-salary-structure" element={<Layout><StandaloneSalaryPage agencyKeyOverride="nnpc-salary" /></Layout>} />
        <Route path="/nnpc-graduate-trainee-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="nnpc-salary" /></Layout>} />

        <Route path="/cbn-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="cbn-salary" /></Layout>} />
        <Route path="/cbn-salary-structure" element={<Layout><StandaloneSalaryPage agencyKeyOverride="cbn-salary" /></Layout>} />
        <Route path="/cbn-entry-level-salary" element={<Layout><StandaloneSalaryPage agencyKeyOverride="cbn-salary" /></Layout>} />

        {/* Dynamic catch-all for programmatic salary slugs */}
        <Route path="/salary/:agencySlug" element={<Layout><StandaloneSalaryPage /></Layout>} />

        <Route path="/salary-comparison" element={<Layout><SalaryComparison /></Layout>} />
        <Route path="/military-vs-paramilitary-salary" element={<Layout><SalaryComparison /></Layout>} />
        <Route path="/army-vs-navy-salary" element={<Layout><SalaryComparison /></Layout>} />
        <Route path="/army-vs-navy-vs-airforce-salary" element={<Layout><SalaryComparison /></Layout>} />

        {/* Shortlist & Screening Venues Hub */}
        <Route path="/shortlist-hub" element={<Layout><ShortlistHub /></Layout>} />
        <Route path="/shortlist" element={<Navigate to="/shortlist-hub" replace />} />
        <Route path="/screening-venues" element={<Layout><ShortlistHub /></Layout>} />
        <Route path="/shortlisted-candidates" element={<Layout><ShortlistHub /></Layout>} />
        <Route path="/army-screening-venue" element={<Layout><ShortlistHub /></Layout>} />

        {/* ======================================================== */}
        {/* PROGRAMMATIC SEO (pSEO): CANDIDATE ACTIONS & SITELINKS  */}
        {/* (Print Confirmation Slip, Guarantor Form, Portal Login, Update Documents) */}
        {/* ======================================================== */}

        {/* Dynamic Programmatic Catch-All Route */}
        <Route path="/portal/:agencySlug/:actionType" element={<Layout><PortalActionPage /></Layout>} />

        {/* 1. NIGERIA POLICE FORCE (NPF / PSC) */}
        <Route path="/police-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/police-confirmation-slip" element={<Navigate to="/police-print-confirmation-slip" replace />} />
        <Route path="/print-your-confirmation-slip" element={<Navigate to="/police-print-confirmation-slip" replace />} />
        <Route path="/police-guarantor-form" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/download-guarantor-form" element={<Navigate to="/police-guarantor-form" replace />} />
        <Route path="/download-police-guarantor-form" element={<Navigate to="/police-guarantor-form" replace />} />
        <Route path="/police-recruitment-portal-login" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="portal-login" /></Layout>} />
        <Route path="/police-portal-login" element={<Navigate to="/police-recruitment-portal-login" replace />} />
        <Route path="/police-recruitment-portal" element={<Navigate to="/police-recruitment" replace />} />
        <Route path="/police-update-documents" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="update-documents" /></Layout>} />
        <Route path="/update-your-documents" element={<Navigate to="/police-update-documents" replace />} />
        <Route path="/psc-police" element={<Navigate to="/police-recruitment" replace />} />

        {/* 2. NIGERIAN ARMY (NA) */}
        <Route path="/army-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/army-confirmation-slip" element={<Navigate to="/army-print-confirmation-slip" replace />} />
        <Route path="/army-guarantor-form" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/download-army-guarantor-form" element={<Navigate to="/army-guarantor-form" replace />} />
        <Route path="/army-recruitment-portal-login" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="portal-login" /></Layout>} />
        <Route path="/army-portal-login" element={<Navigate to="/army-recruitment-portal-login" replace />} />
        <Route path="/army-update-documents" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="update-documents" /></Layout>} />

        {/* 3. NIGERIAN NAVY (NN) */}
        <Route path="/navy-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="navy" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/navy-confirmation-slip" element={<Navigate to="/navy-print-confirmation-slip" replace />} />
        <Route path="/navy-batch-39-print-slip" element={<Navigate to="/navy-print-confirmation-slip" replace />} />
        <Route path="/navy-guarantor-form" element={<Layout><PortalActionPage agencyOverride="navy" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/download-navy-guarantor-form" element={<Navigate to="/navy-guarantor-form" replace />} />
        <Route path="/navy-recruitment-portal-login" element={<Layout><PortalActionPage agencyOverride="navy" actionOverride="portal-login" /></Layout>} />
        <Route path="/navy-portal-login" element={<Navigate to="/navy-recruitment-portal-login" replace />} />
        <Route path="/joinnigeriannavy-login" element={<Navigate to="/navy-recruitment-portal-login" replace />} />
        <Route path="/navy-update-documents" element={<Layout><PortalActionPage agencyOverride="navy" actionOverride="update-documents" /></Layout>} />

        {/* 4. CIVIL DEFENCE (NSCDC / CDCFIB) */}
        <Route path="/civil-defence-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/nscdc-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/cdcfib-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/civil-defence-guarantor-form" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/nscdc-guarantor-form" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/cdcfib-guarantor-form" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/cdcfib-portal-login" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="portal-login" /></Layout>} />
        <Route path="/civil-defence-portal-login" element={<Navigate to="/cdcfib-portal-login" replace />} />
        <Route path="/nscdc-portal-login" element={<Navigate to="/cdcfib-portal-login" replace />} />
        <Route path="/cdcfib-recruitment-portal-login" element={<Navigate to="/cdcfib-portal-login" replace />} />
        <Route path="/civil-defence-recruitment-portal-login" element={<Navigate to="/cdcfib-portal-login" replace />} />
        <Route path="/nscdc-recruitment-portal-login" element={<Navigate to="/cdcfib-portal-login" replace />} />
        <Route path="/cdcfib-update-documents" element={<Layout><PortalActionPage agencyOverride="civil-defence" actionOverride="update-documents" /></Layout>} />
        <Route path="/civil-defence-update-documents" element={<Navigate to="/cdcfib-update-documents" replace />} />
        <Route path="/nscdc-update-documents" element={<Navigate to="/cdcfib-update-documents" replace />} />

        {/* 5. NIGERIA IMMIGRATION SERVICE (NIS) */}
        <Route path="/immigration-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="immigration" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/nis-print-confirmation-slip" element={<Navigate to="/immigration-print-confirmation-slip" replace />} />
        <Route path="/immigration-guarantor-form" element={<Layout><PortalActionPage agencyOverride="immigration" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/nis-guarantor-form" element={<Navigate to="/immigration-guarantor-form" replace />} />
        <Route path="/immigration-portal-login" element={<Layout><PortalActionPage agencyOverride="immigration" actionOverride="portal-login" /></Layout>} />
        <Route path="/immigration-recruitment-portal-login" element={<Navigate to="/immigration-portal-login" replace />} />
        <Route path="/nis-portal-login" element={<Navigate to="/immigration-portal-login" replace />} />
        <Route path="/nis-recruitment-portal-login" element={<Navigate to="/immigration-portal-login" replace />} />
        <Route path="/immigration-update-documents" element={<Layout><PortalActionPage agencyOverride="immigration" actionOverride="update-documents" /></Layout>} />
        <Route path="/nis-update-documents" element={<Navigate to="/immigration-update-documents" replace />} />

        {/* 6. NIGERIA CUSTOMS SERVICE (NCS) */}
        <Route path="/customs-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="customs" actionOverride="confirmation-slip" /></Layout>} />
        <Route path="/ncs-print-confirmation-slip" element={<Navigate to="/customs-print-confirmation-slip" replace />} />
        <Route path="/customs-guarantor-form" element={<Layout><PortalActionPage agencyOverride="customs" actionOverride="guarantor-form" /></Layout>} />
        <Route path="/ncs-guarantor-form" element={<Navigate to="/customs-guarantor-form" replace />} />
        <Route path="/customs-portal-login" element={<Layout><PortalActionPage agencyOverride="customs" actionOverride="portal-login" /></Layout>} />
        <Route path="/customs-recruitment-portal-login" element={<Navigate to="/customs-portal-login" replace />} />
        <Route path="/ncs-portal-login" element={<Navigate to="/customs-portal-login" replace />} />
        <Route path="/ncs-recruitment-portal-login" element={<Navigate to="/customs-portal-login" replace />} />
        <Route path="/customs-update-documents" element={<Layout><PortalActionPage agencyOverride="customs" actionOverride="update-documents" /></Layout>} />
        <Route path="/ncs-update-documents" element={<Navigate to="/customs-update-documents" replace />} />

        {/* Redirects for legacy utilities */}
        <Route path="/passport-resizer" element={<Navigate to="/guides" replace />} />
        <Route path="/photo-compressor" element={<Navigate to="/guides" replace />} />
        <Route path="/recruitment-photo-resizer" element={<Navigate to="/guides" replace />} />

        {/* Agency Hubs & Specialized In-Demand Portals */}
        <Route path="/navy-dssc-recruitment" element={<Layout><AgencyHub agencySlug="navy-dssc" /></Layout>} />
        <Route path="/navy-dssc" element={<Layout><AgencyHub agencySlug="navy-dssc" /></Layout>} />
        <Route path="/dssc-recruitment" element={<Layout><AgencyHub agencySlug="navy-dssc" /></Layout>} />

        <Route path="/ncc" element={<Navigate to="/ncc-recruitment" replace />} />
        <Route path="/ncc-recruitment" element={<Layout><AgencyHub agencySlug="ncc" /></Layout>} />
        <Route path="/army-recruitment" element={<Layout><AgencyHub agencySlug="army" /></Layout>} />
        <Route path="/navy-recruitment" element={<Layout><AgencyHub agencySlug="navy" /></Layout>} />
        <Route path="/airforce-recruitment" element={<Layout><AgencyHub agencySlug="airforce" /></Layout>} />
        <Route path="/air-force-recruitment" element={<Layout><AgencyHub agencySlug="airforce" /></Layout>} />
        <Route path="/customs-recruitment" element={<Layout><AgencyHub agencySlug="customs" /></Layout>} />
        <Route path="/frsc-recruitment" element={<Layout><AgencyHub agencySlug="frsc" /></Layout>} />
        <Route path="/ndlea-recruitment" element={<Layout><AgencyHub agencySlug="ndlea" /></Layout>} />
        <Route path="/nis-recruitment" element={<Layout><AgencyHub agencySlug="nis" /></Layout>} />
        <Route path="/nda-recruitment" element={<Layout><AgencyHub agencySlug="nda" /></Layout>} />
        <Route path="/police-recruitment" element={<Layout><AgencyHub agencySlug="police" /></Layout>} />
        <Route path="/civil-defence-recruitment" element={<Layout><AgencyHub agencySlug="civildefence" /></Layout>} />
        <Route path="/civildefence-recruitment" element={<Layout><AgencyHub agencySlug="civildefence" /></Layout>} />
        <Route path="/nscdc-recruitment" element={<Layout><AgencyHub agencySlug="civildefence" /></Layout>} />
        <Route path="/fire-service-recruitment" element={<Layout><AgencyHub agencySlug="fireservice" /></Layout>} />
        <Route path="/fireservice-recruitment" element={<Layout><AgencyHub agencySlug="fireservice" /></Layout>} />
        <Route path="/fire-recruitment" element={<Layout><AgencyHub agencySlug="fireservice" /></Layout>} />
        <Route path="/immigration-recruitment" element={<Layout><AgencyHub agencySlug="immigration" /></Layout>} />
        <Route path="/efcc-recruitment" element={<Layout><AgencyHub agencySlug="efcc" /></Layout>} />
        <Route path="/fcsc-recruitment" element={<Layout><AgencyHub agencySlug="fcsc" /></Layout>} />
        <Route path="/nnpc" element={<Navigate to="/nnpc-recruitment" replace />} />
        <Route path="/nnpc-recruitment" element={<Layout><AgencyHub agencySlug="nnpc" /></Layout>} />
        <Route path="/nnpc-graduate-trainee" element={<Layout><AgencyHub agencySlug="nnpc" /></Layout>} />
        <Route path="/nnpc-graduate-trainee-2026" element={<Layout><AgencyHub agencySlug="nnpc" /></Layout>} />
        <Route path="/cbn" element={<Navigate to="/cbn-recruitment" replace />} />
        <Route path="/cbn-recruitment" element={<Layout><AgencyHub agencySlug="cbn" /></Layout>} />
        <Route path="/cbn-recruitment-2026" element={<Layout><AgencyHub agencySlug="cbn" /></Layout>} />
        <Route path="/nimc" element={<Navigate to="/nimc-recruitment" replace />} />
        <Route path="/nimc-recruitment" element={<Layout><AgencyHub agencySlug="nimc" /></Layout>} />
        <Route path="/nitda-recruitment" element={<Layout><AgencyHub agencySlug="nitda" /></Layout>} />
        <Route path="/faan-recruitment" element={<Layout><AgencyHub agencySlug="faan" /></Layout>} />
        <Route path="/nimasa-recruitment" element={<Layout><AgencyHub agencySlug="nimasa" /></Layout>} />
        <Route path="/nafdac-recruitment" element={<Layout><AgencyHub agencySlug="nafdac" /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsConditions /></Layout>} />
        <Route path="/disclaimer" element={<Layout><Disclaimer /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;