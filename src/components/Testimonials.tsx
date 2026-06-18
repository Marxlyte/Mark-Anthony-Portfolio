import { motion } from "motion/react";
import { Quote, Star, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Decorative Ornaments */}
      <div className="absolute top-[40%] right-[-5%] w-80 h-80 bg-gradient-to-tr from-amber-500/5 to-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-full mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[10px] font-semibold text-orange-600 dark:text-amber-400 font-mono uppercase tracking-wide">
              Recommendations
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Client & Partner Endorsements
          </h2>
          <p className="mt-4 text-slate-655 dark:text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            What directors, operations heads, and academic partners say about collaborating on growth campaigns, webinar design, and lead gen programs.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/20 dark:bg-slate-950/20 hover:bg-white dark:hover:bg-slate-900 p-8 hover:shadow-xl hover:border-orange-500/20 dark:hover:border-amber-500/15 transition-all duration-300"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-orange-500/10 dark:text-orange-500/5 group-hover:text-orange-500/20 group-hover:scale-105 transition-all">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5 Stars Rating Indicator */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-amber-450 text-amber-500"
                    />
                  ))}
                </div>

                {/* Main Content Review Quote */}
                <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-sans italic relative z-10">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Client Profile Details Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-805/60 flex items-center gap-3.5">
                {/* Visual Avatar Monogram */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-display font-bold text-sm tracking-wider shadow">
                  {testimonial.name.split(" ").map(w => w[0]).join("")}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-display">
                    {testimonial.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wide mt-0.5">
                    {testimonial.role} at <span className="font-semibold text-slate-600 dark:text-slate-300">{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
