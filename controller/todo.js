const todoModel = require('../models/todo');

exports.createTodo = async (req, res) => {
  try {
    const todo = await todoModel.create(req.body);
    res.status(201).json({ message: 'success', data: todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    let { skip, limit } = req.query;
    const todos = await todoModel
      .find()
      .skip(skip * 1)
      .limit(limit * 1 || 10);
    res.status(200).json({ message: 'success', data: todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    res.status(200).json({ message: 'success', data: todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await todoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: 'success', data: todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUserTodos = async (req, res) => {
  try {
    const todos = await todoModel.find({ userId: req.params.id });
    res.status(200).json({ message: 'success', data: todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
