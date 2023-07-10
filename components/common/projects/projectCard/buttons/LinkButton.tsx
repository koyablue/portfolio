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
        border border-clrOrange
        duration-300
        text-clrOrange
        active:opacity-60
        active:shadow-none
        ${href && 'dark:text-slate-200 dark:border-slate-200'}
        ${!href && 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed shadow-none active:opacity-100 dark:bg-gray-300 dark:text-gray-400 dark:border-gray-300'}
        ${href && 'hover:shadow-[3.5px_3.5px_0_0_#eb4431] dark:hover:shadow-[3.5px_3.5px_0_0_rgb(226,232,240)] dark:active:opacity-60 dark:active:shadow-none'}`
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
