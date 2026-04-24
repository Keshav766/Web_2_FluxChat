import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import Authenticated from "../middlewares/Authenticated.js";

const authRouter = Router();

authRouter.post("/signup", signup)
    .post("/login", login)
    .get("/logout", Authenticated, logout)

export default authRouter;