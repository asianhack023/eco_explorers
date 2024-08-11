const { gallerys } = require("../model")

exports.createPost = async(req,res)=>{
    const {caption} = req.body
    let image
    if(req.file){
        image = req.file.filename
    }else{
        image = ""
    }
    console.log(req.file)
    const userId = req.userId
    let media_type
    if(req.file.mimetype = 'image/png' || 'image/jpg' || 'image/jpeg'){
        media_type = 'photos'
    }
    if(req.file.mimetype = 'video/mp4'){
        media_type = 'videos'
    }
    const post = await gallerys.create({
        caption,
        media_type,
        media_url:image,
        userId
    })
    if(!post){
        return res.status(400).json({message:"Failed to create post"})
    }
    res.status(201).json({message:"Post created successfully", post})

}

exports.getPhotos = async(req,res)=>{
    const userId = req.userId
    const photos = await gallerys.findAll({
        where:{
            media_type:'photos'
        }
    })
    if(photos.length == 0){
        return res.status(404).json({message:"No photos found"})
    }
    res.status(200).json({message:"Photos found successfully", photos})
}

exports.getVideos = async(req,res)=>{
    const userId = req.userId
    const videos = await gallerys.findAll({
        where:{
            media_type: 'videos'
        }
    })
    if(videos.length ==0){
        return res.status(404).json({message:"No videos found"})
    }
    res.status(200).json({message:"Videos found successfully", videos})
}

exports.deletegalleryItem = async(req,res)=>{
    const userId = req.userId
    const id = req.params.id 
    await gallerys.destroy({
        where:{
            id,
            userId
        }
    })
    if(!gallerys){
        return res.status(404).json({message:"Gallery item not found"})
        }
        res.status(200).json({
            message: "deleted successfully"
        })
}