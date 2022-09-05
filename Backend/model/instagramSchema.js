const mongoose=require('mongoose')

const instagramSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Instagram',instagramSchema)
