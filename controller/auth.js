const model= require('../models/auth');
const User = model.User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.login =async(req, res) => {
    const doc = await User.findOne({ email: req.body.email });
    const isauth = bcrypt.compare(req.body.password, doc.password);
    const token = jwt.sign({ email: req.body.email }, 'shhhhh');

    res.cookie('jwt', token, {
        httpOnly: true,
    });
    
    doc.token = token;
    await doc.save();

    if (isauth) {
        res.render('index');
    } else {
        res.sendStatus(401);
    }
};


exports.readlogin = (req,res)=>{
    res.render('login');
}

exports.readsignup = (req,res)=>{
    res.render('signup');
}

exports.signup = async(req,res)=>{
    const user = new User(req.body);
    const token = jwt.sign({ email: req.body.email }, 'shhhhh');
    const hash = bcrypt.hashSync(req.body.password, 10);
    user.token = token;
    user.password = hash;
    res.cookie('jwt', token, {
        httpOnly: true,
    });
    await user.save();
    res.render('login');
}

exports.logout =async (req,res)=>{
    try{
    res.clearCookie('jwt');
    req.user.token = null;
    console.log('logout successfull');
    await  req.user.save();
    res.render('index');
    }catch(error){
        console.log(error);
    }
}
