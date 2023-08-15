const async = require('hbs/lib/async');
const model = require('../models/contact');
const Contact = model.Contact;


exports.contact=async(req, res) => {
    const data = new Contact(req.body);
    await data.save();
    res.render('index')
}
