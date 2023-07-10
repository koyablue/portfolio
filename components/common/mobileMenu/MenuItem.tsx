import { ReactNode } from 'react'

import { useScrollToId } from '../../../hooks/useScrollToId'

type Props = {
  id?: string
  isVisible?: boolean
  toggleMobileMenu?: () => void
  children?: ReactNode
}

/**
 * mobile menu item
 *
 * @param {Props} { href, label }
 * @return {*} JSX.Element
 */
const MenuItem = ({ id = '', isVisible = true, toggleMobileMenu = () => {/* do nothing */}, children }: Props) => {
  const { scrollToId } = useScrollToId()

  const onClickHandler = () => {
    scrollToId(id)
    toggleMobileMenu()
  }

  // TODO: children

  return (
    <li
      className={`${!isVisible && 'hidden'} ease-in-out flex items-center justify-center w-full h-10 duration-200 hover:text-clrHyperViolet dark:hover:text-clrOrange`}
      onClick={onClickHandler}
    >
      {children}
    </li>
  )
}

export default MenuItem
