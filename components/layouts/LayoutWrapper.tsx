import { ReactNode } from 'react'

// redux
import { useAppSelector } from '../../stores/hooks'
import { selectIsThemeSet } from '../../stores/slices/colorThemeSlice'

// components
import ColorThemeProvider from './includes/ColorThemeProvider'

type Props = {
  children: ReactNode
}

/**
 *
 *
 * @return {JSX.Element}
 */
const LayoutWrapper = ({ children }: Props) => {
  const isThemeSet = useAppSelector(selectIsThemeSet)

  return (
    <div>
      <ColorThemeProvider />
      {isThemeSet &&
        <>
          {children}
        </>
      }
    </div>
  )
}

export default LayoutWrapper
