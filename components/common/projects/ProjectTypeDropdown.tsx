import React, { useState, useRef, useEffect } from 'react'

// custom hooks
import { useToggle } from '../../../hooks/useToggle'

// constants
import { projectTypes } from '../../../constants/project'

// services
import { assertIsNode } from '../../../services/util'

// types
import { ProjectTypeId } from '../../../types/project'

// icons
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'

type Props = {
  onSelectedAction: (projectTypeId: ProjectTypeId | 0) => void
}

// TODO: dark mode styles

/**
 *
 *
 * @return {*} JSX.Element
 */
const ProjectTypeDropdown = (props: Props) => {
  const { onSelectedAction } = props
  const { status: isOpen, setStatus: setIsOpen, toggle: toggleDropdown } = useToggle()
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectTypeId | 0>(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  /**
   * Returns a label for the dropdown.
   *
   * @param {(ProjectTypeId | 0)} projectTypeId
   * @return {*}  {string}
   */
  const getMenuLabel = (projectTypeId: ProjectTypeId | 0): string => {
    const projectTypeName = projectTypeId === 0 ? 'all' : projectTypes[projectTypeId]
    return `${projectTypeName} projects`
  }

  /**
   * Close when the outside of the dropdown is clicked.
   *
   * @param {MouseEvent} e
   */
  const handleOutsideClick = (e: MouseEvent) => {
    assertIsNode(e.target)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
    }
  }

  const handleOnSelect = (projectTypeId: typeof selectedProjectType) => {
    setSelectedProjectType(projectTypeId)
    onSelectedAction(projectTypeId)
    toggleDropdown()
  }

  const MenuItem = ({ projectTypeId }: { projectTypeId: typeof selectedProjectType }): JSX.Element => (
    <li className='text-left cursor-pointer hover:text-clrHyperViolet dark:hover:text-clrYellow' onClick={() => handleOnSelect(projectTypeId)}>
      <p>{getMenuLabel(projectTypeId)}</p>
    </li>
  )

  const Arrow = () => (
    <>
      {isOpen ? <RiArrowDropUpLine className='-mr-1 ml-2 h-5 w-5' /> : <RiArrowDropDownLine className='-mr-1 ml-2 h-5 w-5' />}
    </>
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return(
    <>
      <div ref={dropdownRef} className='relative inline-block text-left'>
        <span className='rounded-md'>
          <button
            onClick={toggleDropdown}
            type='button'
            className='
              inline-flex justify-between items-center
              w-44
              border-b border-clrBlack
              px-4 py-2
              text-sm leading-5 font-medium text-gray-700
              hover:text-clrHyperViolet
              hover:bg-clrWhiteOpa
              focus:outline-none
              active:opacity-80
              active:text-gray-800
              transition ease-in-out duration-150
              dark:text-clrWhiteOpa
              dark:border-clrWhiteOpa
              dark:hover:bg-clrThickNavy'
            id='options-menu'
          >
            {getMenuLabel(selectedProjectType)}
            <Arrow />
          </button>
        </span>

        {isOpen && (
          <div className='
            absolute
            top-12 right-2
            w-44
            p-4
            bg-clrWhite
            border border-clrBlack
            z-50
            dark:bg-clrThickNavy
            dark:border-none'
          >
            <ul>
              <MenuItem projectTypeId={0} />
              {
                Object.entries(projectTypes).map(([id, name]) =>
                  <MenuItem key={id} projectTypeId={Number(id) as ProjectTypeId} />
                )
              }
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectTypeDropdown
