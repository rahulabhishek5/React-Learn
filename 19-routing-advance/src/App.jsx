import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Notfound from './Pages/Notfound'
import Education from './Pages/Education'
import Courses from './Pages/Courses'
import Projects from './Pages/Projects'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className="grow">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />}>
          <Route path='Education' element={<Education />} />
          <Route path='Projects' element={<Projects />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses/>} />

        <Route path='*' element={<Notfound />} />
        {/* Not found page route above */}
      </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App