const express = require('express');
const router = express.Router();
const photosController=require('../controllers/photosController')

router.get('/',photosController.getAllPhotos);
router.post('/',photosController.addPhoto);
router.get('/:id',photosController.getById);
router.put('/:id',photosController.updatePhotos);
router.delete('/:id',photosController.deletePhoto);



module.exports=router;