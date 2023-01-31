import { useEffect } from 'react'

import { IS_IN_BROWSER } from '../constants/environment'

/**
 *
 *
 * @param {number} scrollX
 * @param {number} scrollY
 */
export const useScrollTo = (scrollX: number, scrollY:number) => {
  const scroll = () => {
    if (!IS_IN_BROWSER) return

    window.scroll(scrollX, scrollY)
  }
  useEffect(() => {
    scroll()
  }, [])
}
