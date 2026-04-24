import React from "react";
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import useGetCurrentUser from "./customHooks/getCurrentUser.jsx";

function App() {
  useGetCurrentUser();
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;