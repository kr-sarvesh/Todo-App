// importing Mongoose
const mongoose = require('mongoose')
const TodoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
      maxlength: [40, 'Title cannot be more than 40 characters'],
    },
    tasks: [String],

    isImportant: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Todo', TodoSchema)
