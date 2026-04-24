import jwt from "jsonwebtoken"

const Authenticated = (req, res, next) => {
    const token = req.cookies?.token
    if (!token) {
        return res.status(400).json({ message: "Not logged in" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId
        next();
    } catch (err) {
        return res.status(401).json({ message: err.message })
    }
}

export default Authenticated
