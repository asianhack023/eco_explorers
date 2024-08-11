const { attractions } = require("../model")

exports.createAttraction = async(req,res)=>{
    try {
        const { name,description,location, difficulty,reviews} = req.body
        let image
        if(req.file){
            image = req.file.filename
        }else{
            image = ''
        }
        if( !name || !description || !location || !difficulty){
            return res.status(400).json({
                message: "Please fill in all fields"
            })
        }
        const attraction = await attractions.create({
            name,
            description,
            location,
            difficulty,
            reviews,
            rating,
            media_url: image

        })
        res.status(200).json({
            message: "Attraction created successfully",
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getAttraction = async (req, res) => {
    try {
        const attraction = await attractions.findAll({
            order: [['rating', 'DESC']]
        });
        
        if (attraction.length > 0) {
            res.status(200).json({
                attractions: attraction
            });
        } else {
            res.status(400).json({
                message: "No attractions found"
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occurred while fetching attractions"
        });
    }
};


exports.getSingleAttraction = async(req,res)=>{
    try {
        const id = req.params.id
    const [singleAttraction] = await attractions.findAll({
        where:{
            id
        }
    })
    if(singleAttraction){
        res.status(200).json({
            attraction: singleAttraction
            })
            }else{
                res.status(400).json({
                    message: "no attraction"
                    })
                }
    } catch (error) {
        res.status(500).json({
            message: "server error"
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