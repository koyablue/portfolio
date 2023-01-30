import { ReactNode } from 'react'

// redux
import { useAppSelector } from '../../stores/hooks'
import { selectIsThemeSet } from '../../stores/slices/colorThemeSlice'

// components
import ColorThemeProvider from './includes/ColorThemeProvider'
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
  const isThemeSet = useAppSelector(selectIsThemeSet)

  return (
    <div>
      <ColorThemeProvider />
      {isThemeSet &&
        <>
          <Header />
          {children}
        </>
      }
    </div>
  )
}

export default MainLayout
