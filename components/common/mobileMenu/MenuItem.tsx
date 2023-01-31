import { useScrollToId } from '../../../hooks/useScrollToId'

type Props = {
  id?: string
  label: string
  toggleMobileMenu: () => void
}

/**
 * mobile menu item
 *
 * @param {Props} { href, label }
 * @return {*} JSX.Element
 */
const MenuItem = ({ id = '', label, toggleMobileMenu }: Props) => {
  const { scrollToId } = useScrollToId()

  const onClickHandler = () => {
    scrollToId(id)
    toggleMobileMenu()
  }

  return (
    <li
      className='ease-in-out flex items-center justify-center w-full h-10 duration-200 hover:text-clrHyperViolet dark:hover:text-clrYellow'
      onClick={onClickHandler}
    >
      {/* <Link href={href} scroll={false} className='text-center block w-full'> */}
          <p className='text-center block w-full'>{label}</p>
      {/* </Link> */}
    </li>
  )
}

export default MenuItem
