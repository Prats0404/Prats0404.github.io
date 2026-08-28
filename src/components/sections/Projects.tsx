"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/interactive/TiltCard";
import ProjectModal from "@/components/ui/ProjectModal";
import type { Project } from "@/types";

const FILTERS = ["All", "Python", "Android", "Web", "ML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    if (activeFilter === "All") return true;
    return p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(t.toLowerCase()));
  });

  return (
    <section id="projects" className="py-24 relative z-10 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Projects" />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f 
                  ? "bg-[var(--color-accent-blue)] text-white shadow-lg shadow-blue-500/25" 
                  : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <TiltCard>
                  <div className="relative group bg-[var(--color-bg-card)] rounded-2xl p-6 border border-[var(--color-border-subtle)] h-full min-h-[300px] flex flex-col overflow-hidden">
                    <div className="text-5xl font-black text-white/5 absolute top-4 right-4 pointer-events-none select-none" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 mt-2 pr-12 z-10 line-clamp-2">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4 z-10">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-text-secondary)]">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-text-secondary)]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 mb-6 z-10 flex-grow">
                      {project.description}
                    </p>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-sm">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-2 bg-white text-black font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        View Details &rarr;
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
