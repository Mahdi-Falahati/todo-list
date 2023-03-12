const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateTodo,
  deleteTodo,
} = require("../controllers/ToDoController");

const router = Router();
router.get("/", getToDo);
router.post("/save", saveToDo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
