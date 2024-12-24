const User = require("../models/User");

const createUser = async (req, res) => {
    const { username, name, email, address, phone } = req.body
    if (!username) {
        return res.status(400).json({ message: 'username is required' })
    }
    const user = await User.create({username, name, email, address, phone})
    const users=await User.find().lean()
    
    if (user) {
        return res.status(201).json({ message: 'New user created',
            user:users
         })
    } else {
        return res.status(400).json({ message: 'Invalid user ' })
    }
}

const getAllUsers = async (req,res) => {
    const users=await User.find().lean()
    if(!users?.length){
        return res.status(400).json({message: 'No users found'})
    }
    res.json(users)
}


const getUserById = async (req, res) => {
    const {_id} = req.params
    const user = await User.findById(_id).lean()
    if (!user) {
    return res.status(400).json({ message: 'No users found' })
    }
    res.json(user)
    }

const updateUser=async (req,res)=>{
    const {_id,username, name, email, address, phone}=req.body
    if(!_id||!username){
        return res.status(400).json({ message: "_id and username are required" })
    }
    const user= await User.findById(_id).exec()
    if(!user){
        return res.status(400).json({ message: 'user not found' })
    }
    user.username=username
    user.name=name
    user.address=address
    user.email=email
    user.phone=phone

    const updatedUser=await user.save()
    const users=await User.find().lean()

    res.json(users)
}

const deleteUser=async (req,res)=>{
    console.log("kkkkkkkkkkkkkkkkkkkk")

    const {_id}=req.params

    if(!_id){
        return res.status(400).json({ message: "id is required" })
    }
    const user = await User.findById(_id).exec()
    if(!user){
        return res.status(400).json({ message: 'User not found' })
    }

    await user.deleteOne()

    const users=await User.find().lean()
    if(!users?.length){
        return res.status(400).json({message: 'No users found'})
    }
    res.json(users)
}
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
    