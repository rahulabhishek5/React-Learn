import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card"
const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`)
    setUserData(response.data)
    // console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = 'No users Available'

  if (userData.length > 0) {
    printUserData = userData.map(function (e, idx) {
      return <Card e={e} idx={idx}/>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 text-white px-4 py-2 mb-3 rounded cursor-pointer active:scale-95 transition-all duration-200'>Get Data</button>
      <div className="flex flex-wrap gap-4 justify-center">
        {printUserData}
      </div>

      <div className="flex gap-4 justify-center items-center mt-6 ">
        <button 
          onClick={()=> {
            if(index>1) {
              setIndex(index-1)
              setUserData([])
            }
          }}
          className="cursor-pointer bg-blue-500 px-3 text-sm hover:bg-blue-700 active:scale-95 transition-all duration-200 py-2 rounded">Previous</button>

        <h4 className="text-2xl border font-bold text-gray-300 px-3 py-2 rounded">Page {index}</h4>

        <button
          onClick={()=> {
            if(index>0) {
              setIndex(index+1)
              setUserData([])
            }
          }}
          className="cursor-pointer bg-blue-500 px-3 text-sm hover:bg-blue-700 active:scale-95 transition-all duration-200 py-2 rounded">Next</button>
      </div>
    </div>
  )
}
 
export default App