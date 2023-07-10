// redux
import { useAppSelector, useAppDispatch } from '../../stores/hooks'
import { selectColorTheme } from '../../stores/slices/colorThemeSlice'

// constants
import { colorThemeConfig } from '../../constants/colorTheme'

// custom hooks
import { useColorTheme } from '../../hooks/useColorTheme'

// icons
import { FiSun, FiMoon } from 'react-icons/fi'

const DarkModeToggleSwitch = () => {
  const currentColorTheme = useAppSelector(selectColorTheme)

  const { toggleDarkMode } = useColorTheme()

  const onChangeHandler = () => {
    toggleDarkMode()
  }

  const isChecked = currentColorTheme === colorThemeConfig.dark

  return (
    <label className='relative inline-flex items-center cursor-pointer w-full'>
      <input type='checkbox' value='' className='sr-only peer' checked={isChecked} onChange={onChangeHandler} />
      <div className="
        flex
        items-center
        justify-between
        w-full h-7
        bg-slate-700
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
        after:transition-all
        dark:peer-checked:bg-slate-800
        dark:after:bg-slate-100
        "
      >
        <FiSun className='dark:text-clrOrange' />
        <FiMoon className='text-clrOrange' />
      </div>
    </label>
  )
}

export default DarkModeToggleSwitch
