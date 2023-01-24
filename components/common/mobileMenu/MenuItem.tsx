import Link from 'next/link'

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
    <li
      className='ease-in-out flex items-center justify-center w-full h-10 duration-200 hover:text-clrHyperViolet'
      onClick={toggleMobileMenu}
    >
      <Link href={href} scroll={false} className='text-center block w-full'>
          <p className=''>{label}</p>
      </Link>
    </li>
  )
}

export default MenuItem
