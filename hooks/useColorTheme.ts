// stores
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { selectColorTheme, updateColorThemeStatus } from '../stores/slices/colorThemeSlice'

// constants
import { colorThemeConfig } from '../constants/colorTheme'
import { IS_IN_BROWSER } from '../constants/environment'

// services
import { setColorThemeCookie, getColorThemeCookie } from '../services/cookie'

// types
import { isColorTheme } from '../types/theme'
import { useEffect } from 'react'


/**
 * Custom hook for managing color themes
 *
 * @return {*} {
    readonly toggleDarkMode: () => void;
  }
 */
export const useColorTheme = () => {
  const dispatch = useAppDispatch()

  const currentColorThemeState = useAppSelector(selectColorTheme)

  const currentColorThemeCookie = getColorThemeCookie()

  /**
   * Toggle 'dark' className of <html></html>
   *
   */
  const toggleDarkModeClassName = () => {
    if (!IS_IN_BROWSER) return

    currentColorThemeState === colorThemeConfig.dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  useEffect(() => {
    toggleDarkModeClassName()
  }, [currentColorThemeState])


  /**
   *
   *
   */
  const initColorTheme = () => {
    if (!currentColorThemeCookie) {
      setColorThemeCookie(colorThemeConfig.dark)
      dispatch(updateColorThemeStatus(colorThemeConfig.dark))

      return
    }

    if (currentColorThemeCookie !== currentColorThemeState) {
      const colorThemeToApply = isColorTheme(currentColorThemeCookie) ? currentColorThemeCookie : colorThemeConfig.dark
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

    dispatch(updateColorThemeStatus(colorThemeToApply))
    setColorThemeCookie(colorThemeToApply)
  }

  return { initColorTheme, toggleDarkMode } as const
}
