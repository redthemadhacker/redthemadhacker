import React from 'react';
import { Terminal, ArrowLeft } from 'lucide-react';

export type PageId = 'home' | 'builds' | 'training' | 'experience' | 'connection';

interface PageNavBarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenTerminal: () => void;
}

export const PageNavBar: React.FC<PageNavBarProps> = ({
  currentPage,
  onNavigate,
  onOpenTerminal,
}) => {
  const pages: { id: PageId; label: string }[] = [
    { id: 'builds', label: 'Build Log' },
    { id: 'training', label: 'Training Archive' },
    { id: 'experience', label: 'Field Experience' },
    { id: 'connection', label: 'Connection Ports' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-6 pb-2">
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono-code">
        {/* Back to Home Button */}
        <button
          onClick={() => onNavigate('home')}
          className={`px-3 sm:px-4 py-2 rounded-lg border transition-all flex items-center gap-1.5 active:scale-95 ${
            currentPage === 'home'
              ? 'bg-[#ff1a2a] text-black font-bold border-[#ff1a2a] shadow-[0_0_12px_rgba(255,26,42,0.4)]'
              : 'bg-black/90 text-[#ff1a2a] border-[#ff1a2a]/60 hover:bg-[#ff1a2a] hover:text-black hover:border-[#ff1a2a] hover:shadow-[0_0_15px_rgba(255,26,42,0.4)]'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>[ Main Terminal ]</span>
        </button>

        {/* Other Page Buttons */}
        {pages.map((p) => {
          const isActive = currentPage === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onNavigate(p.id)}
              className={`px-3 sm:px-4 py-2 rounded-lg border transition-all active:scale-95 ${
                isActive
                  ? 'bg-[#ff1a2a] text-black font-bold border-[#ff1a2a] shadow-[0_0_12px_rgba(255,26,42,0.5)]'
                  : 'bg-black/90 text-[#ff1a2a] border-[#ff1a2a]/60 hover:bg-[#ff1a2a] hover:text-black hover:border-[#ff1a2a] hover:shadow-[0_0_15px_rgba(255,26,42,0.4)]'
              }`}
            >
              [ {p.label} ]
            </button>
          );
        })}

        {/* CLI Button */}
        <button
          onClick={onOpenTerminal}
          className="px-3 sm:px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all flex items-center gap-1.5 active:scale-95"
          title="Open Cyber Command Console"
        >
          <Terminal className="w-3.5 h-3.5 text-[#ff1a2a]" />
          <span>SYS_CLI</span>
        </button>
      </div>
    </div>
  );
};
