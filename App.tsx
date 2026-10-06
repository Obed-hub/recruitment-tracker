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
import NcaaRecruitmentGuide from './pages/NcaaRecruitmentGuide';
import NgoJobsHub from './pages/NgoJobsHub';
import NgoRemoteEntryLevel from './pages/NgoRemoteEntryLevel';
import CivilServiceExamGuide from './pages/CivilServiceExamGuide';
import CivilServiceCommissionGuide from './pages/CivilServiceCommissionGuide';
import GraduateTraineeGuide from './pages/GraduateTraineeGuide';
import ManagementTraineeGuide from './pages/ManagementTraineeGuide';
import OnTheJobTrainingGuide from './pages/OnTheJobTrainingGuide';
import TechTraineeshipGuide from './pages/TechTraineeshipGuide';


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

        {/* Traineeships & Graduate Schemes Authority Pillars */}
        <Route path="/traineeships/guide" element={<Layout><GraduateTraineeGuide /></Layout>} />
        <Route path="/guides/graduate-trainee-programs" element={<Layout><GraduateTraineeGuide /></Layout>} />
        <Route path="/graduate-trainee" element={<Navigate to="/traineeships/guide" replace />} />
        <Route path="/graduate-trainee-program" element={<Navigate to="/traineeships/guide" replace />} />
        <Route path="/graduate-training-schemes" element={<Navigate to="/traineeships/guide" replace />} />

        <Route path="/traineeships/management" element={<Layout><ManagementTraineeGuide /></Layout>} />
        <Route path="/guides/management-trainee-programs" element={<Layout><ManagementTraineeGuide /></Layout>} />
        <Route path="/management-trainee" element={<Navigate to="/traineeships/management" replace />} />
        <Route path="/management-trainee-programme" element={<Navigate to="/traineeships/management" replace />} />

        <Route path="/training/on-the-job" element={<Layout><OnTheJobTrainingGuide /></Layout>} />
        <Route path="/on-the-job-training-jobs" element={<Layout><OnTheJobTrainingGuide /></Layout>} />
        <Route path="/on-the-job-training" element={<Navigate to="/training/on-the-job" replace />} />

        <Route path="/tech/software-developer-traineeship" element={<Layout><TechTraineeshipGuide /></Layout>} />
        <Route path="/traineeships/engineering-technical" element={<Layout><TechTraineeshipGuide /></Layout>} />
        <Route path="/software-developer-traineeship" element={<Layout><TechTraineeshipGuide /></Layout>} />
        <Route path="/it-trainee-programme" element={<Navigate to="/tech/software-developer-traineeship" replace />} />
        <Route path="/web-developer-training-jobs" element={<Navigate to="/tech/software-developer-traineeship" replace />} />

        {/* Civil Service Authority Pillars */}
        <Route path="/exams/civil-service-exam-guide" element={<Layout><CivilServiceExamGuide /></Layout>} />
        <Route path="/civil-service-exam-guide" element={<Layout><CivilServiceExamGuide /></Layout>} />
        <Route path="/cbt-exam-for-civil-service" element={<Navigate to="/exams/civil-service-exam-guide" replace />} />
        <Route path="/civil-service-commission-exam" element={<Navigate to="/exams/civil-service-exam-guide" replace />} />
        <Route path="/jobs/civil-service-commission-guide" element={<Layout><CivilServiceCommissionGuide /></Layout>} />
        <Route path="/civil-service-commission-guide" element={<Layout><CivilServiceCommissionGuide /></Layout>} />
        <Route path="/public-service-commission-jobs" element={<Navigate to="/jobs/civil-service-commission-guide" replace />} />
        <Route path="/civil-service-commission-jobs" element={<Navigate to="/jobs/civil-service-commission-guide" replace />} />
        <Route path="/city-civil-service-jobs" element={<Navigate to="/jobs/civil-service-commission-guide" replace />} />

        {/* NGO Jobs Authority Pillars */}
        <Route path="/ngo-jobs" element={<Layout><NgoJobsHub /></Layout>} />
        <Route path="/ngo-jobs/remote-entry-level" element={<Layout><NgoRemoteEntryLevel /></Layout>} />
        <Route path="/ngo-recruitment" element={<Navigate to="/ngo-jobs" replace />} />
        <Route path="/ngo-vacancies" element={<Navigate to="/ngo-jobs" replace />} />
        <Route path="/remote-ngo-jobs" element={<Navigate to="/ngo-jobs/remote-entry-level" replace />} />
        <Route path="/entry-level-ngo-jobs" element={<Navigate to="/ngo-jobs/remote-entry-level" replace />} />

        {/* NCAA Authority Pillar Guide */}
        <Route path="/ncaa-recruitment-guide" element={<Layout><NcaaRecruitmentGuide /></Layout>} />
        <Route path="/ncaa-recruitment" element={<Layout><AgencyHub agencySlug="ncaa" /></Layout>} />

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
        <Route path="/disclaimer" element={<Navigate to="/terms" replace />} />
        <Route path="/faqs" element={<Navigate to="/guides" replace />} />

        {/* High-traffic Search Intent Aliases & Direct Fallbacks */}
        <Route path="/how-to-apply-cdcfib-portal" element={<Navigate to="/guides/how-to-apply-cdcfib-portal" replace />} />
        <Route path="/is-nigerian-air-force-form-out" element={<Navigate to="/guides/is-nigerian-air-force-form-out" replace />} />
        <Route path="/is-nigerian-army-form-out" element={<Navigate to="/army-recruitment" replace />} />
        <Route path="/is-police-recruitment-form-out" element={<Navigate to="/police-recruitment" replace />} />
        <Route path="/navy-recruitment-portal-login" element={<Navigate to="/navy-recruitment" replace />} />
        <Route path="/which-recruitment-form-is-out-now" element={<Navigate to="/recruitments" replace />} />
        <Route path="/print-army-screening-slip" element={<Navigate to="/guides/print-army-screening-slip" replace />} />
        <Route path="/army-salary" element={<Navigate to="/army-recruitment" replace />} />
        <Route path="/airforce-salary" element={<Navigate to="/airforce-recruitment" replace />} />
        <Route path="/customs-salary" element={<Navigate to="/customs-recruitment" replace />} />
        <Route path="/cbn-salary" element={<Navigate to="/cbn-recruitment" replace />} />
        <Route path="/nnpc-salary" element={<Navigate to="/nnpc-recruitment" replace />} />
        <Route path="/civil-defence-salary" element={<Navigate to="/civil-defence-recruitment" replace />} />

        {/* Navy Trending Troubleshooting Aliases */}
        <Route path="/navy-portal-issues" element={<Navigate to="/blog/how-to-fix-nigerian-navy-portal-issues-email-code-nin" replace />} />
        <Route path="/navy-email-verification-code" element={<Navigate to="/blog/how-to-fix-nigerian-navy-portal-issues-email-code-nin" replace />} />
        <Route path="/navy-nin-verification-error" element={<Navigate to="/blog/how-to-fix-nigerian-navy-portal-issues-email-code-nin" replace />} />
        <Route path="/joinnigeriannavy-portal-issues" element={<Navigate to="/blog/how-to-fix-nigerian-navy-portal-issues-email-code-nin" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;