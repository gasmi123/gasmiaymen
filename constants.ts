
import { Skill, Project, ExperienceItem } from './types';
import { CodeBracketIcon, ServerStackIcon, WrenchScrewdriverIcon, AcademicCapIcon } from './components/icons/TechIcons';

// --- SKILLS ---
export const SKILLS: { category: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: CodeBracketIcon },
      { name: 'TypeScript', icon: CodeBracketIcon },
      { name: 'Next.js', icon: CodeBracketIcon },
      { name: 'Tailwind CSS', icon: CodeBracketIcon },
      { name: 'JavaScript', icon: CodeBracketIcon },
      { name: 'HTML5 & CSS3', icon: CodeBracketIcon },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: ServerStackIcon },
      { name: 'Express', icon: ServerStackIcon },
      { name: 'Python', icon: ServerStackIcon },
      { name: 'PostgreSQL', icon: ServerStackIcon },
      { name: 'MongoDB', icon: ServerStackIcon },
      { name: 'REST APIs', icon: ServerStackIcon },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', icon: WrenchScrewdriverIcon },
      { name: 'Docker', icon: WrenchScrewdriverIcon },
      { name: 'Vercel', icon: WrenchScrewdriverIcon },
      { name: 'Figma', icon: WrenchScrewdriverIcon },
      { name: 'Jira', icon: WrenchScrewdriverIcon },
      { name: 'CI/CD', icon: WrenchScrewdriverIcon },
    ],
  },
];

// --- PROJECTS ---
export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with features like product search, cart functionality, user authentication, and a Stripe-powered checkout process.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively. Features drag-and-drop boards and real-time updates.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard that visualizes complex datasets using D3.js and React, providing insightful charts and graphs for business intelligence.',
    tags: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
   {
    title: 'Personal Blog Engine',
    description: 'A lightweight and fast blog built with a static site generator, featuring markdown support, SEO optimization, and a clean, minimalist design.',
    tags: ['Next.js', 'Markdown', 'Vercel', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
];

// --- EXPERIENCE & EDUCATION ---
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Innovatech Solutions',
    period: '2021 - Present',
    description: 'Led the development of a new client-facing analytics dashboard using React and TypeScript. Improved application performance by 30% through code splitting and optimization techniques.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Creations Co.',
    period: '2019 - 2021',
    description: 'Developed and maintained full-stack web applications for various clients. Worked with Node.js on the backend and managed databases with PostgreSQL.',
  },
  {
    role: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and web development principles.',
    isEducation: true,
  },
];
