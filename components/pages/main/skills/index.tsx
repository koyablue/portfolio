// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'

// custom hooks
import { useGetSkills } from '../../../../hooks/data/useGetSkills'


/**
 * main page Skills & Experiences section
 *
 * @return {*} JSX.Element
 */
const Skills = () => {
  const { getAllSkills } = useGetSkills()

  const skills = getAllSkills()

  return (
    <MainWrapper className=''>
      <MainPageSectionTitle title='Skills' />
      <div className='flex items-center justify-center gap-4 flex-wrap md:justify-start'>
        {skills.map(skill =>
          <div
            key={skill.id}
            className={`flex flex-col items-center justify-center gap-0.5
            w-24 h-24
            bg-clrWhite
            text-[35px]
            border-[1.5px] border-clrBlack
            rounded`}
          >
            {skill.icon}
            <p className='text-[13px] font-medium text-center text-clrBlack'>{skill.name}</p>
          </div>
        )}
      </div>
    </MainWrapper>
  )
}

export default Skills
