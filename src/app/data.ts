/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

type Project = {
  id: number;
  name: string;
  description: string;
  demoLink: string;
  sourceLink: string;
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
    sourceLink: 'https://github.com/Terbeche/totalitymap',
    demoLink: 'http://totalitymap.com/'
  },
  {
    id: 2,
    name: 'Promo-DZ',
    featuredImage: '/images/promodz.png',
    description:
      'A webapp that allows users to find the best deals and discounts in Algeria',
    technologies: ['Ruby', 'Rails', 'PostgreSQL', 'TailwindCSS'],
    sourceLink: 'https://github.com/Terbeche/promodz',
    demoLink: 'https://promodz.up.railway.app/',
  },
  {
    id: 3,
    name: 'mashtalati',
    featuredImage: '/images/mashtalati.png',
    description:
      'A web app that helps users find mentorship and guidance on plants in Algeria, enabling them to transform their spaces into green, plant-filled environments',
    technologies: ['Python', 'FastAPI', 'Next', 'PostgreSQL'],
    sourceLink: 'https://github.com/Terbeche/mashtalati',
    demoLink: 'https://mashtalati-frontend-production.up.railway.app/en',
  }
];

export const BtnList: Button[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
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
