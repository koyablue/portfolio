import Image from 'next/image'
import TypeWriter from 'typewriter-effect'

// icons
import { BsGithub, BsLinkedin, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

// constants
import { GITHUB_URL, LINKED_IN_URL, RESUME_PDF_PATH } from '../../../../constants'

// components
import LinkListItem from '../../../../components/pages/main/top/LinkListItem'
import MailToATag from '../../../common/MailToATag'

/**
 * main page top section
 *
 * @return {JSX.Element}
 */
export default function Top() {

  return (
    <>
      <div className='
        flex justify-center
        min-h-[calc(100vh_-_64px)]
        w-full
        overflow-auto
        p-5
        md:items-center
        md:justify-between
        md:p-12'
      >
        <div className='
          flex flex-col items-center justify-center gap-6
          w-full
          px-10
          py-10
          md:w-[600px]
          md:h-[600px]
          lg:flex-row
          md:justify-center
          md:grow'
        >

          {/* profile photo */}
          <section className=''>
            <div className="relative rounded-full p-1 bg-gradient-to-r from-sky-300 dark:from-sky-400 to-indigo-300 dark:to-pink-400 w-[120px] h-[120px] md:w-[220px] md:h-[220px]">
              <div className="relative overflow-hidden rounded-full w-full h-full">
                <Image
                  src='/images/profile/me_monotone.png'
                  fill
                  alt='Photograph of Koya Aoyama'
                  className='rounded-full'
                />
              </div>
            </div>
          </section>

          {/* intro and links */}
          <section className='flex flex-col items-center'>
            <div className='mb-2.5'>
              <div className='text-[35px] tracking-wide text-center text-slate-900 font-black md:text-[65px] dark:text-white'>
                <span>Koya Aoyama</span>
              </div>
              <div className='text-[25px] tracking-wide text-center font-semibold text-indigo-400 md:text-[40px]'>
                <span>Fullstack developer</span>
              </div>
            </div>
            {/* links */}
            <ul className='flex items-center gap-6 pb-1 mb-2 md:mb-10'>
              <LinkListItem href={GITHUB_URL}>
                <BsGithub className='text-slate-900' />
              </LinkListItem>
              <LinkListItem href={LINKED_IN_URL}>
                <BsLinkedin className='text-blue-400' />
              </LinkListItem>
              <LinkListItem href={RESUME_PDF_PATH}>
                <BsFileEarmarkPdfFill className='text-fuchsia-400' />
              </LinkListItem>
              <li className='
                flex items-center justify-center
                text-4xl text-clrBlack
                border border-slate-300
                w-12 h-12
                rounded
                cursor-pointer
                duration-200
                hover:opacity-80
                dark:bg-slate-100'
              >
                <MailToATag name='aoyama.ko0920' domain='gmail' tld='com' className='flex items-center justify-center w-full h-full'>
                  <HiOutlineMail className='text-violet-400' />
                </MailToATag>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </>
  )
};
