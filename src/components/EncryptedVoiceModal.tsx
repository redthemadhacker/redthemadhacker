import React, { useEffect } from 'react';
import { X, ShieldCheck, Phone, Lock, Send, Radio } from 'lucide-react';

interface EncryptedVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDispatch: () => void;
}

export const EncryptedVoiceModal: React.FC<EncryptedVoiceModalProps> = ({
  isOpen,
  onClose,
  onOpenDispatch,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleInitiateCall = () => {
    // Direct system dialer invocation without ever displaying plain digits in DOM
    // Obfuscated string decodes to 'tel:7066100225' at runtime to prevent scraping
    window.location.href = atob('dGVsOjcwNjYxMDAyMjU=');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#08080d] text-zinc-100 rounded-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(255,26,42,0.35)] border-2 border-[#ff1a2a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a2a] animate-pulse" />
            <span className="text-[#ff1a2a] font-bold">SECURE VOICE GATEWAY // ENCRYPTED</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors cursor-pointer"
            aria-label="Close voice modal"
          >
            <X className="w-5 h-5 text-[#ff1a2a]" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-4">
          <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 text-center space-y-2">
            <div className="inline-flex p-3 rounded-full bg-zinc-900 border border-[#ff1a2a]/40 text-[#ff1a2a]">
              <Lock className="w-6 h-6" />
            </div>
            <div className="font-mono-code text-xs text-zinc-400">CIPHER PROTOCOL: AES-256-SOCKET</div>
            <div className="font-mono-code text-sm sm:text-base font-bold text-white tracking-widest text-emerald-400">
              [ENCRYPTED_VOICE_LINE_LIVE]
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
            Direct operational telephony line is cryptographically shielded from public scrapers, bots, and automated robocall engines. You can initiate a direct cellular call securely or transmit an encrypted written dispatch.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleInitiateCall}
              className="w-full sm:flex-1 py-3 px-4 text-xs font-mono-code font-bold text-black bg-[#ff1a2a] hover:bg-[#ff3342] rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,26,42,0.35)] cursor-pointer active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>CONNECT DIRECT CALL</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenDispatch();
              }}
              className="w-full sm:flex-1 py-3 px-4 text-xs font-mono-code font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-700 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4 text-[#ff1a2a]" />
              <span>SEND DISPATCH</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};