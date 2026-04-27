// seed.js
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./models/operator.model')
require('dotenv').config()

async function main() {
    await mongoose.connect(process.env.MONGO_URI)
    
    // delete old user first
    await User.deleteMany({ email: 'devshukla@gmail.com' })
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash('password#123', salt)
    
    await User.create({
        name: 'Dev Shukla 2',
        email: 'devshukla@gmail.com',
        password: hash
    })
    
    console.log('User created successfully')
    mongoose.disconnect()
}

main()