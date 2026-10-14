"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Laptop,
  X,
  Code2,
  Cloud,
  Rocket,
  Boxes,
} from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);

  // Metric cards data matching verified repositories, live deployments & platforms
  const metrics = [
    {
      id: "platforms",
      number: "6+",
      title: "Projects Built",
      subTitle: "Engineered Platforms",
      badge: "PROJECT SHOWCASE",
      verified: "VERIFIED METRIC",
      description:
        "AI-powered applications, developer tools, computer vision, and full-stack platforms.",
      iconPath: "/images/about/icon_cubes.png",
      fallbackIcon: <Boxes className="w-8 h-8 text-amber-400" />,
    },
    {
      id: "deployments",
      number: "6+",
      title: "Live Deployments",
      subTitle: "Verified Live Deployments",
      badge: "LIVE PROJECTS",
      verified: "VERIFIED METRIC",
      description:
        "Explore deployed applications and real product experiences through the portfolio's verified live links.",
      iconPath: "/images/about/icon_cloud.png",
      fallbackIcon: <Cloud className="w-8 h-8 text-amber-400" />,
    },
    {
      id: "repositories",
      number: "19+",
      title: "Public Repositories",
      subTitle: "GitHub Source Code",
      badge: "GITHUB",
      verified: "VERIFIED METRIC",
      description:
        "Source code and engineering experiments across AI/ML, full-stack development, computer vision, and developer tools.",
      iconPath: "/images/about/icon_github.png",
      fallbackIcon: <Code2 className="w-8 h-8 text-amber-400" />,
    },
  ];

  // Authentic project technologies used in Priyanshu's verified codebase
  const techStackIcons = [
    {
      name: "Python",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.82v.825H3.852S0 5.76 0 11.879c0 6.117 3.352 5.9 3.352 5.9h2V14.99s-.108-3.35 3.297-3.35h5.664s3.19.052 3.19-3.137V3.137S17.957 0 11.914 0zm-3.2 1.719a1.01 1.01 0 0 1 1.01 1.01 1.01 1.01 0 0 1-1.01 1.01 1.01 1.01 0 0 1-1.01-1.01 1.01 1.01 0 0 1 1.01-1.01zm3.372 20.562c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.82v-.825h8.174s3.852.471 3.852-5.648c0-6.117-3.352-5.9-3.352-5.9h-2v2.789s.108 3.35-3.297 3.35H8.887s-3.19-.052-3.19 3.137v5.372s-.454 3.137 5.589 3.137zm3.2-1.719a1.01 1.01 0 0 1-1.01-1.01 1.01 1.01 0 0 1 1.01-1.01 1.01 1.01 0 0 1 1.01 1.01 1.01 1.01 0 0 1-1.01 1.01z" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.654 10.024h3.696v1.942h-1.637v7.417h-2.059v-7.417h-1.637v-1.942zm-5.617.02c1.464 0 2.502.664 2.924 1.79l-1.657.994c-.267-.62-.756-.933-1.345-.933-.873 0-1.428.536-1.428 1.258 0 .807.579 1.135 1.706 1.544 1.849.658 2.877 1.488 2.877 3.175 0 1.954-1.503 3.167-3.64 3.167-1.928 0-3.18-.946-3.608-2.31l1.724-.95c.29.83.896 1.34 1.884 1.34.987 0 1.558-.57 1.558-1.34 0-.829-.537-1.157-1.748-1.597-1.764-.644-2.835-1.487-2.835-3.11 0-1.874 1.455-3.04 3.366-3.04z" />
        </svg>
      ),
    },
    {
      name: "React",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0-2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0-7.5C5.373 0 0 2.686 0 6c0 2.378 2.766 4.436 6.88 5.373A16.037 16.037 0 0 1 6 6c0-2.21 2.686-4 6-4s6 1.79 6 4c0 1.916-.299 3.69-.88 5.373C21.234 10.436 24 8.378 24 6c0-3.314-5.373-6-12-6zM12 24c6.627 0 12-2.686 12-6 0-2.378-2.766-4.436-6.88-5.373A16.037 16.037 0 0 1 18 18c0 2.21-2.686 4-6 4s-6-1.79-6-4c0-1.916.299-3.69.88-5.373C2.766 13.564 0 15.622 0 18c0 3.314 5.373 6 12 6z" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.67 18.06l-6.72-8.58v8.58H9.33V5.94h1.62l6.72 8.58V5.94h1.62v12.12h-1.62z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 2.3l8.4 4.8v9.8L12 21.7 3.6 16.9V7.1L12 2.3z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C11.5 0 9 5.5 9 12c0 5 2.5 10 3 12 .5-2 3-7 3-12 0-6.5-2.5-12-3-12z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "AI & ML",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A6 6 0 0 1 7.07 13H7a1 1 0 0 1 0-2h.07A6 6 0 0 1 11 7.07V7a1 1 0 0 1 2 0v.07A6 6 0 0 1 16.93 11H17a1 1 0 0 1 0 2h-.07A6 6 0 0 1 13 16.93z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative section-ambient-center overflow-hidden"
    >
      {/* Golden Silk Ambient Ribbon Wave Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none -z-10 mix-blend-screen overflow-hidden">
        <Image
          src="/images/about/golden-ribbon-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Golden Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-[#FFC229]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-[#FF9D27]/09 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Small Label Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/35 bg-amber-500/10 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(251,191,36,0.18)] select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT PRIYANSHU</span>
          </div>

          {/* Eyebrow */}
          <div className="mb-3">
            <span className="text-amber-500 dark:text-amber-400 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase inline-block select-none">
              ENGINEERING WITH REAL USER FOCUS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.1] mb-5">
            Curious by nature.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 drop-shadow-[0_2px_14px_rgba(251,191,36,0.35)]">
              Builder
            </span>
            <br className="hidden sm:inline" /> by choice.
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
            I&apos;m a Computer Science Engineering student at ABES Engineering College, an AI &amp; Full-Stack Developer, and the founder of MentorNearby. I build real-world products that solve meaningful problems using AI, modern web technologies, and scalable system design.
          </p>

          {/* Interactive Workspace Visual Trigger */}
          <div className="inline-flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowWorkspaceModal(true)}
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/5 hover:bg-amber-500/15 text-xs text-amber-600 dark:text-amber-400 font-semibold transition-all shadow-sm hover:shadow-glow-amber cursor-pointer"
            >
              <Laptop className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Personal Workspace &amp; Studio</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Left Narrative Card + Right Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Left Card — My Engineering Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 md:p-9 bg-white/80 dark:bg-[#070D18]/90 backdrop-blur-xl border border-amber-400/40 dark:border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_35px_rgba(251,191,36,0.12)] flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_45px_rgba(251,191,36,0.2)]"
          >
            {/* Top gold beam */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent pointer-events-none" />

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mb-5">
                Engineering End-to-End AI Products
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal mb-8">
                <p>
                  I turn ideas into functional software products by combining AI, full-stack engineering, and thoughtful product design. From developing intelligent applications and backend APIs to building responsive interfaces and deploying complete solutions, I enjoy working across the entire development lifecycle.
                </p>
                <p>
                  My projects explore practical applications of AI/ML, computer vision, developer tools, and full-stack platforms. Through MentorNearby, CodeTrace, ScamShield AI, CropDetect AI, and CampusPrep, I continue developing solutions that connect engineering concepts with real-world problems.
                </p>
                <p>
                  I am continuously strengthening my foundations in Data Structures &amp; Algorithms, software engineering, AI/ML, and scalable application development. My long-term goal is to become an engineer who can design, build, and ship reliable products that create measurable value.
                </p>
              </div>
            </div>

            {/* Four Information Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
              {/* Tile 1 — Undergraduate */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.02] dark:bg-[#0A111F]/80 border border-black/[0.06] dark:border-white/[0.08] hover:border-amber-400/35 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Undergraduate</div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white tracking-tight">
                      B.Tech CSE &bull; Class of 2028
                    </div>
                  </div>
                </div>
              </div>

              {/* Tile 2 — Institution */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.02] dark:bg-[#0A111F]/80 border border-black/[0.06] dark:border-white/[0.08] hover:border-amber-400/35 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Institution</div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white tracking-tight">
                      ABES Engineering College
                    </div>
                  </div>
                </div>
                {/* ABES Crest Emblem */}
                <div className="w-7 h-9 relative shrink-0 ml-2">
                  <Image
                    src="/images/about/abes-shield.png"
                    alt="ABES Emblem"
                    width={28}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Tile 3 — Affiliation */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.02] dark:bg-[#0A111F]/80 border border-black/[0.06] dark:border-white/[0.08] hover:border-amber-400/35 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Affiliation</div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white tracking-tight">
                      AKTU (Dr. A.P.J. Abdul Kalam TU)
                    </div>
                  </div>
                </div>
                {/* AKTU Official Seal Logo */}
                <div className="w-8 h-8 relative shrink-0 ml-2">
                  <Image
                    src="/images/about/aktu-logo.png"
                    alt="AKTU Seal"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Tile 4 — Location */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.02] dark:bg-[#0A111F]/80 border border-black/[0.06] dark:border-white/[0.08] hover:border-amber-400/35 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white tracking-tight">
                      Ghaziabad, UP, India
                    </div>
                  </div>
                </div>
                {/* India Emblem */}
                <div className="w-7 h-8 relative shrink-0 ml-2">
                  <Image
                    src="/images/about/india-emblem.png"
                    alt="India Emblem"
                    width={28}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Stacked Metric Cards & Tech Strip */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl p-6 sm:p-7 bg-white/80 dark:bg-[#070D18]/90 backdrop-blur-xl border border-amber-400/40 dark:border-amber-400/40 shadow-[0_15px_35px_rgba(0,0,0,0.35),0_0_25px_rgba(251,191,36,0.1)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.45),0_0_35px_rgba(251,191,36,0.2)] transition-all duration-300 overflow-hidden group"
              >
                {/* Top gold beam */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent pointer-events-none" />

                {/* Top Row with Large Metric Number & Badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl sm:text-4xl font-black text-amber-500 dark:text-amber-400 group-hover:scale-105 transition-transform duration-200">
                    {metric.number}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[11px] font-bold tracking-wider uppercase shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>{metric.verified}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
                  {metric.title}
                </h4>

                {/* Content Row: Description on Left & 3D Glowing Asset on Right */}
                <div className="flex items-end justify-between gap-4">
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal flex-1">
                    {metric.description}
                  </p>

                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-400/15 blur-lg rounded-full -z-10 group-hover:bg-amber-400/25 transition-all" />
                    <Image
                      src={metric.iconPath}
                      alt={metric.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(251,191,36,0.3)] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Technology Icon Strip (Section 7) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 rounded-2xl bg-white/70 dark:bg-[#070D18]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 flex items-center justify-between gap-2 shadow-md"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 shrink-0">
                Core Stack
              </div>

              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-1">
                {techStackIcons.map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all duration-200 cursor-default shrink-0"
                  >
                    {tech.svg}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Workspace Studio Modal (Section 6) */}
      <AnimatePresence>
        {showWorkspaceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#080E1B] border border-amber-400/40 rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(251,191,36,0.2)] overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Developer Workspace &amp; Studio
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Priyanshu Kumar • Real Working Environment
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowWorkspaceModal(false)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-inner aspect-video">
                <Image
                  src="/images/priyanshu-workspace.jpg"
                  alt="Priyanshu Kumar working at developer desk"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-400">
                <span>
                  High-focus development setup: Dual displays, code instrumentation &amp; AI system engineering.
                </span>
                <span className="text-amber-400 font-semibold shrink-0">
                  ABES Engineering College • MentorNearby
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
