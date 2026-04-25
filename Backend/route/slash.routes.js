const express = require('express');
const { loginUser, verifyUser, logoutUser } = require('../controllers/authController');
const { verifyJWT } = require('../middlewares/auth.middleware');
const router = express.Router();

router.route('/').get((req,res)=>{
    res.send('hello');
})


router.route('/auth/verify').get(verifyJWT, verifyUser);

router.route('/auth/login').post(loginUser)
router.route('/auth/logout').post(verifyJWT,logoutUser)


module.exports = router;