// Importing Express to define routes
const express = require('express')
const router = express.Router()

// //Importing express-validator
const { body } = require('express-validator')

//importing controllers from authController
const { register, loginuser } = require('../controllers/userController')

//create a User using Post
router.post(
  '/register',
  [
    body('firstname', 'Please enter a valid first name').not().isEmpty(),
    body('lastname', 'Please enter a valid last name').not().isEmpty(),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  register
)
//login user using Post request
router.post('/login', loginuser)

//dashboard Route
router.get('/dashboard', dashboard)

module.exports = router
