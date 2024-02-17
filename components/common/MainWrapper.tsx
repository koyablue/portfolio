import { ReactNode } from 'react'

// hooks
import { useStyleJoin } from '../../hooks/useStyleJoin'

type Props = {
	className?: string | string []
	children?: ReactNode
}

/**
 * page common wrapper
 * div with common padding
 *
 * @param {Props} { className, children }
 * @return {JSX.Element}
 */
const MainWrapper = ({ className = '', children }: Props) => {
	const { styleJoin } = useStyleJoin()

	const styleToApply = Array.isArray(className) ? styleJoin(className) : className

	return (
		// <div className={`px-16 py-10 ${styleToApply}`}>
		<div className={`p-5 md:p-12 ${styleToApply}`}>
			{children}
		</div>
	)
}

export default MainWrapper
