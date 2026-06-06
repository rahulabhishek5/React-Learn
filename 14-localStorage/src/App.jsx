import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user','rahul')
  // localStorage.setItem('age','20')
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')
  // console.log(user,age);

  // localStorage.removeItem('age')

  // const user = {
  //   username : 'rahul',
  //   age : 20,
  //   city : 'Hyd'
  // }
  
  // console.log(user);
  // localStorage.setItem('user', user) // this saves the user as [object object] in local storage so we use JSON.stringify method
  // localStorage.setItem('user', JSON.stringify(user))

  // const user = localStorage.getItem('user')
  // console.log(typeof(user));
  
  const user = JSON.parse(localStorage.getItem('user'))
  console.log((user));
  
  // localStorage.setItem('key','value')
  // localStorage.getItem('key')
  // localStorage.clear()
  // localStorage.removeItem('key')
  // localStorage.key(key) -> to retrive the key at a given index
  

  return (
    <div>
      App
    </div>
  )
}

export default App 