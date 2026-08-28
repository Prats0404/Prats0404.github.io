"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'filled' | 'outline';
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'filled',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Max displacement is 8px
    const moveX = (clientX - centerX) * 0.2;
    const moveY = (clientY - centerY) * 0.2;
    
    x.set(Math.max(-8, Math.min(8, moveX)));
    y.set(Math.max(-8, Math.min(8, moveY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = `relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 ${className}`;
  const variantClasses = variant === 'filled' 
    ? 'bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]'
    : 'bg-transparent text-white border-[2px] border-accent-blue/50 hover:border-accent-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]';

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-full">
        {content}
      </a>
    );
  }

  return (
    <button className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-full">
      {content}
    </button>
  );
}
