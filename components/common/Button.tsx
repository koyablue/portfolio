import { ReactNode } from 'react'

type ButtonColor = 'violet' | 'yellow' | 'none'

type ShadowColor = 'black' | 'none'

const buttonColorConfig: { [key in ButtonColor]: string } = {
  violet: 'bg-clrHyperViolet',
  yellow: 'bg-clrYellow',
  none: '',
}

const shadowColorConfig: { [key in ShadowColor]: string } = {
  black: 'shadow-[3px_3px_0_0_#333333] hover:shadow-[5px_5px_0_0_#333333]',
  none: '',
}

const getColor = (color: ButtonColor) => buttonColorConfig[color]

const getShadow = (color: ShadowColor) => shadowColorConfig[color]

type Props = {
  buttonColor?: ButtonColor
  shadowColor?: ShadowColor
  children?: ReactNode
}

/**
 * Common button component
 *
 * @param {Props} { buttonColor, shadowColor, children }
 * @return {*} JSX.Element
 */
const Button = ({ buttonColor, shadowColor, children }: Props) => {
  const bgColor = getColor(buttonColor || 'none')
  const shadow = getShadow(shadowColor || 'none')

  return (
    <button className={`
      w-full h-full
      bg-clip-content
      border border-clrBlack
      active:opacity-60
      active:shadow-none
      duration-300
      ${bgColor}
      ${shadow}
      `}
    >
      {children}
    </button>
  )
}

export default Button
