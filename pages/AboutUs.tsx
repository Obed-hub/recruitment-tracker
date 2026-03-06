import React from 'react';
import { Target, Users, Shield, Award } from 'lucide-react';
import SEO from '../components/SEO';

const AboutUs: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <SEO
                title="About Us - Nigeria Recruitment Tracker Team"
                description="Learn about our mission to centralize and simplify Nigerian recruitment information for all aspiring candidates. We provide tracking, eligibility, and past questions."
                canonical="/about"
                keywords={['about recruitment tracker', 'our mission', 'Nigeria job tracking team']}
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-military-blue mb-4">Our Story</h1>
                <p className="text-xl text-gray-600">Empowering Nigeria's Future Protectors</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-bold text-military-green mb-4">The Beginning</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Recruitment Tracker was born out of a simple observation: many qualified and passionate Nigerians miss out on recruitment opportunities due to a lack of centralized, clear, and timely information. We saw the need for a bridge between potential recruits and the information they need to serve their nation.
                    </p>
                </div>
                <div className="bg-green-50 p-8 rounded-2xl border border-green-100 italic text-green-800">
                    "Our mission is to ensure that every aspiring Nigerian soldier has the tools, information, and guidance they need to succeed in their journey of service."
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <Target className="w-12 h-12 text-military-blue mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Transparency</h3>
                    <p className="text-sm text-gray-600">Clear information on eligibility and requirements.</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <Users className="w-12 h-12 text-military-blue mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Community</h3>
                    <p className="text-sm text-gray-600">Supporting thousands of applicants nationwide.</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <Award className="w-12 h-12 text-military-blue mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Excellence</h3>
                    <p className="text-sm text-gray-600">Providing the best tracking and preparation tools.</p>
                </div>
            </div>

            <div className="bg-military-blue text-white p-10 rounded-3xl">
                <div className="flex items-center space-x-4 mb-6">
                    <Shield className="w-10 h-10 text-yellow-400" />
                    <h2 className="text-2xl font-bold">What We Provide</h2>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                        <span>Real-time tracking of active recruitment portals.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                        <span>Smart eligibility checking based on individual qualifications.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                        <span>Official shortlist access and past question resources.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                        <span>A professional platform that respects candidate privacy.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
