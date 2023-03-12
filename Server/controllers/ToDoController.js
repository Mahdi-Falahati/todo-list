const ToDoModel = require("../models/ToDoModel")

module.exports.getToDo = async(req,res)=>{
    const todo = await ToDoModel.find();
    res.send(toDo)
}