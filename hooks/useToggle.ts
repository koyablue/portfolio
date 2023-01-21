import { useState } from 'react'

export type UseToggleReturnType = ReturnType<typeof useToggle>

/**
 *
 *
 * @param {boolean} [initialStatus=false]
 * @return {*} UseToggleReturnType
 */
export const useToggle = (initialStatus = false) => {
  const [status, setStatus] = useState<boolean>(initialStatus)

  const toggle = () => {
    setStatus(!status)
  }

  return { status, setStatus, toggle } as const
}
