const express = require('express')
const app = express();
const port = process.env.PORT || 3333
const dotenv = require('dotenv').config()
require('./model/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./storage/'));


const cors = require('cors')
app.use(cors({
    origin: '*'
}))

const cookies = require('cookie-parser');
const { promisify } = require("util");
app.use(cookies());

const authRoute = require('./route/userRoute')
const attractionRoute = require('./route/attractionRoute')
const guideRoute = require('./route/guideRoute')
const galleryRoute = require('./route/galleryRoute')
const questionRoute = require('./route/questionRoute')

app.use("",authRoute);
app.use("",attractionRoute);
app.use("",guideRoute);
app.use("",galleryRoute);
app.use("",questionRoute);

// check the login user
app.use(async (req,res,next)=>{
    const token =  req.cookies.jwtToken 
   try {
     const decryptedResult =  await promisify(jwt.verify)(token,process.env.SECRET_KEY)
     if(decryptedResult){
         res.locals.authenticated = true 
     }else{
          res.locals.authenticated = false 
     }
   } catch (error) {
     res.locals.authenticated = false 
   }
    next()
 })

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})