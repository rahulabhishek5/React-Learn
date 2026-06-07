import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex p-10 justify-between bg-blue-300 m-5 rounded-full'>
            <h2 className='font-bold text-xl'><a href="/">Sheriyans</a></h2>

            {/* <div className='flex gap-10'>
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/contact">Contact</a>
            </div> */}
            <div className='flex gap-10'>
                <Link to='/' className='font-bold text-md'>       Home</Link>
                <Link to='/About' className='font-bold text-md'>  About</Link>
                <Link to='/contact' className='font-bold text-md'>Contact</Link>
            </div>

        </div>

    )
}

export default Navbar