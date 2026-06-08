import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeCD } from '../Context/ThemeContext'

const Navbar = () => {

  // const data = useContext(ThemeCD)
  // console.log(data);

  const [theme] = useContext(ThemeCD)
  
  return (
    <div className='nav flex justify-between py-2 px-4 font-bold' className= {theme}>
      <h2 className='flex justify-center items-center font-bold'>Rahul Abhishek</h2>
      
      {/* <h2 className='flex justify-center items-center font-bold'>{data}</h2> */}
      <Nav2 >
        <h2>This is Nav Bar</h2>
        <h2>This is Next senetence</h2>
      </Nav2>
    </div>
  )
}

export default Navbar


// import React, { useContext } from 'react'
// import Nav2 from './Nav2'
// import { ThemeDataContext } from '../Context/ThemeContext'

// const Navbar = (props) => {

//   const data = (ThemeDataContext)

//   return (
//     <div className='nav flex justify-between bg-gray-600 py-2 px-4 font-bold'>
//       <h2 className='flex justify-center items-center font-bold'>Sheriyans</h2>

//       {/* <Nav2 theme={props.theme}/> */}

//       {/* <Nav2 theme={props.theme}>
//         <h2>
//           This is Nav Bar
//         </h2>
//       </Nav2> */}
//         {/* This sentense will be passed as children in object form. */}
      
//       <Nav2 theme={props.theme}>
//         <h2>This is Nav Bar</h2>
//         <h2>This is Next senetence</h2>
//       </Nav2>

//         {/* These sentences will passed as children in Array form entirely. */}
//     </div>
//   )
// }

// export default Navbar