export type Project = 	{
  id: number
  title: string
  description: string
  type: ProjectType
  techStack?: string[]
  image?: string
  githubRepo?: string
}

export type ProjectType = 'personal' | 'company'

export type ProjectRawData = {
  title: string
  description: string
  type: ProjectType
  techStack?: string[]
  image?: string
  githubRepo?: string
}
