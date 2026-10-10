"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <div className="mb-2">
            <span className="font-handwriting text-amber-500 dark:text-amber-400 text-2xl sm:text-3xl -rotate-1 inline-block select-none">
              ~ Demonstrated execution.
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-zinc-900 dark:text-white mb-4">
            Experience &amp; Internships
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Startup leadership, industry internships, and certified technical training.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#090a0f] border-2 border-amber-500 shadow-glow-subtle flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md shadow-sm hover:border-amber-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight mt-0.5">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.05]">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-5">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technology chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-black/[0.03] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-300 border border-black/[0.06] dark:border-white/[0.06]"
                    >
                      {skill}
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
