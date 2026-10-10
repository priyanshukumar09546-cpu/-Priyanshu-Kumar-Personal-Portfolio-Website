"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar, BookOpen, Sparkles } from "lucide-react";
import { educationData } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Education &amp; Qualifications
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Rigorous engineering education and strong foundational academic records.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-7 rounded-2xl border bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-amber-500/40 hover:shadow-glow-subtle ${
                idx === 0
                  ? "md:col-span-3 border-amber-500/30 dark:border-amber-400/20 bg-gradient-to-br from-white via-white to-amber-500/[0.02] dark:from-surface-dark dark:via-surface-dark dark:to-amber-500/[0.03]"
                  : "border-black/[0.08] dark:border-white/[0.08]"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </span>
                    {edu.score && (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        Score: {edu.score}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  {edu.institution}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mb-4">
                  <span>{edu.boardOrAffiliation}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>

              {edu.highlights.length > 0 && (
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
