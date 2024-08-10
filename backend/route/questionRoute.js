const express = require('express')
const { isAuthenticated } = require('../middleware/isAuthenticated')
const router = express.Router()
const {multer,storage}= require('../middleware/multerConfig');
const { createMessage, getLoginUserMsg, getOthersMsg } = require('../controller/questionController');
const upload = multer({ storage:storage})

router.route("/message").get(isAuthenticated,getOthersMsg).post(isAuthenticated,upload.single('image'),createMessage)
router.route("/message/loggedInUser").get(isAuthenticated,getLoginUserMsg)
module.exports = router