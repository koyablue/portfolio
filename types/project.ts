import { developerTypes, projectTypes } from '../constants/project'
import { ValueOf } from './utils'

export type DeveloperTypeId = keyof typeof developerTypes

export type ProjectType = ValueOf<typeof projectTypes>

export type ProjectTypeId = keyof typeof projectTypes

// TODO: Too many duplicated properties. Need to fix.

export type Project = {
  id: number
  title: string
  description: string
  developerTypeId: DeveloperTypeId
  type: ProjectType
  shouldPrioritize: boolean
  detailedDescription?: string
  techStack?: string[]
  images?: string[]
  url?: string
  githubRepo?: string
}

export type ProjectRawData = {
  title: string
  description: string
  developerTypeId: DeveloperTypeId
  type: ProjectTypeId
  shouldPrioritize: boolean
  detailedDescription?: string
  techStack?: string[]
  images?: string[]
  url?: string
  githubRepo?: string
}
