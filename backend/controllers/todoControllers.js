//  Importing Todo Schema for CRUD operations
const TodoSchema = require('../schema/TodoSchema')

exports.home = (req, res) => {
  res.send('home page')
}

exports.aboutus = (req, res) => {
  res.send('About us page')
}

//================ Create Todos ================//

exports.todoCreate = async (req, res) => {
  try {
    const { title, tasks, isImportant } = req.body
    if (!title && !tasks) {
      throw new Error('Title and Task both are required')
    }
    // Check if todo already Exists :
    const todoExists = await TodoSchema.findOne({ title })
    if (todoExists) {
      throw new Error('Todo already exists')
    }

    // Insert the Todo into Database
    const todo = await TodoSchema.create({ title, tasks })
    res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      todo,
    })
  } catch (error) {
    console.log(error)
  }
}

//================ Edit Todos title ===========//
exports.editTodo = async (req, res) => {
  try {
    const { todoId } = req.params
    const findTodo = await TodoSchema.findById(todoId)
    if (!findTodo) {
      throw new Error('Todo not found')
    } else {
      findTodo.title = req.body.title
      await findTodo.save()
      res.status(200).json({
        success: true,
        message: 'Todo updated successfully',
        findTodo,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

//=========== Get All Todos ===========//

exports.todoGetAll = async (req, res) => {
  try {
    const todos = await TodoSchema.find()
    res.status(200).json({
      success: true,
      message: 'Todos fetched successfully',
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

//=========== Add Tasks to Todos ===========//
exports.createTask = async (req, res) => {
  try {
    const { todoId } = req.params
    const todo = await TodoSchema.findById(todoId)
    if (!todo) {
      throw new Error('Todo not found')
      res.status(401).send('Todo not found')
    }
    const { task } = req.body
    todo.tasks.push(task)
    await todo.save()
    res.status(200).json({
      success: true,
      message: 'Task added successfully',
    })
  } catch (error) {
    console.log(error)
  }
}

//=========== Delete Todo ===========//

exports.todoDelete = async (req, res) => {
  try {
    const { todoId } = req.params

    if (!todoId) {
      throw new Error('Todo Id is required to fetch the todo')
    }
    if (typeof todoId !== 'string') {
      throw new Error('Todo Id should be of type string')
    }
    const todo = await TodoSchema.findByIdAndDelete(todoId)
    res.status(200).json({
      success: true,
      message: 'Todo deleted successfully',
      delete: todo,
    })
  } catch (error) {
    console.log('Error in deleting todo', error)
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    })
  }
}

//=========== Delete Task ===========//
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await TodoSchema.findByIdAndDelete(id)
    if (!todo) {
      throw new Error('Todo not found')
    }
    return res.status(200).json({
      success: true,
      message: 'Todo deleted successfully',
      todo,
    })
  } catch (error) {
    console.log(error)
  }
}

//=========== Search All Todos ===========//

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
