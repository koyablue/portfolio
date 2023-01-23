import { ReactNode, useEffect, useState } from 'react'

// components
import MobileMenu from '../common/mobileMenu'

// custom hooks
import { useIsWindowSizeWider } from '../../hooks/useIsWindowSizeWider'
import { useToggle } from '../../hooks/useToggle'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { TbGridDots } from 'react-icons/tb'
import { BiCodeAlt } from 'react-icons/bi'
import { HiCode } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'

// constants
import { githubUrl } from '../../constants'

const PcNavMenuItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center text-textMainDark font-bold hover:text-appOrange duration-200 cursor-pointer'>
      {children}
    </div>
  )
}

type Props = {
  children: ReactNode
}

/**
 * main layout
 * header nav, mobile menu, mobile menu state
 *
 * @return {*} JSX.Element
 */
const MainLayout = ({ children }: Props) => {
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

  useEffect(() => {
    // close mobile menu if screen is expanded while mobile menu is open
    if (isWindowSizeWider) {
      setIsMobileMenuOpen(false)
      setShouldActive(undefined)
    }
  }, [isWindowSizeWider])

  return (
    <div>
      {/* bg-bgColorLight */}
      <header
        className={`
          flex items-center justify-between w-full h-[100px] space-x-11 px-8
          fixed top-0 left-0 right-0
          border-b-2
          border-textMainDark
          bg-appSand
          md:justify-start
          z-[1]
          `
        }
      >
        {/* TODO: logo */}
        <div className='text-4xl hover:text-appOrange duration-200'>
          <a href={githubUrl}><BsGithub /></a>
        </div>

        <div className='md:flex md:justify-between md:flex-1'>
          {/* header nav */}
          <nav className='hidden md:flex space-x-11 text-textLight'>
            <PcNavMenuItem>
              {/* <HiCode className='text-xl' /> */}
              <a href='#skillsAndExperiences'>SKILLS & EXPERIENCES</a>
            </PcNavMenuItem>
            <PcNavMenuItem>
              <a href='#myWork'>MY WORK</a>
            </PcNavMenuItem>
            <PcNavMenuItem>
              ABOUT
            </PcNavMenuItem>
          </nav>

          {/* resume download button */}
          <button className={`
              hidden
              md:flex items-center justify-center w-40 h-8 border-2 border-textMainDark
              text-textMainDark
              shadow-noBlurBlackThin
              hover:border-appOrange hover:text-appOrange duration-200 hover:shadow-noBlurAppOrangeMid
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
      {children}
    </div>
  )
}

export default MainLayout
