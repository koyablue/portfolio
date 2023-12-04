import GitHubCalendar from 'react-github-calendar';

/**
 * Self introduction section of main page.
 *
 * @return {*} JSX.Element
 */
const Description = () => {
  return (
    <div className='
      flex justify-center
      box-border py-12
      md:px-28
      md:py-16 dark:bg-clrDarkNavy'
    >
      <div className='flex flex-col flex-1 items-center
      tracking-wide
       text-sm
       bg-clip-content
       bg-indigo-400/10
       md:rounded
       md:text-lg
       md:p-4
       dark:bg-slate-800
       dark:text-clrWhiteOpa'
      >
        <div className='p-8 leading-loose'>
          <div className='mb-6'>
            <p className='text-4xl dark:text-slate-100'>Hi 👋</p>
            <p className='text-4xl dark:text-slate-100'>I&apos;m <span className='text-5xl text-indigo-400'>Koya Aoyama</span> 🧑🏻‍💻</p>
          </div>

          <p>
            I am a Web developer with 3 and a half years experience who loves creating applications.
          </p>
          <p>
            Skilled in TypeScript, React, Next.js, HTML, CSS, PHP, Laravel and MySQL.
          </p>
          <p>
            Please contact me if you are interested!
          </p>
        </div>
        {/* GitHub contribution chart */}
        <div className='p-4 rounded'>
          <GitHubCalendar
            username='koyablue'
            hideColorLegend
            colorScheme='light'
          />
        </div>
      </div>
    </div>
  )
}

export default Description
