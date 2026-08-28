"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/interactive/AnimatedCounter";
import MagneticButton from "@/components/interactive/MagneticButton";

export default function About() {
  const [currentExploreIndex, setCurrentExploreIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExploreIndex((prev) => (prev + 1) % ABOUT.currentlyExploring.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderParagraph = (text: string, highlights: string[]) => {
    let parts: React.ReactNode[] = [text];
    highlights.forEach((highlight) => {
      const newParts: React.ReactNode[] = [];
      parts.forEach((part) => {
        if (typeof part === "string") {
          const split = part.split(highlight);
          split.forEach((s, i) => {
            newParts.push(s);
            if (i < split.length - 1) {
              newParts.push(
                <span key={`${highlight}-${i}`} className="text-[var(--color-accent-blue)] font-medium">
                  {highlight}
                </span>
              );
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    return <>{parts}</>;
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" />

        <div className="flex flex-col md:flex-row gap-16 items-start mt-12">
          {/* Left Column */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden group border border-[var(--color-border-subtle)]">
              <Image
                src="/me.jpg"
                alt="Prathvi"
                fill
                unoptimized
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {ABOUT.stats.map((stat, idx) => (
                <AnimatedCounter key={idx} value={stat.value} suffix={stat.suffix} label={stat.label} className="glass-card p-4 rounded-xl w-full" />
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="w-full md:w-2/3 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {ABOUT.paragraphs.map((p, idx) => (
                <p key={idx}>{renderParagraph(p.text, p.highlights)}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between flex-wrap gap-6">
              <MagneticButton variant="outline" href="/Prathvi_resume.pdf">
                Download Resume
              </MagneticButton>

              <div className="flex items-center gap-3 bg-[var(--color-bg-card)] px-4 py-2 rounded-full border border-[var(--color-border-subtle)]">
                <span className="text-sm text-[var(--color-text-muted)]">Currently Exploring:</span>
                <div className="relative h-5 overflow-hidden w-40">
                  <motion.div
                    key={currentExploreIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 text-sm font-medium text-[var(--color-accent-teal)]"
                  >
                    {ABOUT.currentlyExploring[currentExploreIndex]}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
