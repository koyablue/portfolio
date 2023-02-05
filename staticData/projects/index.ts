import { Project, ProjectRawData } from '../../types/project'

import { developerTypes, projectTypes } from '../../constants/project'

export const projects: ProjectRawData[] = [
  {
    title: 'Path-Kanri',
    description: 'An NPM package for managing paths. By using this package you can avoid hardcoding paths or URIs.',
    whatIWorkedOnList: [
      'Test test test test test test test test test test test test test test test test test.',
      'Test test test test test test test test test test test test test test test test test.',
      'Test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test.',
      'Test test test test test test test test test test test test test test test test test.',
    ],
    developerTypeId: 2,
    type: 1,
    shouldPrioritize: true,
    techStack: ['TypeScript', 'Node.js', 'NPM', 'Jest', 'GitHub Actions'],
    image: '/images/projects/path-kanri_image.png',
    url: 'https://www.npmjs.com/package/path-kanri',
    githubRepo: 'https://github.com/koyablue/path-kanri',
  },
  {
    title: 'Urumap',
    description: 'A recruitment website specializing in sales jobs. I implemented the backend for most of the user pages and admin pages.',
    whatIWorkedOnList: [],
    developerTypeId: 1,
    type: 2,
    shouldPrioritize: true,
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Docker', 'AWS', 'GitHub Actions'],
    image: '/images/projects/urumap_image.png',
    url: 'https://urumap.com/',
  },
  {
    title: 'This portfolio',
    description: 'This portfolio',
    whatIWorkedOnList: [],
    developerTypeId: 1,
    type: 1,
    shouldPrioritize: true,
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Docker', 'AWS', 'GitHub Actions'],
    image: '/images/projects/urumap_image.png',
    url: 'https://urumap.com/',
  },
  {
    title: 'Project2 priority',
    description: 'Description of project2.',
    whatIWorkedOnList: [],
    developerTypeId: 3,
    type: 2,
    shouldPrioritize: true,
  },
  {
    title: 'Project3',
    description: 'Description of project3.',
    whatIWorkedOnList: [],
    developerTypeId: 2,
    type: 2,
    shouldPrioritize: false,
  },
  {
    title: 'Project4',
    description: 'Description of project4.',
    whatIWorkedOnList: [],
    developerTypeId: 1,
    type: 2,
    shouldPrioritize: false,
  },
  {
    title: 'Project5 priority',
    description: 'Description of project6.',
    whatIWorkedOnList: [],
    developerTypeId: 2,
    type: 2,
    shouldPrioritize: true,
  },
  {
    title: 'Project6 priority',
    description: 'Description of project6.',
    whatIWorkedOnList: [],
    developerTypeId: 3,
    type: 2,
    shouldPrioritize: true,
  },
]
