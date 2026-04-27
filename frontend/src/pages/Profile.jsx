import {
    button,
    container,
    input,
    profileImageContainer,
    profileImageWrapper,
    form,
    inputDisabled,
    profileCameraIconWrapper
} from '../styles/profile.js';
import React, { useRef, useState } from 'react';
import { serverURL } from '../main.jsx';
import axios from 'axios';
import dp from "../assets/empty_dp.png";
import { FaCamera } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../redux/userSlice.js';

function Profile() {
    const { userData } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState(userData.name || "");
    const [frontendImage, setFrontendImage] = useState(userData.image || dp);
    const [backendImage, setBackendImage] = useState(null);
    const image = useRef();
    const [saving, setSaving] = useState(false);

    const handleImage = (e) => {
        const file = e.target.files[0]
        setBackendImage(file)
        setFrontendImage(URL.createObjectURL(file))
    }

    const handleProfile = async (e) => {
        e.preventDefault()
        setSaving(true)
        try {
            const formData = new FormData()
            formData.append("name", name)
            if (backendImage) {
                formData.append("image", backendImage)
            }
            const result = await axios.put(
                `${serverURL}/api/user/profile`,
                formData,
                { withCredentials: true })
            setSaving(false)
            dispatch(setUserData(result.data))
        } catch (error) {
            console.log(error.message)
            setSaving(false)
        }
    }

    return (
        <div className={container}>
            <div className='fixed top-5 left-5'>
                <FaArrowLeft
                    className='w-8 h-8 text-gray-400 cursor-pointer'
                    onClick={() => navigate("/")}
                />
            </div>
            <div
                className={profileImageContainer}
                onClick={() => image.current.click()}
            >
                <div className={profileImageWrapper}>
                    <img src={frontendImage} alt="Profile_Image" />
                </div>
                <div className={profileCameraIconWrapper}>
                    <FaCamera className='text-gray-700 w-7 h-7' />
                </div>
            </div>

            <form
                className={form}
                onSubmit={handleProfile}
            >
                <input
                    type="file"
                    accept='image/*'
                    hidden
                    ref={image}
                    onChange={handleImage}
                />
                <input
                    type='text'
                    placeholder='Enter your name'
                    className={input}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                <button
                    className={button}
                    disabled={saving}
                >{saving ? "Saving..." : "Save Profile"}
                </button>
            </form>
        </div>
    )
}

export default Profile