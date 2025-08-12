import React, { useState } from 'react'

const FormDesign = () => {

    const[setPassword, togglePassword] = useState(false);

    const handleToggle =()=>togglePassword(!setPassword);
  return (
    <div className='mx-auto mt-10 bg-gray-200/50 w-90'>
      <div className='bg-gray-600   shadow-lg shadow-slate-500 rounded-sm max-w-sm md:max-w-md lg:max-w-md py-3 px-2'>

          <h1 className='text-center text-xl font-primary text-primary/50 '>Login</h1>

          <p className='text-sm md:text-lg font-primary text-white '>Don't have an account <span className='text-rose-300/50 ml-3 border-l-2 px-2 border-l-gray-500 font-bold'>Sign up</span></p>

          <input  type={setPassword?"password":"text"} />
      </div>

      <button onClick={handleToggle}>click me</button>
    </div>
  )
}

export default FormDesign
