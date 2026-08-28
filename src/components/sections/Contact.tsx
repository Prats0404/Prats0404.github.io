"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/interactive/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-accent-blue)]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <SectionHeading title="Let's Connect" />

        <motion.p 
          className="text-lg text-[var(--color-text-secondary)] mt-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Got an idea, an opportunity, or just want to say hi? I&apos;m always open to Data Science / AI roles, collaborations, and tech conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 flex justify-center"
        >
          <MagneticButton variant="filled" href={`mailto:${CONTACT.email}`} className="px-10 py-4 text-lg">
            Say Hello 👋
          </MagneticButton>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 border-y border-[var(--color-border-subtle)] py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{CONTACT.email}</span>
          </a>
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{CONTACT.phone}</span>
          </a>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {CONTACT.socials.map((social) => (
            <a 
              key={social.platform} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-black hover:bg-white transition-all duration-300 font-medium text-sm flex items-center gap-2"
            >
              {social.platform}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
