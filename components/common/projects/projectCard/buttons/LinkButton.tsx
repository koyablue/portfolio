import { ReactNode } from 'react'

type LinkButtonProps = {
  label?: string
  href?: string
  children?: ReactNode
}

/**
 * Common link button in ProjectCard
 *
 * @param {LinkButtonProps} { label, href = '', children }
 * @return {JSX.Element}
 */
const LinkButton = ({ label = '', href = '', children }: LinkButtonProps) => {
  // TODO: href condition is messed up. should make it clean
  return (
    <button className={`
        flex items-center justify-center gap-1
        p-1
        duration-300
        text-indigo-400
        rounded
        active:opacity-60
        active:shadow-none
        ${href && 'dark:text-slate-200 dark:border-slate-200'}
        ${!href && 'bg-gray-200 text-gray-500 cursor-not-allowed shadow-none active:opacity-100 dark:bg-gray-300 dark:text-gray-400 dark:border-gray-300'}
        ${href && 'hover:bg-indigo-400/10 hover:text-indigo-500 dark:hover:shadow-[3.5px_3.5px_0_0_rgb(226,232,240)] dark:active:opacity-60 dark:active:shadow-none'}`
      }
      disabled={Boolean(href)}
    >
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className={`
          flex items-center justify-center
          font-medium
          ${!href && 'cursor-not-allowed pointer-events-none text-gray-400'}`
      }>
        {children}
        <p className='text-sm'>{label}</p>
      </a>
    </button>
  )
}

export default LinkButton
