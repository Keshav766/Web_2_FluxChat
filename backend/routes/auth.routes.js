import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signup)
    .post("/login", login)
    .get("/logout", logout)

export default authRouter;