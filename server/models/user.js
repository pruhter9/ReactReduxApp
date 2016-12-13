/* eslint-disable */
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

mongoose.model('User', UserSchema);