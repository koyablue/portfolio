import { ReactNode } from 'react'

type Props = {
  className?: string
  children?: ReactNode
}

const Tag = ({ className, children }: Props) => {
  return (
    <div className={`w-full text-center text-textDarkMain text-sm p-1 border border-clrBlack text-ellipsis overflow-hidden whitespace-nowrap ${className}`}>
      {/* <p>#{project.type}</p> */}
      {children}
    </div>
  )

}

export default Tag
