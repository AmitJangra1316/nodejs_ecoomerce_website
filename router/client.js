const clientcontroller  = require('../controller/client');
const express = require('express');
const router = express.Router();

router.get('/',clientcontroller.allclient);
router.post('/add',clientcontroller.addclient);
router.get('/add',clientcontroller.client);
router.delete('/:id',clientcontroller.deleteclient);

exports.router = router;
