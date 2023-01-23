export type Project = 	{
  id: number
  title: string
  description: string
  type: ProjectType
  shouldPrioritize: boolean
  techStack?: string[]
  image?: string
  url?: string
  githubRepo?: string
}

export type ProjectType = 'personal' | 'company'

export type ProjectRawData = {
  title: string
  description: string
  type: ProjectType
  shouldPrioritize: boolean
  techStack?: string[]
  image?: string
  url?: string
  githubRepo?: string
}