import React, { useState } from 'react'

const App = () => {

  // // const [num, setNum] = useState(10)
  // const [num, setNum] = useState({user:'rahul', age: 21 })

  // const btnClicked = () => {
  //   console.log('Button clicked');
  //   // setNum(20)
  //   // console.log(num);   // here it will not show the update value bcz react re renders after the function is executed so it will show the previous value of num.
    
  //   const newNum = {...num} //This is called destructuring in which we create a new object with the same properties and values as the old object. new num created because state is immutable so we canot change the state directly means we cannot change the same refrence of state. we have to create new refrence of state. 
  //   newNum.user = "Abhi"   // if this newNum and oldNum are same then react will not re render, if we don't change anything then react will not re render. so we have to change something like if newNum === num then don't re render.
  //   newNum.age = 30
  //   setNum(newNum)
  // }


  // const [num, setNum] = useState([10,20,30])

  // const btnClicked = () => {
  //   const newNum = [...num]
  //   newNum.push(40)
  //   newNum.push(99)
  //   setNum(newNum)
  //   console.log(newNum);
    
  // }

  const [num, setNum] = useState({user:'Rahul', age: 21})

  const btnClicked = () => {
    setNum(prev=> ({...prev,age: 22}))  // prev is the previous value of num and we are creating a new object with the same properties and values as the old object and updating the age property.
    // it is another method of updating things
  }

  return (
    <div>
      {/* <h1>{num}</h1> */}
      {/* <h1>{num.user}, {num.age}</h1> */}
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App