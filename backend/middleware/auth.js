// Description: Middleware to check if the user is Authenticated:
const jwt = require('jsonwebtoken')
const User = require('../schema/User')
// Hunting for the Token
exports.protect = async (req, res, next) => {
  //looking for the token in the header, cookie or body
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Verifying the token
    try {
      //Get the token from the header
      token = req.headers.authorization.split(' ')[1]
      //Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      //Get user from the token
      req.user = await User.findById(decoded.id).select('-password')
      console.log('user is' + req.user)
      next()
    } catch (error) {
      return res.status(401).send('Invalid Token')
    }
  }
  if (!token) {
    return res.status(401).send('Not Authorized to access this route')
  }
}
