import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// components
import MenuItem from './MenuItem'

// hooks
import { usePathMatch } from '../../../hooks/usePathMatch'

// types
import type { UseToggleReturnType } from '../../../hooks/useToggle'

// utils
import { assertIsNode } from '../../../services/util'

// services
import { getPath } from '../../../services/pathService'

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
  const topPagePath = getPath('top')
  const { doesPathMatch: isTopPage } = usePathMatch(topPagePath)

  const mobileMenuRef = useRef<HTMLUListElement>(null)

  /**
   * Close the mobile menu when the outside of the mobile menu area is clicked
   *
   * @param {MouseEvent} e
   */
  const handleOutsideClick = (e: MouseEvent) => {
    if (!isOpen) return
    assertIsNode(e.target)
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setMobileMenuState(false)
    }
  }

  const menuItems: { [key: string]: { id: string; label: string; isVisible: boolean; } } = {
    skills: { id: 'skills', label: 'Skills', isVisible: isTopPage, },
    myWork: { id: 'myWork', label: 'My Work', isVisible: isTopPage, },
    experiences: { id: 'experiences', label: 'Experiences', isVisible: isTopPage, },
    about: { id: '', label: 'About Me', isVisible: true, },
    // resume: { id: '', label: 'Resume', isVisible: true },
  }

  useEffect(() => {
    document.addEventListener('mousedown', e => {handleOutsideClick(e)});
    return () => {
      document.removeEventListener('mousedown', e => {handleOutsideClick(e)});
    };
  }, [])

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
        dark:bg-slate-800
        dark:border-slate-800
        `
      }>
        <MenuItem isVisible={!isTopPage}>
          <Link href={topPagePath} className='block'>Top</Link>
        </MenuItem>
        {Object.keys(menuItems).map(k =>
          <MenuItem
            key={k}
            id={menuItems[k].id}
            isVisible={menuItems[k].isVisible}
            toggleMobileMenu={toggleMobileMenu}
          >
            <p className='text-center block w-full'>{menuItems[k].label}</p>
          </MenuItem>
        )}
      </ul>
    </div>
  )
}

export default MobileMenu
