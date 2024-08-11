const express = require('express')
const { getAttraction, createAttraction, getSingleAttraction, deleteAttraction } = require('../controller/attractionController')
const { isAuthenticated, isAdmin } = require('../middleware/isAuthenticated')
const router = express.Router()
const {multer,storage}= require('../middleware/multerConfig');
const upload = multer({ storage:storage})

router.route("/attraction").get(getAttraction).post(upload.single('image'),createAttraction)
router.route('/attraction/:id').get(getSingleAttraction).delete(isAuthenticated,isAdmin,deleteAttraction)
module.exports = router