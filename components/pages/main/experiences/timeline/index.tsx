import TimelineItem from './TimelineItem'

import { Experience } from '../../../../../types/experiences'

type Props = {
  experiences: Experience[]
}

/**
 * A timeline　of experiences
 *
 * @param {Props} { experiences }
 * @return {*} JSX.Element
 */
const Timeline = ({ experiences }: Props) => {
  // https://flowbite.com/docs/components/timeline/
  return (
    <ol className='relative border-l border-clrBlack dark:border-clrWhiteOpa'>
      {experiences.map(experience =>
        <TimelineItem key={experience.id} experience={experience} />
      )}
    </ol>
  )
}

export default Timeline
