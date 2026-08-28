"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Experience" />

        <div ref={containerRef} className="mt-16 relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-8 top-0 bottom-0 w-[1px] bg-white/10">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-[var(--color-accent-blue)] origin-top"
              style={{ scaleY: lineHeight, height: '100%' }}
            />
          </div>

          {/* Items */}
          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[9px] md:left-[26px] top-1.5 w-3 h-3 rounded-full border-2 border-white bg-[var(--color-bg-primary)] z-10 transition-colors duration-300 hover:bg-[var(--color-accent-blue)]" />

                <div className="glass-card p-6 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="bg-white/5 px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] rounded-full border border-white/10">
                      {exp.dateRange}
                    </div>
                    {exp.rating && (
                      <div className="text-[10px] font-bold tracking-widest text-[var(--color-accent-teal)] bg-[var(--color-accent-teal)]/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                        {exp.rating}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-sm md:text-base text-[var(--color-accent-blue)] mb-6 font-medium">
                    {exp.company} {exp.companyDetail && <span className="text-[var(--color-text-muted)] font-normal">| {exp.companyDetail}</span>}
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-4 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-violet)]/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
