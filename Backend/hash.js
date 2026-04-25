const bcrypt = require('bcrypt')
const User = require('./models/operator.model')
const jwt = require('jsonwebtoken')


function main(){
    bcrypt.genSalt(10, (err,salt)=>{
        password = 'password#123';
        bcrypt.hash(password, salt, async(err,hash)=>{
            let createdUser = await User.create({
                password: hash ,
                name: 'Dev Shukla',
                email: 'devshukla@gmail.com'
            })

            console.log(hash);
            
            
            
        })
    })
}

module.exports = {main}
