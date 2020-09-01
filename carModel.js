
var mongoose = require('mongoose')

var carSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    brand:{
        type: String,
        required: true
    },

    price:{
        type: String,
        required: true
    },

    capacity:{
        type: String,
        required:true
    }
});


var Car = module.exports = mongoose.model('car',carSchema);

module.exports.get = function(callback, limit){
    Car.find(callback).limit(limit);
}
//module.exports = car;

