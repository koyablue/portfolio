import { useEffect } from 'react'

// redux
import { useAppDispatch } from '../../../stores/hooks'
import { updateIsThemeSet } from '../../../stores/slices/colorThemeSlice'

// custom hooks
import { useColorTheme } from '../../../hooks/useColorTheme'

/**
 * Apply color theme to the app.
 *
 * @return {*} null
 */
const ColorThemeProvider = () => {
  const dispatch = useAppDispatch()

  const { initColorTheme } = useColorTheme()

  useEffect(() => {
    initColorTheme()
    dispatch(updateIsThemeSet(true))
  }, [])

  return null
}

export default ColorThemeProvider
