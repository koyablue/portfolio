import { Project } from '../../../../types/project'

type Props = {
	project: Project
}

const ProjectCard = ({ project }: Props) => {
	// TODO: link to project detail page or project url?
	return (
		<div className={`
			flex flex-col items-center
			bg-slate-200 rounded-[20px] shadow-lg
			pt-4
			pb-8
			cursor-pointer
			hover:opacity-70
			lg:px-2
			lg:w-[calc((100%_-_32px)_/_3)]`}
		>
			<p className='text-textMainDark font-bold text-xl text-center mb-2'>
				{project.title}
			</p>
			<div className='flex flex-col w-full h-full'>
				{/* TODO: project.image || noImage */}
				<div className='border border-black h-40'>pic here</div>
				<div className='whitespace-pre-wrap'>{project.description}</div>
			</div>
		</div>
	)
}

export default ProjectCard
