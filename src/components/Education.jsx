import SectionWrapper from './SectionWrapper';
import { education } from '../data/portfolio_data';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
    return (
        <SectionWrapper id="education" className="bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Timeline</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {education.map((edu, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        {/* Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 group-hover:bg-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                        </div>

                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-primary-700 font-bold text-sm tracking-wider uppercase">{edu.degree}</span>
                                <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                                    <Calendar size={12} />
                                    {edu.year}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.institution}</h3>
                            <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                                <MapPin size={14} />
                                {edu.location}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
