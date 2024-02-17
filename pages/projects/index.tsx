import { ReactElement, useState } from 'react'

// components
import SubLayout from '../../components/layouts/SubLayout'
import MainWrapper from '../../components/common/MainWrapper'
import ProjectCard from '../../components/common/projects/projectCard'
import ProjectTypeDropdown from '../../components/common/projects/ProjectTypeDropdown'

// custom hooks
import { useGetProjects } from '../../hooks/data/useGetProjects'
import { useScrollTo } from '../../hooks/useScrollTo'
import { Project, ProjectTypeId } from '../../types/project'

/**
 * Project list page
 *
 * @return {JSX.Element}
 */
const Projects = () => {
  const [selectedProjectTypeId, setSelectedProjectTypeId] = useState<ProjectTypeId | 0>(0)
  const [] = useState<Project[]>([])
  const { getProjects, getProjectsByProjectTypeId } = useGetProjects()

  const projects = selectedProjectTypeId === 0 ? getProjects() : getProjectsByProjectTypeId(selectedProjectTypeId)

  /**
   * Set selected project id to the state to filter projects.
   *
   * @param {typeof selectedProjectTypeId} projectTypeId
   */
  const dropdownOnSelectedAction = (projectTypeId: typeof selectedProjectTypeId) => {
    setSelectedProjectTypeId(projectTypeId)
  }

  // Scroll to top when the page is rendered
  useScrollTo(0, 0)

  return (
    <MainWrapper>
      <div className='flex justify-end'>
        <div className='relative h-[100px] z-[1]'>
          <ProjectTypeDropdown onSelectedAction={dropdownOnSelectedAction} />
        </div>
      </div>

      <div className='flex flex-col justify-between gap-4 flex-wrap mb-4 lg:flex-row lg:justify-start'>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </MainWrapper>
  )
}

Projects.getLayout = (page: ReactElement) => (
  <SubLayout>{page}</SubLayout>
)

export default Projects
