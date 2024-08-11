exports.errorHandler = (fn)=>{
    return(req,res)=>{
        fn(req,res).catch((err)=>{
            return res.status(500).json({
                message: "server/internal error",
                errMessage: err.message
            })
        })
    }
}