import React, { ReactElement } from 'react'

// components
import MainLayout from '../components/layouts/MainLayout'
import Top from '../components/pages/main/top'
import Description from '../components/pages/main/description'
import Skills from '../components/pages/main/skills'
import MyWork from '../components/pages/main/myWork'
import Experiences from '../components/pages/main/experiences'

const ScrollPointDiv = ({ id }: { id: string }) => (
  <div id={id} className='pt-[64px] -mt-[64px]'></div>
)

/**
 * Top page
 *
 * @return {*} JSX.Element
 */
const Home = () => {
  return (
    <>
      <Top />
      <Description />
      <ScrollPointDiv id={'skills'} />
      <Skills />
      <ScrollPointDiv id={'myWork'} />
      <MyWork />
      <ScrollPointDiv id={'experiences'} />
      <Experiences />
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

export default Home
