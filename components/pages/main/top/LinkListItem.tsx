import { ReactNode } from 'react'

type Props = {
  href: string
  children?: ReactNode
}

/**
 * top page link list item
 *
 * @param {Props} { href, children }
 * @return {*} JSX.Element
 */
const LinkListItem = ({ href, children }: Props) => {
  return (
    <li className='flex items-center justify-center
      text-3xl text-clrBlack
      border-[1.5px] border-clrBlack
      w-12 h-12
      rounded
      cursor-pointer
      bg-clrWhite
      duration-200
      hover:opacity-80
      dark:bg-slate-100'
    >
      <a href={href} target='_blank' rel='noreferrer' className='flex items-center justify-center w-full h-full'>
        {children}
      </a>
    </li>
  )
}

export default LinkListItem
