const jwt = require('jsonwebtoken')
const {promisify} = require('util');
const { users } = require('../model');

exports.isAuthenticated = async(req,res,next)=>{
    try {
        const token = req.cookies.jwtToken;
    if(!token || token === null || token === undefined){
        return res.status(400).json({
            message: "token not provided"
        })
    }
   const decryptedResult = await promisify(jwt.verify)(token,process.env.SECRET_KEY)
    console.log(decryptedResult)
    const data = await users.findByPk(decryptedResult.id)
    if(!data){
       res.status(400).json({
        message: "not valid user"
       })
    }
    req.userId = data.id
    req.userName = data.username
    next()
    } catch (error) {
        console.log(error)
    }
}

exports.isAdmin = async (req, res, next) => {
    try {
        if (!req.userId) {
            return res.status(401).json({
                message: "Not authenticated"
            });
        }

        const user = await users.findByPk(req.userId);
        if (user.email !== 'aashisrijal252@gmail.com') {
            return res.status(403).json({
                message: "Access denied: Admins only"
            });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};