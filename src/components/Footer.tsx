"use client";

import React, { useState } from "react";
import { ShieldCheck, Heart, Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import { AuditModal } from "./AuditModal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showAudit, setShowAudit] = useState(false);

  return (
    <>
      <footer className="py-12 gold-beam-top border-t border-black/[0.06] dark:border-amber-500/15 bg-black/[0.01] dark:bg-[#050811] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Branding & Attribution */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-500 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                  PK
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {profileData.name}
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Designed and built by Priyanshu Kumar. &copy; {currentYear}.
              </p>
            </div>

            {/* Middle: Resume & Audit Transparency */}
            <div className="flex items-center gap-2">
              <a
                href="/resume"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 border border-black/[0.08] dark:border-white/[0.08] hover:border-amber-500/40 bg-white/50 dark:bg-surface-dark/50 transition-colors"
              >
                <span>Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setShowAudit(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 border border-black/[0.08] dark:border-white/[0.08] hover:border-amber-500/40 bg-white/50 dark:bg-surface-dark/50 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>Fact-Check &amp; Audit Report</span>
              </button>
            </div>

            {/* Right: Quick Links */}
            <div className="flex items-center gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                aria-label="Email"
                className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <AuditModal isOpen={showAudit} onClose={() => setShowAudit(false)} />
    </>
  );
}
