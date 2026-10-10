"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, ArrowRight, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40 dark:opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-amber-500/10 dark:bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 dark:border-amber-400/25 bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 text-xs font-medium mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>{profileData.statusBadge}</span>
        </motion.div>

        {/* Profile Avatar / Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-6 group"
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 opacity-30 blur-md group-hover:opacity-50 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-surface-light dark:bg-surface-dark border border-amber-500/40 dark:border-amber-400/30 shadow-xl overflow-hidden">
            {!imageError ? (
              <Image
                src={profileData.avatarUrl}
                alt={profileData.name}
                width={128}
                height={128}
                priority
                onError={() => setImageError(true)}
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/30 flex items-center justify-center font-bold text-amber-500 text-3xl tracking-tight">
                {profileData.monogram}
              </div>
            )}
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm font-semibold tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-3"
        >
          {profileData.eyebrow}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4"
        >
          {profileData.name}
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-200 mb-6 max-w-3xl"
        >
          {profileData.headline}
        </motion.p>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-9 max-w-2xl leading-relaxed"
        >
          &ldquo;{profileData.supportingCopy}&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 dark:bg-amber-400 dark:hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-glow-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={profileData.resumeUrl}
            download="Priyanshu_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/70 dark:bg-surface-dark/80 hover:bg-white dark:hover:bg-surface-dark-subtle border border-black/10 dark:border-white/10 hover:border-amber-500/40 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <FileText className="w-4 h-4 text-amber-500" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-3 mb-12"
        >
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-surface-dark/60 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-surface-dark/60 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profileData.socials.email}`}
            aria-label="Email Priyanshu Kumar"
            className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-surface-dark/60 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          aria-label="Scroll to About section"
          className="inline-flex flex-col items-center gap-1.5 text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
        >
          <span className="text-[11px] font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
