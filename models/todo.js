const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 20,
    },
    status: {
      type: String,
      enum: ['To-Do', 'In-Progress', 'Done'],
      default: 'To-Do',
    },
  },
  { timestamps: true }
);

const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;
