
const express = require("express")
const router = express.Router()

const postConroller=require("../controllers/postController")

router.post("/", postConroller.createPost)
router.get("/byParams", postConroller.getPostByParams)
router.get("/",postConroller.getAllPosts)
router.get("/:_id",postConroller.getPostById)
router.put("/",postConroller.updatePost)
router.delete("/:_id",postConroller.deletePost)

module.exports = router