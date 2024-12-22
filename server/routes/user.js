
const express = require("express")
const router = express.Router()

const userConroller=require("../controllers/userController")

router.post("/", userConroller.createUser)
router.get("/",userConroller.getAllUsers)
router.get("/:id",userConroller.getUserById)
router.put("/",userConroller.updateUser)
router.delete("/",userConroller.deleteUser)

module.exports = router