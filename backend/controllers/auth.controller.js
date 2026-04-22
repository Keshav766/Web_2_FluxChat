import { GenerateToken } from "../configs/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userByUsername = await User.findOne({ userName });
        if (userByUsername) {
            return res.status(400).json({ message: "username already exists" })
        }

        const userByEmail = await User.findOne({ email });
        if (userByEmail) {
            return res.status(400).json({ message: "email already exists" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "password should be more than 6 characters" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await User.create({
            userName, email, password: hashedPassword
        })

        const token = GenerateToken(createdUser._id);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: false
        })

        return res.status(201).json({ createdUser });

    } catch (err) {
        return res.status(500).json({ message: `signup error ${err.message}` });
    }
}