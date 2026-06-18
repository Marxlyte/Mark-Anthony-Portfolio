import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Download, Sparkles, CheckCircle2, RefreshCw, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("matony569@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Remote Opportunity",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    const recipient = "marxlyte@gmail.com";
    const emailSubject = `[Digital Briefing] ${formState.subject}`;
    const emailBody = `Hello Mark-Anthony,\n\nI have submitted a digital briefing via your portfolio brand site with the following details:\n\n- Full Name / Firm: ${formState.name}\n- Client Email: ${formState.email}\n- Briefing Subject: ${formState.subject}\n- Briefing Description:\n${formState.message}\n\nPlease let me know when you receive this and have time to discuss.`;
    
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Simulate API posting
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Redirect to prefilled mail client
      window.location.href = mailtoUrl;

      // Reset after some time
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: "", email: "", subject: "Remote Opportunity", message: "" });
      }, 5000);
    }, 1550);
  };

  const handleDownloadResume = () => {
    // Generate a beautiful, structured Plain Text/Markdown Resume file on the fly and trigger automatic download
    const formatResume = `=====================================================
UBA CHINAZA MARK-ANTHONY - RESUME
=====================================================
Digital Marketing Specialist | Growth Strategist | Website Manager
Email: matony569@gmail.com | Phone: +234 701 111 7712
Location: Abuja, Nigeria | LinkedIn: Mark-Anthony Uba

SUMMARY:
Results-driven Digital Marketing Specialist and Growth Strategist with 7+ years of experience across Education, Study Abroad, Fashion, Agriculture, Food, Real Estate, and Professional Services. Expert at lead generation pipelines (4,600+ qualified leads generated), multi-channel content management, high-velocity email funnels, organic community building (120% social engagement growth), and technical CMS WordPress administration (+40% traffic & revenue).

CORE CAPABILITIES:
- Digital Marketing Strategy
- Funnel Optimization & Lead Acquisition
- Webinar & Online Event Coordination
- Social Media Content Strategy
- SEO, Keywords & Web Audits
- Python, WordPress, PHP, JavaScript
- Marketing Reporting & Google Analytics

MARKETING CAREER MILESTONES:
1. Founder & Growth Architect | Abuja (2024 - June 2026)
   - Lead premium marketing strategy mapping and funnel installations for regional and international startups.
2. Digital Strategist & Growth Manager | Glotale (2023 - 2024)
   - Generated 4,600+ qualified relocation leads.
   - Boosted organic website impressions and month-over-month revenue by 40%.
   - Coordinated 14+ conversion-optimized webinar broadcasts.
3. Website Manager & Digital Marketing Specialist | Arrows Education (2021 - 2023)
   - Directed international student recruitment webinars, generating 4,600+ student leads.
   - Enhanced core corporate layout, increasing conversion velocity and email subscriptions by 40%.
4. Social Media Manager | VNTTW Media Platform (2020 - 2021)
   - Promoted 15+ media episodes, increasing audience direct engagement by 120%.
5. Website Developer & Digital Strategist | WOSID Nigeria (2019 - 2020)
   - Programmed high-end responsive NGO portal, achieving <1.8s page loads across remote nodes.

EDUCATION:
- Digital Marketing Strategy Certification
- Web Application Engineering & Systems Administration

=====================================================
Thank you for your review. Let's scale your venture together!`;

    const blob = new Blob([formatResume], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Uba_Chinaza_Mark_Anthony_Resume.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-amber-500/10 to-yellow-500/5 rounded-full blur-[110px] pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-full mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
            <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 font-mono uppercase tracking-wide">
              Contact Center
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Let's Scale Your Brand
          </h2>
          <p className="mt-4 text-slate-655 dark:text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            Ready to hire a remote marketing specialist, partner with a growth strategist, or overhaul your website metrics? Complete the secure docket below.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Column 1: Contact Coordinates (Left) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">
                Direct Communication Coordinates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-450 font-sans leading-relaxed">
                Contact Mark-Anthony directly for quick check-ins, freelance consulting rates, contract agreements, or interview invites.
              </p>

              {/* Coordinates Cards */}
              <div className="space-y-4 pt-4">
                {/* Email Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200/50 dark:border-slate-805/85 bg-white dark:bg-slate-900/40 shadow-sm relative group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 dark:bg-orange-500/10 text-orange-600 dark:text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Email Address</span>
                      <a href="mailto:matony569@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-orange-500 dark:hover:text-amber-400 transition-colors mt-0.5 break-all">
                        matony569@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Copy Email Button with popup tooltip */}
                  <div className="relative flex items-center pr-1">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-xl text-slate-400 hover:text-orange-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer relative"
                      title="Copy Email to Clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>

                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: -10 }}
                          className="absolute bottom-full right-0 mb-2 px-2.5 py-1 text-[10px] font-bold font-mono text-white bg-slate-900 dark:bg-slate-800 rounded-lg shadow-md z-30 pointer-events-none border border-slate-700/20 whitespace-nowrap"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-805/85 bg-white dark:bg-slate-900/40 shadow-sm">
                  <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Direct Line</span>
                    <a href="tel:07011117712" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-[#f97316] transition-colors mt-0.5">
                      07011117712
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-820 bg-white dark:bg-slate-900/40 shadow-sm">
                  <div className="p-3 rounded-xl bg-red-500/10 dark:bg-red-400/10 text-red-650 dark:text-red-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Hometown Base</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5">
                      Abuja, Nigeria
                    </span>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-820 bg-white dark:bg-slate-900/40 shadow-sm">
                  <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">LinkedIn Handle</span>
                    <a href="https://linkedin.com/in/mark-anthony-uba" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-orange-500 dark:hover:text-amber-400 transition-colors mt-0.5">
                      Mark-Anthony Uba
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect Actions */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              {/* WhatsApp Connector */}
              <a
                href="https://wa.me/2347011117712"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-550 hover:bg-emerald-600 text-white font-semibold font-display text-xs sm:text-sm shadow-md shadow-emerald-500/10 transition-colors cursor-pointer"
                style={{ backgroundColor: "#128c7e" }}
              >
                <MessageSquare className="w-5.2 h-5.2" />
                Chat on WhatsApp
              </a>

              {/* Resume download */}
              <button
                onClick={handleDownloadResume}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/35 text-slate-700 dark:text-slate-300 font-semibold font-display text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                <Download className="w-4.5 h-4.5 text-[#f97316]" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Column 2: Digital Form (Right) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-md">
            <h3 className="font-display font-semibold text-xs text-slate-400 uppercase tracking-widest mb-6">
              Initialize Digital Briefing
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Client Name Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 pr-1 select-none">
                  Your Full Name / Firm
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Relocation Group"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#f97316] dark:focus:border-amber-400 text-sm transition-colors"
                />
              </div>

              {/* Client Email Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-505 pr-1 select-none">
                  Your Primary Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. director@acmegroup.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#f97316] dark:focus:border-amber-400 text-sm transition-colors"
                />
              </div>

              {/* Purpose Select Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-505 pr-1 select-none">
                  Project Purpose / Subject
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-950 dark:text-white focus:outline-none focus:border-[#f97316] dark:focus:border-amber-400 text-sm transition-colors cursor-pointer"
                >
                  <option value="Remote Opportunity">Remote Full-Time / Contract</option>
                  <option value="Freelance Consultation">Freelance Growth Consulting</option>
                  <option value="Website Optimization">Website Setup / CMS Operations</option>
                  <option value="Agency Partnership">Agency Partnership Agreement</option>
                  <option value="Startup Advice">Startup Mentorship / Advisory</option>
                </select>
              </div>

              {/* Message Input Box */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-505 pr-1 select-none">
                  Brief Overview / Message Core
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your project scope, ideal timelines, and desired KPIs..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#f97316] dark:focus:border-amber-400 text-sm transition-colors resize-none"
                />
              </div>

              {/* Submit triggers and state loaders */}
              <div className="pt-2 relative">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold font-display text-sm shadow-md transition-all cursor-pointer ${
                    isSuccess
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : "bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Dispatching Docket...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-4.5 h-4.5" />
                      Docket Saved Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Dispatch Briefing
                    </>
                  )}
                </button>

                {/* Submitting micro text */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-center text-[11px] text-emerald-500 font-mono mt-3.5"
                    >
                      Thank you! Mark-Anthony will review this and respond within 12 hours.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
