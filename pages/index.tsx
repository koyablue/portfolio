import React, { useState, useRef, useEffect, ReactElement } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// icons
import { BsGithub, BsLinkedin, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

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
      <div className='flex items-center justify-center h-[calc(100vh_-_64px)] mt-[64px] px-5 lg:p-24'>
        <div className={`
            flex flex-col justify-center items-center gap-10
            h-[calc(100% - 96px)] w-full
            px-10
            py-10
            rounded-[20px]
            bg-slate-200
            shadow-xl
            xs:py-28
            lg:flex-row
            lg:py-40
            `
          }
        >
          {/* profile photo */}
          <section>
            <div className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative'>
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
              <p className='text-[45px] font-extrabold text-orange-600 md:text-[50px] lg:text-[75px]'>Koya Aoyama</p>
              <p className='text-[45px] font-extrabold text-textMainDark md:text-[50px]'>
                Frontend <br className='hidden'/>developer
              </p>
            </div>
            {/* <p>Sometimes backend developer.</p> */}
            {/* links */}
            <ul className='flex items-center gap-6'>
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
