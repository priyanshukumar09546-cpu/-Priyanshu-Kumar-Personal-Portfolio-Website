"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
          Let&apos;s build something useful.
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Interested in AI, software engineering, or building products that solve real problems? Let&apos;s connect.
        </p>

        {/* Action Button Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {/* Email Primary Button */}
          <a
            href={`mailto:${profileData.socials.email}`}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 dark:bg-amber-400 dark:hover:bg-amber-300 shadow-md hover:shadow-glow-amber transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/70 dark:bg-surface-dark/70 hover:bg-white dark:hover:bg-surface-dark-subtle border border-black/10 dark:border-white/10 hover:border-amber-500/40 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>

          {/* GitHub Button */}
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/70 dark:bg-surface-dark/70 hover:bg-white dark:hover:bg-surface-dark-subtle border border-black/10 dark:border-white/10 hover:border-amber-500/40 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Copy Email Helper */}
        <div className="inline-flex items-center gap-2 p-2 px-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] text-xs text-zinc-500 dark:text-zinc-400">
          <span>{profileData.socials.email}</span>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address to clipboard"
            className="p-1 rounded-md hover:text-amber-500 transition-colors focus:outline-none"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
          {copied && <span className="text-emerald-500 text-[11px] font-medium">Copied!</span>}
        </div>
      </div>
    </section>
  );
}
