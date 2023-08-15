const mongoose = require('mongoose');


const usersch = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true
    }
})

exports.Client=mongoose.model('Client',usersch);

