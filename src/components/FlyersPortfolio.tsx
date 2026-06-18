import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Eye, Sparkles, Paintbrush, Award, Target, TrendingUp, Compass, ArrowRight, Layers, Camera, Heart, MessageSquare, Share2 } from "lucide-react";

// Import generated creative assets
// @ts-ignore
import flyerGlobalTalent from "../assets/images/regenerated_image_1781791869385.png";
// @ts-ignore
import flyerStudyAbroad from "../assets/images/flyer_study_abroad_1781734724843.jpg";
// @ts-ignore
import flyerVnttwEpisode from "../assets/images/regenerated_image_1781791873195.png";
// @ts-ignore
import flyerFinovateLaunch from "../assets/images/regenerated_image_1781791876086.png";

// Import social media network photos
// @ts-ignore
import socialGlotaleEvent from "../assets/images/social_glotale_event_1781735237010.jpg";
// @ts-ignore
import socialArrowsStudent from "../assets/images/social_arrows_student_1781735252179.jpg";
// @ts-ignore
import socialVnttwStudio from "../assets/images/social_vnttw_studio_1781735265763.jpg";
// @ts-ignore
import socialFinovateOffice from "../assets/images/social_finovate_office_1781735280369.jpg";

interface DesignItem {
  id: string;
  title: string;
  campaign: string;
  category: "Lead Generation" | "Academics" | "Social Branding" | "Corporate Finance";
  tool: string;
  objective: string;
  breakdown: string;
  stats: string;
  colorTheme: string;
  image: string;
  audience: string;
  metricsLabel: string;
  isSocialPhoto?: boolean;
  socialMetrics?: { likes: string; comments: string; shares: string };
}

