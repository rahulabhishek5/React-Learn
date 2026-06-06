import React, { useState } from 'react'

const App = () => {

  const [inputform, setInputform] = useState('')


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted value :', inputform);
    setInputform('') // This line is used here bcse when ever user submits the form, the input field should be cleared.
  }

  return ( 
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name here' 
        value={inputform}
        onChange={(e)=>{
          setInputform(e.target.value) // When an input is typed then it directly updates into react sttate - inputform and this input form is displayed as value in above line.as default inputform is empty(''), we use setInputform to update the inputform value through react.  
          // here we are updating the state of the input field, so that the value of the input field is always equal to the state of the input field.
          
        }}

        // onChange={(e)=>{
          // console.log(e.target.value); // this line onChange method runs for every time when we type inside the input field, for input abc this line will run for three times so this type of logging is not good for performance, in a real world this will be a heavy operation that could cause performance issues so we use event.target.value to get the value of the input field.  
        // }}
        /> 
        <button>Submit</button> 
      </form>
    </div>
  )
}

export default App