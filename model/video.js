const mongoose = require("mongoose")

const VideoSchema = mongoose.Schema({
    VideoName:{
        type:String,
       
    },
    file:{
        type:String,
        
    },
},{
timestamps:true
})
module.exports = mongoose.model("Video",VideoSchema)