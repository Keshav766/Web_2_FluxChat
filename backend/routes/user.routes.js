import { Router } from "express";
import Authenticated from "../middlewares/Authenticated.js";
import { getCurrentUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/current", Authenticated, getCurrentUser)


export default userRouter