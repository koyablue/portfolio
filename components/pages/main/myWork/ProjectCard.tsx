import Image from 'next/image'
import { Project } from '../../../../types/project'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const techStack = project.techStack && project.techStack.length ? project.techStack.join(' / ') :''

  // TODO: link to project detail page or project url?

  // TODO: overflow hidden
  return (
    <div className={`
      flex flex-col items-center
      bg-slate-200 rounded-[20px] shadow-lg
      px-4
      pt-4
      pb-8
      cursor-pointer
      hover:opacity-70
      max-h-[500px]
      min-h-[280px]
      lg:w-[calc((100%_-_32px)_/_3)]`}
    >
      <p className='text-textMainDark font-bold text-xl text-center mb-2'>
        {project.title}
      </p>
      <div className='flex flex-col gap-2.5 w-full h-full'>
        {/* TODO: project.image || noImage */}
        {/* <div className='border border-black h-40'></div> */}
        {/* <div className='relative border border-black h-40'> */}
        <div className='relative h-40'>
          <Image
            src={project.image || ''}
            alt={`${project.title} image`}
            fill
            className='rounded-[6px] object-cover'
          />
        </div>
        {/* TODO: type tag here */}
        <div className='bg-zinc-300 w-[90px] text-center text-slate-600 text-sm rounded-[6px] p-1'>
          <p>#{project.type}</p>
        </div>
        <div>
          {techStack}
        </div>
        <div className='text-slate-700 line-clamp-3'>
          {project.description}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
