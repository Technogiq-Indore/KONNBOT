// models/user.js

const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
  name: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);

