const express = require('express')
const router = express.Router()
router.get('/', () => {
  res.send('Hello aplha  World')
})

module.exports = router
