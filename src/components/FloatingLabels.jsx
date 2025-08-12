import React from 'react'

const FloatingLabels = () => {
  return (
    <div className='px-3 py-4 mt-5 '>
      <form action="">
        <div className='relative'>
            <input 
            id='email'
            type="text" 
            placeholder='Email address' 
            className='peer border-b-2 border-gray-500 px-2 py-1 focus:outline-none focus:border-rose-600 transition-all focus:caret-rose-600/50 placeholder-transparent ' 
            />
            <label htmlFor="email" className='absolute 
            px-2 py-1 text-gray-600 -top-5 left-0
            peer-placeholder-shown:top-0
            peer-placeholder-shown:text-base transition-all duration-100 ease-in
            peer-focus:-top-5
            '>Email address</label>
        </div>
      </form>
    </div>
  )
}

export default FloatingLabels
