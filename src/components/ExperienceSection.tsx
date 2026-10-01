import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { PageNavBar, PageId } from './PageNavBar';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';

interface ExperienceSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenTerminal: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onNavigate,
  onOpenTerminal,
}) => {
  return (
    <div className="w-full pb-20 animate-in fade-in duration-300">
      {/* Subpage Navigation Bar */}
      <PageNavBar
        currentPage="experience"
        onNavigate={onNavigate}
        onOpenTerminal={onOpenTerminal}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a2a] mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>LOG // 003 — FIELD OPERATIONS &amp; SERVICE RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Enterprise IT service desk operations, endpoint security administration, technical incident triage, and automated operational programming.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-950/70 hover:border-[#ff1a2a]/40 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-zinc-800/80 gap-3">
                <div className="flex items-start md:items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[#ff1a2a] group-hover:border-[#ff1a2a] transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans group-hover:text-[#ff1a2a] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-mono-code text-zinc-400">
                      <span className="text-white font-semibold">{item.company}</span>
                      <span aria-hidden="true" className="mx-2 text-zinc-600">·</span>
                      <span>{item.type}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono-code text-zinc-400 text-left md:text-right">
                  <div className="text-[#ff1a2a] font-bold">NODE // 0{idx + 1}</div>
                  <div>{item.period}</div>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-sans">
                {item.summary}
              </p>

              {/* Responsibilities */}
              <div className="mt-5 space-y-2">
                <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider">
                  Key Directives &amp; Execution:
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300 font-sans">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#ff1a2a] font-bold mt-0.5">›</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges as clean unboxed text */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-code text-zinc-400">
                <span className="text-zinc-500">SYSTEMS &amp; TOOLING:</span>
                {item.technologies.map((tech, tIdx) => (
                  <React.Fragment key={tech}>
                    <span className="text-zinc-300">{tech}</span>
                    {tIdx < item.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
