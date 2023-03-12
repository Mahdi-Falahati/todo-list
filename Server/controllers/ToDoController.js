const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const todo = await ToDoModel.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports.saveToDo = async (req, res) => {
  try {
    const todo = await ToDoModel.create(req.body);
    res.status(201).json( todo );
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
