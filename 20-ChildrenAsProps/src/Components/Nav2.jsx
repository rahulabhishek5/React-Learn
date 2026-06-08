import { useContext } from "react";
import { ThemeCD } from "../Context/ThemeContext";

const Nav2 = () => {

  const [theme, setTheme] = useContext(ThemeCD)
  console.log(theme);
  
  return (
    <div className='nav-options flex gap-4 p-3'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>{theme}</h4>
    </div> 
  )
}

export default Nav2



// import React from 'react'

// const Nav2 = (props) => {
// // const Nav2 = (theme,children) => { //Also can be written like this

//   // console.log(props);
//   console.log(props.children[0]);
  
//   return (
//     <div className='nav-options flex gap-4 p-3'>
//         <h4>Home</h4>
//         <h4>About</h4>
//         <h4>Contact</h4>
//         <h4>Services</h4>
//         {props.children[1]}
//         <h2 >{props.theme}</h2> 
//         {/* this is normal method props drilling to pass a variable to it's children */}
//     </div>
//   )
// }

// export default Nav2