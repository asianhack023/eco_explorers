const express = require('express')
const { handleRegister, handleLogin, handleLogout, deleteUser } = require('../controller/userController')
const router = express.Router()

const {multer,storage}= require('../middleware/multerConfig');
const { isAuthenticated } = require('../middleware/isAuthenticated');
const upload = multer({ storage:storage})

router.route("/register").post(upload.single('image'),handleRegister)
router.route("/login").post(handleLogin)
router.route("/logout").post(isAuthenticated,handleLogout)
router.route("/delete").delete(isAuthenticated,deleteUser)

module.exports = router