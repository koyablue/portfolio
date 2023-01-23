import SkillIconImg from '../../../../common/SkillIconImg'

import { Skill } from '../../../../../types/skillsAndExperiences'

type Props = {
	skills: Skill[]
}

/**
 * list of skill icons
 *
 * @param {Props} { iconNames }
 * @return {*} JSX.Element
 */
const SkillList = ({ skills }: Props) => {
	return (
		<ul className='flex gap-y-4 flex-wrap'>
			{skills.map(({ id, name, iconName }) =>
				<li key={id} className='flex flex-col items-center my-3 mx-5 w-10 h-10 md:w-15'>
					<div className='w-10 h-10 mb-0.5'>
						<SkillIconImg iconName={iconName} />
					</div>
					<p className='text-[10px] text-textMainDark font-bold whitespace-nowrap'>{name}</p>
				</li>
			)}
		</ul>
	)
}

export default SkillList
