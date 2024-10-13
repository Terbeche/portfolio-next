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
      name: 'Weather-App',
      featuredImage: '/images/weather_app.png',
      description:
        'A weather app to stay up-to-date with the weather all around the world',
      technologies: ['FastAPI', 'Vue','Nuxt', 'NuxtUI'],
      sourceLink: 'https://github.com/Terbeche/weather-app',
      demoLink: 'https://weather-app-dashboard-seven.vercel.app/',
    },
    {
      id: 2,
      name: 'Social Network',
      featuredImage: '/images/social_network.png',
      description:
      'This is a simple social network where you can create an account, then create, join, and leave groups. You can add posts and comments to these groups. Additionally, you have the ability to edit and delete your posts and comments. If you are the admin, you also have the ability to manage a group.',
      technologies: ['Rails', 'MySQL', 'Tailwind CSS'],
      sourceLink: 'https://github.com/Terbeche/social-network',
      demoLink: 'https://social-network-web-app-399a54c31085.herokuapp.com/',
    },
    {
      id: 3,
      name: 'Recipe App',
      featuredImage: '/images/recipe_app.png',
      description:
        'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
      technologies: ['Rails', 'PostgreSQL', 'Tailwind CSS'],
      sourceLink: 'https://github.com/Terbeche/recipe-app',
      demoLink: 'https://recipe-web-app-db3d0fbf5df2.herokuapp.com/users/sign_in',
    },
    {
      id: 4,
      name: 'Search Engine',
      featuredImage: '/images/search_engine.png',
      description:
        'This is a search engine where we save the search terms entered by users, based on their IP addresses, and then perform analytics on these searches.',
      technologies: ['Rails', 'MySQL', 'JavaScript'],
      sourceLink: 'https://github.com/Terbeche/search-engine',
      demoLink: 'https://search-engine-477b674c37d7.herokuapp.com/',
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
      featuredImage: '/images/product_list.PNG',
      description:
        'This project is a web application that uses React to interact with an API created using PHP and MySQL. The application allows the user to view a list of available products, add new products to the list, and delete one or multiple products at once.',
      technologies: ['React', 'PHP', 'Sass'],
      sourceLink: 'https://bitbucket.org/my-assignments-projects/products-app-react/src/dev/',
      demoLink: 'https://product-app-react.netlify.app',
    },
    {
      id: 7,
      name: 'TV Show',
      featuredImage: '/images/tv_shows.PNG',
      description:
        'This is a website that displays a list of movies from an external API',
      technologies: ['Html', 'CSS', 'JavaScript'],
      sourceLink: 'https://github.com/Terbeche/TV-SHOW',
      demoLink: 'https://tv-show-platform.netlify.app/',
    },
    {
      id: 8,
      name: 'E Learning Platform',
      featuredImage: '/images/e_learning.PNG',
      description:
        'This is a E-learning-platform website is a simple static website representing an E-Learning platform.',
      technologies: ['Html', 'CSS', 'JavaScript'],
      sourceLink: 'https://github.com/Terbeche/E-learning-platform',
      demoLink: 'https://global-learning-platform.netlify.app/',
    },
    {
      id: 9,
      name: 'Countries Information',
      featuredImage: '/images/countries_information.PNG',
      description:
        'In this project, I have worked with the real live data from the RESTCountries API. This web application provides some information about more than 250 countries worldwide like the area, population, capital, continent, and the official flag.',
      technologies: ['React', 'Redux', 'CSS'],
      sourceLink: 'https://github.com/Terbeche/countries-information',
      demoLink: 'https://countries-information-api.netlify.app/',
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
