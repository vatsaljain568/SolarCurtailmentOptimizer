const jwt = require('jsonwebtoken')
const User = require('../models/operator.model')
const bcrypt = require('bcrypt')


const loginUser = async (req,res)=>{
    let {email,password} = req.body;

    const user = await User.findOne({email: email});

    if(!user){
        return res.status(401).json({
            message: 'Enter valid email!'
        })
    }


    const isPassword = await bcrypt.compare(password, user.password );

    if(!isPassword){
        return res.status(401).json({
            message: 'Enter valid password!'
        })
    }

    const token = jwt.sign({
    _id: user._id
}, process.env.JWT_SECRET)

res.cookie('token', token);

return res.status(200).json({
    message: 'The user can login',
    token: token,  // ✅ Add this
    name: user.name,
    email: user.email,
    _id: user._id
})
}

const logoutUser = (req,res)=>{
    res.clearCookie('token');

    return res.status(200).json({
        message: 'the user have successfully logged out'
    })
}

const verifyUser = (req,res)=>{
    const user = req.user;
    console.log(3);
    
    if(!user){
        return res.status(400).json({
            message: 'No user found'
        })
    }

    return res.status(200).json({
        message: 'Valid user and can login',
        name: user.name,
        email: user.email,
        _id: user._id
    })
}


module.exports = {
    loginUser,
    logoutUser,
    verifyUser
}