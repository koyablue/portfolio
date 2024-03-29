import React, { ReactElement } from 'react'

// components
import MainLayout from '../components/layouts/MainLayout'
import Top from '../components/pages/main/top'
import Description from '../components/pages/main/description'
import Skills from '../components/pages/main/skills'
import Projects from '../components/pages/main/projects'
import Articles from '../components/pages/main/articles/Articles';
import Experiences from '../components/pages/main/experiences'

const ScrollPointDiv = ({ id }: { id: string }) => (
  <div id={id} className='pt-[64px] -mt-[64px]'></div>
)

/**
 * Top page
 * TODO: need to set paddings left and right so that the layout doesn't go crazy in large screen.
 * TODO: already have padding but need more space
 *
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <div className='w-full'>
      <Top />
      <ScrollPointDiv id={'aboutMe'} />
      <Description />
      <ScrollPointDiv id={'skills'} />
      <Skills />
      <ScrollPointDiv id={'projects'} />
      <Projects />
      <ScrollPointDiv id={'articles'} />
      <Articles />
      <ScrollPointDiv id={'experiences'} />
      <Experiences />
    </div>
  )
}

Home.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);
