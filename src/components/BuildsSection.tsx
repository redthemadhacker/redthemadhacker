import React, { useState } from 'react';
import { BUILDS_DATA, Project } from '../data/portfolioData';
import { PageNavBar, PageId } from './PageNavBar';
import { ExternalLink, Terminal, Layers, ArrowUpRight, Info } from 'lucide-react';

interface BuildsSectionProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageId) => void;
  onOpenTerminal: () => void;
  onOpenArchivedNotice?: (project: Project) => void;
}

export const BuildsSection: React.FC<BuildsSectionProps> = ({ 
  onSelectProject, 
  onNavigate, 
  onOpenTerminal,
  onOpenArchivedNotice,
}) => {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'apps' | 'security' | 'tools'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      const target = e.target as HTMLElement;
      if (target.closest('a')) {
        return;
      }
    }
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredBuilds = filter === 'all' 
    ? BUILDS_DATA 
    : BUILDS_DATA.filter((p) => p.category === filter);

  const filterTabs = [
    { key: 'all', label: 'All Builds' },
    { key: 'flagship', label: 'Flagship & Engines' },
    { key: 'apps', label: 'Client Web Apps' },
    { key: 'security', label: 'Cybersecurity & Labs' },
    { key: 'tools', label: 'Tools & Repos' },
  ] as const;

  return (
    <div className="w-full pb-20 animate-in fade-in duration-300">
      {/* Subpage Navigation Bar */}
      <PageNavBar
        currentPage="builds"
        onNavigate={onNavigate}
        onOpenTerminal={onOpenTerminal}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a2a] mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>LOG // 001 — ARCHITECTURE REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The Build Log
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
              Production systems, game engine proposals, client architectures, and hands-on cybersecurity laboratories engineered for scale and resilience.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-zinc-950 border border-zinc-800 rounded-lg">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 text-xs font-mono-code font-medium rounded transition-colors whitespace-nowrap ${
                  filter === tab.key
                    ? 'bg-[#ff1a2a] text-black font-bold shadow-[0_0_8px_rgba(255,26,42,0.3)]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tip banner */}
        <div className="mb-8 p-3 rounded-lg border border-zinc-800/80 bg-zinc-950/80 text-xs font-mono-code text-zinc-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ff1a2a]">⚡</span>
            <span>Click any project card to flip between visual summary and technical specs, or launch the live link directly.</span>
          </div>
          <span className="hidden sm:inline text-zinc-500">8 BUILDS ACTIVE</span>
        </div>

        {/* Builds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuilds.map((project) => {
            const isFlipped = flippedCards[project.id];

            return (
              <div
                key={project.id}
                onClick={(e) => toggleFlip(project.id, e)}
                className="group relative h-[470px] sm:h-[490px] cursor-pointer [perspective:1000px]"
              >
                <div
                  className={`w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl border border-zinc-800 bg-zinc-950/90 p-5 flex flex-col justify-between hover:border-[#ff1a2a]/60 hover:shadow-[0_0_20px_rgba(255,26,42,0.15)] transition-all">
                    
                    {/* Top Bar */}
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 font-mono-code text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#ff1a2a]" />
                          <span className="text-zinc-400 font-semibold">{project.categoryLabel}</span>
                        </div>
                        {project.badge && (
                          <span className="text-[#ff1a2a] text-[11px] font-bold">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#ff1a2a] transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono-code text-zinc-400 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Area */}
                    <div>
                      {/* Tech stack metadata */}
                      <div className="pt-3 border-t border-zinc-900 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono-code text-zinc-400">
                        {project.tags.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {idx < project.tags.length - 1 && (
                              <span aria-hidden="true" className="text-zinc-700">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Action buttons (Normalized line layout) */}
                      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-2">
                        {project.isArchived ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onOpenArchivedNotice) onOpenArchivedNotice(project);
                            }}
                            className="flex-1 h-9 px-3 text-center text-xs font-mono-code font-bold text-white bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 rounded transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer truncate"
                          >
                            <span>ACADEMIC ARCHIVE</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#ff1a2a] shrink-0" />
                          </button>
                        ) : project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 h-9 px-3 text-center text-xs font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap truncate"
                          >
                            <span className="truncate">
                              {project.id === 'phonixia-fund'
                                ? 'CONTRIBUTE TO FUND'
                                : project.id === 'all-nyte-all-byte' || project.category === 'tools'
                                ? 'LAUNCH LIVE'
                                : 'LAUNCH LIVE'}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                          </a>
                        ) : (
                          <div className="flex-1 h-9" />
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(project);
                          }}
                          className="h-9 px-3 shrink-0 text-xs font-mono-code text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                          title="Open Full Architectural Dossier"
                        >
                          <Info className="w-3.5 h-3.5 text-[#ff1a2a]" />
                          <span className="hidden sm:inline">DOSSIER</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(project.id);
                          }}
                          className="h-9 w-9 shrink-0 flex items-center justify-center text-xs font-mono-code text-zinc-400 hover:text-white hover:border-[#ff1a2a] bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded transition-all cursor-pointer shadow-sm active:scale-95"
                          title="Flip card to reveal architectural highlights"
                        >
                          <Layers className="w-4 h-4 text-[#ff1a2a]" />
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl border border-[#ff1a2a]/60 bg-[#0a0a0f] p-5 flex flex-col justify-between shadow-[0_0_25px_rgba(255,26,42,0.2)]">
                    
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 font-mono-code text-xs">
                        <span className="text-[#ff1a2a] font-bold">TECH_SPECS // ARCHITECTURE</span>
                        <span className="text-zinc-500">SYS_NODE</span>
                      </div>

                      <h4 className="mt-3 text-sm font-bold text-white font-mono-code">
                        Key Architectural Highlights:
                      </h4>

                      <ul className="mt-3 space-y-2 text-xs text-zinc-300 font-sans">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#ff1a2a] mt-0.5 font-bold">›</span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {project.metrics && (
                        <div className="mt-4 p-2 rounded bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono-code text-zinc-400 flex items-center justify-between">
                          <span>DEPLOYMENT STATUS:</span>
                          <span className="text-emerald-400 font-bold">{project.metrics}</span>
                        </div>
                      )}
                    </div>

                    {/* Back Actions */}
                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 h-9 px-3 text-center text-xs font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>OPEN SITE</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(project.id);
                        }}
                        className="h-9 px-3 text-xs font-mono-code text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded transition-all cursor-pointer flex items-center justify-center"
                      >
                        FLIP BACK ↺
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};