import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='text-black relative flex p-10 justify-between bg-blue-300 m-5 rounded-full'>
            <h2 className='font-bold text-xl hover:scale-110 transition 200'><a href="/">Sheriyans</a></h2>

            <div className='flex gap-10'>
                <Link to='/' className='font-bold text-xl hover:scale-110 transition 200'>       Home</Link>
                <Link to='/About' className='font-bold text-xl hover:scale-110 transition 200'>  About</Link>
                <Link to='/contact' className='font-bold text-xl hover:scale-110 transition 200'>Contact</Link>
                <Link to='/courses' className='font-bold text-xl hover:scale-110 transition 200'>Courses</Link>
            </div>

        </div>

    )
}

export default Navbar