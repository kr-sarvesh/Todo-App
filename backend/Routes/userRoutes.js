const express = require('express')
const { home, aboutus, todoCreate } = require('../controllers/todoControllers')
const router = express.Router()
router.get('/', home)
router.get('/aboutus', aboutus)
router.post('/todo', todoCreate)
module.exports = router
