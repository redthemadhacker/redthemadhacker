import React, { useState, useEffect } from 'react';

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

  // Keep the exact file synced by the user from localStorage
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

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group transition-transform duration-300 ${className}`}
      style={{ width: size, height: size, maxWidth: '100%' }}
    >
      {/* Exact Photo Connection: Preserving the synced file */}
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
    </div>
  );
};
