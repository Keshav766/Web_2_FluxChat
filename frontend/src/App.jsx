import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import useGetCurrentUser from "./customHooks/getCurrentUser.jsx";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import useGetOtherUsers from "./customHooks/getOtherUsers";
import { io } from "socket.io-client";
import { serverURL } from "./main.jsx";
import { setOnlineUsers, setSocket } from "./redux/userSlice.js";

function App() {
  useGetCurrentUser();
  useGetOtherUsers();
  const { userData, socket, onlineUsers } = useSelector(state => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    if (userData) {
      const socketio = io(`${serverURL}`, {
        query: {
          userId: userData?._id
        }
      })
      dispatch(setSocket(socketio))

      socketio.on("getOnlineUsers", (users) => {
        dispatch(setOnlineUsers(users))
      })

      return () => socketio.close()
    } else {
      if (socket) {
        socket.close()
        dispatch(setSocket(null))
      }
    }
  }, [userData])

  return (
    <Routes>
      <Route
        path="/signup"
        element={
          !userData ?
            <Signup /> :
            <Navigate to="/profile" />
        }
      />
      <Route
        path="/login"
        element={
          !userData ?
            <Login /> :
            <Navigate to="/" />
        }
      />
      <Route
        path="/"
        element={
          userData ?
            <Home /> :
            <Navigate to="/login"
            />}
      />
      <Route
        path="/profile"
        element={
          userData ?
            <Profile /> :
            <Navigate to="/signup"
            />}
      />
    </Routes>
  )
}

export default App;