const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
    const { title,tags} = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }
    const todo = await Todo.create({title,tags})
    if (todo) { 
        return res.status(201).json({ message: 'New todo created',
            todo:todo
         })
    } else {
        return res.status(400).json({ message: 'Invalid todo ' })
    }
}

const getAllTodos = async (req,res) => {
    const todos=await Todo.find().lean()
    if(!todos?.length){
        return res.status(400).json({message: 'No todos found'})
    }
    res.json(todos)
}

const getTodosByTitle = async (req,res) => {
    const {title}=req.params
    const todos=await Todo.find((todo)=>{return todo.title===title}).lean()
    if(!todos?.length){
        return res.status(400).json({message: 'No todos found'})
    }
    res.json(todos)
}

const getTodosByTags = async (req,res) => {
    const {tags}=req.params
    const todos=await Todo.find((todo)=>{return todo.tags===tags}).lean()
    if(!todos?.length){
        return res.status(400).json({message: 'No todos found'})
    }
    res.json(todos)
}

const getTodoById = async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id).lean()
    if (!todo) {
    return res.status(400).json({ message: 'No todo found' })
    }
    res.json(todo)
    }

const updateTodo=async (req,res)=>{
    const {id,title,tags}=req.body
    if(!id||!title){
        return res.status(400).json({ message: "id and title are required" })
    }
    const todo= await Todo.findById(id).exec()
    if(!todo){
        return res.status(400).json({ message: 'todo not found' })
    }
    todo.title=title
    todo.tags=tags

    const updatedTodo=await todo.save()

    res.json(`${updatedTodo.title} updated`)
}

const deleteTodo=async (req,res)=>{
    const {id}=req.body

    if(!id){
        return res.status(400).json({ message: "id is required" })
    }
    const todo = await Todo.findById(id).exec()
    if(!todo){
        return res.status(400).json({ message: 'Todo not found' })
    }

    await todo.deleteOne()

    res.send(`todo ${todo.title} id ${todo.id} deleted`)
}
module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    getTodosByTitle,
    getTodosByTags
}
    