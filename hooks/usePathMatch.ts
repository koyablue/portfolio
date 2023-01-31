import { useEffect, useState } from 'react'

import { IS_IN_BROWSER } from '../constants/environment'

/**
 * Determine if the current path and the given path are the same.
 *
 * @param {string} path
 * @return {*} { readonly doesPathMatch: boolean; }
 */
export const usePathMatch = (path: string) => {
  const [doesPathMatch, setDoesPathMatch] = useState<boolean>(false)

  useEffect(() => {
    if (IS_IN_BROWSER) {
      setDoesPathMatch(window.location.pathname === path)
    }
  }, [])

  return { doesPathMatch } as const
}
