"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, ShieldAlert, CheckCircle2, Layers, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const [imgError, setImgError] = useState(false);

  const getStatusBadgeStyle = (status: Project["statusBadge"]) => {
    switch (status) {
      case "Live Production":
        return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case "Source Verified":
        return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30";
      case "Benchmark Verified":
        return "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30";
      case "Architecture Verified":
        return "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30";
      case "Experimental Prototype":
        return "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30";
      default:
        return "bg-zinc-500/15 text-zinc-400 border-zinc-500/30";
    }
  };

  return (
    <article className="group relative rounded-2xl card-gold-border bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* Visual Preview Header */}
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-[#080d17] dark:to-[#0f172a] border-b border-black/[0.06] dark:border-white/[0.08] overflow-hidden flex items-center justify-center">
          {project.image && !imgError ? (
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} interface preview`}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
                onError={() => setImgError(true)}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          ) : (
            /* Premium Architectural Blueprint Fallback */
            <div className="w-full h-full p-6 flex flex-col justify-between relative select-none">
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] font-mono tracking-wider text-amber-500 uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture Verified</span>
                </span>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {project.stack[0]} &bull; {project.stack[1] || "Full-Stack"}
                </span>
              </div>

              <div className="z-10 text-center my-auto">
                <h4 className="text-2xl font-extrabold text-zinc-800 dark:text-zinc-100 tracking-tight mb-1">
                  {project.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto line-clamp-1">
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 z-10 justify-center">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Top Floating Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
            <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase bg-black/70 dark:bg-black/85 backdrop-blur-md text-zinc-200 border border-white/15">
              {project.category}
            </span>

            <span
              className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold border backdrop-blur-md flex items-center gap-1.5 ${getStatusBadgeStyle(
                project.statusBadge
              )}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span>{project.statusBadge}</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="mb-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.16em] text-amber-600 dark:text-amber-400 uppercase mb-1.5 block">
              {project.category}
            </span>
            <h3 className="project-title text-xl sm:text-2xl font-black text-zinc-950 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 mt-1 leading-snug">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-5">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/[0.03] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-black/[0.06] dark:border-white/[0.06] hover:border-amber-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Disclaimer Callout if present */}
          {project.disclaimer && (
            <div className="p-3 rounded-xl bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 text-[11px] text-zinc-600 dark:text-zinc-400 flex items-start gap-2 mb-4">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="leading-normal">{project.disclaimer}</p>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/10 dark:border-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live deployment`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 dark:bg-amber-400 dark:hover:bg-amber-300 shadow-sm hover:shadow-glow-subtle transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group/btn"
          >
            <span>Live Demo</span>
            <span className="text-sm font-bold leading-none transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
          </a>
        ) : (
          <div className="flex-1 inline-flex items-center justify-center py-2.5 rounded-xl text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] text-center select-none">
            Demo Unavailable
          </div>
        )}
      </div>
    </article>
  );
}
