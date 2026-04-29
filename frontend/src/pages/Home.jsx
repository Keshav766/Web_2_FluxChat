import React from 'react'
import MessageArea from '../components/MessageArea.jsx'
import SideBar from '../components/SideBar.jsx'
import getMessages from '../customHooks/getMessages.jsx'

function Home() {
    getMessages()
    return (
        <div className='w-full h-screen flex overflow-hidden'>
            <SideBar />
            <MessageArea />
        </div>
    )
}

export default Home
