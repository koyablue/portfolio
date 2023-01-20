import { projects } from '../staticData/projects'
import { Project, ProjectRawData } from '../types/project'

export const useGetProjects = () => {
  const convert = (rawDataList: ProjectRawData[]): Project[] => {
    return rawDataList.map((data, idx) => (
      { ...data, id: idx }
    ))
  }

  const getProjects = () => convert(projects)

  return { getProjects } as const
}
