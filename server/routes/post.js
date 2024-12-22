
const express = require("express")
const router = express.Router()

const postConroller=require("../controllers/postController")

router.post("/", postConroller.createPost)
<<<<<<< HEAD
router.get("/byParams", postConroller.getPostByParams)
=======
router.post("/byParams", postConroller.getPostByParams)
>>>>>>> 74e07d62a1b48f56a25fb9d169447a64d83ffdc4
router.get("/",postConroller.getAllPosts)
router.get("/:id",postConroller.getPostById)
router.put("/",postConroller.updatePost)
router.delete("/",postConroller.deletePost)

module.exports = router