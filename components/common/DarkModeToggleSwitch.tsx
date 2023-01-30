import { FiSun, FiMoon } from 'react-icons/fi'

const DarkModeToggleSwitch = () => {
  // TODO: dark mode style
  return (
    <label className='relative inline-flex items-center cursor-pointer w-full'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div className="
        flex
        items-center
        justify-between
        w-full h-7
        bg-gray-200
        border border-clrBlack
        rounded-full
        px-2
        peer
        peer-checked:after:translate-x-full
        peer-checked:after:border-clrBlack
        peer-checked:bg-blue-600
        after:content-['']
        after:absolute
        after:top-[2px]
        after:left-[4px]
        after:bg-white
        after:border
        after:border-clrBlack
        after:rounded-full
        after:h-6
        after:w-6
        after:transition-all"
      >
        <FiSun />
        <FiMoon />
      </div>
    </label>
  )
}

export default DarkModeToggleSwitch
