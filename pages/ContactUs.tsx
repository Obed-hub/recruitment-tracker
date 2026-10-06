import React from 'react';
import { Mail, MapPin, MessageSquare, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import TelegramIcon from '../components/TelegramIcon';

const ContactUs: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
            <SEO
                title="Contact Us - Get Technical Support or Inquiries"
                description="Have questions about Nigeria recruitment tracking? Contact our team for support, partnership inquiries, or to report a technical issue."
                canonical="/contact"
                keywords={['contact us', 'recruitment support', 'help desk', 'Nigeria job portal contact']}
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-military-blue mb-4">Get in Touch</h1>
                <p className="text-xl text-gray-600">We're here to help you with your recruitment journey.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="bg-military-green/10 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-military-green" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                            <p className="text-gray-600">For inquiries and support:</p>
                            <a href="mailto:JUSTONEGUYLIKETHAT@GMAIL.COM" className="text-military-blue font-semibold hover:underline">
                                JUSTONEGUYLIKETHAT@GMAIL.COM
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-military-green/10 p-3 rounded-lg">
                            <MapPin className="w-6 h-6 text-military-green" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
                            <p className="text-gray-600">Nigeria (Remote Operations)</p>
                            <p className="text-sm text-gray-500 mt-1">Available across all 36 states.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-military-green/10 p-3 rounded-lg">
                            <MessageSquare className="w-6 h-6 text-military-green" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Official Discussion & Updates</h3>
                            <p className="text-sm text-gray-600 mb-3">Join our active applicant communities for real-time discussions, screening verification, and shortlist drops:</p>
                            <div className="flex flex-col gap-2.5">
                                <a
                                    href="https://t.me/recruitmenttracker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl text-xs font-bold transition-all shadow-sm w-fit"
                                >
                                    <TelegramIcon className="w-4 h-4" />
                                    <span>Telegram Discussion Channel (@recruitmenttracker)</span>
                                </a>
                                <a
                                    href="https://whatsapp.com/channel/0029Vb9F6VeC1FuCXNvVif10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-black transition-all shadow-sm w-fit"
                                >
                                    <MessageCircle className="w-4 h-4 fill-current" />
                                    <span>WhatsApp Channel (NIGERIA RECRUITMENT UPDATE)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-military-blue outline-none" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-military-blue outline-none" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-military-blue outline-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-military-green text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
