/**
 * Self introduction section of main page.
 *
 * @return {*} JSX.Element
 */
const Description = () => {
  return (
    <div className='flex justify-center box-border py-12  bg-indigo-900 md:py-16 dark:bg-clrDarkNavy'>
      <div className='flex flex-col flex-1 items-center
      text-clrWhite
      tracking-wide
       text-sm
       bg-clrDarkNavy
       bg-clip-content
       md:text-lg
       md:px-28
       dark:bg-clrThickNavy
       dark:text-clrWhiteOpa'
      >
        <div className='p-8 leading-loose'>
          <div className='mb-6'>
            <p className='text-5xl'>Hi 👋</p>
            <p className='text-4xl'>I&apos;m Koya Aoyama 🧑🏻‍💻</p>
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
      </div>
    </div>
  )
}

export default Description
