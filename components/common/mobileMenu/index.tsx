import { useEffect, useRef } from 'react'
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

// constants
import { MenuItemKey, menuIdAndLabel } from '../../../constants/menuConfig'

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
 * @return {JSX.Element}
 */
const MobileMenu = ({ isOpen, setMobileMenuState, toggleMobileMenu }: Props) => {
  const topPagePath = getPath('top')
  const { doesPathMatch: isTopPage } = usePathMatch(topPagePath)

  const mobileMenuRef = useRef<HTMLUListElement>(null)

  const MenuItemWrapper = ({ itemKey, isVisible }: { itemKey: MenuItemKey, isVisible: boolean }) => (
    <MenuItem
      id={menuIdAndLabel[itemKey].id}
      isVisible={isVisible}
      toggleMobileMenu={toggleMobileMenu}
    >
      <p className='text-center block w-full'>{menuIdAndLabel[itemKey].label}</p>
    </MenuItem>
  )

  useEffect(() => {
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

    document.addEventListener('mousedown', e => {handleOutsideClick(e)});
    return () => {
      document.removeEventListener('mousedown', e => {handleOutsideClick(e)});
    };
  }, [isOpen, setMobileMenuState])

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
        border
        border-slate-200
        bg-sky-50
        rounded-md
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
        {Object.keys(menuIdAndLabel).map(k =>
          k === 'aboutMe'
            ? <MenuItemWrapper
                key={k}
                itemKey={k as MenuItemKey}
                isVisible={true}
              />
            : <MenuItemWrapper
                key={k}
                itemKey={k as MenuItemKey}
                isVisible={isTopPage}
              />
        )}
      </ul>
    </div>
  )
}

export default MobileMenu
