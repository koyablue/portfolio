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
import { Project } from '../../../../types/project'

const MockProjectCard = () => {
  const mockProject: Project =   {
    id: Number.MAX_SAFE_INTEGER,
    title: 'More and more projects are coming!',
    description: '',
    developerTypeId: 3,
    type: 'personal',
    shouldPrioritize: true,
  }

  return <ProjectCard project={mockProject} disableDetailButton />
}

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
        {/* TODO: disabled all Detail button for now. Enable when the detail info is ready. */}
        {projectsToShow.map(project =>
          <ProjectCard
            key={project.id}
            project={project}
            disableDetailButton={!Boolean(project?.githubRepo)}
          />)}
        <MockProjectCard />
      </div>
      {/* view all projects button */}
      <div className='flex justify-end'>
        {/* TODO: Comment out view all projects button for now. Uncomment later */}
        {/* <div className='grow-0'>
          <Button className='
            dark:rounded
            dark:bg-indigo-400
            dark:text-clrWhiteOpa
            dark:shadow-none
            dark:hover:bg-indigo-300
            dark:active:shadow-none'
          >
            <Link
              href={getPath('projects')}
              className='flex items-center justify-center font-semibold text-center gap-1 p-2 text-clrBlack'
            >
              <p>View all projects</p>
              <BiRightArrowAlt className='text-xl' />
            </Link>
          </Button>
        </div> */}
      </div>

    </MainWrapper>
  )
}

export default MyWork
