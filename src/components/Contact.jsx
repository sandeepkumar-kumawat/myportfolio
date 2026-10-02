import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { portfolioData } from "../data/portfolio_data";

export default function Contact() {
  const p=portfolioData.personal;
  return <SectionWrapper id="contact" className="bg-slate-950 text-white">
    <div className="grid md:grid-cols-2 gap-10 items-end">
      <div><p className="text-sm font-bold tracking-[.18em] text-cyan-300 uppercase">Contact</p><h2 className="mt-2 text-4xl font-black">Let’s connect.</h2><p className="mt-5 text-slate-300 leading-relaxed">Open to research internships, computational biology opportunities, collaborations and scientific discussions.</p></div>
      <div className="space-y-4">
        <a href={`mailto:${p.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10"><Mail className="text-cyan-300"/><span>{p.email}</span></a>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5"><Phone className="text-cyan-300"/><span>{p.phone}</span></div>
        <div className="flex gap-3"><a href={p.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10"><Linkedin/></a><a href={p.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10"><Github/></a></div>
      </div>
    </div>
  </SectionWrapper>;
}
