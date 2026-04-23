import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen bg-slate-300 flex justify-center 
    items-center'>
      <div className='w-full max-w-125 h-150 bg-white rounded-lg 
        shadow-gray-400 shadow-lg flex flex-col gap-7.5'>
        <div className='w-full h-50 bg-[#20c7ff] rounded-b-[30%] 
          shadow-gray-400 shadow-lg flex justify-center items-center'>
          <h1 className='text-gray-600 font-bold text-[30px]'>Welcome to <span
            className='text-violet-500'>FluxChat</span></h1>
        </div>
        <form className='w-full flex flex-col gap-5 items-center'>

          <input type="text" placeholder='username' className='w-[90%] border-2 
            border-[#20c7ff] p-2.5 rounded-[10px] shadow-gray-300 shadow-md outline-none' />
          <input type="email" placeholder='email' className='w-[90%] border-2 
            border-[#20c7ff] p-2.5 rounded-[10px] shadow-gray-300 shadow-md outline-none'/>
          <div className='w-[90%] border-2 border-[#20c7ff] rounded-[10px] shadow-gray-300 
            shadow-md overflow-hidden relative'>
            <input type={show ? "text" : "password"} placeholder='password' className='w-full  
            p-2.5  outline-none' />
            <span className='absolute top-2.5 right-4 text-[#20c7ff] font-semibold cursor-pointer'
              onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "show"}</span>
          </div>
          <button className='w-40 p-3 text-[20px] bg-[#20c7ff] mt-4 rounded-2xl 
            shadow-gray-400 shadow-md font-semibold hover:shadow-inner cursor-pointer'>Sign up</button>

          <p className='cursor-pointer' onClick={() => navigate("/login")}>Already Have An Account ? <span className='text-[#20c7ff] font-bold'>Login</span></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
