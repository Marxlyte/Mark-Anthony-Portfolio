import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { MapPin, CheckCircle, GraduationCap, Briefcase, Sparkles, Building2, Landmark, Shirt, Tractor, ChefHat, Layout } from "lucide-react";
// @ts-ignore
import profilePic from "../assets/images/regenerated_image_1781734267963.png";

export default function About() {
  const sectors = [
    { name: "Education", icon: GraduationCap, color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400" },
    { name: "Study Abroad", icon: Landmark, color: "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400" },
    { name: "Fashion", icon: Shirt, color: "bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400" },
    { name: "Agriculture", icon: Tractor, color: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400" },
    { name: "Food & Culinary", icon: ChefHat, color: "bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400" },
    { name: "Real Estate", icon: Building2, color: "bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400" },
    { name: "Professional Services", icon: Layout, color: "bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-450" }
  ];

  const highlights = [
    "Digital Marketing Strategy & Roadmap Design",
    "Conversion-Optimized Webinar & Landing Page Funnels",
    "High-converting Lead Generation & List Building Systems",
    "Multi-channel Content & Social Media Management",
    "Community Building & High-velocity Messaging Groups",
    "CMS Website Management & Performance Optimization"
  ];

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

  // 3D Parallax Tilt Effect Variables
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 350, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 350, damping: 25 });

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
    return `radial-gradient(circle at ${px}% ${py}%, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0) 65%)`;
  });

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Image Portrait Frame (Left) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative group mx-auto max-w-sm lg:max-w-none cursor-pointer perspective-1000"
            >
              {/* Outer Golden/Orange frame offset */}
              <div 
                style={{ transform: "translateZ(-20px)" }}
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 opacity-20 group-hover:opacity-35 transition-opacity duration-300 blur-sm"
              />
              
              <div 
                style={{ transform: "translateZ(10px)" }}
                className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 shadow-xl transition-all duration-300"
              >
                <img
                  src={profilePic}
                  alt="Uba Chinaza Mark-Anthony profile picture"
                  className="w-full h-auto aspect-square object-cover select-none filter dark:brightness-95 transform group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Pointer Spotlighting Shimmer overlay */}
                <motion.div 
                  style={{ background: shimmerBg }}
                  className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Location Overlay Badge */}
                <div 
                  style={{ transform: "translateZ(20px)" }}
                  className="absolute bottom-4 left-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/85 text-white flex items-center gap-2.5 shadow-lg shadow-black/20"
                >
                  <MapPin className="w-4 h-4 text-[#f97316]" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold leading-none">Abuja, Nigeria</span>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wide mt-0.5">Primary Office (GMT+1)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Profile Biography (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header section tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-full self-start mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 dark:text-amber-400" />
              <span className="text-[10px] font-semibold text-orange-600 dark:text-amber-400 font-mono uppercase tracking-wide">
                Professional Bio
              </span>
            </div>

            {/* Profile heading */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Uba Chinaza Mark-Anthony
            </h2>
            <p className="mt-2 text-sm font-mono tracking-widest uppercase text-[#f97316] font-semibold">
              Digital Marketing Specialist & Growth Architect
            </p>

            <div className="mt-6 space-y-4 text-slate-655 dark:text-slate-300 font-sans leading-relaxed">
              <p>
                Results-driven <span className="font-semibold text-slate-800 dark:text-white">Digital Marketing Specialist and Growth Strategist</span> with rich, cross-industry experience driving traffic, building funnels, and expanding awareness. My portfolio spans pivotal roles within <span className="font-medium text-[#f97316]">Education, Study Abroad, Fashion, Agriculture, Food, Real Estate, and Professional Services</span>.
              </p>
              <p>
                I specialize in high-impact digital marketing designs, social media operations, content distribution networks, lead generation workflows, email marketing automations, and recurring webinars. As an experienced technical Website Manager, I ensure pages remain fast, search-optimized, and conversion-ready.
              </p>
              <p>
                To date, I have engineered and deployed <span className="font-semibold text-slate-800 dark:text-white">over 15 marketing campaigns</span>, harvested and qualified <span className="font-semibold text-slate-800 dark:text-white">more than 4,600 verified leads</span>, consistently accelerated portal conversion metrics, and grown micro-social assets from initial seeds to thousands of engaged brand ambassadors.
              </p>
            </div>

            {/* Target Industry Sectors */}
            <div className="mt-8">
              <h3 className="font-display font-semibold text-xs text-slate-400 uppercase tracking-widest mb-4">
                Target Sectors & Experience
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {sectors.map((sec, idx) => {
                  const Icon = sec.icon;
                  return (
                    <div 
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800 text-xs font-medium bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300`}
                    >
                      <Icon className="w-3.5 h-3.5 text-orange-500 dark:text-amber-400" />
                      {sec.name}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core Capability Highlights */}
            <div className="mt-10 border-t border-slate-105 dark:border-slate-800/80 pt-8">
              <h3 className="font-display font-semibold text-xs text-slate-400 uppercase tracking-widest mb-4">
                Core Capability Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((hlt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 group">
                    <CheckCircle className="w-4.5 h-4.5 text-orange-500 dark:text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight">
                      {hlt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
