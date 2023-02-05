import { ReactElement, useState } from 'react'

// components
import SubLayout from '../../components/layouts/SubLayout'
import MainWrapper from '../../components/common/MainWrapper'
import ProjectCard from '../../components/common/projects/projectCard'
import ProjectTypeDropdown from '../../components/common/projects/ProjectTypeDropdown'

// custom hooks
import { useGetProjects } from '../../hooks/data/useGetProjects'
import { useScrollTo } from '../../hooks/useScrollTo'


// TODO: manage dropdown state and search result by context and useReducer

const Projects = () => {
  // const [] = useState()
  useScrollTo(0, 0)
  const { getProjects } = useGetProjects()

  const projects = getProjects()

  return (
    <MainWrapper>
      <div className='flex justify-end'>
        <div className='relative h-[100px] z-[1]'>
          <ProjectTypeDropdown />
        </div>
      </div>

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
