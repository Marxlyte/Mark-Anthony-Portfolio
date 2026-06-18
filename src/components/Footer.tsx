import React from "react";
import { Award, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200/40 dark:border-slate-805/60 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Trademark Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-md">
              <Award className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="font-display font-bold text-xs text-slate-900 dark:text-white leading-tight">
                Uba Chinaza Mark-Anthony
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#f97316] uppercase mt-0.5">
                © 2026 All Rights Reserved
              </span>
            </div>
          </div>

          {/* Agency Tagline */}
          <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 font-mono tracking-wide max-w-sm">
            Engineered with deep growth funnels, responsive layout structures, and automated workflows.
          </p>

          {/* Navigation controls */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-450 hover:text-orange-500 dark:hover:text-amber-400 transition-colors"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
