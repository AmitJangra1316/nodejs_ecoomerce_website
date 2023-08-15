const async = require('hbs/lib/async');
const model = require('../models/product');
const Product = model.Product;

exports.addproduct=async(req,res)=>{
    const data = new Product(req.body);
    await data.save();
    const products = await Product.find();
    res.render('product', { products });
}

exports.allproduct=async(req,res)=>{
    const products = await Product.find();
    res.render('product', { products });
}

exports.product= (req,res)=>{
    res.render('addproduct');
}

exports.deleteproduct = async (req, res) => {
    const id = req.params.id;
    await Product.findByIdAndRemove(id);
    res.render('product');
};
