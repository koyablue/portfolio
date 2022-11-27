// components
import MainWrapper from '../../../common/MainWrapper'
import SkillsCard from './skillsCard'

const SkillsAndExperiences = () => {
	const frontendSkills = [
		'react',
		'typescript',
		'javascript',
		'nextjs',
		'redux',
		'jest',
		'tailwind',
		'html',
		'css',
	]

	const backendSkills = [
		'php',
		'laravel',
		'mysql',
		'linux',
		'aws',
	]

	const otherSkills = [
		'git',
		'github',
		'githubactions'
	]

	return (
		<MainWrapper>
			<h2 className='text-textMainDark text-4xl font-bold text-center mb-8'>Skills & Experiences</h2>

			{/* w-full */}
			<div className='flex justify-between gap-4'>
				<SkillsCard title='frontend' iconNames={frontendSkills} />
				<SkillsCard title='backend' iconNames={backendSkills} />
				<SkillsCard title='other' iconNames={otherSkills} />
			</div>

		</MainWrapper>
	)
}

export default SkillsAndExperiences
