import { ReactNode } from 'react'

type Props = {
  href: string
  children?: ReactNode
}

/**
 * top page link list item
 *
 * @param {Props} { href, children }
 * @return {JSX.Element}
 */
const LinkListItem = ({ href, children }: Props) => {
  return (
    <li className='flex items-center justify-center
    text-3xl text-clrBlack
    border border-slate-300
    w-12 h-12
    rounded
    cursor-pointer
    duration-200
    hover:opacity-80
    dark:border-none
    dark:bg-sky-400/10
    dark:hover:bg-sky-400/20
    dark:hover:opacity-100'
    >
      <a href={href} target='_blank' rel='noreferrer' className='flex items-center justify-center w-full h-full'>
        {children}
      </a>
    </li>
  )
}

export default LinkListItem
