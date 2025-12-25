import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolio_data';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-50 to-slate-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-200 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                        {/* Placeholder for Profile Image - using Initials or generic avatar if no image */}
                        <span className="text-3xl sm:text-4xl font-bold text-slate-400">SK</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
                        <span className="text-xl">🧬</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4"
                >
                    {personalDetails.name}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mb-8 font-light"
                >
                    {personalDetails.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors shadow-md font-medium">
                        View Research
                        <ArrowRight size={18} />
                    </a>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                        Download CV
                        <Download size={18} />
                    </a>
                    <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                        Contact Me
                        <Mail size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
