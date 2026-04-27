import React, { useState } from 'react'
import { sidebar } from '../styles/home'
import { useDispatch, useSelector } from 'react-redux'
import dp from "../assets/empty_dp.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { serverURL } from '../main.jsx';
import axios from 'axios';
import { setUserData, setOtherUsers } from "../redux/userSlice";
import { useNavigate } from 'react-router-dom';


function SideBar() {
    const { userData, otherUsers } = useSelector(state => state.user)
    const [search, setSearch] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            const res = await axios.get(
                `${serverURL}/api/auth/logout`,
                { withCredentials: true }
            );
            if (res.status === 200) {
                dispatch(setUserData(null));
                dispatch(setOtherUsers(null));
                navigate("/login");
            } else {
                console.error("Logout failed:", res);
            }
        } catch (error) {
            console.error("Logout error:", error.response?.data || error.message);
        }
    }

    return (
        <div className={sidebar.container}>
            <div
                className={sidebar.logout}
                onClick={handleLogOut}
            >
                <BiLogOut className='w-6 h-6' />
            </div>
            <div className={sidebar.header}>
                <h1 className={sidebar.title}>FluxChat</h1>
                <div className={sidebar.userRow}>
                    <h1 className={sidebar.userName}>Yo, {userData?.name}</h1>
                    <div className={sidebar.profileImageWrapper}>
                        <img
                            src={userData.image || dp}
                            className={sidebar.profileImage}
                        />
                    </div>
                </div>
                <div className='w-full flex items-center gap-5'>
                    {!search && <div
                        className={sidebar.searchOffWrapper}
                        onClick={() => setSearch(true)}>
                        <IoSearchSharp className='w-6 h-6' />
                    </div>}

                    {search &&
                        <form className={sidebar.searchOnWrapper}>
                            <IoSearchSharp className='w-6 h-6' />
                            <input
                                type="text"
                                placeholder='search here...'
                                className='w-full h-full p-2.5 outline-0 border-0'
                            />
                            <IoCloseSharp
                                className='w-6 h-6 cursor-pointer'
                                onClick={() => setSearch(false)} />

                        </form>
                    }
                    {otherUsers?.map((user) => (
                        <div className={sidebar.profileImageWrapper}
                            key={user._id}
                        >
                            <img
                                src={user.image || dp}
                                className={sidebar.profileImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar
