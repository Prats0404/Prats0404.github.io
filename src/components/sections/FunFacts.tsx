"use client";

import { motion } from "framer-motion";
import { FUN_FACTS } from "@/lib/data";

export default function FunFacts() {
  return (
    <section className="py-12 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-medium text-[var(--color-text-muted)] mb-8" style={{ fontFamily: 'var(--font-family-heading)' }}>
          Beyond the Code
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {FUN_FACTS.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.2)" }}
              className="glass-card px-5 py-3 rounded-full flex items-center gap-3 border border-[var(--color-border-subtle)] cursor-default transition-all duration-300"
            >
              <span className="text-2xl">{fact.emoji}</span>
              <span className="text-sm font-medium text-[var(--color-text-secondary)]">{fact.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
