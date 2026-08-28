"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillChip from "@/components/ui/SkillChip";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].id);

  const activeSkills = SKILL_CATEGORIES.find(c => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 relative z-10 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Tech Stack" />

        <div className="mt-12 flex flex-col items-center">
          {/* Tab Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 border-b border-[var(--color-border-subtle)] pb-4 w-full max-w-4xl">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 text-sm md:text-base transition-colors ${
                    isActive ? "text-[var(--color-text-primary)] font-medium" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-[-16px] left-0 right-0 h-0.5 bg-[var(--color-accent-violet)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="w-full max-w-4xl min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {activeSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    <SkillChip name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
