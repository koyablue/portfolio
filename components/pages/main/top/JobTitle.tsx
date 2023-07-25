import TypeWriter from 'typewriter-effect'

/**
 * Job title in top section
 *
 * @return {*} JSX.Element
 */
const JobTitle = () => {
  return (
    <div className='text-[25px] tracking-wide text-center font-semibold text-clrOrange md:text-[50px]'>

      <TypeWriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2000)
            .typeString('Fullstack developer')
            .pauseFor(3000)
            .deleteAll()
            .typeString('Frontend developer')
            .pauseFor(3000)
            .deleteAll()
            .typeString('Backend developer')
            .pauseFor(3000)
            .deleteAll()
            .typeString('Fullstack developer')
            .start();
        }}
        options={{
          cursor: '_',
          // loop: true,
        }}
      />
      {/* Fullstack <br className='hidden'/>developer */}

    </div>
  )
}

export default JobTitle
