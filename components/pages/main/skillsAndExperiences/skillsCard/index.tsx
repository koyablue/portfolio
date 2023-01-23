import SkillList from './SkillList'

import { Skill } from '../../../../../types/skillsAndExperiences'

type Props = {
  title: string
  skills: Skill[]
}

/**
 * ard that displays a list of skill icons.
 *
 * @param {Props} { title, skills }
 * @return {*} JSX.Element
 */
const SkillsCard = ({ title, skills }: Props) => {
  return (
    <div className={`
      flex flex-col
      bg-appSand
      shadow-[5px_5px_0_0_#333333]
      pt-4
      pb-8
      lg:px-2
      lg:w-[calc((100%_-_32px)_/_3)]`}
    >
      <p className='text-textMainDark font-bold text-xl text-center mb-2'>{title}</p>
      <SkillList skills={skills} />
    </div>
  )
}

export default SkillsCard
