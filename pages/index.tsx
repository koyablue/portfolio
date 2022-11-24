import React, { useState, useRef, useEffect, ReactElement } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// icons
import { BsGithub, BsLinkedin, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { SiTypescript, SiRedux } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'

// constants
import { gitHubUrl } from '../constants'

// helpers
import { isInBrowser } from '../helpers/environment'
import { assertIsNode } from '../helpers/util'

// custom hooks
import { useIsWindowSizeWider } from '../hooks/useIsWindowSizeWider'
import MobileMenu, { useMobileMenu } from '../components/common/mobileMenu'

// components
import LinkListItem from '../components/pages/main/top/LinkListItem'
import MainLayout from '../components/layouts/MainLayout'
import Top from '../components/pages/main/top'
import SkillsAndExperiences from '../components/pages/main/skillsAndExperiences'

// TODO: extract layout(header, mobile menu etc)
const Home = () => {


  return (
    <>
      <Top />
      <SkillsAndExperiences />
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

export default Home
