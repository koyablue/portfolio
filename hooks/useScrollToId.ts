import { IS_IN_BROWSER } from '../constants/environment'

export const useScrollToId = () => {
  /**
   * scroll to the given id HTML element
   *
   * @param {string} [id]
   */
  const scrollToId = (id?: string) => {
    if (!IS_IN_BROWSER || !id) return

    const elem = document.getElementById(id)
    if (!elem) return

    elem.scrollIntoView({ behavior: 'smooth' })
  }

  return { scrollToId } as const
}
