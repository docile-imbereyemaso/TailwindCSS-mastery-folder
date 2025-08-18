import React, { useState } from 'react'

const Login = () => {
    const[isLoginMode,setIsLoginMode] = useState(true);
  return (
    <div className='mx-auto w-100 mt-10 bg-gray-100/70 py-3 px-2 rounded-lg shadow-lg'>
        <form action="#">
      <h1 className='text-center text-3xl font-semibold mb-4 text-gray-800'>{isLoginMode?"Login":"Sign Up"}</h1>
         
         {/* shared button */}
      <div className='space-x-4 mb-5 flex'>
        <button className='btn' onClick={()=>setIsLoginMode(true)}>Login</button>
        <button className='btn' onClick={()=>setIsLoginMode(false)}>Sign Up</button>
        <div></div>
      </div>

        {!isLoginMode && (
            <input type="text" placeholder='Name' className='inputField'/>
        )}
         {/* shared input fields */}

         <input type="email" placeholder='Email Address' className='inputField' />
         <input type="password" placeholder='Password'  className='inputField'/>

         {!isLoginMode &&(
            <input type="password" placeholder='Confirm Password' className='inputField'/>
         )}

         {!isLoginMode&& <p className='text-end text-rose-700 text-lg font-mono'>Forget password</p>}
            
            <button className={`bg-gradient-to-r from-blue-700 via-cyan-500 to-cyan-500 w-full py-3 rounded-xl my-3 font-bold text-white focus:ring focus:ring-2 ${!isLoginMode ?"focus:ring-rose-600":"focus:ring-indigo-600"}  focus:ring-offset-2 transition-all duration-150 ease-in-out`}>{isLoginMode?"Log In":"Sign Up"}</button>

            <div onClick={()=>setIsLoginMode(!isLoginMode)} className='my-3'>
             {!isLoginMode?
             (<p className='text-medium text-gray-500 hover:text-indigo-500 hover:cursor-pointer transition-all duration-200 ease-in-out'>Don't have an account <span className='border-l-2 pl-2 ml-3 border-l-rose-400'>Sign up now</span></p>):
             (<p className='text-medium text-gray-500 hover:text-indigo-500 hover:cursor-pointer transition-all duration-200 ease-in-out'>Already have an account <span className='border-l-2 pl-2 ml-3 border-l-rose-400'>Login now</span></p>)}
            </div>
         </form>
    </div>
  )
}

export default Login
