
const express = require("express")
const router = express.Router()

const todoConroller=require("../controllers/todoController")

router.post("/", todoConroller.createTodo)
router.get("/",todoConroller.getAllTodos)
router.get("/:id",todoConroller.getTodoById)
router.put("/",todoConroller.updateTodo)
router.delete("/",todoConroller.deleteTodo)

module.exports = router