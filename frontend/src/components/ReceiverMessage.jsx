import React from 'react'
import dp from "../assets/empty_dp.png"

function ReceiverMessage() {
    return (
        <div className='w-fit px-5 py-2.5 max-w-125 bg-[#1b7897] shadow-gray-400 shadow-lg text-white rounded-tl-none rounded-2xl relative left-0 flex flex-col gap-2'>
            <img
                src={dp}
                alt="image"
                className='w-37.5 rounded-lg'
            />
            <span>Hii</span>
        </div>
    )
}

export default ReceiverMessage
