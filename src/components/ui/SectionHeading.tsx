"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      <h2
        className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-[var(--color-text-primary)]"
        style={{ fontFamily: "var(--font-family-heading)" }}
      >
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-[var(--color-accent-blue)] mt-4 mb-6 rounded-full"
      />
      {subtitle && (
        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
