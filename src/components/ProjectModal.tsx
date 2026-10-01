import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#09090e] border-2 border-[#ff1a2a]/60 rounded-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(255,26,42,0.3)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a] animate-pulse" />
            <span className="text-[#ff1a2a] font-bold">PROJECT DOSSIER // {project.categoryLabel.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors"
            aria-label="Close project dossier"
          >
            <X className="w-5 h-5 text-[#ff1a2a]" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-5">
          <div>
            <h3 className="text-2xl font-bold text-white font-sans">
              {project.title}
            </h3>
            <p className="text-sm font-mono-code text-[#ff1a2a] mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 text-sm text-zinc-300 font-sans leading-relaxed">
            {project.longDescription || project.description}
          </div>

          {/* Key Architectural Highlights */}
          <div>
            <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#ff1a2a]" />
              <span>Architectural Specifications:</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-sans">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 bg-zinc-900/50 p-2.5 rounded border border-zinc-850">
                  <span className="text-[#ff1a2a] font-bold">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Unboxed Metadata */}
          <div className="pt-2">
            <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
              Technology Stack:
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-code text-zinc-300">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-white">{tag}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Live Action Bar */}
          <div className="pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono-code text-zinc-500">
              STATUS: {project.metrics || 'OPERATIONAL'}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-mono-code text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-[#ff1a2a] rounded transition-all flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-xs font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,26,42,0.4)]"
                >
                  <span>LAUNCH BUILD</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
