import { personalDetails } from '../data/portfolio_data';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">{personalDetails.name}</h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                    Exploring the intersection of life sciences and artificial intelligence.
                </p>
                <div className="flex justify-center gap-6 mb-8">
                    {/* Social placeholders */}
                    <a href="https://www.linkedin.com/in/sandeep-kumar-kumawat-797464345" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">Google Scholar</a>
                </div>
                <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
                    © {new Date().getFullYear()} Sandeep Kumar Kumawat. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
