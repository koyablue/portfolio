import { useSkillIcons } from '../../hooks/useSkillIcons'

type Props = {
	iconName: string
}

/**
 * skill-icons img
 * https://github.com/tandpfun/skill-icons
 *
 * *NOTE:
 * use <img> tag intentionally instead of <Image /> component to avoid a strange error
 *
 * the error is like this:
 * 400 bad request. "url" parameter is valid but image type is not allowed.
 *
 * @param {Props} { iconName }
 * @return {*} JSX.Element
 */
const SkillIconImg = ({ iconName }: Props) => {
	const { getSkillIconsFullUrl } = useSkillIcons()

	return (
		<img src={`${getSkillIconsFullUrl(iconName)}`} alt={`${iconName} icon`} />
	)
}

export default SkillIconImg
