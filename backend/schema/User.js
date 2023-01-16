const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//for generating random string
const crypto = require('crypto')
//creating a schema user
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [50, 'Name cannot be more than 40 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    validate: [validator.isEmail, 'Please Enter a valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  forgotPasswordToken: String,
  forgotPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
// encrypting password using bcrypt before save
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  // this used to access any of the fields in the schema
  this.password = await bcrypt.hash(this.password, 10)
})

// Validate the password with passed on user password
// isValidatedPassword is a method that we are creating which will return true or false
UserSchema.methods.isValidatedPassword = async function (usersendpassword) {
  return await bcrypt.compare(usersendpassword, this.password)
}

//create and return the jwt token
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  })
}
//generate the forgot password token(String)
UserSchema.methods.getForgotPasswordToken = function () {
  //generate a long and random string
  const forgotToken = crypto.randomBytes(20).toString('hex')
  // getting a hash - make sure to get a hash on backend
  this.forgotPasswordToken = crypto
    .createHash('sha256')
    .update(forgotToken)
    .digest('hex')
  // time of the token
  this.forgotPasswordExpire = Date.now() + 20 * 60 * 1000

  return forgotToken
}

module.exports = mongoose.model('User', UserSchema)
