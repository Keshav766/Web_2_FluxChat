import { serverURL } from '../main.jsx';
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../redux/userSlice.js';

function Signup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.post(`${serverURL}/api/auth/signup`, {
        userName, email, password
      },
        { withCredentials: true }
      );
      dispatch(setUserData(result.data));
      setUsername("")
      setEmail("");
      setPassword("");
      setLoading(false);
      setErr("");
      console.log(result);
    } catch (error) {
      setLoading(false);
      setErr(error?.response?.data?.message);
    }
  }

  return (
    <div className='w-full h-screen bg-slate-300 flex justify-center 
    items-center'>
      <div className='w-full max-w-125 h-150 bg-white rounded-lg 
        shadow-gray-400 shadow-lg flex flex-col gap-7.5'>
        <div className='w-full h-50 bg-[#20c7ff] rounded-b-[30%] 
          shadow-gray-400 shadow-lg flex justify-center items-center'>
          <h1 className='text-gray-600 font-bold text-3xl'>Welcome to <span
            className='text-violet-500'>FluxChat</span></h1>
        </div>
        <form className='w-full flex flex-col gap-5 items-center' onSubmit={handleSignup}>

          <input type="text" placeholder='username' className='w-[90%] border-2 
            border-[#20c7ff] p-2.5 rounded-[10px] shadow-gray-300 shadow-md 
            outline-none' onChange={(e) => { setUsername(e.target.value) }} value={userName} />
          <input type="email" placeholder='email' className='w-[90%] border-2 
            border-[#20c7ff] p-2.5 rounded-[10px] shadow-gray-300 shadow-md 
            outline-none' onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <div className='w-[90%] border-2 border-[#20c7ff] rounded-[10px] shadow-gray-300 
            shadow-md overflow-hidden relative'>
            <input type={show ? "text" : "password"} placeholder='password' className='w-full  
            p-2.5  outline-none' onChange={(e) => { setPassword(e.target.value) }} value={password} />
            <span className='absolute top-2.5 right-4 text-[#20c7ff] font-semibold cursor-pointer'
              onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "show"}</span>
          </div>
          {err && <p className='text-red-500'>{"*" + err}</p>}
          <button type='submit' className='w-40 p-3 text-xl bg-[#20c7ff] mt-4 rounded-2xl 
            shadow-gray-400 shadow-md font-semibold hover:shadow-inner cursor-pointer'>{loading ? "Loading.." : "Sign up"}</button>

          <p className='cursor-pointer' onClick={() => navigate("/login")}>Already Have An Account ? <span className='text-[#20c7ff] font-bold'>Login</span></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
