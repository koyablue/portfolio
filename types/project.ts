import { developerTypes, projectTypes } from '../constants/project'
import { ValueOf } from './utils'

export type DeveloperTypeId = keyof typeof developerTypes

export type ProjectType = ValueOf<typeof projectTypes>

export type ProjectTypeId = keyof typeof projectTypes

export type Project = {
  id: number
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

export type ProjectRawData = {
  title: string
  description: string
  whatIWorkedOnList: string[]
  developerTypeId: DeveloperTypeId
  type: ProjectTypeId
  shouldPrioritize: boolean
  techStack?: string[]
  image?: string
  url?: string
  githubRepo?: string
}
