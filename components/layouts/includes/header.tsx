import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'

// components
import MobileMenu from '../../common/mobileMenu'
import DarkModeToggleSwitch from '../../common/DarkModeToggleSwitch'

// icons
import { TbGridDots } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'

// custom hooks
import { useToggle } from '../../../hooks/useToggle'
import { useIsWindowSizeWider } from '../../../hooks/useIsWindowSizeWider'
import { useScrollToId } from '../../../hooks/useScrollToId'
import { usePathMatch } from '../../../hooks/usePathMatch'

// constants
import { GITHUB_URL, RESUME_PDF_PATH } from '../../../constants'
import { IS_IN_BROWSER } from '../../../constants/environment'
import { MenuItemKey, menuIdAndLabel } from '../../../constants/menuConfig'

// services
import { getPath } from '../../../services/pathService'

type PcNavMenuItemProps = {
  id?: string
  isVisible?: boolean
  onClick?: () => void
  children?: ReactNode
}

const PcNavMenuItem = ({ id = '', isVisible = true, onClick = () => {/* do nothing */}, children }: PcNavMenuItemProps) => {
  const { scrollToId } = useScrollToId()

  const onClickHandler = () => {
    scrollToId(id)
    onClick()
  }

  return (
    <button className={`
        ${!isVisible && 'hidden'}
        flex flex-col items-center justify-center
        text-clrBlack font-semibold text-sm tracking-wide
        duration-200 cursor-pointer
        p-2
        rounded
        hover:text-sky-400
        hover:bg-sky-400/10
        dark:text-clrWhiteOpa
        dark:hover:text-sky-400
        dark:hover:bg-sky-400/10
      `}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

/**
 * header and mobile menu
 *
 * @return {JSX.Element}
 */
const Header = () => {
  const [shouldHeaderOutstand, setShouldHeaderOutstand] = useState<boolean>(false)

  const [shouldActive, setShouldActive] = useState<boolean | undefined>(undefined)

  const { isWindowSizeWider } = useIsWindowSizeWider(768)

  const { status: isMobileMenuOpen, setStatus: setIsMobileMenuOpen, toggle: toggleMobileMenu } = useToggle()

  const topPagePath = getPath('top')
  const { doesPathMatch: isTopPage } = usePathMatch(topPagePath)

  /**
   * manage mobile hamburger menu open/close
   *
   */
  const handleMobileMenuButtonOnClick = () => {
    setShouldActive(true)
    toggleMobileMenu()
  }

  const mobileMenuOpenStatus = shouldActive && isMobileMenuOpen

  // TODO: avoid magic number
  const toggleHeaderStyle = () => {
    if (!IS_IN_BROWSER) {
      setShouldHeaderOutstand(false)
    }

    setShouldHeaderOutstand(window.scrollY > 5)
  }

  const PcNavMenuItemWrapper = ({ itemKey }: { itemKey: MenuItemKey }) => (
    <PcNavMenuItem id={menuIdAndLabel[itemKey].id} isVisible={isTopPage}>
      <p>{menuIdAndLabel[itemKey].label}</p>
    </PcNavMenuItem>
  )

  useEffect(() => {
    // close mobile menu if screen is expanded while mobile menu is open
    if (isWindowSizeWider) {
      setIsMobileMenuOpen(false)
      setShouldActive(undefined)
    }
  }, [isWindowSizeWider, setIsMobileMenuOpen])

  // TODO: should separate header in its own file
  useEffect(() => {
    window.addEventListener('scroll', toggleHeaderStyle)
    return () => window.removeEventListener('scroll', toggleHeaderStyle)
  }, [])

  //TODO: change contents depends on the page
  // TODO: to top icon => BsCodeSquare

  //         ${shouldHeaderOutstand ? 'bg-slate-200 dark:bg-clrDarkNavy dark:border-b dark:border-none' : 'border-none'}
  //       bg-gradient-to-br from-sky-200 via-fuchsia-50 to-blue-50
  return (
    <header
      className={`
      flex items-center justify-between
      w-full h-[64px] space-x-11 px-8
      sticky
      top-0 left-0 right-0
      ${shouldHeaderOutstand ? 'backdrop-blur-lg' : ''}
      duration-200
      md:justify-start
      z-50
      `}
    >
      <div className='text-4xl duration-200 text-slate-900 dark:text-slate-400 hover:text-sky-400 dark:hover:text-sky-400'>
        <a href={GITHUB_URL}><BsGithub /></a>
      </div>

      <div className='block w-14 md:hidden'>
        <DarkModeToggleSwitch />
      </div>

      <div className='md:flex md:justify-between md:flex-1'>
        {/* header nav */}
        <nav className='hidden md:flex space-x-5 text-clrWhite'>
          <PcNavMenuItem isVisible={!isTopPage}>
            <Link href={topPagePath} className='block -m-2 p-2'>
              Top
            </Link>
          </PcNavMenuItem>
          {Object.keys(menuIdAndLabel).map(k =>
            <PcNavMenuItemWrapper key={k} itemKey={k as MenuItemKey} />
          )}
        </nav>

        <div className='flex items-center justify-center gap-8'>
          <div className='hidden md:block md:w-14'>
            <DarkModeToggleSwitch />
          </div>
          {/* resume download button */}
          <button className={`
            hidden
            md:flex items-center justify-center w-40 h-8
            border
            border-slate-400
            text-slate-900
            tracking-wide
            duration-300
            rounded
            hover:text-sky-400
            hover:border-sky-400
            hover:bg-sky-400/10
            dark:text-slate-300
            dark:hover:text-sky-400
            `
          }>
            <a href={RESUME_PDF_PATH} target='_blank' rel='noreferrer' className='flex items-center justify-center w-full h-full'>
              Resume
            </a>
          </button>
        </div>
        {/* mobile menu open/close button */}
        <button onClick={handleMobileMenuButtonOnClick} className='text-2xl md:hidden dark:text-clrWhiteOpa'>
          {isMobileMenuOpen ? <VscChromeClose /> : <TbGridDots />}
        </button>
        {/* mobile menu contents */}
        {/* TODO: mobile menu anchor link */}
        <MobileMenu
          isOpen={mobileMenuOpenStatus}
          setMobileMenuState={setIsMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </header>
  )
}

export default Header
