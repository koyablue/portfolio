import { experiences } from '../../staticData/experiences'

import { addIdsToAllData } from '../../services/data'

// types
import { Experience, ExperienceRawData } from '../../types/experiences'

/**
 *
 *
 * @return {*}
 */
export const useGetExperiences = () => {
  const reverseSort = (experiencesRawDataList: ExperienceRawData[]): ExperienceRawData[] => {
    return experiencesRawDataList.sort((a, b) => {
      if (a.fromYear < b.fromYear) return 1
      if (a.fromYear > b.fromYear) return -1
      if (a.fromMonth < b.fromMonth) return 1
      if (a.fromMonth > b.fromMonth) return -1
      return 0
    })
  }

  const getExperiences = (): Experience[] => addIdsToAllData(reverseSort(experiences))

  return { getExperiences } as const
}
