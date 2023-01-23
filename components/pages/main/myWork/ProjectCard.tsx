import Image from 'next/image'
import { omitStr } from '../../../../helpers/util'
import { Project } from '../../../../types/project'

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
      bg-slate-200 rounded-[20px] shadow-lg
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
            className='rounded-[20px] object-cover object-center'
          />
        </div>
        <p className='text-appDarkNavy font-bold text-xl text-center mb-2'>
          {project.title}
        </p>
        <div className='bg-zinc-300 w-[90px] text-center text-zinc-600 text-sm rounded-[6px] p-1'>
          <p>#{project.type}</p>
        </div>
        <div className='text-appNavy'>
          {techStack}
        </div>
        <div className='break-words w-full text-appNavy'>
          {omitStr(project.description, 200)}
        </div>
      </div>
      <div className='flex items-center justify-center w-full md:block'>
        <button className='
          flex items-center justify-center w-full h-8 border-2 border-appOrange rounded-[10px]
          text-appOrange font-bold text-sm
          hover:bg-appOrange hover:text-slate-200
          active:opacity-60
          duration-300
          md:w-1/3'
        >
          Details
        </button>
      </div>
      {/* <div className='
      absolute rounded-[20px] w-full h-full top-0 left-0 opacity-0 bg-gray-500 transition duration-150 ease-out 
      hover:ease-in hover:opacity-70'>
        <div className='flex items-center justify-center align-middle w-full h-full'>
          <p className='text-textLight text-2xl text-center'>see more details →</p>
        </div>
      </div> */}
    </div>
  )
}

export default ProjectCard
