"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-gray-200 dark:bg-gray-800">
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-violet)] origin-left"
        style={{ scaleX: progress / 100 }}
      />
    </div>
  );
}
