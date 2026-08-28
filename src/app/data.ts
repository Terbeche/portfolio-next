/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://skillicons.dev (Skill Icons to show skills)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export type Project = {
  id: number;
  name: string;
  description: string;
  demoLink?: string;
  sourceLink?: string;
  featuredImage: string;
  technologies: string[];
};

type Button = {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
};

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'ToralityMap',
    featuredImage: '/images/totalitymap.png',
    description:
      'A webapp that allows users to find upcoming solar and lunar eclipses and their paths',
    technologies: ['Python', 'FastAPI', 'Next', 'PostgreSQL'],
    demoLink: 'https://totalitymap.com/'
  },
  {
    id: 2,
    name: "Exp'Eyes",
    featuredImage: '/images/expeyes.png',
    description:
      'A payroll and financial consulting platform built with Ruby on Rails. Features a secure client portal for uploading sensitive payroll documents and messaging accounting admins',
    technologies: ['Ruby', 'Rails', 'PostgreSQL', 'TailwindCSS', 'Hotwire', 'RSpec', 'Pundit', 'Devise'],
    demoLink: 'https://expeyes.fr',
  },
  {
    id: 3,
    name: "Files Finder",
    featuredImage: '/images/filesfinder.png',
    description:
      'A cross-platform desktop file search and storage optimization application built with Python and PySide6. Features multithreaded directory scanning, SQLite search history & usage tracking, visual storage timeline analysis, duplicate detection, and automated background scan scheduling.',
    technologies: ['Python', 'PySide6', 'Qt', 'SQLite', 'pytest'],
    sourceLink: 'https://github.com/Terbeche/finder-tool'
  },
  {
    id: 4,
    name: 'mashtalati',
    featuredImage: '/images/mashtalati.png',
    description:
      'A web app that helps users find mentorship and guidance on plants in Algeria, enabling them to transform their spaces into green, plant-filled environments',
    technologies: ['Python', 'FastAPI', 'Next', 'PostgreSQL'],
    demoLink: 'https://mashtalati-frontend-production.up.railway.app/en',
  },
  {
    id: 5,
    name: "Datanim",
    featuredImage: '/images/datanim.png',
    description:
      'A modern agency web platform featuring an interactive multi-step project specifications generator, multi-language internationalization (FR, EN, AR), and a real-time admin management dashboard.',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Drizzle ORM', 'PostgreSQL', 'Framer Motion', 'Next-Intl'],
    demoLink: 'https://datanim.com/',
  },
  {
    id: 6,
    name: 'biodeva',
    featuredImage: '/images/biodeva.png',
    description:
      'A trilingual (AR, FR, EN) botanical health & phytotherapy e-commerce platform built for a Doctor of Pharmacy. Features full RTL support, 58 Wilaya COD checkout with real-time Yalidine & HHD Express logistics integrations, dynamic CMS, and admin management.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'TailwindCSS',
      'Drizzle ORM',
      'Supabase',
      'PostgreSQL',
      'Next-Intl',
      'Zod',
      'Vitest'
    ],
    demoLink: 'https://biodeva.net/en',
  },
  {
    id: 7,
    name: 'Digestory',
    featuredImage: '/images/digestory.png',
    description:
      'An AI-powered content digest SaaS platform that transforms scattered feeds (YouTube, podcasts, newsletters, blogs) into unified daily text and audio briefings with token-routed LLM summarization.',
    technologies: [
      'Ruby on Rails 8',
      'PostgreSQL',
      'TailwindCSS',
      'Hotwire',
      'Gemini AI',
      'Whisper',
      'Solid Queue',
      'Pundit',
      'Devise'
    ],
    demoLink: 'https://digestory.app/'
  },
  {
    id: 8,
    name: 'formapilot',
    featuredImage: '/images/formapilot.png',
    description:
      'A multi-tenant vocational training management platform built with Ruby on Rails. Features training session planning, Qualiopi-compliant document generation (PDF/Excel), automated course reminders, and a secure learner portal for document sharing.',
    technologies: ['Ruby', 'Rails', 'PostgreSQL', 'TailwindCSS', 'Hotwire', 'Pundit', 'Devise', 'Minitest'],
    demoLink: 'https://formapilot.datanim.com/',
  },
  {
    id: 9,
    name: 'mjc-portail',
    featuredImage: '/images/mjc.png',
    description:
      'A multi-tenant civic portal and back-office platform built for French community centers (Maisons des Jeunes et de la Culture - MJC). Features PostgreSQL schema-per-tenant isolation, customizable per-tenant brand themes and visual layout pickers, activity & event catalogs with ICS calendar subscriptions, online appointment booking, and an integrated TipTap rich-text editor.',
    technologies: ['Ruby', 'Rails', 'PostgreSQL', 'TailwindCSS', 'Hotwire', 'Stimulus', 'TipTap', 'RSpec', 'Pundit', 'Devise', 'Pagy'],
    demoLink: 'https://mjc-narbonne.datanim.com/',
  },
];

export const BtnList: Button[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Blog", link: "/blog", icon: "blog", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Terbeche",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mustapha-terbeche",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/Terbech_Mostefa",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
