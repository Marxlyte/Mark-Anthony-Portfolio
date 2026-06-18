import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";
import { ArrowRight, X, ExternalLink, Calendar, Briefcase, FileText, CheckCircle2, ListFilter, Sparkles } from "lucide-react";

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Lead Generation & Expansion", "Community Building & Content", "UI/UX & Web Development", "Brand Launch & Asset Creation"];

  const filteredStudies = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === activeFilter);

  const sectionVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-[10px] font-semibold text-orange-600 dark:text-amber-400 font-mono uppercase tracking-wide">
                Proven Track Record
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies
            </h2>
            <p className="mt-3 text-slate-650 dark:text-slate-400 text-sm sm:text-base font-sans">
              Explore documented campaigns demonstrating data-driven growth strategies, lead pipeline engineering, and custom web rollouts.
            </p>
          </div>

          {/* Filter Switcher (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-1.5 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-white dark:bg-slate-800 text-orange-500 dark:text-amber-400 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat === "All" ? "All Case Studies" : cat.split(" & ")[0]}
              </button>
            ))}
          </div>

          {/* Filter Switcher (Mobile Scrollable) */}
          <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-850"
                }`}
              >
                {cat === "All" ? "All" : cat.split(" & ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={study.id}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/20 p-6 hover:bg-white dark:hover:bg-slate-900/60 hover:shadow-xl dark:hover:shadow-amber-950/2 hover:border-orange-500/20 dark:hover:border-amber-500/15 transition-all duration-300"
              >
                <div>
                  {/* Category Label */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold block mb-3">
                    {study.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-amber-400 transition-colors duration-250 leading-tight">
                    {study.title}
                  </h3>

                  {/* Role */}
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs font-medium text-slate-505 dark:text-slate-350">
                      {study.role}
                    </span>
                  </div>

                  {/* High Level Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed font-sans">
                    {study.challenge}
                  </p>

                  {/* Quick Key Metrics Showcase */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 grid grid-cols-2 gap-4">
                    {study.metrics.slice(0, 2).map((met, key) => (
                      <div key={key} className="flex flex-col">
                        <span className="font-display font-bold text-lg sm:text-xl text-slate-850 dark:text-white leading-none">
                          {met.value}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-405 dark:text-slate-400 font-mono mt-1">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Trigger Button */}
                <div className="mt-6 pt-4 border-t border-slate-100/60 dark:border-slate-855/60 flex items-center">
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="inline-flex items-center gap-2 text-xs font-bold font-display text-orange-500 dark:text-amber-400 group-hover:gap-3 transition-all cursor-pointer"
                  >
                    Deep Campaign Study
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating Campaign Details Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Body */}
              <div className="space-y-8">
                {/* Header Metadata */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#f97316] font-bold">
                    {selectedStudy.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1.5 leading-tight">
                    {selectedStudy.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <Briefcase className="w-3.5 h-3.5 text-orange-500" />
                      Role: <span className="font-semibold text-slate-700 dark:text-slate-300">{selectedStudy.role}</span>
                    </div>
                  </div>
                </div>

                {/* Stat Cards Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {selectedStudy.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-gradient-to-tr from-orange-500/[0.02] to-amber-500/[0.02] dark:from-slate-900 dark:to-slate-850/50 border border-slate-100 dark:border-slate-800 text-center">
                      <span className="block font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                        {m.value}
                      </span>
                      <span className="text-[10px] font-mono tracking-wide uppercase text-slate-400 mt-1.5 block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Challenge Section */}
                <div className="space-y-2.5">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wide text-slate-400">
                    The Challenge
                  </h4>
                  <p className="text-sm text-slate-755 dark:text-slate-300 leading-relaxed font-sans">
                    {selectedStudy.challenge}
                  </p>
                </div>

                {/* Details Grid: Strategy vs Execution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Strategy */}
                  <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80">
                    <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#f97316] mb-4 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Growth Strategy
                    </h5>
                    <ul className="space-y-3">
                      {selectedStudy.strategy.map((item, key) => (
                        <li key={key} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4.5 h-4.5 text-orange-500 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 dark:text-slate-350 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Execution */}
                  <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80">
                    <h5 className="font-display font-bold text-xs uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Tactical Execution
                    </h5>
                    <ul className="space-y-3">
                      {selectedStudy.execution.map((item, key) => (
                        <li key={key} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-705 dark:text-slate-350 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Campaign Results Banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-tr from-emerald-500/[0.04] to-teal-500/[0.04] dark:from-emerald-950/10 dark:to-teal-950/10 border border-emerald-500/10 dark:border-emerald-500/20">
                  <h4 className="font-display font-bold text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
                    Documented Campaign Business Outcomes
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedStudy.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-medium font-sans leading-tight">
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
