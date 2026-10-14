"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  GraduationCap,
  BookOpen,
  Quote,
} from "lucide-react";
import { educationData, educationQuote } from "@/data/education";

export function Education() {
  const btech = educationData.find((item) => item.id === "btech-cse");
  const schools = educationData.filter((item) => item.id !== "btech-cse");

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 relative section-ambient-right overflow-hidden"
    >
      {/* Golden Ambient Background Glows */}
      <div className="absolute top-20 right-0 sm:right-20 w-[420px] h-[420px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-0 sm:left-10 w-[380px] h-[380px] bg-amber-500/[0.07] blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative">
        {/* Upper-Right Academic Illustration (Graduation Cap & Books) */}
        <div
          aria-hidden="true"
          className="absolute right-0 lg:-right-4 top-0 -translate-y-8 sm:-translate-y-12 md:-translate-y-16 w-36 sm:w-48 md:w-60 lg:w-72 pointer-events-none select-none z-0 hidden sm:block transition-all duration-300"
        >
          <div className="relative">
            {/* Subtle backlight glow for the 3D illustration */}
            <div className="absolute -inset-4 bg-amber-400/15 blur-2xl rounded-full -z-10" />
            <Image
              src="/images/education/graduation-cap.png"
              alt="Academic mortarboard and books"
              width={320}
              height={220}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          {/* Eyebrow with horizontal accent lines */}
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-amber-500 dark:text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase select-none">
              ACADEMIC JOURNEY
            </span>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>

          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-4">
            Education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 drop-shadow-[0_2px_12px_rgba(251,191,36,0.25)]">
              Qualifications
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A strong academic foundation with continuous learning and hands-on development.
          </p>
        </div>

        {/* Education Cards Stack */}
        <div className="space-y-6 relative z-10">
          {/* Main B.Tech Education Card */}
          {btech && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-6 sm:p-8 md:p-9 bg-white/80 dark:bg-[#070D18]/90 backdrop-blur-xl border border-amber-400/40 dark:border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_35px_rgba(251,191,36,0.12)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_45px_rgba(251,191,36,0.2)] overflow-hidden"
            >
              {/* Subtle top gold illuminated beam */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent pointer-events-none" />

              <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-7">
                {/* Institution Logo Container */}
                <div className="w-28 sm:w-32 h-24 sm:h-28 rounded-2xl bg-[#060B14] border border-amber-400/35 p-2 flex items-center justify-center shadow-lg shadow-black/40 shrink-0 self-start">
                  <div className="w-full h-full rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden">
                    <Image
                      src={btech.logo}
                      alt={btech.institution}
                      width={120}
                      height={60}
                      priority
                      className="w-auto h-auto max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 w-full">
                  {/* Top Header Row with Status Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                      {btech.degree}
                    </h3>

                    {/* Status Badge */}
                    {btech.status && (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shrink-0 self-start sm:self-auto shadow-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                        </span>
                        <span>{btech.status}</span>
                      </div>
                    )}
                  </div>

                  {/* Institution Name */}
                  <div className="text-sm sm:text-base font-semibold text-amber-600 dark:text-amber-400 mb-3">
                    {btech.institution}
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-600 dark:text-zinc-300 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span>{btech.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span>{btech.boardOrAffiliation}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span>{btech.period}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                    {btech.description}
                  </p>

                  {/* Subject Tags */}
                  {btech.tags && btech.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {btech.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/5 dark:bg-[#0E1626]/90 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-amber-400/40 hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary School Cards (Class XII & Class X) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schools.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl p-6 sm:p-7 bg-white/70 dark:bg-[#070D18]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 dark:hover:border-amber-400/35 shadow-lg dark:shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row with Logo and Score Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      {/* Circular School Logo */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-0.5 border border-white/20 shadow-md flex items-center justify-center shrink-0 overflow-hidden">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                          {edu.degree}
                        </h3>
                        <div className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 mt-0.5">
                          {edu.institution}
                        </div>
                      </div>
                    </div>

                    {/* Score Badge */}
                    {edu.score && (
                      <div className="px-3.5 py-2 rounded-2xl bg-[#090F1C] border border-amber-500/30 text-center min-w-[70px] shrink-0 shadow-sm">
                        <div className="text-base sm:text-lg font-black text-amber-500 dark:text-amber-400 leading-none">
                          {edu.score}
                        </div>
                        <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-wider mt-1">
                          Score
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-600 dark:text-zinc-300 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span>{edu.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span>{edu.boardOrAffiliation}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                    {edu.description}
                  </p>
                </div>

                {/* Subject Tags */}
                {edu.tags && edu.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.06]">
                    {edu.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-[#0E1626]/90 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-amber-400/40 hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-[#070D18]/75 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 text-left">
              <Quote className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 fill-amber-500/20" />
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 italic font-medium leading-relaxed">
                &ldquo;{educationQuote.text}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-amber-400/50 relative">
                <span className="absolute -top-[3px] right-0 w-1.5 h-1.5 rotate-45 bg-amber-400" />
              </div>
              <span className="font-script text-2xl sm:text-3xl text-amber-500 dark:text-amber-400 font-normal tracking-wide select-none">
                {educationQuote.author}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
