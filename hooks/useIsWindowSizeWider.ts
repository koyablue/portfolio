import { useCallback, useEffect, useState } from 'react'

// utils
import { isInBrowser } from '../helpers/environment'

/**
 * check if window size is wider than the given breakpoint
 *
 * @param {number} breakpoint
 * @return {*} { readonly isWindowSizeWider: boolean; }
 */
export const useIsWindowSizeWider = (breakpointPx: number) => {
	const [isWindowSizeWider, setIsWindowSizeWider] = useState<boolean>(false)

	const resizeEvent = useCallback(() => {
		if (!isInBrowser) return

		window.addEventListener('resize', () => {
			// window size is less than break point
			if (window.innerWidth < breakpointPx) {
				setIsWindowSizeWider(false)
			} else {
				setIsWindowSizeWider(true)
			}
		})
	},[breakpointPx])

  useEffect(() => {
		if (isInBrowser) {
			if (window.innerWidth >= breakpointPx) {
				setIsWindowSizeWider(true)
			}
			resizeEvent()
			return () => window.removeEventListener('resize', resizeEvent);
		}
  }, [breakpointPx, resizeEvent])

  return { isWindowSizeWider } as const
}
