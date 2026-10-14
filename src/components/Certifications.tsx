"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Sparkles,
  ExternalLink,
  FileText,
  X,
  Download,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Eye,
  Calendar,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import {
  certificationsData,
  CertificationItem,
  COMBINED_CERTIFICATES_PDF_PATH,
  CLEAN_COMBINED_CERTIFICATES_PDF_PATH,
  TOTAL_CERTIFICATE_PAGES,
} from "@/data/certifications";

const CATEGORIES: { label: string; value: string }[] = [
  { label: "All Certificates", value: "all" },
  { label: "Internship", value: "Internship" },
  { label: "Certifications & Job Simulations", value: "Certifications & Job Simulations" },
  { label: "Events & Participation", value: "Events & Participation" },
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [currentModalPage, setCurrentModalPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("all");
  const [zoom, setZoom] = useState<number>(1);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Sync modal page and reset zoom when selected cert changes
  useEffect(() => {
    if (selectedCert) {
      setCurrentModalPage(selectedCert.pdfPage);
      setZoom(1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedCert]);

  // Handle keyboard shortcuts (Escape, Arrows, Zoom)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCert) return;

      if (e.key === "Escape") {
        setSelectedCert(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevPage();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === "0") {
        e.preventDefault();
        handleZoomReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert, currentModalPage]);

  const filteredCerts = certificationsData.filter((cert) => {
    if (filter === "all") return true;
    return cert.category === filter;
  });

  // Find cert that corresponds to current modal page
  const currentActiveCert =
    certificationsData.find((c) => c.pdfPage === currentModalPage) || selectedCert;

  const handlePrevPage = () => {
    setCurrentModalPage((prev) => {
      const nextP = Math.max(1, prev - 1);
      const match = certificationsData.find((c) => c.pdfPage === nextP);
      if (match) setSelectedCert(match);
      setZoom(1);
      return nextP;
    });
  };

  const handleNextPage = () => {
    setCurrentModalPage((prev) => {
      const nextP = Math.min(TOTAL_CERTIFICATE_PAGES, prev + 1);
      const match = certificationsData.find((c) => c.pdfPage === nextP);
      if (match) setSelectedCert(match);
      setZoom(1);
      return nextP;
    });
  };

  const handleSelectPage = (pageNum: number) => {
    setCurrentModalPage(pageNum);
    const match = certificationsData.find((c) => c.pdfPage === pageNum);
    if (match) setSelectedCert(match);
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2.5, Math.round((prev + 0.25) * 100) / 100));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(1, Math.round((prev - 0.25) * 100) / 100));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 relative section-ambient-left overflow-hidden"
    >
      {/* Golden Ambient Background Glows */}
      <div className="absolute top-1/4 -left-36 w-[520px] h-[520px] bg-[#FFC229]/09 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-28 w-[460px] h-[460px] bg-[#FF9D27]/08 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>

          <div className="mb-2">
            <span className="text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase inline-block select-none">
              Industry &amp; Academic Honors
            </span>
          </div>

          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white mb-4">
            Certifications &amp; Achievements
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Verified technical programs, virtual job simulations, national symposiums, and competitive hackathon achievements with pixel-perfect document previews.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const count =
                cat.value === "all"
                  ? certificationsData.length
                  : certificationsData.filter((c) => c.category === cat.value).length;
              const isActive = filter === cat.value;

              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20"
                      : "bg-white/60 dark:bg-white/[0.05] text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-white/90 dark:hover:bg-white/[0.09] border border-black/[0.06] dark:border-white/[0.08]"
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Responsive Grid on Large Screens, 2 on Tablets, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCerts.map((cert, idx) => {
            const isInternship = cert.category === "Internship";
            const isSimulation = cert.category === "Certifications & Job Simulations";

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="p-5 sm:p-6 rounded-2xl card-gold-border bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Bar: Category Pill & Issue Date */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-semibold uppercase px-2.5 py-1 rounded-md border tracking-wide ${
                        isInternship
                          ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30"
                          : isSimulation
                          ? "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/25"
                          : "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/25"
                      }`}
                    >
                      {cert.category}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded border border-black/[0.05] dark:border-white/[0.06]">
                      <Calendar className="w-3 h-3 text-amber-500/80" />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  {/* Clean Certificate Preview Thumbnail */}
                  <div
                    onClick={() => {
                      setSelectedCert(cert);
                      setCurrentModalPage(cert.pdfPage);
                      setZoom(1);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedCert(cert);
                        setCurrentModalPage(cert.pdfPage);
                        setZoom(1);
                      }
                    }}
                    title={`Click to view full-resolution certificate (Page ${cert.pdfPage})`}
                    className="relative w-full h-44 sm:h-48 mb-4 rounded-xl overflow-hidden bg-zinc-950/90 dark:bg-[#070a12] border border-black/10 dark:border-white/10 group-hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-center p-2.5 shadow-inner"
                  >
                    <img
                      src={cert.imagePath}
                      alt={cert.title}
                      className="w-full h-full object-contain filter group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-md select-none"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-400 text-zinc-950 shadow-lg font-sans">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>

                    {/* Page Badge */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/75 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                      P.{cert.pdfPage}
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white mb-2 leading-snug group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer Info */}
                  <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3.5">
                    {cert.description}
                  </p>

                  {/* Tags */}
                  {cert.tags && cert.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-black/[0.05] dark:border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Credential ID if present */}
                  {cert.credentialId && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
                      <span className="text-zinc-400">ID:</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer Actions: View Certificate & Direct Tab Link */}
                <div className="pt-3.5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCert(cert);
                      setCurrentModalPage(cert.pdfPage);
                      setZoom(1);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-sm shadow-amber-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                    <span className="ml-0.5 text-[10px] font-mono opacity-80 font-normal">
                      (P.{cert.pdfPage})
                    </span>
                  </button>

                  <a
                    href={cert.cleanPdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open clean PDF for ${cert.title} in a new tab`}
                    aria-label={`Open ${cert.title} clean PDF in new browser tab`}
                    className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.07] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verification Transparency & Download Card */}
        <div className="mt-12 p-5 rounded-2xl border border-amber-500/25 bg-amber-500/[0.04] dark:bg-amber-500/[0.03] text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white mb-0.5">
                Pixel-Perfect Clean Previews &amp; Source Verification
              </p>
              <p>
                All 8 credentials feature cropped, high-resolution document previews free of phone status bars or screen artifacts. The full 8-page compiled document is preserved for source authenticity.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={CLEAN_COMBINED_CERTIFICATES_PDF_PATH}
              download="Priyanshu_Kumar_Clean_Certificates.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
              title="Download compiled PDF containing all 8 clean certificates"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Clean All-in-One PDF</span>
            </a>

            <a
              href={COMBINED_CERTIFICATES_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white bg-black/[0.05] dark:bg-white/[0.06] hover:bg-black/[0.09] dark:hover:bg-white/[0.1] border border-black/10 dark:border-white/10 transition-colors"
              title="Inspect original unedited multi-page source document"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Source PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && currentActiveCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
              className="relative w-full max-w-5xl h-[95vh] max-h-[960px] rounded-2xl bg-[#0b0e17] border border-amber-500/30 p-3 sm:p-5 shadow-2xl shadow-black/80 flex flex-col overflow-hidden text-zinc-100"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
                <div className="min-w-0 flex-1 pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/25">
                      {currentActiveCert.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {currentActiveCert.date}
                    </span>
                    {currentActiveCert.credentialId && (
                      <span className="hidden sm:inline text-xs font-mono text-zinc-400">
                        • ID: <span className="text-amber-400">{currentActiveCert.credentialId}</span>
                      </span>
                    )}
                  </div>

                  <h3
                    id="cert-modal-title"
                    className="text-base sm:text-xl font-bold text-white truncate"
                  >
                    {currentActiveCert.title}
                  </h3>

                  <div className="text-xs font-semibold text-amber-400 truncate">
                    {currentActiveCert.issuer}
                  </div>
                </div>

                {/* Right Top Controls: Zoom & Close */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1 bg-white/[0.06] border border-white/10 rounded-xl p-1 text-xs">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      disabled={zoom <= 1}
                      title="Zoom Out (-)"
                      className="p-1 rounded-lg hover:bg-white/10 text-zinc-300 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleZoomReset}
                      title="Reset Zoom (Fit to Page)"
                      className="px-2 py-0.5 text-[11px] font-mono font-semibold text-amber-400 hover:bg-white/10 rounded transition-colors cursor-pointer"
                    >
                      {Math.round(zoom * 100)}%
                    </button>

                    <button
                      type="button"
                      onClick={handleZoomIn}
                      disabled={zoom >= 2.5}
                      title="Zoom In (+)"
                      className="p-1 rounded-lg hover:bg-white/10 text-zinc-300 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>

                    {zoom > 1 && (
                      <button
                        type="button"
                        onClick={handleZoomReset}
                        title="Fit to Page"
                        className="p-1 rounded-lg hover:bg-white/10 text-amber-400 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Close Modal Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate preview"
                    className="p-2 rounded-xl text-zinc-400 hover:text-white border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Strip */}
              <div className="py-2 px-3 my-2 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2.5 text-xs shrink-0">
                {/* Page Stepper */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    disabled={currentModalPage <= 1}
                    aria-label="Previous certificate"
                    className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/[0.1] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1 font-mono font-semibold px-2 py-1 rounded bg-white/[0.06] text-white">
                    <span>Certificate</span>
                    <span className="text-amber-400">{currentModalPage}</span>
                    <span className="text-zinc-400 font-normal">/ {TOTAL_CERTIFICATE_PAGES}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextPage}
                    disabled={currentModalPage >= TOTAL_CERTIFICATE_PAGES}
                    aria-label="Next certificate"
                    className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/[0.1] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <span className="hidden md:inline-block text-[11px] text-zinc-400 ml-2">
                    (Use ← and → arrow keys to navigate, + / - to zoom)
                  </span>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={currentActiveCert.imagePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    <span>Open High-Res</span>
                  </a>

                  <a
                    href={currentActiveCert.cleanPdfPath}
                    download={`Priyanshu_Kumar_${currentActiveCert.id}.pdf`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                    title="Download clean standalone certificate PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              {/* Main Clean Preview Container */}
              <div
                ref={imageContainerRef}
                className="relative flex-1 w-full rounded-xl overflow-auto border border-white/10 bg-[#06080e] flex items-center justify-center p-3 select-none"
              >
                <div
                  className="transition-transform duration-200 ease-out flex items-center justify-center max-w-full max-h-full"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "center center",
                  }}
                >
                  <img
                    key={`cert-img-${currentModalPage}`}
                    src={currentActiveCert.imagePath}
                    alt={currentActiveCert.title}
                    className="max-w-full max-h-[68vh] object-contain rounded-lg shadow-2xl filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] pointer-events-auto"
                    draggable={false}
                  />
                </div>

                {/* Floating Zoom Hint overlay when zoomed */}
                {zoom > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 text-[11px] text-amber-300 border border-amber-500/30 backdrop-blur-md pointer-events-none">
                    Scroll to pan across certificate • Press 0 to reset
                  </div>
                )}
              </div>

              {/* Bottom Quick Jump Page Selector */}
              <div className="pt-3 flex items-center justify-between gap-2 text-xs text-zinc-400 shrink-0 overflow-x-auto">
                <span className="text-[11px] font-semibold text-zinc-300 shrink-0">
                  Quick Jump:
                </span>
                <div className="flex items-center gap-1 overflow-x-auto py-1">
                  {certificationsData.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleSelectPage(c.pdfPage)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all shrink-0 cursor-pointer ${
                        currentModalPage === c.pdfPage
                          ? "bg-amber-400 text-zinc-950 font-bold shadow-sm"
                          : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.05]"
                      }`}
                      title={`${c.title} (${c.issuer})`}
                    >
                      P.{c.pdfPage} {c.issuer.split(",")[0].split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
