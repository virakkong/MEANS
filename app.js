//initialize express
var express = require('express');
var app = express();
//set port 5000
app.set('port', 8888);
//it run asynchronously
//listen to port 8888
//app.listen(8888);
//If want to stop listen to port:
    //1. ps -ax | grep node
    //2. kill -9 PID

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    //console.log("listen to port: " + app.get('port'));
    console.log("listen to port: " + port;
});


require('./instantHello');




var goodbye = require ('./talk/goodbye'); // need to include goodbye as a function name
goodbye();
var talk = require('./talk/');

////
talk.intro();

///function with parameter
talk.hello('virak');


//call function name in a module
var question = require('./talk/question');
var answer = question.ask('what is your Name?');
console.log(answer);