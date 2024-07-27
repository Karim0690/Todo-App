const express = require('express');
const multer = require('multer');
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} = require('../controller/user');
const { getAllUserTodos } = require('../controller/todo');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.route('/').get(getAllUsers).post(upload.single('image'), createUser);

router.route('/:id').delete(deleteUser).patch(updateUser);
router.get('/:id/todos', getAllUserTodos);

module.exports = router;
