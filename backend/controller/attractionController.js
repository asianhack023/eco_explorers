const { attractions } = require("../model")

exports.createAttraction = async(req,res)=>{
    try {
        const { name,description,location, difficulty} = req.body
        let media
        if(req.file){
            media = req.file.filename
        }else{
            media = ''
        }
        if(!name || !description || !location || !difficulty){
            return res.status(400).json({
                message: "Please fill in all fields"
            })
        }
        const attraction = await attractions.create({
            name,
            description,
            location,
            difficulty,
            media_url: media

        })
        res.status(200).json({
            message: "Attraction created successfully",
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getAttraction = async (req,res)=>{
    try {
        const attraction = await attractions.findAll();
        if(attraction[0].length > 0){
        res.status(200).json({
            attractions: attraction
        })
    }else{
        res.status(400).json({
            message: "no attraction"
        })
    }

    } catch (error) {
        console.log(error)
        
    }
}

exports.getSingleAttraction = async(req,res)=>{
    const id = req.params.id
    const [singleAttraction] = await attractions.findAll({
        where:{
            id
        }
    })
    if(singleAttraction.length > 0){
        res.status(200).json({
            attraction: singleAttraction
            })
            }else{
                res.status(400).json({
                    message: "no attraction"
                    })
                }
}

exports.deleteAttraction = async(req,res)=>{
    try {
        const id = req.params.id
        const [singleAttraction] = await attractions.destroy({
            where:{
                id,
                
            }
            }) 
    } catch (error) {
        console.log(error)
        
    }

}