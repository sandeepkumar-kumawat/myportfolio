import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Research', href: '#projects' },
        { name: 'Timeline', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/90 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="bg-primary-700 p-1.5 rounded-lg text-white group-hover:bg-primary-800 transition-colors">
                            <GraduationCap size={24} />
                        </div>
                        <span className={`font-bold text-lg md:text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                            Sandeep<span className="text-slate-500 font-normal">.Research</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary-700 hover:bg-slate-100 px-3 py-2 rounded-md transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-sm"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-primary-700 hover:bg-slate-50 rounded-md"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
