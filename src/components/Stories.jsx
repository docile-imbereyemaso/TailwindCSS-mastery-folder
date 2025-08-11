import React from 'react'
import image from '../assets/image.jpg'
const Stories = () => {
  return (
    
    <div className=' mt-5 px-5 py-3 flex justify-center'>
     
         <ul className='flex gap-x-5'>
            <li className='flex flex-col justify-center items-center'>
                <div className=' relative rounded-full bg-gradient-to-tr from-yellow-600 p-1 to-fuchsia-700'>
                    <a href="#" className='bg-white block p-1 rounded-full  hover:-rotate-6 transform transition duration-300 ease-in-out hover:object'>
                        <img src={image} alt="" className='size-24 object-cover rounded-full '/>
                    </a>
                    <button className='absolute bottom-0 right-0 bg-indigo-500 px-2 py-1 rounded-full text-xl border-3 border-white text-white font-bold hover:bg-indigo-700 transition'>+</button>
                </div>
                <a href="#" className='text-base font-thin text-gray-400/50 '>You</a>
            </li>
            <li className='flex flex-col justify-center items-center'>
                <div className='rounded-full bg-gradient-to-tr from-yellow-600 p-1 to-fuchsia-700'>
                    <a href="#" className='bg-white block p-1 rounded-full hover:-rotate-6 transform transition duration-300 ease-in-out hover:object'>
                        <img src={image} alt="" className='size-24 object-cover rounded-full '/>
                    </a>
                </div>
                <a href="#" className='text-base font-thin text-gray-400/50'>Kitten One</a>
            </li>
            <li className='flex flex-col justify-center items-center'>
                <div className='rounded-full bg-gradient-to-tr from-yellow-600 p-1 to-fuchsia-700'>
                    <a href="#" className='bg-white block p-1 rounded-full hover:-rotate-6 transform transition duration-300 ease-in-out hover:object'>
                        <img src={image} alt="" className='size-24 object-cover rounded-full '/>
                    </a>
                </div>
                <a href="#" className='text-base font-thin text-gray-400/50'>Kitten One</a>
            </li>
         </ul>
    </div>
  )
}

export default Stories
