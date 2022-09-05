const express = require('express');
const router = express.Router();
const settingController=require('../controllers/settingController')

router.get('/',settingController.getAllSettings)
router.put('/:id',settingController.updatesetting)
router.get('/:id',settingController.getById)
router.delete('/:id',settingController.deleteSettings)

module.exports=router;