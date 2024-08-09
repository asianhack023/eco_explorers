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


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})