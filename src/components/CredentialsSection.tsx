import React, { useState } from 'react';
import { CREDENTIALS_DATA, SKILLS_MATRIX } from '../data/portfolioData';
import { PageNavBar, PageId } from './PageNavBar';
import { Award, BookOpen, CheckCircle2, ShieldCheck, Terminal, ChevronRight } from 'lucide-react';

interface CredentialsSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenTerminal: () => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({
  onNavigate,
  onOpenTerminal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'certification' | 'education'>('all');

  const filteredCredentials = activeTab === 'all'
    ? CREDENTIALS_DATA
    : CREDENTIALS_DATA.filter((c) => c.type === activeTab || (activeTab === 'education' && c.type === 'specialization'));

  return (
    <div className="w-full pb-20 animate-in fade-in duration-300">
      {/* Subpage Navigation Bar */}
      <PageNavBar
        currentPage="training"
        onNavigate={onNavigate}
        onOpenTerminal={onOpenTerminal}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#ff1a2a] mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LOG // 002 — ACCREDITATION &amp; TRAINING REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Training Archive
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
              Industry certifications, full-stack software engineering immersive programs, cybersecurity credentials, and specialized engineering coursework.
            </p>
          </div>

          {/* Segmented Filter */}
          <div className="flex items-center gap-1 p-1 bg-zinc-950 border border-zinc-800 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-mono-code rounded transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#ff1a2a] text-black font-bold shadow-[0_0_8px_rgba(255,26,42,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab('certification')}
              className={`px-3 py-1.5 text-xs font-mono-code rounded transition-colors ${
                activeTab === 'certification'
                  ? 'bg-[#ff1a2a] text-black font-bold shadow-[0_0_8px_rgba(255,26,42,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 text-xs font-mono-code rounded transition-colors ${
                activeTab === 'education'
                  ? 'bg-[#ff1a2a] text-black font-bold shadow-[0_0_8px_rgba(255,26,42,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Education &amp; Specialization
            </button>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCredentials.map((cred, index) => (
            <div
              key={cred.id}
              className="rounded-xl border border-zinc-800/90 bg-zinc-950/70 p-6 flex flex-col justify-between hover:border-[#ff1a2a]/50 hover:shadow-[0_0_20px_rgba(255,26,42,0.12)] transition-all group"
            >
              <div>
                {/* Entry bar */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 font-mono-code text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff1a2a]" />
                    <span className="text-zinc-400">LOG // 00{index + 1}</span>
                  </div>
                  <span
                    className={`text-[11px] font-semibold ${
                      cred.status.includes('Renewal')
                        ? 'text-amber-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    {cred.status}
                  </span>
                </div>

                {/* Issuer */}
                <div className="mt-3 text-xs font-mono-code text-[#ff1a2a] font-semibold">
                  {cred.issuer}
                </div>

                {/* Title */}
                <h3 className="mt-1 text-lg font-bold text-white group-hover:text-[#ff1a2a] transition-colors leading-snug">
                  {cred.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {cred.description}
                </p>
              </div>

              {/* Skills unboxed with separators */}
              <div className="mt-6 pt-4 border-t border-zinc-900">
                <div className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
                  Competency Focus:
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-code text-zinc-300">
                  {cred.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span>{skill}</span>
                      {sIdx < cred.skills.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Competencies / Skills Matrix */}
        <div className="mt-16 pt-12 border-t border-zinc-900">
          <div className="mb-8">
            <h3 className="text-xl font-bold font-mono-code text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#ff1a2a]" />
              <span>CORE TECHNICAL COMPETENCY MATRIX</span>
            </h3>
            <p className="mt-1 text-xs font-mono-code text-zinc-400">
              Verified domain mastery spanning enterprise security operations, software development, and Linux systems administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_MATRIX.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/60"
              >
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-800 font-mono-code text-xs text-white font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#ff1a2a]" />
                  <span>{group.category}</span>
                </div>
                <ul className="space-y-2 text-xs font-mono-code text-zinc-300">
                  {group.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#ff1a2a] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
