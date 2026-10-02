import { Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "../data/portfolio_data";

export default function Projects() {
  return <SectionWrapper id="projects" className="bg-slate-50">
    <div className="mb-10"><p className="text-sm font-bold tracking-[.18em] text-cyan-700 uppercase">Selected work</p><h2 className="mt-2 text-3xl font-black text-slate-950">Research projects</h2><p className="mt-3 text-slate-600 max-w-2xl">A selection of work spanning transcriptomics, computational disease biology and experimental microbiology.</p></div>
    <div className="grid lg:grid-cols-3 gap-5">
      {portfolioData.projects.map((p, i)=><article key={p.title} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col">
        <div className="text-xs font-bold uppercase tracking-wider text-cyan-700">{String(i+1).padStart(2,"0")} · {p.type}</div>
        <h3 className="mt-4 text-xl font-bold text-slate-950">{p.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 flex-1">{p.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">{t}</span>)}</div>
      </article>)}
    </div>
  </SectionWrapper>;
}
