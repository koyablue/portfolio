import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <header className='flex w-full h-16 border-b border-slate-200 space-x-11'>
        {/* TODO: logo */}
        <div>KOYA</div>
        <div className='flex space-x-11'>
          <div>Skills & Experiences</div>
          <div>My Work</div>
          <div>About</div>
        </div>
        <button className='w-40 h-6 border-2 border-black rounded-[50px]'>Resume</button>
      </header>
      {/* hero container */}
      <div className='flex h-[calc(100vh_-_64px)]'>
        <div className='w-[45%]'>a</div>
        <div className='grow h-21 bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 p-24'>
          <div className='bg-white w-full h-full'>TODO: my photo</div>
        </div>
      </div>
    </div>
  )
}

export default Home