import { setUserData } from '../redux/userSlice.js';
import { serverURL } from '../main.jsx';
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErr("");
      const result = await axios.post(`${serverURL}/api/auth/login`, {
        email, password
      }, { withCredentials: true });
      dispatch(setUserData(result.data));
      setEmail("");
      setPassword("");
      setLoading(false);
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
          <h1 className='text-gray-600 font-bold text-[30px]'>Login to <span
            className='text-violet-500'>FluxChat</span></h1>
        </div>
        <form className='w-full flex flex-col gap-5 items-center' onSubmit={handleLogin}>
          <input type="email" placeholder='email' className='w-[90%] border-2 
              border-[#20c7ff] p-2.5 rounded-[10px] shadow-gray-300 
              shadow-md outline-none' onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <div className='w-[90%] border-2 border-[#20c7ff] rounded-[10px] shadow-gray-300 
              shadow-md overflow-hidden relative'>
            <input type={show ? "text" : "password"} placeholder='password' className='w-full  
              p-2.5  outline-none' onChange={(e) => { setPassword(e.target.value) }} value={password} />
            <span className='absolute top-2.5 right-4 text-[#20c7ff] font-semibold cursor-pointer'
              onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "show"}</span>
          </div>
          {err && <p className='text-red-500'>{"*" + err}</p>}
          <button className='w-40 p-3 text-[20px] bg-[#20c7ff] mt-10 rounded-2xl 
              shadow-gray-400 shadow-md font-semibold hover:shadow-inner 
              cursor-pointer' type='submit'>{loading ? "Loading.." : "Login"}</button>

          <p className='cursor-pointer' onClick={() => navigate("/signup")}>New to FluxChat ? <span
            className='text-[#20c7ff] font-bold'>Signup</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login
