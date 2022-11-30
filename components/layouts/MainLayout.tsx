import { ReactNode, useEffect } from 'react'

// components
import MobileMenu, { useMobileMenu } from '../common/mobileMenu'

// custom hooks
import { useIsWindowSizeWider } from '../../hooks/useIsWindowSizeWider'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

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
	const { isWindowSizeWider } = useIsWindowSizeWider(768)
	const { isMobileMenuOpen, setIsMobileMenuOpen, toggleMobileMenu } = useMobileMenu()

  /**
   * manage mobile hamburger menu open/close
   *
   */
	 const handleMobileMenuButtonOnClick = () => {
    toggleMobileMenu()
  }

	useEffect(() => {
    // close mobile menu if screen is expanded while mobile menu is open
    if (isWindowSizeWider) setIsMobileMenuOpen(false)
  }, [isWindowSizeWider])

	return (
		<div>
			<header
        className={`
          flex items-center justify-between bg-bgColorLight w-full h-[64px] border-b border-slate-200 space-x-11 px-8
          fixed top-0 left-0 right-0
          md:justify-start
          z-[1]
          `
        }
      >
        {/* TODO: logo */}
        <div>KOYA</div>

        <div className='md:flex md:justify-between md:flex-1'>
          {/* header nav */}
          <nav className='hidden md:flex space-x-11 text-orange-600'>
            <div className='flex items-center justify-center font-bold hover:text-orange-400 cursor-pointer'>
              <a href='#skillsAndExperiences'>Skills & Experiences</a>
            </div>
            <div className='flex items-center justify-center font-bold hover:text-orange-400 cursor-pointer'>
              <a href='#myWork'>My Work</a>
            </div>
            <div className='flex items-center justify-center font-bold hover:text-orange-400 cursor-pointer'>
              About
            </div>
          </nav>

          {/* resume download button */}
          <button className={`
              hidden
              md:flex items-center justify-center w-40 h-8 border-2 border-orange-600 rounded-[50px]
              text-orange-600 font-bold
              hover:bg-orange-600 hover:text-white duration-500 hover:shadow-black hover:shadow-md
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
          <MobileMenu isOpen={isMobileMenuOpen} setMobileMenuState={setIsMobileMenuOpen} />
        </div>
      </header>
			{children}
		</div>
	)
}

export default MainLayout
