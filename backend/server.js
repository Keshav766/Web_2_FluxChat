import express, { urlencoded } from "express";
import dotenv from "dotenv";
import ConnectToDB from "./configs/DBConnection.js";
import User from "./models/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 9991;
const db_url = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.post("/", (req, res) => {
    const {name, userName} = req.body;
    User.create({name, userName});    
    res.send("so this is working");
})

app.listen(port, () => {
    ConnectToDB();
    console.log(`Server started at ${port}`)
})