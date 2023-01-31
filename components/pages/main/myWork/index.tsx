// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'
import ProjectCard from './projectCard'
import Button from '../../../common/Button'

// icons
import { IoIosArrowForward } from 'react-icons/io'
import { BiRightArrowAlt } from 'react-icons/bi'
import { TbExternalLink } from 'react-icons/tb'

// custom hooks
import { useGetProjects } from '../../../../hooks/data/useGetProjects'

const MyWork = () => {
  const { getProjects } = useGetProjects()

  const projects = getProjects()
  const projectsToShow = projects.filter(project => project.shouldPrioritize)

  // TODO: github

  return (
    <MainWrapper className='min-h-screen' >
      <MainPageSectionTitle title='My Work' />

      <div>
        TODO: search projects
      </div>

      {/* gap-x-0 gap-y-1  */}
      {/* <div className='flex flex-col justify-between gap-4 flex-wrap lg:flex-row lg:justify-start'> */}
      <div className='flex flex-col justify-between gap-4 flex-wrap mb-4 lg:flex-row lg:justify-start'>
        {projectsToShow.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
        <div className='flex justify-end'>
          <div className='grow-0'>
            <Button className='
              dark:bg-indigo-400
              dark:text-clrWhiteOpa
              dark:shadow-noBlurWhiteOpa3px
              dark:hover:shadow-noBlurWhiteOpa5px
              dark:active:shadow-none'
            >
              <div className='flex items-center justify-center font-semibold text-center gap-1 p-2 text-clrBlack'>
                <p>View all projects</p>
                <BiRightArrowAlt className='text-xl' />
              </div>
            </Button>
          </div>
        </div>

    </MainWrapper>
  )
}

export default MyWork
