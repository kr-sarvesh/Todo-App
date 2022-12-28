import mongoose from 'mongoose'
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
  },
  tasks: {
    type: String,
    required: [true, 'Task is required'],
  },
})
module.exports = mongoose.model('Todo', TodoSchema)
