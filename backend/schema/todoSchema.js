// importing Mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose
const TodoSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
    maxlength: [40, 'Title cannot be more than 40 characters'],
  },
  tasks: {
    type: [
      {
        type: String,
      },
    ],
  },
  isImportant: {
    type: Boolean,
    default: false,
  },
})
module.exports = mongoose.model('Todo', TodoSchema)
