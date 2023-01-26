// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'
import ProjectCard from './projectCard'

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
          <button className={`
            flex items-center justify-center
            font-semibold text-center gap-1 grow-0 box-border
            border-2 border-clrBlack
            shadow-noBlurBlackThin
            p-2
            hover:shadow-none
            hover:bg-clrLightGreen
            active:opacity-60
            duration-300
            `
          }>
            <p>View all projects</p>
            <BiRightArrowAlt className='text-xl' />
          </button>
        </div>

    </MainWrapper>
  )
}

export default MyWork
