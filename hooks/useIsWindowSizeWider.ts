import { useCallback, useEffect, useState } from 'react'

// constants
import { IS_IN_BROWSER } from '../constants/environment'

/**
 * check if window size is wider than the given breakpoint
 *
 * @param {number} breakpoint
 * @return {*} { readonly isWindowSizeWider: boolean; }
 */
export const useIsWindowSizeWider = (breakpointPx: number) => {
	const [isWindowSizeWider, setIsWindowSizeWider] = useState<boolean>(false)

	const resizeEvent = useCallback(() => {
		if (!IS_IN_BROWSER) return

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
		if (IS_IN_BROWSER) {
			if (window.innerWidth >= breakpointPx) {
				setIsWindowSizeWider(true)
			}
			resizeEvent()
			return () => window.removeEventListener('resize', resizeEvent);
		}
  }, [breakpointPx, resizeEvent])

  return { isWindowSizeWider } as const
}
