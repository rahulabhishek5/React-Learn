import React, { useContext } from 'react'
import { ThemeCD } from '../Context/ThemeContext'

const Button = () => {

    const [theme, setTheme] =  useContext(ThemeCD)

    const changeTheme = () => {
        setTheme('Dark')
    }

  return (
    <div className='relative'>
        <div
            onClick={changeTheme} 
            className='absolute bg-red-400 px-4 py-2 cursor-pointer h-fit rounded w-fit top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2'>
            click me {theme}
        </div>
    </div>
  )
}

export default Button