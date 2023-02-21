// importing Mongoose
const mongoose = require('mongoose')
const TodoSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },

    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
      maxlength: [40, 'Title cannot be more than 40 characters'],
    },
    tasks: [String],
  },
  { timestamps: true }
)
module.exports = mongoose.model('Todo', TodoSchema)
