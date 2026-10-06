import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import GoogleAnalyticsTracker from './components/GoogleAnalyticsTracker';

// Route-level code-splitting with React.lazy
const Dashboard = lazy(() => import('./pages/Dashboard'));
const RecruitmentFilter = lazy(() => import('./pages/RecruitmentFilter'));
const EligibilityChecker = lazy(() => import('./pages/EligibilityChecker'));
const RecruitmentDetail = lazy(() => import('./pages/RecruitmentDetail'));
const QuizHub = lazy(() => import('./pages/QuizHub'));
const QuizInterface = lazy(() => import('./pages/QuizInterface'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const GuidesHub = lazy(() => import('./pages/GuidesHub'));
const GuideDetail = lazy(() => import('./pages/GuideDetail'));
const BlogHub = lazy(() => import('./pages/BlogHub'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const AgencyHub = lazy(() => import('./pages/AgencyHub'));
const ArmySalary = lazy(() => import('./pages/ArmySalary'));
const SalaryComparison = lazy(() => import('./pages/SalaryComparison'));
const PoliceSalary = lazy(() => import('./pages/PoliceSalary'));
const CustomsSalary = lazy(() => import('./pages/CustomsSalary'));
const StandaloneSalaryPage = lazy(() => import('./pages/StandaloneSalaryPage'));
const ShortlistHub = lazy(() => import('./pages/ShortlistHub'));
const WhichFormIsOut = lazy(() => import('./pages/WhichFormIsOut'));
const NavyRecruitmentBatch39 = lazy(() => import('./pages/NavyRecruitmentBatch39'));
const FAQHub = lazy(() => import('./pages/FAQHub'));
const PortalActionPage = lazy(() => import('./pages/PortalActionPage'));
const SponsoredAdReport = lazy(() => import('./pages/SponsoredAdReport'));
const MilitaryScreeningSalesPage = lazy(() => import('./pages/MilitaryScreeningSalesPage'));

// Authority Pillars
const NcaaRecruitmentGuide = lazy(() => import('./pages/NcaaRecruitmentGuide'));
const NgoJobsHub = lazy(() => import('./pages/NgoJobsHub'));
const NgoRemoteEntryLevel = lazy(() => import('./pages/NgoRemoteEntryLevel'));
const CivilServiceExamGuide = lazy(() => import('./pages/CivilServiceExamGuide'));
const CivilServiceCommissionGuide = lazy(() => import('./pages/CivilServiceCommissionGuide'));
const GraduateTraineeGuide = lazy(() => import('./pages/GraduateTraineeGuide'));
const ManagementTraineeGuide = lazy(() => import('./pages/ManagementTraineeGuide'));
const OnTheJobTrainingGuide = lazy(() => import('./pages/OnTheJobTrainingGuide'));
const TechTraineeshipGuide = lazy(() => import('./pages/TechTraineeshipGuide'));

const PracticeBranchRedirect: React.FC = () => {
  const { branch } = useParams<{ branch: string }>();
  return <Navigate to={`/past-questions/${branch || ''}`} replace />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalyticsTracker />
      <Suspense fallback={null}>
        <Routes>
          {/* Admin panel — full page, outside the main Layout */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/ad-report" element={<SponsoredAdReport />} />

          {/* High-Converting Military Screening Guide Sales Page */}
          <Route path="/military-screening-guide" element={<MilitaryScreeningSalesPage />} />
          <Route path="/screening-guide-2026" element={<Navigate to="/military-screening-guide" replace />} />
          <Route path="/medical-screening-guide" element={<Navigate to="/military-screening-guide" replace />} />

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
          <Route path="/is-nigerian-air-force-form-out" element={<Layout><GuideDetail slugOverride="is-nigerian-air-force-form-out" /></Layout>} />
          <Route path="/is-air-force-form-out" element={<Navigate to="/is-nigerian-air-force-form-out" replace />} />
          <Route path="/is-naf-form-out" element={<Navigate to="/is-nigerian-air-force-form-out" replace />} />
          <Route path="/naf-recruitment-2026" element={<Navigate to="/is-nigerian-air-force-form-out" replace />} />
          <Route path="/is-nigerian-airforce-form-out" element={<Navigate to="/is-nigerian-air-force-form-out" replace />} />
          <Route path="/is-police-recruitment-form-out" element={<Layout><GuideDetail slugOverride="is-police-recruitment-form-out" /></Layout>} />
          <Route path="/is-cdcfib-recruitment-form-out" element={<Layout><GuideDetail slugOverride="is-cdcfib-recruitment-form-out" /></Layout>} />

          {/* TOPIC 2: How-to-Apply & Portal Guides */}
          <Route path="/how-to-apply-nigerian-navy-batch" element={<Layout><GuideDetail slugOverride="how-to-apply-nigerian-navy-batch" /></Layout>} />
          <Route path="/how-to-apply-nigerian-air-force" element={<Layout><GuideDetail slugOverride="how-to-apply-nigerian-air-force" /></Layout>} />
          <Route path="/how-to-apply-air-force" element={<Navigate to="/how-to-apply-nigerian-air-force" replace />} />
          <Route path="/how-to-apply-naf" element={<Navigate to="/how-to-apply-nigerian-air-force" replace />} />
          <Route path="/how-to-apply-nigerian-airforce" element={<Navigate to="/how-to-apply-nigerian-air-force" replace />} />
          <Route path="/how-to-apply-cdcfib-portal" element={<Layout><GuideDetail slugOverride="how-to-apply-cdcfib-portal" /></Layout>} />
          <Route path="/how-to-apply-police-constable" element={<Layout><GuideDetail slugOverride="how-to-apply-police-constable" /></Layout>} />

          {/* PHASE 1 HIGH-INTENT PILLAR PAGES */}
          <Route path="/npf-recruitment-portal" element={<Layout><GuideDetail slugOverride="npf-recruitment-portal" /></Layout>} />
          <Route path="/police-recruitment-portal" element={<Navigate to="/npf-recruitment-portal" replace />} />
          
          <Route path="/nigerian-army-88-rri-recruitment" element={<Layout><GuideDetail slugOverride="nigerian-army-88-rri-recruitment" /></Layout>} />
          <Route path="/army-88-rri" element={<Navigate to="/nigerian-army-88-rri-recruitment" replace />} />
          <Route path="/army-88-rri-recruitment" element={<Navigate to="/nigerian-army-88-rri-recruitment" replace />} />

          <Route path="/nigerian-navy-dssc-recruitment" element={<Layout><GuideDetail slugOverride="nigerian-navy-dssc-recruitment" /></Layout>} />
          <Route path="/navy-dssc-recruitment" element={<Navigate to="/nigerian-navy-dssc-recruitment" replace />} />

          <Route path="/nis-recruitment-portal" element={<Layout><GuideDetail slugOverride="nis-recruitment-portal" /></Layout>} />
          <Route path="/immigration-recruitment-portal" element={<Navigate to="/nis-recruitment-portal" replace />} />

          {/* PHASE 2 HIGH-INTENT PILLAR PAGES */}
          <Route path="/ndlea-recruitment-portal" element={<Layout><GuideDetail slugOverride="ndlea-recruitment-portal" /></Layout>} />
          <Route path="/ndlea-portal" element={<Navigate to="/ndlea-recruitment-portal" replace />} />
          <Route path="/ndlea-recruitment" element={<Navigate to="/ndlea-recruitment-portal" replace />} />

          <Route path="/frsc-recruitment-portal" element={<Layout><GuideDetail slugOverride="frsc-recruitment-portal" /></Layout>} />
          <Route path="/frsc-portal" element={<Navigate to="/frsc-recruitment-portal" replace />} />
          <Route path="/frsc-recruitment" element={<Navigate to="/frsc-recruitment-portal" replace />} />

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

          {/* TOPIC 6: Specialized Salary Hubs */}
          <Route path="/nigerian-army-salary-structure" element={<Layout><ArmySalary /></Layout>} />
          <Route path="/army-salary-structure" element={<Navigate to="/nigerian-army-salary-structure" replace />} />
          <Route path="/salary-comparison-nigerian-armed-forces-paramilitary" element={<Layout><SalaryComparison /></Layout>} />
          <Route path="/military-vs-police-salary" element={<Navigate to="/salary-comparison-nigerian-armed-forces-paramilitary" replace />} />
          <Route path="/police-salary" element={<Layout><PoliceSalary /></Layout>} />
          <Route path="/nigeria-police-salary-structure" element={<Navigate to="/police-salary" replace />} />
          <Route path="/customs-salary" element={<Layout><CustomsSalary /></Layout>} />
          <Route path="/nigeria-customs-salary-structure" element={<Navigate to="/customs-salary" replace />} />

          {/* Dynamic Programmatic Salary Routes */}
          <Route path="/salary/:agencySlug" element={<Layout><StandaloneSalaryPage /></Layout>} />
          <Route path="/shortlist-hub" element={<Layout><ShortlistHub /></Layout>} />

          {/* PROGRAMMATIC PORTAL ACTION ROUTES */}
          {/* 1. NIGERIAN ARMY */}
          <Route path="/army-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="confirmation-slip" /></Layout>} />
          <Route path="/army-print-screening-slip" element={<Navigate to="/print-army-screening-slip" replace />} />
          <Route path="/army-guarantor-form" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="guarantor-form" /></Layout>} />
          <Route path="/army-portal-login" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="portal-login" /></Layout>} />
          <Route path="/army-recruitment-portal-login" element={<Navigate to="/army-portal-login" replace />} />
          <Route path="/recruitment-army-mil-ng-login" element={<Navigate to="/army-portal-login" replace />} />
          <Route path="/army-update-documents" element={<Layout><PortalActionPage agencyOverride="army" actionOverride="update-documents" /></Layout>} />

          {/* 2. NIGERIA POLICE FORCE (NPF) */}
          <Route path="/police-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="confirmation-slip" /></Layout>} />
          <Route path="/npf-print-confirmation-slip" element={<Navigate to="/police-print-confirmation-slip" replace />} />
          <Route path="/police-guarantor-form" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="guarantor-form" /></Layout>} />
          <Route path="/npf-guarantor-form" element={<Navigate to="/police-guarantor-form" replace />} />
          <Route path="/police-portal-login" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="portal-login" /></Layout>} />
          <Route path="/police-recruitment-portal-login" element={<Navigate to="/police-portal-login" replace />} />
          <Route path="/npf-portal-login" element={<Navigate to="/police-portal-login" replace />} />
          <Route path="/apply-policerecruitment-gov-ng-login" element={<Navigate to="/police-portal-login" replace />} />
          <Route path="/police-update-documents" element={<Layout><PortalActionPage agencyOverride="police" actionOverride="update-documents" /></Layout>} />
          <Route path="/npf-update-documents" element={<Navigate to="/police-update-documents" replace />} />

          {/* 3. NIGERIAN NAVY */}
          <Route path="/navy-print-confirmation-slip" element={<Layout><PortalActionPage agencyOverride="navy" actionOverride="confirmation-slip" /></Layout>} />
          <Route path="/navy-guarantor-form" element={<Layout><PortalActionPage agencyOverride="navy" actionOverride="guarantor-form" /></Layout>} />
          <Route path="/navy-portal-login" element={<Layout><PortalActionPage agencyOverride="navy" actionOverride="portal-login" /></Layout>} />
          <Route path="/navy-recruitment-portal-login" element={<Navigate to="/navy-portal-login" replace />} />
          <Route path="/joinnigeriannavy-login" element={<Navigate to="/navy-portal-login" replace />} />
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
      </Suspense>
    </BrowserRouter>
  );
};

export default App;