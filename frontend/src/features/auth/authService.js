import axios from 'axios'

const API_URL = 'todo-app-production-5693.up.railway.app'

//Register user
const register = async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/register`, userData)
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
}

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

//logout user
const logout = async () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout,
}

export default authService
