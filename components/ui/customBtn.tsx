import React from 'react'

const customBtn = () => {
  return (
    <div className=' mb-6 group '>

    
    <button className=   'bg-red-500 relative   group-hover:bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'>
        LET&apos;S TALK »
    </button>
    <button className=   'bg-red-500 absolute -left-[15px] opacity-30 g group-hover:bg-red-600 text-white font-bold text-lg px-8 py-4 -z-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'>
        LET&apos;S TALK »
    </button>
    <button className=   'bg-red-500 absolute -left-[30px] opacity-40  group-hover:bg-red-600 text-white font-bold text-lg px-8 py-4 -z-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'>
        LET&apos;S TALK »
    </button>

    </div>
  )
}

export default customBtn