// Importing Express to define routes
const express = require('express')
const router = express.Router()

//Importing express-validator
const { body } = require('express-validator')

//importing controllers from authController
const { createuser } = require('../controllers/userController')
//create a User using Post
router.post(
  '/createuser',
  [
    body('name', 'Please enter a valid username').not().isEmpty(),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  createuser
)

module.exports = router
