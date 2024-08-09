const express = require('express')
const app = express();
const port = process.env.PORT || 3333
const dotenv = require('dotenv').config()


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})