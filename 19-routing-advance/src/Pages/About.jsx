import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Education from './Education'
import Projects from './Projects'

const About = () => {
    return (
        <div className='relative min-h-[70vh] '>
            
            <div className='absolute text-4xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <Link className='absolute text-4xl font-bold' to='/About/Education'>Education</Link>
                <Link className='absolute text-4xl font-bold mx-50' to='/About/Projects'>Projects</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default About