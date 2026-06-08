import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Button from './Components/Button'


const App = () => {

  return (
    <div className='body h-screen'>
      <Navbar /> 

      {/* passing theme using props drilling (Not context API) */}
      <Button/>
    </div>
  )
}

export default App