const express = require('express')
const { createPost, getPhotos, getVideos } = require('../controller/galleryController')
const { isAuthenticated } = require('../middleware/isAuthenticated')
const router = express.Router()

const {multer,storage}= require('../middleware/multerConfig');
const upload = multer({ storage:storage})

router.route("/gallery").post(isAuthenticated,upload.single('image'),createPost)
router.route("/gallery/photos").get(getPhotos)
router.route("/gallery/videos").get(getVideos)

module.exports = router