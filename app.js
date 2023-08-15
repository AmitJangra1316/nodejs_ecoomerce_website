const express = require('express');
const { partials } = require('handlebars');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hbs =require('hbs');
const Router = express.Router(); 
const cookieparser = require('cookie-parser');


// path
const authRouter = require('./router/auth');
const contactrouter = require('./router/contact');
const productrouter = require('./router/product');
const clientRouter = require("./router/client");
const staticpath = path.join(__dirname, ('./public'));
const templatepath = path.join(__dirname, ('./templates/views'));
const partialpath=path.join(__dirname,'./templates/partials');
const auth = require('./authmiddle');

// middleware
app.use(express.static(staticpath));
app.use(cookieparser());
app.use(express.static('public'));
app.use(express.urlencoded());
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialpath);
// database

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://jenkincoder:eHrSDbqzvKDy0v3j@cluster0.wxoptfd.mongodb.net/ecommerce?retryWrites=true&w=majority')
    console.log('database connection started');
}

// router

app.use('/auth',authRouter.router);
app.use('/',contactrouter.router);
app.use('/product',auth,productrouter.router);
app.use('/client',auth,clientRouter.router);

app.get('/',(req,res)=>{
    res.render('index')
});


// server

app.listen(3030, () => {
    console.log('server connected');
});

