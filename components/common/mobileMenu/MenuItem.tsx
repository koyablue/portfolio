type Props = {
  href: string
  label: string
}

/**
 * mobile menu item
 *
 * @param {Props} { href, label }
 * @return {*} JSX.Element
 */
const MenuItem = ({ href, label }: Props) => {
	return (
		<li className='flex items-center justify-center w-full h-10 py-6 duration-200 hover:bg-orange-100'>
			<a
				href={href}
				className='flex items-center justify-center w-full duration-200 hover:bg-orange-100'>
					{label}
			</a>
		</li>
	)
}

export default MenuItem
