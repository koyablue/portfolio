type Props = {
	as?: React.ElementType
	title: string
}

/**
 *
 *
 * @param {Props} { as: Element = 'h2', title }
 * @return {*} JSX.Element
 */
const MainPageSectionTitle = ({ as: Element = 'h2', title }: Props) => {
	return (
		<Element className='text-appDarkNavy text-xl font-bold text-center mb-8 md:text-4xl'>
			{title}
		</Element>
	)
}

export default MainPageSectionTitle
