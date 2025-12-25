import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolio_data';

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-slate-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    A balanced skillset spanning biological domain knowledge and computational tools.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {skills.map((skillGroup, index) => {
                    const Icon = skillGroup.icon;
                    return (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary-50 text-primary-700 rounded-lg">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{skillGroup.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
