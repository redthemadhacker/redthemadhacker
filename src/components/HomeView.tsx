import React from 'react';
import { HackerLogo } from './HackerLogo';
import { BIO_DATA } from '../data/portfolioData';
import { PageId } from './PageNavBar';
import { ExternalLink, Terminal, Shield, ArrowUpRight, Cpu, Code2 } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenTerminal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenTerminal }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start py-8 px-4 sm:px-6">
      
      {/* Primary Cyber Window (Terminal Frame) */}
      <div className="w-full max-w-3xl bg-black/92 border-2 border-[#ff1a2a] rounded-xl p-5 sm:p-8 shadow-[0_0_30px_rgba(255,26,42,0.35)] relative animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Window Bar */}
        <div className="flex items-center justify-between border-b border-[#ff1a2a]/60 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a] shadow-[0_0_6px_#ff1a2a]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a]/30" />
          </div>
          <span className="font-mono-code text-xs sm:text-sm text-[#ff1a2a] font-bold tracking-wider">
            SYS_ROOT // MAIN_TERMINAL
          </span>
          <span className="text-[11px] font-mono-code text-zinc-500 hidden sm:inline">
            PORTFOLIO // 2026
          </span>
        </div>

        {/* Home Container */}
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Frame Container - directly renders exact logo */}
          <div className="flex items-center justify-center mb-6">
            <HackerLogo size={320} />
          </div>

          {/* Title & Call-Sign */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#ff1a2a] font-mono-code mb-2 cyber-glow-text">
            Mad Dev Red
          </h1>

          <div className="text-xs sm:text-sm font-mono-code text-zinc-300 font-semibold mb-4">
            Amari James, SE, CySA, LA.
          </div>

          {/* Revamped Short Description */}
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans max-w-2xl text-balance mb-6">
            Certified Software Engineer, Cybersecurity Analyst, and Linux Administrator with experience supporting enterprise IT operations, endpoint security, and software-driven workflow automation. Skilled in incident triage, system diagnostics, secure device management, and developing lightweight engineering solutions to improve operational efficiency. Currently completing renewal training for CompTIA CySA+ and LPIC‑1.
          </p>

          {/* Quick Credential Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono-code text-zinc-400 py-3 border-y border-zinc-800/80 w-full max-w-2xl">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Shield className="w-3.5 h-3.5 text-[#ff1a2a]" />
              CompTIA CySA+ (Renewal Track)
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Cpu className="w-3.5 h-3.5 text-[#ff1a2a]" />
              LPIC-1 Linux (Renewal Track)
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Code2 className="w-3.5 h-3.5 text-[#ff1a2a]" />
              GA Full Stack SE
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Shield className="w-3.5 h-3.5 text-[#ff1a2a]" />
              Per Scholas Cybersecurity Analyst
            </span>
          </div>

        </div>
      </div>

      {/* Cyber Navigation Door Matrix (The 4 Distinct Pages) */}
      <div className="w-full max-w-3xl mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono-code">
        
        <button
          onClick={() => onNavigate('builds')}
          className="group relative overflow-hidden bg-black/90 border-2 border-[#ff1a2a] text-[#ff1a2a] hover:bg-[#ff1a2a] hover:text-black py-4 px-6 text-lg sm:text-xl font-bold rounded-lg shadow-[0_0_15px_rgba(255,26,42,0.25)] hover:shadow-[0_0_25px_#ff1a2a] transition-all flex items-center justify-between active:scale-[0.98]"
        >
          <span>[ Build Log ]</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={() => onNavigate('training')}
          className="group relative overflow-hidden bg-black/90 border-2 border-[#ff1a2a] text-[#ff1a2a] hover:bg-[#ff1a2a] hover:text-black py-4 px-6 text-lg sm:text-xl font-bold rounded-lg shadow-[0_0_15px_rgba(255,26,42,0.25)] hover:shadow-[0_0_25px_#ff1a2a] transition-all flex items-center justify-between active:scale-[0.98]"
        >
          <span>[ Training Archive ]</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={() => onNavigate('experience')}
          className="group relative overflow-hidden bg-black/90 border-2 border-[#ff1a2a] text-[#ff1a2a] hover:bg-[#ff1a2a] hover:text-black py-4 px-6 text-lg sm:text-xl font-bold rounded-lg shadow-[0_0_15px_rgba(255,26,42,0.25)] hover:shadow-[0_0_25px_#ff1a2a] transition-all flex items-center justify-between active:scale-[0.98]"
        >
          <span>[ Field Experience ]</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={() => onNavigate('connection')}
          className="group relative overflow-hidden bg-black/90 border-2 border-[#ff1a2a] text-[#ff1a2a] hover:bg-[#ff1a2a] hover:text-black py-4 px-6 text-lg sm:text-xl font-bold rounded-lg shadow-[0_0_15px_rgba(255,26,42,0.25)] hover:shadow-[0_0_25px_#ff1a2a] transition-all flex items-center justify-between active:scale-[0.98]"
        >
          <span>[ Connection Ports ]</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      {/* Featured Flagship Ventures Spotlight (Direct Links Bar) */}
      <div className="w-full max-w-3xl mt-8 p-5 rounded-xl border border-zinc-800 bg-zinc-950/80 font-mono-code text-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
          <span className="text-[#ff1a2a] font-bold">ACTIVE FLAGSHIP VENTURES &amp; ENGINE BUILDS</span>
          <button
            onClick={onOpenTerminal}
            className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-[#ff1a2a]" />
            <span>LAUNCH CLI</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="https://www.phonixia.fund/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#ff1a2a] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">SOLO FOUNDER PROPOSAL</div>
              <div className="text-white font-bold text-sm mt-0.5 group-hover:text-[#ff1a2a] transition-colors">
                Phonixia Fund
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 font-sans line-clamp-2">
                Multiverse Adventure Engine system codex &amp; proposal platform.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[#ff1a2a] text-[11px] font-bold">
              <span>MAKE CONTRIBUTION</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          <a
            href="https://phonixia-7c9c93ef0d42.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#ff1a2a] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">PLAYABLE BETA STAGING</div>
              <div className="text-white font-bold text-sm mt-0.5 group-hover:text-[#ff1a2a] transition-colors">
                Phonixia Beta
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 font-sans line-clamp-2">
                Live interactive voxel sandbox MMORPG deployment on Heroku.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[#ff1a2a] text-[11px] font-bold">
              <span>LAUNCH BETA</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          <a
            href="https://github.com/redthemadhacker"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#ff1a2a] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">BYTE LAB VENTURE</div>
              <div className="text-white font-bold text-sm mt-0.5 group-hover:text-[#ff1a2a] transition-colors">
                All Nyte All Byte
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 font-sans line-clamp-2">
                Bespoke cybersecurity &amp; custom software engineering hub staging.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[#ff1a2a] text-[11px] font-bold">
              <span>VIEW REPO</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </div>
      </div>

    </div>
  );
};
