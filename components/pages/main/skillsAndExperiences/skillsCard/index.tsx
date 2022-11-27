import SkillList from './SkillList'

type Props = {
	title: string
	iconNamesAndLabels: Parameters<typeof SkillList>[0]['iconNamesAndLabels']
}

/**
 * Card that displays a list of skill icons.
 *
 * @param {Props} { title, iconNamesAndLabels }
 * @return {*} JSX.Element
 */
const SkillsCard = ({ title, iconNamesAndLabels }: Props) => {
	return (
		<div className='flex flex-col items-center w-[calc(100%_/_3)] bg-slate-200 rounded-[20px] shadow-xl md:p-5'>
			<p className='text-textMainDark font-bold text-xl mb-5'>{title}</p>
			<SkillList iconNamesAndLabels={iconNamesAndLabels} />
		</div>
	)
}

export default SkillsCard
