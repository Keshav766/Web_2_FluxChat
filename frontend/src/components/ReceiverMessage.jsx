import { useEffect, useRef } from 'react'

function ReceiverMessage({ image, message }) {
    const scroll = useRef()
    useEffect(() => {
        scroll?.current.scrollIntoView({ behavior: "smooth" })
    }, [])
    return (
        <div
            className='w-fit px-5 py-2.5 max-w-125 bg-[#1b7897] shadow-gray-400 shadow-lg text-white rounded-tl-none rounded-2xl relative left-0 flex flex-col gap-2'
            ref={scroll}
        >
            {image && <img
                src={image}
                alt="image"
                className='w-37.5 rounded-lg'
            />}
            {message && <span >{message}</span>}

        </div>
    )
}

export default ReceiverMessage
