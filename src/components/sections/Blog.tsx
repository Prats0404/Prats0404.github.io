"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Blog() {
  const placeholders = [1, 2, 3];

  return (
    <section className="py-24 relative z-10 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Writings" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {placeholders.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-[var(--color-border-subtle)] relative overflow-hidden group min-h-[250px] flex flex-col justify-center items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-[var(--color-text-muted)] mb-4 border border-white/10">
                Coming Soon
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                Article Title Coming Soon
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                I am currently working on this article. Stay tuned for updates and insights!
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
