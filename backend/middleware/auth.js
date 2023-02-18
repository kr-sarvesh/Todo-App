// Description: Middleware to check if the user is Authenticated
const jwt = require('jsonwebtoken')

//Model is optional

// Hunting for the Token
exports.protect = (req, res, next) => {
  //looking for the token in the header, cookie or body
  const token =
    req.cookies.token ||
    req.body.token ||
    req.header('Authorization').replace('Bearer ', '')
  if (!token) {
    return res
      .status(403)
      .json({ msg: 'No authentication token, authorization denied.' })
  }
  // Verifying the token
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decode)
  } catch (error) {
    return res.status(401).send('Invalid Token')
  }
  return next()
}
