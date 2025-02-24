const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true
      },
      password: String,
    
      email: {
        type: String,
        unique: true,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
      }

    },
  ); 

  const User = model("User", userSchema);

  module.exports = User;