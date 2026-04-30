import { useEffect, useRef } from 'react'

function SenderMessage({ image, message }) {
    const scroll = useRef()
    useEffect(() => {
        scroll?.current.scrollIntoView({ behavior: "smooth" })
    }, [])
    return (
        <div
            className='w-fit px-5 py-2.5 max-w-125 bg-[#34c2f1] shadow-gray-400 shadow-lg text-white rounded-tr-none rounded-2xl relative right-0 ml-auto flex flex-col gap-2'
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

export default SenderMessage
