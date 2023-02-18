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
router.route('/api/todoCreate/').post(protect, todoCreate)
/**
 * @route   POST api/createTask/:id
 */
router.route('/api/createTask/:id').post(createTask)
// router.route('/todoGet/:id').get(todoGet)
/**
 * @route   GET api/todoGetAll/:id
 */
router.route('/api/todoGetAll/:id').get(todoGetAll)

/**
 * @route   PUT api/editTodo/:id
 */
router.route('/api/editTodo/:id').put(editTodo)
router.route('/api/todoDelete/:id').delete(todoDelete)
router.route('/api/deleteTask/:id').delete(deleteTask)

module.exports = router
