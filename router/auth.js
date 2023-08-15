const authcontroller  = require('../controller/auth');
const express = require('express');
const router = express.Router();
const auth = require('../authmiddle');

router.post('/signup',authcontroller.signup );
router.get('/signup',authcontroller.readsignup );
router.post('/login',authcontroller.login );
router.get('/login',authcontroller.readlogin);
router.get('/logout',auth,authcontroller.logout);

exports.router=router; 