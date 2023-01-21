import React, { ReactElement } from 'react'

// components
import MainLayout from '../components/layouts/MainLayout'
import Top from '../components/pages/main/top'
import SkillsAndExperiences from '../components/pages/main/skillsAndExperiences'
import MyWork from '../components/pages/main/myWork'

const ScrollPointDiv = ({ id }: { id: string }) => (
  <div id={id} className='pt-[64px] -mt-[64px]'></div>
)

const Home = () => {
  return (
    <>
      <Top />
      <ScrollPointDiv id={'skillsAndExperiences'} />
      <SkillsAndExperiences />
      <ScrollPointDiv id={'myWork'} />
      <MyWork />
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

export default Home
