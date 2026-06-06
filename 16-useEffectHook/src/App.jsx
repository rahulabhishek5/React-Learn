import React, { useEffect, useState } from 'react'

const App = () => {

  // function random() {
  //   let a = Math.random()
  //   console.log(a);

  // }
  // random() // this function runs everytime we make changes in the UI, which is wrong. so we use useEffect to avoid this.
  // If we consider a big truck moving on road then the engine is React engine and everytime we start the truck it's engine runs once.
  // but here, whenever we make changes in the UI, it's engine is running again and again, which is wrong. 


  // this big truck almost takes up all the space on the road, as it is very big. and we have to also run diff vehicles like API, DOM manipulation etc.
  // What is useEffect then?
  // it is a function that called after UI is rendered. and it is not called again & again. it only called once when UI is rendered for the first time.
  // It provides side-way or footpath for other vehicles to run (other processes to run).

  // tough it doesn't runs these other operations parallelly, but it runs these micro-processes after the UI rendered by react, and processes these tasks in footpath.

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){ // this is for the purpose of running any function for the first time when the component is mounted.
  //   console.log(("Use effect is running"));
    
  // // },[])  // this [] is dependency array. and if it is empty then useEffect will run only once when component is mounted. & it will not run again & again.
  // },[num2])  // now here num2 is dependent variable. so useEffect will run only when num2 updates.

  const [a, setA] = useState(0)
  const [b, setB] = useState(10)

  function achange(){
    console.log('a is changing');
    
  }

  useEffect(function(){
    achange() // this function also runs whenever a is changed..
    // console.log('use effect is running...');
  },[a])  // now the useeffect will only run whenever a gets updated.

  return (
    <div>
      {/* <h1>Val of num is : {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}>Hover me</button>   */}
      {/* whenever the button clicked and number updates, the useEffect also runs again and again, which is not this is made for as normal function also performs same
      This is known as "MOUNTING". */}

        <h1>A value is : {a}</h1>
        <h1>B value is : {b}</h1>
        <button 
          onClick={()=>{
            setA(a+1)
          }}>click A</button>
        <button
          onClick={()=>{
            setB(b-1)
          }}>click B</button>

    </div> 
  )
}

export default App








// import React from 'react'

// const App = () => {

//   const getData = () => {
//     console.log("Button Clicked");
//   }

//   return (
//     <div className='bg-black h-screen p-4 text-white'>
//       <button 
//         onClick={getData}
//         className='bg-green-600 text-white px-4 py-2 mb-3 rounded cursor-pointer active:scale-95 transition-all duration-200'>Get Data</button>
//     </div>
//   )
// }

// export default App