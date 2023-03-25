// Importing Express to define routes
const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/auth')

// Importing Controllers from TodoController
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
/**
 * @route   GET /
 */
router.route('/').get(home)
/**
 * @route   GET api/aboutus
 */
router.route('/api/aboutus').get(aboutus)
/**
 * @route   POST api/todoCreate
 */
router.route('/api/todo/todoCreate/').post(protect, todoCreate)
/**
 * @route   POST api/createTask/:id
 */
router.route('/api/todo/createTask/:id').post(protect, createTask)
// router.route('/todoGet/:id').get(todoGet)
/**
 * @route   GET api/todoGetAll/
 */
router.route('/api/todo/todoGetAll').get(protect, todoGetAll)

/**
 * @route   PUT api/editTodo/:id
 */
router.route('/api/todo/editTodo/:id').put(protect, editTodo)
router.route('/api/todo/todoDelete/:id').delete(todoDelete)
router.route('/api/todo/deleteTask/:id').delete(deleteTask)

module.exports = router
