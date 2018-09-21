const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type:String, required: true },
  username: { type:String, required: true, unique: true },
  password: { type:String, required: true },
  follower: { type: Number, default: 0 },
  follow: { type: Number, default: 0 },
  img: { type: String, default: null }
})

module.exports = mongoose.model('User', userSchema)
