const { guides, users } = require("../model");
const sendEmail = require("../services/sendMail");

exports.registerGuide = async(req,res)=>{
 try {
    const {bio,language_spoken,availability,location} = req.body;
    const userId = req.userId
    let identity;
    if(req.files){
        identity= req.file.filename
       
    }else{
        identity = ""
    }
    if(!userId){
        return res.status(401).json({message: "Unauthorized"})
    }
    const [isGuide] = await guides.findAll({
        where:{
            userId
        }
    })
    if(isGuide){
        return res.status(400).json({
            message:"you are already register as a guide"
        })
    }
    const newGuide = await guides.create({
        bio,
        language_spoken,
        availability,
        location,
        identity,
        userId
    })

   const guideUser = await guides.findOne({
    where:{
        userId
    },
    include:[
        {
            model: users
        }
    ]
   })
   console.log("guideUser",guideUser)
   // mail send
   sendEmail({
    email: guideUser.user.email,
    subject: "Registered as Guide",
    text: `Dear ${guideUser.user.username}
    you are Register as  guide in  the NEPTOUR`
})
    if(!newGuide){
        res.status(400).json({
            message: "error in register"
        })
    }
    res.status(201).json({
        message: "Guide created successfully",
         newGuide
        })
 } catch (error) {
    console.log(error)
 }

}

exports.getAllGuides = async(req,res)=>{
    try {
        const guide = await guides.findAll({
            order: [['rate', 'DESC']],
            include:[
                {
                    model: users
                }
            ]
        })
        if(guide.length == 0){
            return res.status(400).json({
                message: "no guides"
            })
        }
        res.status(200).json({
            message: "all guides",
            guide
            })
        
    } catch (error) {
        console.log(error)
    }
}

exports.getSingleGuide = async(req,res)=>{
    const id = req.params.id
    const [guide] = await guides.findAll({
        where:{
            id
        },
        include:[
            {
                model: users
                }
                ]
    })
    if(!guide){
        return res.status(400).json({
            message: "no guide found"
            })
    }
    res.status(200).json({
        message: "single guide",
        guide
        })
}