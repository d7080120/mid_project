
const express = require("express")
const router = express.Router()

const userConroller=require("../controllers/userController")

router.post("/", userConroller.createUser)
router.get("/",userConroller.getAllUsers)
router.get("/:id",userConroller.getUserById)
router.get("/:name",userConroller.getUsersByName)
router.get("/:username",userConroller.getUsersByUsername)
router.get("/:address",userConroller.getUsersByAddress)
router.get("/:email",userConroller.getUsersByEmail)
router.get("/:phone",userConroller.getUsersByPhone)
router.put("/",userConroller.updateUser)
router.delete("/",userConroller.deleteUser)

module.exports = router