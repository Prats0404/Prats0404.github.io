"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillChipProps {
  name: string;
  level: "strong" | "proficient" | "learning";
  className?: string;
}

export default function SkillChip({ name, level, className = "" }: SkillChipProps) {
  const getDotColor = () => {
    switch (level) {
      case "strong": return "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]";
      case "proficient": return "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]";
      case "learning": return "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]";
      default: return "bg-gray-500";
    }
  };

  return (
    <motion.div
      layout
      layoutId={`skill-${name}`}
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-xs md:text-sm font-semibold uppercase tracking-wider hover:border-[var(--color-border-medium)] hover:bg-[var(--color-bg-secondary)] transition-colors cursor-default ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${getDotColor()}`} />
      {name}
    </motion.div>
  );
}
