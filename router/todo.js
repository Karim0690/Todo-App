const express = require('express');
const {
  getAllTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require('../controller/todo');

const router = express.Router();

router.route('/').get(getAllTodos).post(createTodo);

router.route('/:id').get(getTodo).delete(deleteTodo).patch(updateTodo);

module.exports = router;
