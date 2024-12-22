
const express = require("express")
const router = express.Router()

const postConroller=require("../controllers/postController")

router.post("/", postConroller.createPost)
router.get("/",postConroller.getAllPosts)
router.get("/:id",postConroller.getPostById)
router.get("/:title",postConroller.getPostsByTitle)
router.get("/:body",postConroller.getPostsByBody)
router.put("/",postConroller.updatePost)
router.delete("/",postConroller.deletePost)

module.exports = router