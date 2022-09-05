const Slider=require('../model/SliderSchema')


const getAllSliders=async(req,res,next)=>{
    let sliders;
    try {
        sliders=await Slider.find()
    } catch (error) {
        console.log(error);
    }
    if(!sliders){
        return res.status(404).json({message:'No sliders found..!'})
    }
    else{
        return res.status(200).json({sliders})
    }
}

const addSlider=async(req,res,next)=>{
    const{title,description,image} = req.body;
    let slider;
    try {
        slider=new Slider({
            title,
            description,
            image
        })
        await slider.save();
    } catch (error) {
        console.log(error);
    }
    if(!slider){
        return res.status(500).json({message:'Unable to Add..!'})
    }
    else{
        return res.status(201).json({slider})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let slider;
    try {
        slider=await Slider.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!slider){
        return res.status(404).json({message:'No slider found..!'})
    }
    else{
        return res.status(200).json({slider})
    }
}

const updateSlider = async (req,res,next) => {
    const id=req.params.id;
    const {title,description,image} = req.body;
    let sliders;    
    try {
        sliders = await Slider.findByIdAndUpdate(id, {
            title,
            description,
            image
        })
        sliders = await sliders.save();
    } 
    catch (error) {
        console.log(error);
    }
    if(!sliders) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
        return res.status(200).json({sliders})
    }
}

const deleteSlider=async(req,res,next)=>{
    const id=req.params.id;
    let slider;
    try {
        slider=await Slider.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!slider){
        return res.status(404).json({message:'Unable to delete..!'})
    }
    else{
        return res.status(200).json({slider})
    }
}


exports.getAllSliders=getAllSliders;
exports.addSlider=addSlider;
exports.getById=getById;
exports.updateSlider=updateSlider;
exports.deleteSlider=deleteSlider;