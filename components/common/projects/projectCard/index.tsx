import Image from 'next/image'

// components
import Button from '../../Button'
import GitHubLinkButton from './buttons/GitHubLinkButton'
import ExternalLinkButton from './buttons/ExternalLinkButton'
import Nl2br from '../../Nl2br'

// helpers
import { omitStr } from '../../../../services/util'

// types
import { Project } from '../../../../types/project'

// icons
import { HiCode } from 'react-icons/hi'

/**
 * Returns<Image /> or no-image element
 *
 * @param {{ images: Project['images']; alt: string }} { images, alt }
 * @return {*} JSX.Element
 */
const ProjectImage = ({ images, alt }: { images: Project['images']; alt: string }) => {
  const noImage = (
    <div className='flex items-center justify-center h-full bg-clrWhite border border-clrBlack rounded'>
      <HiCode className='text-6xl text-clrBlack' />
    </div>
  )

  if (!images || !images.length) return noImage

  return (
    <Image
      src={images[0]}
      alt={alt}
      fill
      className='object-cover object-center border border-clrBlack rounded'
    />
  )
}

type Props = {
  project: Project
  disableDetailButton?: boolean
}

const ProjectCard = ({ project, disableDetailButton = false }: Props) => {
  const techStack = project.techStack && project.techStack.length ? project.techStack.join(' / ') : ''


  // TODO: link to project detail page or project url?

  // TODO: overflow hidden

  // hover:opacity-70

  // TODO: decide projects to display in top page

  return (
    <div className={`
      relative
      flex flex-col items-center
      bg-clrWhite
      border
      border-clrBlack
      rounded
      pt-3
      px-3
      pb-8
      max-h-[500px]
      min-h-[280px]
      max-w-[100%]
      text-clrBlack
      lg:w-[calc((100%_-_32px)_/_3)]
      dark:bg-clrThickNavy
      dark:border-clrThickNavy
      dark:text-clrWhiteOpa`}
    >
      <div className='flex flex-col gap-2.5 w-full h-full mb-4'>
        {/* TODO: project.image || noImage */}
        {/* <div className='border border-black h-40'></div> */}
        {/* <div className='relative border border-black h-40'> */}
        <div className='relative h-40'>
          <ProjectImage images={project.images} alt={`${project.title} image`} />
        </div>
        <p className='font-bold text-xl text-center mb-2 dark:text-slate-100'>
          {project.title}
        </p>
        <div className='bg-clrPalePink w-[90px] text-center text-textDarkMain text-sm rounded-[6px] p-1 border border-clrBlack dark:text-clrWhiteOpa dark:bg-rose-400 dark:border-rose-400'>
          <p>#{project.type}</p>
        </div>
        <div className='font-semibold'>
          {techStack}
        </div>
        <div className='break-words w-full text-sm '>
          <Nl2br text={omitStr(project.description, 200)} />
        </div>
      </div>
      <div className='flex items-center justify-between w-full md:justify-end'>
        <div className='flex justify-start items-center gap-2 w-full'>
          <GitHubLinkButton href={project.githubRepo} />
          <ExternalLinkButton href={project.url} />
        </div>
        <div className='w-1/3 h-8'>
          {/* TODO: if no id then disable */}
          <Button
            className={`
              shadow-[3px_3px_0_0_#333333]
              hover:shadow-[5px_5px_0_0_#333333]
              dark:shadow-none
              dark:active:shadow-none
              dark:bg-indigo-400
              dark:hover:bg-indigo-300
              dark:rounded
              ${disableDetailButton && 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed shadow-none active:opacity-100 hover:shadow-none dark:bg-gray-300 dark:text-gray-400 dark:border-gray-300'}
            `}
          >
            <a
              href={`${project.githubRepo}#readme`}
              target='_blank'
              rel='noreferrer'
              className={`block text-clrBlack text-sm font-medium ${disableDetailButton && 'text-gray-500'}`}>
              Details
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
