import { ExperienceRawData } from '../../types/experiences'

// fromYear: number
// fromMonth: number
// title: string
// description: string

export const experiences: ExperienceRawData[] = [
  {
    fromYear: 2019,
    fromMonth: 4,
    toYear: 2021,
    toMonth: 10,
    title: 'Backend Developer',
    description: "Developed backend side of several Web applications.\nInvolved in the development of a job searching application, a map application, a table ordering application, an online cell phone contract website and so on.\nAlso performed server configuration on AWS and code infrastructure using Terraform.",
    techStack: ['PHP', 'Laravel', 'JavaScript', 'Go', 'MySQL', 'GitHub Actions', 'AWS', 'Terraform', 'Docker', 'Linux'],
  },
  {
    fromYear: 2021,
    fromMonth: 10,
    title: 'Frontend Developer',
    description: "Developed frontend side of several Web applications.\nInvolved in the development of a job board application, a table ordering application and so on.",
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
    fromYear: 2023,
    fromMonth: 10,
    title: 'Backend Developer',
    description: "Developed backend side of a system for managing tools used in factories.\nIt was my first experience working for a company in Canada.",
    techStack: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'Docker', 'Linux'],
  },
]
