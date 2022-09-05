const Card=require('../model/cardSchema')


const getAllCards=async(req,res,next)=>{
    let cards;
    try {
        cards=await Card.find()
    } catch (error) {
        console.log(error);
    }
    if(!cards){
        return res.status(404).json({message:'No cards found..!'})
    }
    else{
        return res.status(200).json({cards})
    }
}

const addCard=async(req,res,next)=>{
    const{image,title,price} = req.body;
    let card;
    try {
        card=new Card({
            image,
            title,
            price
        })
        await card.save();
    } catch (error) {
        console.log(error);
    }
    if(!card){
        return res.status(500).json({message:'Unable to Add..!'})
    }
    else{
        return res.status(201).json({card})
    }
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let card;
    try {
        card=await Card.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!card){
        return res.status(404).json({message:'No card found..!'})
    }
    else{
        return res.status(200).json({card})
    }
}

const updateCard=async(req,res,next)=>{
    const id=req.params.id;
    const{image,title,price} = req.body;
    let card;
    try {
        card=await Card.findByIdAndUpdate(id,{
            image,
            title,
            price
        })
        card=await card.save();
    } catch (error) {
        console.log(error);
    }
    if(!card){
        return res.status(404).json({message:'Unable to Update..!'})
    }
    else{
        return res.status(200).json({card})
    }
}
const deleteCard=async(req,res,next)=>{
    const id=req.params.id;
    let card;
    try {
        card=await Card.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if(!card){
        return res.status(404).json({message:'Unable to delete..!'})
    }
    else{
        return res.status(200).json({card})
    }
}


exports.getAllCards=getAllCards;
exports.addCard=addCard;
exports.getById=getById;
exports.updateCard=updateCard;
exports.deleteCard=deleteCard;