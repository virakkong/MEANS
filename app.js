//initialize express
var express = require('express');
var app = express();
var path = require('path');
//set port 5000
app.set('port', 8080);

//express will check to see if any static file in public and direct the file to public

///Technique 1: http://localhost:3000/index.html
//app.use(express.static(path.join(__dirname, 'public')));

///Technique 2: http://localhost:3000/public/index.html
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/json', function(req,res){
   console.log("Get the json");
    //send back
   res 
       .status(200)
       .json( {'jsonData': true} );
});

//when we request /file it will reload to app.js (result is in html only, not the result)
app.get('/file', function(req,res){
   console.log("Get the File");
    //send back
   res 
       .status(200)
        //pass the path by finding the path using join
        //__dirname is standard node variable
       .sendFile(path.join(__dirname,'app.js'));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    //console.log("listen to port: " + app.get('port'));
    console.log("listen to port: " + port);
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