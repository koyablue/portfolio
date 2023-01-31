import { ReactElement } from 'react'

// components
import MainLayout from '../../components/layouts/MainLayout'
import MainWrapper from '../../components/common/MainWrapper'
import ProjectCard from '../../components/common/projects/projectCard'

// custom hooks
import { useGetProjects } from '../../hooks/data/useGetProjects'
import { useScrollTo } from '../../hooks/useScrollTo'

const Projects = () => {
  useScrollTo(0, 0)
  const { getProjects } = useGetProjects()

  const projects = getProjects()

  return (
    <MainWrapper>
      <div className='flex flex-col justify-between gap-4 flex-wrap mb-4 lg:flex-row lg:justify-start'>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </MainWrapper>
  )
}

Projects.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

export default Projects
