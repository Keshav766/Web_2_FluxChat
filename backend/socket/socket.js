import http from "http"
import express from "express"
import { Server } from "socket.io"

let app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

export const userSocketMap = {}

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId
    if (userId != undefined) {
        userSocketMap[userId] = socket.id
    }

    socket.on("disconnect", () => {
    })
})

export { app, server, io }