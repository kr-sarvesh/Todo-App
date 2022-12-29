const TodoSchema = require('../schema/todoSchema')

exports.home = (req, res) => {
  res.send('Welcome to my home page')
}

exports.aboutus = (req, res) => {
  res.send('About us page')
}

exports.todoCreate = async (req, res) => {
  try {
    const { title, task } = req.body
    if (!title || !task) {
      throw new Error('Title and Task both are required')
    }
    const todoExists = await TodoSchema.findOne({ title })
    if (todoExists) {
      throw new Error('Todo already exists')
    }
    const todo = await TodoSchema.create({ title, task })

    res.status(201).json({ todo })
  } catch (error) {
    console.log(error)
  }
}

exports.todoGet = async (req, res) => {
  try {
    const todos = await TodoSchema.find()
    res.status(200).json({
      success: true,
      todos,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

//Search All Todos

exports.getAllAndFilteredTodos = async (req, res) => {
  try {
    //check if any querry is present
    const query = req.query
    if (Object.keys(query).length === 0) {
      //return all todos
      const todos = await TodoSchema.find()
      // send response
      return res.status(200).json({
        status: 'success',
        results: todos.length,
        todos,
      })
    }
    //if query exists, send filtered todos
    else {
      const todos = await TodoSchema.find(query)
      if (todos.length === 0) {
        return res.status(404).json({
          status: 'fail',
          message: 'No todo found with this query',
        })
      }
      return
      res.status(200).json({
        status: 'success',
        results: todos.length,
        todos,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: error.message,
    })
  }
}
