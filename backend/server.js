import express from "express";
import dotenv from "dotenv";
import ConnectToDB from "./configs/DBConnection.js";
import User from "./models/user.model.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 9991;
const db_url = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(port, () => {
    ConnectToDB();
    console.log(`Server started at ${port}`)
})