import { ReactNode } from 'react'
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
    <li className='mb-10 ml-4 border border-clrBlack bg-White'>
      <div className='absolute w-3 h-3 bg-clrBlack rounded-full mt-1.5 -left-1.5 border border-clrBlack'></div>
      <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
        {getMonthName(experience.month)}&nbsp;{experience.year}
      </time>
      <p className='text-lg font-semibold text-gray-900'>
        {experience.title}
      </p>
      <p className='mb-4 text-base font-normal text-gray-500'>
        {experience.description}
      </p>
      {children}
    </li>
  )
}

export default TimelineItem
