
let express = require('express');

let app = express();

let mongoose = require('mongoose');

var port = process.env.PORT || 8081

let bodyparser = require('body-parser');

const { urlencoded } = require('body-parser');

app.use(bodyparser.urlencoded(
    {
       extended: true 
    }))

app.use(bodyparser.json());

var apiRoutes = require('./routes');
//dont forget this
app.use('/api', apiRoutes);


const dbPath = "mongodb://localhost/carrentalagencypractice"
const options = {useNewUrlParser:true, useUnifiedTopology:true}
const mongo = mongoose.connect(dbPath,options)

mongo.then(()=>{
    console.log('Connected to mongodb')
} ,error=> {console.log(error,'error')})


app.use('/', function(req, res){
    res.send('Welcome to Car Rental Agency')
});


app.listen(port, ()=>{
    console.log('Running on port '+port)
});

