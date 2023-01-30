import { useState, useEffect, useRef } from 'react'

// components
import MenuItem from './MenuItem'

// hooks
import { useToggle } from '../../../hooks/useToggle'

// types
import type { UseToggleReturnType } from '../../../hooks/useToggle'

// utils
import { assertIsNode } from '../../../helpers/util'

type Props = {
  isOpen?: boolean
  setMobileMenuState: UseToggleReturnType['setStatus']
  toggleMobileMenu: UseToggleReturnType['toggle']
}

/**
 * mobile menu contents
 * close when outside of the menu area is clicked
 *
 * @param {Props} { isOpen, setMobileMenuState }
 * @return {*} JSX.Element
 */
const MobileMenu = ({ isOpen, setMobileMenuState, toggleMobileMenu }: Props) => {
  const mobileMenuRef = useRef<HTMLUListElement>(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if (!isOpen) return
    assertIsNode(e.target)
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setMobileMenuState(false)
    }
  }

  const menuItems: { [key: string]: { href: string; label: string; } } = {
    skills: { href: '#skills', label: 'Skills', },
    myWork: { href: '#myWork', label: 'My Work', },
    experiences: { href: '#experiences', label: 'Experiences' },
    about: { href: '#', label: 'About Me', },
    resume: { href: '#', label: 'Resume', },
  }

  useEffect(() => {
    document.addEventListener('mousedown', e => {handleOutsideClick(e)});
    return () => {
      document.removeEventListener('mousedown', e => {handleOutsideClick(e)});
    };
  }, [])

  // TODO: mobile menu anchor link
  return (
    <div className='md:hidden'>
      <ul
      ref={mobileMenuRef}
      className={`
        absolute
        w-[calc(100%_-_60px)]
        flex flex-col items-center self-end
        py-8
        mt-5
        bg-clrWhite
        border
        border-clrBlack
        opacity-0
        sm:self-center left-[30px] right-[30px] drop-shadow-md
        ${isOpen ? 'visible' : 'invisible'}
        ${isOpen && isOpen !== undefined ? 'animate-slide-in-fwd-center' : ''}
        ${!isOpen && isOpen !== undefined ? 'animate-slide-out-bck-center' : ''}
        `
      }>
        {Object.keys(menuItems).map(k =>
          <MenuItem
            key={k}
            href={menuItems[k].href}
            label={menuItems[k].label}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}
      </ul>
    </div>
  )
}

export default MobileMenu
