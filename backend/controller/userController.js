const { users } = require("../model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const sendEmail = require("../services/sendMail");

exports.handleRegister = async(req,res)=>{
    const {username,email,password} = req.body;
    let image
    if(req.file){
        image = req.file.filename
    }else{
        image = ''
    }
    
    const [existingUser] = await users.findAll({
        where:{
        email
}});
    if(existingUser){
        return res.status(400).json({message:"Email already in use"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await users.create({
            username,
            email,
            password:hashedPassword,
            imageUrl:image
            });
            // mail send
            sendEmail({
                email,
                subject: "Registered Successfully",
                text: `Dear ${username}
                you are new member of the NEPTOUR`
            })

            res.status(201).json({message:"User created successfully"});
}

//login
exports.handleLogin = async(req,res)=>{
    const {email,password} = req.body;
    const [user] = await users.findAll({
        where:{
            email
        }
    });
    if(!user){
        return res.status(400).json({message:"Invalid email or password"});
        }
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            return res.status(400).json({message:"Invalid email or password"});
            }
            // store the user into token
            const token = jwt.sign({id:user.id},process.env.SECRET_KEY,{
                expiresIn:'30d'})
                console.log(process.env.SECRET_KEY)
                res.cookie("jwtToken",token)
               
            res.status(200).json({
                message:"Login successful",
                user,
                token
            });

}

exports.handleLogout = (req,res)=>{
    res.clearCookie("jwtToken")
    res.status(200).json({message:"Logged out successfully"});

}
