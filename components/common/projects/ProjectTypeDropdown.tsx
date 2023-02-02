import { useState } from 'react'
import { projectTypes } from '../../../staticData/projects'
import { ProjectTypeId } from '../../../types/project'
import Accordion from '../Accordion'

const ProjectTypeDropdown = () => {
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectTypeId | 0>(0)

  const onSelect = (projectTypeId: ProjectTypeId) => {
    // TODO: do something
    setSelectedProjectType(projectTypeId)
  }

  const selectedProjectTypeName = selectedProjectType !== 0 ? `${projectTypes[selectedProjectType]} projects` : 'all projects'

  return (
    <Accordion title={selectedProjectTypeName} isParent={true}>
      {/* TODO: all */}
      {
        Object.entries(projectTypes).map(([projectTypeId, projectType]) =>
          <Accordion
            key={projectTypeId}
            title={projectType}
            className='bg-clrWhite mb-0 border-none'
            onClick={() => onSelect(Number(projectTypeId) as ProjectTypeId)}
          />
        )
      }
    </Accordion>
  )
}

export default ProjectTypeDropdown
