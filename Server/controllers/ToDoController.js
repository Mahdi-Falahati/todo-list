const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Todo Successfully...");
    console.log(data);
    res.send(toDo);
  });
};
