import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Megaphone, Code, BarChart3, Palette, Cpu, Sparkles, Stars, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  // Map category names to icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Megaphone":
        return <Megaphone className="w-5 h-5 animate-pulse text-orange-500" />;
      case "Code":
        return <Code className="w-5 h-5 text-amber-500" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-emerald-500" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-purple-500" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-rose-500" />;
      default:
        return <Megaphone className="w-5 h-5" />;
    }
  };

  const currentCategory = SKILL_CATEGORIES[activeCategory];

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
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[30%] right-[-10%] w-96 h-96 bg-gradient-to-tr from-amber-500/5 to-orange-500/5 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-rose-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-full mb-4">
            <Stars className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 font-mono uppercase tracking-wide">
              Technical Arsenal
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Capabilities & Professional Skills
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 font-sans">
            A cohesive blend of marketing leadership, growth architecture, custom web engineering, creative content editing, and cutting-edge artificial intelligence workflows.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1 px-1">
              Select Category
            </span>
            
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative flex items-center justify-between cursor-pointer group ${
                  activeCategory === idx
                    ? "bg-white dark:bg-slate-900 border-orange-500/30 dark:border-amber-500/35 shadow-md shadow-orange-500/5"
                    : "bg-white/40 dark:bg-slate-950/20 border-slate-200/50 dark:border-slate-800/40 hover:bg-white/70 dark:hover:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2.5 rounded-xl transition-all duration-300 ${
                      activeCategory === idx
                        ? "bg-orange-500/10 dark:bg-amber-500/10"
                        : "bg-slate-100 dark:bg-slate-900 group-hover:bg-orange-500/5"
                    }`}
                  >
                    {getIcon(cat.icon)}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-display font-semibold text-sm transition-colors duration-250 ${
                        activeCategory === idx
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200"
                      }`}
                    >
                      {cat.title}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {activeCategory === idx && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1.5 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-500 absolute left-0"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Skills Display Board */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="p-3 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl text-orange-600 dark:text-amber-400">
                    {getIcon(currentCategory.icon)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display font-bold text-lg text-slate-850 dark:text-white">
                      {currentCategory.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      Specialized abilities representing deep production experience
                    </p>
                  </div>
                </div>

                {/* Grid of details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  {currentCategory.skills.map((skill, index) => {
                    // Decide expert values or labels
                    const skillName = typeof skill === "string" ? skill : skill.name;
                    
                    // Specific highlight labels (like Code, AI, or High Demand)
                    const isAi = currentCategory.title.includes("AI Workflows") || skillName.includes("AI");
                    const isCode = currentCategory.title.includes("Web Development");

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={skillName}
                        className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between hover:border-orange-500/20 group hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                              {skillName}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono mt-0.5 tracking-wide uppercase">
                              {isAi ? "● AI Automated" : isCode ? "● Production Ready" : "● Core Competency"}
                            </span>
                          </div>
                        </div>

                        {/* Visual Progress Line */}
                        <div className="mt-4 pt-2 border-t border-slate-100/40 dark:border-slate-800/40">
                          <div className="h-1.5 w-full bg-slate-200/50 dark:bg-slate-800/80 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isAi ? "95%" : isCode ? "88%" : "92%" }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* AI / Automation Notice Card */}
                {currentCategory.title.includes("AI Workflows") && (
                  <div className="mt-6 p-4 rounded-2xl bg-gradient-to-tr from-orange-500/[0.03] to-amber-500/[0.03] border border-orange-500/10 dark:border-amber-500/10 flex items-center gap-3.5">
                    <Sparkles className="w-5 h-5 text-[#f97316] shrink-0 animate-pulse" />
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      <strong>AI Workflow Specialist</strong>: Leveraging ChatGPT, Claude, and Gemini inside corporate processes to draft content, automate copy structures, map campaign designs, and scale operations rapidly and effectively.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
