const mongoose = require('mongoose');
const validator = require('validator');

const userschema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('invalid emial')
            }
        }
    },
    message:{
        type:String,
        require:true
    }

})

exports.Contact=mongoose.model('Contact',userschema);
