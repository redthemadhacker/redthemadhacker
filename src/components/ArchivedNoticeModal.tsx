import React, { useEffect } from 'react';
import { X, ExternalLink, Github, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ArchivedNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  projectTitle?: string;
  githubUrl?: string;
}

export const ArchivedNoticeModal: React.FC<ArchivedNoticeModalProps> = ({
  isOpen,
  onClose,
  title = "SORRY THIS PAGE IS NO LONGER AVAILABLE...",
  projectTitle = "HZHQ Audio Frequency Hub",
  githubUrl = "https://github.com/redthemadhacker",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white text-zinc-900 rounded-xl p-8 sm:p-10 shadow-[0_0_50px_rgba(255,26,42,0.4)] border-2 border-[#ff1a2a] text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-500 hover:text-black hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close archive notification"
        >
          <X className="w-5 h-5 text-[#ff1a2a]" />
        </button>

        {/* Big Bold Headline matching image.png */}
        <div className="space-y-1 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-950 font-sans uppercase leading-tight pt-2">
          <div>SORRY</div>
          <div>THIS PAGE IS</div>
          <div>NO LONGER</div>
          <div>AVAILABLE...</div>
        </div>

        {/* Red Framed Academic Project Disclaimer Box */}
        <div className="mt-8 p-4 rounded-lg border-2 border-[#ff1a2a] bg-rose-50/50 text-left">
          <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-mono-code font-medium">
            <strong className="text-zinc-950 font-bold">Disclaimer:</strong> The application showcased ({projectTitle}) was produced as an academic project for Software Engineering certification. It was fully functional at the time of completion; however, due to course hosting limitations, the live deployment and API connection are no longer available.
          </p>
        </div>

        {/* Action Controls */}
        <div className="mt-8 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono-code font-bold text-white bg-zinc-950 hover:bg-black rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Github className="w-4 h-4 text-[#ff1a2a]" />
            <span>VIEW REPOSITORY ARCHIVE</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono-code font-semibold text-zinc-700 hover:text-black bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 rounded-lg transition-all cursor-pointer"
          >
            CLOSE ARCHIVE NOTICE
          </button>
        </div>
      </div>
    </div>
  );
};
