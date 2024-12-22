
const express = require("express")
const router = express.Router()

const photoConroller=require("../controllers/photoController")

router.photo("/", photoConroller.createPhoto)
router.get("/",photoConroller.getAllPhotos)
router.get("/:id",photoConroller.getPhotoById)
router.put("/",photoConroller.updatePhoto)
router.delete("/",photoConroller.deletePhoto)

module.exports = router