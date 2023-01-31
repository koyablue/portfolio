import { ReactNode } from 'react'

type Props = {
  color?: string
  children?: ReactNode
}

const Tag = ({ color, children }: Props) => {
  const colorConfig: { [key: string]: string } = {
    pink: 'bg-clrPalePink',
    green: 'bg-clrLightGreen'
  }

  const bgColorToApply = color && color in colorConfig ? colorConfig[color] : colorConfig.pink

  return (
    <div className={`${bgColorToApply} w-full text-center text-textDarkMain text-sm rounded-[6px] p-1 border border-clrBlack text-ellipsis overflow-hidden whitespace-nowrap dark:text-clrBlack`}>
      {/* <p>#{project.type}</p> */}
      {children}
    </div>
  )

}

export default Tag
