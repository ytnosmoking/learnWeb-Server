const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  sex: String,
  star: Number,
  money: Number
})

exports.User = mongoose.model('user', UserSchema)