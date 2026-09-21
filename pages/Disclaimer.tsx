import React from 'react';
import { AlertTriangle, ShieldCheck, Info, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO
        title="Disclaimer - Nigeria Recruitment Tracker"
        description="Official disclaimer: Nigeria Recruitment Tracker is an independent informational platform and is not affiliated with the Nigerian Armed Forces, Federal Civil Service, or any government agency."
        canonical="/disclaimer"
        keywords={['recruitment tracker disclaimer', 'independent informational platform', 'military recruitment disclaimer Nigeria']}
      />

      <div className="border-b border-gray-200 pb-8 mb-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-3">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-700" /> Legal & Informational Notice
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-military-blue">Legal Disclaimer</h1>
        <p className="text-gray-500 mt-2">Transparency, Independence & Anti-Fraud Advisory</p>
      </div>

      <div className="space-y-8">
        {/* Important Callout */}
        <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-6 sm:p-8 text-amber-950">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-200 rounded-xl shrink-0 text-amber-900">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-amber-950">Non-Affiliation Notice</h2>
              <p className="text-sm sm:text-base leading-relaxed text-amber-900">
                <strong>Nigeria Recruitment Tracker (recruitmenttracker.com.ng)</strong> is an independent educational and recruitment monitoring portal. We are <strong>NOT</strong> an official recruitment portal of the Federal Republic of Nigeria, the Nigerian Army, Nigerian Navy, Nigerian Air Force, Nigeria Police Force, CDCFIB, Nigeria Customs Service, NNPC, CBN, or any other government or military agency.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-military-green">
            <Info className="w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-900">1. Verification of Information</h2>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            While our editorial team diligently verifies application dates, screening venues, rank structures, and CBT test syllabi against official gazettes and authorized agency press releases, recruitment procedures can change without prior notification.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Candidates are strongly advised to always cross-check details and complete their final submissions on official designated government portals (e.g., <em>recruitment.army.mil.ng</em>, <em>joinnigeriannavy.com</em>, <em>cdcfib.career</em>, <em>npf.gov.ng</em>).
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-red-600">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-900">2. Free Application & Anti-Fraud Warning</h2>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            ⚠️ <strong>Nigerian Military and Paramilitary Application Forms are 100% FREE OF CHARGE.</strong>
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Neither this platform nor any authentic Nigerian armed forces branch will EVER ask you to pay money into private bank accounts, buy "recruitment slots", or purchase unauthorized pin vouchers. Please report anyone soliciting money or promising guaranteed enlistment to law enforcement.
          </p>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-gray-900">3. Educational & Mock Testing Content</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            All mock CBT tests, sample questions, salary estimates (CONAFSS, CONPOSS, CONPASS), and screening tips provided on this platform are for personal study, educational awareness, and self-assessment purposes only.
          </p>
        </section>

        <div className="p-6 bg-military-blue/5 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-4 border border-military-blue/10">
          <p className="text-xs sm:text-sm text-gray-600 text-left">
            Have questions regarding our policies or wish to notify us of an update?
          </p>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-military-blue text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-opacity-90 transition-colors whitespace-nowrap"
          >
            Contact Our Support Desk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
