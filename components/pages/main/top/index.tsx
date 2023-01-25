import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// icons
import { BsGithub, BsLinkedin, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

// constants
import { GITHUB_URL } from '../../../../constants'

// hooks
import { useLinearTypingEffect } from '../../../../hooks/useLinearTypingEffect'

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
      {/* h-[calc(100%_-_64px)] */}
      {/* TODO: need media query for hei */}
      {/* min-h-[400px] */}
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
        {/* TODO: should have border? */}
        <div className={`
            flex flex-col justify-center items-center gap-6
            w-full
            px-10
            py-10
            border
            border-clrBlack
            md:w-[600px]
            md:h-[600px]
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
                className='border-4 border-t-clrHyperViolet border-r-clrOrange border-b-clrYellow border-l-clrYellow shadow-noBlurBlack'
              />
            </div>
          </section>
          {/* intro and links */}
          <section className='flex flex-col items-center'>
            <div className='mb-3.5'>
              <p className='text-[35px] text-center text-clrBlack font-black md:text-[75px]'>
                Koya Aoyama
              </p>
              <p className='text-[25px] text-center font-semibold text-clrBlack md:text-[50px]'>
                Frontend <br className='hidden'/>developer
              </p>
            </div>
            {/* links */}
            <ul className='flex items-center gap-6 pb-1 mb-2 md:mb-10'>
              <LinkListItem href={GITHUB_URL}>
                <BsGithub />
              </LinkListItem>
              <LinkListItem href={''}>
                <BsLinkedin className='text-sky-700' />
              </LinkListItem>
              <LinkListItem href={''}>
                <BsFileEarmarkPdfFill className='text-clrOrange' />
              </LinkListItem>
              <li className='
                flex items-center justify-center
                text-4xl text-clrBlack
                border-[1.5px] border-clrBlack
                w-12 h-12
                rounded
                bg-clrWhite
                cursor-pointer
                duration-200
                hover:opacity-80'
              >
                {/* TODO: correct email address */}
                <MailToATag name='info' domain='example' tld='org' className='block'>
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
