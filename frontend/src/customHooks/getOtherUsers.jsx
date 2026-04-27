import { serverURL } from "../main.jsx"
import { setOtherUsers } from "../redux/userSlice.js"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(
                    `${serverURL}/api/user/others`,
                    { withCredentials: true })
                dispatch(setOtherUsers(result.data));
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchUser();
    }, []);
}

export default useGetOtherUsers;