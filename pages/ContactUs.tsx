import React from 'react';
import { Mail, MapPin, MessageSquare, Twitter, Facebook, Instagram } from 'lucide-react';

const ContactUs: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
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
                            <h3 className="text-lg font-bold text-gray-900">Follow Us</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-military-blue hover:text-white transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-military-blue hover:text-white transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-military-blue hover:text-white transition-colors">
                                    <Instagram className="w-5 h-5" />
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