export default function FlyersPortfolio() {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
  const [viewMode, setViewMode] = useState<"designs" | "socials">("designs");
  const [activeTab, setActiveTab] = useState<string>("All");

  const flyerItems: DesignItem[] = [
    {
      id: "global-talent",
      title: "UK Global Talent Visa Elite Masterclass Flyer",
      campaign: "Glotale Growth Initiative",
      category: "Lead Generation",
      tool: "Photoshop & Canva Pro",
      objective: "Drive masterclass registrations among high-income managers, corporate tech executives, and elite foreign software developers.",
      breakdown: "Uses a highly focused gold-on-navy palette to instantly communicate premium authority. Simple structural alignment forces visual attention toward high-value bulleted deliverables and registration CTA fields.",
      stats: "4,600+ Leads Registered",
      metricsLabel: "Verified Leads",
      audience: "Tech Engineers & Executive Managers",
      colorTheme: "from-blue-600 to-indigo-900 border-indigo-500/35",
      image: flyerGlobalTalent,
      isSocialPhoto: false
    },
    {
      id: "study-abroad",
      title: "International Study Abroad Consult & Fair Poster",
      campaign: "Arrows Student Funnel Strategy",
      category: "Academics",
      tool: "Adobe Illustrator & Creative Systems",
      objective: "Hook parent decision-makers and high-intent students for professional international relocation and school consulting.",
      breakdown: "Employs comforting organic blues paired with highly contrasting warning/action orange tones. Balanced negative space prevents visual overcrowding while displaying key event milestones.",
      stats: "+250% Student Signups",
      metricsLabel: "Conversion Increase",
      audience: "Students & Parent Decision-Makers",
      colorTheme: "from-orange-500 to-amber-600 border-orange-500/30",
      image: flyerStudyAbroad,
      isSocialPhoto: false
    },
    {
      id: "vnttw-podcast",
      title: "VNTTW Media Broadcast Episode Showcard",
      campaign: "VNTTW Digital Series Launch",
      category: "Social Branding",
      tool: "Figma & Canva Frameworks",
      objective: "Maximize digital episode clicks, profile views, and community retentions across high-velocity mobile feeds.",
      breakdown: "Blends neon-purple elements with subtle audio waveforms against deep backdrops. Created specifically to disrupt user scroll behaviors on Instagram, TikTok, and Threads.",
      stats: "120% Engagement Spike",
      metricsLabel: "Viewer Actions",
      audience: "Crypto/Media & Creative Enthusiasts",
      colorTheme: "from-purple-600 to-fuchsia-950 border-purple-500/30",
      image: flyerVnttwEpisode,
      isSocialPhoto: false
    },
    {
      id: "finovate-corporate",
      title: "Finovate Capital Premium Brand Launch Banner",
      campaign: "Finovate Market Authority Campaign",
      category: "Corporate Finance",
      tool: "Adobe Illustrator & InDesign",
      objective: "Establish prestige, institutional confidence, and high-net-worth investor brand recall upon corporate entry.",
      breakdown: "Designed with luxurious geometric golden borders contrasting against a heavy corporate slate-navy. Clean proportional sans-serif typeface pairing exudes banking stability.",
      stats: "100% Brand Launch Success",
      metricsLabel: "Executive Approval",
      audience: "High-Net-Worth Individuals & Investors",
      colorTheme: "from-slate-800 to-slate-950 border-amber-500/20",
      image: flyerFinovateLaunch,
      isSocialPhoto: false
    }
  ];

  const socialItems: DesignItem[] = [
    {
      id: "social-glotale",
      title: "Glotale Global Talent Visa Masterclass Series Post",
      campaign: "Glotale Real-World Mentorship",
      category: "Lead Generation",
      tool: "Live Event Capture & Media Distribution",
      objective: "Establish robust, authentic, and real-world executive authority on LinkedIn and Instagram feeds through live-documented mentorship interactions.",
      breakdown: "Documentary-format photography detailing premium advice sessions. The instructor standing alongside clear digital growth paths triggers extreme visual prestige, driving click-throughs far higher than flat graphic panels.",
      stats: "89% Organic Share Uplift",
      metricsLabel: "Social Share Growth",
      audience: "LinkedIn Executives & Tech Engineers",
      colorTheme: "from-sky-500 to-blue-800 border-sky-400/30",
      image: socialGlotaleEvent,
      isSocialPhoto: true,
      socialMetrics: { likes: "1.4k", comments: "142", shares: "380" }
    },
    {
      id: "social-arrows",
      title: "Study Abroad Admissions Counselling Moments",
      campaign: "Arrows Admissions Funnel Success",
      category: "Academics",
      tool: "Organic Social Photo Drive",
      objective: "Highlight welcoming, highly personalized advisory experiences, lowering stress hurdles for tuition-paying parents and prospective students.",
      breakdown: "Warm lighting and realistic counselor-student interactions. Capturing the dynamic moment of browsing brochures naturally translates brand reliability and premium consulting support.",
      stats: "+150 High-Intent Leads",
      metricsLabel: "Weekly DM Conversations",
      audience: "Parents & Global Relocation Aspirants",
      colorTheme: "from-amber-500 to-orange-700 border-orange-500/30",
      image: socialArrowsStudent,
      isSocialPhoto: true,
      socialMetrics: { likes: "980", comments: "98", shares: "140" }
    },
    {
      id: "social-vnttw",
      title: "Sleek Podcast Studio Production Broadcast",
      campaign: "VNTTW Media Social Hub",
      category: "Social Branding",
      tool: "Professional Content Production Studio",
      objective: "Infect feeds with an ultra-cool brand identity, driving podcast streams, brand trust, and massive organic profile loops.",
      breakdown: "Uses highly atmospheric warm amber and electric violet neon details around professional broadcasting hardware. This curated studio mood immediately prompts digital creators to comment and explore show clips.",
      stats: "45,000+ Active Streams",
      metricsLabel: "Monthly Stream Reach",
      audience: "Broadcasting Fans & Digital Creators",
      colorTheme: "from-fuchsia-500 to-indigo-950 border-fuchsia-500/25",
      image: socialVnttwStudio,
      isSocialPhoto: true,
      socialMetrics: { likes: "3.2k", comments: "410", shares: "1.1k" }
    },
    {
      id: "social-finovate",
      title: "Finovate Executive Asset Consultation Circle",
      campaign: "Finovate Financial Authority",
      category: "Corporate Finance",
      tool: "Premium Corporate Brand Photography",
      objective: "Reinforce banking compliance, executive prestige, and high-net-worth investor confidence upon financial launch.",
      breakdown: "High-end corporate meeting environment featuring wealth specialist consultations. Slate tones, clean lighting, and neat visual cues exude financial security and enterprise structure.",
      stats: "100+ Institutional Queries",
      metricsLabel: "High-Net-Worth Bookings",
      audience: "Investors, Executives & Partners",
      colorTheme: "from-slate-700 to-slate-900 border-slate-500/30",
      image: socialFinovateOffice,
      isSocialPhoto: true,
      socialMetrics: { likes: "760", comments: "64", shares: "115" }
    }
  ];

  const currentWorksList = viewMode === "designs" ? flyerItems : socialItems;
  const categories = ["All", "Lead Generation", "Academics", "Social Branding", "Corporate Finance"];

  const filteredItems = activeTab === "All"
    ? currentWorksList
    : currentWorksList.filter(item => item.category === activeTab);

  return (
    <section id="creative-portfolio" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[15%] right-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-gradient-to-tr from-indigo-500/5 to-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Modern Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-full mb-4">
              <Paintbrush className="w-3.5 h-3.5 text-orange-500 dark:text-amber-400 animate-pulse" />
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 font-mono uppercase tracking-wide">
                Creative Portfolio & Job Works
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Design Assets & Company Social Media Photos
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
              A comprehensive view of my dual design-marketing execution: pristine marketing flyer artworks and original corporate event photos from company social feeds. Click on any item to view its target psychology and leads breakdown.
            </p>
          </div>

          {/* Premium Selector Controls for Mode Toggle */}
          <div className="flex bg-slate-200/60 dark:bg-slate-900/80 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shrink-0">
            <button
              onClick={() => { setViewMode("designs"); setActiveTab("All"); }}
              className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-300 ${
                viewMode === "designs"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md border border-slate-100 dark:border-slate-750"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Paintbrush className="w-3.5 h-3.5" />
              Campaign Flyers
            </button>
            <button
              onClick={() => { setViewMode("socials"); setActiveTab("All"); }}
              className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-300 ${
                viewMode === "socials"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md border border-slate-100 dark:border-slate-750"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              Socials & Events Feed
            </button>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 scrollbar-none max-w-full border-b border-slate-200/40 dark:border-slate-800/40">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-slate-900 dark:bg-slate-800 text-orange-500 dark:text-amber-400 shadow-sm border border-slate-200 dark:border-slate-750"
                  : "bg-white dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/50 dark:border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Visual Bento/Grid of Designs and Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-slate-900/50 rounded-3xl overflow-hidden shadow-md border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 hover:shadow-xl hover:border-orange-500/20 dark:hover:border-amber-400/20"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay for social indicators if it's a social photo */}
                  {item.isSocialPhoto && (
                    <div className="absolute top-4 left-4 p-1.5 bg-slate-900/85 backdrop-blur-md text-white rounded-lg text-[9px] font-mono tracking-wide font-bold flex items-center gap-1 border border-white/10 z-20">
                      <Camera className="w-3 h-3 text-[#f97316]" />
                      COMPANY SOCIAL MOMENT
                    </div>
                  )}

                  {/* Gradient Shadow Frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Full Zoom-In View trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 pointer-events-none">
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="pointer-events-auto p-3.5 bg-orange-500 dark:bg-amber-400 text-white dark:text-slate-950 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold font-mono tracking-wider text-orange-500 dark:text-amber-400 uppercase">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        {item.tool.split(" & ")[0]}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-1 group-hover:text-orange-500 dark:group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
                      Campaign: <span className="font-semibold text-slate-700 dark:text-slate-350">{item.campaign.split(" ")[0]}</span>
                    </p>
                  </div>

                  {/* Dynamic stats row or social metrics */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    {item.isSocialPhoto && item.socialMetrics ? (
                      <div className="flex items-center gap-3 text-slate-450 dark:text-slate-500">
                        <div className="flex items-center gap-1 text-[10px] font-mono">
                          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                          {item.socialMetrics.likes}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-mono">
                          <MessageSquare className="w-3 h-3 text-blue-500" />
                          {item.socialMetrics.comments}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {item.stats}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 uppercase">
                          {item.metricsLabel}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="inline-flex items-center gap-1 text-xs font-bold font-display text-slate-600 dark:text-slate-350 hover:text-orange-500 dark:hover:text-amber-400 transition-colors p-1 cursor-pointer"
                    >
                      Case details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Showcase Modal Breakdown Trigger */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Blueprint Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.55 }}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] overflow-hidden shadow-2xl z-20 max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Icon floating */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all z-30 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Graphic Asset/Social Post Display Section */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-slate-150 dark:bg-slate-950 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 select-none">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain md:object-cover max-h-[40vh] md:max-h-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Job Campaign Description Details */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 overflow-y-auto max-h-[50vh] md:max-h-[90vh] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 mb-3.5">
                    <Sparkles className="w-3 h-3 text-orange-500 animate-[spin_5s_linear_infinite]" />
                    <span className="text-[10px] font-bold font-mono text-orange-600 dark:text-amber-400 uppercase">
                      {selectedItem.isSocialPhoto ? "Social Moment Capture" : selectedItem.category}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium font-sans">
                    Campaign Scope: <span className="font-semibold text-slate-850 dark:text-white">{selectedItem.campaign}</span>
                  </p>

                  <div className="mt-8 space-y-6">
                    {/* Marketing Objectives */}
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                        <Target className="w-4 h-4 text-orange-500" />
                        Campaign Objective
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 font-sans leading-relaxed">
                        {selectedItem.objective}
                      </p>
                    </div>

                    {/* Creative Breakdown description */}
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                        <Award className="w-4 h-4 text-amber-500" />
                        Design Layout & Visual Psychology
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 font-sans leading-relaxed">
                        {selectedItem.breakdown}
                      </p>
                    </div>

                    {/* Target Audience specifications */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase font-mono mb-1">
                          Role & Execution
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {selectedItem.tool}
                        </span>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase font-mono mb-1">
                          Target Demographic
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {selectedItem.audience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conversion metrics footer block or social shares */}
                <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-orange-500/[0.01] to-amber-500/[0.01] p-4 rounded-2xl border border-slate-100 dark:border-slate-800/40">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 flex items-center justify-center text-orange-500 shrink-0">
                      <TrendingUp className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold font-mono uppercase text-slate-400">
                        {selectedItem.metricsLabel}
                      </div>
                      <div className="text-sm font-extrabold text-slate-800 dark:text-white leading-none mt-0.5">
                        {selectedItem.stats}
                      </div>
                    </div>
                  </div>

                  {selectedItem.isSocialPhoto && selectedItem.socialMetrics ? (
                    <div className="flex items-center gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-805">
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-800 dark:text-white">{selectedItem.socialMetrics.likes}</span>
                        <span className="text-[8px] font-bold font-mono text-slate-400 capitalize flex items-center gap-0.5"><Heart className="w-2.5 h-2.5 text-red-500" /> Likes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-800 dark:text-white">{selectedItem.socialMetrics.comments}</span>
                        <span className="text-[8px] font-bold font-mono text-slate-400 capitalize flex items-center gap-0.5"><MessageSquare className="w-2.5 h-2.5 text-blue-500" /> Replies</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-800 dark:text-white">{selectedItem.socialMetrics.shares}</span>
                        <span className="text-[8px] font-bold font-mono text-slate-400 capitalize flex items-center gap-0.5"><Share2 className="w-2.5 h-2.5 text-emerald-500" /> Shares</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 py-1.5 px-3 rounded-lg text-[10px] font-bold text-slate-600 dark:text-slate-350 font-mono self-start sm:self-center">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      Marketing Asset
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
