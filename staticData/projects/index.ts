import { Project, ProjectRawData } from '../../types/project'

export const projects: ProjectRawData[] = [
  {
    title: 'Path-Kanri',
    description: 'An NPM package for managing paths. By using this package you can avoid hardcoding paths or URIs.',
    type: 'personal',
    shouldPrioritize: true,
    techStack: ['TypeScript', 'Node.js', 'NPM', 'Jest', 'GitHub Actions'],
    image: '/images/projects/path-kanri_image.png',
    url: 'https://www.npmjs.com/package/path-kanri',
    githubRepo: 'https://github.com/koyablue/path-kanri',
  },
  {
    title: 'Urumap',
    description: 'A recruitment website specializing in sales jobs. I implemented the backend for most of the user pages and admin pages.',
    type: 'company',
    shouldPrioritize: true,
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Docker', 'AWS', 'GitHub Actions'],
    image: '/images/projects/urumap_image.png',
    url: 'https://urumap.com/',
  },
  {
    title: 'Project2 priority',
    description: 'Description of project2.',
    type: 'company',
    shouldPrioritize: true,
  },
  {
    title: 'Project3',
    description: 'Description of project3.',
    type: 'company',
    shouldPrioritize: false,
  },
  {
    title: 'Project4',
    description: 'Description of project4.',
    type: 'company',
    shouldPrioritize: false,
  },
  {
    title: 'Project5 priority',
    description: 'Description of project6.',
    type: 'company',
    shouldPrioritize: true,
  },
  {
    title: 'Project6 priority',
    description: 'Description of project6.',
    type: 'company',
    shouldPrioritize: true,
  },
]
