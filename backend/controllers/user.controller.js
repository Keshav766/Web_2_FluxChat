import uploadOnCloudinary from "../configs/cloudinary.js"
import { upload } from "../middlewares/multer.js"
import User from "../models/user.model.js"


export const getCurrentUser = async (req, res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId).select("-password")
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: `Internal Server Error ${error.message}` })
    }
}

export const editProfile = async (req, res) => {
    try {
        const { name } = req.body
        let image;
        if (req.file) {
            image = await uploadOnCloudinary(req.file.path)
        }
        const user = await User.findByIdAndUpdate(req.userId, {
            name,
            image
        })

        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({
            message: `current User error ${error.message}`
        })
    }
}

export const getOtherUsers = async (req, res) => {
    try {
        const users = await User.find({
            _id: { $ne: req.userId }
        }).select("-password")
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({
            message: `get other user error : ${error.message}`
        })
    }

}