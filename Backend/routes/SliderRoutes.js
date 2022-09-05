const express = require('express');
const router = express.Router();
const SliderController=require('../controllers/SliderControllers')

router.get('/',SliderController.getAllSliders);
router.post('/',SliderController.addSlider);
router.get('/:id',SliderController.getById);
router.put('/:id',SliderController.updateSlider);
router.delete('/:id',SliderController.deleteSlider);



module.exports=router;