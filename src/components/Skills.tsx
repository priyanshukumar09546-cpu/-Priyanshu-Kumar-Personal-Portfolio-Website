"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Terminal, Database, Brain, Globe, Cpu, Wrench } from "lucide-react";
import { skillsData } from "@/data/skills";

export function Skills() {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-5 h-5 text-amber-500" />;
      case "AI & Machine Learning":
        return <Brain className="w-5 h-5 text-amber-500" />;
      case "Frontend Development":
        return <Globe className="w-5 h-5 text-amber-500" />;
      case "Backend & Systems":
        return <Terminal className="w-5 h-5 text-amber-500" />;
      case "Databases & ORM":
        return <Database className="w-5 h-5 text-amber-500" />;
      case "DevOps & Developer Tools":
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case "Core Computer Science":
        return <Cpu className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <div className="mb-2">
            <span className="font-handwriting text-amber-500 dark:text-amber-400 text-2xl sm:text-3xl font-semibold -rotate-1 inline-block select-none">
              ~ Tools of the craft.
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white mb-4">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Technologies practiced and verified through real open-source repositories and production builds.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    {getIconForCategory(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-normal">
                  {group.description}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                        skill.featured
                          ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25 font-semibold"
                          : "bg-black/[0.03] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-black/[0.06] dark:border-white/[0.06]"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
