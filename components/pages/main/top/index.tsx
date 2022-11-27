import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// icons
import { BsGithub, BsLinkedin, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

// constants
import { gitHubUrl } from '../../../../constants'

// helpers
import { isInBrowser } from '../../../../helpers/environment'

// components
import LinkListItem from '../../../../components/pages/main/top/LinkListItem'

/**
 * main page top section
 *
 * @return {*} JSX.Element
 */
const Top = () => {

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
    <>
      {/* hero container */}
      {/* lg:p-24 */}
      {/* h-[calc(100vh_-_64px)] */}
      <div className={`
          flex items-center justify-center
          h-[calc(100%_-_64px)] w-full
          mt-[64px] p-5
          xs:h-[calc(100vh_-_64px)]
          lg:p-12`
        }
      >
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
            <div className='w-[120px] h-[120px] md:w-[250px] md:h-[250px] relative'>
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
            <ul className='flex items-center gap-6 pb-1 mb-2 md:mb-10'>
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
              <p className='text-xs text-textMainDark xs:text-sm md:text-xl'>
                I am a Frontend developer who loves creating applications.
              </p>
              <p className='text-xs text-textMainDark xs:text-sm md:text-xl'>
                Please contact me if you are interested!
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Top
