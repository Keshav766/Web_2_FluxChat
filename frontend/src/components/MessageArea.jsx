import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import dp from "../assets/empty_dp.png"
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import { messagearea } from '../styles/home';

function MessageArea() {
  const { selectedUser } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className={`lg:w-[70%] ${selectedUser ? "flex" : "hidden"} lg:flex w-full h-full bg-slate-200 border-l-3 border-gray-300`}>

      {selectedUser && <div className={messagearea.header}>
        <div>
          <FaArrowLeft
            className='w-8 h-8 text-white cursor-pointer'
            onClick={() => dispatch(setSelectedUser(null))}
          />
        </div>
        <div className={messagearea.headerImageWrapper}>
          <img
            src={selectedUser?.image || dp}
            className="h-full object-cover"
            onClick={() => navigate("/profile")}
          />
        </div>
        <h1
          className={messagearea.headerName}>
          {selectedUser?.userName || "User"}
        </h1>
      </div>}

      {!selectedUser &&
        <div className={messagearea.base}>
          <h1
            className='text-gray-600 font-bold text-[50px]'>
            Welcome to <span
              className='text-[#20c7ff]'>FluxChat</span>
          </h1>
          <span
            className='text-gray-600 font-semibold text-[25px]'>
            <span
              className='text-[#20c7ff]'>Flowing
            </span> chat app !</span>
        </div>
      }

    </div>
  )
}

export default MessageArea
