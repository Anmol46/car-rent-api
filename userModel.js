
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    }
})

//Very important

var User = module.exports = mongoose.model('user', userSchema)

module.exports.get = function(callback, limit){
    User.find(callback).limit(limit);
}

//module.exports = user