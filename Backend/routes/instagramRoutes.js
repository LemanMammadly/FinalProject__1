const express = require('express');
const router = express.Router();
const instagramController=require('../controllers/instagramController')

router.get('/',instagramController.getAllIntagrams);
router.post('/',instagramController.addInstagram);
router.get('/:id',instagramController.getById);
router.put('/:id',instagramController.updateInstagram);
router.delete('/:id',instagramController.deleteInstagram);



module.exports=router;