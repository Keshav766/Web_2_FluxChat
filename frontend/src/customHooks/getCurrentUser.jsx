import { serverURL } from "../main.jsx"
import { setUserData } from "../redux/userSlice.js"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetCurrentUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`${serverURL}/api/user/current`, { withCredentials: true })
                dispatch(setUserData(result.data));
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchUser();
    }, []);
}

export default useGetCurrentUser;