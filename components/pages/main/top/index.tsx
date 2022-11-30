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
import MailToATag from '../../../common/MailToATag'

/**
 * main page top section
 *
 * @return {*} JSX.Element
 */
const Top = () => {

  // TODO: correct email address

  return (
    <>
      {/* hero container */}

      {/*md:h-[calc(100vh_-_64px)] */}
      <div className={`
          flex items-center justify-center
          h-[calc(100%_-_64px)]
          w-full
          overflow-auto
          mt-[64px] p-5
          md:p-12`
        }
      >
        {/* card */}
        {/* lg:py-40 */}
        {/* lg:items-start */}
        {/* lg:flex-row */}
        {/* h-full */}
        <div className={`
            flex flex-col justify-center items-center gap-6
            w-full
            px-10
            py-10
            rounded-[20px]
            bg-slate-200
            shadow-lg
            `
          }
        >
          {/* profile photo */}
          <section className=''>
            <div className='w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative'>
              <Image
                src='/images/profile/me_monotone.png'
                layout='fill'
                alt='Photograph of Koya Aoyama'
                className='rounded-full border-[3px] border-orange-600'
              />
            </div>
          </section>

          {/* intro and links */}
          <section className='flex flex-col items-center'>
            <div className='mb-3.5'>
              {/* text-[52px] */}
              <p className='text-[35px] text-center font-extrabold text-orange-600 md:text-[75px]'>
                Koya Aoyama
              </p>
              <p className='text-[25px] text-center font-extrabold text-textMainDark md:text-[50px]'>
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
                {/* TODO: correct email address */}
                <MailToATag name='info' domain='example' tld='org' className='block'>
                  <HiOutlineMail />
                </MailToATag>
              </li>
            </ul>
            <div>
              <p className='text-sm text-textMainDark mb-2 md:text-xl'>
                I am a Web developer with 3 and a half years experience who loves creating applications.
              </p>
              <p className='text-sm text-textMainDark mb-2 md:text-xl'>
                Skilled in TypeScript, React, Next.js, HTML, CSS, PHP, Laravel and MySQL.
              </p>
              <p className='text-sm text-textMainDark md:text-xl'>
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
