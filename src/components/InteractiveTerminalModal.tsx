import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { BIO_DATA, BUILDS_DATA, CREDENTIALS_DATA } from '../data/portfolioData';
import { PageId } from './PageNavBar';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: PageId) => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'sys_init --auth',
      output: (
        <div className="text-zinc-400 space-y-1 font-mono-code text-xs">
          <p className="text-emerald-400">✔ SYSTEM INITIALIZED // SESSION AUTHENTICATED</p>
          <p className="text-zinc-300">
            Welcome to the interactive console of <span className="text-[#ff1a2a] font-bold">The Mad Hacker</span> (Amari James, SE, CySA, LA).
          </p>
          <p className="text-zinc-500">
            Type <span className="text-white font-bold">help</span> or click command buttons below to query the database.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        resultNode = (
          <div className="text-xs font-mono-code space-y-1 text-zinc-300">
            <p className="text-[#ff1a2a] font-bold">AVAILABLE COMMAND PROTOCOLS:</p>
            <p><span className="text-white font-bold">bio</span> - View professional background &amp; credentials</p>
            <p><span className="text-white font-bold">builds</span> - List active production systems and project URLs</p>
            <p><span className="text-white font-bold">certs</span> - Display certification and education archive</p>
            <p><span className="text-white font-bold">phonixia</span> - Query Phonixia Multiverse Adventure Engine specs</p>
            <p><span className="text-white font-bold">contact</span> - Show connection ports &amp; direct communication sockets</p>
            <p><span className="text-white font-bold">clear</span> - Clear terminal session output</p>
          </div>
        );
        break;

      case 'bio':
        resultNode = (
          <div className="text-xs font-mono-code space-y-1.5 text-zinc-300">
            <p className="text-white font-bold">{BIO_DATA.name} | {BIO_DATA.callsign}</p>
            <p className="text-[#ff1a2a]">{BIO_DATA.title}</p>
            <p className="text-zinc-400 mt-1">{BIO_DATA.shortBio}</p>
            <p className="text-zinc-500">Status: {BIO_DATA.status} | {BIO_DATA.location}</p>
          </div>
        );
        break;

      case 'builds':
        resultNode = (
          <div className="text-xs font-mono-code space-y-2 text-zinc-300">
            <p className="text-[#ff1a2a] font-bold">ACTIVE BUILDS &amp; ARCHITECTURES:</p>
            {BUILDS_DATA.map((b) => (
              <div key={b.id} className="border-l-2 border-[#ff1a2a]/60 pl-2">
                <p className="text-white font-bold">{b.title}</p>
                <p className="text-zinc-400">{b.subtitle} · [{b.tags.join(', ')}]</p>
                {b.liveUrl && (
                  <a href={b.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#ff1a2a] hover:underline">
                    &gt; {b.liveUrl}
                  </a>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
        resultNode = (
          <div className="text-xs font-mono-code space-y-2 text-zinc-300">
            <p className="text-[#ff1a2a] font-bold">TRAINING &amp; CREDENTIALS ARCHIVE:</p>
            {CREDENTIALS_DATA.map((c) => (
              <div key={c.id} className="border-l-2 border-zinc-700 pl-2">
                <span className="text-white font-semibold">{c.title}</span>
                <span className="text-zinc-500"> — {c.issuer}</span>
                <span className="text-emerald-400 ml-2">[{c.status}]</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'phonixia':
        resultNode = (
          <div className="text-xs font-mono-code space-y-2 text-zinc-300">
            <p className="text-white font-bold">PHONIXIA: The Multiverse Adventure Engine</p>
            <p className="text-zinc-400">
              Solo-developed open-world voxel sandbox MMORPG dismantling industrial schooling paradigms with emergent gameplay, spatial sandbox nodes, and sovereign economic architecture.
            </p>
            <p className="text-[#ff1a2a]">
              Fund Codex: <a href="https://www.phonixia.fund/" target="_blank" rel="noopener noreferrer" className="underline">https://www.phonixia.fund/</a>
            </p>
            <p className="text-[#ff1a2a]">
              Playable Beta Engine: <a href="https://phonixia-7c9c93ef0d42.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="underline">https://phonixia-7c9c93ef0d42.herokuapp.com/</a>
            </p>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="text-xs font-mono-code space-y-1.5 text-zinc-300">
            <p className="text-[#ff1a2a] font-bold">OPEN COMMUNICATION PORTS:</p>
            <p>Phone: <a href="tel:9856451621" className="text-white hover:underline">+1 (985) 645-1621</a></p>
            <p>Email: <a href="mailto:marbusiness98@gmail.com" className="text-white hover:underline">marbusiness98@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/amari-james" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">linkedin.com/in/amari-james</a></p>
            <p>GitHub: <a href="https://github.com/redthemadhacker" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">github.com/redthemadhacker</a></p>
            <p>CyLab: <a href="https://learn.cylabacademy.org/users/redthemadhacker" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">learn.cylabacademy.org/users/redthemadhacker</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        resultNode = (
          <div className="text-xs font-mono-code text-rose-400">
            command not found: "{trimmed}". Type <span className="text-white font-bold">help</span> to list available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: resultNode }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#07070a] border-2 border-[#ff1a2a] rounded-xl shadow-[0_0_35px_rgba(255,26,42,0.35)] flex flex-col h-[560px] overflow-hidden">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-800 font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#ff1a2a]" />
            <span className="text-white font-bold">SYS_ROOT // INTERACTIVE COMMAND CONSOLE</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-5 h-5 text-[#ff1a2a]" />
          </button>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-zinc-900/60 border-b border-zinc-800/80 flex items-center gap-2 overflow-x-auto text-[11px] font-mono-code">
          <span className="text-zinc-500 whitespace-nowrap">QUICK EXEC:</span>
          {['help', 'bio', 'builds', 'certs', 'phonixia', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-[#ff1a2a] hover:text-black text-zinc-300 transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono-code text-xs">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-[#ff1a2a]">
                <span className="text-zinc-500">madhacker@node:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-[#ff1a2a] font-mono-code text-xs font-bold whitespace-nowrap">
            madhacker@node:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'bio', 'builds', 'certs')..."
            className="flex-1 bg-transparent text-xs font-mono-code text-white focus:outline-none placeholder-zinc-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-[#ff1a2a] hover:text-black rounded transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
