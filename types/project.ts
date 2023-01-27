import { developerTypes } from '../staticData/projects'

export type ProjectType = 'personal' | 'company'

export type DeveloperTypeId = keyof typeof developerTypes

export type Project = ProjectRawData & {
  id: number
}

export type ProjectRawData = {
  title: string
  description: string
  whatIWorkedOnList: string[]
  developerTypeId: DeveloperTypeId
  type: ProjectType
  shouldPrioritize: boolean
  techStack?: string[]
  image?: string
  url?: string
  githubRepo?: string
}
