import React, { useState } from 'react';
import { Terminal, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PageId } from './PageNavBar';

interface NavbarProps {
  onOpenTerminal: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { name: string; page: PageId }[] = [
    { name: 'Build Log', page: 'builds' },
    { name: 'Training Archive', page: 'training' },
    { name: 'Experience', page: 'experience' },
    { name: 'Connection Ports', page: 'connection' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#ff1a2a]/20 bg-[#070709]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-[#ff1a2a] transition-colors group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a] animate-pulse shadow-[0_0_8px_#ff1a2a]" />
          <span className="font-mono-code font-bold tracking-wider">THE MAD HACKER</span>
        </button>

        {/* Zone 2: Clean 4-6 nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-mono-code font-medium text-zinc-400">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.name}
                onClick={() => onNavigate(link.page)}
                className={`transition-colors py-1 relative hover:text-white cursor-pointer ${
                  isActive ? 'text-[#ff1a2a] font-semibold' : ''
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff1a2a] shadow-[0_0_6px_#ff1a2a]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono-code font-medium text-zinc-300 bg-zinc-900/90 border border-zinc-700/80 hover:border-[#ff1a2a] hover:text-[#ff1a2a] rounded transition-all shadow-sm active:scale-95 cursor-pointer"
            title="Open Interactive Cyber Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-[#ff1a2a]" />
            <span className="hidden sm:inline">SYS_SHELL</span>
          </button>

          <button
            onClick={() => onNavigate('connection')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code font-semibold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all shadow-[0_0_12px_rgba(255,26,42,0.4)] active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>PLUG IN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white border border-zinc-800 rounded bg-zinc-950 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff1a2a]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#070709] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                onNavigate(link.page);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm font-mono-code rounded transition-colors ${
                currentPage === link.page
                  ? 'bg-zinc-900 text-[#ff1a2a] font-bold'
                  : 'text-zinc-300 hover:bg-zinc-900 hover:text-[#ff1a2a]'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono-code text-zinc-500 px-3">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#ff1a2a]" />
              SEC_PROTOCOL // v2026.1
            </span>
            <span>PORT 443 LIVE</span>
          </div>
        </div>
      )}
    </header>
  );
};
