// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'
import SkillsCard from './skillsCard'

// constants
import { frontendSkills, backendSkills, otherSkills } from '../../../../constants/skillsAndExperiences'

const SkillsAndExperiences = () => {
	return (
		<MainWrapper>
			<MainPageSectionTitle title='Skills & Experiences' />
			<div className='flex flex-col justify-between gap-4 lg:flex-row'>
				<SkillsCard title='Frontend' iconNamesAndLabels={frontendSkills} />
				<SkillsCard title='Backend' iconNamesAndLabels={backendSkills} />
				<SkillsCard title='Other' iconNamesAndLabels={otherSkills} />
			</div>
		</MainWrapper>
	)
}

export default SkillsAndExperiences
