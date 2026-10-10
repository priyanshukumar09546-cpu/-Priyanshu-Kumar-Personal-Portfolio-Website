import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Priyanshu Kumar | AI/ML & Full-Stack Developer",
  description: "View and download the verified resume of Priyanshu Kumar.",
};

export default function ResumePage() {
  const resumePath = "/Priyanshu_Kumar_Resume.pdf";

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 px-4 sm:px-8 py-3.5 bg-[#11141e]/90 backdrop-blur-xl border-b border-white/[0.08] flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-white/10 text-xs">
            <span className="font-bold text-white">Priyanshu Kumar</span>
            <span className="text-zinc-500">&bull;</span>
            <span className="text-amber-400 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Document</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Open in Tab</span>
          </a>

          <a
            href={resumePath}
            download="Priyanshu_Kumar_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Main Document Viewer */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-3 sm:p-6 flex flex-col">
        <div className="relative flex-1 w-full min-h-[75vh] sm:min-h-[82vh] rounded-2xl overflow-hidden border border-white/10 bg-[#161a26] shadow-2xl flex flex-col">
          <iframe
            src={`${resumePath}#view=FitH`}
            title="Priyanshu Kumar Resume"
            className="w-full flex-1 min-h-[75vh] sm:min-h-[82vh] border-0"
          />

          {/* Mobile Fallback Overlay if browser doesn't render iframe PDF */}
          <noscript>
            <div className="p-8 text-center">
              <p className="text-sm text-zinc-300 mb-4">
                Your browser may not support inline PDF viewing.
              </p>
              <a
                href={resumePath}
                download="Priyanshu_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-zinc-950 text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Instead</span>
              </a>
            </div>
          </noscript>
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-3 text-center text-xs text-zinc-500 flex items-center justify-center gap-3">
          <span>Official resume file served directly from <code className="text-zinc-400">/Priyanshu_Kumar_Resume.pdf</code></span>
          <span>&bull;</span>
          <a
            href={resumePath}
            download="Priyanshu_Kumar_Resume.pdf"
            className="text-amber-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Direct link</span>
            <Download className="w-3 h-3" />
          </a>
        </div>
      </main>
    </div>
  );
}
