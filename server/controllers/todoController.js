const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
    const { title,tags} = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }
    const todo = await Todo.create({title,tags})
    const todos=await Todo.find().lean()

    if (todo) { 
        return res.status(201).json({ message: 'New todo created',
            todo:todos
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


const getTodoById = async (req, res) => {
    const {_id} = req.params
    const todo = await Todo.findById(_id).lean()
    if (!todo) {
    return res.status(400).json({ message: 'No todo found' })
    }
    res.json(todo)
    }

const updateTodo=async (req,res)=>{
    const {_id,title,tags,completed}=req.body
    if(!_id||!title){
        return res.status(400).json({ message: "_id and title are required" })
    }
    const todo= await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({ message: 'todo not found' })
    }
    todo.title=title
    todo.tags=tags
    todo.completed=completed

    const updatedTodo=await todo.save()
    const todos=await Todo.find().lean()

    res.json(todos)
}

const deleteTodo=async (req,res)=>{
    const {_id}=req.body

    if(!_id){
        return res.status(400).json({ message: "_id is required" })
    }
    const todo = await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({ message: 'Todo not found' })
    }

    await todo.deleteOne()
    const todos=await Todo.find().lean()
    if(!todos?.length){
        return res.status(400).json({message: 'No todos found'})
    }
    res.send(`todo ${todo.title} _id ${todo._id} deleted`).json(todos)

}
module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
}
    