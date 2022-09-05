const mongoose = require('mongoose')

const settingsSchema=new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    icon1:{
        type:String,
        required:true
    },
    icon2:{
        type:String,
        required:true
    },
    icon3:{
        type:String,
        required:true
    },
    icon4:{
        type:String,
        required:true
    },
    icon5:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Settings',settingsSchema)