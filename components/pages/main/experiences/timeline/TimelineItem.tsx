import { ReactNode } from 'react'

// components
import Tag from '../../../../common/Tag'

// types
import { Experience } from '../../../../../types/experiences'

type Props = {
  experience: Experience
  children?: ReactNode
}

/**
 * An item for the experience timeline.
 *
 * @param {Props} props
 * @return {*} JSX.Element
 */
const TimelineItem = (props: Props) => {
  const { experience, children } = props

  /**
   * Get month name by month number
   * ex) getMonthName(4) returns 'April'
   *
   * @param {number} monthNum
   * @return {*} string
   */
  const getMonthName = (monthNum: number): string => {
    const date = new Date()
    date.setMonth(monthNum - 1)

    return date.toLocaleString('en-US', { month: 'long', })
  }

  return (
    <li className='mb-10 ml-4 p-3 bg-clrPaleBlue border border-clrBlack rounded'>
      <div className='absolute w-3 h-3 bg-clrBlack rounded-full mt-1.5 -left-1.5 border border-clrBlack'></div>
      <time className='mb-1 text-sm font-semibold leading-none text-clrBlack'>
        {getMonthName(experience.month)}&nbsp;{experience.year}
      </time>
      <p className='text-lg font-semibold text-gray-900 mb-2'>
        {experience.title}
      </p>
      <div className='flex items-center justify-start gap-2 flex-wrap mb-2.5'>
        {experience.techStack.map(techName =>
          <div key={techName} className='max-w-[90px]'>
            <Tag>{techName}</Tag>
          </div>
        )}
      </div>
      <p className='mb-4 text-base font-normal text-gray-500'>
        {experience.description}
      </p>
      {children}
    </li>
  )
}

export default TimelineItem
