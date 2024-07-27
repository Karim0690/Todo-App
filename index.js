const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const todoRouter = require('./router/todo');

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/todos', todoRouter);

mongoose
  .connect('mongodb://localhost:27017/Todo')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log(err.message);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
