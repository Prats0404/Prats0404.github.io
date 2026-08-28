"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!TESTIMONIALS || TESTIMONIALS.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Kind Words" />

        <div className="max-w-4xl mx-auto mt-16 relative min-h-[250px]">
          <div className="absolute top-0 left-0 text-6xl text-white/5 font-serif">&quot;</div>
          <div className="absolute bottom-12 right-0 text-6xl text-white/5 font-serif">&quot;</div>
          
          <div className="relative px-8 md:px-16 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-xl md:text-2xl lg:text-3xl italic text-[var(--color-text-primary)] leading-relaxed mb-8">
                  {TESTIMONIALS[currentIndex].quote}
                </p>
                <div className="font-bold text-[var(--color-text-primary)] text-lg">
                  {TESTIMONIALS[currentIndex].author}
                </div>
                <div className="text-sm text-[var(--color-accent-violet)] mt-1">
                  {TESTIMONIALS[currentIndex].role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-[var(--color-accent-blue)] w-6" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
