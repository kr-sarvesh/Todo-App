import axios from 'axios'
const API_URL = '/api/todo'

//create new Todo

const createTodo = async (todoData, token) => {
  console.log('token is', token)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(`${API_URL}/todoCreate`, todoData, config)
  console.log('todocreate')
  return response.data
}

const todoService = {
  createTodo,
}
export default todoService
