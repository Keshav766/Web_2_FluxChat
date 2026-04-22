import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    }

}, { timestamps: true })

const User = model("User", userSchema);

export default User;