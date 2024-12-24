
const express = require("express")
const router = express.Router()

const photoConroller=require("../controllers/photoController")

router.post("/", photoConroller.createPhoto)
router.get("/",photoConroller.getAllPhotos)
router.get("/:_id",photoConroller.getPhotoById)
router.put("/",photoConroller.updatePhoto)
router.delete("/:_id",photoConroller.deletePhoto)

module.exports = router