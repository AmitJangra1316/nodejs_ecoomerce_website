const express = require('express');
const contactcontroller = require('../Controller/contact');
const router = express.Router();

router.post('/contact', contactcontroller.contact);

exports.router = router;