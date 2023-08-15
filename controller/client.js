
const model = require('../models/client');
const Client = model.Client;



exports.addclient = async(req,res)=>{
    const client = new Client(req.body);
    await client.save();
    res.render('client');
}
exports.allclient = async (req,res)=>{
    const client = await Client.find();
    res.render('client', { client });
}

exports.client = (req,res)=>{
    res.render('addclient');
}

exports.deleteclient = async(req,res)=>{
    const id = req.params.id;
    await Client.findByIdAndRemove(id);
    res.render('client');
}