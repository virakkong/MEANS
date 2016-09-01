//open connection to database
require('./api/data/dbconnection.js').open();

//initialize express
var express = require('express');
var app = express();
var path = require('path');
var bodyParser=require('body-parser');
//#1
//api/routes
var routes =require('./api/routes'); //  localhost:8080/api/routes

//set port 8080
app.set('port', 8080);


//must put middleware on top of static public pages
app.use(function(req,res,next) {
    console.log(req.method, req.url);
    next();
});

//test 

app.use('/', express.static(path.join(__dirname, 'public')));
//make sure the middle ware run between static and api
//we want it run before api, aka route

app.use(bodyParser.urlencoded({extened: true}));
//set to false mean we need only string and array for our body for post form
//set to true-->access all data type


app.use('/api', routes); // /api will represents api/routes


var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    //console.log("listen to port: " + app.get('port'));
    console.log("listen to port: " + port);
});


