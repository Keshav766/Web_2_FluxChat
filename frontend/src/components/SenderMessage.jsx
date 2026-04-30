import { useEffect, useRef } from 'react'
import dp from "../assets/empty_dp.png"
import { useSelector } from 'react-redux'

function SenderMessage({ image, message }) {
    const { userData } = useSelector(state => state.user)
    const scroll = useRef()
    useEffect(() => {
        scroll?.current.scrollIntoView({ behavior: "smooth" })
    }, [])

    const handleImageScroll = () => {
        scroll?.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className='flex items-start gap-1'>
            <div
                className='w-fit px-5 py-2.5 max-w-125 bg-[#34c2f1] shadow-gray-400 shadow-lg text-white rounded-tr-none rounded-2xl relative right-0 ml-auto flex flex-col gap-2'
                ref={scroll}
            >
                {image && <img
                    src={image}
                    alt="image"
                    className='w-37.5 rounded-lg'
                    onLoad={handleImageScroll}
                />}
                {message && <span >{message}</span>}
            </div>
            <div className="w-7 h-7 bg-white rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 shadow-lg"
            >
                <img
                    src={userData.image || dp}
                    className="h-full object-cover"
                />
            </div>
        </div>
    )
}

export default SenderMessage
