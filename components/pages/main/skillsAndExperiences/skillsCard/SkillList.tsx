import SkillIconImg from '../../../../common/SkillIconImg'

type Props = {
	iconNames: string[]
}

/**
 * list of skill icons
 *
 * @param {Props} { iconNames }
 * @return {*} JSX.Element
 */
const SkillList = ({ iconNames }: Props) => {
	return (
		<ul className='flex gap-4 flex-wrap'>
			{/* there would be multiple same icon names in iconNames.
			so use index as a part of key to make it unique. */}
			{iconNames.map((iconName, idx) =>
				<li key={`${iconName}${idx}`}>
					<SkillIconImg iconName={iconName} />
				</li>
			)}
		</ul>
	)
}

export default SkillList
