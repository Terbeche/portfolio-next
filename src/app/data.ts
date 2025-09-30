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
      name: 'Thinking-With-AI',
      featuredImage: '/images/thinking_with_ai.png',
      description:
        'A webapp that allows users to detect DR based on retinal images using different AI models',
      technologies: ['FastAPI', 'React','Next', 'Python', 'Pytorch'],
      sourceLink: 'https://github.com/Terbeche/PFE',
      demoLink: 'https://thinking-with-ai-0820eb9e6eb4.herokuapp.com/',
    },
    {
      id: 2,
      name: 'Weather-App',
      featuredImage: '/images/weather_app.png',
      description:
        'A weather app to stay up-to-date with the weather all around the world',
      technologies: ['FastAPI', 'Vue','Nuxt', 'NuxtUI'],
      sourceLink: 'https://github.com/Terbeche/weather-app',
      demoLink: 'https://weather-app-dashboard-nuxt.netlify.app/',
    },
    {
      id: 3,
      name: 'Social Network',
      featuredImage: '/images/social_network.png',
      description:
      'This is a simple social network where you can create an account, then create, join, and leave groups. You can add posts and comments to these groups. Additionally, you have the ability to edit and delete your posts and comments. If you are the admin, you also have the ability to manage a group.',
      technologies: ['Rails', 'MySQL', 'Tailwind CSS'],
      sourceLink: 'https://github.com/Terbeche/social-network',
      demoLink: 'https://social-network-web-app-399a54c31085.herokuapp.com/',
    },
    {
      id: 4,
      name: 'Recipe App',
      featuredImage: '/images/recipe_app.png',
      description:
        'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
      technologies: ['Rails', 'PostgreSQL', 'Tailwind CSS'],
      sourceLink: 'https://github.com/Terbeche/recipe-app',
      demoLink: 'https://recipe-web-app-db3d0fbf5df2.herokuapp.com/users/sign_in',
    },
    {
      id: 5,
      name: 'Budget App',
      featuredImage: '/images/budget_app.PNG',
      description:
        'This is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      technologies: ['Rails', 'PostgreSQL', 'React'],
      sourceLink: 'https://github.com/Terbeche/Budget-app',
      demoLink: 'https://budget-web-app-fb4b85a857d6.herokuapp.com/',
    },
    {
      id: 6,
      name: 'Product List',
      featuredImage: '/images/product_list.png',
      description:
        'This project is a web application that uses React to interact with an API created using PHP, MySQL and GraphQL. The application allows the user to add products to the shopping cart.',
      technologies: ['React', 'PHP', 'GraphQL', 'MySQL'],
      sourceLink: 'https://github.com/Terbeche/product-list-dashboard',
      demoLink: 'https://product-list-dashboard-0d5009f1d184.herokuapp.com',
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
