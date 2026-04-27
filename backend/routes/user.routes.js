import { Router } from "express";
import Authenticated from "../middlewares/Authenticated.js";
import { editProfile, getCurrentUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";

const userRouter = Router();

userRouter.get("/current", Authenticated, getCurrentUser)
userRouter.put("/profile", Authenticated, upload.single("image") ,editProfile)

export default userRouter