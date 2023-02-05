// static data
import { projects } from '../../staticData/projects'

// constants
import { projectTypes } from '../../constants/project'

// types
import { Project, ProjectRawData, ProjectTypeId } from '../../types/project'

export const useGetProjects = () => {
  const convertRawProjectsToProjects = (rawProjects: ProjectRawData[]): Project[] => rawProjects.map((project, idx) => {
    return { ...project, id: idx, type: projectTypes[project.type] }
  })

  const getProjects = (): Project[] => convertRawProjectsToProjects(projects)

  const getProjectsByProjectTypeId = (projectTypeId: ProjectTypeId): Project[] => {
    const rawProjects = projects.filter(project => project.type === projectTypeId)
    return convertRawProjectsToProjects(rawProjects)
  }

  return { getProjects, getProjectsByProjectTypeId } as const
}
