import axios from 'axios'
const API_URL = 'https://todo-app-production-5693.up.railway.app'

//create new Todo

const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(
    `${API_URL}/api/todo/todoCreate/`,
    todoData,
    config
  )

  return response.data
}

//Get user Todos

const getAllTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${API_URL}/api/todo/todoGetAll`, config)
  return response.data
}

//Delete user Todo
const deleteTodoById = async (todoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(
    `${API_URL}/api/todo/todoDelete/${todoId}`,
    config
  )

  return response.data
}

//add user Todo
const addTaskbyId = async (id, task, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(
    `${API_URL}/api/todo/createTask/${id}`,
    { task },
    config
  )
  // console.log('response is', response)

  return response.data
}

//update user Task
const updateTaskById = async (id, newtask, key, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  // console.log('id is', id, newtask, key)

  const response = await axios.put(
    `${API_URL}/api/todo/editTodo/${id}/`,
    { key, newtask },

    config
  )
  // console.log('response is', response)
  return response.data
}

//delete user Task
const deleteTaskById = async (id, key, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  // console.log(`id is ${id} and key is ${key} and token is ${token}`)

  const data = { key: key }

  const response = await axios.delete(`${API_URL}/api/todo/deleteTask/${id}`, {
    headers: config.headers,
    data: data,
  })
  return response.data
}

const todoService = {
  createTodo,
  getAllTodos,
  deleteTodoById,
  addTaskbyId,
  updateTaskById,
  deleteTaskById,
}
export default todoService
