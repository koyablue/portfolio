import { ReactNode } from 'react'

// components
import Header from './includes/header'
import LayoutWrapper from './LayoutWrapper'

type Props = {
  children?: ReactNode
}

/**
 * Layout for the pages other than the top page.
 *
 * @param {Props} { children }
 * @return {*} JSX.Element
 */
const SubLayout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  )
}

export default SubLayout
