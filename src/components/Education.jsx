import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "../data/portfolio_data";

export default function Education() {
  return <SectionWrapper id="education" className="bg-white">
    <div className="grid md:grid-cols-[.8fr_1.2fr] gap-12">
      <div><p className="text-sm font-bold tracking-[.18em] text-cyan-700 uppercase">Education</p><h2 className="mt-2 text-3xl font-black text-slate-950">Academic background</h2></div>
      <div className="space-y-5">
        {portfolioData.education.map(e=><div key={e.degree} className="border-l-2 border-cyan-600 pl-5"><h3 className="font-bold text-lg text-slate-950">{e.degree}</h3><p className="text-slate-600 mt-1">{e.institution}</p><div className="flex gap-4 mt-2 text-sm text-slate-500"><span>{e.period}</span><span>{e.details}</span></div></div>)}
        <div className="pt-5 border-t border-slate-200"><p className="font-bold text-slate-900">Publication</p><p className="mt-2 text-sm text-slate-600 leading-relaxed">{portfolioData.publication}</p></div>
      </div>
    </div>
  </SectionWrapper>;
}
