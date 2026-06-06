import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    console.log('Form submitted');  // when form submitted, the "form submitted" text only appears for micro secs in console (default behaviour of form)
    e.preventDefault();
    console.log();
    
    // We have to prevent this default behaviour. So we will use preventDefault() method.
    
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name here' /> 
        {/* The input is directly connected to website, but we have to interact with react and react interacts with website */}
        {/* So, we have to make an connection between input and react */}
        {/* TWO WAY BINDING is used for this */}
        <button>Submit</button> 
      </form>
    </div>
  )
}

export default App