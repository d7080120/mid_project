
const express = require("express")
const router = express.Router()

const postConroller=require("../controllers/postController")

router.post("/", postConroller.createPost)
router.get("/byParams", postConroller.createPost)
router.get("/",postConroller.getAllPosts)
router.get("/:id",postConroller.getPostById)
router.put("/",postConroller.updatePost)
router.delete("/",postConroller.deletePost)

module.exports = router