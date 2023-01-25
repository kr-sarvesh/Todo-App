//Importing user Schema
const User = require('../schema/User')
// Importing express-validator
const { validationResult } = require('express-validator')
// Importing Bcryptjs
const bcrypt = require('bcryptjs')
//Importing JWT(Json web Token)
const jwt = require('jsonwebtoken')

// ************************** Create a User or Signup or Register **************************

exports.register = async (req, res) => {
  // If there are errors,return Bad Request and the Errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  // See if user with this email already exists
  try {
    const { firstname, lastname, email, password } = req.body
    // checking if user already exists
    if (!(email && password && firstname && lastname)) {
      res.status(400).send('All fields are required')
    }
    const existingUser = await User.findOne({ email })
    //if existingUser is true, then user already exists
    if (existingUser) {
      res.status(401).send('User already exists')
    }
    // ************* Encrypting the password using bcrypt *************
    // Hashing the password:
    const myEncPassword = await bcrypt.hash(password, 10)
    //user creation)

    const user = await User.create({
      firstname,
      lastname,
      email: email,
      password: myEncPassword,
    })
    console.log('hello')
    console.log(user.firstname)
    //token creation
    const token = jwt.sign(
      //payload
      { user_id: user._id, email },
      //secret key
      process.env.JWT_SECRET,
      //token expiry
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    )
    // token update in user
    user.token = token
    // handling the password situation
    user.password = undefined
    res.status(201).send({ message: 'user created', user })
  } catch (error) {
    // catch errors
    res.status(500).send('Error in user registration')
  }
}

// ************************** Create a Login ***********************************************

exports.loginuser = async (req, res) => {
  //wrapping with try catch, otherwise we have to go with promises
  try {
    // we are using destructuring to get email and password from req.body
    const { email, password } = req.body
    // if email and password is not entered
    if (!(email && password)) {
      res.status(400).send('Enter all the fields')
    }
    //User checking in database
    const user = await User.findOne({ email })
    if (!user) {
      res.status(400).send('You are not registered in our application')
    }

    // ************ Password Checking *************

    if (user && (await bcrypt.compare(password, user.password))) {
      // if password is correct, generate a token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.JWT_SECRET,
        //token expiry
        {
          expiresIn: process.env.JWT_EXPIRY,
        }
      )
      // Adding Token to User
      user.token = token
      //don't send password to frontend
      user.password = undefined
      //sending response
      // res.status(200).json({ message: 'Login Successful', user })

      // ** if you want to use Cookies  **

      const options = {
        //expires in 3 day
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        //cookie can be used by backend servers only
        httpOnly: true,
      }

      //In middleware we are expecting to recieve as a token, value as token and cookieoptions
      res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user,
      })
    }
    res.status(400).send('email or password is incorrect')
  } catch (error) {
    console.log(error)
    // res.status(401).send('Error in Login Route')
  }
}

// ************* Dashboard Login *************

exports.dashboard = async (req, res) => {
  res.status(200).send('Welcome to Dashboard')
}
