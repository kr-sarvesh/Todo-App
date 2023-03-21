import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

//Get user from local storage

const user = JSON.parse(localStorage.getItem('user'))

// Initial state
const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

//Register user
export const register = createAsyncThunk(
  'auth/registerUser',
  async (user, thunkAPI) => {
    try {
      return await authService.registerUser(user)
    } catch (error) {}
  }
)

//Login user

//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

// Create slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})
export const { reset } = authSlice.actions
export default authSlice.reducer