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
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports.updateTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = req.body;

  try {
    const updatedTodo = await ToDoModel.findByIdAndUpdate(
      _id,
      { ...todo, _id },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports.deleteTodo = async (req, res) => {
  const { id: todoID } = req.params;
  try {
    const todo = await ToDoModel.findOneAndDelete({ _id: todoID });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
