const Photos=require('../model/photosSchema')


const getAllPhotos=async(req,res,next)=>{
    let photos;
    try {
        photos=await Photos.find()
    } catch (error) {
        console.log(error);
    }
    if(!photos){
        return res.status(404).json({message:'No photos found..!'})
    }
    else{
        return res.status(200).json({photos})
    }
}

const addPhoto=async(req,res,next)=>{
    const{image} = req.body;
    let photo;
    try {
        photo=new Photos({
            image
        })
        await photo.save();
    } catch (error) {
        console.log(error);
    }
    if(!photo){
        return res.status(500).json({message:'Unable to Add..!'})
    }
    else{
        return res.status(201).json({photo})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let photo;
    try {
        photo=await Photos.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!photo){
        return res.status(404).json({message:'No photo found..!'})
    }
    else{
        return res.status(200).json({photo})
    }
}

const updatePhotos=async(req,res,next)=>{
    const id=req.params.id;
    const{image} = req.body;
    let photo;
    try {
        photo=await Photos.findByIdAndUpdate(id,{
            image
        })
        photo=await photo.save();
    } catch (error) {
        console.log(error);
    }
    if(!photo){
        return res.status(404).json({message:'Unable to Update..!'})
    }
    else{
        return res.status(200).json({photo})
    }
}
const deletePhoto=async(req,res,next)=>{
    const id=req.params.id;
    let photo;
    try {
        photo=await Photos.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!photo){
        return res.status(404).json({message:'Unable to delete..!'})
    }
    else{
        return res.status(200).json({photo})
    }
}


exports.getAllPhotos=getAllPhotos;
exports.addPhoto=addPhoto;
exports.getById=getById;
exports.updatePhotos=updatePhotos;
exports.deletePhoto=deletePhoto;