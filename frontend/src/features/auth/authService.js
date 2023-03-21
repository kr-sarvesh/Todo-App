import axios from 'axios'

const API_URL = '/api/users/'

//Register user
const register = async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}register`, userData)
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
//logout user
const logout = async () => {
  localStorage.removeItem('user')
}
const authService = {
  register,
  logout,
}

export default authService