// Importing Express to define routes
const express = require('express')
const router = express.Router()

// Importing Controllers from todoController
const {
  home,
  aboutus,
  deleteTask,
  todoDelete,
  todoCreate,
  editTodo,
  todoGetAll,
  createTask,
} = require('../controllers/todoControllers')

//middlewares
router.route('/').get(home)
router.route('/api/aboutus').get(aboutus)
router.route('/api/todoCreate').post(todoCreate)
router.route('/api/createTask/:id').put(createTask)
// router.route('/todoGet/:id').get(todoGet)
router.route('/api/todoGetAll/:id').get(todoGetAll)
router.route('/api/editTodo/:id').put(editTodo)
router.route('/api/todoDelete/:id').delete(todoDelete)
router.route('/api/deleteTask/:id').delete(deleteTask)
// router.route('/deleteTasks/:id').delete(deleteTasks)

module.exports = router
