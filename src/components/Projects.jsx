import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio_data';
import { ExternalLink, Github, FileText } from 'lucide-react';

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-white">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-12 h-1 bg-primary-700 rounded-full block"></span>
                    Research & Projects
                </h2>
                <p className="text-slate-600">
                    Selected academic and independent projects showcasing computational biology applications.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:border-primary-200 transition-colors group">
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-800 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-500 italic mb-4">
                                    {project.relevance}
                                </p>
                            </div>

                            <p className="text-slate-700 mb-6 flex-1 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-200">
                                <div className="flex items-center gap-4">
                                    <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary-700 transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary-700 transition-colors">
                                        <FileText size={16} /> Paper/Poster
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary-50 px-6 py-3 border-t border-slate-100">
                            <p className="text-xs font-semibold text-primary-800">
                                Outcome: <span className="font-normal text-slate-700">{project.outcome}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
