import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import useGetCurrentUser from "./customHooks/getCurrentUser.jsx";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import useGetOtherUsers from "./customHooks/getOtherUsers";
import { io } from "socket.io-client";
import { serverURL } from "./main.jsx";

function App() {
  const { userData } = useSelector(state => state.user);
  useGetCurrentUser();
  useGetOtherUsers();

  useEffect(() => {
    const socket = io(`${serverURL}`, {
      query: {
        userId: userData?._id
      }
    })

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