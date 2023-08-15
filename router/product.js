const express = require('express');
const productcontroller = require('../Controller/product');
const router = express.Router();

router.get('/',productcontroller.allproduct);
router.get('/add',productcontroller.product);
router.post('/add',productcontroller.addproduct);
router.delete('/:id',productcontroller.deleteproduct);


exports.router = router;