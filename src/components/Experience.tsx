import { motion } from "motion/react";
import { EXPERIENCE_TIMELINE } from "../data";
import { Calendar, MapPin, Briefcase, ChevronRight, Award, CheckCircle2, TrendingUp, Presentation } from "lucide-react";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* Background Grid Accent */}
      <div className="absolute top-[20%] left-[-5%] w-80 h-80 bg-gradient-to-tr from-orange-500/5 to-amber-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-full mb-4 animate-pulse">
            <Briefcase className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[10px] font-semibold text-orange-600 dark:text-amber-400 font-mono uppercase tracking-wide">
              Professional Journey
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Work History & Timeline
          </h2>
          <p className="mt-4 text-slate-655 dark:text-slate-400 text-sm sm:text-base font-sans">
            A history of planning campaign structures, optimizing digital web setups, and leading marketing operations for diverse private and corporate enterprises.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line Track Connector */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-amber-500/40 to-slate-200/20 dark:to-slate-800/10 -translate-x-[1px] md:translate-x-0"></div>

          {/* Timeline Items Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {EXPERIENCE_TIMELINE.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Glowing Pin Bullet */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-orange-500 dark:border-amber-500 shadow-md transform -translate-x-[11px] md:-translate-x-[12px] z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-amber-450"></span>
                  </div>

                  {/* Core Card Block */}
                  <div
                    className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                      isEven ? "md:pr-10 text-left" : "md:pl-10 text-left"
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 shadow-sm hover:border-orange-500/20 dark:hover:border-amber-500/15 transition-all duration-300 transform group hover:-translate-y-0.5 relative">
                      
                      {/* Timeline Card Heading */}
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider font-bold text-orange-500 dark:text-amber-400 bg-orange-500/5 dark:bg-amber-400/5 px-2.5 py-1 rounded-md mb-3">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>

                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-1 leading-snug">
                        {exp.role}
                      </h3>

                      {/* Company Line and Location */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-350">{exp.company}</span>
                        <span className="text-slate-300 dark:text-slate-700 select-none">•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Brief overview summary */}
                      <p className="mt-4 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed font-sans border-l-2 border-orange-500/20 dark:border-amber-500/20 pl-3">
                        {exp.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="mt-5 space-y-2 text-slate-655 dark:text-slate-350 font-sans">
                        {exp.bulletPoints.map((item, key) => (
                          <li key={key} className="flex items-start gap-2 text-xs leading-normal">
                            <ChevronRight className="w-3.5 h-3.5 text-orange-500 dark:text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Embedded Stats Chips (If Available) */}
                      {exp.metrics && (
                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-2.5">
                          {exp.metrics.map((m, key) => (
                            <div
                              key={key}
                              className="inline-flex items-center gap-1 py-1 px-2.5 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-100/40 dark:border-orange-900/20 font-sans text-[10px] font-bold text-orange-600 dark:text-amber-400 uppercase tracking-wide"
                            >
                              <TrendingUp className="w-3 h-3" />
                              {m.label}: <span className="text-slate-900 dark:text-white font-mono ml-0.5">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
