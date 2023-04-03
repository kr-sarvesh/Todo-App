import axios from 'axios'
const API_URL = '/api/todo'

//create new Todo

const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(`${API_URL}/todoCreate/`, todoData, config)

  return response.data
}

//Get user Todos

const getAllTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(`${API_URL}/todoGetAll`, config)
  return response.data
}

//Delete user Todo
const deleteTodoById = async (todoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL}/todoDelete/${todoId}`, config)

  return response.data
}

//add user Todo
const addTaskbyId = async (id, task, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log('data is', task, id)

  const response = await axios.post(
    `${API_URL}/createTask/${id}`,
    { task },
    config
  )
  console.log('response is', response)

  return response.data
}

//update user Todo
const updateTaskById = async (id, newtask, key, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log('id is', id, newtask, key)

  const response = await axios.put(
    `${API_URL}/editTodo/${id}/`,
    { key, newtask },

    config
  )
  console.log('response is', response)
  return response.data
}

const todoService = {
  createTodo,
  getAllTodos,
  deleteTodoById,
  addTaskbyId,
  updateTaskById,
}
export default todoService
