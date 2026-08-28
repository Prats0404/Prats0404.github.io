"use client";

import React from 'react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = '' }: FlipCardProps) {
  return (
    <div className={`group relative perspective-[1000px] min-h-[300px] ${className}`}>
      <div className="w-full h-full absolute top-0 left-0 transition-transform duration-[600ms] preserve-3d group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          {front}
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
}
