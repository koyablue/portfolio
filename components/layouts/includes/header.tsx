import { ReactNode, useState, useEffect } from 'react'

// components
import MobileMenu from '../../common/mobileMenu'

// icons
import { GrClose } from 'react-icons/gr'
import { TbGridDots } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'

// custom hooks
import { useToggle } from '../../../hooks/useToggle'
import { useIsWindowSizeWider } from '../../../hooks/useIsWindowSizeWider'

// constants
import { GITHUB_URL } from '../../../constants'
import { IS_IN_BROWSER } from '../../../constants/environment'

const PcNavMenuItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`
      flex flex-col items-center justify-center
      text-clrBlack font-semibold text-sm
      duration-200 cursor-pointer
      p-2
      rounded
      hover:text-clrHyperViolet
      hover:bg-clrGray
    `}>
      {children}
    </div>
  )
}

/**
 * header and mobile menu
 *
 * @return {*} JSX.Element
 */
const Header = () => {
  const [shouldHeaderOutstand, setShouldHeaderOutstand] = useState<boolean>(false)

  const [shouldActive, setShouldActive] = useState<boolean | undefined>(undefined)
  const { isWindowSizeWider } = useIsWindowSizeWider(768)
  const { status: isMobileMenuOpen, setStatus: setIsMobileMenuOpen, toggle: toggleMobileMenu } = useToggle()

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

  useEffect(() => {
    // close mobile menu if screen is expanded while mobile menu is open
    if (isWindowSizeWider) {
      setIsMobileMenuOpen(false)
      setShouldActive(undefined)
    }
  }, [isWindowSizeWider])

  // TODO: should separate header in its own file
  useEffect(() => {
    window.addEventListener('scroll', toggleHeaderStyle)
    return () => window.removeEventListener('scroll', toggleHeaderStyle)
  }, [])

  return (
    <header
      className={`
        flex items-center justify-between
        w-full h-[64px] space-x-11 px-8
        sticky
        top-0 left-0 right-0
        bg-clrBeige
        ${shouldHeaderOutstand ? 'bg-white border-b border-clrBlack' : 'bg-clrBeige border-none'}
        duration-100
        md:justify-start
        z-[1]
        `
      }
    >
      {/* TODO: logo */}
      <div className='text-4xl hover:text-clrHyperViolet duration-200'>
        <a href={GITHUB_URL}><BsGithub /></a>
      </div>

      <div className='md:flex md:justify-between md:flex-1'>
        {/* header nav */}
        <nav className='hidden md:flex space-x-11 text-clrWhite'>
          <PcNavMenuItem>
            {/* <HiCode className='text-xl' /> */}
            <a href='#skillsAndExperiences'>Skills & Experiences</a>
          </PcNavMenuItem>
          <PcNavMenuItem>
            <a href='#myWork'>My Work</a>
          </PcNavMenuItem>
          <PcNavMenuItem>
            About me
          </PcNavMenuItem>
        </nav>

        {/* resume download button */}
        <button className={`
            hidden
            md:flex items-center justify-center w-40 h-8 border border-clrBlack
            text-clrBlack
            shadow-noBlurBlackThin
            duration-300
            pt-1
            pl-1
            hover:border-clrHyperViolet
            hover:shadow-none
            hover:p-0
            hover:bg-clrHyperViolet
            hover:text-clrWhite
            active:opacity-80
            `
          }
        >
          <p>Resume</p>
        </button>

        {/* mobile menu open/close button */}
        <button onClick={handleMobileMenuButtonOnClick} className='text-2xl md:hidden'>
          {isMobileMenuOpen ? <GrClose /> : <TbGridDots />}
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
