import React, { useState } from 'react';
import { PORTS_DATA } from '../data/portfolioData';
import { PageNavBar, PageId } from './PageNavBar';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Shield, 
  Terminal, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send,
  Radio,
  Lock
} from 'lucide-react';

interface ConnectionPortsSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenTerminal: () => void;
  onOpenVoiceModal?: () => void;
}

export const ConnectionPortsSection: React.FC<ConnectionPortsSectionProps> = ({
  onNavigate,
  onOpenTerminal,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrSubject: '',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'phone': return <Phone className="w-5 h-5 text-[#ff1a2a]" />;
      case 'mail': return <Mail className="w-5 h-5 text-[#ff1a2a]" />;
      case 'linkedin': return <Linkedin className="w-5 h-5 text-[#ff1a2a]" />;
      case 'github': return <Github className="w-5 h-5 text-[#ff1a2a]" />;
      case 'shield': return <Shield className="w-5 h-5 text-[#ff1a2a]" />;
      default: return <Terminal className="w-5 h-5 text-[#ff1a2a]" />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger direct mailto with populated fields (Patched to redthemadhacker)
    const subject = encodeURIComponent(`[INQUIRY] from ${formData.name}: ${formData.roleOrSubject || 'Technical Engagement'}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nSubject: ${formData.roleOrSubject}\n\nMessage:\n${formData.message}\n\nSent via The Mad Hacker Portfolio Hub`
    );
    window.location.href = `mailto:redthemadhacker@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="w-full pb-20 animate-in fade-in duration-300">
      {/* Subpage Navigation Bar */}
      <PageNavBar
        currentPage="connection"
        onNavigate={onNavigate}
        onOpenTerminal={onOpenTerminal}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ff1a2a] mb-2 px-3 py-1 rounded bg-[#ff1a2a]/10 border border-[#ff1a2a]/30">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>COMMUNICATION ARRAY // CONNECTION PORTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Plug In. Choose a Port to Connect.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base font-sans">
            Direct communication sockets open for software development engagements, cybersecurity operations, and technical recruiter inquiries.
          </p>
        </div>

        {/* 6 High-Tech Port Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTS_DATA.map((port) => {
            const isCopied = copiedId === port.id;

            return (
              <div
                key={port.id}
                className="relative rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 flex flex-col justify-between hover:border-[#ff1a2a]/70 hover:shadow-[0_0_25px_rgba(255,26,42,0.18)] transition-all group"
              >
                <div>
                  {/* Port socket header */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 font-mono-code text-xs">
                    <span className="text-[#ff1a2a] font-bold tracking-wider">{port.portNumber}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500 text-[10px]">{port.protocol}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
                    </div>
                  </div>

                  {/* Icon & Label */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-[#ff1a2a] group-hover:bg-[#ff1a2a]/10 transition-colors">
                      {getIcon(port.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#ff1a2a] transition-colors">
                        {port.label}
                      </h3>
                      <div className="text-xs font-mono-code text-zinc-400">
                        {port.name}
                      </div>
                    </div>
                  </div>

                  {/* Target Value Box */}
                  <div className="mt-4 p-3 rounded bg-zinc-900/90 border border-zinc-800 font-mono-code text-xs text-zinc-300 flex items-center justify-between break-all">
                    <span className="truncate pr-2">
                      {port.isEncrypted ? '••••••••••' : port.value}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(port.id, port.value)}
                      className="p-1 text-zinc-400 hover:text-white shrink-0 transition-colors"
                      title="Copy to clipboard"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-sans">
                    {port.description}
                  </p>
                </div>

                {/* Port Action Button */}
                <div className="mt-5 pt-4 border-t border-zinc-800/80">
                  {port.isEncrypted ? (
                    <button
                      type="button"
                      onClick={() => {
                        try {
                          // Decrypts the base64 encoded link on the fly to bypass bots
                          window.location.href = atob(port.href);
                        } catch (err) {
                          console.error("Decryption failed. Ensure href is a valid Base64 string.");
                        }
                      }}
                      className="w-full py-2.5 px-4 text-xs font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(255,26,42,0.3)] active:scale-95 cursor-pointer"
                    >
                      <Lock className="w-4 h-4" />
                      <span>DECRYPT & CONNECT</span>
                    </button>
                  ) : (
                    <a
                      href={port.href}
                      target={port.href.startsWith('http') ? '_blank' : undefined}
                      rel={port.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-full py-2.5 px-4 text-xs font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(255,26,42,0.3)] active:scale-95"
                    >
                      <span>PLUG INTO PORT</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Dispatch Transmission Console */}
        <div className="mt-16 max-w-3xl mx-auto rounded-xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800 font-mono-code text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a]" />
              <span className="text-white font-bold">TERMINAL DISPATCH PROTOCOL</span>
            </div>
            <span className="text-zinc-500">TARGET: REDTHEMADHACKER@GMAIL.COM</span>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-zinc-400 mb-1.5">
                  IDENTIFIER / NAME <span className="text-[#ff1a2a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor / Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-[#ff1a2a] rounded text-sm text-white placeholder-zinc-600 font-sans focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-zinc-400 mb-1.5">
                  RETURN ADDRESS / EMAIL <span className="text-[#ff1a2a]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-[#ff1a2a] rounded text-sm text-white placeholder-zinc-600 font-sans focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-code text-zinc-400 mb-1.5">
                SUBJECT / POSITION OR SCOPE
              </label>
              <input
                type="text"
                placeholder="Software Engineering Role / Security Audit / Freelance Build"
                value={formData.roleOrSubject}
                onChange={(e) => setFormData({ ...formData, roleOrSubject: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-[#ff1a2a] rounded text-sm text-white placeholder-zinc-600 font-sans focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-code text-zinc-400 mb-1.5">
                TRANSMISSION MESSAGE <span className="text-[#ff1a2a]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Outline project parameters, timelines, role details, or collaboration ideas..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-[#ff1a2a] rounded text-sm text-white placeholder-zinc-600 font-sans focus:outline-none transition-colors resize-y"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono-code text-zinc-400">
                🔒 Direct client-side dispatch straight to primary inbox.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded transition-all shadow-[0_0_15px_rgba(255,26,42,0.35)] flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>TRANSMIT DISPATCH</span>
              </button>
            </div>

            {formSent && (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded text-xs font-mono-code text-emerald-300 text-center">
                ✔ Dispatch client triggered! Check your default email app to confirm transmission.
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};