const mongoose = require('mongoose')

const operatorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },

    
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);



const User = mongoose.model("Operator", operatorSchema);



module.exports = User;