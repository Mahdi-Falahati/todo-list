const {Router} = require('express');
const { getToDo } = require('../controllers/ToDoController');

const router = Router();
router.get("/",getToDo)

module.exports = router;