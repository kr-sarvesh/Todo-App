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

const todoService = {
  createTodo,
  getAllTodos,
}
export default todoService
