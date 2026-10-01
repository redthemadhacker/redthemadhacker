import React from 'react';
import { BIO_DATA } from '../data/portfolioData';
import { PageId } from './PageNavBar';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-[#060608] py-10 text-xs font-mono-code text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <button
            onClick={() => onNavigate('home')}
            className="text-white font-bold text-sm tracking-wider hover:text-[#ff1a2a] transition-colors cursor-pointer"
          >
            {BIO_DATA.callsign.toUpperCase()}
          </button>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span>Amari James (redthemadhacker)</span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span>EST. 2021</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-5 text-zinc-400">
          <button onClick={() => onNavigate('builds')} className="hover:text-white transition-colors cursor-pointer">
            Build Log
          </button>
          <button onClick={() => onNavigate('training')} className="hover:text-white transition-colors cursor-pointer">
            Training Archive
          </button>
          <button onClick={() => onNavigate('experience')} className="hover:text-white transition-colors cursor-pointer">
            Experience
          </button>
          <button onClick={() => onNavigate('connection')} className="hover:text-white transition-colors cursor-pointer">
            Connection Ports
          </button>
        </div>

        {/* Scroll Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-zinc-800 bg-zinc-950 hover:border-[#ff1a2a] hover:text-[#ff1a2a] transition-all text-zinc-400 cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
