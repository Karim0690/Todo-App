const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const todoRouter = require('./router/todo');

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/todos', todoRouter);
app.use('*', (req,res)=>{
  res.status(404).json({message:`This Route ${req.originalUrl} Not Found`})
});

const atlasUri = 'mongodb+srv://alkar33m:ybEWh4aubxkOAKFs@cluster0.nhqxsto.mongodb.net/Todo'
mongoose
  .connect(atlasUri)
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
