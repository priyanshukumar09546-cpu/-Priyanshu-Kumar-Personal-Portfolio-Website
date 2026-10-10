"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2 } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [filter, setFilter] = useState<"all" | "flagship" | "ai" | "fullstack">("all");

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "flagship") return p.featured;
    if (filter === "ai") return p.category.includes("AI") || p.category.includes("Deep Learning") || p.category.includes("Tracing") || p.category.includes("Operations");
    if (filter === "fullstack") return p.category.includes("Full-Stack") || p.category.includes("Startup") || p.category.includes("EdTech") || p.category.includes("Tracing");
    return true;
  });

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>

          <div className="mb-2">
            <span className="font-handwriting text-amber-500 dark:text-amber-400 text-2xl sm:text-3xl -rotate-1 inline-block select-none">
              ~ Ideas into reality.
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-zinc-900 dark:text-white mb-4">
            Production Software &amp; AI Systems
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Explore 6 end-to-end applications spanning AI/ML engineering, compiler tracing, multimodal fraud security, and production edtech marketplaces.
          </p>

          {/* Quick Filter Tags (Defaults to ALL 6) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-amber-400 text-zinc-950 font-semibold shadow-sm"
                  : "bg-black/[0.04] dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              All Projects (6)
            </button>
            <button
              type="button"
              onClick={() => setFilter("flagship")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "flagship"
                  ? "bg-amber-400 text-zinc-950 font-semibold shadow-sm"
                  : "bg-black/[0.04] dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Flagship (4)
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "ai"
                  ? "bg-amber-400 text-zinc-950 font-semibold shadow-sm"
                  : "bg-black/[0.04] dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              AI &amp; Deep Learning (4)
            </button>
            <button
              type="button"
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "fullstack"
                  ? "bg-amber-400 text-zinc-950 font-semibold shadow-sm"
                  : "bg-black/[0.04] dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Full-Stack &amp; Systems (3)
            </button>
          </div>
        </div>

        {/* Responsive Grid: 3-col Desktop, 2-col Tablet, 1-col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col h-full"
            >
              <ProjectCard project={project} priority={idx < 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
