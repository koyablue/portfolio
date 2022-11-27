// components
import MainWrapper from '../../../common/MainWrapper'
import SkillsCard from './skillsCard'

const SkillsAndExperiences = () => {

	const frontendSkills = [
		{ label: 'React', iconName: 'react' },
		{ label: 'TypeScript', iconName: 'typescript' },
		{ label: 'JavaScript', iconName: 'javascript' },
		{ label: 'Next.js', iconName: 'nextjs' },
		{ label: 'Jest', iconName: 'jest' },
		{ label: 'Tailwind CSS', iconName: 'tailwind' },
		{ label: 'HTML', iconName: 'html' },
		{ label: 'CSS', iconName: 'css' },
	]

	const backendSkills = [
		{ label: 'PHP', iconName: 'php' },
		{ label: 'Laravel', iconName: 'laravel' },
		{ label: 'MySQL', iconName: 'mysql' },
		{ label: 'Linux', iconName: 'linux' },
		{ label: 'AWS', iconName: 'aws' },
	]

	const otherSkills = [
		{ label: 'Git', iconName: 'git' },
		{ label: 'GitHub', iconName: 'github' },
		{ label: 'GitHub Actions', iconName: 'githubactions' },
	]

	return (
		<MainWrapper>
			<h2 className='text-textMainDark text-4xl font-bold text-center mb-8'>Skills & Experiences</h2>

			{/* w-full */}
			<div className='flex justify-between gap-4'>
				<SkillsCard title='Frontend' iconNamesAndLabels={frontendSkills} />
				<SkillsCard title='Backend' iconNamesAndLabels={backendSkills} />
				<SkillsCard title='Other' iconNamesAndLabels={otherSkills} />
			</div>

		</MainWrapper>
	)
}

export default SkillsAndExperiences
