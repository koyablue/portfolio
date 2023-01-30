import Image from 'next/image'

// components
import Button from '../../../../common/Button'
import GitHubLinkButton from './buttons/GitHubLinkButton'
import ExternalLinkButton from './buttons/ExternalLinkButton'

// helpers
import { omitStr } from '../../../../../services/util'

// types
import { Project } from '../../../../../types/project'


type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const techStack = project.techStack && project.techStack.length ? project.techStack.join(' / ') :''

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
      lg:w-[calc((100%_-_32px)_/_3)]`}
    >
      <div className='flex flex-col gap-2.5 w-full h-full mb-4'>
        {/* TODO: project.image || noImage */}
        {/* <div className='border border-black h-40'></div> */}
        {/* <div className='relative border border-black h-40'> */}
        <div className='relative h-40'>
          <Image
            src={project.image || '/images/projects/path-kanri_image.png'}
            alt={`${project.title} image`}
            fill
            className='object-cover object-center border border-clrBlack rounded'
          />
        </div>
        <p className='text-clrBlack font-bold text-xl text-center mb-2'>
          {project.title}
        </p>
        <div className='bg-clrPalePink w-[90px] text-center text-textDarkMain text-sm rounded-[6px] p-1 border border-clrBlack'>
          <p>#{project.type}</p>
        </div>
        <div className='text-clrBlack font-semibold'>
          {techStack}
        </div>
        <div className='break-words w-full text-clrBlack text-sm '>
          {omitStr(project.description, 200)}
        </div>
      </div>
      <div className='flex items-center justify-between w-full md:justify-end'>
        <div className='flex justify-start items-center gap-2 w-full'>
          <GitHubLinkButton href={project.githubRepo} />
          <ExternalLinkButton href={project.url} />
        </div>
          <div className='w-1/3 h-8'>
            <Button shadowColor='black'>
              <p className='text-clrBlack font-bold text-sm'>Details</p>
            </Button>
          </div>
      </div>
    </div>
  )
}

export default ProjectCard
