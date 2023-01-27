// components
import MainWrapper from '../../../common/MainWrapper'
import MainPageSectionTitle from '../common/MainPageSectionTitle'

// custom hooks
import { useGetExperiences } from '../../../../hooks/data/useGetExperiences'
import Timeline from './timeline'

const Experiences = () => {
  const { getExperiences } = useGetExperiences()

  const experiences = getExperiences()

  return (
    <MainWrapper className=''>
      <MainPageSectionTitle title='Experiences' />
      <div className='w-full'>
        <Timeline experiences={experiences} />
      </div>
    </MainWrapper>
  )
}

export default Experiences
