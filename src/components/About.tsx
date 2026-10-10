"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Building2, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Priyanshu</span>
          </div>
          <div className="mb-2">
            <span className="font-handwriting text-amber-500 dark:text-amber-400 text-xl sm:text-2xl -rotate-1 inline-block">
              ~ engineering with real user focus
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-zinc-900 dark:text-white mb-4">
            {profileData.aboutHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl p-6 sm:p-8 border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md shadow-sm"
          >
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
              <span>Engineering End-to-End AI Products</span>
            </h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              {profileData.aboutNarrative}
            </p>

            {/* Academic pill group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04]">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">Undergraduate</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    B.Tech CSE &bull; Class of 2028
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04]">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">Institution</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    ABES Engineering College
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04]">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">Affiliation</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    AKTU (Dr. A.P.J. Abdul Kalam TU)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04]">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">Location</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    Ghaziabad, UP, India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {profileData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-sm group"
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-3xl font-extrabold text-amber-500 dark:text-amber-400 group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                    Verified Metric
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
