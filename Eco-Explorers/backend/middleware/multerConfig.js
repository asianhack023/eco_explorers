const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        const allowedFileType = [
            "image/png",
            "image/jpg",
            "image/jpeg",
            "video/mp4",
            "video/avi",
            "video/mkv",
            "video/webm"
        ];
        
        if (!allowedFileType.includes(file.mimetype)) {
            cb(new Error("Only .png, .jpg, .jpeg, .mp4, .avi, .mkv, and .webm formats are allowed!"), false);
            return;
        }
        cb(null,'./storage'); 
    },
    filename: function(req,file,cb){
        const date = Date.now();
        cb(null,date + "-" + file.originalname);
    }

})

module.exports ={
    multer,
    storage
}