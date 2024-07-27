const userModel = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { userName, password, firstName, lastName, dob } = req.body;
    const image = req.file ? req.file.path : null;
    const user = await userModel.create({
      userName,
      password,
      firstName,
      lastName,
      dob,
      image,
    });
    res.status(201).json({ message: 'success', data: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let { skip, limit } = req.query;
    const users = await userModel
      .find()
      .skip(skip * 1)
      .limit(limit * 1 || 10)
      .select('firstName');
    res.status(200).json({ message: 'success', data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: 'success', data: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
