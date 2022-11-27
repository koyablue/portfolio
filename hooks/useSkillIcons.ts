import { skillIconsUrl } from '../constants'

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
	const getSkillIconsFullUrl = (iconName: string) => `${skillIconsUrl}?i=${iconName}`

	return { getSkillIconsFullUrl } as const
}
