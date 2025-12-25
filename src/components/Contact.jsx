import SectionWrapper from './SectionWrapper';
import { personalDetails } from '../data/portfolio_data';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="bg-white">
            <div className="grid md:grid-cols-2 gap-12">

                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        I am actively seeking PhD opportunities and research internships in Computational Biology and Bioinformatics.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-700">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Email</h4>
                                <a href={`mailto:${personalDetails.email}`} className="text-slate-600 hover:text-primary-700 transition-colors">
                                    {personalDetails.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-700">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Phone</h4>
                                <span className="text-slate-600">
                                    {personalDetails.phone}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Dr. Jane Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="jane@university.edu" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Regarding research collaboration..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Contact;
