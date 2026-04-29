import axios from "axios"
import { serverURL } from "../main.jsx"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../redux/messageSlice.js"


const getMessages = () => {
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(state => state.user)

    useEffect(() => {

        if (!selectedUser) return

        const fetchedMessages = async () => {
            try {
                const result = await axios.get(
                    `${serverURL}/api/message/get/${selectedUser._id}`,
                    { withCredentials: true })
                dispatch(setMessages(result.data))
            } catch (error) {
                console.log(`getMessages hook error: ${error.message}`)
            }
        }
        fetchedMessages()
    }, [selectedUser])
}

export default getMessages