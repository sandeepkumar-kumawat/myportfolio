import { Dna } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "../data/portfolio_data";

export default function About() {
  return <SectionWrapper id="about" className="bg-white">
    <div className="grid md:grid-cols-[1.2fr_.8fr] gap-12 items-start">
      <div>
        <p className="text-sm font-bold tracking-[.18em] text-cyan-700 uppercase">About</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-950">Biology first. Computation where it adds value.</h2>
        <p className="mt-6 text-slate-600 text-lg leading-relaxed">{portfolioData.about.bio}</p>
      </div>
      <div className="rounded-2xl bg-slate-950 text-white p-7">
        <Dna className="text-cyan-300 mb-5" size={28}/>
        <h3 className="font-bold text-xl">Current research focus</h3>
        <ul className="mt-5 space-y-4">
          {portfolioData.about.focus.map((x) => <li key={x} className="flex gap-3 text-slate-300"><span className="text-cyan-300">•</span>{x}</li>)}
        </ul>
      </div>
    </div>
  </SectionWrapper>;
}
