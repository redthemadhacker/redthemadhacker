import React, { useState, useEffect, useRef } from 'react';
import { Upload, Check, RefreshCw } from 'lucide-react';

interface HackerLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const HackerLogo: React.FC<HackerLogoProps> = ({
  className = '',
  size = 320,
}) => {
  const [imageSrc, setImageSrc] = useState<string>('/hacker.jpeg');
  const [isHovered, setIsHovered] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom logo from localStorage if user synced their file from disk
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mad_hacker_logo_data');
      if (saved) {
        setImageSrc(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setImageSrc(result);
        try {
          localStorage.setItem('mad_hacker_logo_data', result);
        } catch {
          // ignore
        }
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsHovered(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImageSrc(result);
          try {
            localStorage.setItem('mad_hacker_logo_data', result);
          } catch {
            // ignore
          }
          setUploadSuccess(true);
          setTimeout(() => setUploadSuccess(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('mad_hacker_logo_data');
    } catch {
      // ignore
    }
    setImageSrc('/hacker.jpeg?v=' + Date.now());
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => {
        e.preventDefault();
        setIsHovered(true);
      }}
      onDragLeave={() => setIsHovered(false)}
      onDrop={handleDrop}
      className={`relative inline-flex items-center justify-center select-none group transition-transform duration-300 ${className}`}
      style={{ width: size, height: size, maxWidth: '100%' }}
    >
      {/* Exact Photo Connection: /hacker.jpeg matching image.png */}
      <img
        src={imageSrc}
        alt="The Mad Hacker - Portfolio 2026"
        className="w-full h-full object-contain rounded-2xl transition-all duration-300"
        onError={() => {
          if (imageSrc !== '/hacker.svg') {
            setImageSrc('/hacker.svg');
          }
        }}
      />

      {/* Hidden file input for direct file sync from CPU */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/jpg,image/webp"
        className="hidden"
      />

      {/* Controls visible on hover */}
      {isHovered && (
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 animate-in fade-in duration-150">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-1.5 rounded-md bg-black/90 border border-[#ff1a2a] text-[#ff1a2a] hover:bg-[#ff1a2a] hover:text-black transition-all shadow-md cursor-pointer flex items-center gap-1 text-[10px] font-mono-code"
            title="Load exact hacker.jpeg directly from your computer"
          >
            <Upload className="w-3 h-3" />
            <span>SYNC FROM CPU</span>
          </button>

          {localStorage.getItem('mad_hacker_logo_data') && (
            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 rounded-md bg-black/90 border border-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Reset to default logo"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          )}
        </div>
      )}

      {/* Success notification badge */}
      {uploadSuccess && (
        <div className="absolute top-3 z-30 px-3 py-1 rounded bg-black/95 border border-emerald-500 text-[10px] font-mono-code text-emerald-400 shadow-xl flex items-center gap-1.5 animate-in fade-in">
          <Check className="w-3 h-3 text-emerald-400" />
          <span>Connected exact hacker.jpeg from CPU!</span>
        </div>
      )}
    </div>
  );
};
