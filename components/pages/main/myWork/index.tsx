import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'
import SkillsCard from '../skillsAndExperiences/skillsCard'

import { frontendSkills, backendSkills, otherSkills } from '../../../../constants/skillsAndExperiences'

const ProjectCard = () => {
	return (
		<div className={`
			flex flex-col items-center
			bg-slate-200 rounded-[20px] shadow-xl
			py-10
			lg:px-2
			lg:w-[calc((100%_-_32px)_/_3)]`}
		>
			<p className='text-textMainDark font-bold text-xl text-center mb-5'>card title</p>
			contents here
		</div>
	)
}

const MyWork = () => {
	return (
		<MainWrapper>
			<MainPageSectionTitle title='My Work' />

			{/* gap-x-0 gap-y-1  */}
			<div className='flex flex-col justify-between gap-4 flex-wrap lg:flex-row lg:justify-start'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</MainWrapper>
	)
}

export default MyWork
