import { ReactNode } from 'react'

// custom hooks
import { useStyleJoin } from '../../hooks/useStyleJoin'

// constants
import { IS_IN_BROWSER } from '../../constants/environment'

type Props = {
	name: string
	domain: string
	tld: string
	className?: string | string[]
	children?: ReactNode
}

/**
 * <a> tag to send email by mailto.
 * build email address string manually to protect it from spam.
 *
 * @param {Props} { name, domain, tld, className = '', children }
 * @return {*} JSX.Element
 */
const MailToATag = ({ name, domain, tld, className = '', children }: Props) => {
	const { styleJoin } = useStyleJoin()

	const styleToApply = (Array.isArray(className)) ? styleJoin(className) : className

  /**
   * email icon onClick
   * build email address and open mailer
   *
   * @param {(React.MouseEvent<HTMLAnchorElement | HTMLLIElement>)} e
   * @return {*} false | undefined
   */
	 const emailIconOnClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>) => {
		// prevent page reloading
		e.preventDefault()

    if (!IS_IN_BROWSER) return

    location.href =
      'mailto:'
      + e.currentTarget.dataset.name
      + '@'
      + e.currentTarget.dataset.domain
      + '.'
      + e.currentTarget.dataset.tld

      return false
  }

	return (
		<a
			href={''}
			className={styleToApply}
			data-name={name}
			data-domain={domain}
			data-tld={tld}
			onClick={emailIconOnClick}
		>
			{children}
		</a>
	)
}

export default MailToATag
