import { IS_IN_BROWSER } from './environment'

export const isScrollYZero = IS_IN_BROWSER && window.scrollY === 0
