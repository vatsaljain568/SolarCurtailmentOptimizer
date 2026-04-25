const jwt = require('jsonwebtoken')
const User = require('../models/operator.model')

const verifyJWT = async (req,res,next)=>{
    try{
        const token = req.cookies.token
        console.log(1);
        if(!token){
            return res.status(400).json({
                message: "Please login first !"
            })
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({_id:decodedToken._id}).select("-password")


        req.user = user;
        next();

    }catch(error){
        console.log(2);
        return res.status(400).json({
            message: 'Invalid Access Token_'
        })
    }
}

module.exports = { verifyJWT }
