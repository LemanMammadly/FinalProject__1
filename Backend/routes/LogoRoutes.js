const express = require('express');
const router = express.Router();
const LogoController=require('../controllers/LogoController')

router.get('/',LogoController.getAllLogo)
router.put('/:id',LogoController.updateLogo)
router.get('/:id',LogoController.getById)

module.exports=router;