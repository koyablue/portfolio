import { ReactNode } from 'react'

// components
import Header from './includes/header'

type Props = {
  children: ReactNode
}

/**
 * main layout
 * header nav, mobile menu
 *
 * @return {*} JSX.Element
 */
const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
