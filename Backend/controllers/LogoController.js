const Logo=require('../model/LogoSchema')



const getAllLogo=async(req,res,next)=>{
    let logos;
    try {
        logos=await Logo.find()
    } catch (error) {
        console.log(error);
    }
    if(!logos){
        return res.status(404).json({message:'No logos found..!'})
    }
    else{
        return res.status(200).json({logos})
    }
}

const updateLogo = async (req,res,next) => {
    const id = req.params.id;
    const {logo} = req.body;
    let logos;
    try {
        logos = await Logo.findByIdAndUpdate(id, {
            logo
        })
        logos = await logos.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!logos) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({logos})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let logos;
    try {
        logos=await Logo.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!logos){
        return res.status(404).json({message:'No logo found..!'})
    }
    else{
        return res.status(200).json({logos})
    }
}

exports.getAllLogo=getAllLogo;
exports.updateLogo=updateLogo;
exports.getById=getById;