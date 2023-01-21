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
  return (
    <div className={`
      relative
      flex flex-col items-center
      bg-slate-200 rounded-[20px] shadow-lg
      pt-3
      px-3
      pb-8
      cursor-pointer
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
            src={project.image || ''}
            alt={`${project.title} image`}
            fill
            className='rounded-[20px] object-cover object-center'
          />
        </div>
        <p className='text-textMainDark font-bold text-xl text-center mb-2'>
          {project.title}
        </p>
        {/* TODO: type tag here */}
        <div className='bg-zinc-300 w-[90px] text-center text-slate-600 text-sm rounded-[6px] p-1'>
          <p>#{project.type}</p>
        </div>
        <div>
          {techStack}
        </div>
        <div className='break-words w-full text-slate-700'>
          {omitStr(project.description, 200)}
        </div>
      </div>
      <div className='w-full'>
        <button className='
              flex items-center justify-center w-1/4 h-8 border-2 border-orange-600 rounded-[10px]
              text-orange-600 font-bold
              hover:bg-orange-600 hover:text-white duration-300
              '>ttt</button>
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
