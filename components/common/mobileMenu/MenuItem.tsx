// types
import type { UseToggleReturnType } from "../../../hooks/useToggle"

type Props = {
  href: string
  label: string
	toggleMobileMenu: UseToggleReturnType['toggle']
}

/**
 * mobile menu item
 *
 * @param {Props} { href, label }
 * @return {*} JSX.Element
 */
const MenuItem = ({ href, label, toggleMobileMenu }: Props) => {
	return (
		<li className='active:bg-red-500 transition duration-150 ease-in-out flex items-center justify-center w-full h-10  hover:bg-appOrange' onClick={toggleMobileMenu}>
			<a
				href={href}
				className='flex items-center justify-center w-full active:bg-red-500 transition duration-150 ease-in-out '>
					{label}
			</a>
		</li>
	)
}

export default MenuItem
