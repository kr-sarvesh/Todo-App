// Importing Express to define routes
const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/auth')
// //Importing express-validator
const { body } = require('express-validator')

//importing controllers from authController
const {
  register,
  loginuser,
  dashboard,
} = require('../controllers/userController')

//create a User using Post
router
  .route('/api/user/register', [
    body('firstname', 'Please enter a valid first name').not().isEmpty(),
    body('lastname', 'Please enter a valid last name').not().isEmpty(),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ])
  .post(register)

//login user using Post Request
router.route('/api/user/login').post(loginuser)

//Dashboard Route:
router.route('/api/dashboard').get(protect, dashboard)

module.exports = router
