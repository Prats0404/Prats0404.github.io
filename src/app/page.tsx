"use client";

import dynamic from "next/dynamic";

// ─── Layout Components ───
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

// ─── Section Components ───
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import GitHubStats from "@/components/sections/GitHubStats";
import FunFacts from "@/components/sections/FunFacts";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";

// ─── Dynamic imports for non-critical interactive elements ───
const CustomCursor = dynamic(
  () => import("@/components/layout/CustomCursor"),
  { ssr: false }
);
const KonamiEaster = dynamic(
  () => import("@/components/ui/KonamiEaster"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* Custom cursor (desktop only, loaded client-side) */}
      <CustomCursor />

      {/* Konami code easter egg */}
      <KonamiEaster />

      {/* Sticky navbar with scroll progress */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />

        {/* Glow separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <About />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <TechStack />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <Experience />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <Projects />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <Education />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <GitHubStats />

        <FunFacts />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <Testimonials />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <Blog />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border-medium)] to-transparent" />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />
    </>
  );
}
