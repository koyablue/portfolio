import { DeveloperTypeId } from '../types/project'

import { developerTypes } from '../staticData/projects'

/**
 *
 *
 * @param {DeveloperTypeId} id
 * @return {*}  {string}
 */
export const getDeveloperTypeById = (id: DeveloperTypeId): string => developerTypes[id]
