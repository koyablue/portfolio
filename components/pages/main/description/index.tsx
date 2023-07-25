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
      md:bg-slate-200 md:py-16 dark:bg-clrDarkNavy'
    >
      <div className='flex flex-col flex-1 items-center
      text-clrWhite
      tracking-wide
       text-sm
       bg-slate-800
       bg-clip-content
       md:rounded
       md:text-lg
       dark:bg-slate-800
       dark:text-clrWhiteOpa'
      >
        <div className='p-8 leading-loose'>
          <div className='mb-6'>
            <p className='text-4xl dark:text-slate-100'>Hi 👋</p>
            <p className='text-4xl dark:text-slate-100'>I&apos;m <span className='text-5xl text-clrOrange'>Koya Aoyama</span> 🧑🏻‍💻</p>
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
        <div className='p-4'>
          <GitHubCalendar username='koyablue' />
        </div>
      </div>
    </div>
  )
}

export default Description
