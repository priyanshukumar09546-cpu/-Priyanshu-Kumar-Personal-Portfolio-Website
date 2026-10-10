"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Sparkles, ExternalLink } from "lucide-react";
import { certificationsData } from "@/data/certifications";
import { activitiesData } from "@/data/activities";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Programs &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
            Certifications &amp; Activities
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Technical learning programs, enterprise job simulations, and campus leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certifications & Simulations (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Certifications &amp; Practical Simulations
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md shadow-sm hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                        {cert.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1 leading-snug">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      {cert.issuer}
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activities & Community (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Campus Activities &amp; Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {activitiesData.map((act, idx) => (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md shadow-sm hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                      {act.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {act.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                    {act.role}
                  </h4>
                  <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                    {act.organization}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {act.description}
                  </p>
                </motion.div>
              ))}

              {/* Truth In Data Notice Card */}
              <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <div className="flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400 mb-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>Audited Credential Policy</span>
                </div>
                <p>
                  In accordance with strict portfolio verification standards, training programs and job simulations are clearly distinguished from professional licensures. Unverified competitive rankings are withheld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
