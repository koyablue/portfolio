// stores
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { selectColorTheme, updateColorThemeStatus } from '../stores/slices/colorThemeSlice'

// constants
import { colorThemeConfig } from '../constants/colorTheme'

// services
import { setColorThemeCookie, getColorThemeCookie } from '../services/cookie'
import { useSelector } from 'react-redux'
import { isColorTheme } from '../types/theme'

/**
 * Custom hook for managing color themes
 *
 * @return {*} {
    readonly toggleDarkMode: () => void;
  }
 */
export const useColorTheme = () => {
  const dispatch = useAppDispatch()

  const currentColorThemeState = useSelector(selectColorTheme)

  const currentColorThemeCookie = getColorThemeCookie()

  /**
   *
   *
   */
  const initColorTheme = () => {
    if (!currentColorThemeCookie) {
      setColorThemeCookie(colorThemeConfig.light)
      dispatch(updateColorThemeStatus(colorThemeConfig.light))

      return
    }

    if (currentColorThemeCookie !== currentColorThemeState) {
      const colorThemeToApply = isColorTheme(currentColorThemeCookie) ? currentColorThemeCookie : colorThemeConfig.light
      dispatch(updateColorThemeStatus(colorThemeToApply))

      return
    }

    dispatch(updateColorThemeStatus(currentColorThemeCookie))
  }

  /**
   * Update colorThemeState and update cookie value
   *
   */
  const toggleDarkMode = () => {
    const colorThemeToApply = currentColorThemeCookie === colorThemeConfig.light
      ? colorThemeConfig.dark
      : colorThemeConfig.light

    console.log('colorThemeToApply: ', colorThemeToApply)

    dispatch(updateColorThemeStatus(colorThemeToApply))

    setColorThemeCookie(colorThemeToApply)
  }

  return { initColorTheme, toggleDarkMode } as const
}
