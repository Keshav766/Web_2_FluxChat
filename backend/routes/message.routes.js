import { Router } from "express";
import Authenticated from "../middlewares/Authenticated.js";
import { upload } from "../middlewares/multer.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js"

const messageRouter = Router();

messageRouter.post("/send/:receiver", Authenticated, upload.single("image"), sendMessage)
messageRouter.get("/get/:receiver", Authenticated, getMessages)

export default messageRouter