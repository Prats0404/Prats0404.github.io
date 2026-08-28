// ─── Skill Types ───
export interface Skill {
  name: string;
  level: "strong" | "proficient" | "learning";
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

// ─── Project Types ───
export type ProjectTag = "Python" | "Android" | "Web" | "ML" | "All";

export interface Project {
  id: number;
  title: string;
  techLine: string;
  techChips: string[];
  description: string;
  tags: ProjectTag[];
  image?: string; details?: {
    problem: string;
    approach: string;
    outcome: string;
    github?: string;
    live?: string;
  };
}

// ─── Experience Types ───
export interface ExperienceItem {
  dateRange: string;
  title: string;
  company: string;
  companyDetail: string;
  rating?: string;
  bullets: string[];
}

// ─── Education Types ───
export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

// ─── Nav Types ───
export interface NavLink {
  label: string;
  href: string;
}

// ─── Fun Fact Types ───
export interface FunFact {
  emoji: string;
  label: string;
}

// ─── Testimonial Types ───
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
