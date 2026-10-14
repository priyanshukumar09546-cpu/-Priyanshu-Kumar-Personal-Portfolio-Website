"use client";

import React, { useState } from "react";
import { X, ShieldCheck, AlertCircle, CheckCircle2, EyeOff } from "lucide-react";
import { auditReportData } from "@/data/audit";

export function AuditModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-title"
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0a0f1d] border border-black/10 dark:border-amber-400/25 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(255,194,41,0.2)]"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="audit-title" className="text-lg font-bold text-zinc-900 dark:text-white">
                Profile Verification &amp; Truth Audit
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Independent factual audit of repositories, live links, and professional claims.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close audit report"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border border-black/5 dark:border-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {auditReportData.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] text-xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.item}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    item.status === "VERIFIED" || item.status === "DEPLOYED_VERIFIED"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : item.status === "HIDDEN_OFFLINE"
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : item.status === "OMITTED_UNVERIFIED"
                      ? "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                      : "bg-sky-500/10 text-sky-600 dark:text-sky-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-normal">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-400 text-zinc-950 hover:bg-amber-300"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
}
