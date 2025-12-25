import SectionWrapper from './SectionWrapper';
import { personalDetails } from '../data/portfolio_data';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-12 h-1 bg-primary-700 rounded-full block"></span>
                        About Me
                    </h2>
                    <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                        <p>{personalDetails.about}</p>
                        <p>
                            My academic journey began with a B.Tech in Biotechnology, where I developed a deep appreciation for the biological mechanisms of life.
                            Transitioning to my Master's at IIT Jodhpur, I bridged the gap between wet-lab biology and computational science.
                        </p>
                        <p>
                            I am particularly interested in how AI can accelerate drug discovery processes and unravel complex systems biology questions.
                            My goal is to contribute to research that translates computational insights into tangible healthcare solutions.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Current Focus</h3>
                    <ul className="space-y-3">
                        {[
                            "Developing interpretability analysis methods for genomic deep learning models.",
                            "Exploring structure-based drug design using graph neural networks.",
                            "Collaborating on multi-omics data integration projects.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0"></div>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
