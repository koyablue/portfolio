import { ReactNode } from 'react'

// components
import LayoutWrapper from './LayoutWrapper'
import Header from './includes/Header'

type Props = {
  children: ReactNode
}

/**
 * Layout for the top page.
 *
 * @return {*} JSX.Element
 */
const MainLayout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  )
}

export default MainLayout
