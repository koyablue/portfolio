import SkillIconImg from '../../../../common/SkillIconImg'

type Props = {
	iconNamesAndLabels: { label: string, iconName: string }[]
}

/**
 * list of skill icons
 *
 * @param {Props} { iconNames }
 * @return {*} JSX.Element
 */
const SkillList = ({ iconNamesAndLabels }: Props) => {
	return (
		<ul className='flex gap-4 justify-between flex-wrap'>
			{/* there would be multiple same icon names in iconNames.
			so use index as a part of key to make it unique. */}
			{iconNamesAndLabels.map(({ label, iconName }, idx) =>
				<li key={`${iconName}${idx}`} className='flex flex-col items-center'>
					<div className='w-12 h-12 m-3'>
						<SkillIconImg iconName={iconName} />
					</div>
					<p className='text-xs'>{label}</p>
				</li>
			)}
		</ul>
	)
}

export default SkillList
