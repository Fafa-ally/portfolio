import { 
  Code, 
  Smartphone, 
  Database,
  BarChart,
  Github, 
  Linkedin, 
  Mail,
  Cpu,
  Globe,
  Terminal,
  Layers
} from 'lucide-react';
import { NavItem, Project, Service, SocialLink, TimelineItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Journey', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact', primary: true },
];

export const TECH_STACK = [
  "C#", ".NET Core", "Dart", "Flutter", "SQL Server", "Power BI", "Excel", "React", "TypeScript", "Git", "Azure", "Python"
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "Jun 2025 - Sep 2025",
    title: "Data Management Intern",
    organization: "Kenya Tourism Fund",
    description: "Managed database operations, performed data analysis for the tourism industry, and supported reporting initiatives.",
    type: "work"
  },
  {
    year: "Sep 2021 - Nov 2025",
    title: "BSc Software Development",
    organization: "KCA University",
    description: "Graduated with Second Class Upper Division. Specialized in application development and database systems.",
    type: "education"
  },
  {
    year: "2017 - 2021",
    title: "Secondary Education",
    organization: "Qubaa Muslim School",
    description: "Kenya Certificate of Secondary Education (Grade B).",
    type: "education"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Engineering",
    description: "End-to-end application development with a focus on robust backends and responsive frontends.",
    icon: Terminal,
    tags: ["System Design", "API Development"],
    skills: ["C#", ".NET", "React", "Node.js"]
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile applications that offer native performance and fluid animations.",
    icon: Smartphone,
    tags: ["iOS", "Android"],
    skills: ["Dart", "Flutter", "Firebase"]
  },
  {
    title: "Data Intelligence",
    description: "Turning raw complex data into clear, actionable visual insights and reports.",
    icon: BarChart,
    tags: ["Analytics", "Business Intelligence"],
    skills: ["SQL", "Excel", "PowerBI", "Python"]
  },
  {
    title: "Database Architecture",
    description: "Designing secure, scalable, and optimized database schemas for high-performance applications.",
    icon: Database,
    tags: ["Security", "Optimization"],
    skills: ["MySQL", "PostgreSQL", "SQL Server"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Personal Finance App',
    category: 'FinTech / C#',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    description: "A comprehensive tool for tracking expenses and managing budgets with real-time visualization.",
    span: 'large',
    link: '#'
  },
  {
    id: '2',
    title: 'Zamani',
    category: 'Web / Responsive',
    image: '/images/zamani_01.jpeg',
    description: "A corporate web platform built for Zamani, featuring modern design and seamless navigation.",
    span: 'tall',
    link: '#'
  },
  {
    id: '3',
    title: 'Tourism Analytics',
    category: 'Data / Report',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: "Data-driven insights into tourism trends using advanced analytics and reporting tools.",
    span: 'small',
    link: '#'
  },
  {
    id: '4',
    title: 'Fanta Campaign',
    category: 'Brand / Interactive',
    image: '/images/fanta_01.jpeg',
    description: "A creative campaign project showcasing brand identity and interactive user engagement.",
    span: 'medium',
    link: '#'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/fatma-ally-a5522a224', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/Fafa-ally', icon: Github },
  { platform: 'Email', url: 'mailto:allyfatma167@gmail.com', icon: Mail },
];

export const RESUME_URL = "/Fatma_Ali_Ahmed_Resume.pdf";

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Fatma Ali Ahmed's portfolio.
Fatma is a Software Engineer based in Nairobi, Kenya.
She holds a Bachelor of Science in Software Development from KCA University (Second Class Upper).
Her core skills include C# Programming, Dart (Flutter), Data Analysis (Excel, SQL), and Database Management.
She has professional experience as a Data Management Intern at the Kenya Tourism Fund.
Projects include a Personal Finance Application and the Sucafica Website.
She speaks fluent English and Kiswahili.
Tone: Professional, ambitious, technical, and confident.
If asked for contact, provide her email: allyfatma167@gmail.com.
`;