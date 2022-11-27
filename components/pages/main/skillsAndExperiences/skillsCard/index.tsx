import SkillList from './SkillList'

type Props = {
	title: string
	iconNames: string[]
}

/**
 * Card that displays a list of skill icons.
 *
 * @param {Props} { title, iconNames }
 * @return {*} JSX.Element
 */
const SkillsCard = ({ title, iconNames }: Props) => {
	return (
		<div className='flex flex-col items-center w-[calc(100%_/_3)]'>
			{title}
			<SkillList iconNames={iconNames} />
		</div>
	)
}

export default SkillsCard
