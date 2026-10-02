import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio_data";

export default function Hero() {
  const p = portfolioData.personal;
  return (
    <section id="home" className="min-h-[88vh] pt-28 pb-16 flex items-center bg-gradient-to-br from-slate-50 via-white to-cyan-50/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:gap-14 items-center">
          <div className="max-w-4xl order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800 text-sm font-semibold border border-cyan-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-600" /> M.Tech Researcher · IIT Jodhpur
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950 leading-[0.98]">{p.name}</h1>
            <p className="mt-6 text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed">{p.tagline}</p>
            <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">{p.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800">View Research <ArrowRight size={18}/></a>
              <a href={p.cv} download className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:border-slate-300"><Download size={18}/> Download CV</a>
              <a href={`mailto:${p.email}`} aria-label="Email" className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-700"><Mail size={19}/></a>
              <a href={p.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-700"><Linkedin size={19}/></a>
              <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-700"><Github size={19}/></a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[290px] md:h-[340px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-200 to-slate-200 rotate-3" />
              <img src={p.photo} alt="Sandeep Kumar Kumawat" className="relative w-full h-full object-cover object-center rounded-[2rem] shadow-xl border-4 border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
