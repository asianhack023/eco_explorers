const express = require('express')
const { handleRegister, handleLogin } = require('../controller/userController')
const router = express.Router()

const {multer,storage}= require('../middleware/multerConfig');
const upload = multer({ storage:storage})

router.route("/register").post(upload.single('image'),handleRegister)
router.route("/login").post(handleLogin)

module.exports = router