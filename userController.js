User = require("./userModel");




exports.index = function(req, res){
    User.get(function(err, user){
    if(err)
    res.send(err)

    res.json({
        status: "Got all user details successfully",
        message: user
    })
})
}

exports.add = function(req, res){
User.add(function(err, user){
    var user = new User()

    if(err)
    res.send(err)

    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email;
    user.address = req.body.address;
    user.phone = req.body.phone;

    res.json({
        status: "User details are successfully added",
        message: user
    })
})
}


exports.view = function(req, res){
    User.findByID(req.params.user_id, function(err, user){
        if(err)
        res.send(err)

        res.json({
            status: "Successfully retreived user details",
            message: user
        })
    })
}

exports.update = function(req, res){
    User.findById(req.params.user_id, function(err, user){
        if(err)
        res.send(err)

        user.name = req.body.name? req.body.name: user.name;
        user.email = req.body.email;
        user.address = req.body.address;
        user.phone = req.body.phone;

        user.save(function(req, res){
            if(err)
            res.send(err)
    
            res.json({
                status: "User details updated successfully",
                message: user
            })
        })
    }
    )
}



exports.delete = function(req, res){
    User.deleteOne(req.params.user_id, function(err, user){
        if(err)
        res.send(err)
        
        res.json({
            status: "success",
            message: "The user account has been deleted"
        })
    })
}