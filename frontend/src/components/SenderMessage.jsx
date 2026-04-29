import React from 'react'
import dp from "../assets/empty_dp.png"

function SenderMessage() {
    return (
        <div className='w-fit px-5 py-2.5 max-w-125 bg-[#34c2f1] shadow-gray-400 shadow-lg text-white rounded-tr-none rounded-2xl relative right-0 ml-auto flex flex-col gap-2'>
            <img
                src={dp}
                alt="image"
                className='w-37.5 rounded-lg'
            />
            <span>Hii</span>
        </div>
    )
}

export default SenderMessage
