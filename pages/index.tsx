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

// TODO: extract layout(header, mobile menu etc)
const Home = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, toggleMobileMenu } = useMobileMenu()

  const { isWindowSizeWider } = useIsWindowSizeWider(768)

  /**
   * email icon onClick
   * build email address string manually to protect it from spam
   *
   * @param {(React.MouseEvent<HTMLAnchorElement | HTMLLIElement>)} e
   * @return {*} false | undefined
   */
  const emailIconOnClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>) => {
    if (!isInBrowser) return

    location.href =
      'mailto:'
      + e.currentTarget.dataset.name
      + '@'
      + e.currentTarget.dataset.domain
      + '.'
      + e.currentTarget.dataset.tld

      return false
  }

  /**
   * manage mobile hamburger menu open/close
   *
   */
  const handleMobileMenuButtonOnClick = () => {
    toggleMobileMenu()
  }

  useEffect(() => {
    // close mobile menu if screen is expanded while mobile menu is open
    if (isWindowSizeWider) setIsMobileMenuOpen(false)
  }, [isWindowSizeWider])

  return (
    <>
      {/* hero container */}
      {/* lg:p-24 */}
      <div className='flex items-center justify-center h-[calc(100vh_-_64px)] mt-[64px] p-5 lg:p-12'>
        {/* h-[calc(100% - 96px)] */}
        <div className={`
            flex flex-col justify-center items-center gap-6
            h-full w-full
            px-10
            py-10
            rounded-[20px]
            bg-slate-200
            shadow-xl
            xs:py-28
            sm:gap-6
            lg:items-start
            lg:flex-row
            lg:py-40
            `
          }
        >
          {/* profile photo */}
          <section>
            <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative'>
              <Image
                src='/images/profile/me_monotone.png'
                layout='fill'
                alt='Photograph of Koya Aoyama'
                className='rounded-full border-[3px] border-orange-600'
              />
            </div>
          </section>

          {/* intro and links */}
          <section>
            <div className='mb-3.5'>
              {/* text-[52px] */}
              <p
                className={
                  `text-[45px] font-extrabold text-orange-600
                  sm:text-[55px] md:text-[75px] lg:text-[80px] xl:text-9xl xl:mb-3.5`
                }
              >
                Koya Aoyama
              </p>
              <p className='text-[35px] font-extrabold text-textMainDark md:text-[50px] xl:text-[70px]'>
                Frontend <br className='hidden'/>developer
              </p>
            </div>
            {/* <p>Sometimes backend developer.</p> */}
            {/* links */}
            <ul className='flex items-center gap-6 pb-1 mb-10'>
              <LinkListItem href={gitHubUrl}>
                <BsGithub />
              </LinkListItem>
              <LinkListItem href={''}>
                <BsLinkedin />
              </LinkListItem>
              <LinkListItem href={''}>
                <BsFileEarmarkPdfFill />
              </LinkListItem>
              <li className='text-4xl text-textMainDark cursor-pointer hover:text-orange-600'>
                <a
                  href={''}
                  className='block'
                  data-name="info"
                  data-domain="example"
                  data-tld="org"
                  onClick={emailIconOnClick}
                >
                  <HiOutlineMail />
                </a>
              </li>
            </ul>
            <div>
              <p className='text-sm text-textMainDark md:text-xl'>
                I am a Frontend developer who loves creating applications.
              </p>
              <p className='text-sm text-textMainDark md:text-xl'>
                Please contact me if you are interested!
              </p>
            </div>

            {/* use <img> tag intentionally instead of <Image /> component to avoid a strange error */}
            {/* the error is like: 400 bad request. "url" parameter is valid but image type is not allowed. */}
            {/* <ul className='flex'>
              <li>
                <img src="https://skillicons.dev/icons?i=react" alt='React icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=typescript" alt='TypeScript icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=nextjs" alt='Next.js icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=redux" alt='Redux icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=jest" alt='Jest icon' />
              </li>
            </ul> */}

            {/* &theme=light to make icons bright */}
            {/* <ul className='flex'>
              <li>
                <img src="https://skillicons.dev/icons?i=php" alt='PHP icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=laravel" alt='Laravel icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=mysql" alt='MySQL icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=linux" alt='Linux icon' />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=aws" alt='AWS icon' />
              </li>
            </ul> */}

          </section>
        </div>
      </div>

      <div>
        TODO: here are some contents
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

export default Home
