import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
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

// components
import LinkListItem from '../components/main/LinkListItem'
import React from 'react'

const Home = () => {
  // TODO: init when screen size >= md
  const [isSpMenuOpen, setIsSpMenuOpen] = useState<boolean>(false)

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

  return (
    <div>
      <header
        className={`
          flex items-center justify-between md:justify-start w-full h-16 border-b border-slate-200 space-x-11 px-8
          fixed top-0 left-0 right-0`
        }
      >
        {/* TODO: logo */}
        <div>KOYA</div>

        {/* sp hamburger menu */}
        {/* <GiHamburgerMenu /> */}

        <div className='md:flex md:justify-between md:flex-1'>
          {/* header nav */}
          <nav className='hidden md:flex space-x-11 text-orange-600'>
            <div className='flex items-center justify-center font-bold hover:text-orange-400 cursor-pointer'>
              Skills & Experiences
            </div>
            <div className='flex items-center justify-center font-bold hover:text-orange-400 cursor-pointer'>
              My Work
            </div>
            <div className='flex items-center justify-center font-bold hover:text-orange-400 cursor-pointer'>
              About
            </div>
          </nav>
          {/* resume download button */}
          <button className={`
            hidden
            md:flex items-center justify-center w-40 h-8 border-2 border-orange-600 rounded-[50px]
            text-orange-600 font-bold
            hover:bg-orange-600 hover:text-white duration-500 hover:shadow-black hover:shadow-md
            active:shadow-inner active:shadow-black`
          }
          >
            <p>Resume</p>
          </button>
          <div>
            <GiHamburgerMenu />
          </div>
        </div>
      </header>

      {/* hero container */}
      <div className='flex h-[calc(100vh_-_64px)] mt-16'>

        {/* intro and links */}
        <section className='flex flex-col w-[45%] py-24 pl-[72px]'>
          <div className='mb-3.5'>
            <p className='text-[52px] font-extrabold text-orange-600'>Koya Aoyama</p>
            <p className='text-[52px] font-extrabold text-textMainDark'>Frontend developer</p>
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

        {/* photo section */}
        <section className='grow h-21 bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 p-24'>
          <div className='bg-white w-full h-full'>TODO: my photo</div>
        </section>

      </div>

      <div>
        TODO: here are some contents
      </div>
    </div>
  )
}

export default Home
