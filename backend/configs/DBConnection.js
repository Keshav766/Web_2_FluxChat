import mongoose from "mongoose";

const ConnectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connection successful");
    } catch (err) {
        console.log("DB connection error");
    }
}

export default ConnectToDB;