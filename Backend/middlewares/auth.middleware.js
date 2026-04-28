const jwt = require('jsonwebtoken')
const User = require('../models/operator.model')

const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                message: "Please login first !"
            })
        }

        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        res.set('Pragma', 'no-cache');

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decodedToken._id }).select("-password")

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Invalid Access Token'
        })
    }
}

module.exports = { verifyJWT }