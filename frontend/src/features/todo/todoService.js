import axios from 'axios'
const API_URL = '/api/todo'

//create new Todo

const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(`${API_URL}/todoCreate`, todoData, config)

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
const addTaskbyId = async (todoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(`${API_URL}/todoUpdate/${todoId}`, config)

  return response.data
}

const todoService = {
  createTodo,
  getAllTodos,
  deleteTodoById,
  addTaskbyId,
}
export default todoService
