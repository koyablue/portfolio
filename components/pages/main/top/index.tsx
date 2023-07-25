import Image from 'next/image'
import TypeWriter from 'typewriter-effect'

// icons
import { BsGithub, BsLinkedin, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

// constants
import { GITHUB_URL, LINKED_IN_URL, RESUME_PDF_PATH } from '../../../../constants'

// components
import MyName from './MyName'
import JobTitle from './JobTitle'
import LinkListItem from '../../../../components/pages/main/top/LinkListItem'
import MailToATag from '../../../common/MailToATag'

/**
 * main page top section
 *
 * @return {*} JSX.Element
 */
const Top = () => {

  return (
    <>
      <div className={`
          flex justify-center
          min-h-[calc(100vh_-_64px)]
          w-full
          overflow-auto
          p-5
          md:items-center
          md:p-12
          `
        }
      >
        {/* border
            border-clrBlack
        */}
        <div className={`
            flex flex-col justify-center items-center gap-6
            w-full
            px-10
            py-10
            md:w-[600px]
            md:h-[600px]
            `
          }
        >

          {/* profile photo */}
          <section className=''>
            <div className='w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative'>
              {/* rounded-full */}
              {/* dark:shadow-[15px_15px_0_0_rgb(51,65,85)] */}
              <Image
                src='/images/profile/me_monotone.png'
                fill
                alt='Photograph of Koya Aoyama'
                className='border-4 border-t-clrHyperViolet border-r-clrOrange border-b-clrYellow border-l-clrYellow
                shadow-noBlurBlack15px
                dark:border-t-blue-600
                dark:shadow-[15px_15px_0_0_rgb(38,47,82)]'
              />
            </div>
          </section>

          {/* intro and links */}
          <section className='flex flex-col items-center'>
            <div className='mb-3.5'>
              <MyName />
              <JobTitle />
            </div>
            {/* links */}
            <ul className='flex items-center gap-6 pb-1 mb-2 md:mb-10'>
              <LinkListItem href={GITHUB_URL}>
                <BsGithub />
              </LinkListItem>
              <LinkListItem href={LINKED_IN_URL}>
                <BsLinkedin className='text-sky-700' />
              </LinkListItem>
              <LinkListItem href={RESUME_PDF_PATH}>
                <BsFileEarmarkPdfFill className='text-clrOrange' />
              </LinkListItem>
              <li className='
                flex items-center justify-center
                text-4xl text-clrBlack
                border-[1.5px] border-slate-400
                w-12 h-12
                rounded
                bg-clrWhite
                cursor-pointer
                duration-200
                hover:opacity-80
                dark:bg-slate-100'
              >
                <MailToATag name='aoyama.ko0920' domain='gmail' tld='com' className='flex items-center justify-center w-full h-full'>
                  <HiOutlineMail className='text-sky-600' />
                </MailToATag>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </>
  )
}

export default Top
