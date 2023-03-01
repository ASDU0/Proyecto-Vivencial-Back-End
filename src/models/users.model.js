const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    birthday: {
      type: String
    },
    rol: {
      type: String,
      enum: ["anfitrion", "husped", "admin"]
    }
  },
  {
    timestamps: true,
    versionKey: false,
  })

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;