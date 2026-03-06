import React from 'react';
import { Scale, AlertTriangle, CheckSquare, Info } from 'lucide-react';

const TermsConditions: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="border-b border-gray-200 pb-8 mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-military-blue">Terms & Conditions</h1>
                <p className="text-gray-500 mt-2">Legal Disclaimer and Usage Policy</p>
            </div>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center space-x-3 mb-4 text-military-green">
                        <Info className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this platform's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                    </p>
                </section>

                <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                    <div className="flex items-center space-x-3 mb-4 text-yellow-700">
                        <AlertTriangle className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">2. Professional Disclaimer</h2>
                    </div>
                    <p className="text-yellow-900 font-medium">
                        The Nigeria Military Recruitment Tracker is an INDEPENDENT informational tool. We are NOT affiliated with the Nigerian Army, Navy, Air Force, or any government agency.
                    </p>
                    <p className="text-yellow-800 mt-4">
                        While we strive for 100% accuracy, all recruitment information, dates, and requirements should be verified on the official portals of the respective military branches. We are not responsible for any decisions made based on the information provided here.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4 text-military-green">
                        <CheckSquare className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">3. Use of Services</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        The services provided on this platform, including the recruitment tracker, eligibility checker, and practice tests, are for personal, non-commercial use only. Users are prohibited from scraping, redistributing, or selling the content found on this platform.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4 text-military-green">
                        <Scale className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Under no circumstances shall the platform or its developers be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the services or for the cost of procurement of substitute services.
                    </p>
                </section>

                <div className="p-6 bg-military-blue/5 rounded-xl text-center">
                    <p className="text-gray-600 italic">
                        "Serving the nation starts with reliable information. Thank you for using our platform."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
