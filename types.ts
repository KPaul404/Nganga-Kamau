export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  location: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  rank?: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  AWARDS = 'awards',
  CONTACT = 'contact'
}