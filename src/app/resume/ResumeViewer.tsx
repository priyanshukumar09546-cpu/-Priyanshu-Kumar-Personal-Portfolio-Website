"use client";

import React, { useState } from "react";
import { Download, ExternalLink, ZoomIn, ZoomOut, RotateCcw, FileText, Image as ImageIcon } from "lucide-react";

interface ResumeViewerProps {
  resumePath: string;
  previewImagePath: string;
}

export function ResumeViewer({ resumePath, previewImagePath }: ResumeViewerProps) {
  const [viewMode, setViewMode] = useState<"preview" | "pdf">("preview");
  const [zoom, setZoom] = useState<number>(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2, Math.round((prev + 0.2) * 10) / 10));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(1, Math.round((prev - 0.2) * 10) / 10));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  return (
    <div className="flex-1 w-full flex flex-col">
      {/* Controls Bar */}
      <div className="mb-3 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs">
        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-lg border border-white/10">
          <button
            type="button"
            onClick={() => {
              setViewMode("preview");
              setZoom(1);
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
              viewMode === "preview"
                ? "bg-amber-400 text-zinc-950 font-bold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>High-Res Preview</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("pdf")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
              viewMode === "pdf"
                ? "bg-amber-400 text-zinc-950 font-bold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Embedded PDF</span>
          </button>
        </div>

        {/* Zoom Controls for Preview Mode */}
        {viewMode === "preview" && (
          <div className="flex items-center gap-1 bg-white/[0.05] border border-white/10 rounded-lg p-1">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              title="Zoom out"
              className="p-1 rounded hover:bg-white/10 text-zinc-300 disabled:opacity-30 transition-colors cursor-pointer"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="px-2 py-0.5 text-[11px] font-mono text-amber-400 hover:bg-white/10 rounded transition-colors cursor-pointer"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoom >= 2}
              title="Zoom in"
              className="p-1 rounded hover:bg-white/10 text-zinc-300 disabled:opacity-30 transition-colors cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            {zoom > 1 && (
              <button
                type="button"
                onClick={handleResetZoom}
                title="Fit to page"
                className="p-1 rounded hover:bg-white/10 text-amber-400 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Quick Links */}
        <div className="flex items-center gap-2">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>Open in Tab</span>
          </a>

          <a
            href={resumePath}
            download="Priyanshu_Kumar_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative flex-1 w-full min-h-[75vh] sm:min-h-[82vh] rounded-2xl overflow-auto border border-white/10 bg-[#080b13] shadow-2xl flex items-center justify-center p-3 sm:p-6">
        {viewMode === "preview" ? (
          <div
            className="transition-transform duration-200 ease-out flex items-center justify-center max-w-full"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "top center",
            }}
          >
            <img
              src={previewImagePath}
              alt="Priyanshu Kumar Resume"
              className="max-w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-white/10 bg-white"
            />
          </div>
        ) : (
          <iframe
            src={`${resumePath}#view=FitH`}
            title="Priyanshu Kumar Resume"
            className="w-full flex-1 h-[80vh] border-0 rounded-lg bg-zinc-900"
          />
        )}
      </div>
    </div>
  );
}
