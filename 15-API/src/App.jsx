import axios from "axios";
import { useState } from "react";
const App = () => {


// ---> using Fetch


  // async function getData () {
  //   // console.log("data Fetched");
  //   const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10') // when this line executes, the js waits for response from API nd move on to next console line (async nature of js). so we use async and await for this problem. 
  //   console.log(response);
  // }

  // const getData = async () => {
  //   const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=10&limit=100')
  //   // console.log(response.json); // this also get pending response, so we create data variable to store the data. 
  //   const data = await response.json()
  //   console.log(data);
  // }


// ----> Using Axios


  // const getData = async () => {
  //   // const response = await axios.get('https://api.freeapi.app/api/v1/public/randomusers')
  //   // console.log(response.data);
  //   const {data} = await axios.get('https://api.freeapi.app/api/v1/public/randomusers') // destructring the response object directly we get only data
  //   console.log(data);
  // }
  
//  ---> Managing images from lorem picsum api

  const [data, setData] = useState([])

  const getData = async () => {
    const {data} = await axios.get('https://picsum.photos/v2/list') 
    setData(data)
  }



  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map(function(e,idx){
          return <h3 key={idx}>Heloo {idx + 1}, {e.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App