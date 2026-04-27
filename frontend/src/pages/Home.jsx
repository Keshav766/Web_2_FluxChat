import React from 'react'
import MessageArea from '../components/MessageArea'
import SideBar from '../components/SideBar'

function Home() {
    return (
        <div className='w-full h-screen flex'>
            <SideBar />
            <MessageArea />
        </div>
    )
}

export default Home
