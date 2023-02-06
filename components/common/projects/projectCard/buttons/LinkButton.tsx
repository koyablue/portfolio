import { ReactNode } from 'react'

type LinkButtonProps = {
  label: string
  href?: string
  children?: ReactNode
}

/**
 * Common link button in ProjectCard
 *
 * @param {LinkButtonProps} { label, href = '', children }
 * @return {*} JSX.Element
 */
const LinkButton = ({ label, href = '', children }: LinkButtonProps) => {
  return (
    <button className={`
        flex items-center justify-center gap-1
        p-1
        border border-clrBlack
        rounded
        shadow-[2px_2px_0_0_#333333]
        duration-300
        text-clrBlack
        active:opacity-60
        active:shadow-none
        ${!href && 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed shadow-none active:opacity-100 dark:bg-gray-300 dark:text-gray-400 dark:border-gray-300'}
        ${href && 'hover:shadow-[4px_4px_0_0_#333333] dark:bg-indigo-400 dark:shadow-none  dark:hover:bg-indigo-300 dark:active:opacity-60 dark:active:shadow-none'}`
      }
      disabled={Boolean(href)}
    >
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className={`
          flex gap-1
          font-medium
          ${!href && 'cursor-not-allowed pointer-events-none'}`
      }>
        {children}
        <p className='text-sm'>{label}</p>
      </a>
    </button>
  )
}

export default LinkButton
