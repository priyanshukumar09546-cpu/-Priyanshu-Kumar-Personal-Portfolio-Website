"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profileData } from "@/data/profile";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-[#090a0f]/85 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-sm dark:shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 dark:from-amber-400/25 dark:to-amber-500/5 border border-amber-500/30 dark:border-amber-400/30 flex items-center justify-center font-bold text-amber-500 dark:text-amber-400 text-sm tracking-tight transition-transform duration-200 group-hover:scale-105 group-hover:border-amber-400">
              PK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] text-zinc-600 dark:text-zinc-300 tracking-wider uppercase font-medium">
                AI &amp; Full-Stack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/60 dark:bg-surface-dark/70 backdrop-blur-md shadow-sm"
          >
            {NAV_ITEMS.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-zinc-900 dark:text-white font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-amber-500/15 dark:bg-amber-400/15 border border-amber-500/30 dark:border-amber-400/30 -z-10" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Resume & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-glow-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#11141e]/95 backdrop-blur-2xl shadow-xl transition-all">
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-black/10 dark:border-white/10 flex flex-col gap-2">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-amber-950 dark:text-amber-200 bg-amber-400 dark:bg-amber-500/25 border border-amber-400/40"
              >
                <FileText className="w-4 h-4" />
                <span>View &amp; Download Resume</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
