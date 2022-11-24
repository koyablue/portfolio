const SkillsAndExperiences = () => {
	return (
		<div>
			<h2 className='text-textMainDark font-bold'>Skills & Experiences</h2>
			<p>contents here</p>

				{/* use <img> tag intentionally instead of <Image /> component to avoid a strange error */}
				{/* the error is like: 400 bad request. "url" parameter is valid but image type is not allowed. */}
				<ul className='flex'>
					<li>
						<img src="https://skillicons.dev/icons?i=react" alt='React icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=typescript" alt='TypeScript icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=nextjs" alt='Next.js icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=redux" alt='Redux icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=jest" alt='Jest icon' />
					</li>
				</ul>

				{/* &theme=light to make icons bright */}
				<ul className='flex'>
					<li>
						<img src="https://skillicons.dev/icons?i=php" alt='PHP icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=laravel" alt='Laravel icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=mysql" alt='MySQL icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=linux" alt='Linux icon' />
					</li>
					<li>
						<img src="https://skillicons.dev/icons?i=aws" alt='AWS icon' />
					</li>
				</ul>
		</div>
	)
}

export default SkillsAndExperiences
