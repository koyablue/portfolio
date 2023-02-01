import { ReactElement } from 'react'

// components
import SubLayout from '../../components/layouts/SubLayout'
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
        {/* <div>
          <div className=' border-b border-clrBlack'></div>
          <ul>
            <li>All</li>
            <li>Personal project</li>
            <li>Company project project</li>
          </ul>
        </div> */}
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </MainWrapper>
  )
}

Projects.getLayout = (page: ReactElement) => (
  <SubLayout>{page}</SubLayout>
)

export default Projects
