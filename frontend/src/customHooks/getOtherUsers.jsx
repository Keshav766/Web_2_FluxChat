import { serverURL } from "../main.jsx"
import { setOtherUsers } from "../redux/userSlice.js"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.user)

    useEffect(() => {
        if (!userData?._id) return;

        const fetchUsers = async () => {
            try {
                const result = await axios.get(
                    `${serverURL}/api/user/others`,
                    { withCredentials: true })
                dispatch(setOtherUsers(result.data));
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchUsers();
    }, [userData]);
}

export default useGetOtherUsers;