const Photo = require("../models/Photo");

const createPhoto = async (req, res) => {
    const { title,imageUrl } = req.body
    if (!imageUrl) {
        return res.status(400).json({ message: 'imageUrl is required' })
    }
    const photo = await Photo.create({title,imageUrl})
    const photos=await Photo.find().lean()

    if (photo) {
        return res.status(201).json({ message: 'New photo created',
            photo:photos
         })
    } else {
        return res.status(400).json({ message: 'Invalid photo ' })
    }
}

const getAllPhotos = async (req,res) => {
    const photos=await Photo.find().lean()
    if(!photos?.length){
        return res.status(400).json({message: 'No photos found'})
    }
    res.json(photos)
}

const getPhotoById = async (req, res) => {
    const {id} = req.params
    const photo = await Photo.findById(id).lean()
    if (!photo) {
    return res.status(400).json({ message: 'No photos found' })
    }
    res.json(photo)
    }

const updatePhoto=async (req,res)=>{
    const {title,imageUrl}=req.body
    if(!id||!imageUrl){
        return res.status(400).json({ message: "id and photoname are required" })
    }
    const photo= await Photo.findById(id).exec()
    if(!photo){
        return res.status(400).json({ message: 'photo not found' })
    }
    photo.title=title
    photo.imageUrl=imageUrl

    const updatedPhoto=await photo.save()
    const photos=await Photo.find().lean()

    res.json(photos)
}

const deletePhoto=async (req,res)=>{
    const {id}=req.body

    if(!id){
        return res.status(400).json({ message: "id is required" })
    }
    const photo = await Photo.findById(id).exec()
    if(!photo){
        return res.status(400).json({ message: 'Photo not found' })
    }

    await photo.deleteOne()
    const photos=await Photo.find().lean()
    if(!photos?.length){
        return res.status(400).json({message: 'No photos found'})
    }
    res.send(`photo ${photo.title} id ${photo.id} deleted`).json(photos)
}
module.exports = {
    createPhoto,
    getAllPhotos,
    getPhotoById,
    updatePhoto,
    deletePhoto
}
    