"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient Animated Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40 dark:opacity-25" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-amber-400/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute -top-12 right-1/4 w-[350px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center relative z-10">
        {/* Availability Badge & Handwritten Accent */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 dark:border-amber-400/25 bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>{profileData.statusBadge}</span>
          </div>

          <span className="font-handwriting text-amber-500 dark:text-amber-400 text-2xl sm:text-3xl -rotate-1 select-none">
            ~ Turning ideas into reality.
          </span>
        </motion.div>

        {/* Profile Avatar / PK Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-6 group"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 opacity-25 blur-lg group-hover:opacity-45 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-surface-light dark:bg-surface-dark border border-amber-500/40 dark:border-amber-400/30 shadow-2xl overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase">
            {profileData.eyebrow}
          </span>
        </motion.div>

        {/* Name with character, refined weight, letter spacing & responsive sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] text-zinc-900 dark:text-white mb-3"
        >
          {profileData.name}
        </motion.h1>

        {/* Headline with editorial balance */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4 max-w-3xl"
        >
          {profileData.headline}
        </motion.p>

        {/* Supporting Copy with subtle cursive signature */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-8 max-w-2xl"
        >
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
            &ldquo;{profileData.supportingCopy}&rdquo;
          </p>
          <p className="font-handwriting text-amber-500 dark:text-amber-400 text-xl sm:text-2xl select-none">
            ~ Always building.
          </p>
        </motion.div>

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
            <span>Explore 6 Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/70 dark:bg-surface-dark/80 hover:bg-white dark:hover:bg-surface-dark-subtle border border-black/10 dark:border-white/10 hover:border-amber-500/40 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <FileText className="w-4 h-4 text-amber-500" />
            <span>View &amp; Download Resume</span>
          </Link>
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
          className="inline-flex flex-col items-center gap-1 text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Explore Below</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
