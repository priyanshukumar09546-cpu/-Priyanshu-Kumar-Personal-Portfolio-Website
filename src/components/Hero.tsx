"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Target,
  Cloud,
  Package,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Code,
} from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-clip"
    >
      {/* ================= ATMOSPHERIC AMBIENT BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        
        {/* Golden Glowing Arcs & Radial Orbs matching reference image */}
        <div className="absolute top-1/4 right-[5%] w-[580px] h-[580px] bg-gradient-to-tr from-amber-500/25 via-amber-400/10 to-transparent blur-[140px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-600/15 via-amber-500/5 to-transparent blur-[130px] rounded-full" />
        <div className="absolute -top-12 left-1/3 w-[380px] h-[380px] bg-sky-500/5 blur-[120px] rounded-full" />

        {/* Decorative Golden Ambient Rings matching reference image */}
        <div className="absolute top-1/2 -left-28 w-80 h-80 rounded-full border border-amber-500/15 opacity-60" />
        <div className="absolute top-[20%] -right-24 w-[420px] h-[420px] rounded-full border border-amber-500/15 opacity-60" />

        {/* Floating Gold Sparkle Particles */}
        <div className="absolute top-36 left-[18%] w-1.5 h-1.5 rounded-full bg-amber-400/90 blur-[0.5px] animate-ping" />
        <div className="absolute top-48 right-[22%] w-2 h-2 rounded-full bg-amber-300/80 blur-[0.5px] animate-pulse" />
        <div className="absolute bottom-40 left-[8%] w-2 h-2 rounded-full bg-amber-500/70 blur-[1px]" />
        <div className="absolute bottom-28 right-[10%] w-1.5 h-1.5 rounded-full bg-amber-300/90 blur-[0.5px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* ================= 2-COLUMN HERO COMPOSITION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE & CTAS ================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left"
          >
            {/* Student Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 dark:border-amber-400/25 bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-5 backdrop-blur-md shadow-sm">
              <span>{profileData.eyebrow}</span>
            </div>

            {/* Massive Name with Warm Gold Script Accent matching reference */}
            <div className="mb-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-zinc-950 dark:text-white leading-[0.95]">
                <span className="block">Priyanshu</span>
                <span className="inline-flex flex-wrap items-baseline gap-3 mt-1">
                  <span>Kumar</span>
                  <span className="font-script text-amber-500 dark:text-amber-400 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal select-none -rotate-2 inline-block drop-shadow-sm">
                    always building
                  </span>
                </span>
              </h1>
            </div>

            {/* Subheading / Role */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mb-3">
              {profileData.headline}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mb-5">
              I build AI-powered products from idea to deployment.
              <br className="hidden sm:inline" />
              Exploring the intersection of AI, web technologies, and real-world impact.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-7 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span>{profileData.statusBadge}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-7">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-glow-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/70 dark:bg-[#11141e]/80 hover:bg-white dark:hover:bg-[#171b28] border border-black/10 dark:border-white/10 hover:border-amber-500/40 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>View &amp; Download Resume</span>
              </Link>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#11141e]/70 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#11141e]/70 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                aria-label="Email Priyanshu Kumar"
                className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#11141e]/70 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/priyanshukumar09546-cpu?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Code Repositories"
                className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#11141e]/70 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Code className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: AUTHENTIC PHOTO & GLASS PANELS ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center relative w-full pt-4 pb-4"
          >
            {/* Hero Frame Positioning Container */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[340px] xl:w-[380px] h-[390px] sm:h-[450px] md:h-[490px] lg:h-[480px] xl:h-[520px] flex items-center justify-center">

              {/* Enhanced Golden Halo Glow behind Portrait */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#FFC229]/35 via-[#FF9D27]/20 to-transparent blur-3xl rounded-[44px] -z-10 pointer-events-none" />

              {/* Delicate Gold Orbital Light Trails around Portrait */}
              <div className="absolute -inset-6 sm:-inset-10 pointer-events-none -z-10 flex items-center justify-center">
                <svg className="w-full h-full max-w-[480px] max-h-[580px] opacity-45" viewBox="0 0 400 480" fill="none">
                  <ellipse cx="200" cy="240" rx="192" ry="232" stroke="url(#goldOrbitGrad)" strokeWidth="1.2" strokeDasharray="6 6" />
                  <defs>
                    <linearGradient id="goldOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFC229" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#FF9D27" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FFC229" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Central Genuine Profile Photo Container - Ultra HD */}
              <div className="relative w-full h-full rounded-[30px] sm:rounded-[36px] p-2 glass-portrait border border-amber-400/40 shadow-[0_0_50px_rgba(255,194,41,0.25)] overflow-hidden flex flex-col justify-end group">
                
                {/* Photo Framing - Preserves head, hair, face, necktie, and upper suit */}
                <div className="relative w-full h-full rounded-[24px] sm:rounded-[30px] overflow-hidden bg-gradient-to-b from-[#1c2336] via-[#101422] to-[#0a0d16]">
                  {!imageError ? (
                    <Image
                      src="/images/priyanshu.webp"
                      alt="Priyanshu Kumar - AI/ML Engineer & Full-Stack Developer"
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 460px"
                      priority
                      onError={() => setImageError(true)}
                      className="object-cover object-top filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-amber-500 text-5xl font-black">
                      PK
                    </div>
                  )}

                  {/* Soft bottom blend gradient into dark glass card bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050811]/95 via-[#050811]/50 to-transparent pointer-events-none" />

                  {/* Subtle golden ambient edge lighting inside photo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC229]/12 via-transparent to-white/[0.04] pointer-events-none" />
                </div>

                {/* Signature Cursive Accent: 'Ideas into Reality' with arrow matching reference */}
                <div className="absolute top-[26%] right-3 sm:right-4 lg:right-4 xl:right-5 z-20 pointer-events-none select-none text-right">
                  <div className="flex flex-col items-end leading-none">
                    <span className="font-script text-amber-400 text-base sm:text-lg xl:text-xl font-semibold -rotate-6 drop-shadow-md">
                      Ideas
                    </span>
                    <span className="font-script text-amber-400 text-base sm:text-lg xl:text-xl font-semibold -rotate-6 drop-shadow-md mt-0.5">
                      into
                    </span>
                    <span className="font-script text-amber-400 text-base sm:text-lg xl:text-xl font-semibold -rotate-6 drop-shadow-md mt-0.5 flex items-center gap-1">
                      Reality <span className="text-xs font-sans">&rarr;</span>
                    </span>
                  </div>
                </div>

                {/* Golden rim highlight at bottom-right edge of card */}
                <div className="absolute inset-0 rounded-[30px] sm:rounded-[36px] border-b-2 border-r-2 border-amber-400/60 pointer-events-none" />
              </div>

              {/* Floating Golden Paper Airplane Accent (matching reference) */}
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute -top-5 -right-6 xl:-right-10 z-20 pointer-events-none text-amber-400/90 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
              >
                <svg className="w-8 h-8 -rotate-12 fill-current" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </motion.div>

              {/* ================= DESKTOP FLOATING GLASS PANELS (Active on lg/xl screen widths) ================= */}
              
              {/* PANEL 1: AI MODELS (Top-Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute top-[6%] -left-[45px] xl:-left-[60px] z-30 pointer-events-auto"
              >
                <div className="glass-panel px-4 py-3.5 rounded-2xl border border-white/15 dark:border-white/15 shadow-2xl min-w-[165px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Brain className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-tight">
                      AI Models
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      <span>Computer Vision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400/50" />
                      <span>NLP &amp; LLMs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50" />
                      <span>Generative AI</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* PANEL 2: WEB DEVELOPMENT (Bottom-Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="hidden lg:block absolute bottom-[10%] -left-[50px] xl:-left-[65px] z-30 pointer-events-auto"
              >
                <div className="glass-panel px-4 py-3.5 rounded-2xl border border-white/15 dark:border-white/15 shadow-2xl min-w-[170px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-tight">
                      Web Development
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                      <span>Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      <span>Node.js</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* PANEL 3: CURRENT FOCUS (Top-Right - Positioned cleanly above 'Ideas into Reality') */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="hidden lg:block absolute top-[-6px] xl:top-[-10px] -right-[78px] xl:-right-[95px] z-30 pointer-events-auto"
              >
                <div className="glass-panel px-4 py-3.5 rounded-2xl border border-white/15 dark:border-white/15 shadow-2xl min-w-[180px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-tight">
                      Current Focus
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      <span>Building AI Products</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400/50" />
                      <span>Real-world Deployments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50" />
                      <span>Open Source Contribution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400/50" />
                      <span>Learning &amp; Growing</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* PANEL 4: DEPLOYMENTS (Bottom-Right) */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                className="hidden lg:block absolute bottom-[12%] -right-[40px] xl:-right-[52px] z-30 pointer-events-auto"
              >
                <div className="glass-panel px-4 py-3 rounded-2xl border border-white/15 dark:border-white/15 shadow-2xl min-w-[150px]">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Cloud className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
                      Deployments
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-2xl font-black text-zinc-950 dark:text-white leading-none">
                        5+
                      </div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                        Live Platforms
                      </div>
                    </div>
                    <div className="flex items-end gap-1 h-5 mb-0.5" aria-hidden="true">
                      <span className="w-1.5 h-2 bg-emerald-400/80 rounded-sm" />
                      <span className="w-1.5 h-3.5 bg-emerald-400/90 rounded-sm" />
                      <span className="w-1.5 h-5 bg-emerald-400 rounded-sm shadow-sm shadow-emerald-400/50" />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* ================= MOBILE / TABLET STACKED GLASS PANELS (Active on screens < lg) ================= */}
            <div className="lg:hidden grid grid-cols-2 gap-3 w-full max-w-[420px] mt-6 z-20">
              {/* AI Models */}
              <div className="glass-panel p-3.5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-1.5 mb-2">
                  <Brain className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-white">AI Models</span>
                </div>
                <div className="space-y-1 text-[10px] sm:text-[11px] text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-sky-400" />
                    <span>NLP &amp; LLMs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span>Generative AI</span>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="glass-panel p-3.5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-1.5 mb-2">
                  <Target className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-white">Current Focus</span>
                </div>
                <div className="space-y-1 text-[10px] sm:text-[11px] text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>AI Products</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-sky-400" />
                    <span>Deployments</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span>Open Source</span>
                  </div>
                </div>
              </div>

              {/* Web Dev */}
              <div className="glass-panel p-3.5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-1.5 mb-2">
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-white">Web Dev</span>
                </div>
                <div className="space-y-1 text-[10px] sm:text-[11px] text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span>Next.js &bull; TS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>Node.js</span>
                  </div>
                </div>
              </div>

              {/* Deployments */}
              <div className="glass-panel p-3.5 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1">
                  <Cloud className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-white">Deployments</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">5+</div>
                    <div className="text-[9px] text-zinc-400">Live Platforms</div>
                  </div>
                  <div className="flex items-end gap-0.5 h-4 mb-0.5">
                    <span className="w-1 h-1.5 bg-emerald-400/80 rounded-sm" />
                    <span className="w-1 h-2.5 bg-emerald-400/90 rounded-sm" />
                    <span className="w-1 h-4 bg-emerald-400 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* ================= HORIZONTAL STATS BANNER BAR MATCHING REFERENCE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mt-12 sm:mt-16 rounded-2xl glass-panel gold-beam-top border border-amber-400/25 dark:border-amber-400/20 p-4 sm:p-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6),0_0_30px_-5px_rgba(255,194,41,0.12)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.06] dark:divide-white/[0.08]">
            
            {/* Stat 1: Live Platforms */}
            <div className="flex items-center gap-3.5 px-3 py-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/25 shadow-glow-subtle">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
                    5+
                  </span>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Live Platforms
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  Deployed &amp; publicly available
                </p>
              </div>
            </div>

            {/* Stat 2: Repositories */}
            <div className="flex items-center gap-3.5 px-3 py-2 pt-4 md:pt-2">
              <div className="w-10 h-10 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
                    19
                  </span>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Public Repositories
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  Open source contributions
                </p>
              </div>
            </div>

            {/* Stat 3: Industry Programs */}
            <div className="flex items-center gap-3.5 px-3 py-2 pt-4 md:pt-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/25 shadow-glow-subtle">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
                    2
                  </span>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Industry Programs
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  IBM SkillsBuild &bull; Codveda
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
