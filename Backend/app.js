const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const port = 5000;
const settingRouter=require('./routes/settingRoutes')
const sliderRouter=require('./routes/SliderRoutes')
const photosRouter=require('./routes/photosRoutes')
const cardRouter=require('./routes/cardRoutes')
const instagramRouter=require('./routes/instagramRoutes')
const logoRouter=require('./routes/LogoRoutes')


const app = express();


app.use(cors())
app.use(express.json())
app.use('/setting',settingRouter)
app.use('/slider',sliderRouter)
app.use('/photos',photosRouter)
app.use('/card',cardRouter)
app.use('/instagram',instagramRouter)
app.use('/logo',logoRouter)

mongoose.connect("mongodb+srv://Laman:rBd8q8Tq2iwWIUZC@cluster0.m9czfiv.mongodb.net/FinalProject?retryWrites=true&w=majority")
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(port)
})
.catch((err) => console.log(err))