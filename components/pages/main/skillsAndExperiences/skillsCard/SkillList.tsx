import SkillIconImg from '../../../../common/SkillIconImg'

import { Skill } from '../../../../../types/skillsAndExperiences'

type Props = {
	iconNamesAndLabels: Skill[]
}

/**
 * list of skill icons
 *
 * @param {Props} { iconNames }
 * @return {*} JSX.Element
 */
const SkillList = ({ iconNamesAndLabels }: Props) => {
	return (
		<ul className='flex gap-y-4 flex-wrap'>
			{/* there would be multiple same icon names in iconNames.
			so use index as a part of key to make it unique. */}
			{iconNamesAndLabels.map(({ label, iconName }, idx) =>
				<li key={`${iconName}${idx}`} className='flex flex-col items-center my-3 mx-5 w-10 h-10 md:w-15'>
					<div className='w-10 h-10 mb-0.5'>
						<SkillIconImg iconName={iconName} />
					</div>
					<p className='text-[10px] font-bold '>{label}</p>
				</li>
			)}
		</ul>
	)
}

export default SkillList
