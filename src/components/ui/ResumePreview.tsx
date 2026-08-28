"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumePreview({ isOpen, onClose }: ResumePreviewProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border-subtle)] shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Resume Preview</h3>
              <div className="flex gap-2">
                <a
                  href="/Prathvi_resume.pdf"
                  download
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-blue)] text-[var(--color-text-primary)] transition-colors"
                >
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                  aria-label="Close preview"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-gray-100 dark:bg-gray-900">
              <iframe
                src="/Prathvi_resume.pdf#view=FitH"
                title="Resume Preview"
                className="w-full h-full border-none"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
