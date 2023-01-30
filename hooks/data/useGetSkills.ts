import { skills } from '../../staticData/skills'
import { Skill, SkillRawData } from '../../types/skills'

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

  const getAllSkills = (): Skill[] => convert(skills)

  return { getAllSkills } as const
}
