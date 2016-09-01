//initialize express
var express = require('express');
var app = express();
var path = require('path');
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


app.use('/', express.static(path.join(__dirname, 'public')));

//#2 : specify middle folder bettween root and ./api/routes/index.js
//after route successfully to the index.js, the index.js will call the controller hotel-controllers.js
app.use('/api', routes); // /api will represents api/routes


var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    //console.log("listen to port: " + app.get('port'));
    console.log("listen to port: " + port);
});


