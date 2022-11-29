import SkillList from './SkillList'

import { Skill } from '../../../../../types/skillsAndExperiences'

type Props = {
	title: string
	iconNamesAndLabels: Skill[]
}

/**
 * Card that displays a list of skill icons.
 *
 * @param {Props} { title, iconNamesAndLabels }
 * @return {*} JSX.Element
 */
const SkillsCard = ({ title, iconNamesAndLabels }: Props) => {
	return (
		<div className={`
			flex flex-col items-center
			bg-slate-200 rounded-[20px] shadow-xl
			py-10
			lg:px-2
			lg:w-[calc((100%_-_32px)_/_3)]`}
		>
			<p className='text-textMainDark font-bold text-xl text-center mb-5'>{title}</p>
			<SkillList iconNamesAndLabels={iconNamesAndLabels} />
		</div>
	)
}

export default SkillsCard
