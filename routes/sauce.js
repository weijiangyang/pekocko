const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');

router.post('/',auth, sauceCtrl.createSauce );

router.get('/',auth, sauceCtrl.getAllSauces);

router.get('/:id',auth, sauceCtrl.getOneSauce);

router.put('/:id',auth,sauceCtrl.modifierSauce);

router.delete('/:id',auth,sauceCtrl.deleteSauce);

module.exports = router;

