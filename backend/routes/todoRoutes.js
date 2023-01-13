// Importing Express to define routes
const express = require('express')
const router = express.Router()

// Importing Controllers from todoController
const { home, aboutus, todoCreate } = require('../controllers/todoControllers')

//middlewares
router.route('/createTodo').post(createTodo)
router.route('/addTask/:id').put(addTask)
router.route('/getAllTodo').get(getAllTodo)
router.route('/getTodo/:id').get(getTodo)
router.route('editTodo/:id').put(editTodo)
router.route('/editTask/:id').put(editTask)
router.route('/deleteTodo/:id').delete(deleteTodo)
router.route('/deleteTask/:id').delete(deleteTask)
router.route('/deleteTasks/:id').delete(deleteTasks)
module.exports = router
