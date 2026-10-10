"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Filter, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [filter, setFilter] = useState<"all" | "featured" | "ai" | "fullstack">("all");

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "featured") return p.featured;
    if (filter === "ai") return p.category.includes("AI") || p.category.includes("Deep Learning");
    if (filter === "fullstack") return p.category.includes("Full-Stack") || p.category.includes("Startup") || p.category.includes("EdTech");
    return true;
  });

  const featuredPair = projectsData.filter((p) => p.id === "mentornearby" || p.id === "scamshield-ai");
  const secondaryProjects = projectsData.filter((p) => p.id !== "mentornearby" && p.id !== "scamshield-ai");

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Production Software &amp; AI Systems
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Real applications with verified GitHub source code, tested architectures, and honest deployment statuses.
          </p>

          {/* Filter Pills */}
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
              All Projects ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("featured")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "featured"
                  ? "bg-amber-400 text-zinc-950 font-semibold shadow-sm"
                  : "bg-black/[0.04] dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Flagship (3)
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
              AI &amp; Computer Vision (3)
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
              Full-Stack Platforms (2)
            </button>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        {filter === "all" ? (
          <div className="space-y-12">
            {/* Prominently Featured: MentorNearby & ScamShield AI */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Flagship Products
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPair.map((p, idx) => (
                  <ProjectCard key={p.id} project={p} priority={idx === 0} />
                ))}
              </div>
            </div>

            {/* Additional Engineering Work */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Applied Machine Learning &amp; Academic Platforms
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {secondaryProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
