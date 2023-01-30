import Cookies, { CookieAttributes } from 'js-cookie'

// constants
import { colorThemeConfig } from '../constants/colorTheme'
import { colorThemeCookieName } from '../constants/cookieName'

// types
import { ColorTheme, isColorTheme } from '../types/theme'

/**
 * Set cookie
 *
 * @param {string} name
 * @param {string} value
 * @param {CookieAttributes} [options]
 */
const setCookie = (name: string, value: string, options?: CookieAttributes) => {
  Cookies.set(name, value, options)
}

/**
 * Get cookie by given cookie name
 *
 * @param {string} name
 * @return {*}  {string}
 */
const getCookie = (name: string): string => Cookies.get(name) || ''

/**
 * Set cookie for color theme
 *
 * @param {ColorTheme} value
 */
export const setColorThemeCookie = (value: ColorTheme) => {
  setCookie(colorThemeCookieName, value)
}

/**
 * Get color theme config from cookie
 *
 * @return {*}  {ColorTheme}
 */
export const getColorThemeCookie = (): ColorTheme | string => {
  return getCookie(colorThemeCookieName) || ''
}
