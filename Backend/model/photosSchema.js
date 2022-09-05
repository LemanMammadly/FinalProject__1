const mongoose = require('mongoose')

const photosSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Photos',photosSchema)