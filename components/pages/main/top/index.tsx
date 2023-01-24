import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// icons
import { BsGithub, BsLinkedin, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLaptopCode } from 'react-icons/fa'

// constants
import { GITHUB_URL } from '../../../../constants'

// hooks
import { useLinearTypingEffect } from '../../../../hooks/useLinearTypingEffect'

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
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(
      "Your source of leading edge water and air treatment technology since 1994."
    )
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index])

  const jobTitle = useLinearTypingEffect('Frontend developer', 100)
  const myName = useLinearTypingEffect('Koya Aoyama', 45)

  // TODO: correct email address

  return (
    <>
      {/* p-5 */}
      {/* md:p-12 */}
      <div className={`
          flex items-center justify-center
          h-[calc(100%_-_64px)]
          w-full
          overflow-auto
          p-5
          mt-[64px]
          md:p-12
          `
        }
      >
        {/* rounded-[20px] */}
        {/* bg-stone-200 */}
        <div className={`
            flex flex-col justify-center items-center gap-6
            w-full
            px-10
            py-10
            border-2
            border-clrBlack
            bg-appSand
            shadow-noBlurBlack
            `
          }
        >
          {/* profile photo */}
          <section className=''>
            <div className='w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative'>
              {/* rounded-full */}
              <Image
                src='/images/profile/me_monotone.png'
                fill
                alt='Photograph of Koya Aoyama'
                className=' border-4 border-double border-appDarkNavy'
              />
            </div>
          </section>
          {/* intro and links */}
          <section className='flex flex-col items-center'>
            <div className='mb-3.5'>
              {/* text-[52px] */}
              <p className='text-[35px] text-center text-appNavy font-black md:text-[75px]'>
                Koya Aoyama
              </p>
              <p className='text-[25px] text-center font-semibold text-appNavy md:text-[50px]'>
                Frontend <br className='hidden'/>developer
              </p>
            </div>
            {/* <p>Sometimes backend developer.</p> */}
            {/* links */}
            <ul className='flex items-center gap-6 pb-1 mb-2 md:mb-10'>
              <LinkListItem href={GITHUB_URL}>
                <BsGithub />
              </LinkListItem>
              <LinkListItem href={''}>
                <BsLinkedin />
              </LinkListItem>
              <LinkListItem href={''}>
                <BsFileEarmarkPdfFill />
              </LinkListItem>
              <li className='text-4xl text-clrBlack cursor-pointer hover:text-orange-600'>
                {/* TODO: correct email address */}
                <MailToATag name='info' domain='example' tld='org' className='block'>
                  <HiOutlineMail />
                </MailToATag>
              </li>
            </ul>

            {/* description */}
            {/* <div className='text-appDarkNavy'>
              <p className='text-sm mb-2 md:text-xl'>
                I am a Web developer with 3 and a half years experience who loves creating applications.
              </p>
              <p className='text-sm mb-2 md:text-xl'>
                Skilled in TypeScript, React, Next.js, HTML, CSS, PHP, Laravel and MySQL.
              </p>
              <p className='text-sm md:text-xl'>
                Please contact me if you are interested!
              </p>
            </div> */}
          </section>
        </div>
      </div>
    </>
  )
}

export default Top
