const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateTodo,
} = require("../controllers/ToDoController");

const router = Router();
router.get("/", getToDo);
router.post("/save", saveToDo);
router.patch("/:id", updateTodo);

module.exports = router;
