import { ProjectRawData } from '../../types/project'

export const projects: ProjectRawData[] = [
  {
    title: 'Path-Kanri',
    description: 'An NPM package for managing paths.\nBy using this package you can avoid hardcoding paths or URIs.',
    developerTypeId: 2,
    type: 1,
    shouldPrioritize: true,
    techStack: ['TypeScript', 'Node.js', 'NPM', 'Jest', 'GitHub Actions'],
    images: ['/images/projects/path-kanri_image.png'],
    url: 'https://www.npmjs.com/package/path-kanri',
    githubRepo: 'https://github.com/koyablue/path-kanri',
    detailedDescription: 'Path-Kanri is a utility module for managing paths. By using this you can register paths with unique names and get paths by their names.\nIn front-end coding I often encounter hard coded paths. Hard coded paths are generally considered to be magic numbers so they should be avoided.\nLaravel(PHP framework) has a very useful built-in function to solve this kind of problem. You can name URIs and get them by their names with route() function. I was inspired by this cool feature and decided to make Path-Kanri.',
  },
  // {
  //   title: 'Urumap',
  //   description: 'A recruitment website specializing in sales jobs.
  //I implemented the backend for most of the user pages and admin pages.',
  //   developerTypeId: 1,
  //   type: 2,
  //   shouldPrioritize: true,
  //   techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Docker', 'AWS', 'GitHub Actions'],
  //   images: ['/images/projects/urumap_image.png'],
  //   url: 'https://urumap.com/',
  // },
  {
    title: 'My Portfolio',
    description: 'A portfolio page to introduce and describe myself.',
    developerTypeId: 2,
    type: 1,
    shouldPrioritize: true,
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS',],
    images: ['/images/projects/portfolio_image.png'],
    url: 'https://koyaaoyama.com',
    githubRepo: 'https://github.com/koyablue/portfolio',
  },
  {
    title: 'Weather Wear',
    description: "A web application that suggests what kind of clothing is appropriate based on the temperature in your current location.",
    developerTypeId: 2,
    type: 1,
    shouldPrioritize: true,
    techStack: ['TypeScript', 'Next.js', 'Styled Components', 'SWR', 'Redux(Redux Toolkit)', 'Storybook'],
    images: ['/images/projects/weather-wear_image.png'],
    url: 'https://weather-wear-zeta.vercel.app/',
    githubRepo: 'https://github.com/koyablue/weather-wear',
  },
  // {
  //   title: 'Project3',
  //   description: 'Description of project3.',
  //   developerTypeId: 2,
  //   type: 2,
  //   shouldPrioritize: false,
  // },
  // {
  //   title: 'Project4',
  //   description: 'Description of project4.',
  //   developerTypeId: 1,
  //   type: 2,
  //   shouldPrioritize: false,
  // },
  // {
  //   title: 'Project5 priority',
  //   description: 'Description of project6.',
  //   developerTypeId: 2,
  //   type: 2,
  //   shouldPrioritize: true,
  // },
  // {
  //   title: 'Project6 priority',
  //   description: 'Description of project6.',
  //   developerTypeId: 3,
  //   type: 2,
  //   shouldPrioritize: true,
  // },
]
