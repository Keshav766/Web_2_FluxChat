import React, { useState } from 'react'
import { sidebar } from '../styles/home'
import { useSelector } from 'react-redux'
import dp from "../assets/empty_dp.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


function SideBar() {
    const { userData, otherUsers } = useSelector(state => state.user)
    const [search, setSearch] = useState(false);

    return (
        <div className={sidebar.container}>
            <div className={sidebar.header}>
                <h1 className={sidebar.title}>FluxChat</h1>
                <div className={sidebar.userRow}>
                    <h1 className={sidebar.userName}>Yo, {userData.name}</h1>
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
                        <div className={sidebar.profileImageWrapper}>
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
