// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'
import SkillsCard from './skillsCard'

// custom hooks
import { useGetSkills } from '../../../../hooks/useGetSkills'

/**
 * main page Skills & Experiences section
 *
 * @return {*} JSX.Element
 */
const SkillsAndExperiences = () => {
	const { getFrontendSkills, getBackendSkills, getOtherSkills } = useGetSkills()

	return (
		<MainWrapper>
			{/* <div id='skillsAndExperiences'></div> */}
			<MainPageSectionTitle title='Skills & Experiences' />
			<div className='flex flex-col justify-between gap-4 lg:flex-row'>
				<SkillsCard title='Frontend' skills={getFrontendSkills()} />
				<SkillsCard title='Backend' skills={getBackendSkills()} />
				<SkillsCard title='Other' skills={getOtherSkills()} />
			</div>
		</MainWrapper>
	)
}

export default SkillsAndExperiences
