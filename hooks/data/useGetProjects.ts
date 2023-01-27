import { projects } from '../../staticData/projects'
import { addIdsToAllData } from '../../helpers/data'
import { Project, ProjectRawData } from '../../types/project'

export const useGetProjects = () => {
  const getProjects = (): Project[] => addIdsToAllData(projects)

  return { getProjects } as const
}
