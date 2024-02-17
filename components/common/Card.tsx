import { ReactNode } from 'react'

// hooks
import { useStyleJoin } from '../../hooks/useStyleJoin'

type Props = {
	className?: string | string[]
	children?: ReactNode
}

/**
 * common card component
 *
 * @param {Props} { className, children }
 * @return {JSX.Element}
 */
const Card = ({ className = '', children }: Props) => {
	const { styleJoin } = useStyleJoin()

	const styleToApply = Array.isArray(className) ? styleJoin(className) : className

	return (
		<div className={`bg-slate-200 rounded-[20px] shadow-xl ${styleToApply}`}>
			{children}
		</div>
	)
}

export default Card
