import { ReactNode, useEffect, useState } from 'react'
import { isScrollYZero } from '../../constants/util'

// redux
import { useAppSelector } from '../../stores/hooks'
import { selectIsThemeSet } from '../../stores/slices/colorThemeSlice'

// components
import ColorThemeProvider from './includes/ColorThemeProvider'
import Header from './includes/Header'

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
  const isCurrentScrollYZero = isScrollYZero
  const [isPageTop, setIsPageTop] = useState<boolean>(false)
  const isThemeSet = useAppSelector(selectIsThemeSet)

  useEffect(() => {
    setIsPageTop(isCurrentScrollYZero)
  }, [isCurrentScrollYZero])

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
