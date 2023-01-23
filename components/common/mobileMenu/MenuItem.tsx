// types
import type { UseToggleReturnType } from "../../../hooks/useToggle"

type Props = {
  href: string
  label: string
	toggleMobileMenu: () => void
}

/**
 * mobile menu item
 *
 * @param {Props} { href, label }
 * @return {*} JSX.Element
 */
const MenuItem = ({ href, label, toggleMobileMenu }: Props) => {
	return (
		<li className='ease-in-out flex items-center justify-center w-full h-10  hover:text-appOrange active:text-appOrange' onClick={toggleMobileMenu}>
			<a
				href={href}
				className='text-center block w-full'>
					<p className=''>{label}</p>
			</a>
		</li>
	)
}

export default MenuItem
