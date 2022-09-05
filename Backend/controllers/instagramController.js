const Instagram=require('../model/instagramSchema')


const getAllIntagrams=async(req,res,next)=>{
    let instagrams;
    try {
        instagrams=await Instagram.find()
    } catch (error) {
        console.log(error);
    }
    if(!instagrams){
        return res.status(404).json({message:'No instagrams found..!'})
    }
    else{
        return res.status(200).json({instagrams})
    }
}

const addInstagram=async(req,res,next)=>{
    const{image,message,user} = req.body;
    let instagram;
    try {
        instagram=new Instagram({
            image,
            message,
            user
        })
        await instagram.save();
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(500).json({message:'Unable to Add..!'})
    }
    else{
        return res.status(201).json({instagram})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let instagram;
    try {
        instagram=await Instagram.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(404).json({message:'No instagram found..!'})
    }
    else{
        return res.status(200).json({instagram})
    }
}

const updateInstagram=async(req,res,next)=>{
    const id=req.params.id;
    const{image,message,user} = req.body;
    let instagram;
    try {
        instagram=await Instagram.findByIdAndUpdate(id,{
            image,
            message,
            user
        })
        instagram=await instagram.save();
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(404).json({message:'Unable to Update..!'})
    }
    else{
        return res.status(200).json({instagram})
    }
}
const deleteInstagram=async(req,res,next)=>{
    const id=req.params.id;
    let instagram;
    try {
        instagram=await Instagram.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!instagram){
        return res.status(404).json({message:'Unable to delete..!'})
    }
    else{
        return res.status(200).json({instagram})
    }
}


exports.getAllIntagrams=getAllIntagrams;
exports.addInstagram=addInstagram;
exports.getById=getById;
exports.updateInstagram=updateInstagram;
exports.deleteInstagram=deleteInstagram;