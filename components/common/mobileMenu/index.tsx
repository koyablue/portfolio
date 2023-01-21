import { useState, useEffect, useRef } from 'react'

// components
import MenuItem from './MenuItem'

// hooks
import { useToggle } from '../../../hooks/useToggle'

// types
import type { UseToggleReturnType } from '../../../hooks/useToggle'

// utils
import { assertIsNode } from '../../../helpers/util'

/**
 * custom hook for managing mobile menu open/close state
 *
 * @param {boolean} [isOpen=false]
 * @return {*} {
				readonly isMobileMenuOpen: boolean;
				readonly setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
				readonly toggleMobileMenu: () => void;
		}
 */
export const useMobileMenu = (isOpen = false) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(isOpen)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return { isMobileMenuOpen, setIsMobileMenuOpen, toggleMobileMenu } as const
}

type Props = {
	isOpen: boolean
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
    assertIsNode(e.target)
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setMobileMenuState(false)
    }
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
			{/* space-y-6 */}
			<ul
			ref={mobileMenuRef}
			className={`
				absolute
				w-[calc(100%_-_40px)]
				flex flex-col items-center self-end
				py-8 mt-10
				font-bold
				bg-white
				rounded-lg
				sm:self-center left-[20px] right-[20px] drop-shadow-md
				${!isOpen ? 'hidden' : ''}
				`
			}>
				<MenuItem href='#skillsAndExperiences' label='Skills & Experiences' toggleMobileMenu={toggleMobileMenu} />
				<MenuItem href='#myWork' label='My Work' toggleMobileMenu={toggleMobileMenu} />
				<MenuItem href='#' label='About' toggleMobileMenu={toggleMobileMenu} />
				<MenuItem href='#' label='Resume' toggleMobileMenu={toggleMobileMenu} />
			</ul>
		</div>
	)
}

export default MobileMenu
