const Post = require("../models/Post");

const createPost = async (req, res) => {
    const { title,body} = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }
    const post = await Post.create({title,body})
    const posts=await Post.find().lean()
    if (post) { 
        return res.status(201).json({ message: 'New post created',
            post:posts
         })
    } else {
        return res.status(400).json({ message: 'Invalid post ' })
    }
}

const getAllPosts = async (req,res) => {
    const posts=await Post.find().lean()
    if(!posts?.length){
        return res.status(400).json({message: 'No posts found'})
    }
    res.json(posts)
}


const getPostById = async (req, res) => {
    const {id} = req.params
    const post = await Post.findById(id).lean()
    if (!post) {
    return res.status(400).json({ message: 'No post found' })
    }
    res.json(post)
    }

const getPostByParams=async(req,res)=>{
    const {title,body}=req.body
    if(!title&&!body){
        return res.status(400).json({ message: 'title or body are required' })

    }
    const posts=await Post.find({title,body}).lean()
    if(!posts?.length){
        return res.status(400).json({message: 'No posts found'})
    }
    res.json(posts)
}

const updatePost=async (req,res)=>{
    const {id,title,body}=req.body
    if(!id||!title){
        return res.status(400).json({ message: "id and title are required" })
    }
    const post= await Post.findById(id).exec()
    if(!post){
        return res.status(400).json({ message: 'post not found' })
    }
    post.title=title
    post.body=body

    const updatedPost=await post.save()
    const posts=await Post.find().lean()

    res.json(posts)
}

const deletePost=async (req,res)=>{
    const {id}=req.body

    if(!id){
        return res.status(400).json({ message: "id is required" })
    }
    const post = await Post.findById(id).exec()
    if(!post){
        return res.status(400).json({ message: 'Post not found' })
    }

    await post.deleteOne()
    const posts=await Post.find().lean()
    if(!posts?.length){
        return res.status(400).json({message: 'No posts found'})
    }
    res.json(posts)
}
module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    getPostByParams
}
    