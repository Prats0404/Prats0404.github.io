"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const sectionIds = NAV_LINKS.map(link => link.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: import("framer-motion").Variants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-bg-glass)] backdrop-blur-md border-b border-[var(--color-border-subtle)] py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="group" aria-label="Home">
            <span
              className="text-2xl font-bold tracking-tighter text-[var(--color-text-primary)] transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-accent-blue)] group-hover:to-[var(--color-accent-violet)]"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              PVS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--color-accent-blue)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent-blue)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <a
              href="/Prathvi_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-sm font-semibold text-[var(--color-text-primary)] hover:border-[var(--color-accent-blue)] transition-all"
            >
              Resume
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[var(--color-accent-blue)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-[var(--color-text-primary)] block absolute"
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[var(--color-text-primary)] block absolute"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[var(--color-text-primary)] block absolute"
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--color-bg-primary)]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl font-semibold">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.label} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <a
                  href="/Prathvi_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-violet)] text-white text-lg transition-transform active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
