//initialize express
var express = require('express');
var app = express();
var path = require('path');
//#1
var routes =require('./routes'); //  represents /json-->see index.js

//set port 5000
app.set('port', 8080);


//must put middleware on top of static public pages
app.use(function(req,res,next) {
    console.log(req.method, req.url);
    next();
});


app.use('/', express.static(path.join(__dirname, 'public')));

//#2 :localhost:8080/api/json
app.use('/api', routes);


var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    //console.log("listen to port: " + app.get('port'));
    console.log("listen to port: " + port);
});


