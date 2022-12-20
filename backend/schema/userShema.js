import mongoose from 'mongoose'
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [String],
})
const TodoModel = mongoose.model('Todo', TodoSchema)
export default TodoModel
