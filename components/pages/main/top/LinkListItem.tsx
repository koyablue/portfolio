import { ReactNode } from 'react'

type Props = {
  href: string
	children?: ReactNode
}

/**
 * top page link list item
 *
 * @param {Props} { href, children }
 * @return {*} JSX.Element
 */
const LinkListItem = ({ href, children }: Props) => {
	return (
		<li className='text-3xl text-textMainDark cursor-pointer hover:text-orange-600'>
			<a href={href} target='_blank' rel='noreferrer'>
				{children}
			</a>
		</li>
	)
}

export default LinkListItem
