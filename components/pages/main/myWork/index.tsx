import Link from 'next/link'

// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'
import ProjectCard from '../../../common/projects/projectCard'
import Button from '../../../common/Button'

// icons
import { BiRightArrowAlt } from 'react-icons/bi'

// custom hooks
import { useGetProjects } from '../../../../hooks/data/useGetProjects'

// services
import { getPath } from '../../../../services/pathService'

const MyWork = () => {
  const { getProjects } = useGetProjects()

  const projects = getProjects()
  const projectsToShow = projects.filter(project => project.shouldPrioritize)

  // TODO: github

  return (
    <MainWrapper className='min-h-screen' >
      <MainPageSectionTitle title='My Work' />

      {/* <div>
        TODO: search projects
      </div> */}

      {/* gap-x-0 gap-y-1  */}
      {/* <div className='flex flex-col justify-between gap-4 flex-wrap lg:flex-row lg:justify-start'> */}
      <div className='flex flex-col justify-between gap-4 flex-wrap mb-4 lg:flex-row lg:justify-start'>
        {projectsToShow.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
        <div className='flex justify-end'>
          <div className='grow-0'>
            <Button className='
              dark:rounded
              dark:bg-indigo-400
              dark:text-clrWhiteOpa
              dark:shadow-none
              dark:hover:bg-indigo-300
              dark:active:shadow-none'
            >
              <Link href={getPath('projects')} className='flex items-center justify-center font-semibold text-center gap-1 p-2 text-clrBlack'>
                <p>View all projects</p>
                <BiRightArrowAlt className='text-xl' />
              </Link>
            </Button>
          </div>
        </div>

    </MainWrapper>
  )
}

export default MyWork
