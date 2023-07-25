import TypeWriter from 'typewriter-effect'

/**
 * My name in top section
 *
 * @return {*} JSX.Element
 */
const MyName = () => {
  return (
    <div className='text-[35px] tracking-wide text-center text-clrBlack font-black md:text-[75px] dark:text-white'>
      <TypeWriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Koya Aoyama')
            .start();
        }}
        options={{
          cursor: '',
        }}
      />
    </div>
  )
}

export default MyName
