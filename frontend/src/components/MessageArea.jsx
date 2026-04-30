import { useEffect, useRef, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { BsEmojiGrin } from "react-icons/bs";
import { FaImages } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';
import dp from "../assets/empty_dp.png"
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice.js';
import { messagearea } from '../styles/home.js';
import SenderMessage from './SenderMessage.jsx';
import ReceiverMessage from './ReceiverMessage.jsx';
import axios from 'axios';
import { serverURL } from '../main.jsx';
import { setMessages } from '../redux/messageSlice';

function MessageArea() {
  const { selectedUser, userData, socket } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [showPicker, setShowPicker] = useState(false)
  const [input, setInput] = useState("")
  const [frontendImage, setFrontendImage] = useState("")
  const [backendImage, setBackendImage] = useState("")
  const image = useRef()
  const { messages } = useSelector(state => state.message)

  const handleImage = (e) => {
    const file = e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }

  const handleSendingMessage = async (e) => {
    e.preventDefault()

    if (input.length == 0 && backendImage == null) return

    try {
      const formData = new FormData()

      formData.append("message", input)
      if (backendImage) {
        formData.append("image", backendImage)
      }

      const result = await axios.post(
        `${serverURL}/api/message/send/${selectedUser._id}`,
        formData,
        { withCredentials: true })
      dispatch(setMessages([...messages, result.data]))
      setInput("")
      setFrontendImage("")
      setBackendImage(null)

    } catch (error) {
      console.log(`handleSendingMessage Error: ${error.message}`)
    }
  }

  const onEmojiSelect = (emojiData) => {
    setInput(prev => prev + emojiData.emoji)
    setShowPicker(false)
  }

  useEffect(() => {
    socket.on("newMessage", (mess) => {
      dispatch(setMessages([...messages, mess]))
    })
    return () => socket.off("newMessage")
  }, [messages, setMessages])

  return (
    <div className={`lg:w-[70%] ${selectedUser ? "flex" : "hidden"} lg:flex w-full h-full bg-slate-200 border-l-3 border-gray-300 relative`}>

      {selectedUser &&
        <div className='w-full h-screen flex flex-col'>
          <div className={messagearea.header}>
            <div>
              <FaArrowLeft
                className='w-8 h-8 text-white cursor-pointer'
                onClick={() => dispatch(setSelectedUser(null))}
              />
            </div>
            <div className={messagearea.headerImageWrapper}>
              <img
                src={selectedUser?.image || dp}
                className="h-full object-cover"
                onClick={() => navigate("/profile")}
              />
            </div>
            <h1
              className={messagearea.headerName}>
              {selectedUser?.userName || "User"}
            </h1>
          </div>
          <div className='w-full h-full flex flex-col pt-6 px-5 pb-30 overflow-auto gap-4'>
            {showPicker && <div className=' absolute bottom-28 left-5 z-50'>
              <EmojiPicker
                width={250}
                height={350}
                className='shadow-gray-400 shadow-lg'
                onEmojiClick={onEmojiSelect}
              />
            </div>
            }

            {messages && messages?.map((mess) =>
              mess.sender === userData._id ? (
                <SenderMessage
                  key={mess._id}
                  image={mess.image}
                  message={mess.message}
                />
              ) : (
                <ReceiverMessage
                  key={mess._id}
                  image={mess.image}
                  message={mess.message}
                />
              )
            )}

          </div>
        </div>
      }

      {!selectedUser &&
        <div className={messagearea.base}>
          <h1
            className='text-gray-600 font-bold text-[50px]'>
            Welcome to <span
              className='text-[#20c7ff]'>FluxChat</span>
          </h1>
          <span
            className='text-gray-600 font-semibold text-[25px]'>
            <span
              className='text-[#20c7ff]'>Flowing
            </span> chat app !</span>
        </div>
      }
      {selectedUser && <div className=' w-full h-25 lg:w-[70%] fixed bottom-5 flex items-center justify-center'>
        {frontendImage && <img
          src={frontendImage}
          alt="image"
          className='absolute w-20 bottom-25 right-[20%] rounded-lg shadow-gray-500 shadow-lg'
        />
        }
        <form
          className='bg-[#34c2f1] w-[95%] lg:w-[70%] h-15 rounded-full shadow-gray-400 shadow-lg flex justify-center items-center p-4 gap-5 relative'
          onSubmit={handleSendingMessage}
        >
          <div
            className='cursor-pointer'
            onClick={() => setShowPicker(prev => !prev)}>
            <BsEmojiGrin
              className='w-6.5 h-6.5 text-white'
            />
          </div>
          <input
            type="file"
            accept='image/*'
            hidden
            ref={image}
            onChange={handleImage}
          />
          <input
            type="text"
            placeholder='Message'
            value={input}
            className='w-full h-full px-4 outline-none border-0 text-[19px] text-white placeholder-white'
            onChange={(e) => setInput(e.target.value)}
          />
          <div
            className='cursor-pointer'
            onClick={() => image.current.click()}
          >
            <FaImages
              className='w-6.5 h-6.5 text-white'
            />
          </div>
          {(input.length > 0 || backendImage) && <button
            type='submit'
            className='cursor-pointer'
          >
            <IoSend
              className='w-6.5 h-6.5 text-white'
            />
          </button>}

        </form>
      </div>}


    </div>
  )
}

export default MessageArea
