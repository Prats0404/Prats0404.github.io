"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ANIMATION } from '@/lib/constants';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  label,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = ANIMATION.counterDuration;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(easeOutQuad(percentage) * value);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, value]);

  return (
    <div ref={ref} className={`flex flex-col items-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-text-primary mb-1 gradient-text" style={{ fontFamily: 'var(--font-family-heading)' }}>
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-text-secondary uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
