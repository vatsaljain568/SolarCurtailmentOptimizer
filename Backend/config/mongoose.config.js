const mongoose = require('mongoose')

const connectDB = async ()=>{
    
    try{
        const connectionInstance= await mongoose.connect('mongodb://127.0.0.1:27017/solarCurtailmentOptimizer');
        console.log('MongoDB connected!!');
        
    }catch(err){
        console.log(err.message)
    }
}

module.exports=connectDB
