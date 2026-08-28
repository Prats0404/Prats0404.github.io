"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO } from "@/lib/data";
import ParticleBackground from "@/components/interactive/ParticleBackground";
import MorphAvatar from "@/components/interactive/MorphAvatar";
import TypewriterText from "@/components/interactive/TypewriterText";
import MagneticButton from "@/components/interactive/MagneticButton";
import Marquee from "@/components/interactive/Marquee";

const containerVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <motion.div
            className="w-full md:w-[60%] flex flex-col items-start gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
              Hello, I&apos;m
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold shimmer-text pb-2"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              {HERO.name}
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl md:text-2xl text-[var(--color-text-muted)] h-8">
              <TypewriterText texts={HERO.roles} />
            </motion.div>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mt-4">
              {HERO.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-2 mt-2 text-sm text-[var(--color-text-muted)]">
              <span>📍</span>
              <span>{HERO.location}</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
              <MagneticButton variant="filled" href="#projects">
                View My Work
              </MagneticButton>
              <MagneticButton variant="outline" href="#contact">
                Get in Touch
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full md:w-[40%] flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <MorphAvatar photoSrc="/me.jpg" avatarSrc="/avatar.png" size={320} />
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <motion.div 
        className="w-full absolute bottom-12 left-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="mb-8">
          <Marquee items={HERO.marqueeItems} />
        </div>
        
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Scroll</span>
          <svg className="w-5 h-5 text-[var(--color-text-muted)] animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
