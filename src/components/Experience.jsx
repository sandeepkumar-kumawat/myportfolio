import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "../data/portfolio_data";

export default function Experience() {
  return <SectionWrapper id="experience" className="bg-slate-50">
    <div className="mb-10"><p className="text-sm font-bold tracking-[.18em] text-cyan-700 uppercase">Experience</p><h2 className="mt-2 text-3xl font-black text-slate-950">Research & laboratory experience</h2></div>
    <div className="space-y-5">
      {portfolioData.experience.map((e) => <article key={e.title} className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div><h3 className="text-xl font-bold text-slate-950">{e.title}</h3><p className="text-cyan-700 font-medium mt-1">{e.organization}</p></div>
          <span className="text-sm text-slate-500">{e.period}</span>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">{e.description}</p>
      </article>)}
    </div>
  </SectionWrapper>;
}
