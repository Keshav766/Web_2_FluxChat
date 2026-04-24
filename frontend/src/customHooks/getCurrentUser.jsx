import { serverURL } from "../main.jsx"
import { setUserData } from "../redux/userSlice.js"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useGetCurrentUser = () => {
    const dispatch = useDispatch();
    // const { userData } = useSelector(state => state.user);
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
    // }, [userData]);
    }, []);
}

export default useGetCurrentUser;