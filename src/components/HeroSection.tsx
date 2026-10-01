import React from 'react';
import { HackerLogo } from './HackerLogo';
import { BIO_DATA } from '../data/portfolioData';
import { ArrowDown, ExternalLink, Terminal, Shield, Cpu, Code2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-zinc-900">
      {/* Subtle reticle background lines */}
      <div className="absolute inset-0 cyber-grid-bg opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff1a2a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-zinc-400">
              <span className="text-[#ff1a2a] font-semibold">AMARI JAMES</span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>SE · CySA · LA</span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>THE MAD HACKER</span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Full-Stack Software Engineer &amp; Cybersecurity Analyst.
            </h1>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans max-w-2xl">
              {BIO_DATA.shortBio}
            </p>

            {/* Specialized Competencies (unboxed metadata with separators) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono-code text-zinc-400 border-t border-zinc-800/80">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <Shield className="w-4 h-4 text-[#ff1a2a]" />
                <span>Threat Detection &amp; SIEM</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <Code2 className="w-4 h-4 text-[#ff1a2a]" />
                <span>Full-Stack Web Architecture</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <Cpu className="w-4 h-4 text-[#ff1a2a]" />
                <span>Linux Administration</span>
              </div>
            </div>

            {/* Primary Action Button Cluster */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#builds"
                className="px-5 py-2.5 text-sm font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all shadow-[0_0_15px_rgba(255,26,42,0.35)] flex items-center gap-2 active:scale-95"
              >
                <span>[ EXPLORE BUILDS ]</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#credentials"
                className="px-5 py-2.5 text-sm font-mono-code font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-[#ff1a2a] rounded transition-all flex items-center gap-2 active:scale-95"
              >
                <span>TRAINING ARCHIVE</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-4 py-2.5 text-sm font-mono-code font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/80 rounded transition-all flex items-center gap-2 border border-transparent hover:border-zinc-700 active:scale-95"
              >
                <Terminal className="w-4 h-4 text-[#ff1a2a]" />
                <span>INTERACTIVE CLI</span>
              </button>
            </div>

            {/* Quick Proof Metrics Row (adjacent to claims) */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-zinc-900 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono-code text-white tabular-nums">
                  2021<span className="text-[#ff1a2a] text-sm">+</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono-code">Est. Operations</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono-code text-white tabular-nums">
                  8<span className="text-[#ff1a2a] text-sm">+</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono-code">Active Builds &amp; Labs</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono-code text-white tabular-nums">
                  100<span className="text-[#ff1a2a] text-sm">%</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono-code">Live Production SLAs</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Emblem */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Terminal Window Frame framing the Emblem */}
            <div className="w-full max-w-[420px] bg-black/90 border-2 border-[#ff1a2a]/60 rounded-xl p-5 shadow-[0_0_25px_rgba(255,26,42,0.25)] relative group hover:border-[#ff1a2a] transition-all duration-300">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 font-mono-code text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="text-[#ff1a2a] font-semibold tracking-wider">
                  SYS_ROOT // EMBLEM_NODE
                </span>
                <span className="text-zinc-500">2026.01</span>
              </div>

              {/* Center Emblem Visual */}
              <div className="flex items-center justify-center py-2">
                <HackerLogo size={320} className="w-full max-w-[300px] h-auto aspect-square" />
              </div>

              {/* Window Footer Status */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono-code text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  HUB STATUS: ACTIVE
                </span>
                <a
                  href="/hacker.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#ff1a2a] flex items-center gap-1 transition-colors"
                >
                  <span>hacker.jpeg</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Sub-caption below emblem card */}
            <p className="mt-4 text-xs font-mono-code text-zinc-400 text-center tracking-wider">
              OFFICIAL HUB // AMARI JAMES (REDTHEMADHACKER)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
