// components
import MainWrapper from '../../../common/MainWrapper'
import SkillsCard from './skillsCard'

// constants
import { frontendSkills, backendSkills, otherSkills } from '../../../../constants/skillsAndExperiences'

const SkillsAndExperiences = () => {
	return (
		<MainWrapper>
			<h2 className='text-textMainDark text-xl font-bold text-center mb-8 md:text-4xl'>
				Skills & Experiences
			</h2>

			<div className='flex flex-col justify-between gap-4 lg:flex-row'>
				<SkillsCard title='Frontend' iconNamesAndLabels={frontendSkills} />
				<SkillsCard title='Backend' iconNamesAndLabels={backendSkills} />
				<SkillsCard title='Other' iconNamesAndLabels={otherSkills} />
			</div>
		</MainWrapper>
	)
}

export default SkillsAndExperiences
