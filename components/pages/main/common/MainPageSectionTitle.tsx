type Props = {
  title: string
  as?: React.ElementType
  tailwindColor?: string
}

/**
 *
 *
 * @param {Props} { as: Element = 'h2', title }
 * @return {*} JSX.Element
 */
const MainPageSectionTitle = ({ as: Element = 'h2', title, tailwindColor = 'text-clrBlack dark:text-slate-100' }: Props) => {
  return (
    <Element className={`${tailwindColor} text-xl font-bold text-center mb-8 md:text-4xl`}>
      {title}
    </Element>
  )
}

export default MainPageSectionTitle
