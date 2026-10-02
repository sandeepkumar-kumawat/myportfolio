import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "../data/portfolio_data";

export default function Skills() {
  return <SectionWrapper id="skills" className="bg-white">
    <div className="mb-10"><p className="text-sm font-bold tracking-[.18em] text-cyan-700 uppercase">Toolkit</p><h2 className="mt-2 text-3xl font-black text-slate-950">Technical skills</h2></div>
    <div className="grid md:grid-cols-2 gap-5">
      {portfolioData.skills.map((group) => { const Icon=group.icon; return <div key={group.category} className="rounded-2xl border border-slate-200 p-6 hover:border-cyan-200 transition">
        <div className="flex items-center gap-3"><div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700"><Icon size={21}/></div><h3 className="font-bold text-lg">{group.category}</h3></div>
        <div className="mt-5 flex flex-wrap gap-2">{group.items.map(s=><span key={s} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700">{s}</span>)}</div>
      </div>})}
    </div>
  </SectionWrapper>;
}
