export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  type: string;
  description?: string;
  achievements: string[];
  techStack?: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface OpenSource {
  id: string;
  name: string;
  description: string;
  github: string;
  language: string;
}

export interface Contact {
  email: string;
  github: string;
  blog: string;
  phone?: string;
}