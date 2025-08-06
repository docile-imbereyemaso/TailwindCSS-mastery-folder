import React from 'react'

const Background = () => {
  return (
    <div className='min-h-screen grid items-center justify-center bg-black'>
          <div className='relative group'>
               <div className='absolute  -inset-1 rounded-xl blur bg-gradient-to-r from-pink-500 to-purple-600 opacity-40 group-hover:opacity-100 transition duration-1000'></div>
               <button className='relative divide-x divide-gray-800 text-white bg-black px-10 py-6 rounded-xl text-xl tracking-wide hover:cursor-pointer'>
                <span className='pr-6'>Lab Realese 2020.9</span>
                <span className='pl-6 group-hover:text-gray-900 font-bold transition duration-200'>See what's new</span>
               </button>
          </div>
    </div>
  )
}

export default Background
