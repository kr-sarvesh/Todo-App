// Importing Express to define routes
const express = require('express')
const router = express.Router()

// Importing Controllers from todoController
const { home, aboutus, todoCreate } = require('../controllers/todoControllers')

//middleware
router.get('/', home)

router.get('/aboutus', aboutus)
router.post('/todo', todoCreate)
module.exports = router
