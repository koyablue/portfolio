import { SKILL_ICONS_URL } from '../constants'

/**
 *
 *
 * @return {*} {
				readonly getSkillIconsFullUrl: (iconName: string) => string;
		}
 */
export const useSkillIcons = () => {

	/**
	 *
	 *
	 * @param {string} iconName
	 */
	const getSkillIconsFullUrl = (iconName: string) => `${SKILL_ICONS_URL}?i=${iconName}`

	return { getSkillIconsFullUrl } as const
}
