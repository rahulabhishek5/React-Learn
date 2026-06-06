import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [detailinitialval, setDetailinitialval] = useState('')

  // storing the details and mapping them into recent notes
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    // storing title and details in task array 
    const copyTask = [...task]
    copyTask.push({ title, detailinitialval })
    setTask(copyTask)
    setTitle('')
    setDetailinitialval('')
  }

  const deleteNote = (idx) => {
    const deleteTask = [...task]
    deleteTask.splice(idx,1) //remove note at idx and 1 note delete
    setTask(deleteTask)
  }

  return (
    <div className='bg-black min-h-screen flex flex-col md:flex-row w-full text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex gap-8 w-full md:w-1/2 lg:w-1/2 flex-col p-8  '>
        <h1 className="font-bold text-3xl h-fit pb-8">Add Notes Here</h1>

        {/* FIRST INPUT  */}
        <input
          type="text"
          placeholder='Enter Note Heading.'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

          }}
          className='border-2 border-gray-400 w-full outline-none rounded p-2' />

        {/* detailed Input  */}
        <textarea
          type="text"
          placeholder='Enter Details..'
          value={detailinitialval}
          onChange={(e) => {
            setDetailinitialval(e.target.value)
          }}
          className='border-2 border-gray-400 w-full h-24 outline-none rounded p-2' />
        <button
          type='submit'
          className='bg-white text-black w-full p-2 outline-none rounded active:scale-95 hover:bg-blue-500 hover:text-white  transition-transform cursor-pointer'>Add Note</button>
      </form>

      <div className="flex flex-col items-start lg:w-1/2 md:w-1/2 p-10 md:border-l lg:border-l-2 ">
        <h1 className="font-bold text-4xl h-fit pb-8">Recent Notes</h1>
        <div className="flex gap-5 flex-wrap justify-start">
          {task.map(function (data, idx) {
            return <div key={idx} className="h-52 relative w-40 rounded-xl bg-cover 
                    bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] 
                    text-black p-7">
              <h1 className=" text-black text-4xl font-bold leading-tight">{data.title}</h1>
              <h2 onClick={()=>{
                deleteNote(idx)
              }} className="absolute top-8 bg-red-500 right-4 text-white p-1 rounded-full scale-95 cursor-pointer active:scale-80 transition-all">  
                <X size={10} strokeWidth={1.5} absoluteStrokeWidth />
              </h2>
              <p className="mt-3 text-gray-700 leading-tight text-sm font-semibold">{data.detailinitialval}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App