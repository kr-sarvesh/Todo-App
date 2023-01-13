//Importing user Schema
const User = require('../schema/User')
// Importing express-validator
const { validationResult } = require('express-validator')
// Importing Bcrypt
const bcrypt = require('bcrypt')
//Importing JWT
const jwt = require('jsonwebtoken')

exports.createuser = async (req, res) => {
  // If there are errors,return Bad Request and the Errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  // See if user with this email already exists
  try {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User with email already exists' }] })
    }
    // ******* Encrypting the password using bcrypt *******
    // Generating salt
    const salt = await bcrypt.genSalt(10)
    // Hashing the password
    const secPass = await bcrypt.hash(req.body.password, salt)

    // Create a New User
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    res.status(200).json({ message: 'User created successfully', user })
  } catch (error) {
    // catch errors
    res.status(500).send('Internal Server Error')
  }
}
