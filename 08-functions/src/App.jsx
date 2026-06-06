import React from 'react'

const App = () => {

  function btnClicked() {

    console.log("Button is clicked");

  }

  function mouseEnter() {
    console.log("Mouse is entered");
  }

  return (
    <div>
      Hello how are you all
      <button onMouseMove={(e)=>{
        console.log(e.clientX);
        
      }} onMouseEnter={mouseEnter} onClick={btnClicked}>Click here</button>
      <div>
        <input type="text" onClick={() => {
          console.log("input is clicked");
        }} placeholder='Enter text here' />
      </div>
    </div>
  )
}

export default App