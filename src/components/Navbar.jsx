import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolio_data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["about","About"],["experience","Experience"],["skills","Skills"],["projects","Research"],["education","Education"],["contact","Contact"]];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-cyan-700">Sandeep Kumar Kumawat </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(([id,label]) => <a key={id} href={`#${id}`} className="text-slate-600 hover:text-cyan-700">{label}</a>)}
          <a href={portfolioData.personal.cv} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">CV</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <div className="md:hidden bg-white border-t border-slate-200 px-5 py-4 space-y-3">
        {links.map(([id,label]) => <a onClick={() => setOpen(false)} key={id} href={`#${id}`} className="block text-slate-700">{label}</a>)}
      </div>}
    </nav>
  );
}
