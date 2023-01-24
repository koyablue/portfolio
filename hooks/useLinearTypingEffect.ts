import { useState, useEffect } from 'react'

/**
 * Simple typing animation
 * The characters are displayed one at a time from the beginning at the interval set in delayMilliSec.
 *
 * @param {string} text
 * @param {number} delayMilliSec
 * @return {*} string
 */
export const useLinearTypingEffect = (text: string, delayMilliSec: number) => {
  const [visibleText, setVisibleText] = useState<string>('')
  const [fullText] = useState<string>(text)
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setVisibleText(visibleText + fullText[index])
        setIndex(index + 1)
      }, delayMilliSec)
    }
  }, [index])

  return visibleText
}
