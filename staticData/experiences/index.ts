import { ExperienceRawData } from '../../types/experiences'

// fromYear: number
// fromMonth: number
// title: string
// description: string

export const experiences: ExperienceRawData[] = [
  {
    companyName: 'Wiz Co., Ltd.',
    location: 'Tokyo',
    fromYear: 2019,
    fromMonth: 4,
    toYear: 2021,
    toMonth: 10,
    title: 'Backend Developer',
    description: "• Developed a job listing service with PHP, Laravel, MySQL, Docker, Firebase.\n\n• Developed a sales mapping app with React, PHP, Laravel, Google Maps API, enabling location registration and information sharing.\n\n• Developed a batch system in Go for processing and importing largescale CSV datasets into a database.\n\n• Coded AWS infrastructure setup(EC2, RDS, VPC, SES, SNS, Route53) using Terraform.",
    techStack: ['PHP', 'Laravel', 'JavaScript', 'Go', 'MySQL', 'GitHub Actions', 'AWS', 'Terraform', 'Docker', 'Linux'],
  },
  {
    companyName: 'Wiz Co., Ltd.',
    location: 'Tokyo',
    fromYear: 2021,
    fromMonth: 10,
    title: 'Frontend Developer',
    description: "• Developed a contactless ordering system with React, TypeScript, PHP, Laravel, MySQL. Participated as a full-stack engineer, contributing to nearly all of the frontend development, designing and implementing API endpoints, database schema.\n\n• Rebuilt the job listing service with TypeScript, Next.js, Emotion. Configure deploy pipeline for the backend with GitHub Actions.",
    techStack: ['TypeScript', 'React', 'Next.js', 'Redux', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    fromYear: 2023,
    fromMonth: 3,
    title: 'Moved to Canada',
    description: "I left Japan and moved to Canada to find new opportunities!",
    techStack: [],
  },
  {
    companyName: 'STS Innovation Canada',
    location: 'Vancouver',
    fromYear: 2023,
    fromMonth: 10,
    title: 'Backend Developer',
    description: "• Developed the web API with PHP, Laravel, PostgreSQL, for a tool management system used in a manufacturing facility.\nIt was my first experience working for a company in Canada.",
    techStack: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'Docker', 'Linux'],
  },
]
