import { frontendSkills, backendSkills, otherSkills } from '../../staticData/skills'
import { Skill, SkillRawData } from '../../types/skillsAndExperiences'

export const useGetSkills = () => {

	/**
	 * convert raw data to usable data
	 *
	 * @param {SkillRawData[]} rawDataList
	 * @return {*}  {Skill[]}
	 */
	const convert = (rawDataList: SkillRawData[]): Skill[] => {
		return rawDataList.map((data, idx) => (
			{ ...data, id: idx }
		))
	}

	const getFrontendSkills = (): Skill[] => convert(frontendSkills)

	const getBackendSkills = (): Skill[] => convert(backendSkills)

	const getOtherSkills = (): Skill[] => convert(otherSkills)

	return { getFrontendSkills, getBackendSkills, getOtherSkills } as const
}
