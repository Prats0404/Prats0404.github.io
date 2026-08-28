"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiEaster() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase() === "b" || e.key.toLowerCase() === "a" ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_CODE[konamiIndex].toLowerCase() === "b" || KONAMI_CODE[konamiIndex].toLowerCase() === "a" 
          ? KONAMI_CODE[konamiIndex].toLowerCase() 
          : KONAMI_CODE[konamiIndex];

      if (key === expectedKey) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
          setShowToast(true);
          konamiIndex = 0;
          setTimeout(() => setShowToast(false), 3000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showToast && (
        <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center">
          {/* Toast */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            className="bg-[var(--color-bg-secondary)] border-2 border-[var(--color-accent-blue)] text-[var(--color-text-primary)] px-8 py-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] font-bold text-xl flex items-center gap-3"
            style={{ fontFamily: "var(--font-family-heading)" }}
          >
            <span className="text-3xl">🎮</span>
            You found the secret!
          </motion.div>

          {/* Confetti Particles */}
          {Array.from({ length: 30 }).map((_, i) => {
            const randomColor = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"][Math.floor(Math.random() * 5)];
            const randomX = (Math.random() - 0.5) * window.innerWidth;
            const randomY = (Math.random() - 1) * window.innerHeight;
            return (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{
                  x: randomX,
                  y: randomY,
                  scale: Math.random() * 1.5 + 0.5,
                  opacity: 0,
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-sm"
                style={{ backgroundColor: randomColor }}
              />
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
