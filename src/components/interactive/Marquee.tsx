"use client";

import React from 'react';

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = '' }: MarqueeProps) {
  return (
    <div 
      className={`relative flex overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-4">
        {[...items, ...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="flex items-center text-text-muted uppercase tracking-widest text-sm mx-4 font-semibold"
          >
            {item}
            <span className="mx-4 text-accent-blue">·</span>
          </span>
        ))}
      </div>
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-4 absolute top-0" style={{ animationDelay: '-15s' }}>
        {/* We can rely on a single duplicated container if standard CSS animation handles it, or use two absolute. 
            Standard approach with Tailwind animate-marquee is single long flex row duplicated. */}
        {/* Simplifying to rely on the single row long enough for infinite effect if set correctly. */}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
