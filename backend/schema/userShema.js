import mongoose from 'mongoose'
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
  },
  tasks: [String],
})
const TodoModel = mongoose.model('Todo', TodoSchema)
export default TodoModel
