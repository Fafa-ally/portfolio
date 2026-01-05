import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  primary?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  skills: string[]; // Added specific skills list
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  span: 'small' | 'medium' | 'large' | 'tall';
  link: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'work';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}