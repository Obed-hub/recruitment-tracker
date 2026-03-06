import React from 'react';
import { Lock, Eye, Cookie, ShieldCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="border-b border-gray-200 pb-8 mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-military-blue">Privacy Policy</h1>
                <p className="text-gray-500 mt-2">Last Updated: March 2026</p>
            </div>

            <div className="prose prose-blue max-w-none space-y-10">
                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Lock className="w-6 h-6 text-military-green" />
                        <h2 className="text-2xl font-bold m-0">Information We Collect</h2>
                    </div>
                    <p className="text-gray-700">
                        We collect information you provide directly to us when using our eligibility checker or contacting us. This may include your educational background, date of birth, and email address. We use this information strictly to provide our services and improve user experience.
                    </p>
                </section>

                <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center space-x-3 mb-4">
                        <Eye className="w-6 h-6 text-military-blue" />
                        <h2 className="text-2xl font-bold m-0">Google AdSense & Third-Party Advertising</h2>
                    </div>
                    <p className="text-gray-700">
                        This website uses Google AdSense, a service for including advertisements from Google Inc. Google AdSense uses "cookies" — text files that are stored on your computer and permit analysis of your use of the website.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Google uses cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Cookie className="w-6 h-6 text-military-green" />
                        <h2 className="text-2xl font-bold m-0">Cookie Policy</h2>
                    </div>
                    <p className="text-gray-700">
                        We use cookies to analyze traffic, remember your preferences, and provide relevant content. You can choose to disable cookies through your individual browser options, although this may affect how you are able to interact with our site.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <ShieldCheck className="w-6 h-6 text-military-green" />
                        <h2 className="text-2xl font-bold m-0">Data Protection</h2>
                    </div>
                    <p className="text-gray-700">
                        We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                    </p>
                </section>

                <div className="bg-gray-50 p-8 rounded-2xl text-center text-sm text-gray-500">
                    If you have any questions regarding this privacy policy, you may contact us using the information on our Contact Us page.
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
