import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App