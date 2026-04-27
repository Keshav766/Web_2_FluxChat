import {
    button,
    container,
    input,
    profileCameraIcon,
    profileImageContainer,
    profileImageWrapper,
    form,
    inputDisabled
} from '../styles/layoutStyles'
import React from 'react'
import dp from "../assets/empty_dp.png"
import { FaCamera } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { userData } = useSelector(state => state.user);
    const navigate = useNavigate();
    return (
        <div className={container}>
            <div className='fixed top-5 left-5'>
                <FaArrowLeft
                    className='w-8 h-8 text-gray-400 cursor-pointer'
                    onClick={() => navigate("/home")}
                />
            </div>
            <div className={profileImageContainer}>
                <div className={profileImageWrapper}>
                    <img src={dp} alt="Profile_Image" />
                </div>
                <FaCamera className={profileCameraIcon} />
            </div>

            <form className={form}>
                <input
                    type='text'
                    placeholder='Enter your name'
                    className={input}
                />
                <input
                    type='text'
                    readOnly
                    className={`${input} ${inputDisabled}`}
                    value={userData?.userName}
                />
                <input
                    type='email'
                    readOnly
                    className={`${input} ${inputDisabled}`}
                    value={userData?.email}
                />
                <button className={button}>Save Profile</button>
            </form>
        </div>
    )
}

export default Profile
