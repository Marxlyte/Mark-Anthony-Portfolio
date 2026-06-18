import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "motion/react";
import { ArrowRight, Download, Mail, ChevronRight, Sparkles, TrendingUp, Users, Presentation, Target, Award } from "lucide-react";
// @ts-ignore
import profilePic from "../assets/images/regenerated_image_1781734262918.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const metrics = [
    { label: "Years Experience", value: "7+", icon: Award, color: "text-amber-500 bg-amber-500/10" },
    { label: "Leads Generated", value: "4.6k+", icon: Target, color: "text-orange-500 bg-orange-500/10" },
    { label: "Campaigns Launched", value: "15+", icon: TrendingUp, color: "text-red-500 bg-red-400/10" },
    { label: "Webinars Executed", value: "28+", icon: Presentation, color: "text-yellow-600 bg-yellow-500/10" },
    { label: "Social Engagement", value: "120%", icon: Users, color: "text-amber-600 bg-amber-600/10" },
  ];

  // 3D Parallax Tilt Effect Variables for Hero Portrait
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 350, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 350, damping: 25 });

  // Parallax Core Scroll Computations
  const { scrollY } = useScroll();
  const yImageParallax = useTransform(scrollY, [0, 800], [0, 80]); 
  const yWidget1Parallax = useTransform(scrollY, [0, 800], [0, -110]); 
  const yWidget2Parallax = useTransform(scrollY, [0, 800], [0, -160]); 
  const yBgRing1Parallax = useTransform(scrollY, [0, 800], [0, 45]);
  const yBgRing2Parallax = useTransform(scrollY, [0, 800], [0, 70]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Generate radial shimmer background style dynamically based on pointer location
  const shimmerBg = useTransform([x, y], ([latestX, latestY]) => {
    const px = ((latestX as number) + 0.5) * 100;
    const py = ((latestY as number) + 0.5) * 100;
    return `radial-gradient(circle at ${px}% ${py}%, rgba(249, 115, 22, 0.18) 0%, rgba(249, 115, 22, 0) 65%)`;
  });

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Aesthetic Background Grid & Ambient Glows */}
      <div className="absolute inset-x-0 top-[-10%] h-[1000px] w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(249,115,22,0.06)_0,rgba(255,255,255,0)_100%)] pointer-events-none"></div>
      <div className="absolute top-[25%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/5 to-amber-500/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[550px] bg-gradient-to-tr from-amber-500/5 to-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Hero Main Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200/50 dark:border-orange-500/20 mb-6 group cursor-default">
              <Sparkles className="w-4 h-4 text-orange-500 dark:text-amber-400 animate-pulse" />
              <span className="text-xs font-semibold font-mono tracking-wide text-orange-600 dark:text-amber-400 uppercase">
                Open for Remote & Contract Systems
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-none"
            >
              Digital Marketing
              <span className="block mt-1 bg-gradient-to-r from-orange-500 via-[#eab308] to-amber-500 bg-clip-text text-transparent">
                Specialist & Growth Strategist
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mt-3 font-display font-medium text-lg sm:text-xl text-slate-700 dark:text-slate-200"
            >
              & Website Manager
            </motion.h2>

            {/* Subheadline Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Helping brands generate leads, increase revenue, build highly engaged communities, and scale through data-driven digital marketing, content strategy, and robust growth systems.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary: View Portfolio */}
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm font-display tracking-wide shadow-lg shadow-orange-500/15 hover:shadow-orange-500/25 dark:shadow-orange-950/20 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Contact Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/40 dark:hover:border-amber-400/30 text-slate-700 dark:text-slate-200 font-semibold text-sm font-display tracking-wide transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-orange-500 dark:text-amber-400" />
                Contact Me
              </a>

              {/* Download CV Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 py-2 px-3 text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-amber-400 text-xs font-mono tracking-wide transition-colors duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Hero Premium Image Col */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              variants={itemVariants}
              className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 cursor-pointer perspective-1000 z-10 group"
            >
              {/* Spinning Abstract Background Accents with Scroll Parallax */}
              <motion.div 
                style={{ transform: "translateZ(-30px)", y: yBgRing1Parallax }}
                className="absolute inset-[-15px] rounded-full border border-dashed border-slate-200 dark:border-slate-800 animate-[spin_50s_linear_infinite]"
              />
              <motion.div 
                style={{ transform: "translateZ(-40px)", y: yBgRing2Parallax }}
                className="absolute inset-[--30px] rounded-full border border-dashed border-slate-300/40 dark:border-slate-800/40 animate-[spin_100s_linear_infinite]"
              />

              {/* Glowing orange/amber brand underlay backdrop shadow */}
              <motion.div
                style={{ transform: "translateZ(0px)", y: yImageParallax }}
                className="absolute inset-[8px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl opacity-45 dark:opacity-35 blur-2xl group-hover:opacity-70 group-hover:scale-[1.05] transition-all duration-500 pointer-events-none translate-x-3 translate-y-3"
              />

              {/* Image Frame Wrapper */}
              <motion.div 
                style={{ transform: "translateZ(15px)", y: yImageParallax }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-900 z-10"
              >
                <img
                  src={profilePic}
                  alt="Uba Chinaza Mark-Anthony portrait"
                  className="w-full h-full object-cover select-none transform hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Pointer Spotlighting Shimmer overlay */}
                <motion.div 
                  style={{ background: shimmerBg }}
                  className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Embedded Growth Tag */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-4 z-20">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#f97316] uppercase">
                    Innovate ● Lead ● Scale
                  </span>
                </div>
              </motion.div>

              {/* Decorative floating widget items - placed AFTER image and layered with higher translateZ & z-index to stay in front */}
              <motion.div 
                style={{ 
                  transform: "translateZ(85px)", 
                  y: yWidget1Parallax,
                  position: "absolute",
                  top: "-1rem",
                  left: "-1rem",
                  zIndex: 40
                }}
              >
                <motion.div
                  className="p-3 bg-white/95 dark:bg-slate-900/98 backdrop-blur shadow-2xl border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col pr-2">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase font-mono tracking-wide">Leads Gen</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white font-display">4,600+ Leads</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                style={{ 
                  transform: "translateZ(110px)", 
                  y: yWidget2Parallax,
                  position: "absolute",
                  bottom: "2rem",
                  right: "-1.5rem",
                  zIndex: 40
                }}
              >
                <motion.div
                  className="p-3 bg-white/95 dark:bg-slate-900/98 backdrop-blur shadow-2xl border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-3"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500 text-white shadow-lg shadow-amber-500/20">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col pr-2">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase font-mono tracking-wide">CRO Metric</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white font-display">+40% Sales</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Glowing Ambient Behind Avatar */}
              <div 
                style={{ transform: "translateZ(-10px)" }}
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-3xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 blur-xl -z-10 animate-pulse"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Embedded Bento Stats Sheet */}
        <div className="relative mt-16 lg:mt-24 w-full z-20 border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {metrics.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center p-4 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200/40 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white select-none">
                      {stat.value}
                    </span>
                    <div className={`p-1.5 rounded-lg ${stat.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400 capitalize text-center leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
