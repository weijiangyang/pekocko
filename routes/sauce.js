const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
// const sauce = require('../controllers/sauce');

router.post('/',auth,multer, sauceCtrl.createSauce );

router.get('/',auth, sauceCtrl.getAllSauces);

router.get('/:id',auth, sauceCtrl.getOneSauce);

router.put('/:id',auth,multer,sauceCtrl.modifierSauce);

router.delete('/:id',auth,sauceCtrl.deleteSauce);

router.post('/:id/like', auth, sauceCtrl.likeSauce);
module.exports = router;

