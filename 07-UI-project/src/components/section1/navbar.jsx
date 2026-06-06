import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <h4 className="text-white bg-black rounded-full px-4 py-2 uppercase">Target Audience</h4>
      <button className="text-black bg-gray-300 hover:bg-gray-700 hover:text-white transition-colors rounded-full duration-250 px-4 py-2 rounded cursor-pointer uppercase tracking-wider text-sm">digital Banking platform</button>
    </div>
  )
}

export default Navbar