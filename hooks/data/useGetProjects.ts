// static data
import { projects, projectTypes } from '../../staticData/projects'

// types
import { Project } from '../../types/project'

export const useGetProjects = () => {
  const getProjects = (): Project[] => projects.map((project, idx) => {
    return { ...project, id: idx, type: projectTypes[project.type] }
  })

  return { getProjects } as const
}
