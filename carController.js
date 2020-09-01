Car = require('./carModel');



//Find out why was exports.index(()=>{} giving problem?
exports.index = function(req, res){
                    
    Car.get(function(err, car){
        if(err)
        res.json({
            status: "error",
            message: err
        })

        res.json({
            status: "successfull",
            message: "Car details succesfully retreived",
            data: car
        })
    });
}


exports.add = function(req, res){
    var car = new Car();
    car.name = req.body.name ? req.body.name : car.name;
    car.brand = req.body.brand;
    car.price = req.body.price;
    car.capacity = req.body.capacity;


    car.save(function(err){
        if(err)
        res.json(err);
        console.log

        res.json({
            status: "successfull",
            message: "Successfully added new car details"
        })

    })

}


exports.view = function(req, res){
    Car.findById(req.params.car_id, function(err, car){
        if(err)
        res.send(err)

        res.json({
            status: "Car details",
            message: car
        })
    })

}


exports.update = function(req, res){
    console.log(req.params.car_id);
    Car.findById(req.params.car_id, function(err, car){
        if(err)
        res.send(err);

        car.name = req.body.name;
        car.price = req.body.price;
        car.brand = req.body.brand;
        car.capacity = req.body.capacity;

        car.save(function(err){

            if(err)
            res.send(err)

            res.json({
                status:"Car details updated successfully",
                message: car
            })
        })
    })
}


exports.delete = function(req, res){
    Car.deleteOne({
        _id: req.params.car_id
    }, function(err, contact){
        if(err)
        res.send(err)

        res.json({
            status: "success",
            message:"Car ad deleted"
        })
    }
    )
}
