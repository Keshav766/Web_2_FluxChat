import jwt from "jsonwebtoken";

export const GenerateToken = (userId) => {
    try{
        const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn:"1d"})
        return token;
    } catch(err) {
        console.log(err);
    }
}

