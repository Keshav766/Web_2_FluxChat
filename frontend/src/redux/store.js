import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js"
import messageSlice from "./messageSlice.js"

export const store = configureStore({
    reducer: {
        user: userSlice,
        message: messageSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false // created this (what ever this is to remove that pesky error)
        })
})