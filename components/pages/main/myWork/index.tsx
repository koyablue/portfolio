// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'
import ProjectCard from './ProjectCard'

// icons
import { IoIosArrowForward } from 'react-icons/io'

// custom hooks
import { useGetProjects } from '../../../../hooks/useGetProjects'

const MyWork = () => {
	const { getProjects } = useGetProjects()
	const projects = getProjects()

	return (
		<MainWrapper>
			<MainPageSectionTitle title='My Work' />

			{/* gap-x-0 gap-y-1  */}
			{/* <div className='flex flex-col justify-between gap-4 flex-wrap lg:flex-row lg:justify-start'> */}
			<div className='flex flex-col justify-between gap-4 flex-wrap mb-4 lg:flex-row lg:justify-start'>
				{projects.map(project => <ProjectCard key={project.id} project={project} />)}
			</div>
			<div className='flex items-center justify-end gap-1'>
				<p className='font-bold text-orange-600 cursor-pointer hover:text-orange-400'>
					View all projects
				</p>
				<IoIosArrowForward className='font-bold text-orange-600 cursor-pointer hover:text-orange-400' />
			</div>
		</MainWrapper>
	)
}

export default MyWork
