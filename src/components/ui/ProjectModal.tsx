"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:justify-end md:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl h-[90vh] md:h-full bg-[var(--color-bg-primary)] rounded-2xl md:rounded-l-2xl md:rounded-r-none border border-[var(--color-border-subtle)] shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]">
              <h3
                className="text-2xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-family-heading)" }}
              >
                {project.title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[var(--color-bg-card)] transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {project.image && (
                <div className="w-full h-64 rounded-xl overflow-hidden relative border border-[var(--color-border-subtle)]">
                  {/* Assuming image is a static path. In real use case, replace with Image from next/image */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)]">Description</h4>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{project.description}</p>
              </div>

              {project.details?.problem && (
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)]">Problem & Approach</h4>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{project.details?.problem}</p>
                </div>
              )}

              {project.details?.outcome && (
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)]">Outcome</h4>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{project.details?.outcome}</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] flex gap-4">
              {project.details?.github && (
                <a
                  href={project.details?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-[var(--color-border-medium)] bg-[var(--color-bg-card)] hover:bg-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.details?.live && (
                <a
                  href={project.details?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-violet)] text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
