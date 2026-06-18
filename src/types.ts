export interface Skill {
  name: string;
  level: number; // 1-5 rating representing expertise
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[] | Skill[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  challenge: string;
  strategy: string[];
  execution: string[];
  results: string[];
  metrics: Metric[];
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bulletPoints: string[];
  metrics?: Metric[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating: number;
}
