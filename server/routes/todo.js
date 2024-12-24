
const express = require("express")
const router = express.Router()

const todoConroller=require("../controllers/todoController")

router.post("/", todoConroller.createTodo)
router.get("/",todoConroller.getAllTodos)
router.get("/:_id",todoConroller.getTodoById)
router.put("/",todoConroller.updateTodo)
router.delete("/:_id",todoConroller.deleteTodo)

module.exports = router