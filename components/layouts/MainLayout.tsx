import { ReactNode, useEffect, useState } from 'react'

// components
import MobileMenu from '../common/mobileMenu'

// custom hooks
import { useIsWindowSizeWider } from '../../hooks/useIsWindowSizeWider'
import { useToggle } from '../../hooks/useToggle'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const PcNavMenuItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center justify-center hover:text-appOrange duration-200 cursor-pointer'>
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
      <header
        className={`
          flex items-center justify-between w-full h-[100px] space-x-11 px-8
          fixed top-0 left-0 right-0
          border-b-2
          border-textMainDark
          bg-bgColorLight
          md:justify-start
          z-[1]
          `
        }
      >
        {/* TODO: logo */}
        <div>KOYA</div>

        <div className='md:flex md:justify-between md:flex-1'>
          {/* header nav */}
          <nav className='hidden md:flex space-x-11 text-textLight'>
            <PcNavMenuItem>
              <a href='#skillsAndExperiences'>Skills & Experiences</a>
            </PcNavMenuItem>
            <PcNavMenuItem>
              <a href='#myWork'>My Work</a>
            </PcNavMenuItem>
            <PcNavMenuItem>
              About
            </PcNavMenuItem>
          </nav>

          {/* resume download button */}
          <button className={`
              hidden
              md:flex items-center justify-center w-40 h-8 border-2 border-textLight rounded-[50px]
              text-textLight
              hover:border-appOrange hover:bg-appOrange hover:text-textLight duration-200 hover:shadow-black hover:shadow-md
              active:shadow-inner active:shadow-black`
            }
          >
            <p>Resume</p>
          </button>

          {/* mobile menu open/close button */}
          <button onClick={handleMobileMenuButtonOnClick} className='md:hidden'>
            {isMobileMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
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
