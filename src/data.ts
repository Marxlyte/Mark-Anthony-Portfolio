import { CaseStudy, Experience, SkillCategory, Testimonial } from "./types";

export const PORTFOLIO_STATS = [
  { label: "Years Experience", value: "7+" },
  { label: "Qualified Leads", value: "4,600+" },
  { label: "Campaigns Launched", value: "15+" },
  { label: "Webinars Executed", value: "28+" },
  { label: "Social Growth", value: "120%" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Marketing & Strategy",
    icon: "Megaphone",
    skills: [
      "Digital Marketing Strategy",
      "Social Media Marketing",
      "Lead Generation",
      "Growth Marketing",
      "Content Marketing",
      "Email Marketing",
      "SEO & Keywords",
      "Community Management"
    ]
  },
  {
    title: "Web Development",
    icon: "Code",
    skills: [
      "WordPress",
      "Elementor Builder",
      "Website Management",
      "JavaScript",
      "Python",
      "PHP (Laravel)"
    ]
  },
  {
    title: "Analytics & Growth",
    icon: "BarChart3",
    skills: [
      "Google Analytics",
      "Google Search Console",
      "Conversion Rate Optimization (CRO)",
      "Marketing Reporting",
      "Data-Driven Marketing"
    ]
  },
  {
    title: "Design & Content",
    icon: "Palette",
    skills: [
      "Canva Pro",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "CapCut Video Editor",
      "Graphic Design"
    ]
  },
  {
    title: "AI Workflows",
    icon: "Cpu",
    skills: [
      "ChatGPT Integration",
      "Claude Workflows",
      "Gemini Automation",
      "Midjourney Prompting",
      "AI Marketing Workflows"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "glotale",
    title: "Glotale Global Talent Visa Growth Campaign",
    role: "Digital Strategist & Growth Manager",
    category: "Lead Generation & Expansion",
    challenge: "Glotale required an ambitious framework to scale visibility and establish credible authority in the study-abroad and career relocation space. The primary objective was to generate high-quality leads for the prestigious UK Global Talent Visa and other professional services amidst high market noise and complex visa requirements.",
    strategy: [
      "Designed full-funnel lead generation and audience segmentation blueprints.",
      "Engineered automated landing pages paired with an integrated community pipeline.",
      "Created highly educational high-impact content series addressing core relocation queries.",
      "Structured a recurring webinar ecosystem featuring relocation mentors and industry leaders.",
      "Developed high-velocity WhatsApp community channels for personalized real-time support."
    ],
    execution: [
      "Programmed and launched a high-yield series of 14 key relocation webinars.",
      "Onboarded, coached, and coordinated top-tier external immigration experts.",
      "Designed conversion-optimized landing pages and webinar registration web funnels.",
      "Drafted high-converting automated email nurture programs to drive webinar attendance.",
      "Devised comprehensive weekly social media schedules and engaging graphic assets."
    ],
    results: [
      "Captured 4,600+ verified and highly qualified corporate relocation leads.",
      "Spurred an instant 40% uptick in active website-organic traffic.",
      "Drove a massive 40% month-over-month revenue boost through conversion loops.",
      "Maintained a solid 40% growth in email subscription and open-conversion metrics.",
      "Sustained an exceptional 120% rise in social platform interactions and community growth."
    ],
    metrics: [
      { label: "Qualified Leads", value: "4,600+" },
      { label: "Traffic Surge", value: "+40%" },
      { label: "Revenue Growth", value: "+40%" },
      { label: "Engagement Rate", value: "120%" }
    ]
  },
  {
    id: "arrows",
    title: "Arrows Education Student Recruitment",
    role: "Website Manager & Digital Marketing Manager",
    category: "Conversion Funnels & Web",
    challenge: "Increase awareness of study abroad opportunities, streamline high-intent prospective student leads, and completely re-engineer digital engagement across multiple underperforming corporate touchpoints.",
    strategy: [
      "Formulated comprehensive multi-platform student recruitment strategies.",
      "Engineered interactive study-abroad information webinars to filter high-intent prospects.",
      "Restructured core corporate web pages to improve mobile usability and lead submission rates.",
      "Launched automated email sequences addressing parent doubts, visa documentation, and tuition schedules."
    ],
    execution: [
      "Spearheaded international information webinars representing multiple study destinations.",
      "Maintained weekly website technical updates, security standards, and performance optimization.",
      "Developed high-converting student landing systems and tracking pixels.",
      "Created descriptive brochures, engaging parent-teacher slide decks, and digital banners."
    ],
    results: [
      "Acquired over 4,600 pre-screened student recruitment leads.",
      "Boosted global traffic by 40% via SEO-optimized regional content templates.",
      "Aided a 40% yearly revenue growth via optimized application-to-admission funnels.",
      "Fostered deep social media interest with a 120% spike in direct message inquiries."
    ],
    metrics: [
      { label: "Qualified Leads", value: "4,600+" },
      { label: "Web Traffic", value: "+40%" },
      { label: "Revenue Surge", value: "+40%" },
      { label: "Social Uplift", value: "120%" }
    ]
  },
  {
    id: "vnttw",
    title: "VNTTW Social Media Engagement Campaign",
    role: "Social Media Manager",
    category: "Community Building & Content",
    challenge: "Overcome low organic discoverability, build audience retention, and scale interactive engagement for a newly launched, premium media-focused platform.",
    strategy: [
      "Structured a high-frequency multi-channel content calendar.",
      "Developed custom audience-retention frameworks using relatable video hooks.",
      "Implemented a structured social listening protocol to align with trending topics."
    ],
    execution: [
      "Created and delivered highly interactive post captions and micro-content briefs daily.",
      "Promoted and handled creative campaigns for over 15 digital episodes.",
      "Directly engaged with active followers, moderating chats, and addressing inquiries."
    ],
    results: [
      "Substantially elevated community retention and comment section interactions.",
      "Cultivated a vibrant and self-sustaining online hub of media enthusiasts.",
      "Maximized episode-to-website click-throughs by designing swipe-up stories and link guides."
    ],
    metrics: [
      { label: "Episodes Promoted", value: "15+" },
      { label: "Community", value: "Interactive" },
      { label: "Reach", value: "Organic" }
    ]
  },
  {
    id: "wosid",
    title: "WOSID Nigeria Portal & Usability Initiative",
    role: "Website Developer & Digital Strategist",
    category: "UI/UX & Web Development",
    challenge: "Deliver a solid, professional, mobile-friendly digital flagship portal for an active non-governmental organization focusing on women's leadership and community training.",
    strategy: [
      "Engineered a polished, accessible content architecture matching global NGO standards.",
      "Optimized load times and page performance across remote regions with limited connection speeds.",
      "Structured simple, low-friction donation and sponsorship application processes."
    ],
    execution: [
      "Programmed and customized highly responsive pages incorporating modern visual narratives.",
      "Drafted accessibility-compliant layout grids and translation-friendly information desks.",
      "Conducted detailed usability tests across iOS, Android, and varying network environments."
    ],
    results: [
      "Supplied a stunning digital headquarters that immediately established institutional trust.",
      "Dramatically reduced drop-off rates on research paper and donation forms.",
      "Created a scalable foundation to manage future initiative rollouts and volunteer portals."
    ],
    metrics: [
      { label: "Device Support", value: "100% Mobile" },
      { label: "Load Speed", value: "<1.8s" },
      { label: "Credibility", value: "Exceptional" }
    ]
  },
  {
    id: "finovate",
    title: "Finovate Premium Brand Launch Campaign",
    role: "Digital Strategist & Graphic Designer",
    category: "Brand Launch & Asset Creation",
    challenge: "Introduce a newly established financial services brand to a competitive regional market, instilling authority, professional prestige, and instant brand recall.",
    strategy: [
      "Orchestrated cohesive brand identity assets and visual guidelines.",
      "Formulated initial launch positioning statements targeting corporate leadership clients.",
      "Engineered early marketing templates for seamless future social communication."
    ],
    execution: [
      "Created and standardized all major social media communication portals.",
      "Designed visual assets, corporate brochures, and brand presentation slide decks.",
      "Developed and verified clean launch content calendars and campaign messaging."
    ],
    results: [
      "Delivered a premium, institutional brand identity that supports instant market authority.",
      "Acquired target executive attention within the prime month of social channels opening.",
      "Supplied internal marketing squads with a versatile, high-end creative design asset library."
    ],
    metrics: [
      { label: "Brand Appeal", value: "Premium" },
      { label: "Assets Provided", value: "60+" },
      { label: "Market Launch", value: "Successful" }
    ]
  },
  {
    id: "glify",
    title: "Glify Projects Limited Digital Campaign",
    role: "Social Media Manager & Content Creator",
    category: "Brand Launch & Asset Creation",
    challenge: "Glify Projects Limited required a dynamic social media presence and robust marketing execution to drive brand awareness, establish a steady stream of engaging educational content, and capture target audience interest through multi-format digital assets.",
    strategy: [
      "Designed a cohesive multi-channel content strategy to capture regional target audiences.",
      "Formulated creative outlines for educational posters, visual newsletters, and high-impact social media media cards.",
      "Engineered specialized high-retention stories, reels, and video content structures."
    ],
    execution: [
      "Coordinated daily social media management, listener tracking, and organic relationship building.",
      "Created original high-converting graphic posters, promotional flyers, and corporate digital banners.",
      "Produced and edited descriptive animation promo videos to spotlight key project milestones.",
      "Drafted high-yield copy optimized for client lead acquisition across LinkedIn and Instagram."
    ],
    results: [
      "Successfully scaled organic social outreach and impressions across multiple company handles.",
      "Fostered deep social media interest, generating high audience comment retention and qualified inbox entries.",
      "Built a highly reusable graphic resource vault containing multi-platform post structures.",
      "Delivered stunning promotional animated videos that served as a driver for video streams."
    ],
    metrics: [
      { label: "Accounts Managed", value: "Multi-Platform" },
      { label: "Campaigns Executed", value: "Posts & Videos" },
      { label: "Social Reach", value: "Organic" }
    ]
  }
];

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    id: "1",
    role: "Founder & Growth Architect",
    company: "Marketing & Strategy Group",
    location: "Abuja, Nigeria & Remote",
    period: "2024 - June 2026",
    description: "Leading growth consulting, funnel optimization, and digital strategy for diverse enterprises globally.",
    bulletPoints: [
      "Architect full-funnel lead generation architectures and automated marketing engines that systematically turn traffic into client consultations.",
      "Coordinate high-end brand development, corporate website rollouts, and content operations.",
      "Consult startups on leverage of premium webinars, educational content, and structured online events."
    ],
    metrics: [
      { label: "Clients Served", value: "International" },
      { label: "Growth Focus", value: "Lead Systems" }
    ]
  },
  {
    id: "2",
    role: "Digital Strategist & Growth Manager",
    company: "Glotale",
    location: "Abuja, Nigeria",
    period: "2023 - 2024",
    description: "Orchestrated conversion-focused relocation interest funnels for premium immigration support systems.",
    bulletPoints: [
      "Conceptualized, managed, and executed 14+ educational webinars attracting high-income professionals.",
      "Configured automated WhatsApp and email workflows that nurtured leads systematically, achieving an overall 40% conversion uplift.",
      "Sustained community engagement strategies over private groups, translating simple interest into premium subscriptions."
    ],
    metrics: [
      { label: "Leads", value: "4,600+" },
      { label: "Rev Spike", value: "+40%" }
    ]
  },
  {
    id: "3",
    role: "Website Manager & Digital Marketing Specialist",
    company: "Arrows Education",
    location: "Abuja / Remote",
    period: "2021 - 2023",
    description: "Overseeing international student routing funnels, website optimization, and cross-channel campaigns.",
    bulletPoints: [
      "Maintained core website portals and landing pages, upgrading performance and enhancing Lead Capture UX.",
      "Launched study-abroad webinar funnels and email sequences, reducing lead qualification response cycles.",
      "Collaborated with educational consultants to curate SEO-driven regional articles and video materials."
    ],
    metrics: [
      { label: "Engagement", value: "+120%" },
      { label: "Web Traffic", value: "+40%" }
    ]
  },
  {
    id: "4",
    role: "Social Media Manager",
    company: "VNTTW Media Platform",
    location: "Remote",
    period: "2020 - 2021",
    description: "Cultivated a scalable interactive hub, publishing daily social campaigns and tracking metrics.",
    bulletPoints: [
      "Promoted 15+ rich media episodes across prime channels, generating organic click-throughs and profile views.",
      "Wrote structured video briefs, captions, and curated trending audio files to maximize short-form algorithm spikes.",
      "Fostered daily follower conversations, directly boosting organic reach and profile comments."
    ]
  },
  {
    id: "5",
    role: "Website Developer & Digital Strategist",
    company: "WOSID Nigeria",
    location: "Abuja, Nigeria",
    period: "2019 - 2020",
    description: "Engineered mobile-responsive web pages and accessibility interfaces for prominent regional initiatives.",
    bulletPoints: [
      "Constructed custom content templates and responsive NGO pages based on WordPress & Elementor.",
      "Designed beautiful visual graphics and structured donation frameworks, minimizing user bounce rates.",
      "Established initial SEO structure leading to enhanced discoverability across academic and search portals."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Olorunfemi Adeleke",
    role: "Director of Operations",
    company: "Glotale Services",
    content: "Mark-Anthony has an exceptional ability to design systems that generate premium leads. Our Global Talent campaigns saw immediate revenue growth, and his webinar design represents the gold standard of organic community marketing.",
    rating: 5
  },
  {
    id: "t2",
    name: "Dr. Chioma Nwachukwu",
    role: "Representative Partner",
    company: "Arrows Education Recruitment",
    content: "Our online registrations and web traffic completely changed when Mark-Anthony took over our pages. He is not just a digital marketer, but a meticulous Website Manager who understands conversion logic and user behavior.",
    rating: 5
  },
  {
    id: "t3",
    name: "Faruk Ibrahim",
    role: "Head of Marketing",
    company: "Finovate Services",
    content: "Introducing a premium brand to market requires visual perfection and strict messaging. Mark-Anthony delivered an incredible asset pack and setup our accounts with immaculate branding guidelines that continue to serve our growth.",
    rating: 5
  }
];
