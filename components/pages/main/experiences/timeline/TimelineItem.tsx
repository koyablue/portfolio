import { ReactNode } from 'react'

// redux
import { useAppSelector } from '../../../../../stores/hooks'
import { selectColorTheme } from '../../../../../stores/slices/colorThemeSlice'

// components
import Tag from '../../../../common/Tag'

// types
import { Experience } from '../../../../../types/experiences'
import { colorThemeConfig } from '../../../../../constants/colorTheme'
import Nl2br from '../../../../common/Nl2br'

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
   * @return {string} ex) 'April'
   */
  const getMonthName = (monthNum: number): string => {
    const date = new Date()
    date.setMonth(monthNum - 1)

    return date.toLocaleString('en-US', { month: 'long', })
  }

  const isDark = currentColorTheme === colorThemeConfig.dark

  return (
    <li className='mb-10 ml-4 p-3 bg-clrPaleBlue border rounded border-slate-400 dark:bg-sky-400/10 dark:border-none'>
      <div className='absolute w-3 h-3 bg-indigo-400 mt-1.5 -left-1.5 border rounded-sm border-indigo-400 dark:bg-clrWhite dark:border-clrWhite'></div>
      <time className='mb-1 text-sm font-semibold leading-none dark:text-clrWhiteOpa'>
        {getMonthName(experience.fromMonth)}&nbsp;{experience.fromYear}&nbsp;-&nbsp;
        {experience.toMonth && getMonthName(experience.toMonth)}&nbsp;{experience.toYear || ''}
      </time>
      <p className='text-lg font-semibold text-indigo-400 mb-2 dark:text-sky-400'>
        {experience.title}
      </p>
      <div className='flex items-center justify-start gap-2 flex-wrap mb-2.5'>
        {experience.techStack.map(techName =>
          <div key={techName} className='max-w-[90px]'>
            <Tag className='text-indigo-400 dark:text-sky-400'>{techName}</Tag>
          </div>
        )}
      </div>
      <p className='mb-4 text-base font-normal text-gray-500 dark:text-clrWhiteOpa'>
        <Nl2br text={experience.description} />
      </p>
      {children}
    </li>
  )
}

export default TimelineItem
