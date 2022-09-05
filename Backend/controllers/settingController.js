const Setting=require('../model/settingsSchema')



const getAllSettings=async(req,res,next)=>{
    let settings;
    try {
        settings=await Setting.find()
    } catch (error) {
        console.log(error);
    }
    if(!settings){
        return res.status(404).json({message:'No setting found..!'})
    }
    else{
        return res.status(200).json({settings})
    }
}

const updatesetting = async (req,res,next) => {
    const id = req.params.id;
    const {phone,icon1,icon2,icon3,icon4,icon5} = req.body;
    let settings;
    try {
        settings = await Setting.findByIdAndUpdate(id, {
            phone,
            icon1,
            icon2,
            icon3,
            icon4,
            icon5
        })
        settings = await settings.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!settings) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({settings})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let settings;
    try {
        settings=await Setting.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!settings){
        return res.status(404).json({message:'No setting found..!'})
    }
    else{
        return res.status(200).json({settings})
    }
}


const deleteSettings=async(req,res,next)=>{
    const id=req.params.id;
    let setting;
    try {
        setting=await Setting.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!setting){
        return res.status(404).json({message:'Unable to delete..!'})
    }
    else{
        return res.status(200).json({setting})
    }
}


exports.getAllSettings=getAllSettings;
exports.updatesetting=updatesetting;
exports.getById=getById;
exports.deleteSettings=deleteSettings;