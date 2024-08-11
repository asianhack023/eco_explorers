const express = require('express')
const { isAuthenticated } = require('../middleware/isAuthenticated')
const router = express.Router()

const {multer,storage}= require('../middleware/multerConfig');
const upload = multer({ storage:storage})
const { registerGuide, getAllGuides, getSingleGuide } = require('../controller/guideController');

router.route("/guide").get(getAllGuides).post(isAuthenticated,upload.single('image'),registerGuide)
router.route("/guide/:id").get(getSingleGuide)
module.exports = router