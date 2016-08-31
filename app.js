require('./instantHello');
var goodbye = require ('./talk/goodbye'); // need to include goodbye as a function name
goodbye();
var talk = require('./talk/');

////
talk.intro();

///function with parameter
talk.hello('virak');
