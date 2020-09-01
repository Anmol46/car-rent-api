
let router = require('express').Router();

router.get('/', function(req, res){
   res.json({
       status: 'API works',
       message: 'Welcome to Car Rental Agency services'
   })
})


//what is the difference between let x = y and var x = y?
var carController = require('./carController')
var userController = require('./userController')

router.route('/car').get(carController.index).post(carController.add)
router.route('/user').get(userController.index).post(userController.add)

router.route('/car/:car_id').get(carController.view).patch(carController.update).put(carController.update).delete(carController.delete)
router.route('/user/:user_id').get(userController.view).patch(userController.update).put(userController.update).delete(userController.delete)

module.exports = router