"use client";

import React, { useState, useEffect } from 'react';
import { ANIMATION } from '@/lib/constants';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
}

export default function TypewriterText({ texts, className = '' }: TypewriterTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentFullText = texts[textIndex];

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, ANIMATION.typewriter.deleteSpeed);
      }
    } else {
      if (displayedText.length === currentFullText.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, ANIMATION.typewriter.pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, ANIMATION.typewriter.typeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayedText}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-[2px] animate-pulse" />
    </span>
  );
}
