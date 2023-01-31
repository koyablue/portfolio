import { ReactNode } from 'react'

// redux
import { useAppSelector } from '../../../../../stores/hooks'
import { selectColorTheme } from '../../../../../stores/slices/colorThemeSlice'

// components
import Tag from '../../../../common/Tag'

// types
import { Experience } from '../../../../../types/experiences'
import { colorThemeConfig } from '../../../../../constants/colorTheme'

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

  const currentColorTheme = useAppSelector(selectColorTheme)

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

  const isDark = currentColorTheme === colorThemeConfig.dark

  return (
    <li className='mb-10 ml-4 p-3 bg-clrPaleBlue border border-clrBlack dark:bg-clrThickNavy dark:border-clrThickNavy'>
      <div className='absolute w-3 h-3 bg-clrBlack mt-1.5 -left-1.5 border border-clrBlack dark:bg-clrWhite dark:border-clrWhite'></div>
      <time className='mb-1 text-sm font-semibold leading-none text-clrBlack dark:text-clrWhiteOpa'>
        {getMonthName(experience.month)}&nbsp;{experience.year}
      </time>
      <p className='text-lg font-semibold text-gray-900 mb-2 dark:text-clrWhiteOpa'>
        {experience.title}
      </p>
      <div className='flex items-center justify-start gap-2 flex-wrap mb-2.5'>
        {experience.techStack.map(techName =>
          <div key={techName} className='max-w-[90px]'>
            <Tag color={isDark ? 'green' : 'pink'}>{techName}</Tag>
          </div>
        )}
      </div>
      <p className='mb-4 text-base font-normal text-gray-500 dark:text-clrWhiteOpa'>
        {experience.description}
      </p>
      {children}
    </li>
  )
}

export default TimelineItem