"use client";

import { motion } from "framer-motion";
import { EDUCATION_DATA, CERTIFICATIONS } from "@/lib/data";
import { ANIMATION } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import FlipCard from "@/components/interactive/FlipCard";

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education & Certifications" />

        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Left: Degree */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={ANIMATION.sectionReveal.initial}
            whileInView={ANIMATION.sectionReveal.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={ANIMATION.sectionReveal.transition}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-family-heading)' }}>Degree</h3>
            <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-[var(--color-accent-violet)] border-t border-r border-b border-[var(--color-border-subtle)] relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--color-accent-violet)]/10 rounded-full blur-2xl" />
                  <div className="text-sm text-[var(--color-accent-violet)] font-medium mb-1">{EDUCATION_DATA.period}</div>
                  <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{EDUCATION_DATA.degree}</h4>
                  <div className="text-[var(--color-text-secondary)] text-sm mb-4">{EDUCATION_DATA.institution}</div>
                  {EDUCATION_DATA.gpa && (
                    <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-[var(--color-text-primary)] border border-white/10">
                      CGPA: {EDUCATION_DATA.gpa}
                    </div>
                  )}
                </div>
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={ANIMATION.sectionReveal.initial}
            whileInView={ANIMATION.sectionReveal.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...ANIMATION.sectionReveal.transition, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-family-heading)' }}>Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <FlipCard 
                    front={
                      <div className="flex flex-col h-full justify-center items-center text-center p-6 bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-violet)] opacity-50" />
                        <h5 className="font-bold text-[var(--color-text-primary)] text-lg mb-2">{cert.title}</h5>
                        <p className="text-[var(--color-text-secondary)] text-sm">{cert.issuer}</p>
                      </div>
                    }
                    back={
                      <div className="flex flex-col h-full justify-center items-center text-center p-6 bg-gradient-to-br from-[var(--color-accent-blue)]/20 to-[var(--color-accent-violet)]/20 border border-[var(--color-border-medium)] rounded-xl backdrop-blur-md">
                        <div className="text-3xl mb-2 font-bold text-white tracking-widest opacity-30">{cert.year}</div>
                        <p className="text-white font-medium">Completed in {cert.year}</p>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}