import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todoService from './todoService'

const initialState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

//create new Todo
export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async (data, thunkAPI) => {
    console.log('data is', data)
    try {
      const token = thunkAPI.getState().auth.user.token
      return await todoService.createTodo(data, token)
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Get all user Todos
export const getAllTodos = createAsyncThunk(
  'todo/getAllTodos',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await todoService.getAllTodos(token)
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user Todo
export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await todoService.deleteTodoById(id, token)
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos.push(action.payload)
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAllTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = action.payload
        state.message = 'Todos fetched successfully'
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
  },
})

export const { reset } = todoSlice.actions
export default todoSlice.reducer
