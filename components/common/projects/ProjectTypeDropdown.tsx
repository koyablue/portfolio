import React, { useState, useRef, useEffect, ReactNode } from 'react'

// custom hooks
import { useToggle } from '../../../hooks/useToggle'

// constants
import { projectTypes } from '../../../constants/project'

// services
import { assertIsNode } from '../../../services/util'

// types
import { ProjectTypeId, ProjectType } from '../../../types/project'

// icons
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'

/**
 *
 *
 * @return {*} JSX.Element
 */
const ProjectTypeDropdown = () => {
  const { status: isOpen, setStatus: setIsOpen, toggle: toggleDropdown } = useToggle()
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectTypeId | 0>(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentSelectedProjectTypeName = selectedProjectType === 0 ? 'all' : projectTypes[selectedProjectType]

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
    toggleDropdown()
  }

  const MenuItem = ({ projectTypeId }: { projectTypeId: typeof selectedProjectType }): JSX.Element => (
    <li className='text-center cursor-pointer hover:opacity-80' onClick={() => handleOnSelect(projectTypeId)}>
      <p>{projectTypeId === 0 ? 'all' : projectTypes[projectTypeId]}</p>
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
        <span className='rounded-md shadow-sm'>
          <button onClick={toggleDropdown} type='button' className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150' id='options-menu' aria-haspopup='true' aria-expanded={isOpen}>
            {currentSelectedProjectTypeName}
            <Arrow />
          </button>
        </span>

        {isOpen && (
          <div className='absolute top-12 right-2 w-28 p-4 bg-white z-50 shadow-lg border border-gray-100 rounded'>
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
