"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphAvatarProps {
  photoSrc: string;
  avatarSrc: string;
  size?: number;
  className?: string;
}

export default function MorphAvatar({
  photoSrc,
  avatarSrc,
  size = 200,
  className = '',
}: MorphAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('hasSeenAvatarHint');
    if (!hasSeenHint) {
      setShowHint(true);
    }
  }, []);

  const handleInteraction = () => {
    setIsHovered(!isHovered);
    if (showHint) {
      setShowHint(false);
      localStorage.setItem('hasSeenAvatarHint', 'true');
    }
  };

  return (
    <div 
      className={`relative animate-float ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleInteraction}
      role="img"
      aria-label="Morphing Avatar"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-1 rounded-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-[conic-gradient(from_0deg,var(--color-accent-blue),var(--color-accent-violet),var(--color-accent-teal),var(--color-accent-blue))] animate-spin-slow opacity-75"
        />
        <div className="absolute inset-[3px] bg-bg-primary rounded-full" />
      </div>

      <div className="relative w-full h-full rounded-full overflow-hidden z-10 border border-border-subtle bg-bg-secondary">
        <AnimatePresence initial={false}>
          {/* Photo */}
          <motion.div
            key="photo"
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'blur(4px)' : 'blur(0px)',
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src={photoSrc}
              alt="Real Photo"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>

          {/* Avatar */}
          <motion.div
            key="avatar"
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src={avatarSrc}
              alt="Animated Avatar"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-bg-card border border-border-subtle px-3 py-1 rounded-full text-sm text-text-secondary glass-card lg:hidden"
        >
          Tap to see me code 👨‍💻
        </motion.div>
      )}
    </div>
  );
}
