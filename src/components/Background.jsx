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


          <div className='mt-5'>
                  <div className='relative group'>
                         <div className=' absolute -inset-0.5 blur bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 group-hover:opacity-90 transition group-hover:duration-300 duration-1000'></div>
                                  <button className=' relative px-3 py-5 bg-purple-400  text-white w-full rounded-xl divide-x divide-gray-900 text-xl tracking-widest'>
                                    <span className='pr-4 group-hover:text-gray-700 transition group-hover:duration-1000 font-bold'>Lab Realese 2020.9</span>
                                    <span className='pl-3'>See what's new</span>
                                  </button>
                         
                  </div>
          </div>


          
    </div>
  )
}

export default Background
